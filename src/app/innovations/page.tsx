"use client";
import { useState } from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import { innovations, innovationCategories } from "@/data/innovations";

const statusColors: Record<string, string> = {
  "patented": "bg-walnut/10 text-walnut",
  "in-development": "bg-bronze/10 text-bronze",
  "published": "bg-slate/10 text-slate",
  "commercialized": "bg-espresso/10 text-espresso",
};

export default function InnovationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = selectedCategory === "All"
    ? innovations
    : innovations.filter((i) => i.category === selectedCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 gradient-hero">
        <div className="container-editorial">
          <SectionReveal>
            <div className="max-w-3xl">
              <div className="text-label mb-6">Chapter III</div>
              <h1 className="heading-editorial text-4xl md:text-6xl font-bold text-charcoal mb-6">
                Innovations
              </h1>
              <p className="text-body text-lg max-w-2xl leading-relaxed">
                Patents, technologies, and scientific breakthroughs transforming human health.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding gradient-editorial">
        <div className="container-editorial">
          {/* Filters */}
          <SectionReveal>
            <div className="flex flex-wrap gap-2 mb-12">
              {["All", ...innovationCategories].map((cat) => (
                <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-2 text-[10px] uppercase tracking-[0.14em] font-manrope font-medium rounded-sm transition-all ${selectedCategory === cat ? "bg-walnut text-cream" : "bg-walnut/5 text-slate hover:bg-walnut/10"}`}>
                  {cat}
                </button>
              ))}
            </div>
          </SectionReveal>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((innovation, i) => (
              <SectionReveal key={innovation.id} delay={0.08 * Math.min(i, 6)}>
                <GlassCard className="h-full relative p-10">
                  <div className="chapter-number" style={{ fontSize: "5rem", opacity: 0.04 }}>{String(i + 1).padStart(2, "0")}</div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 text-[9px] uppercase tracking-[0.12em] font-manrope font-medium rounded-sm ${statusColors[innovation.status] || "bg-ash/10 text-ash"}`}>
                        {innovation.status}
                      </span>
                      <span className="text-[10px] text-ash font-manrope">{innovation.year}</span>
                    </div>
                    <h3 className="heading-editorial text-xl font-semibold text-charcoal mb-3">{innovation.title}</h3>
                    <p className="text-sm text-slate font-manrope leading-relaxed mb-4">{innovation.description}</p>
                    <div className="border-t border-border-subtle pt-4 mt-4">
                      <div className="text-label text-[9px] mb-2">Impact</div>
                      <p className="text-sm text-walnut font-manrope">{innovation.impact}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {innovation.tags.map((tag) => (
                        <span key={tag} className="text-[9px] text-ash font-manrope px-2 py-1 bg-parchment/50 rounded-sm">{tag}</span>
                      ))}
                    </div>
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
