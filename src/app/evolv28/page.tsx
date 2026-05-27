"use client";
import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import { Brain, Moon, Waves, Shield, Smartphone, Zap } from "lucide-react";

const features = [
  { icon: Brain, title: "VCMF Technology", desc: "Variable Controlled Magnetic Field technology calibrated at 8-30 Hz to naturally synchronize with brainwave patterns." },
  { icon: Moon, title: "Sleep Architecture", desc: "Restores natural sleep cycles by guiding the brain through proper sleep stage transitions." },
  { icon: Waves, title: "Ultra-Low Field", desc: "Operates at less than 1μT — thousands of times lower than everyday electronic devices." },
  { icon: Shield, title: "Clinically Validated", desc: "Backed by clinical research demonstrating measurable improvements in sleep quality." },
  { icon: Smartphone, title: "Smart Integration", desc: "Companion app for personalized protocols, sleep tracking, and wellness insights." },
  { icon: Zap, title: "Non-Invasive", desc: "Chemical-free, habit-free. A fundamentally different approach to sleep wellness." },
];

const specs = [
  { label: "Hours Daily Wear", value: "4+", desc: "Recommended daily usage" },
  { label: "Ultra-Low Field", value: "<1μT", desc: "Magnetic field strength" },
  { label: "Hz Frequency Range", value: "8-30", desc: "Brainwave synchronization" },
  { label: "Markets Cleared", value: "4", desc: "Regulatory approvals" },
];

export default function Evolv28Page() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-32 gradient-hero relative">
        <div className="container-editorial relative z-10">
          <SectionReveal>
            <div className="max-w-3xl">
              <div className="text-label mb-6">Wellness Technology</div>
              <h1 className="mb-6">
                <span className="heading-editorial text-5xl md:text-7xl font-bold text-charcoal">Evolv</span>
                <span className="heading-editorial text-5xl md:text-7xl font-bold text-bronze">28</span>
              </h1>
              <p className="text-body text-lg max-w-xl leading-relaxed mb-8">
                The future of sleep wellness. A revolutionary wearable that uses magnetic field
                technology to restore your natural sleep architecture.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-bronze/20 rounded-sm">
                <div className="w-2 h-2 rounded-full bg-bronze" style={{ animation: "breathe 3s ease-in-out infinite" }} />
                <span className="text-label text-[9px]">Clinically Validated</span>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 gradient-section">
        <div className="container-editorial">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {specs.map((spec, i) => (
              <SectionReveal key={spec.label} delay={0.1 * i}>
                <div className="text-center">
                  <div className="heading-cormorant text-4xl md:text-5xl font-light text-walnut mb-1">{spec.value}</div>
                  <div className="text-label text-[9px] mb-1">{spec.label}</div>
                  <div className="text-xs text-ash font-manrope">{spec.desc}</div>
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
            <div className="max-w-2xl mb-16">
              <div className="text-label mb-4">Technology</div>
              <h2 className="heading-editorial text-3xl md:text-4xl font-bold text-charcoal mb-6">How It Works</h2>
              <p className="text-body leading-relaxed">
                Evolv28 uses Variable Controlled Magnetic Field technology to gently guide your
                brain into optimal sleep patterns — without chemicals, without habit formation.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <SectionReveal key={feature.title} delay={0.08 * i}>
                <GlassCard className="h-full p-8 group">
                  <div className="w-10 h-10 rounded-full bg-walnut/5 flex items-center justify-center mb-6 group-hover:bg-walnut/10 transition-all duration-500">
                    <feature.icon className="w-4 h-4 text-walnut" />
                  </div>
                  <h3 className="heading-editorial text-lg font-semibold text-charcoal mb-3 group-hover:text-walnut transition-colors">{feature.title}</h3>
                  <p className="text-sm text-slate font-manrope leading-relaxed">{feature.desc}</p>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding gradient-deep">
        <div className="container-editorial">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center">
              <blockquote className="heading-cormorant text-2xl md:text-3xl italic text-charcoal/70 leading-relaxed mb-6">
                &ldquo;True health extends beyond the absence of disease — it involves the harmonious
                balance of mind, body, and spirit.&rdquo;
              </blockquote>
              <div className="text-label">— Dr. Ram Shankar Upadhayaya</div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
