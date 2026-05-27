export interface MediaArticle {
  id: string;
  title: string;
  source: string;
  date: string;
  category: string;
  excerpt: string;
  url?: string;
  featured?: boolean;
}

export const mediaCategories = ["All", "Press", "Interviews", "News", "Research Coverage"];

export const mediaArticles: MediaArticle[] = [
  { id: "m1", title: "Laxai Life Sciences Partners on COVID-19 Therapeutic Research", source: "Press Information Bureau, Govt of India", date: "2021-03-15", category: "Press", excerpt: "Dr. Ram Shankar Upadhayaya leads collaborative research efforts for COVID-19 therapeutics through Laxai Life Sciences.", featured: true },
  { id: "m2", title: "Aryastha Life Sciences Appoints Dr. Upadhayaya as CTO", source: "PR Newswire", date: "2024-10-01", category: "News", excerpt: "Aryastha Life Sciences announces the appointment of Dr. Ram Shankar Upadhayaya as Chief Technology Officer to lead integrated drug discovery.", featured: true },
  { id: "m3", title: "The Future of Drug Discovery in India", source: "The Times of India", date: "2023-06-20", category: "Interviews", excerpt: "An in-depth conversation with Dr. Upadhayaya on India's growing role in global pharmaceutical innovation.", featured: false },
  { id: "m4", title: "Evolv28: The Science Behind Better Sleep", source: "India Times", date: "2023-09-10", category: "Research Coverage", excerpt: "How VCMF technology is revolutionizing sleep wellness through non-invasive neuromodulation.", featured: true },
  { id: "m5", title: "Green Chemistry: Sustainable Pharma Manufacturing", source: "Chemical Weekly", date: "2022-04-05", category: "Press", excerpt: "Laxai Life Sciences pioneers sustainable manufacturing under Dr. Upadhayaya's leadership.", featured: false },
  { id: "m6", title: "From Harvard to Hyderabad: A Scientist's Journey", source: "Deccan Chronicle", date: "2022-11-15", category: "Interviews", excerpt: "Dr. Upadhayaya shares his journey from global research institutions to building India's drug discovery capabilities.", featured: false },
];
