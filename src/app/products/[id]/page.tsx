import { redirect } from "next/navigation";

export default async function ProductDetailRedirect(props: {
  params: unknown;
}) {
  const params = (await Promise.resolve(props.params)) as { id?: string };
  if (!params.id) {
    redirect("/galeria");
  }

  redirect(`/producto/${params.id}`);
}
