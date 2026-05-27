"use client";
import SectionReveal from "@/components/ui/SectionReveal";
import { companies } from "@/data/companies";
import { Building2, MapPin, Globe, Target, Award } from "lucide-react";

export default function CompaniesPage() {
  return (
    <>
      <section className="pt-40 pb-24 gradient-hero">
        <div className="container-editorial">
          <SectionReveal>
            <div className="max-w-3xl">
              <div className="text-label mb-6">Institutions</div>
              <h1 className="heading-editorial text-4xl md:text-6xl font-bold text-charcoal mb-6">Companies</h1>
              <p className="text-body text-lg max-w-2xl leading-relaxed">
                Building institutions that transform scientific discovery into real-world impact.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section-padding gradient-editorial">
        <div className="container-editorial">
          {companies.map((company, ci) => (
            <SectionReveal key={company.id} delay={0.1}>
              <div className="max-w-4xl mb-24 last:mb-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  {/* Left — Info */}
                  <div className="lg:col-span-2">
                    <h2 className="heading-editorial text-3xl md:text-4xl font-bold text-charcoal mb-2">{company.name}</h2>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-label">{company.role}</span>
                      <div className="flex items-center gap-1 text-xs text-ash font-manrope">
                        <MapPin className="w-3 h-3" /> {company.location}
                      </div>
                    </div>
                    <p className="text-body text-base leading-[1.9] mb-8">{company.description}</p>

                    {/* Focus Areas */}
                    <div className="mb-8">
                      <div className="text-label text-[9px] mb-4">Focus Areas</div>
                      <div className="flex flex-wrap gap-2">
                        {company.focusAreas.map((area) => (
                          <span key={area} className="px-3 py-1.5 text-xs font-manrope bg-walnut/5 text-walnut rounded-sm">{area}</span>
                        ))}
                      </div>
                    </div>

                    {/* Contributions */}
                    <div>
                      <div className="text-label text-[9px] mb-4">Key Contributions</div>
                      <div className="space-y-3">
                        {company.contributions.map((c) => (
                          <div key={c} className="flex items-start gap-3">
                            <Target className="w-3.5 h-3.5 text-bronze mt-1 shrink-0" />
                            <span className="text-sm text-slate font-manrope">{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right — Achievements */}
                  <div>
                    <div className="paper-card p-8">
                      <div className="text-label text-[9px] mb-6">Achievements</div>
                      <div className="space-y-4">
                        {company.achievements.map((a) => (
                          <div key={a} className="flex items-start gap-3">
                            <Award className="w-3.5 h-3.5 text-walnut mt-0.5 shrink-0" />
                            <span className="text-sm text-charcoal font-manrope">{a}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {ci < companies.length - 1 && <div className="section-divider mt-20" />}
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
    </>
  );
}
