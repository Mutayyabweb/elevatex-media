import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/shared/Badge";
import { Link } from "@tanstack/react-router";
import { ExternalLink, MapIcon, Search } from "lucide-react";
import { useState } from "react";

interface SitemapPage {
  label: string;
  path: string;
  external?: boolean;
}

interface SitemapSection {
  title: string;
  pages: SitemapPage[];
}

const sitemapData: SitemapSection[] = [
  {
    title: "Main Navigation",
    pages: [
      { label: "Home", path: "/" },
      { label: "About Us", path: "/about" },
      { label: "Services", path: "/services" },
      { label: "Portfolio / Case Studies", path: "/portfolio" },
      { label: "Blog", path: "/blog" },
      { label: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Services",
    pages: [
      { label: "SEO Services", path: "/services/seo" },
      { label: "Local SEO", path: "/services/local-seo" },
      { label: "eCommerce SEO", path: "/services/ecommerce-seo" },
      { label: "Technical SEO", path: "/services/technical-seo" },
      { label: "PPC Management", path: "/services/ppc" },
      { label: "Google Ads", path: "/services/google-ads" },
      { label: "Social Media Marketing", path: "/services/social-media" },
      { label: "Content Marketing", path: "/services/content-marketing" },
      { label: "Email Marketing", path: "/services/email-marketing" },
      { label: "Web Design", path: "/services/web-design" },
      { label: "Web Development", path: "/services/web-development" },
      { label: "Conversion Rate Optimization", path: "/services/cro" },
      {
        label: "Reputation Management",
        path: "/services/reputation-management",
      },
      { label: "Video Marketing", path: "/services/video-marketing" },
      { label: "Influencer Marketing", path: "/services/influencer-marketing" },
    ],
  },
  {
    title: "Resources",
    pages: [
      { label: "Resource Library", path: "/resources" },
      { label: "Blog", path: "/blog" },
      { label: "FAQ", path: "/faq" },
      { label: "Pricing", path: "/pricing" },
      { label: "Integrations", path: "/integrations" },
    ],
  },
  {
    title: "Company",
    pages: [
      { label: "About Us", path: "/about" },
      { label: "Team", path: "/team" },
      { label: "Careers", path: "/careers" },
      { label: "Testimonials", path: "/testimonials" },
      { label: "Portfolio", path: "/portfolio" },
    ],
  },
  {
    title: "Client Area",
    pages: [
      { label: "Client Login", path: "/client-login" },
      { label: "Contact Support", path: "/contact" },
    ],
  },
  {
    title: "Legal",
    pages: [
      { label: "Privacy Policy", path: "/privacy" },
      { label: "Terms of Service", path: "/terms" },
      { label: "Sitemap", path: "/sitemap" },
    ],
  },
];

export function Sitemap() {
  const [query, setQuery] = useState("");

  const allPages = sitemapData.flatMap((s) =>
    s.pages.map((p) => ({ ...p, section: s.title })),
  );

  const filtered = query.trim()
    ? allPages.filter(
        (p) =>
          p.label.toLowerCase().includes(query.toLowerCase()) ||
          p.path.toLowerCase().includes(query.toLowerCase()),
      )
    : null;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden min-h-[280px] flex items-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-80 h-80 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-16">
          <Badge variant="accent" size="lg" className="mb-5">
            Navigation
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-tight mb-4">
            Site Map
          </h1>
          <p className="text-primary-foreground/80 text-base max-w-xl">
            A complete overview of every page on the ElevateX Media website,
            organized by section for easy navigation.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-10 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search pages by name or path…"
              aria-label="Search pages"
              className="w-full pl-11 pr-4 py-3 rounded-lg border border-input bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
              data-ocid="sitemap-search"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          {filtered !== null ? (
            <div>
              <p className="text-sm text-muted-foreground mb-6">
                {filtered.length} result{filtered.length !== 1 ? "s" : ""} for "
                {query}"
              </p>
              {filtered.length === 0 ? (
                <div className="text-center py-16" data-ocid="sitemap-empty">
                  <MapIcon className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    No pages match your search.
                  </p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {filtered.map((p) => (
                    <SitemapLink key={p.path} page={p} showSection />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {sitemapData.map((section) => (
                <div
                  key={section.title}
                  data-ocid={`sitemap-section-${section.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <h2 className="text-heading-sm text-foreground mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-primary rounded-full inline-block" />
                    {section.title}
                  </h2>
                  <ul className="space-y-2">
                    {section.pages.map((page) => (
                      <li key={page.path}>
                        <SitemapLink page={page} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

function SitemapLink({
  page,
  showSection,
}: {
  page: { label: string; path: string; external?: boolean; section?: string };
  showSection?: boolean;
}) {
  return (
    <Link
      to={page.path as "/"}
      className="flex items-center gap-2 text-sm text-primary hover:underline hover:text-primary/80 transition-smooth py-0.5 group"
      data-ocid={`sitemap-link-${page.path.replace(/\//g, "-").replace(/^-/, "")}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-smooth flex-shrink-0" />
      <span className="min-w-0 truncate">{page.label}</span>
      {showSection && page.section && (
        <span className="text-xs text-muted-foreground ml-auto flex-shrink-0">
          {page.section}
        </span>
      )}
      {page.external && <ExternalLink className="w-3 h-3 flex-shrink-0" />}
    </Link>
  );
}
