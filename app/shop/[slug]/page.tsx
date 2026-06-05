import { redirect } from "next/navigation";

interface Props {
  params: { slug: string };
}

export default function ShopSlugRedirect({ params }: Props) {
  redirect(`/tienda`);
}
