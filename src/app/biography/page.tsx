"use client";
import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import { biographySections, timelineEvents } from "@/data/biography";
import { GraduationCap, Briefcase, Lightbulb, User } from "lucide-react";

const categoryIcons: Record<string, typeof GraduationCap> = {
  education: GraduationCap, career: Briefcase, innovation: Lightbulb, personal: User,
};

export default function BiographyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 gradient-hero">
        <div className="container-editorial">
          <SectionReveal>
            <div className="max-w-3xl">
              <div className="text-label mb-6">Chapter I</div>
              <h1 className="heading-editorial text-4xl md:text-6xl font-bold text-charcoal mb-6">
                The Story
              </h1>
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
            <div className="max-w-2xl mb-20">
              <div className="text-label mb-4">Journey</div>
              <h2 className="heading-editorial text-3xl md:text-4xl font-bold text-charcoal">The Path of Discovery</h2>
            </div>
          </SectionReveal>

          <div className="relative pl-8 md:pl-12 max-w-3xl">
            <div className="timeline-line" />
            {timelineEvents.map((event, i) => {
              const Icon = categoryIcons[event.category] || User;
              return (
                <SectionReveal key={i} delay={0.08 * i}>
                  <div className="relative mb-14 pl-8">
                    <div className="absolute -left-[13px] top-1">
                      <div className="timeline-dot" />
                    </div>
                    <div className="text-label text-[9px] mb-2">{event.year}</div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-walnut/5 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-3.5 h-3.5 text-walnut" />
                      </div>
                      <div>
                        <h3 className="heading-editorial text-lg font-semibold text-charcoal mb-1">{event.title}</h3>
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
              <div className="max-w-3xl mb-24 last:mb-0">
                <div className="text-label mb-4">{section.subtitle || `Section ${i + 1}`}</div>
                <h2 className="heading-editorial text-2xl md:text-3xl font-bold text-charcoal mb-8">{section.title}</h2>
                {section.content.map((para, j) => (
                  <p key={j} className="text-body text-base leading-[1.9] mb-6">{para}</p>
                ))}
                {section.quote && (
                  <blockquote className="editorial-quote mt-8">
                    &ldquo;{section.quote.text}&rdquo;
                    {section.quote.attribution && (
                      <div className="mt-3 text-label not-italic text-[9px]">— {section.quote.attribution}</div>
                    )}
                  </blockquote>
                )}
                {i < biographySections.length - 1 && <div className="section-divider mt-16" />}
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
    </>
  );
}
