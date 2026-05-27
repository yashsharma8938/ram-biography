"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ChevronRight, BookOpen, FlaskRound, Lightbulb, Heart, ArrowDown } from "lucide-react";
import RotatingText from "@/components/ui/RotatingText";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import ParticleField from "@/components/ui/ParticleField";
import SacredGeometry from "@/components/ui/SacredGeometry";
import { stats } from "@/data/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MoleculeCanvas = dynamic(() => import("@/components/ui/MoleculeCanvas"), { ssr: false });

export default function HomePage() {
  const container = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // Book opening effect: parallax on hero sections
    gsap.to(".hero-left", {
      y: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.to(".hero-right", {
      y: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });
    
    // 3D Canvas stays pinned longer or moves differently
    gsap.to(".hero-center", {
      scale: 1.2,
      y: 200,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });
    
  }, { scope: container });

  return (
    <div ref={container} className="relative w-full overflow-hidden">
      {/* ═══ HERO SECTION (3 COLUMN) ═══ */}
      <section className="hero-section relative min-h-screen flex flex-col lg:flex-row items-stretch overflow-hidden gradient-hero">
        
        {/* Subtle background particles for the whole hero */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <ParticleField color="160, 132, 92" count={20} />
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
            <SacredGeometry size={800} />
          </div>
        </div>

        {/* LEFT COLUMN: Narrative */}
        <div className="hero-left w-full lg:w-[35%] relative z-20 flex flex-col justify-center px-8 lg:pl-16 xl:pl-24 py-24 lg:py-0">
          <div className="flex items-center gap-3 mb-10">
            <div className="divider-walnut" style={{ width: 40 }} />
            <span className="text-label uppercase tracking-widest text-xs">Scientist · Innovator · Visionary</span>
          </div>

          <h1 className="mb-6 leading-none">
            <span className="heading-editorial text-5xl lg:text-7xl xl:text-8xl font-bold block text-charcoal">
              Dr. Ram
            </span>
            <span className="heading-editorial text-5xl lg:text-7xl xl:text-8xl font-bold block text-bronze mt-2">
              Shankar
            </span>
             <span className="heading-editorial text-4xl lg:text-6xl xl:text-7xl font-bold block text-walnut mt-2">
              Upadhayaya
            </span>
          </h1>

          <div className="text-lg md:text-xl text-slate font-manrope mb-8 h-8">
            <RotatingText texts={["Scientist", "Innovator", "Research Visionary", "Wellness Pioneer", "Mentor", "Entrepreneur"]} interval={3000} />
          </div>

          <p className="heading-cormorant text-xl md:text-2xl italic text-slate/80 mb-10 max-w-md leading-relaxed border-l-2 border-bronze/30 pl-6">
            &ldquo;Science is not just a profession — it is a calling to serve humanity.&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link href="/biography" className="btn-editorial btn-walnut flex items-center gap-2">
              Begin Journey <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* CENTER COLUMN: 3D Core */}
        <div className="hero-center w-full lg:w-[30%] relative z-10 min-h-[50vh] lg:min-h-screen flex items-center justify-center pointer-events-none overflow-hidden lg:overflow-visible">
          {/* A soft glow behind the 3D element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full lg:w-[150%] lg:h-[150%] radial-glow-warm pointer-events-none" />
          <div className="absolute inset-0 w-full h-full mx-auto my-auto flex items-center justify-center">
            <MoleculeCanvas className="w-full h-full lg:w-[120%] lg:h-[120%] pointer-events-auto" />
          </div>
        </div>

        {/* RIGHT COLUMN: Portrait & Lighting */}
        <div className="hero-right w-full lg:w-[35%] relative z-20 flex flex-col justify-center px-8 lg:pr-16 xl:pr-24 pb-24 lg:py-0">
          <div className="relative w-full aspect-[3/4] max-w-sm mx-auto lg:ml-auto">
            {/* Museum-grade frame */}
            <div className="absolute inset-0 image-frame p-3 bg-warm-white shadow-2xl">
              <div className="w-full h-full relative overflow-hidden group">
                <Image 
                  src="/portrait.jpg" 
                  alt="Dr. Ram Shankar Upadhayaya" 
                  fill 
                  className="object-cover filter sepia-[0.1] saturate-[0.85] contrast-[1.1] transition-transform duration-[20s] group-hover:scale-110"
                />
                {/* Simulated documentary lighting */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-bronze/10 to-transparent pointer-events-none" />
                
                {/* Subtle vignette */}
                <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] pointer-events-none" />
              </div>
            </div>
            {/* Floating ornamental element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-bronze/20 rounded-full flex items-center justify-center bg-ivory shadow-lg">
               <span className="text-[10px] uppercase tracking-widest font-manrope text-walnut">Archive</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30" style={{ animation: "float-gentle 4s ease-in-out infinite" }}>
          <span className="text-[9px] uppercase tracking-[0.25em] text-ash font-manrope">Scroll to Open</span>
          <ArrowDown className="w-4 h-4 text-bronze/60" />
        </div>
      </section>

      {/* ═══ CHAPTERS (Book Pages) ═══ */}
      <div className="relative z-30 bg-ivory shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        
        {/* STATS */}
        <section className="book-chapter relative py-24 gradient-section border-t border-bronze/10">
          <div className="container-editorial">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
              {stats.map((stat) => (
                <AnimatedCounter key={stat.label} end={stat.value} suffix={stat.suffix} label={stat.label} />
              ))}
            </div>
          </div>
        </section>

        {/* THE LEGACY */}
        <section className="book-chapter section-padding gradient-editorial border-t border-bronze/10">
          <div className="container-editorial">
            <SectionReveal>
              <div className="max-w-3xl mb-20">
                <div className="text-label mb-6">The Legacy</div>
                <h2 className="heading-editorial text-4xl md:text-6xl font-bold text-charcoal mb-8">
                  A Lifetime Devoted<br />to Science
                </h2>
                <p className="text-body text-xl leading-relaxed max-w-2xl text-slate">
                  From the corridors of Harvard Medical School to the innovation hubs of Hyderabad,
                  Dr. Ram Shankar Upadhayaya has dedicated over two decades to advancing human health
                  through medicinal chemistry, drug discovery, and visionary wellness innovations.
                </p>
              </div>
            </SectionReveal>

            {/* Chapter Grid — Trinity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mt-24">
              {[
                { num: "I", icon: BookOpen, title: "The Journey", desc: "A lifetime devoted to science.", href: "/biography", label: "Read Biography" },
                { num: "II", icon: FlaskRound, title: "The Research", desc: "24+ years pioneering drug discovery.", href: "/research", label: "View Research" },
                { num: "III", icon: Lightbulb, title: "The Innovation", desc: "Transforming scientific ideas into solutions.", href: "/innovations", label: "Explore Innovations" },
                { num: "IV", icon: Heart, title: "The Vision", desc: "Bridging modern science with holistic wellness.", href: "/vision", label: "Discover Vision" },
              ].map((ch, i) => (
                <SectionReveal key={ch.title} delay={0.1 * i} direction="up">
                  <Link href={ch.href}>
                    <GlassCard className="h-full group cursor-pointer relative overflow-hidden p-12 hover:-translate-y-2 transition-transform duration-500 shadow-lg hover:shadow-xl bg-warm-white">
                      <div className="chapter-number text-8xl absolute -right-6 -bottom-6 opacity-5" style={{ fontFamily: "var(--font-playfair)" }}>{ch.num}</div>
                      <div className="relative z-10">
                        <div className="w-14 h-14 rounded-full bg-walnut/5 flex items-center justify-center mb-8 group-hover:bg-walnut/10 transition-all duration-500">
                          <ch.icon className="w-6 h-6 text-walnut" />
                        </div>
                        <h3 className="heading-editorial text-2xl font-bold text-charcoal mb-4 group-hover:text-walnut transition-colors duration-500">{ch.title}</h3>
                        <p className="text-base text-slate leading-relaxed font-manrope mb-8">{ch.desc}</p>
                        <span className="text-label text-[10px] group-hover:text-walnut transition-colors font-bold uppercase tracking-widest">
                          {ch.label} &rarr;
                        </span>
                      </div>
                    </GlassCard>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="book-chapter section-padding relative overflow-hidden gradient-deep border-t border-bronze/10">
          <div className="container-editorial relative z-10">
            <SectionReveal>
              <div className="max-w-3xl mx-auto text-center bg-ivory p-16 md:p-24 shadow-2xl relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-walnut to-transparent" />
                <div className="text-label mb-6">Discover</div>
                <h2 className="heading-editorial text-4xl md:text-5xl font-bold text-charcoal mb-8">
                  Explore the Complete Archive
                </h2>
                <p className="text-body text-xl max-w-xl mx-auto mb-12">
                  Step inside the digital museum detailing a life dedicated to science, innovation, and humanity.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link href="/biography" className="btn-editorial btn-walnut px-8 py-4">Read Biography</Link>
                  <Link href="/contact" className="btn-editorial btn-outline-warm px-8 py-4">Connect</Link>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

      </div>
    </div>
  );
}
