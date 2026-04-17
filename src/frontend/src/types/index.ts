export interface Service {
  id: string;
  slug: string;
  title: string;
  category:
    | "seo"
    | "ppc"
    | "social"
    | "content"
    | "web"
    | "optimization"
    | "advertising";
  icon: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  process: { step: string; description: string }[];
  relatedServices: string[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  industry: string;
  service: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string }[];
  testimonial?: { quote: string; author: string; title: string };
  image: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  content: string;
  image: string;
  readTime: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  industry: string;
  avatar?: string;
  rating: number;
}
