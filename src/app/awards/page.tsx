"use client";
import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import SacredGeometry from "@/components/ui/SacredGeometry";
import { Award, Star, GraduationCap, Trophy } from "lucide-react";

const awards = [
  { icon: GraduationCap, title: "Ph.D. in Medicinal Chemistry", org: "Academic Institution", desc: "Doctoral degree in medicinal chemistry with focus on drug design and molecular therapeutics.", color: "#2563eb" },
  { icon: GraduationCap, title: "D.Sc. in Medicinal Chemistry", org: "Academic Institution", desc: "Doctor of Science degree — a rare distinction recognizing outstanding contribution to the field.", color: "#0d7377" },
  { icon: Star, title: "Harvard Medical School Fellowship", org: "Harvard University", desc: "Research fellowship at one of the world's most prestigious biomedical research institutions.", color: "#d4a853" },
  { icon: Star, title: "Max Planck Institute Research", org: "Max Planck Society, Germany", desc: "Research contribution at Europe's premier scientific organization for fundamental research.", color: "#059669" },
  { icon: Star, title: "Uppsala University Research", org: "Uppsala University, Sweden", desc: "Advanced pharmaceutical science research at this historic Scandinavian institution.", color: "#7c3aed" },
  { icon: Trophy, title: "COVID-19 Therapeutic Leadership", org: "Government of India Recognition", desc: "Recognized for leading collaborative research efforts for COVID-19 therapeutics through Laxai Life Sciences.", color: "#06b6d4" },
  { icon: Award, title: "CRDMO Industry Leadership", org: "Pharmaceutical Industry", desc: "Built and led two major CRDMOs serving global pharmaceutical companies with end-to-end solutions.", color: "#b87333" },
  { icon: Award, title: "Evolv28 Global Clearance", org: "US, EU, Canada, India", desc: "Achieved wellness clearance in four major global markets for the Evolv28 VCMF technology platform.", color: "#0d7377" },
];

export default function AwardsPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="relative py-16 gradient-hero overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20"><SacredGeometry size={500} /></div>
        <div className="container-editorial relative z-10 text-center">
          <div className="text-label mb-4">Recognition</div>
          <h1 className="heading-editorial text-4xl md:text-6xl font-bold text-text-primary mb-4">Awards & Honors</h1>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4" />
          <p className="text-body text-slate max-w-2xl mx-auto text-lg">
            A distinguished career recognized by the world&apos;s leading scientific institutions and industry bodies.
          </p>
        </div>
      </section>

      <section className="section-padding gradient-section">
        <div className="container-editorial max-w-4xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden md:block" />

            <div className="space-y-6">
              {awards.map((award, i) => (
                <SectionReveal key={i} delay={0.08 * i} direction="left">
                  <div className="flex items-start gap-6 md:pl-16 relative">
                    {/* Timeline Node */}
                    <div className="hidden md:flex absolute left-[29px] top-6 w-3 h-3 rounded-full border-2 bg-white z-10" style={{ borderColor: award.color }} />
                    <GlassCard className="flex-1 p-6 md:p-7">
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: award.color + "12" }}>
                          <award.icon className="w-5 h-5" style={{ color: award.color }} />
                        </div>
                        <div>
                          <h3 className="heading-editorial text-lg font-semibold text-text-primary mb-1">{award.title}</h3>
                          <div className="text-label text-[9px] mb-2" style={{ color: award.color }}>{award.org}</div>
                          <p className="text-sm text-slate font-manrope leading-relaxed">{award.desc}</p>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
