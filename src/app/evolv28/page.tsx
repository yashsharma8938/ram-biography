"use client";
import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import { Brain, Moon, Waves, Shield, Smartphone, Zap, CheckCircle, Globe, ArrowRight } from "lucide-react";

const features = [
  { icon: Brain, title: "VCMF Technology", desc: "Variable Controlled Magnetic Field technology calibrated at 8-30 Hz to naturally synchronize with brainwave patterns.", color: "#2563eb" },
  { icon: Moon, title: "Sleep Architecture", desc: "Restores natural sleep cycles by guiding the brain through proper sleep stage transitions.", color: "#7c3aed" },
  { icon: Waves, title: "Ultra-Low Field", desc: "Operates at less than 1μT — thousands of times lower than everyday electronic devices.", color: "#06b6d4" },
  { icon: Shield, title: "Clinically Validated", desc: "Backed by clinical research demonstrating measurable improvements in sleep quality.", color: "#059669" },
  { icon: Smartphone, title: "Smart Integration", desc: "Companion app for personalized protocols, sleep tracking, and wellness insights.", color: "#0d7377" },
  { icon: Zap, title: "Non-Invasive", desc: "Chemical-free, habit-free. A fundamentally different approach to sleep wellness.", color: "#d4a853" },
];

const specs = [
  { label: "Daily Wear", value: "4+", unit: "Hours", desc: "Recommended daily usage" },
  { label: "Field Strength", value: "<1", unit: "μT", desc: "Ultra-low magnetic field" },
  { label: "Frequency", value: "8-30", unit: "Hz", desc: "Brainwave synchronization" },
  { label: "Markets", value: "4", unit: "Global", desc: "US · EU · Canada · India" },
];

const timeline = [
  { year: "2018", title: "Research Inception", desc: "Initial VCMF research and hypothesis formulation" },
  { year: "2020", title: "Prototype Development", desc: "First functional prototype and in-lab validation" },
  { year: "2022", title: "Clinical Trials", desc: "Randomized controlled trials demonstrating efficacy" },
  { year: "2023", title: "Market Launch", desc: "Regulatory clearance and global commercial launch" },
  { year: "2024", title: "Global Expansion", desc: "Available in 4 markets with growing clinical evidence" },
];

const clearances = [
  { market: "United States", flag: "🇺🇸", status: "Cleared" },
  { market: "European Union", flag: "🇪🇺", status: "Cleared" },
  { market: "Canada", flag: "🇨🇦", status: "Cleared" },
  { market: "India", flag: "🇮🇳", status: "Cleared" },
];

