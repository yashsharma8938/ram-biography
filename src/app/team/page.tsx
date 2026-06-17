"use client";
import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import { teamMembers } from "@/data/team";
import { User } from "lucide-react";

const catLabels: Record<string, string> = {
  leadership: "Leadership", research: "Research", team: "Team", advisor: "Advisory",
};

const catColors: Record<string, string> = {
  leadership: "#0d7377", research: "#2563eb", team: "#059669", advisor: "#7c3aed",
};

const categories = ["leadership", "research", "team", "advisor"];

export default function TeamPage() {
  return (
    <>
      <section className="pt-36 pb-20 gradient-hero">
        <div className="container-editorial">
          <SectionReveal>
            <div className="max-w-3xl">
              <div className="text-label mb-5">People</div>
              <h1 className="heading-editorial text-4xl md:text-6xl font-bold text-text-primary mb-5">The Team</h1>
              <div className="w-12 h-0.5 bg-gradient-to-r from-teal to-transparent mb-5" />
              <p className="text-body text-lg max-w-2xl leading-relaxed">
                The dedicated individuals who bring scientific vision to life.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section-padding gradient-editorial">
        <div className="container-editorial">
          {categories.map((cat) => {
            const members = teamMembers.filter((m) => m.category === cat);
            if (members.length === 0) return null;
            const color = catColors[cat] || "#0d7377";
            return (
              <div key={cat} className="mb-16 last:mb-0">
                <SectionReveal>
                  <div className="text-label mb-6" style={{ color }}>{catLabels[cat]}</div>
                </SectionReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {members.map((member, i) => (
                    <SectionReveal key={member.id} delay={0.08 * i}>
                      <GlassCard className="p-7 group">
                        <div className="w-11 h-11 rounded-full flex items-center justify-center mb-4 transition-all" style={{ background: color + "12" }}>
                          <User className="w-5 h-5" style={{ color }} />
                        </div>
                        <h3 className="heading-editorial text-lg font-semibold text-text-primary mb-1">{member.name}</h3>
                        <div className="text-label text-[9px] mb-3" style={{ color }}>{member.designation}</div>
                        <p className="text-sm text-slate font-manrope leading-relaxed">{member.contribution}</p>
                      </GlassCard>
                    </SectionReveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
