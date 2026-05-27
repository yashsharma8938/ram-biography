export interface Innovation {
  id: string;
  title: string;
  category: string;
  description: string;
  impact: string;
  year: number;
  status: "patented" | "in-development" | "published" | "commercialized";
  tags: string[];
}

export const innovationCategories = [
  "All",
  "Drug Discovery",
  "Wellness Technology",
  "Chemical Innovation",
  "Manufacturing",
  "AI & Digital Health",
];

export const innovations: Innovation[] = [
  {
    id: "inn-1",
    title: "Novel Anti-Cancer Compound Series",
    category: "Drug Discovery",
    description: "Development of a proprietary series of small molecule compounds targeting resistant cancer mutations through innovative medicinal chemistry approaches.",
    impact: "Potential to address treatment-resistant cancers affecting millions of patients worldwide.",
    year: 2023,
    status: "patented",
    tags: ["Oncology", "Small Molecules", "Targeted Therapy"],
  },
  {
    id: "inn-2",
    title: "Evolv28 VCMF™ Wellness Technology",
    category: "Wellness Technology",
    description: "Revolutionary wearable device utilizing Variable Complex Magnetic Fields (VCMF™) technology for sleep improvement and stress reduction without pharmaceuticals.",
    impact: "Non-invasive wellness solution cleared in US, EU, Canada, and India for improving sleep quality.",
    year: 2022,
    status: "commercialized",
    tags: ["Neuromodulation", "Sleep Wellness", "Wearable Tech"],
  },
  {
    id: "inn-3",
    title: "Green Chemistry Manufacturing Platform",
    category: "Manufacturing",
    description: "Sustainable pharmaceutical manufacturing processes that reduce environmental impact while maintaining product quality and improving yields.",
    impact: "30% reduction in chemical waste and 25% improvement in manufacturing efficiency.",
    year: 2020,
    status: "commercialized",
    tags: ["Sustainability", "Process Chemistry", "Scale-Up"],
  },
  {
    id: "inn-4",
    title: "Integrated DMPK Screening Platform",
    category: "Drug Discovery",
    description: "High-throughput drug metabolism and pharmacokinetics screening system enabling rapid assessment of drug candidates for safety and efficacy.",
    impact: "Reduces drug development timelines by up to 40% in the preclinical phase.",
    year: 2021,
    status: "commercialized",
    tags: ["DMPK", "High-Throughput", "Preclinical"],
  },
  {
    id: "inn-5",
    title: "AI-Driven Molecular Design Engine",
    category: "AI & Digital Health",
    description: "Machine learning platform for predicting molecular properties and optimizing drug candidates, combining computational chemistry with artificial intelligence.",
    impact: "Accelerates lead optimization cycles and improves candidate selection accuracy.",
    year: 2023,
    status: "in-development",
    tags: ["AI", "Machine Learning", "Computational Chemistry"],
  },
  {
    id: "inn-6",
    title: "Antimicrobial Resistance Combatant Series",
    category: "Drug Discovery",
    description: "Novel antimicrobial compounds designed to overcome resistance mechanisms in multi-drug resistant pathogens.",
    impact: "Addressing the global AMR crisis with next-generation therapeutic solutions.",
    year: 2022,
    status: "patented",
    tags: ["AMR", "Infectious Disease", "Novel Antibiotics"],
  },
  {
    id: "inn-7",
    title: "Organ-on-Chip Biological Platform",
    category: "Chemical Innovation",
    description: "Advanced microfluidic platforms mimicking human organ systems for more accurate preclinical drug testing and toxicology assessment.",
    impact: "Reduces reliance on animal testing while improving predictive accuracy of drug safety profiles.",
    year: 2023,
    status: "in-development",
    tags: ["Microfluidics", "In Vitro", "Toxicology"],
  },
  {
    id: "inn-8",
    title: "Traditional Medicine Validation Framework",
    category: "Wellness Technology",
    description: "Systematic scientific framework for validating traditional Indian medicine formulations using modern pharmacological methods and clinical trial design.",
    impact: "Bridge between ancient wellness wisdom and evidence-based modern medicine.",
    year: 2019,
    status: "published",
    tags: ["Ethnopharmacology", "Traditional Medicine", "Clinical Validation"],
  },
];
