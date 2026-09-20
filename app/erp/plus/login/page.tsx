import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site-url";
import {
  getErpLoginProduct,
  ProductLoginPage,
} from "../../_components/product-login";

const product = getErpLoginProduct("plus");

export const metadata: Metadata = {
  title: "DataRay ERP+ Login | AI Intelligence Access",
  description:
    "Log in to DataRay ERP+ for AI-assisted reporting, forecasting, anomaly detection, executive dashboards, and decision intelligence.",
  alternates: {
    canonical: `${SITE_URL}/erp/plus/login`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ErpPlusLoginPage() {
  if (!product) {
    notFound();
  }

  return <ProductLoginPage product={product} />;
}
