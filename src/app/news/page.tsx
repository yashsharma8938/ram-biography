"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/client";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, FileText, Calendar, ExternalLink } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";

// Mock data (will be fetched from Sanity)
const mockNews = [
  {
    id: 1,
    title: "Breakthrough in Novel Target Identification for Multi-Drug Resistant Pathogens",
    date: "2024-03-15",
    source: "Nature Communications",
    excerpt: "Dr. Upadhayaya's latest research reveals a novel mechanism of action that circumvents existing resistance patterns in hospital-acquired infections.",
  },
  {
    id: 2,
    title: "Aryastha Life Sciences Announces Strategic Partnership",
    date: "2023-11-02",
    source: "PR Newswire",
    excerpt: "A new collaboration aimed at accelerating the discovery of targeted oncology therapeutics utilizing proprietary AI models.",
  }
];

const mockCuttings = [
  {
    id: 1,
    title: "Pioneering Research from Indian Scientist Gains Global Acclaim",
    publication: "The Times of India",
    date: "2018-05-12",
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&q=80",
    desc: "Front page coverage of the groundbreaking tuberculosis compound discovery."
  },
  {
    id: 2,
    title: "Future of Wellness Tech: Evolv28",
    publication: "Economic Times",
    date: "2023-09-20",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
    desc: "Feature on the integration of quantum resonance in modern wellness devices."
  }
];

export default function NewsPage() {
  const [selectedCutting, setSelectedCutting] = useState<any>(null);
  const [news, setNews] = useState(mockNews);
  const [cuttings, setCuttings] = useState(mockCuttings);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCMSData() {
      try {
        // Attempt to fetch from Sanity
        const fetchedNews = await client.fetch(`*[_type == "newsType"] | order(publishedAt desc)`);
        const fetchedCuttings = await client.fetch(`*[_type == "newspaperType"] | order(publishedAt desc)`);
        
        if (fetchedNews && fetchedNews.length > 0) setNews(fetchedNews);
        if (fetchedCuttings && fetchedCuttings.length > 0) setCuttings(fetchedCuttings);
      } catch (error) {
        console.log("Sanity CMS not configured or offline. Falling back to mock data.", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCMSData();
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      
      <div className="container-editorial">
        
        {/* HEADER */}
        <SectionReveal>
          <div className="max-w-4xl mb-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="divider-walnut" style={{ width: 40 }} />
              <span className="text-label">Media & Archive</span>
            </div>
            <h1 className="heading-editorial text-5xl md:text-7xl font-bold text-charcoal mb-6">
              News & Discoveries
            </h1>
            <p className="text-body text-xl max-w-2xl text-slate">
              A curated archive of press releases, scientific publications, and historical newspaper features documenting a lifetime of innovation.
            </p>
          </div>
        </SectionReveal>

        {/* LIVE NEWS SYSTEM */}
        <div className="mb-32">
          <SectionReveal>
            <h2 className="heading-cormorant text-3xl font-bold mb-10 text-charcoal border-b border-bronze/20 pb-4">Latest Press & Publications</h2>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((item, i) => (
              <SectionReveal key={item._id || item.id} delay={i * 0.1}>
                <GlassCard className="p-8 h-full flex flex-col group cursor-pointer hover:border-bronze/40 transition-colors duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-label text-bronze">{item.source}</span>
                    <div className="flex items-center gap-2 text-slate text-xs font-manrope uppercase tracking-wider">
                      <Calendar className="w-3 h-3" /> {new Date(item.date || item.publishedAt).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="heading-editorial text-2xl font-bold text-charcoal mb-4 group-hover:text-walnut transition-colors">{item.title}</h3>
                  <p className="text-body text-slate mb-8 flex-grow">{item.excerpt}</p>
                  <div className="flex items-center gap-2 text-walnut font-medium text-sm font-manrope mt-auto group-hover:gap-4 transition-all">
                    Read Article <ExternalLink className="w-4 h-4" />
                  </div>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>

        {/* NEWSPAPER ARCHIVE */}
        <div>
          <SectionReveal>
            <h2 className="heading-cormorant text-3xl font-bold mb-10 text-charcoal border-b border-bronze/20 pb-4">Historical Archive</h2>
            <p className="text-body mb-12 max-w-3xl">Physical press cuttings and historic media coverage, preserved in high resolution.</p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {cuttings.map((cutting, i) => (
              <SectionReveal key={cutting._id || cutting.id} delay={i * 0.1}>
                <div 
                  className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-sm shadow-xl"
                  onClick={() => setSelectedCutting(cutting)}
                >
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={cutting.image} 
                    alt={cutting.title} 
                    className="w-full h-full object-cover filter sepia-[0.3] grayscale-[0.2] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                    <div className="text-ivory font-manrope text-xs uppercase tracking-widest mb-2 flex justify-between">
                      <span>{cutting.publication}</span>
                      <span>{new Date(cutting.date).getFullYear()}</span>
                    </div>
                    <h3 className="heading-editorial text-xl text-warm-white">{cutting.title}</h3>
                  </div>
                  {/* Zoom indicator */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-12 h-12 rounded-full bg-ivory/90 backdrop-blur flex items-center justify-center text-charcoal">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

      </div>

      {/* LIGHTBOX FOR NEWSPAPER CUTTINGS */}
      <AnimatePresence>
        {selectedCutting && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10 bg-charcoal/90 backdrop-blur-md"
            onClick={() => setSelectedCutting(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-ivory shadow-2xl rounded-sm flex flex-col md:flex-row overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-50 p-2 bg-charcoal/10 hover:bg-charcoal/20 rounded-full transition-colors text-charcoal"
                onClick={() => setSelectedCutting(null)}
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="w-full md:w-2/3 h-[50vh] md:h-[90vh] bg-black/5 relative overflow-auto p-4 flex items-center justify-center">
                {/* Simulated Zoomable Image */}
                <img 
                  src={selectedCutting.image} 
                  alt={selectedCutting.title}
                  className="max-w-full max-h-full object-contain filter sepia-[0.2]"
                />
              </div>

              <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-b from-warm-white to-parchment">
                <div className="text-label mb-6 text-bronze">{selectedCutting.publication} · {new Date(selectedCutting.date).toLocaleDateString()}</div>
                <h2 className="heading-editorial text-3xl font-bold text-charcoal mb-6">{selectedCutting.title}</h2>
                <p className="text-body text-slate mb-8">{selectedCutting.desc}</p>
                <button className="btn-editorial btn-outline-warm w-full flex items-center justify-center gap-2">
                  <FileText className="w-4 h-4" /> Download Original PDF
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
