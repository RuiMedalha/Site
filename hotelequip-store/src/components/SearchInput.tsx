"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export function SearchInput({ defaultValue = "" }: { defaultValue?: string }) {
  const [query, setQuery] = useState(defaultValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/pesquisa?q=${encodeURIComponent(query)}`;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Pesquisar por nome, categoria, marca..."
        className="w-full pl-4 pr-12 py-3 rounded-xl border border-border bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
      />
      <button
        type="submit"
        className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors"
      >
        <Search className="w-4 h-4" />
      </button>
    </form>
  );
}
