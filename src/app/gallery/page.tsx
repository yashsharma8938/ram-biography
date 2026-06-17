"use client";
import { useState } from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import { Camera, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const galleryCategories = ["All", "Research", "Events", "Laboratory", "Personal"];

const categoryColors: Record<string, string> = {
  Research: "#0d7377",
  Events: "#2563eb",
  Laboratory: "#059669",
  Personal: "#7c3aed",
};

const galleryItems = [
  { id: 1, category: "Research", title: "Molecular Research Lab", desc: "Advanced drug discovery facility", gradient: "from-teal/20 via-royal-blue/10 to-emerald/10" },
  { id: 2, category: "Events", title: "Scientific Conference 2023", desc: "Keynote presentation on VCMF technology", gradient: "from-royal-blue/20 via-sci-violet/10 to-teal/10" },
  { id: 3, category: "Laboratory", title: "Aryastha R&D Center", desc: "State-of-the-art research facility in Hyderabad", gradient: "from-emerald/20 via-teal/10 to-royal-blue/10" },
  { id: 4, category: "Research", title: "Publication Review", desc: "Collaborative research session", gradient: "from-teal/15 via-emerald/10 to-gold/10" },
  { id: 5, category: "Events", title: "Industry Summit", desc: "Pharmaceutical innovation panel discussion", gradient: "from-sci-violet/20 via-royal-blue/10 to-teal/10" },
  { id: 6, category: "Personal", title: "Team Leadership", desc: "Mentoring the next generation of scientists", gradient: "from-sci-violet/15 via-teal/10 to-gold/10" },
  { id: 7, category: "Laboratory", title: "Chemistry Lab", desc: "Medicinal chemistry synthesis workspace", gradient: "from-emerald/15 via-sci-cyan/10 to-teal/10" },
  { id: 8, category: "Research", title: "Drug Discovery Pipeline", desc: "Novel compound screening", gradient: "from-royal-blue/15 via-teal/10 to-emerald/10" },
  { id: 9, category: "Events", title: "Award Ceremony", desc: "Recognition for scientific contribution", gradient: "from-gold/20 via-copper/10 to-teal/10" },
];

export default function GalleryPage() {
  const [selected, setSelected] = useState("All");
  const [lightbox, setLightbox] = useState<typeof galleryItems[0] | null>(null);
  const filtered = selected === "All" ? galleryItems : galleryItems.filter(i => i.category === selected);

  return (
    <>
      <section className="pt-36 pb-20 gradient-hero">
        <div className="container-editorial">
          <SectionReveal>
            <div className="max-w-3xl">
              <div className="text-label mb-5">Visual Archive</div>
              <h1 className="heading-editorial text-4xl md:text-6xl font-bold text-text-primary mb-5">Gallery</h1>
              <div className="w-12 h-0.5 bg-gradient-to-r from-sci-cyan to-transparent mb-5" />
              <p className="text-body text-lg max-w-2xl leading-relaxed">
                Moments from a journey of scientific discovery and innovation.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section-padding gradient-editorial">
        <div className="container-editorial">
          <SectionReveal>
            <div className="flex flex-wrap gap-2 mb-10">
              {galleryCategories.map((cat) => {
                const color = categoryColors[cat] || "#0d7377";
                return (
                  <button
                    key={cat}
                    onClick={() => setSelected(cat)}
                    className={`px-4 py-2 text-[10px] uppercase tracking-[0.14em] font-manrope font-medium rounded-md transition-all ${
                      selected === cat ? "text-white" : "bg-surface-deep text-slate hover:bg-navy/5"
                    }`}
                    style={selected === cat ? { background: cat === "All" ? "#0c1b33" : color } : {}}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item, i) => {
              const color = categoryColors[item.category] || "#0d7377";
              return (
                <SectionReveal key={item.id} delay={0.08 * Math.min(i, 5)}>
                  <div
                    className="group cursor-pointer"
                    onClick={() => setLightbox(item)}
                  >
                    <div className="relative overflow-hidden rounded-lg border-2 border-transparent hover:border-opacity-30 transition-all duration-500 shadow-sm hover:shadow-xl"
                      style={{ borderColor: `${color}30` }}
                    >
                      <div className={`aspect-[4/3] bg-gradient-to-br ${item.gradient} flex items-center justify-center relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-white/30 group-hover:bg-white/10 transition-colors duration-500" />
                        <Camera className="w-10 h-10 relative z-10 transition-transform duration-500 group-hover:scale-110" style={{ color: color + "60" }} />
                        {/* Category badge */}
                        <div className="absolute top-3 left-3 px-2.5 py-1 text-[8px] uppercase tracking-wider font-manrope text-white rounded-md shadow-sm z-10"
                          style={{ background: color }}
                        >
                          {item.category}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 px-1">
                      <h3 className="heading-editorial text-base font-semibold text-text-primary mb-1 group-hover:text-teal transition-colors">{item.title}</h3>
                      <p className="text-xs text-ash font-manrope">{item.desc}</p>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-navy/90 backdrop-blur-md"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-3xl w-full bg-white rounded-xl shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <button className="absolute top-4 right-4 z-50 p-2 bg-navy/10 hover:bg-navy/20 rounded-full transition-colors" onClick={() => setLightbox(null)}>
                <X className="w-5 h-5 text-navy" />
              </button>
              <div className={`aspect-[16/10] bg-gradient-to-br ${lightbox.gradient} flex items-center justify-center`}>
                <Camera className="w-16 h-16" style={{ color: (categoryColors[lightbox.category] || "#0d7377") + "40" }} />
              </div>
              <div className="p-8">
                <div className="text-label text-[9px] mb-2" style={{ color: categoryColors[lightbox.category] }}>{lightbox.category}</div>
                <h2 className="heading-editorial text-2xl font-bold text-text-primary mb-2">{lightbox.title}</h2>
                <p className="text-sm text-slate font-manrope">{lightbox.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
