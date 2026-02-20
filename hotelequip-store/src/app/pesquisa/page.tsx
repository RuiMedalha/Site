import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";
import { searchProducts } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { SearchInput } from "@/components/SearchInput";

interface PageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: PageProps) {
  const { q } = await searchParams;
  const query = q || "";
  const results = query ? searchProducts(query) : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-text-muted mb-6">
        <Link href="/" className="hover:text-accent transition-colors">
          Início
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-text font-medium">Pesquisa</span>
      </nav>

      <div className="max-w-xl mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-text tracking-tight mb-4">
          {query ? `Resultados para "${query}"` : "Pesquisar Produtos"}
        </h1>
        <SearchInput defaultValue={query} />
      </div>

      {query && (
        <p className="text-sm text-text-muted mb-6">
          <span className="font-medium text-text">{results.length}</span>{" "}
          {results.length === 1 ? "resultado encontrado" : "resultados encontrados"}
        </p>
      )}

      {results.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : query ? (
        <div className="text-center py-16">
          <Search className="w-16 h-16 text-border mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-text mb-2">
            Nenhum resultado encontrado
          </h2>
          <p className="text-sm text-text-muted max-w-md mx-auto">
            Tente pesquisar com termos diferentes ou explore as nossas
            categorias.
          </p>
        </div>
      ) : null}
    </div>
  );
}
