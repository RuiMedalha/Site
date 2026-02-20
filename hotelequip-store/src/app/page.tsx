import Link from "next/link";
import {
  ArrowRight,
  Flame,
  Snowflake,
  Droplets,
  Coffee,
  ChefHat,
  Package,
  Star,
  Sparkles,
} from "lucide-react";
import { categories, getFeaturedProducts } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

const iconMap: Record<string, React.ReactNode> = {
  Flame: <Flame className="w-6 h-6" />,
  Snowflake: <Snowflake className="w-6 h-6" />,
  Droplets: <Droplets className="w-6 h-6" />,
  Cuboid: <Sparkles className="w-6 h-6" />,
  ChefHat: <ChefHat className="w-6 h-6" />,
  Coffee: <Coffee className="w-6 h-6" />,
  Table: <Star className="w-6 h-6" />,
  Package: <Package className="w-6 h-6" />,
};

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnYtMmgtNHY2aDR6TTM2IDI0aC00di0yaDR6TTI2IDM0aC0ydi00aDJ2LTJoLTR2Nmg0ek0yNiAyNGgtNHYtMmg0eiIvPjwvZz48L2c+PC9zdmc+')]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 relative">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold mb-4 bg-accent/10 px-3 py-1 rounded-full">
              <Sparkles className="w-4 h-4" />
              Descontos até 50% em equipamentos selecionados
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              Equipamentos Hoteleiros{" "}
              <span className="text-accent">Profissionais</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-lg">
              Tudo o que precisa para equipar o seu restaurante, hotel ou café.
              Qualidade premium com os melhores preços do mercado.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/categoria/confecao"
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent-hover transition-colors shadow-lg shadow-accent/25"
              >
                Explorar Catálogo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/categoria/frio-comercial"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-colors border border-white/20"
              >
                Novidades
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">
            Explore por Categoria
          </h2>
          <p className="mt-2 text-text-muted max-w-lg mx-auto">
            Encontre rapidamente o equipamento que procura
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categoria/${cat.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-surface border border-border/50 p-5 sm:p-6 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-3 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {iconMap[cat.icon]}
              </div>
              <h3 className="font-semibold text-text text-sm sm:text-base">
                {cat.name}
              </h3>
              <p className="text-xs text-text-muted mt-1">
                {cat.productCount} produtos
              </p>
              <ArrowRight className="absolute bottom-5 right-5 w-4 h-4 text-text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300" />
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">
                Produtos em Destaque
              </h2>
              <p className="mt-2 text-text-muted">
                Os mais procurados pelos nossos clientes
              </p>
            </div>
            <Link
              href="/categoria/confecao"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
            >
              Ver todos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featured.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="sm:hidden mt-6 text-center">
            <Link
              href="/categoria/confecao"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent"
            >
              Ver todos os produtos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,white_0%,transparent_50%)]" />
          </div>
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              10% de Desconto na Primeira Compra
            </h2>
            <p className="mt-3 text-white/60 max-w-md mx-auto">
              Subscreva a nossa newsletter e receba um código de desconto
              exclusivo para a sua primeira encomenda.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="O seu email"
                className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-accent text-sm"
              />
              <button className="px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent-hover transition-colors shadow-lg shadow-accent/25 text-sm whitespace-nowrap">
                Subscrever
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brands / Social Proof */}
      <section className="border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-sm text-text-muted mb-8">
            Marcas de confiança que comercializamos
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-40">
            {[
              "Giorik",
              "Infrico",
              "Winterhalter",
              "ITV",
              "Fagor",
              "Cuppone",
              "Sammic",
              "La Cimbali",
              "Jordão",
              "Distform",
            ].map((brand) => (
              <span
                key={brand}
                className="text-lg sm:text-xl font-bold text-text tracking-wide"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
