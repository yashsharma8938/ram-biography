"use client";
import { useState } from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import { mediaArticles, mediaCategories } from "@/data/media";
import { Search, Calendar, ArrowUpRight } from "lucide-react";

export default function MediaPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = mediaArticles.filter((a) => {
    const matchCat = selectedCategory === "All" || a.category === selectedCategory;
    const matchSearch = !searchQuery || a.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = mediaArticles.filter(a => a.featured);

  return (
    <>
      <section className="pt-40 pb-24 gradient-hero">
        <div className="container-editorial">
          <SectionReveal>
            <div className="max-w-3xl">
              <div className="text-label mb-6">Press Archive</div>
              <h1 className="heading-editorial text-4xl md:text-6xl font-bold text-charcoal mb-6">Media & News</h1>
              <p className="text-body text-lg max-w-2xl leading-relaxed">
                Press coverage, interviews, and featured stories from the scientific journey.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Featured */}
      {featured.length > 0 && (
        <section className="py-20 gradient-section">
          <div className="container-editorial">
            <SectionReveal>
              <div className="text-label mb-8">Featured</div>
            </SectionReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featured.map((article, i) => (
                <SectionReveal key={article.id} delay={0.1 * i}>
                  <div className="paper-card p-8 group cursor-pointer">
                    <div className="flex items-center gap-3 text-xs text-ash font-manrope mb-4">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{article.date}</span>
                      <span>·</span>
                      <span className="text-bronze">{article.source}</span>
                    </div>
                    <h3 className="heading-editorial text-xl font-semibold text-charcoal mb-3 group-hover:text-walnut transition-colors">{article.title}</h3>
                    <p className="text-sm text-slate font-manrope leading-relaxed mb-4">{article.excerpt}</p>
                    <div className="flex items-center gap-2 text-label text-[9px] group-hover:text-walnut transition-colors">
                      Read More <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All articles */}
      <section className="section-padding gradient-editorial">
        <div className="container-editorial">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div className="text-label">All Coverage</div>
              <div className="flex items-center gap-3 bg-warm-white border border-border-subtle rounded-sm px-4 py-2.5 w-full md:w-72">
                <Search className="w-4 h-4 text-ash" />
                <input type="text" placeholder="Search articles..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="flex-1 bg-transparent text-sm text-charcoal placeholder:text-ash font-manrope outline-none" />
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-10">
              {mediaCategories.map((cat) => (
                <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-2 text-[10px] uppercase tracking-[0.14em] font-manrope font-medium rounded-sm transition-all ${selectedCategory === cat ? "bg-walnut text-cream" : "bg-walnut/5 text-slate hover:bg-walnut/10"}`}>
                  {cat}
                </button>
              ))}
            </div>
          </SectionReveal>

          <div className="space-y-4">
            {filtered.map((article, i) => (
              <SectionReveal key={article.id} delay={0.05 * Math.min(i, 5)}>
                <div className="paper-card p-6 group cursor-pointer flex items-start justify-between gap-4">
                  <div>
                    <h3 className="heading-editorial text-base font-semibold text-charcoal mb-1 group-hover:text-walnut transition-colors">{article.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-ash font-manrope">
                      <span>{article.source}</span><span>·</span><span>{article.date}</span><span>·</span><span className="text-bronze">{article.category}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ash group-hover:text-walnut transition-colors shrink-0 mt-1" />
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
