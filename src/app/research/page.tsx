"use client";
import { useState } from "react";
import { Search, ExternalLink } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import { publications, researchDomains } from "@/data/research";

export default function ResearchPage() {
  const [selectedDomain, setSelectedDomain] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = publications.filter((p) => {
    const matchDomain = selectedDomain === "all" || p.domain === selectedDomain;
    const matchSearch = !searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.authors.toLowerCase().includes(searchQuery.toLowerCase());
    return matchDomain && matchSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 gradient-hero">
        <div className="container-editorial">
          <SectionReveal>
            <div className="max-w-3xl">
              <div className="text-label mb-6">Chapter II</div>
              <h1 className="heading-editorial text-4xl md:text-6xl font-bold text-charcoal mb-6">
                Research Archive
              </h1>
              <p className="text-body text-lg max-w-2xl leading-relaxed">
                A comprehensive archive of scientific exploration and contribution spanning multiple therapeutic domains.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Domains */}
      <section className="py-20 gradient-section">
        <div className="container-editorial">
          <SectionReveal>
            <div className="text-label mb-8">Research Domains</div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {researchDomains.map((domain, i) => (
              <SectionReveal key={domain.id} delay={0.08 * i}>
                <GlassCard className="cursor-pointer group" hover>
                  <div className="text-3xl mb-4">{domain.icon}</div>
                  <h3 className="heading-cinematic text-lg font-semibold text-charcoal mb-2 group-hover:text-walnut transition-colors">{domain.name}</h3>
                  <p className="text-sm text-slate font-manrope leading-relaxed mb-4">{domain.description}</p>
                  <div className="text-label text-[9px]">{domain.count} Publications</div>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="section-padding gradient-editorial">
        <div className="container-editorial">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="text-label mb-4">Publications</div>
                <h2 className="heading-editorial text-2xl md:text-3xl font-bold text-charcoal">Selected Works</h2>
              </div>
              <div className="flex items-center gap-3 bg-warm-white border border-border-subtle rounded-sm px-4 py-2.5 w-full md:w-80">
                <Search className="w-4 h-4 text-ash" />
                <input type="text" placeholder="Search publications..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="flex-1 bg-transparent text-sm text-charcoal placeholder:text-ash font-manrope outline-none" />
              </div>
            </div>
          </SectionReveal>

          {/* Domain filter */}
          <SectionReveal delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-10">
              <button onClick={() => setSelectedDomain("all")} className={`px-4 py-2 text-[10px] uppercase tracking-[0.14em] font-manrope font-medium rounded-sm transition-all ${selectedDomain === "all" ? "bg-walnut text-cream" : "bg-walnut/5 text-slate hover:bg-walnut/10"}`}>
                All
              </button>
              {researchDomains.map((d) => (
                <button key={d.id} onClick={() => setSelectedDomain(d.id)} className={`px-4 py-2 text-[10px] uppercase tracking-[0.14em] font-manrope font-medium rounded-sm transition-all ${selectedDomain === d.id ? "bg-walnut text-cream" : "bg-walnut/5 text-slate hover:bg-walnut/10"}`}>
                  {d.name}
                </button>
              ))}
            </div>
          </SectionReveal>

          {/* Publication list */}
          <div className="space-y-4">
            {filtered.map((pub, i) => (
              <SectionReveal key={pub.id} delay={0.05 * Math.min(i, 5)}>
                <div className="paper-card p-6 md:p-8 group">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="heading-editorial text-base md:text-lg font-semibold text-charcoal mb-2 group-hover:text-walnut transition-colors leading-snug">{pub.title}</h3>
                      <p className="text-sm text-slate font-manrope mb-2">{pub.authors}</p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-ash font-manrope">
                        <span className="italic">{pub.journal}</span>
                        <span>·</span>
                        <span>{pub.year}</span>
                        {pub.citations && <><span>·</span><span>{pub.citations} citations</span></>}
                      </div>
                    </div>
                    {pub.doi && (
                      <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="shrink-0 w-8 h-8 rounded-full bg-walnut/5 flex items-center justify-center text-ash hover:text-walnut hover:bg-walnut/10 transition-all">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
