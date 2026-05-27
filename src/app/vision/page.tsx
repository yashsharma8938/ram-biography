"use client";
import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import { Cpu, HeartPulse, Sparkles, Globe, Microscope, Leaf } from "lucide-react";

const visions = [
  { icon: Cpu, title: "AI-Powered Drug Discovery", desc: "Harnessing artificial intelligence and machine learning to accelerate the identification of novel therapeutic candidates, reducing discovery timelines from years to months." },
  { icon: HeartPulse, title: "Personalized Medicine", desc: "Developing targeted therapies tailored to individual genetic profiles, ensuring maximum efficacy and minimal side effects for every patient." },
  { icon: Sparkles, title: "Wellness Technology", desc: "Pioneering non-invasive wellness devices that harmonize modern science with ancient wisdom, making preventive healthcare accessible to all." },
  { icon: Globe, title: "Global Health Equity", desc: "Working to ensure that breakthrough medicines and wellness technologies reach underserved populations across the globe." },
  { icon: Microscope, title: "Next-Gen Therapeutics", desc: "Exploring the frontiers of molecular biology, including CRISPR gene editing and mRNA technologies, for previously untreatable conditions." },
  { icon: Leaf, title: "Science & Consciousness", desc: "Investigating the intersection of quantum biology, neuroscience, and consciousness — understanding what it truly means to be alive and well." },
];

export default function VisionPage() {
  return (
    <>
      <section className="pt-40 pb-24 gradient-hero">
        <div className="container-editorial">
          <SectionReveal>
            <div className="max-w-3xl">
              <div className="text-label mb-6">The Future</div>
              <h1 className="heading-editorial text-4xl md:text-6xl font-bold text-charcoal mb-6">Vision</h1>
              <p className="text-body text-lg max-w-2xl leading-relaxed">
                Shaping the future of medicine, technology, and human wellness.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section-padding gradient-editorial">
        <div className="container-editorial">
          <SectionReveal>
            <blockquote className="editorial-quote max-w-xl mb-20">
              &ldquo;The future of medicine lies not just in treating disease, but in understanding and optimizing
              the full spectrum of human potential.&rdquo;
              <div className="mt-4 text-label not-italic text-[9px]">— Dr. Ram Shankar Upadhayaya</div>
            </blockquote>
          </SectionReveal>

          <div className="trinity-grid max-w-5xl">
            {visions.map((v, i) => (
              <SectionReveal key={v.title} delay={0.1 * i}>
                <GlassCard className="h-full p-8 group">
                  <div className="w-10 h-10 rounded-full bg-walnut/5 flex items-center justify-center mb-6 group-hover:bg-walnut/10 transition-all duration-500">
                    <v.icon className="w-4 h-4 text-walnut" />
                  </div>
                  <h3 className="heading-editorial text-lg font-semibold text-charcoal mb-3 group-hover:text-walnut transition-colors">{v.title}</h3>
                  <p className="text-sm text-slate font-manrope leading-relaxed">{v.desc}</p>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="section-padding gradient-deep">
        <div className="container-editorial">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center">
              <div className="heading-cormorant text-3xl md:text-4xl italic text-charcoal/70 leading-relaxed mb-8">
                &ldquo;A lifetime devoted to science, innovation, wellness, and humanity — this is not
                just a career, it is a sacred responsibility.&rdquo;
              </div>
              <div className="divider-walnut mx-auto mb-6" />
              <div className="text-label">Dr. Ram Shankar Upadhayaya</div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
