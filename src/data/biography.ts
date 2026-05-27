export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category: "education" | "career" | "innovation" | "personal";
}

export interface BiographySection {
  id: string;
  title: string;
  subtitle?: string;
  content: string[];
  quote?: { text: string; attribution?: string };
  image?: string;
}

export const biographySections: BiographySection[] = [
  {
    id: "early-life",
    title: "The Beginning",
    subtitle: "Roots of Curiosity",
    content: [
      "Born with an innate curiosity for the natural world, Dr. Ram Shankar Upadhayaya's journey began in India, where the intersection of traditional knowledge and modern science would eventually shape his life's work.",
      "From an early age, he demonstrated an extraordinary aptitude for chemistry and the biological sciences — a fascination that would evolve into a lifelong pursuit of understanding the molecular foundations of life and health.",
      "Growing up in a culture rich with ancient wisdom about wellness and the human body, young Ram found himself drawn to the question that would define his career: How can modern science unlock the secrets of human health and healing?",
    ],
    quote: {
      text: "Science is not just a profession — it is a calling to serve humanity through the relentless pursuit of knowledge.",
      attribution: "Dr. Ram Shankar Upadhayaya",
    },
  },
  {
    id: "academic-journey",
    title: "Academic Excellence",
    subtitle: "Forging the Scientific Mind",
    content: [
      "Dr. Upadhayaya's academic journey is a testament to unwavering dedication. He pursued his passion for chemistry through rigorous academic programs, culminating in a Ph.D. and D.Sc. in Medicinal Chemistry — a dual distinction that places him among a rare cadre of scientists with deep expertise in drug design and molecular therapeutics.",
      "His academic pursues took him across the globe to some of the world's most prestigious research institutions. At Harvard Medical School, he honed his skills in cutting-edge biomedical research. At Uppsala University in Sweden, he explored new frontiers in pharmaceutical science. At the Max Planck Institute in Germany, he contributed to groundbreaking research at the molecular level.",
      "Each institution added a new dimension to his scientific repertoire, building a foundation of knowledge that spans continents and disciplines.",
    ],
    quote: {
      text: "Education is the foundation, but it is the application of knowledge to improve lives that gives it true meaning.",
      attribution: "Dr. Ram Shankar Upadhayaya",
    },
  },
  {
    id: "research-dedication",
    title: "The Research Years",
    subtitle: "24+ Years of Scientific Pursuit",
    content: [
      "With over 24 years of experience in pharmaceutical research and drug discovery, Dr. Upadhayaya has established himself as a leading authority in medicinal chemistry. His research spans multiple therapeutic areas — from oncology and infectious diseases to autoimmune disorders and metabolic conditions.",
      "His work at the Institute of Molecular Medicine in Pune further cemented his reputation as a scientist capable of bridging the gap between theoretical research and practical therapeutic solutions. He has authored numerous peer-reviewed publications and holds multiple patent applications, each representing a step forward in the fight against human disease.",
      "What distinguishes Dr. Upadhayaya from his contemporaries is not just the breadth of his research, but his unwavering commitment to translational science — ensuring that laboratory discoveries make their way to patients who need them most.",
    ],
  },
  {
    id: "entrepreneurial-growth",
    title: "Building Institutions",
    subtitle: "From Researcher to Industry Leader",
    content: [
      "Recognizing that scientific discovery alone is insufficient to change the world, Dr. Upadhayaya transitioned from pure research to entrepreneurial leadership. As CEO of Laxai Life Sciences, he transformed the company into a leading Contract Research, Development, and Manufacturing Organization (CRDMO) based in Hyderabad, India.",
      "Under his leadership, Laxai Life Sciences became a trusted partner for global pharmaceutical companies, offering end-to-end solutions from drug discovery to commercial manufacturing. During the COVID-19 pandemic, his leadership was instrumental in driving therapeutic research collaborations that contributed to the global response.",
      "Today, as Chief Technology Officer of Aryastha Life Sciences, he leads the company's integrated drug discovery and development strategy, overseeing scientific operations across multiple therapeutic domains including oncology, neuroscience, inflammation, and metabolic disorders.",
    ],
    quote: {
      text: "True leadership in science means not just discovering solutions, but building the institutions that can deliver them to the world.",
      attribution: "Dr. Ram Shankar Upadhayaya",
    },
  },
  {
    id: "wellness-mission",
    title: "The Wellness Vision",
    subtitle: "Science Meets Human Wellbeing",
    content: [
      "Beyond traditional pharmaceutical research, Dr. Upadhayaya has pioneered a unique vision that bridges cutting-edge science with holistic human wellness. His involvement with innovative wellness technologies, including the Evolv28 sleep wellness device, demonstrates his belief that science should serve not just the treatment of disease, but the optimization of human potential.",
      "This vision encompasses a profound understanding that true health extends beyond the absence of disease — it involves the harmonious balance of mind, body, and spirit. His approach combines rigorous scientific methodology with an appreciation for the ancient wellness traditions of Indian civilization.",
      "The result is a new paradigm in healthcare innovation — one that honors both the precision of modern science and the wisdom of holistic approaches to human wellbeing.",
    ],
  },
  {
    id: "future-vision",
    title: "Legacy & Vision",
    subtitle: "Shaping Tomorrow's Science",
    content: [
      "As Dr. Upadhayaya looks to the future, his vision extends far beyond any single discovery or company. He envisions a world where the barriers between scientific disciplines dissolve, where AI and traditional research methods combine to accelerate drug discovery, and where wellness technologies are accessible to every human being on the planet.",
      "His legacy is not measured in patents or publications alone, but in the lives touched by his work — patients who have benefited from drugs developed through his research, communities empowered by wellness innovations, and the next generation of scientists he continues to inspire and mentor.",
      "Dr. Ram Shankar Upadhayaya's story is ultimately one of devotion — to science, to innovation, to wellness, and to humanity. It is a story still being written, with each new day bringing fresh opportunities to push the boundaries of what science can achieve for the human race.",
    ],
    quote: {
      text: "A lifetime devoted to science, innovation, wellness, and humanity — this is not just a career, it is a sacred responsibility.",
      attribution: "Dr. Ram Shankar Upadhayaya",
    },
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: "Early Years",
    title: "A Spark of Curiosity",
    description: "Born in India with an innate fascination for chemistry and natural sciences, laying the foundation for a remarkable scientific journey.",
    category: "personal",
  },
  {
    year: "Academic",
    title: "Ph.D. & D.Sc. in Medicinal Chemistry",
    description: "Earned dual doctoral distinctions in Medicinal Chemistry, establishing deep expertise in drug design and molecular therapeutics.",
    category: "education",
  },
  {
    year: "Research",
    title: "Harvard Medical School",
    description: "Conducted cutting-edge biomedical research at one of the world's most prestigious medical institutions.",
    category: "education",
  },
  {
    year: "Research",
    title: "Uppsala University, Sweden",
    description: "Explored new frontiers in pharmaceutical science at this prestigious Scandinavian institution.",
    category: "education",
  },
  {
    year: "Research",
    title: "Max Planck Institute, Germany",
    description: "Contributed to groundbreaking molecular research at Europe's premier scientific research organization.",
    category: "education",
  },
  {
    year: "Research",
    title: "Institute of Molecular Medicine, Pune",
    description: "Advanced translational research bridging theoretical discoveries with practical therapeutic solutions.",
    category: "career",
  },
  {
    year: "Leadership",
    title: "CEO — Laxai Life Sciences",
    description: "Led the transformation of Laxai into a leading CRDMO, serving global pharmaceutical companies with end-to-end solutions.",
    category: "career",
  },
  {
    year: "2020",
    title: "COVID-19 Research Response",
    description: "Instrumental in driving therapeutic research collaborations during the global pandemic response.",
    category: "innovation",
  },
  {
    year: "Innovation",
    title: "Wellness Technology Ventures",
    description: "Pioneered the integration of cutting-edge science with holistic wellness approaches, including involvement with Evolv28.",
    category: "innovation",
  },
  {
    year: "Present",
    title: "CTO — Aryastha Life Sciences",
    description: "Leading integrated drug discovery and development strategy across oncology, neuroscience, inflammation, and metabolic disorders.",
    category: "career",
  },
];
