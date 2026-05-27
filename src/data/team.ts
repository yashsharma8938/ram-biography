export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  contribution: string;
  category: "leadership" | "research" | "team" | "advisor";
}

export const teamMembers: TeamMember[] = [
  { id: "t1", name: "Dr. Ram Shankar Upadhayaya", designation: "Founder & Chief Scientist", contribution: "Visionary leadership in drug discovery, wellness innovation, and scientific strategy.", category: "leadership" },
  { id: "t2", name: "Research Team Lead", designation: "Head of Medicinal Chemistry", contribution: "Leading synthesis campaigns and SAR studies for novel therapeutic compounds.", category: "research" },
  { id: "t3", name: "Biology Director", designation: "Head of Discovery Biology", contribution: "Managing biological screening platforms and target validation programs.", category: "research" },
  { id: "t4", name: "DMPK Scientist", designation: "Head of DMPK & Safety", contribution: "Overseeing drug metabolism studies and preclinical safety assessments.", category: "research" },
  { id: "t5", name: "Process Chemistry Lead", designation: "Senior Process Chemist", contribution: "Scale-up chemistry and green manufacturing process development.", category: "team" },
  { id: "t6", name: "Clinical Advisor", designation: "Clinical Development Advisor", contribution: "Guiding clinical strategy and regulatory submissions for drug candidates.", category: "advisor" },
];

export const teamCategories = ["All", "Leadership", "Research", "Team", "Advisors"];
