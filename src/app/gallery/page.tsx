"use client";
import { useState } from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import { Camera } from "lucide-react";

const galleryCategories = ["All", "Research", "Events", "Laboratory", "Personal"];

const galleryItems = [
  { id: 1, category: "Research", title: "Molecular Research Lab", desc: "Advanced drug discovery facility" },
  { id: 2, category: "Events", title: "Scientific Conference 2023", desc: "Keynote presentation on VCMF technology" },
  { id: 3, category: "Laboratory", title: "Aryastha R&D Center", desc: "State-of-the-art research facility in Hyderabad" },
  { id: 4, category: "Research", title: "Publication Review", desc: "Collaborative research session" },
  { id: 5, category: "Events", title: "Industry Summit", desc: "Pharmaceutical innovation panel discussion" },
  { id: 6, category: "Personal", title: "Team Leadership", desc: "Mentoring the next generation of scientists" },
  { id: 7, category: "Laboratory", title: "Chemistry Lab", desc: "Medicinal chemistry synthesis workspace" },
  { id: 8, category: "Research", title: "Drug Discovery Pipeline", desc: "Novel compound screening" },
  { id: 9, category: "Events", title: "Award Ceremony", desc: "Recognition for scientific contribution" },
];

export default function GalleryPage() {
  const [selected, setSelected] = useState("All");

  const filtered = selected === "All" ? galleryItems : galleryItems.filter(i => i.category === selected);

  return (
    <>
      <section className="pt-40 pb-24 gradient-hero">
        <div className="container-editorial">
          <SectionReveal>
            <div className="max-w-3xl">
              <div className="text-label mb-6">Visual Archive</div>
              <h1 className="heading-editorial text-4xl md:text-6xl font-bold text-charcoal mb-6">Gallery</h1>
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
            <div className="flex flex-wrap gap-2 mb-12">
              {galleryCategories.map((cat) => (
                <button key={cat} onClick={() => setSelected(cat)} className={`px-4 py-2 text-[10px] uppercase tracking-[0.14em] font-manrope font-medium rounded-sm transition-all ${selected === cat ? "bg-walnut text-cream" : "bg-walnut/5 text-slate hover:bg-walnut/10"}`}>
                  {cat}
                </button>
              ))}
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <SectionReveal key={item.id} delay={0.08 * Math.min(i, 5)}>
                <div className="group cursor-pointer">
                  <div className="image-frame mb-4">
                    <div className="aspect-[4/3] bg-gradient-to-br from-parchment to-cream flex items-center justify-center">
                      <Camera className="w-8 h-8 text-bronze/20" />
                    </div>
                  </div>
                  <h3 className="heading-editorial text-base font-semibold text-charcoal mb-1 group-hover:text-walnut transition-colors">{item.title}</h3>
                  <p className="text-xs text-ash font-manrope">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
