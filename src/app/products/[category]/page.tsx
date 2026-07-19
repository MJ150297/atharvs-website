import { categoryInfo } from "../../../data/products";
import CategoryPageClient from "../../../components/CategoryPageClient";

export function generateStaticParams() {
  return categoryInfo.map((cat) => ({
    category: cat.slug,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  return <CategoryPageClient category={category} />;
}