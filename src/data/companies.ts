export interface Company {
  id: string;
  name: string;
  role: string;
  description: string;
  location: string;
  founded?: string;
  website?: string;
  focusAreas: string[];
  contributions: string[];
  achievements: string[];
}

export const companies: Company[] = [
  {
    id: "aryastha",
    name: "Aryastha Life Sciences",
    role: "Chief Technology Officer (CTO)",
    description: "A leading CRDMO providing integrated drug discovery and development solutions. Dr. Upadhayaya leads the scientific strategy across all therapeutic areas.",
    location: "Genome Valley, Hyderabad, India",
    website: "https://aryastha.com",
    focusAreas: ["Integrated Drug Discovery", "Discovery Chemistry & Biology", "Preclinical DMPK & Safety", "In Vivo Pharmacology", "Scale-Up & Development"],
    contributions: ["Leading integrated drug discovery from target to preclinical candidate", "Building organ-on-chip biological platforms", "AAALAC-accredited vivarium operations", "Scientific collaborations across oncology, neuroscience, metabolic disorders"],
    achievements: ["State-of-the-art facility in Genome Valley", "Comprehensive therapeutic coverage", "Advanced technology platforms", "Strong regulatory compliance"],
  },
  {
    id: "laxai",
    name: "Laxai Life Sciences",
    role: "Former CEO",
    description: "A leading CRDMO established in 2007, providing end-to-end solutions for pharmaceutical and biotech industries. Under Dr. Upadhayaya's leadership, the company became a trusted global partner.",
    location: "Hyderabad, India",
    founded: "2007",
    website: "https://laxai.com",
    focusAreas: ["Contract Research", "Drug Discovery", "Chemical Development", "Custom Manufacturing", "Green Chemistry"],
    contributions: ["Transformed Laxai into a leading CRDMO", "Led COVID-19 therapeutic research", "Partnerships with IICT for indigenous API manufacturing", "Sustainable green chemistry initiatives"],
    achievements: ["End-to-end drug discovery to manufacturing", "USFDA/GMP-certified facilities", "Global pharmaceutical client base", "Contribution to India's pharma self-reliance"],
  },
  {
    id: "cellestra",
    name: "Cellestra.in",
    role: "Founder / Innovator",
    description: "A premium biotechnology and wellness research organization focused on advanced mitochondrial targeting and cellular regeneration through its flagship product, Mitozz.",
    location: "Global",
    website: "https://cellestra.in",
    focusAreas: ["Cellular Regeneration", "Mitochondrial Health", "Nutraceuticals", "Therapeutic Wellness", "Longevity Research"],
    contributions: ["Developed the Mitozz compound for mitochondrial repair", "Pioneering novel lipid-delivery systems", "Bridging pharmaceutical rigor with wellness innovation"],
    achievements: ["Launch of flagship product Mitozz", "Advanced clinical formulation", "High bioavailability metrics", "Scientific validation of wellness therapies"],
  },
];