export default function Evolv28Page() {
  return (
    <>
      {/* Hero with Product Image */}
      <section className="pt-36 pb-20 gradient-hero relative overflow-hidden">
        <div className="container-editorial relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SectionReveal direction="left">
              <div>
                <div className="text-label mb-5">Wellness Technology</div>
                <h1 className="mb-5">
                  <span className="heading-editorial text-5xl md:text-7xl font-bold text-text-primary">Evolv</span>
                  <span className="heading-editorial text-5xl md:text-7xl font-bold text-teal">28</span>
                </h1>
                <div className="w-12 h-0.5 bg-gradient-to-r from-teal to-transparent mb-5" />
                <p className="text-body text-lg max-w-xl leading-relaxed mb-6">
                  The future of sleep wellness. A revolutionary wearable that uses magnetic field
                  technology to restore your natural sleep architecture.
                </p>
                <div className="flex items-center gap-4 mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 border border-teal/20 rounded-md bg-teal/5">
                    <div className="w-2 h-2 rounded-full bg-emerald" style={{ animation: "breathe 3s ease-in-out infinite" }} />
                    <span className="text-label text-[9px] text-emerald">Clinically Validated</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 border border-royal-blue/20 rounded-md bg-royal-blue/5">
                    <Globe className="w-3 h-3 text-royal-blue" />
                    <span className="text-label text-[9px] text-royal-blue">4 Global Markets</span>
                  </div>
                </div>
                <a href="https://evolv28.com" target="_blank" rel="noopener noreferrer" className="btn-editorial btn-walnut inline-flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </SectionReveal>
            <SectionReveal direction="right" delay={0.2}>
              <div className="relative flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal/5 via-transparent to-royal-blue/5 rounded-3xl" />
                  <Image src="/evolv28.jpg" alt="Evolv28 Wellness Wearable" fill className="object-contain p-8 drop-shadow-2xl" />
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Specs Row */}
      <section className="py-16 gradient-dark">
        <div className="container-editorial">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specs.map((spec, i) => (
              <SectionReveal key={spec.label} delay={0.1 * i}>
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="heading-cormorant text-4xl md:text-5xl font-light text-gold">{spec.value}</span>
                    <span className="text-sm text-gold/60 font-manrope">{spec.unit}</span>
                  </div>
                  <div className="text-label text-[9px] mb-1 text-teal-light">{spec.label}</div>
                  <div className="text-xs text-white/40 font-manrope">{spec.desc}</div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding gradient-editorial">
        <div className="container-editorial">
          <SectionReveal>
            <div className="max-w-2xl mb-12">
              <div className="text-label mb-4">Technology</div>
              <h2 className="heading-editorial text-3xl md:text-4xl font-bold text-text-primary mb-5">How It Works</h2>
              <p className="text-body leading-relaxed">
                Evolv28 uses Variable Controlled Magnetic Field technology to gently guide your
                brain into optimal sleep patterns — without chemicals, without habit formation.
              </p>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <SectionReveal key={feature.title} delay={0.08 * i}>
                <GlassCard className="h-full p-7 group">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-5 transition-all duration-500" style={{ background: feature.color + "12" }}>
                    <feature.icon className="w-4 h-4" style={{ color: feature.color }} />
                  </div>
                  <h3 className="heading-editorial text-lg font-semibold text-text-primary mb-3 group-hover:text-teal transition-colors">{feature.title}</h3>
                  <p className="text-sm text-slate font-manrope leading-relaxed">{feature.desc}</p>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Development Journey */}
      <section className="section-padding gradient-section">
        <div className="container-editorial">
          <SectionReveal>
            <div className="max-w-2xl mb-12">
              <div className="text-label mb-4">Development</div>
              <h2 className="heading-editorial text-3xl md:text-4xl font-bold text-text-primary mb-5">The Journey to Market</h2>
            </div>
          </SectionReveal>
          <div className="relative max-w-3xl">
            <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-teal/30 to-transparent" />
            {timeline.map((item, i) => (
              <SectionReveal key={item.year} delay={0.1 * i}>
                <div className="relative pl-12 mb-8 last:mb-0">
                  <div className="absolute left-[11px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-teal" />
                  <div className="text-label text-teal mb-1">{item.year}</div>
                  <h3 className="heading-editorial text-lg font-semibold text-text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-slate font-manrope">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global Clearances */}
      <section className="py-16 gradient-editorial">
        <div className="container-editorial">
          <SectionReveal>
            <div className="text-label mb-8 text-center">Global Market Clearance</div>
          </SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto">
            {clearances.map((c, i) => (
              <SectionReveal key={c.market} delay={0.1 * i}>
                <div className="paper-card p-5 text-center group hover:border-emerald/20 transition-colors">
                  <div className="text-3xl mb-3">{c.flag}</div>
                  <div className="text-sm font-manrope font-semibold text-text-primary mb-1">{c.market}</div>
                  <div className="flex items-center justify-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald" />
                    <span className="text-[10px] text-emerald font-manrope font-medium uppercase tracking-wider">{c.status}</span>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding gradient-dark">
        <div className="container-editorial">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center">
              <blockquote className="heading-cormorant text-2xl md:text-3xl italic text-white/80 leading-relaxed mb-6">
                &ldquo;True health extends beyond the absence of disease — it involves the harmonious
                balance of mind, body, and spirit.&rdquo;
              </blockquote>
              <div className="text-label text-gold">— Dr. Ram Shankar Upadhayaya</div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
