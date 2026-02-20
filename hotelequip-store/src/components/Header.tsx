"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  Phone,
  Truck,
  ChevronDown,
} from "lucide-react";
import { categories } from "@/data/products";
import { useCart } from "@/lib/cart-context";
import { CartDrawer } from "./CartDrawer";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems, setIsOpen } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/pesquisa?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Truck className="w-4 h-4" />
              <span className="hidden sm:inline">
                Envio gratuito em compras &gt; 500&euro;
              </span>
              <span className="sm:hidden">Envio grátis &gt;500&euro;</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+351000000000"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Suporte: 800 000 000</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 -ml-2 text-text hover:text-accent transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-primary tracking-tight">
                  Hotelequip
                </span>
                <span className="text-accent text-xl font-bold">.pt</span>
              </div>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-8">
              <form onSubmit={handleSearch} className="w-full relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Pesquisar equipamentos..."
                  className="w-full pl-4 pr-12 py-2.5 rounded-full border border-border bg-surface focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-accent text-white rounded-full hover:bg-accent-hover transition-colors"
                >
                  <Search className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="lg:hidden p-2 text-text hover:text-accent transition-colors"
                aria-label="Pesquisar"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsOpen(true)}
                className="relative p-2 text-text hover:text-accent transition-colors"
                aria-label="Carrinho"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-accent text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block border-t border-border/50 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="flex items-center gap-0">
              {categories.map((cat) => (
                <li key={cat.slug} className="group relative">
                  <Link
                    href={`/categoria/${cat.slug}`}
                    className="flex items-center gap-1 px-4 py-3 text-sm font-medium text-text/80 hover:text-accent transition-colors"
                  >
                    {cat.name}
                    <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  {/* Dropdown */}
                  <div className="absolute left-0 top-full pt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-white rounded-lg shadow-xl border border-border/50 py-2 min-w-[220px]">
                      {cat.subcategories.map((sub) => (
                        <Link
                          key={sub.slug}
                          href={`/categoria/${cat.slug}?sub=${sub.slug}`}
                          className="block px-4 py-2 text-sm text-text/70 hover:text-accent hover:bg-surface transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                      <div className="border-t border-border/50 mt-1 pt-1">
                        <Link
                          href={`/categoria/${cat.slug}`}
                          className="block px-4 py-2 text-sm font-medium text-accent hover:bg-surface transition-colors"
                        >
                          Ver tudo em {cat.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="lg:hidden border-t border-border/50 p-4 bg-white">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquisar equipamentos..."
                autoFocus
                className="w-full pl-4 pr-12 py-3 rounded-full border border-border bg-surface focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-accent text-white rounded-full"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border/50 bg-white max-h-[70vh] overflow-y-auto">
            <nav className="py-2">
              {categories.map((cat) => (
                <MobileMenuItem
                  key={cat.slug}
                  category={cat}
                  onClose={() => setMobileMenuOpen(false)}
                />
              ))}
            </nav>
          </div>
        )}
      </header>

      <CartDrawer />
    </>
  );
}

function MobileMenuItem({
  category,
  onClose,
}: {
  category: (typeof categories)[0];
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div className="flex items-center border-b border-border/30">
        <Link
          href={`/categoria/${category.slug}`}
          onClick={onClose}
          className="flex-1 px-6 py-3 text-sm font-medium text-text"
        >
          {category.name}
        </Link>
        <button
          onClick={() => setExpanded(!expanded)}
          className="px-4 py-3 text-text/50"
        >
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
      {expanded && (
        <div className="bg-surface/50">
          {category.subcategories.map((sub) => (
            <Link
              key={sub.slug}
              href={`/categoria/${category.slug}?sub=${sub.slug}`}
              onClick={onClose}
              className="block px-10 py-2.5 text-sm text-text/60 hover:text-accent border-b border-border/20"
            >
              {sub.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
