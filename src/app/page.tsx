"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ChevronRight, BookOpen, FlaskRound, Lightbulb, Heart, ArrowDown, Microscope, Award, Globe, FileText } from "lucide-react";
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

// Chapter card accent colors — scientific palette
const CHAPTER_ACCENTS = [
  { icon: BookOpen,   dot: "bg-teal",        border: "hover:border-teal/30",        iconBg: "group-hover:bg-teal/8",        iconColor: "text-teal"        },
  { icon: FlaskRound, dot: "bg-royal-blue",   border: "hover:border-royal-blue/30",   iconBg: "group-hover:bg-royal-blue/8",   iconColor: "text-royal-blue"   },
  { icon: Lightbulb,  dot: "bg-emerald",      border: "hover:border-emerald/30",      iconBg: "group-hover:bg-emerald/8",      iconColor: "text-emerald"      },
  { icon: Heart,      dot: "bg-sci-violet",   border: "hover:border-sci-violet/30",   iconBg: "group-hover:bg-sci-violet/8",   iconColor: "text-sci-violet"   },
];

// Scientific authority mini-stats
const AUTHORITY_ITEMS = [
  { icon: FileText,   value: "50+",  label: "Publications",         accent: "#0d7377" },
  { icon: Award,      value: "15+",  label: "Patents Filed",         accent: "#2563eb" },
  { icon: Globe,      value: "10+",  label: "Global Collaborations", accent: "#059669" },
  { icon: Microscope, value: "24+",  label: "Years of Research",     accent: "#7c3aed" },
];

