import { redirect } from "next/navigation";

// /products (index) redirects to the gallery listing page
export default function ProductsPage() {
  redirect("/galeria");
}
