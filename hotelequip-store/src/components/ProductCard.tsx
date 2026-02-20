"use client";

import Link from "next/link";
import { ShoppingCart, Eye } from "lucide-react";
import { formatPrice, type Product } from "@/data/products";
import { useCart } from "@/lib/cart-context";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <div className="group bg-white rounded-2xl border border-border/60 overflow-hidden hover:shadow-lg hover:border-border transition-all duration-300">
      {/* Image */}
      <Link
        href={`/produto/${product.id}`}
        className="block relative aspect-square overflow-hidden bg-surface"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-accent text-white text-xs font-bold px-2.5 py-1 rounded-full">
            -{discount}%
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="bg-white text-text text-sm font-medium px-4 py-1.5 rounded-full">
              Esgotado
            </span>
          </div>
        )}
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="bg-white/95 backdrop-blur-sm text-text text-sm font-medium px-4 py-2 rounded-full flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-4 h-4" />
            Ver detalhes
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <div className="mb-1">
          <span className="text-[11px] font-medium text-text-muted uppercase tracking-wide">
            {product.brand}
          </span>
        </div>
        <Link href={`/produto/${product.id}`}>
          <h3 className="text-sm font-medium text-text leading-snug line-clamp-2 hover:text-accent transition-colors min-h-[2.5rem]">
            {product.name}
          </h3>
        </Link>

        <div className="mt-3 flex items-end justify-between">
          <div>
            {product.originalPrice && (
              <span className="text-xs text-text-muted line-through block">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span className="text-lg font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            <span className="text-[10px] text-text-muted block">
              c/ IVA
            </span>
          </div>
          {product.inStock && (
            <button
              onClick={() => addItem(product)}
              className="p-2.5 bg-accent text-white rounded-xl hover:bg-accent-hover transition-colors shadow-sm hover:shadow-md"
              aria-label={`Adicionar ${product.name} ao carrinho`}
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
