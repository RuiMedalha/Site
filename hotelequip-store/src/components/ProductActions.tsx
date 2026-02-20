"use client";

import { useState } from "react";
import { ShoppingCart, Minus, Plus, Check } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/data/products";

export function ProductActions({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="mt-6 flex flex-col sm:flex-row gap-3">
      {/* Quantity Selector */}
      <div className="flex items-center border border-border rounded-xl overflow-hidden">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="p-3 hover:bg-surface transition-colors"
          disabled={quantity <= 1}
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-12 text-center font-medium text-sm">{quantity}</span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="p-3 hover:bg-surface transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAdd}
        disabled={!product.inStock || added}
        className={`flex-1 flex items-center justify-center gap-2.5 py-3 px-6 rounded-xl font-medium transition-all text-sm ${
          added
            ? "bg-success text-white"
            : product.inStock
            ? "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20"
            : "bg-gray-200 text-gray-500 cursor-not-allowed"
        }`}
      >
        {added ? (
          <>
            <Check className="w-5 h-5" />
            Adicionado ao carrinho!
          </>
        ) : (
          <>
            <ShoppingCart className="w-5 h-5" />
            Adicionar ao Carrinho
          </>
        )}
      </button>
    </div>
  );
}
