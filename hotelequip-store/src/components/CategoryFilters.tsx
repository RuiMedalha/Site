"use client";

import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";

export function CategoryFilters() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden mb-4">
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2.5 border border-border rounded-xl text-sm font-medium text-text hover:border-accent transition-colors w-full justify-center"
      >
        <SlidersHorizontal className="w-4 h-4" />
        Filtrar & Ordenar
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-50"
            onClick={() => setOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-white z-[60] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between p-5 border-b border-border">
              <h2 className="font-semibold text-lg">Filtros</h2>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 hover:bg-surface rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 space-y-6">
              <div>
                <h3 className="font-semibold text-sm mb-3">Preço</h3>
                <div className="space-y-2.5">
                  {["Até 500€", "500€ - 1.000€", "1.000€ - 3.000€", "+ 3.000€"].map(
                    (range) => (
                      <label
                        key={range}
                        className="flex items-center gap-2.5 text-sm text-text/70"
                      >
                        <input
                          type="checkbox"
                          className="rounded border-border text-accent w-4 h-4"
                        />
                        {range}
                      </label>
                    )
                  )}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-3">Disponibilidade</h3>
                <div className="space-y-2.5">
                  <label className="flex items-center gap-2.5 text-sm text-text/70">
                    <input
                      type="checkbox"
                      className="rounded border-border text-accent w-4 h-4"
                    />
                    Em stock
                  </label>
                </div>
              </div>
            </div>
            <div className="p-5 border-t border-border">
              <button
                onClick={() => setOpen(false)}
                className="w-full py-3 bg-accent text-white rounded-full font-medium"
              >
                Aplicar Filtros
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
