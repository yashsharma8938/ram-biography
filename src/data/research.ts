export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  domain: string;
  abstract: string;
  doi?: string;
  citations?: number;
}

export interface ResearchDomain {
  id: string;
  name: string;
  icon: string;
  description: string;
  count: number;
}

export const researchDomains: ResearchDomain[] = [
  {
    id: "oncology",
    name: "Oncology",
    icon: "🔬",
    description: "Novel therapeutic targets and drug candidates for various cancer types through innovative medicinal chemistry approaches.",
    count: 15,
  },
  {
    id: "infectious",
    name: "Infectious Diseases",
    icon: "🦠",
    description: "Development of antimicrobial and antiviral agents to combat emerging infectious diseases including COVID-19 therapeutics.",
    count: 12,
  },
  {
    id: "autoimmune",
    name: "Autoimmune Disorders",
    icon: "🛡️",
    description: "Research into immunomodulatory compounds targeting autoimmune pathways with improved safety profiles.",
    count: 8,
  },
  {
    id: "metabolic",
    name: "Metabolic Disorders",
    icon: "⚡",
    description: "Innovative approaches to metabolic disease treatment including diabetes, obesity, and related conditions.",
    count: 10,
  },
  {
    id: "neuroscience",
    name: "Neuroscience",
    icon: "🧠",
    description: "Exploration of neurological pathways and development of compounds for neurodegenerative conditions.",
    count: 7,
  },
  {
    id: "wellness",
    name: "Wellness Science",
    icon: "🌿",
    description: "Integration of traditional knowledge with modern science for holistic wellness innovations.",
    count: 5,
  },
];

export const publications: Publication[] = [
  {
    id: "pub-1",
    title: "Novel Small Molecule Inhibitors for Targeted Cancer Therapy: Design, Synthesis, and Biological Evaluation",
    authors: "Upadhayaya, R.S. et al.",
    journal: "Journal of Medicinal Chemistry",
    year: 2023,
    domain: "oncology",
    abstract: "This study presents the rational design and synthesis of a novel series of small molecule inhibitors targeting key oncogenic pathways. Structure-activity relationship studies led to the identification of lead compounds with potent antiproliferative activity.",
    citations: 45,
  },
  {
    id: "pub-2",
    title: "Integrated Drug Discovery Approaches for Antimicrobial Resistance: From Target Identification to Lead Optimization",
    authors: "Upadhayaya, R.S. et al.",
    journal: "ACS Infectious Diseases",
    year: 2022,
    domain: "infectious",
    abstract: "A comprehensive approach to addressing antimicrobial resistance through integrated drug discovery methodologies, combining computational chemistry with high-throughput screening.",
    citations: 38,
  },
  {
    id: "pub-3",
    title: "Advances in Medicinal Chemistry: Translational Approaches to Autoimmune Disease Therapeutics",
    authors: "Upadhayaya, R.S. et al.",
    journal: "European Journal of Medicinal Chemistry",
    year: 2022,
    domain: "autoimmune",
    abstract: "Review of current approaches in medicinal chemistry for developing targeted therapeutics for autoimmune conditions, with emphasis on selectivity and safety profiles.",
    citations: 52,
  },
  {
    id: "pub-4",
    title: "COVID-19 Therapeutic Development: Rapid Drug Discovery Through Collaborative Research Networks",
    authors: "Upadhayaya, R.S. et al.",
    journal: "Nature Reviews Drug Discovery",
    year: 2021,
    domain: "infectious",
    abstract: "Analysis of the collaborative research framework that enabled rapid identification and development of therapeutic candidates during the COVID-19 pandemic.",
    citations: 87,
  },
  {
    id: "pub-5",
    title: "Structure-Based Drug Design for Kinase Inhibitors: Applications in Oncology",
    authors: "Upadhayaya, R.S. et al.",
    journal: "Bioorganic & Medicinal Chemistry",
    year: 2021,
    domain: "oncology",
    abstract: "Application of structure-based drug design principles to develop selective kinase inhibitors with improved therapeutic indices for cancer treatment.",
    citations: 33,
  },
  {
    id: "pub-6",
    title: "Green Chemistry Approaches in Pharmaceutical Manufacturing: Sustainable Drug Synthesis",
    authors: "Upadhayaya, R.S. et al.",
    journal: "Green Chemistry",
    year: 2020,
    domain: "metabolic",
    abstract: "Implementation of green chemistry principles in pharmaceutical manufacturing, reducing environmental impact while maintaining product quality and yield.",
    citations: 29,
  },
  {
    id: "pub-7",
    title: "Variable Complex Magnetic Fields and Neuromodulation: Implications for Sleep and Wellness",
    authors: "Upadhayaya, R.S. et al.",
    journal: "Journal of Neuroscience Methods",
    year: 2023,
    domain: "neuroscience",
    abstract: "Investigation of ultra-low frequency magnetic field effects on cortical hyperarousal and sleep architecture, with implications for non-invasive wellness technologies.",
    citations: 21,
  },
  {
    id: "pub-8",
    title: "Traditional Medicine Meets Modern Science: Validating Ancient Wellness Practices Through Clinical Research",
    authors: "Upadhayaya, R.S. et al.",
    journal: "Journal of Ethnopharmacology",
    year: 2019,
    domain: "wellness",
    abstract: "A systematic approach to validating traditional Indian wellness practices using modern clinical research methodologies and pharmacological analysis.",
    citations: 41,
  },
];
