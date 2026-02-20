"use client";

import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/data/products";
import Link from "next/link";

export function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    totalPrice,
    totalItems,
    isOpen,
    setIsOpen,
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Carrinho
            {totalItems > 0 && (
              <span className="text-sm font-normal text-text-muted">
                ({totalItems} {totalItems === 1 ? "item" : "itens"})
              </span>
            )}
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 hover:bg-surface rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <ShoppingBag className="w-16 h-16 text-border mb-4" />
              <p className="text-lg font-medium text-text/80 mb-1">
                O seu carrinho está vazio
              </p>
              <p className="text-sm text-text-muted mb-6">
                Explore os nossos equipamentos profissionais
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2.5 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent-hover transition-colors"
              >
                Continuar a comprar
              </button>
            </div>
          ) : (
            <div className="p-4 space-y-3">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 p-3 rounded-xl bg-surface/50 border border-border/50"
                >
                  <div className="w-20 h-20 bg-surface rounded-lg overflow-hidden shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-text line-clamp-2 leading-tight">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-text-muted mt-0.5">
                      {item.product.brand}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1.5 bg-white rounded-lg border border-border">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity - 1
                            )
                          }
                          className="p-1 hover:text-accent transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity + 1
                            )
                          }
                          className="p-1 hover:text-accent transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-accent">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="p-1 text-text-muted hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-5 space-y-4 bg-white">
            {totalPrice < 500 && (
              <div className="text-xs text-center text-text-muted bg-surface rounded-lg py-2">
                Faltam{" "}
                <span className="font-semibold text-accent">
                  {formatPrice(500 - totalPrice)}
                </span>{" "}
                para envio gratuito
              </div>
            )}
            {totalPrice >= 500 && (
              <div className="text-xs text-center text-success font-medium bg-green-50 rounded-lg py-2">
                Parabéns! Tem envio gratuito nesta encomenda
              </div>
            )}
            <div className="flex justify-between items-center">
              <span className="text-sm text-text-muted">Subtotal</span>
              <span className="text-xl font-bold text-text">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <p className="text-xs text-text-muted">
              IVA incluído. Portes calculados no checkout.
            </p>
            <Link
              href="/carrinho"
              onClick={() => setIsOpen(false)}
              className="block w-full py-3 bg-accent text-white text-center rounded-full font-medium hover:bg-accent-hover transition-colors"
            >
              Finalizar Encomenda
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="block w-full py-2.5 text-center text-sm text-text-muted hover:text-text transition-colors"
            >
              Continuar a comprar
            </button>
          </div>
        )}
      </div>
    </>
  );
}
