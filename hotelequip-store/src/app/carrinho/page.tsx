"use client";

import Link from "next/link";
import {
  ChevronRight,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowLeft,
  Truck,
  Lock,
} from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/data/products";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <ShoppingBag className="w-20 h-20 text-border mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-text mb-2">
          O seu carrinho está vazio
        </h1>
        <p className="text-text-muted mb-8 max-w-md mx-auto">
          Explore os nossos equipamentos profissionais e adicione produtos ao
          seu carrinho.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent-hover transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Continuar a comprar
        </Link>
      </div>
    );
  }

  const shipping = totalPrice >= 500 ? 0 : 25;
  const total = totalPrice + shipping;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-text-muted mb-6">
        <Link href="/" className="hover:text-accent transition-colors">
          Início
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-text font-medium">Carrinho</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-text tracking-tight mb-8">
        Carrinho de Compras
      </h1>

      <div className="lg:grid lg:grid-cols-3 gap-10">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => {
            const discount = item.product.originalPrice
              ? Math.round(
                  ((item.product.originalPrice - item.product.price) /
                    item.product.originalPrice) *
                    100
                )
              : 0;

            return (
              <div
                key={item.product.id}
                className="flex gap-4 sm:gap-6 p-4 sm:p-5 bg-white rounded-2xl border border-border/60"
              >
                <Link
                  href={`/produto/${item.product.id}`}
                  className="w-24 h-24 sm:w-32 sm:h-32 bg-surface rounded-xl overflow-hidden shrink-0"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </Link>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <span className="text-xs text-text-muted uppercase tracking-wide">
                        {item.product.brand}
                      </span>
                      <Link href={`/produto/${item.product.id}`}>
                        <h3 className="text-sm sm:text-base font-medium text-text leading-snug hover:text-accent transition-colors">
                          {item.product.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-text-muted mt-0.5">
                        REF: {item.product.sku}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="p-1.5 text-text-muted hover:text-red-500 transition-colors shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-end justify-between mt-4">
                    <div className="flex items-center gap-1.5 bg-surface rounded-lg border border-border">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="p-1.5 hover:text-accent transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-sm font-medium w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="p-1.5 hover:text-accent transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="text-right">
                      {discount > 0 && (
                        <span className="text-xs text-text-muted line-through block">
                          {formatPrice(
                            item.product.originalPrice! * item.quantity
                          )}
                        </span>
                      )}
                      <span className="text-base sm:text-lg font-bold text-primary">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="flex justify-between items-center pt-2">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Continuar a comprar
            </Link>
            <button
              onClick={clearCart}
              className="text-sm text-text-muted hover:text-red-500 transition-colors"
            >
              Limpar carrinho
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-8 lg:mt-0">
          <div className="bg-white rounded-2xl border border-border/60 p-6 sticky top-28">
            <h2 className="text-lg font-semibold text-text mb-5">
              Resumo da Encomenda
            </h2>

            <div className="space-y-3 pb-4 border-b border-border/50">
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Subtotal</span>
                <span className="font-medium">{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Portes de envio</span>
                {shipping === 0 ? (
                  <span className="font-medium text-success">Grátis</span>
                ) : (
                  <span className="font-medium">{formatPrice(shipping)}</span>
                )}
              </div>
            </div>

            {totalPrice < 500 && (
              <div className="my-3 text-xs text-center text-text-muted bg-surface rounded-lg py-2.5 px-3">
                Faltam{" "}
                <span className="font-semibold text-accent">
                  {formatPrice(500 - totalPrice)}
                </span>{" "}
                para envio gratuito!
              </div>
            )}

            {totalPrice >= 500 && (
              <div className="my-3 flex items-center gap-2 text-xs text-success bg-green-50 rounded-lg py-2.5 px-3">
                <Truck className="w-4 h-4 shrink-0" />
                <span className="font-medium">
                  Envio gratuito incluído nesta encomenda!
                </span>
              </div>
            )}

            <div className="flex justify-between items-center py-4 border-t border-border/50">
              <span className="font-semibold text-text">Total</span>
              <span className="text-2xl font-bold text-primary">
                {formatPrice(total)}
              </span>
            </div>
            <p className="text-[11px] text-text-muted mb-4">
              IVA incluído a 23%
            </p>

            <button className="w-full py-3.5 bg-accent text-white rounded-xl font-medium hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20 flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" />
              Finalizar Encomenda
            </button>

            <p className="text-[11px] text-text-muted text-center mt-3 flex items-center justify-center gap-1">
              <Lock className="w-3 h-3" />
              Pagamento 100% seguro e encriptado
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
