import { ProductLoginPage, getErpLoginProduct } from "../_components/product-login";
export const metadata = { title: "DataRay ERP Login", robots: { index: false, follow: true } };
export default function ErpAccessPage() { return <ProductLoginPage product={getErpLoginProduct("erp")!} />; }
