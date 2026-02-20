import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, SlidersHorizontal } from "lucide-react";
import { categories, getProductsByCategory, products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { CategoryFilters } from "@/components/CategoryFilters";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(slug);
  const allProducts = categoryProducts.length > 0 ? categoryProducts : products;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-text-muted mb-6">
        <Link href="/" className="hover:text-accent transition-colors">
          Início
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-text font-medium">{category.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">
          {category.name}
        </h1>
        <p className="mt-2 text-text-muted max-w-2xl">{category.description}</p>
      </div>

      <div className="lg:flex gap-8">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-28 space-y-6">
            {/* Subcategories */}
            <div className="bg-white rounded-2xl border border-border/60 p-5">
              <h3 className="font-semibold text-sm text-text mb-3">
                Subcategorias
              </h3>
              <ul className="space-y-1.5">
                <li>
                  <Link
                    href={`/categoria/${slug}`}
                    className="block text-sm text-accent font-medium py-1.5 px-3 rounded-lg bg-accent/5"
                  >
                    Todos ({allProducts.length})
                  </Link>
                </li>
                {category.subcategories.map((sub) => (
                  <li key={sub.slug}>
                    <Link
                      href={`/categoria/${slug}?sub=${sub.slug}`}
                      className="block text-sm text-text/70 hover:text-accent py-1.5 px-3 rounded-lg hover:bg-surface transition-colors"
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter */}
            <div className="bg-white rounded-2xl border border-border/60 p-5">
              <h3 className="font-semibold text-sm text-text mb-3">Preço</h3>
              <div className="space-y-2">
                {["Até 500€", "500€ - 1.000€", "1.000€ - 3.000€", "+ 3.000€"].map(
                  (range) => (
                    <label
                      key={range}
                      className="flex items-center gap-2 text-sm text-text/70 cursor-pointer hover:text-text transition-colors"
                    >
                      <input
                        type="checkbox"
                        className="rounded border-border text-accent focus:ring-accent/20 w-4 h-4"
                      />
                      {range}
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Brand Filter */}
            <div className="bg-white rounded-2xl border border-border/60 p-5">
              <h3 className="font-semibold text-sm text-text mb-3">Marca</h3>
              <div className="space-y-2">
                {[...new Set(allProducts.map((p) => p.brand))].map((brand) => (
                  <label
                    key={brand}
                    className="flex items-center gap-2 text-sm text-text/70 cursor-pointer hover:text-text transition-colors"
                  >
                    <input
                      type="checkbox"
                      className="rounded border-border text-accent focus:ring-accent/20 w-4 h-4"
                    />
                    {brand}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Mobile Filters */}
          <CategoryFilters />

          {/* Sort & Count */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50">
            <p className="text-sm text-text-muted">
              <span className="font-medium text-text">{allProducts.length}</span>{" "}
              produtos encontrados
            </p>
            <select className="text-sm border border-border rounded-lg px-3 py-2 bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none">
              <option>Mais relevantes</option>
              <option>Preço: menor para maior</option>
              <option>Preço: maior para menor</option>
              <option>Mais recentes</option>
              <option>Mais vendidos</option>
            </select>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}
