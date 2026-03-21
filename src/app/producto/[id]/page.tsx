import { redirect } from "next/navigation";

// Legacy Spanish route — redirect permanently to the English /products/[id] route
export default async function ProductoLegacyRedirect(props: {
  params: unknown;
}) {
  const params = (await Promise.resolve(props.params)) as { id?: string };
  if (!params.id) {
    redirect("/galeria");
  }

  redirect(`/products/${params.id}`);
}
