export interface NewsItem {
  id?: number | string;
  _id?: string;
  title: string;
  date?: string;
  publishedAt?: string;
  source: string;
  excerpt: string;
}

export interface NewspaperCutting {
  id?: number | string;
  _id?: string;
  title: string;
  publication: string;
  date?: string;
  publishedAt?: string;
  image: string;
  desc: string;
}
