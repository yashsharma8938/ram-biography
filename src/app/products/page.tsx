"use client";
import { useState } from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import { products, productCategories } from "@/data/products";
import { CheckCircle } from "lucide-react";

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
      <section className="pt-40 pb-24 gradient-hero">
        <div className="container-editorial">
          <SectionReveal>
            <div className="max-w-3xl">
              <div className="text-label mb-6">Chapter IV</div>
              <h1 className="heading-editorial text-4xl md:text-6xl font-bold text-charcoal mb-6">Products</h1>
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
            <div className="flex flex-wrap gap-2 mb-12">
              {["All", ...productCategories].map((cat) => (
                <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-2 text-[10px] uppercase tracking-[0.14em] font-manrope font-medium rounded-sm transition-all ${selectedCategory === cat ? "bg-walnut text-cream" : "bg-walnut/5 text-slate hover:bg-walnut/10"}`}>
                  {cat}
                </button>
              ))}
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product, i) => (
              <SectionReveal key={product.id} delay={0.08 * Math.min(i, 5)}>
                <GlassCard className="h-full p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 text-[9px] uppercase tracking-[0.12em] font-manrope font-medium rounded-sm ${product.status === "available" ? "bg-walnut/10 text-walnut" : "bg-ash/10 text-ash"}`}>
                      {statusLabel[product.status]}
                    </span>
                  </div>
                  <h3 className="heading-editorial text-xl font-semibold text-charcoal mb-3">{product.name}</h3>
                  <p className="text-sm text-slate font-manrope leading-relaxed mb-6">{product.description}</p>
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 4).map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-bronze mt-0.5 shrink-0" />
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
