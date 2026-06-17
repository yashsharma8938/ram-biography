"use client";

import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import ParticleField from "@/components/ui/ParticleField";
import SacredGeometry from "@/components/ui/SacredGeometry";
import { ArrowRight, CheckCircle2, Shield, Activity } from "lucide-react";
import dynamic from "next/dynamic";

const MoleculeCanvas = dynamic(() => import("@/components/ui/MoleculeCanvas"), { ssr: false });

export default function MitozzPage() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      
      {/* ═══ HERO SECTION ═══ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden gradient-hero pt-20">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <ParticleField color="100, 130, 180" count={20} />
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <SacredGeometry size={1000} />
          </div>
        </div>

        <div className="container-editorial relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            
            {/* Left: Product Story */}
            <SectionReveal direction="left">
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="divider-walnut" style={{ width: 40 }} />
                  <span className="text-label uppercase tracking-widest text-xs">Developed by Cellestra.in</span>
                </div>
                
                <h1 className="heading-editorial text-5xl md:text-7xl font-bold text-text-primary mb-5">
                  Mitozz.
                </h1>
                
                <p className="heading-cormorant text-2xl md:text-3xl italic text-teal mb-6 leading-relaxed">
                  Cellular regeneration through advanced mitochondrial targeting.
                </p>

                <p className="text-body text-lg text-slate mb-10 max-w-lg">
                  Mitozz represents a paradigm shift in therapeutic wellness. By directly targeting mitochondrial dysfunction at the molecular level, it accelerates cellular repair and enhances systemic vitality.
                </p>

                <div className="flex items-center gap-6">
                  <Link href="#research" className="btn-editorial btn-walnut flex items-center gap-2">
                    Scientific Breakdown <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="https://cellestra.in" target="_blank" className="text-label font-bold text-teal hover:text-teal-light transition-colors flex items-center gap-1">
                    Visit Cellestra.in
                  </Link>
                </div>
              </div>
            </SectionReveal>

            {/* Right: Exploded 3D View */}
            <SectionReveal direction="right" delay={0.2}>
              <div className="relative h-[55vh] w-full flex items-center justify-center pointer-events-none">
                <div className="absolute w-[120%] h-[120%] radial-glow-teal opacity-50" />
                <div className="relative w-full max-w-lg aspect-square">
                  <div className="absolute inset-0 rounded-full border border-teal/20 shadow-cinematic bg-white/5 animate-[breathe_8s_ease-in-out_infinite]" />
                  <div className="absolute inset-4 rounded-full border border-teal/10 bg-gradient-to-tr from-white/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MoleculeCanvas className="w-[120%] h-[120%] pointer-events-auto" />
                  </div>
                  
                  {/* Floating labels */}
                  <div className="absolute top-[20%] -left-10 bg-white border border-teal/20 px-4 py-2 rounded-md shadow-xl text-label text-[10px] hidden md:block">
                    Mitochondrial Matrix
                  </div>
                  <div className="absolute bottom-[30%] -right-12 bg-white border border-teal/20 px-4 py-2 rounded-md shadow-xl text-label text-[10px] hidden md:block">
                    Targeted Delivery
                  </div>
                </div>
              </div>
            </SectionReveal>

          </div>
        </div>
      </section>

      {/* ═══ SCIENTIFIC BREAKDOWN ═══ */}
      <section id="research" className="section-padding relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.04)] border-t border-teal/10" style={{ background: "var(--color-surface-primary)" }}>
        <div className="container-editorial">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-label mb-5">The Science</div>
              <h2 className="heading-editorial text-4xl md:text-5xl font-bold text-text-primary mb-6">
                How Mitozz Works
              </h2>
              <p className="text-body text-lg">
                Developed over years of rigorous biochemical research, Mitozz bypasses traditional cellular barriers to deliver proprietary compounds directly to the mitochondria, reversing age-related decline.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Activity, title: "Cellular Energy", desc: "Restores optimal ATP production pathways, reducing systemic fatigue.", color: "#0d7377" },
              { icon: Shield, title: "Oxidative Defense", desc: "Neutralizes reactive oxygen species at the source, preventing DNA damage.", color: "#2563eb" },
              { icon: CheckCircle2, title: "Bioavailability", desc: "Utilizes a novel lipid-delivery system for 98% cellular uptake.", color: "#059669" }
            ].map((feature, i) => (
              <SectionReveal key={i} delay={0.1 * i} direction="up">
                <div className="paper-card p-10 text-center h-full hover:border-teal/20 transition-colors group">
                  <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ background: feature.color + "12" }}>
                    <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                  </div>
                  <h3 className="heading-cormorant text-2xl font-bold text-text-primary mb-3">{feature.title}</h3>
                  <p className="text-sm font-manrope text-slate leading-relaxed">{feature.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
