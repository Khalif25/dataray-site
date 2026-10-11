const DEFAULT_ERP_PLUS_LOGIN_URL = "https://erp.dataraysmart.com/web/login";

export function getErpPlusLoginUrl(configuredUrl?: string): string {
  if (!configuredUrl?.trim()) return DEFAULT_ERP_PLUS_LOGIN_URL;

  try {
    const url = new URL(configuredUrl.trim());
    if (url.protocol !== "https:" || url.username || url.password) {
      return DEFAULT_ERP_PLUS_LOGIN_URL;
    }

    const path = url.pathname.replace(/\/+$/, "");
    if (path.endsWith("/web/login")) {
      url.pathname = path;
    } else if (path.endsWith("/login")) {
      url.pathname = `${path.slice(0, -6)}/web/login`;
    } else if (path.endsWith("/web")) {
      url.pathname = `${path}/login`;
    } else {
      url.pathname = `${path}/web/login`;
    }
    url.hash = "";
    return url.toString();
  } catch {
    return DEFAULT_ERP_PLUS_LOGIN_URL;
  }
}
