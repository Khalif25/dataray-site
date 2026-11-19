import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function proxy(request: NextRequest) {
  const isAccountPage = /^\/academy\/(login|register|forgot-password|reset-password)(?:\/|$)/.test(request.nextUrl.pathname);
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  let authSources = "";
  try {
    const origin = new URL(process.env.NEXT_PUBLIC_SUPABASE_URL ?? "").origin;
    authSources = `${origin} ${origin.replace(/^https:/, "wss:").replace(/^http:/, "ws:")}`;
  } catch { /* Missing configuration is handled below without weakening CSP. */ }
  const csp = `default-src 'self'; script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : ""}; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' ${authSources}; form-action 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'`;
  if (isAccountPage) {
    request.headers.set("x-nonce", nonce);
    request.headers.set("Content-Security-Policy", csp);
  }
  let response = NextResponse.next({
    request: { headers: request.headers },
  });

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    if (isAccountPage) {
      response.headers.set("Content-Security-Policy", csp);
      response.headers.set("Cache-Control", "private, no-store");
    }
    return response;
  }

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );

          response = NextResponse.next({
            request: { headers: request.headers },
          });

          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  await supabase.auth.getUser();

  if (isAccountPage) {
    response.headers.set("Content-Security-Policy", csp);
    response.headers.set("Cache-Control", "private, no-store");
  }

  return response;
}

export const config = {
  matcher: ["/academy/:path*"],
};
