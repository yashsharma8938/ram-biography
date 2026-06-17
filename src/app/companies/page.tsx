"use client";
import SectionReveal from "@/components/ui/SectionReveal";
import { companies } from "@/data/companies";
import { MapPin, Target, Award } from "lucide-react";

const companyColors = ["#0d7377", "#2563eb", "#059669", "#7c3aed"];

export default function CompaniesPage() {
  return (
    <>
      <section className="pt-36 pb-20 gradient-hero">
        <div className="container-editorial">
          <SectionReveal>
            <div className="max-w-3xl">
              <div className="text-label mb-5">Institutions</div>
              <h1 className="heading-editorial text-4xl md:text-6xl font-bold text-text-primary mb-5">Companies</h1>
              <div className="w-12 h-0.5 bg-gradient-to-r from-teal to-transparent mb-5" />
              <p className="text-body text-lg max-w-2xl leading-relaxed">
                Building institutions that transform scientific discovery into real-world impact.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section-padding gradient-editorial">
        <div className="container-editorial">
          {companies.map((company, ci) => {
            const color = companyColors[ci % companyColors.length];
            return (
              <SectionReveal key={company.id} delay={0.1}>
                <div className="max-w-4xl mb-20 last:mb-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Left — Info */}
                    <div className="lg:col-span-2">
                      <h2 className="heading-editorial text-3xl md:text-4xl font-bold text-text-primary mb-2">{company.name}</h2>
                      <div className="flex items-center gap-4 mb-5">
                        <span className="text-label" style={{ color }}>{company.role}</span>
                        <div className="flex items-center gap-1 text-xs text-ash font-manrope">
                          <MapPin className="w-3 h-3" /> {company.location}
                        </div>
                      </div>
                      <p className="text-body text-base leading-[1.9] mb-6">{company.description}</p>

                      {/* Focus Areas */}
                      <div className="mb-6">
                        <div className="text-label text-[9px] mb-3">Focus Areas</div>
                        <div className="flex flex-wrap gap-2">
                          {company.focusAreas.map((area) => (
                            <span key={area} className="px-3 py-1.5 text-xs font-manrope rounded-md" style={{ background: color + "10", color }}>{area}</span>
                          ))}
                        </div>
                      </div>

                      {/* Contributions */}
                      <div>
                        <div className="text-label text-[9px] mb-3">Key Contributions</div>
                        <div className="space-y-2.5">
                          {company.contributions.map((c) => (
                            <div key={c} className="flex items-start gap-3">
                              <Target className="w-3.5 h-3.5 mt-1 shrink-0" style={{ color }} />
                              <span className="text-sm text-slate font-manrope">{c}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right — Achievements */}
                    <div>
                      <div className="paper-card p-7">
                        <div className="text-label text-[9px] mb-5">Achievements</div>
                        <div className="space-y-3.5">
                          {company.achievements.map((a) => (
                            <div key={a} className="flex items-start gap-3">
                              <Award className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color }} />
                              <span className="text-sm text-text-primary font-manrope">{a}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {ci < companies.length - 1 && <div className="section-divider mt-16" />}
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
