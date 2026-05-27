"use client";
import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import { teamMembers } from "@/data/team";
import { User } from "lucide-react";

const catLabels: Record<string, string> = {
  leadership: "Leadership", research: "Research", team: "Team", advisor: "Advisory",
};

const categories = ["leadership", "research", "team", "advisor"];

export default function TeamPage() {
  return (
    <>
      <section className="pt-40 pb-24 gradient-hero">
        <div className="container-editorial">
          <SectionReveal>
            <div className="max-w-3xl">
              <div className="text-label mb-6">People</div>
              <h1 className="heading-editorial text-4xl md:text-6xl font-bold text-charcoal mb-6">The Team</h1>
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
            return (
              <div key={cat} className="mb-20 last:mb-0">
                <SectionReveal>
                  <div className="text-label mb-8">{catLabels[cat]}</div>
                </SectionReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {members.map((member, i) => (
                    <SectionReveal key={member.id} delay={0.08 * i}>
                      <GlassCard className="p-8 group">
                        <div className="w-12 h-12 rounded-full bg-walnut/5 flex items-center justify-center mb-4 group-hover:bg-walnut/10 transition-all">
                          <User className="w-5 h-5 text-walnut" />
                        </div>
                        <h3 className="heading-editorial text-lg font-semibold text-charcoal mb-1">{member.name}</h3>
                        <div className="text-label text-[9px] mb-3">{member.designation}</div>
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
