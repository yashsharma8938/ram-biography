export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  researchBackground: string;
  status: "available" | "coming-soon" | "research-phase";
}

export const productCategories = ["All", "Wellness Devices", "Pharmaceutical", "Research Tools", "Future Innovations"];

export const products: Product[] = [
  {
    id: "prod-1",
    name: "Evolv28",
    category: "Wellness Devices",
    description: "A revolutionary wearable cervical neckband that uses VCMF™ (Variable Complex Magnetic Fields) technology to improve sleep quality, reduce stress, and enhance overall wellness without pharmaceuticals.",
    features: [
      "Ultra-low frequency magnetic fields (<1 μT)",
      "Non-invasive — no electrodes or skin contact required",
      "Daytime use for nighttime results",
      "Mobile app with tailored wellness programs",
      "Clinically validated through RCT studies",
      "Cleared in US, EU, Canada, and India",
    ],
    researchBackground: "Developed based on years of research into neuromodulation and cortical hyperarousal. Published peer-reviewed clinical data demonstrates significant improvement in sleep onset and total sleep time.",
    status: "available",
  },
  {
    id: "prod-2",
    name: "Integrated Drug Discovery Platform",
    category: "Research Tools",
    description: "End-to-end drug discovery service platform spanning target identification through preclinical candidate nomination, combining medicinal chemistry, biology, DMPK, and toxicology.",
    features: [
      "Target identification & validation",
      "Hit-to-lead optimization",
      "ADME/Tox profiling",
      "In vivo pharmacology studies",
      "AAALAC-accredited vivarium",
      "GLP-certified testing",
    ],
    researchBackground: "Built on decades of experience in medicinal chemistry and translational science, this platform integrates multiple disciplines for efficient drug candidate selection.",
    status: "available",
  },
  {
    id: "prod-3",
    name: "Custom API Manufacturing",
    category: "Pharmaceutical",
    description: "State-of-the-art Active Pharmaceutical Ingredient manufacturing with capabilities from pre-clinical through commercial scale, using sustainable green chemistry processes.",
    features: [
      "Pre-clinical to commercial scale",
      "Complex chemistry capabilities",
      "High-pressure reaction handling",
      "Green chemistry processes",
      "USFDA/GMP-certified facilities",
      "Environmental compliance",
    ],
    researchBackground: "Developed to address India's pharmaceutical manufacturing needs and reduce dependency on imported APIs and key intermediates.",
    status: "available",
  },
  {
    id: "prod-4",
    name: "Neuro-Wellness Suite",
    category: "Wellness Devices",
    description: "Next-generation wellness technology platform integrating AI-driven personalization with non-invasive neuromodulation for comprehensive mental wellness support.",
    features: [
      "AI-personalized wellness programs",
      "Real-time biometric feedback",
      "Meditation & focus enhancement",
      "Sleep architecture optimization",
      "Stress biomarker tracking",
      "Cloud-based wellness analytics",
    ],
    researchBackground: "Evolution of the VCMF technology platform incorporating machine learning for personalized therapeutic protocols.",
    status: "coming-soon",
  },
  {
    id: "prod-5",
    name: "Molecular Discovery Engine",
    category: "Research Tools",
    description: "AI-powered computational chemistry platform for rapid molecular design, property prediction, and drug candidate optimization.",
    features: [
      "ML-based molecular property prediction",
      "Virtual screening at scale",
      "Automated SAR analysis",
      "Synthesis route planning",
      "ADMET prediction models",
      "Integration with lab automation",
    ],
    researchBackground: "Combines decades of medicinal chemistry expertise with modern AI/ML approaches to accelerate the drug discovery cycle.",
    status: "research-phase",
  },
];
