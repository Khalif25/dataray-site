import { connection } from "next/server";

export default async function AccountLayout({ children }: { children: React.ReactNode }) {
  // Request-scoped rendering gives Next.js a fresh CSP nonce for its scripts.
  await connection();
  return children;
}
