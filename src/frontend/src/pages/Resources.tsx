import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/shared/Badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Download,
  FileText,
  LayoutTemplate,
  ListChecks,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

type ResourceType = "Guide" | "Template" | "Whitepaper" | "Checklist";
type ResourceCategory =
  | "SEO"
  | "PPC"
  | "Web Design"
  | "Content"
  | "Social Media";

interface Resource {
  id: string;
  title: string;
  description: string;
  type: ResourceType;
  category: ResourceCategory;
  pages: number;
  image: string;
}

const typeIcons: Record<ResourceType, React.ElementType> = {
  Guide: BookOpen,
  Template: LayoutTemplate,
  Whitepaper: FileText,
  Checklist: ListChecks,
};

const typeColors: Record<ResourceType, string> = {
  Guide: "bg-primary text-primary-foreground",
  Template: "bg-primary/80 text-white",
  Whitepaper: "bg-foreground text-white",
  Checklist: "bg-chart-4/80 text-white",
};

const resourceImages: Record<ResourceType, string> = {
  Guide:
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80",
  Template:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
  Whitepaper:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
  Checklist:
    "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&q=80",
};

const resources: Resource[] = [
  {
    id: "seo-complete-guide",
    title: "The Complete SEO Guide for 2025",
    description:
      "A comprehensive walkthrough of on-page, off-page, and technical SEO strategies proven to drive organic traffic growth.",
    type: "Guide",
    category: "SEO",
    pages: 48,
    image: resourceImages.Guide,
  },
  {
    id: "seo-audit-checklist",
    title: "SEO Audit Checklist — 120 Point Inspection",
    description:
      "Use this checklist to systematically identify technical, on-page, and authority issues across any website.",
    type: "Checklist",
    category: "SEO",
    pages: 12,
    image: resourceImages.Checklist,
  },
  {
    id: "local-seo-whitepaper",
    title: "Local SEO: Dominating Your Market in 2025",
    description:
      "Data-backed research on local search ranking factors, Google Business Profile optimization, and citation building.",
    type: "Whitepaper",
    category: "SEO",
    pages: 32,
    image: resourceImages.Whitepaper,
  },
  {
    id: "keyword-research-template",
    title: "Keyword Research & Mapping Template",
    description:
      "A ready-to-use spreadsheet template for organizing keyword clusters, intent mapping, and content planning.",
    type: "Template",
    category: "SEO",
    pages: 6,
    image: resourceImages.Template,
  },
  {
    id: "ppc-launch-guide",
    title: "Google Ads Launch Guide for B2B Companies",
    description:
      "Step-by-step instructions for setting up high-performing Google Ads campaigns from account structure to conversion tracking.",
    type: "Guide",
    category: "PPC",
    pages: 36,
    image: resourceImages.Guide,
  },
  {
    id: "ppc-audit-checklist",
    title: "PPC Account Audit Checklist",
    description:
      "Identify wasted spend, poor Quality Scores, and missed opportunities with this systematic paid media audit checklist.",
    type: "Checklist",
    category: "PPC",
    pages: 10,
    image: resourceImages.Checklist,
  },
  {
    id: "ppc-bid-whitepaper",
    title: "Smart Bidding Strategies: A Performance Marketer's Whitepaper",
    description:
      "An in-depth look at automated bidding in Google Ads — when to use it, how to configure it, and when to stay manual.",
    type: "Whitepaper",
    category: "PPC",
    pages: 28,
    image: resourceImages.Whitepaper,
  },
  {
    id: "web-design-ux-guide",
    title: "UX Best Practices for High-Converting Websites",
    description:
      "Explore the design principles, layout patterns, and CTA strategies that separate converting websites from beautiful ones.",
    type: "Guide",
    category: "Web Design",
    pages: 42,
    image: resourceImages.Guide,
  },
  {
    id: "web-design-brief-template",
    title: "Website Design Brief Template",
    description:
      "A structured template for capturing project goals, audience, brand guidelines, and technical requirements before any design work begins.",
    type: "Template",
    category: "Web Design",
    pages: 8,
    image: resourceImages.Template,
  },
  {
    id: "content-strategy-guide",
    title: "Content Marketing Strategy Playbook",
    description:
      "Build a content machine that drives SEO, generates leads, and builds brand authority — from strategy to editorial calendar.",
    type: "Guide",
    category: "Content",
    pages: 54,
    image: resourceImages.Guide,
  },
  {
    id: "content-calendar-template",
    title: "6-Month Editorial Calendar Template",
    description:
      "A plug-and-play editorial calendar for planning blog posts, social content, email campaigns, and video across a full quarter.",
    type: "Template",
    category: "Content",
    pages: 4,
    image: resourceImages.Template,
  },
  {
    id: "social-media-guide",
    title: "Social Media Marketing Guide: Organic + Paid",
    description:
      "Everything from profile optimization and content pillars to ad targeting and budget allocation across LinkedIn, Instagram, and X.",
    type: "Guide",
    category: "Social Media",
    pages: 44,
    image: resourceImages.Guide,
  },
  {
    id: "social-media-checklist",
    title: "Monthly Social Media Audit Checklist",
    description:
      "Use this checklist to review your social media accounts, content performance, follower growth, and engagement rates monthly.",
    type: "Checklist",
    category: "Social Media",
    pages: 8,
    image: resourceImages.Checklist,
  },
];

