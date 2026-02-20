import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Truck, Shield, RotateCcw } from "lucide-react";
import { getProductById, formatPrice, products } from "@/data/products";
import { ProductActions } from "@/components/ProductActions";
import { ProductCard } from "@/components/ProductCard";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  const related = products
    .filter(
      (p) => p.categorySlug === product.categorySlug && p.id !== product.id
    )
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-text-muted mb-6 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-accent transition-colors shrink-0">
          Início
        </Link>
        <ChevronRight className="w-3.5 h-3.5 shrink-0" />
        <Link
          href={`/categoria/${product.categorySlug}`}
          className="hover:text-accent transition-colors shrink-0"
        >
          {product.category}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 shrink-0" />
        <span className="text-text font-medium truncate">{product.name}</span>
      </nav>

      {/* Product Detail */}
      <div className="lg:grid lg:grid-cols-2 gap-10 lg:gap-14">
        {/* Image Gallery */}
        <div className="mb-8 lg:mb-0">
          <div className="aspect-square bg-surface rounded-2xl overflow-hidden border border-border/50">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-3 mt-3">
              {product.images.map((img, i) => (
                <div
                  key={i}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 cursor-pointer transition-colors ${
                    i === 0 ? "border-accent" : "border-border/50 hover:border-accent/50"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} - imagem ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-1">
            <span className="text-sm font-medium text-text-muted uppercase tracking-wide">
              {product.brand}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-text tracking-tight leading-tight">
            {product.name}
          </h1>
          <p className="text-xs text-text-muted mt-2">REF: {product.sku}</p>

          {/* Price */}
          <div className="mt-5 pb-5 border-b border-border/50">
            <div className="flex items-end gap-3">
              <span className="text-3xl font-bold text-primary">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-text-muted line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              {discount > 0 && (
                <span className="text-sm font-bold text-white bg-accent px-2.5 py-0.5 rounded-full">
                  -{discount}%
                </span>
              )}
            </div>
            <p className="text-xs text-text-muted mt-1">
              Preço com IVA incluído
            </p>
          </div>

          {/* Stock Status */}
          <div className="mt-4">
            {product.inStock ? (
              <span className="inline-flex items-center gap-1.5 text-sm text-success font-medium">
                <span className="w-2 h-2 rounded-full bg-success" />
                Em stock - envio em 24/48h
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-sm text-red-500 font-medium">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                Temporariamente esgotado
              </span>
            )}
          </div>

          {/* Add to Cart */}
          <ProductActions product={product} />

          {/* Trust Badges */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center text-center p-3 rounded-xl bg-surface/80 border border-border/30">
              <Truck className="w-5 h-5 text-accent mb-1.5" />
              <span className="text-[11px] font-medium text-text/70 leading-tight">
                Envio grátis &gt;500&euro;
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-3 rounded-xl bg-surface/80 border border-border/30">
              <Shield className="w-5 h-5 text-accent mb-1.5" />
              <span className="text-[11px] font-medium text-text/70 leading-tight">
                Garantia 1 ano
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-3 rounded-xl bg-surface/80 border border-border/30">
              <RotateCcw className="w-5 h-5 text-accent mb-1.5" />
              <span className="text-[11px] font-medium text-text/70 leading-tight">
                Devoluções 14 dias
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-text mb-3">Descrição</h2>
            <p className="text-sm text-text/70 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Specs */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-text mb-3">
              Especificações
            </h2>
            <div className="bg-surface/50 rounded-xl border border-border/50 overflow-hidden">
              {Object.entries(product.specs).map(([key, value], i) => (
                <div
                  key={key}
                  className={`flex justify-between px-4 py-3 text-sm ${
                    i % 2 === 0 ? "bg-white" : "bg-surface/30"
                  }`}
                >
                  <span className="text-text/60 font-medium">{key}</span>
                  <span className="text-text font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="mt-16 pt-10 border-t border-border/50">
          <h2 className="text-xl sm:text-2xl font-bold text-text tracking-tight mb-6">
            Produtos Relacionados
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}
