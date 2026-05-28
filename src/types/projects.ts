export interface ProjectTimeline {
  date: string;
  milestone: string;
}

export interface ProjectItem {
  id?: string;
  _id?: string;
  title: string;
  status: string;
  progress: number;
  domain: string;
  lastUpdated?: string;
  description: string;
  timeline?: ProjectTimeline[];
}
