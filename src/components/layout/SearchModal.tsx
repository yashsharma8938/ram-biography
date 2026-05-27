"use client";
import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { publications } from "@/data/research";
import { innovations } from "@/data/innovations";
import { products } from "@/data/products";
import { biographySections } from "@/data/biography";

interface SearchResult {
  title: string;
  category: string;
  href: string;
}

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) { setResults([]); return; }
    const q = query.toLowerCase();
    const r: SearchResult[] = [];
    publications.forEach(p => { if (p.title.toLowerCase().includes(q) || p.domain.toLowerCase().includes(q)) r.push({ title: p.title, category: "Research", href: "/research" }); });
    innovations.forEach(i => { if (i.title.toLowerCase().includes(q) || i.category.toLowerCase().includes(q)) r.push({ title: i.title, category: "Innovation", href: "/innovations" }); });
    products.forEach(p => { if (p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)) r.push({ title: p.name, category: "Product", href: "/products" }); });
    biographySections.forEach(s => { if (s.title.toLowerCase().includes(q) || s.content.some(c => c.toLowerCase().includes(q))) r.push({ title: s.title, category: "Biography", href: "/biography" }); });
    setResults(r.slice(0, 8));
  }, [query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24" onClick={onClose}>
      <div className="absolute inset-0 bg-charcoal/30 backdrop-blur-sm" />
      <div className="relative w-full max-w-2xl mx-4 bg-warm-white/98 backdrop-blur-xl border border-border-subtle rounded-sm shadow-2xl shadow-black/10" onClick={e => e.stopPropagation()}>
        <div className="flex items-center gap-3 px-6 py-4 border-b border-border-subtle">
          <svg className="w-5 h-5 text-ash" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <input ref={inputRef} type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search research, innovations, products..." className="flex-1 bg-transparent text-charcoal placeholder:text-ash text-sm font-manrope outline-none" />
          <button onClick={onClose} className="text-ash hover:text-charcoal transition-colors"><X className="w-4 h-4" /></button>
        </div>
        {results.length > 0 && (
          <div className="max-h-80 overflow-y-auto p-2">
            {results.map((r, i) => (
              <Link key={i} href={r.href} onClick={onClose} className="flex items-center justify-between px-4 py-3 rounded-sm hover:bg-walnut/5 transition-colors group">
                <div>
                  <div className="text-sm text-charcoal font-manrope group-hover:text-walnut transition-colors">{r.title}</div>
                </div>
                <span className="text-label text-[9px]">{r.category}</span>
              </Link>
            ))}
          </div>
        )}
        {query && results.length === 0 && (
          <div className="p-8 text-center text-sm text-ash font-manrope">No results found</div>
        )}
      </div>
    </div>
  );
}