type FilterTab = "All" | ResourceCategory;
const tabs: FilterTab[] = [
  "All",
  "SEO",
  "PPC",
  "Web Design",
  "Content",
  "Social Media",
];

export function Resources() {
  const [active, setActive] = useState<FilterTab>("All");
  const filtered =
    active === "All"
      ? resources
      : resources.filter((r) => r.category === active);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden min-h-[380px] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.7_0.22_300/0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.3_0.08_270/0.4),transparent_60%)]" />
          <motion.div
            animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-16 right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="accent" size="lg" className="mb-6">
                Free Resources
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-5"
            >
              Marketing Resource Library
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-primary-foreground/80 leading-relaxed"
            >
              Download free guides, checklists, templates, and whitepapers built
              by our team of digital marketing experts to help you grow.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filter Tabs */}
          <motion.div
            className="flex flex-wrap gap-2 mb-10 relative"
            data-ocid="resources-filter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                type="button"
                onClick={() => setActive(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  active === tab
                    ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/30"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                }`}
                data-ocid={`resources-tab-${tab.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {tab}
              </motion.button>
            ))}
          </motion.div>

          {/* Resource Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((resource, i) => {
              const Icon = typeIcons[resource.type];
              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-card border border-border rounded-xl overflow-hidden flex flex-col hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
                  data-ocid={`resource-card-${resource.id}`}
                >
                  <div className="h-36 overflow-hidden relative">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${typeColors[resource.type]}`}
                      >
                        {resource.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-xs text-muted-foreground mt-1">
                        {resource.pages} pages · {resource.category}
                      </span>
                    </div>
                    <h3 className="text-heading-sm text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                      {resource.description}
                    </p>
                    <div className="pt-4 border-t border-border">
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-primary/10 text-primary text-sm font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-200 animate-pulse-subtle"
                        data-ocid={`resource-download-${resource.id}`}
                      >
                        <Download className="w-4 h-4" />
                        Download Free
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24" data-ocid="resources-empty">
              <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                No resources in this category yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative bg-card border border-primary/20 rounded-2xl p-8 text-center overflow-hidden">
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.08, 0.15, 0.08] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -right-8 -top-8 w-40 h-40 bg-primary rounded-full blur-3xl"
              />
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.05, 0.12, 0.05] }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 1.5,
                }}
                className="absolute -left-8 -bottom-8 w-40 h-40 bg-primary rounded-full blur-3xl"
              />
              <div className="relative z-10">
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  Get New Resources in Your Inbox
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  We publish new guides and templates every month. Join 5,000+
                  marketers who get them first.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="flex-1 px-4 py-2.5 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all duration-200 text-sm"
                    data-ocid="resources-newsletter-input"
                  />
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
                    data-ocid="resources-newsletter-submit"
                  >
                    Subscribe Free
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="max-w-3xl mx-auto text-center mt-16">
            <SectionHeading
              eyebrow="Need Expert Help?"
              title="Ready to Put These Insights Into Action?"
              subtitle="Our team can turn these strategies into real campaigns — built and managed to drive measurable revenue growth."
            />
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 button-primary"
                data-ocid="resources-cta"
              >
                Get a Free Strategy Session <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