export default function HomePage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(".hero-left", {
      y: -80, opacity: 0,
      scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: true },
    });
    gsap.to(".hero-right", {
      y: -80, opacity: 0,
      scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: true },
    });
    gsap.to(".hero-center", {
      scale: 1.1, y: 160,
      scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: true },
    });
  }, { scope: container });

  return (
    <div ref={container} className="relative w-full overflow-hidden">

      {/* ═══════════════════════════════════════════════════
          HERO SECTION — 3-Column: Narrative | DNA | Portrait
          ═══════════════════════════════════════════════════ */}
      <section className="hero-section relative min-h-screen flex flex-col lg:flex-row items-stretch overflow-hidden gradient-hero">

        {/* Background layer — z-index 0, strictly behind everything */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
          <ParticleField color="100, 130, 180" count={18} />
          <div className="absolute inset-0 opacity-8 flex items-center justify-center">
            <SacredGeometry size={700} />
          </div>
        </div>

        {/* LEFT — Narrative content */}
        <div
          className="hero-left w-full lg:w-[35%] flex flex-col justify-center px-8 lg:pl-16 xl:pl-24 pt-32 pb-16 lg:pt-36 lg:pb-16"
          style={{ position: "relative", zIndex: 20 }}
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="divider-walnut" style={{ width: 36 }} />
            <span className="text-label uppercase tracking-widest text-xs">Scientist · Innovator · Visionary</span>
          </div>

          {/* Name — largest visual element on the page */}
          <h1 className="mb-5 leading-none">
            <span className="heading-editorial text-5xl lg:text-7xl xl:text-[5.5rem] font-bold block text-text-primary">Dr. Ram</span>
            <span className="heading-editorial text-5xl lg:text-7xl xl:text-[5.5rem] font-bold block text-teal mt-1">Shankar</span>
            <span className="heading-editorial text-4xl lg:text-5xl xl:text-6xl font-bold block text-navy-light mt-1">Upadhayaya</span>
          </h1>

          {/* Rotating role descriptor */}
          <div className="text-lg md:text-xl text-slate font-manrope mb-6 h-8">
            <RotatingText
              texts={["Scientist", "Innovator", "Research Visionary", "Wellness Pioneer", "Mentor", "Entrepreneur"]}
              interval={3000}
            />
          </div>

          {/* Signature quote */}
          <p className="heading-cormorant text-xl md:text-2xl italic text-slate/75 mb-8 max-w-md leading-relaxed border-l-2 border-teal/30 pl-5">
            &ldquo;Science is not just a profession — it is a calling to serve humanity.&rdquo;
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
            <Link href="/biography" className="btn-editorial btn-walnut flex items-center gap-2">
              Begin Journey <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="/research" className="btn-editorial btn-outline-warm flex items-center gap-2">
              View Research
            </Link>
          </div>

          {/* Scientific authority bar */}
          <div className="flex items-center gap-6 border-t border-teal/15 pt-6">
            {[
              { n: "24+", l: "Years" },
              { n: "50+", l: "Papers" },
              { n: "15+", l: "Patents" },
              { n: "100+", l: "Innovations" },
            ].map((m, i, arr) => (
              <div key={m.l} className="flex items-center gap-6">
                <div>
                  <div className="heading-editorial text-xl font-bold text-text-primary">{m.n}</div>
                  <div className="text-[9px] uppercase tracking-widest text-ash font-manrope">{m.l}</div>
                </div>
                {i < arr.length - 1 && <div className="w-px h-7 bg-teal/20" />}
              </div>
            ))}
          </div>
        </div>

        {/* CENTER — Three.js DNA, strictly z-index 0 (background) */}
        <div
          className="hero-center w-full lg:w-[30%] min-h-[50vh] lg:min-h-screen flex items-center justify-center overflow-hidden"
          style={{ position: "relative", zIndex: 0 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] radial-glow-teal pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <MoleculeCanvas className="w-full h-full" />
          </div>
        </div>

        {/* RIGHT — Portrait */}
        <div
          className="hero-right w-full lg:w-[35%] flex flex-col justify-center px-8 lg:pr-16 xl:pr-24 pb-16 lg:pb-16 pt-8 lg:pt-36"
          style={{ position: "relative", zIndex: 20 }}
        >
          <div className="relative w-full aspect-[3/4] max-w-sm mx-auto lg:ml-auto">
            <div className="absolute inset-0 image-frame p-3 bg-white shadow-2xl">
              <div className="w-full h-full relative overflow-hidden group rounded-md">
                <Image
                  src="/portrait.jpg"
                  alt="Dr. Ram Shankar Upadhayaya"
                  fill
                  className="object-cover filter saturate-[0.9] contrast-[1.05] transition-transform duration-[20s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/15 pointer-events-none" />
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.35)] pointer-events-none" />
              </div>
            </div>
            {/* Ornamental badge */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-teal/20 rounded-full flex items-center justify-center bg-white shadow-lg">
              <span className="text-[9px] uppercase tracking-widest font-manrope text-teal text-center leading-tight">Digital<br/>Archive</span>
            </div>
            {/* Research area tags */}
            <div className="absolute -right-3 top-8 flex flex-col gap-2">
              {["Drug Discovery", "Med. Chemistry", "Wellness"].map((tag, i) => (
                <div
                  key={tag}
                  className="px-2.5 py-1 text-[8px] uppercase tracking-wider font-manrope text-white rounded-md shadow-sm"
                  style={{ background: ["#0d7377", "#2563eb", "#059669"][i], opacity: 0.9 }}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ zIndex: 30, animation: "float-gentle 4s ease-in-out infinite" }}
        >
          <span className="text-[9px] uppercase tracking-[0.25em] text-ash font-manrope">Scroll</span>
          <ArrowDown className="w-4 h-4 text-teal/50" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CONTENT CHAPTERS — z-index 30, lifts above hero DNA
          ═══════════════════════════════════════════════════ */}
      <div style={{ position: "relative", zIndex: 30, background: "var(--color-surface-primary)" }} className="shadow-[0_-20px_60px_rgba(0,0,0,0.06)]">

        {/* STATS ROW */}
        <section className="relative py-14 gradient-section border-t border-teal/10">
          <div className="container-editorial">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {stats.map((stat) => (
                <AnimatedCounter key={stat.label} end={stat.value} suffix={stat.suffix} label={stat.label} />
              ))}
            </div>
          </div>
        </section>

        {/* THE LEGACY — two-column, information-dense */}
        <section className="section-padding gradient-editorial border-t border-teal/10">
          <div className="container-editorial">

            {/* Section header + description in two columns */}
            <SectionReveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-14">
                {/* Left: header */}
                <div>
                  <div className="text-label mb-5">The Legacy</div>
                  <h2 className="heading-editorial text-4xl md:text-5xl font-bold text-text-primary mb-6">
                    A Lifetime Devoted<br />to Science
                  </h2>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-teal to-transparent mb-6" />
                  <p className="text-body text-lg leading-relaxed text-slate">
                    From the corridors of Harvard Medical School to the innovation hubs of Hyderabad,
                    Dr. Ram Shankar Upadhayaya has dedicated over two decades to advancing human health
                    through medicinal chemistry, drug discovery, and visionary wellness innovations.
                  </p>
                </div>

                {/* Right: scientific authority mini-stats */}
                <div className="grid grid-cols-2 gap-5 content-start pt-4 lg:pt-12">
                  {AUTHORITY_ITEMS.map((item) => (
                    <div key={item.label} className="flex flex-col gap-3 p-5 bg-white border border-border-subtle rounded-lg hover:border-teal/20 transition-colors duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: item.accent + "14" }}>
                          <item.icon className="w-3.5 h-3.5" style={{ color: item.accent }} />
                        </div>
                        <span className="heading-editorial text-2xl font-bold text-text-primary">{item.value}</span>
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-slate font-manrope">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>

            {/* Chapter cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
              {[
                { num: "I",   title: "The Journey",    desc: "A lifetime devoted to science, curiosity, and the pursuit of discovery across three decades.",         href: "/biography",   label: "Read Biography"      },
                { num: "II",  title: "The Research",   desc: "24+ years pioneering drug discovery in medicinal chemistry, oncology, and Ayurvedic pharmacology.",   href: "/research",    label: "View Research"       },
                { num: "III", title: "The Innovation", desc: "From Evolv28 to Mitozz — transforming rigorous science into breakthrough wellness solutions.",         href: "/innovations", label: "Explore Innovations" },
                { num: "IV",  title: "The Vision",     desc: "Bridging modern science with holistic philosophy to serve human health at its deepest level.",         href: "/vision",      label: "Discover Vision"     },
              ].map((ch, i) => {
                const acc = CHAPTER_ACCENTS[i];
                return (
                  <SectionReveal key={ch.title} delay={0.08 * i} direction="up">
                    <Link href={ch.href}>
                      <GlassCard
                        className={`h-full group cursor-pointer relative overflow-hidden p-9 hover:-translate-y-1 transition-all duration-500 shadow-sm hover:shadow-md bg-white border border-border-subtle ${acc.border}`}
                      >
                        {/* Ghost chapter number */}
                        <div className="chapter-number text-8xl absolute -right-4 -bottom-4 opacity-5" style={{ fontFamily: "var(--font-playfair)" }}>{ch.num}</div>
                        <div className="relative z-10">
                          {/* Accent dot */}
                          <div className={`w-2 h-2 rounded-full ${acc.dot} mb-5`} />
                          {/* Icon */}
                          <div className={`w-11 h-11 rounded-full bg-surface-deep ${acc.iconBg} flex items-center justify-center mb-5 transition-all duration-500`}>
                            <acc.icon className={`w-5 h-5 ${acc.iconColor} opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />
                          </div>
                          <h3 className="heading-editorial text-xl font-bold text-text-primary mb-3 group-hover:text-teal transition-colors duration-500">{ch.title}</h3>
                          <p className="text-sm text-slate leading-relaxed font-manrope mb-5">{ch.desc}</p>
                          <span className="text-label text-[10px] font-bold uppercase tracking-widest transition-colors group-hover:text-teal">
                            {ch.label} →
                          </span>
                        </div>
                      </GlassCard>
                    </Link>
                  </SectionReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding relative overflow-hidden gradient-dark border-t border-navy-light/20">
          <div className="container-editorial" style={{ position: "relative", zIndex: 10 }}>
            <SectionReveal>
              <div className="max-w-2xl mx-auto text-center p-12 md:p-16 relative">
                <div className="text-label mb-5 text-gold">Discover</div>
                <h2 className="heading-editorial text-3xl md:text-4xl font-bold text-white mb-6">
                  Explore the Complete Archive
                </h2>
                <p className="text-body text-lg max-w-lg mx-auto mb-10 text-slate-300">
                  Step inside the digital museum detailing a life dedicated to science, innovation, and humanity.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                  <Link href="/biography" className="btn-editorial bg-teal text-white hover:bg-teal-light hover:shadow-lg hover:-translate-y-0.5 transition-all px-8 py-4">Read Biography</Link>
                  <Link href="/contact" className="btn-editorial border border-white/20 text-white hover:bg-white/10 transition-all px-8 py-4">Connect</Link>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

      </div>
    </div>
  );
}
