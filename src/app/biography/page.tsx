"use client";
import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import { biographySections, timelineEvents } from "@/data/biography";
import { GraduationCap, Briefcase, Lightbulb, User } from "lucide-react";

const categoryIcons: Record<string, typeof GraduationCap> = {
  education: GraduationCap, career: Briefcase, innovation: Lightbulb, personal: User,
};

const categoryColors: Record<string, string> = {
  education: "#2563eb", career: "#0d7377", innovation: "#059669", personal: "#7c3aed",
};

export default function BiographyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 gradient-hero">
        <div className="container-editorial">
          <SectionReveal>
            <div className="max-w-3xl">
              <div className="text-label mb-5">Chapter I</div>
              <h1 className="heading-editorial text-4xl md:text-6xl font-bold text-text-primary mb-5">
                The Story
              </h1>
              <div className="w-12 h-0.5 bg-gradient-to-r from-teal to-transparent mb-5" />
              <p className="text-body text-lg max-w-2xl leading-relaxed">
                The journey of a scientist who transformed curiosity into a lifetime of discovery,
                innovation, and service to humanity.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding gradient-editorial">
        <div className="container-editorial">
          <SectionReveal>
            <div className="max-w-2xl mb-12">
              <div className="text-label mb-4">Journey</div>
              <h2 className="heading-editorial text-3xl md:text-4xl font-bold text-text-primary">The Path of Discovery</h2>
            </div>
          </SectionReveal>

          <div className="relative pl-8 md:pl-12 max-w-3xl">
            <div className="timeline-line" />
            {timelineEvents.map((event, i) => {
              const Icon = categoryIcons[event.category] || User;
              const color = categoryColors[event.category] || "#0d7377";
              return (
                <SectionReveal key={i} delay={0.08 * i}>
                  <div className="relative mb-8 pl-8">
                    <div className="absolute -left-[13px] top-1">
                      <div className="timeline-dot" />
                    </div>
                    <div className="text-label text-[9px] mb-2" style={{ color }}>{event.year}</div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: color + "14" }}>
                        <Icon className="w-3.5 h-3.5" style={{ color }} />
                      </div>
                      <div>
                        <h3 className="heading-editorial text-lg font-semibold text-text-primary mb-1">{event.title}</h3>
                        <p className="text-sm text-slate font-manrope leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="section-padding gradient-deep">
        <div className="container-editorial">
          {biographySections.map((section, i) => (
            <SectionReveal key={section.id} delay={0.1}>
              <div className="max-w-3xl mb-14 last:mb-0">
                <div className="text-label mb-4">{section.subtitle || `Section ${i + 1}`}</div>
                <h2 className="heading-editorial text-2xl md:text-3xl font-bold text-text-primary mb-6">{section.title}</h2>
                {section.content.map((para, j) => (
                  <p key={j} className="text-body text-base leading-[1.9] mb-5">{para}</p>
                ))}
                {section.quote && (
                  <blockquote className="editorial-quote mt-6">
                    &ldquo;{section.quote.text}&rdquo;
                    {section.quote.attribution && (
                      <div className="mt-3 text-label not-italic text-[9px]">— {section.quote.attribution}</div>
                    )}
                  </blockquote>
                )}
                {i < biographySections.length - 1 && <div className="section-divider mt-14" />}
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
    </>
  );
}
