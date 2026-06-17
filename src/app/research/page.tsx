"use client";
import { useState } from "react";
import { Search, ExternalLink } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import { publications, researchDomains } from "@/data/research";

const domainColors = ["#0d7377", "#2563eb", "#059669", "#7c3aed", "#d4a853", "#06b6d4"];

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
      <section className="pt-36 pb-20 gradient-hero">
        <div className="container-editorial">
          <SectionReveal>
            <div className="max-w-3xl">
              <div className="text-label mb-5">Chapter II</div>
              <h1 className="heading-editorial text-4xl md:text-6xl font-bold text-text-primary mb-5">
                Research Archive
              </h1>
              <div className="w-12 h-0.5 bg-gradient-to-r from-royal-blue to-transparent mb-5" />
              <p className="text-body text-lg max-w-2xl leading-relaxed">
                A comprehensive archive of scientific exploration and contribution spanning multiple therapeutic domains.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Domains */}
      <section className="py-16 gradient-section">
        <div className="container-editorial">
          <SectionReveal>
            <div className="text-label mb-6">Research Domains</div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {researchDomains.map((domain, i) => (
              <SectionReveal key={domain.id} delay={0.08 * i}>
                <GlassCard className="cursor-pointer group" hover>
                  <div className="text-3xl mb-4">{domain.icon}</div>
                  <h3 className="heading-cinematic text-lg font-semibold text-text-primary mb-2 group-hover:text-teal transition-colors">{domain.name}</h3>
                  <p className="text-sm text-slate font-manrope leading-relaxed mb-4">{domain.description}</p>
                  <div className="text-label text-[9px]" style={{ color: domainColors[i % domainColors.length] }}>{domain.count} Publications</div>
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
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <div className="text-label mb-4">Publications</div>
                <h2 className="heading-editorial text-2xl md:text-3xl font-bold text-text-primary">Selected Works</h2>
              </div>
              <div className="flex items-center gap-3 bg-white border border-border-subtle rounded-lg px-4 py-2.5 w-full md:w-80">
                <Search className="w-4 h-4 text-ash" />
                <input type="text" placeholder="Search publications..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-ash font-manrope outline-none" />
              </div>
            </div>
          </SectionReveal>

          {/* Domain filter */}
          <SectionReveal delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-8">
              <button onClick={() => setSelectedDomain("all")} className={`px-4 py-2 text-[10px] uppercase tracking-[0.14em] font-manrope font-medium rounded-md transition-all ${selectedDomain === "all" ? "bg-navy text-white" : "bg-surface-deep text-slate hover:bg-navy/5"}`}>
                All
              </button>
              {researchDomains.map((d) => (
                <button key={d.id} onClick={() => setSelectedDomain(d.id)} className={`px-4 py-2 text-[10px] uppercase tracking-[0.14em] font-manrope font-medium rounded-md transition-all ${selectedDomain === d.id ? "bg-navy text-white" : "bg-surface-deep text-slate hover:bg-navy/5"}`}>
                  {d.name}
                </button>
              ))}
            </div>
          </SectionReveal>

          {/* Publication list */}
          <div className="space-y-3">
            {filtered.map((pub, i) => (
              <SectionReveal key={pub.id} delay={0.05 * Math.min(i, 5)}>
                <div className="paper-card p-6 md:p-7 group">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="heading-editorial text-base md:text-lg font-semibold text-text-primary mb-2 group-hover:text-teal transition-colors leading-snug">{pub.title}</h3>
                      <p className="text-sm text-slate font-manrope mb-2">{pub.authors}</p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-ash font-manrope">
                        <span className="italic">{pub.journal}</span>
                        <span>·</span>
                        <span>{pub.year}</span>
                        {pub.citations && <><span>·</span><span className="text-teal font-medium">{pub.citations} citations</span></>}
                      </div>
                    </div>
                    {pub.doi && (
                      <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="shrink-0 w-8 h-8 rounded-full bg-teal/5 flex items-center justify-center text-ash hover:text-teal hover:bg-teal/10 transition-all">
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
