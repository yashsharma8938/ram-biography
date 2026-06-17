"use client";
import { useState } from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import { products, productCategories } from "@/data/products";
import { CheckCircle } from "lucide-react";

const statusColors: Record<string, { bg: string; text: string }> = {
  "available": { bg: "bg-emerald/10", text: "text-emerald" },
  "coming-soon": { bg: "bg-gold/10", text: "text-gold" },
  "research-phase": { bg: "bg-sci-violet/10", text: "text-sci-violet" },
};

const statusLabel: Record<string, string> = {
  "available": "Available",
  "coming-soon": "Coming Soon",
  "research-phase": "Research Phase",
};

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = selectedCategory === "All"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <>
      <section className="pt-36 pb-20 gradient-hero">
        <div className="container-editorial">
          <SectionReveal>
            <div className="max-w-3xl">
              <div className="text-label mb-5">Chapter IV</div>
              <h1 className="heading-editorial text-4xl md:text-6xl font-bold text-text-primary mb-5">Products</h1>
              <div className="w-12 h-0.5 bg-gradient-to-r from-teal to-transparent mb-5" />
              <p className="text-body text-lg max-w-2xl leading-relaxed">
                Scientific innovations transformed into products that serve humanity.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section-padding gradient-editorial">
        <div className="container-editorial">
          <SectionReveal>
            <div className="flex flex-wrap gap-2 mb-10">
              {["All", ...productCategories].map((cat) => (
                <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-2 text-[10px] uppercase tracking-[0.14em] font-manrope font-medium rounded-md transition-all ${selectedCategory === cat ? "bg-navy text-white" : "bg-surface-deep text-slate hover:bg-navy/5"}`}>
                  {cat}
                </button>
              ))}
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => {
              const sc = statusColors[product.status] || { bg: "bg-surface-deep", text: "text-ash" };
              return (
                <SectionReveal key={product.id} delay={0.08 * Math.min(i, 5)}>
                  <GlassCard className="h-full p-7">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 text-[9px] uppercase tracking-[0.12em] font-manrope font-medium rounded-md ${sc.bg} ${sc.text}`}>
                        {statusLabel[product.status]}
                      </span>
                    </div>
                    <h3 className="heading-editorial text-xl font-semibold text-text-primary mb-3">{product.name}</h3>
                    <p className="text-sm text-slate font-manrope leading-relaxed mb-5">{product.description}</p>
                    <div className="space-y-2 mb-5">
                      {product.features.slice(0, 4).map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-teal mt-0.5 shrink-0" />
                          <span className="text-xs text-slate font-manrope">{f}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-border-subtle pt-4">
                      <div className="text-label text-[9px] mb-2">Research Background</div>
                      <p className="text-xs text-ash font-manrope leading-relaxed">{product.researchBackground}</p>
                    </div>
                  </GlassCard>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
