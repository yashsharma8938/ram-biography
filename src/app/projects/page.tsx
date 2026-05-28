"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/client";
import SectionReveal from "@/components/ui/SectionReveal";
import GlassCard from "@/components/ui/GlassCard";
import { Activity, Beaker, Clock, ChevronRight } from "lucide-react";
import { ProjectItem } from "@/types/projects";

// Mock Data (will be fetched from Sanity)
const activeProjects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Novel MDR Pathogen Inhibitor Synthesis",
    status: "Clinical Trials - Phase I",
    progress: 75,
    domain: "Infectious Diseases",
    lastUpdated: "2024-05-10",
    description: "Developing a new class of inhibitors targeting multidrug-resistant tuberculosis strains. Current phase focuses on safety profiling and initial efficacy markers.",
    timeline: [
      { date: "Oct 2023", milestone: "Pre-clinical success confirmed" },
      { date: "Jan 2024", milestone: "IND application approved" },
      { date: "May 2024", milestone: "Phase I dosing commenced" },
    ]
  },
  {
    id: "proj-2",
    title: "Quantum Resonance Bio-Markers",
    status: "Research Phase",
    progress: 40,
    domain: "Wellness Technology",
    lastUpdated: "2024-04-28",
    description: "Investigating the correlation between quantum resonance frequencies and cellular regeneration rates in human fibroblasts.",
    timeline: [
      { date: "Aug 2023", milestone: "Initial hypothesis formulated" },
      { date: "Dec 2023", milestone: "In-vitro testing setup" },
      { date: "Apr 2024", milestone: "First dataset analyzed" },
    ]
  }
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<ProjectItem[]>(activeProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const fetchedProjects: ProjectItem[] = await client.fetch(`*[_type == "projectType"] | order(lastUpdated desc)`);
        if (fetchedProjects && fetchedProjects.length > 0) {
          setProjects(fetchedProjects);
        }
      } catch (error) {
        console.log("Sanity CMS not configured or offline. Falling back to mock data.", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-ivory">
      
      {/* Background styling */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-bronze/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="container-editorial relative z-10">
        
        {/* HEADER */}
        <SectionReveal>
          <div className="max-w-4xl mb-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="divider-walnut" style={{ width: 40 }} />
              <span className="text-label">Live Tracker</span>
            </div>
            <h1 className="heading-editorial text-5xl md:text-7xl font-bold text-charcoal mb-6">
              Current Work & Discoveries
            </h1>
            <p className="text-body text-xl max-w-2xl text-slate">
              A real-time overview of ongoing research pipelines, active clinical trials, and upcoming scientific innovations.
            </p>
          </div>
        </SectionReveal>

        {/* PROJECTS GRID */}
        <div className="space-y-16">
          {projects.map((project, idx) => (
            <SectionReveal key={project._id || project.id} delay={idx * 0.1}>
              <GlassCard className="p-0 overflow-hidden border-border-strong hover:shadow-cinematic transition-shadow duration-700 bg-warm-white">
                <div className="flex flex-col lg:flex-row">
                  
                  {/* Left Column: Info */}
                  <div className="w-full lg:w-2/3 p-10 md:p-16 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="px-4 py-1.5 rounded-full bg-walnut/5 text-walnut font-manrope text-xs uppercase tracking-widest font-semibold flex items-center gap-2">
                          <Activity className="w-3 h-3" /> {project.status}
                        </span>
                        <span className="text-label text-slate flex items-center gap-2">
                          <Beaker className="w-3 h-3" /> {project.domain}
                        </span>
                      </div>
                      
                      <h2 className="heading-editorial text-3xl md:text-4xl font-bold text-charcoal mb-6">
                        {project.title}
                      </h2>
                      
                      <p className="text-body text-lg text-slate mb-12 max-w-2xl">
                        {project.description}
                      </p>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full max-w-md">
                      <div className="flex justify-between items-end mb-2">
                        <span className="font-manrope text-xs font-bold uppercase tracking-widest text-charcoal">Research Progress</span>
                        <span className="font-playfair text-xl text-walnut italic">{project.progress}%</span>
                      </div>
                      <div className="h-1 w-full bg-charcoal/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-bronze to-walnut transition-all duration-1000 ease-out"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Timeline */}
                  <div className="w-full lg:w-1/3 bg-gradient-to-b from-parchment to-cream p-10 md:p-16 border-l border-bronze/10">
                    <h3 className="heading-cormorant text-2xl font-bold text-charcoal mb-10 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-bronze" /> Project Timeline
                    </h3>
                    
                    <div className="relative border-l border-bronze/30 ml-3 space-y-10">
                      {project.timeline && project.timeline.map((step: any, stepIdx: number) => (
                        <div key={stepIdx} className="relative pl-8 group">
                          {/* Timeline dot */}
                          <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-ivory border-2 border-bronze group-hover:bg-bronze transition-colors duration-300" />
                          <div className="text-label text-bronze mb-1">{step.date}</div>
                          <div className="font-manrope text-sm font-semibold text-charcoal leading-relaxed">{step.milestone}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-bronze/20 text-xs font-manrope text-slate flex items-center justify-between">
                      <span>Last Updated: {project.lastUpdated ? new Date(project.lastUpdated).toLocaleDateString() : 'Recently'}</span>
                      <button className="text-walnut hover:text-bronze flex items-center gap-1 font-semibold uppercase tracking-wider transition-colors">
                        View Details <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                </div>
              </GlassCard>
            </SectionReveal>
          ))}
        </div>

      </div>
    </div>
  );
}
