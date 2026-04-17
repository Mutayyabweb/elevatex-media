import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/shared/Badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

type IntegrationCategory =
  | "CMS"
  | "CRM"
  | "eCommerce"
  | "Analytics"
  | "Advertising"
  | "Email";

interface Integration {
  id: string;
  name: string;
  description: string;
  category: IntegrationCategory;
  badge: "Official Partner" | "Certified" | "Integrated";
  initials: string;
  color: string;
}

const integrations: Integration[] = [
  // CMS
  {
    id: "wordpress",
    name: "WordPress",
    description:
      "Full site management, content publishing, and SEO plugin integration.",
    category: "CMS",
    badge: "Official Partner",
    initials: "WP",
    color: "bg-primary",
  },
  {
    id: "webflow",
    name: "Webflow",
    description:
      "Design-to-launch workflow with integrated analytics and form tracking.",
    category: "CMS",
    badge: "Certified",
    initials: "WF",
    color: "bg-primary/80",
  },
  {
    id: "shopify",
    name: "Shopify",
    description:
      "eCommerce store management, product feeds, and conversion tracking.",
    category: "CMS",
    badge: "Official Partner",
    initials: "SH",
    color: "bg-chart-4",
  },
  {
    id: "wix",
    name: "Wix",
    description:
      "Site audit and performance tracking for Wix-hosted properties.",
    category: "CMS",
    badge: "Integrated",
    initials: "WX",
    color: "bg-accent",
  },
  // CRM
  {
    id: "salesforce",
    name: "Salesforce",
    description:
      "Lead syncing, pipeline attribution, and campaign performance tracking.",
    category: "CRM",
    badge: "Official Partner",
    initials: "SF",
    color: "bg-chart-5",
  },
  {
    id: "hubspot",
    name: "HubSpot",
    description:
      "Full-funnel CRM integration — sync contacts, deals, and marketing data.",
    category: "CRM",
    badge: "Certified",
    initials: "HS",
    color: "bg-accent",
  },
  {
    id: "zoho",
    name: "Zoho CRM",
    description:
      "Automate lead imports from ad campaigns and sync deal stages.",
    category: "CRM",
    badge: "Integrated",
    initials: "ZH",
    color: "bg-destructive",
  },
  {
    id: "pipedrive",
    name: "Pipedrive",
    description: "Marketing-to-sales pipeline visibility with deal tracking.",
    category: "CRM",
    badge: "Integrated",
    initials: "PD",
    color: "bg-chart-5",
  },
  // eCommerce
  {
    id: "woocommerce",
    name: "WooCommerce",
    description:
      "Product catalog sync, purchase tracking, and abandoned cart attribution.",
    category: "eCommerce",
    badge: "Official Partner",
    initials: "WC",
    color: "bg-primary",
  },
  {
    id: "magento",
    name: "Magento",
    description:
      "Enterprise eCommerce tracking, product feeds, and CPC attribution.",
    category: "eCommerce",
    badge: "Certified",
    initials: "MG",
    color: "bg-accent/80",
  },
  {
    id: "bigcommerce",
    name: "BigCommerce",
    description:
      "Storefront analytics, ad tracking, and multi-channel attribution.",
    category: "eCommerce",
    badge: "Integrated",
    initials: "BC",
    color: "bg-primary/70",
  },
  // Analytics
  {
    id: "ga4",
    name: "Google Analytics 4",
    description:
      "Full GA4 setup, event tracking, custom dimensions, and attribution modeling.",
    category: "Analytics",
    badge: "Official Partner",
    initials: "GA",
    color: "bg-accent",
  },
  {
    id: "looker",
    name: "Looker Studio",
    description:
      "Custom dashboard builds, automated reporting, and data blending.",
    category: "Analytics",
    badge: "Certified",
    initials: "LS",
    color: "bg-primary",
  },
  {
    id: "hotjar",
    name: "Hotjar",
    description:
      "Heatmaps, session recordings, and user feedback for CRO campaigns.",
    category: "Analytics",
    badge: "Integrated",
    initials: "HJ",
    color: "bg-destructive",
  },
  {
    id: "semrush",
    name: "SEMrush",
    description:
      "Keyword rank tracking, competitor analysis, and backlink monitoring.",
    category: "Analytics",
    badge: "Official Partner",
    initials: "SR",
    color: "bg-accent/70",
  },
  // Advertising
  {
    id: "google-ads",
    name: "Google Ads",
    description:
      "Campaign management, bidding automation, and conversion import.",
    category: "Advertising",
    badge: "Official Partner",
    initials: "GA",
    color: "bg-primary",
  },
  {
    id: "meta-ads",
    name: "Meta Ads",
    description:
      "Facebook and Instagram ad campaigns with Pixel and CAPI integration.",
    category: "Advertising",
    badge: "Official Partner",
    initials: "MB",
    color: "bg-primary/90",
  },
  {
    id: "linkedin-ads",
    name: "LinkedIn Ads",
    description:
      "B2B lead gen campaigns, matched audiences, and Insight Tag setup.",
    category: "Advertising",
    badge: "Certified",
    initials: "LI",
    color: "bg-chart-5",
  },
  {
    id: "bing-ads",
    name: "Microsoft Ads",
    description:
      "Bing and Audience Network campaigns with cross-channel reporting.",
    category: "Advertising",
    badge: "Certified",
    initials: "MS",
    color: "bg-primary/70",
  },
  // Email
  {
    id: "mailchimp",
    name: "Mailchimp",
    description:
      "Email list sync, campaign analytics, and automation workflow support.",
    category: "Email",
    badge: "Certified",
    initials: "MC",
    color: "bg-accent",
  },
  {
    id: "klaviyo",
    name: "Klaviyo",
    description:
      "eCommerce email automation, flow building, and revenue attribution.",
    category: "Email",
    badge: "Official Partner",
    initials: "KV",
    color: "bg-chart-4",
  },
  {
    id: "activecampaign",
    name: "ActiveCampaign",
    description:
      "CRM-synced email automation, lead scoring, and drip sequences.",
    category: "Email",
    badge: "Certified",
    initials: "AC",
    color: "bg-primary",
  },
];

type FilterTab = "All" | IntegrationCategory;
const tabs: FilterTab[] = [
  "All",
  "CMS",
  "CRM",
  "eCommerce",
  "Analytics",
  "Advertising",
  "Email",
];

const badgeStyles: Record<Integration["badge"], string> = {
  "Official Partner": "bg-primary text-primary-foreground",
  Certified: "bg-accent text-accent-foreground",
  Integrated: "bg-muted text-muted-foreground",
};

export function Integrations() {
  const [active, setActive] = useState<FilterTab>("All");

  const filtered =
    active === "All"
      ? integrations
      : integrations.filter((i) => i.category === active);

  const grouped = tabs.slice(1) as IntegrationCategory[];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden min-h-[360px] flex items-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-primary-foreground rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <div className="max-w-2xl">
            <Badge variant="accent" size="lg" className="mb-6">
              Integrations
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-5">
              Connects With Your Entire Stack
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              ElevateX Media integrates with 20+ platforms — CRMs, eCommerce,
              analytics, advertising, and email — for seamless data flow and
              attribution.
            </p>
            <div className="flex items-center gap-6 mt-8">
              <div>
                <div className="text-3xl font-display font-bold text-primary-foreground">
                  20+
                </div>
                <div className="text-primary-foreground/70 text-sm">
                  Integrations
                </div>
              </div>
              <div className="w-px h-10 bg-primary-foreground/30" />
              <div>
                <div className="text-3xl font-display font-bold text-primary-foreground">
                  6
                </div>
                <div className="text-primary-foreground/70 text-sm">
                  Categories
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div
            className="flex flex-wrap gap-2 mb-10"
            data-ocid="integrations-filter"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActive(tab)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-smooth border ${
                  active === tab
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                }`}
                data-ocid={`integrations-tab-${tab.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {active === "All" ? (
            <div className="space-y-14">
              {grouped.map((cat) => {
                const catItems = integrations.filter((i) => i.category === cat);
                return (
                  <div key={cat}>
                    <h2 className="text-heading-md text-foreground mb-6">
                      {cat}
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {catItems.map((item) => (
                        <IntegrationCard key={item.id} item={item} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filtered.map((item) => (
                <IntegrationCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Why It Matters"
            title="Partnership Tiers Explained"
            subtitle="Our integration levels reflect the depth of our technical relationship with each platform."
          />
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                badge: "Official Partner",
                desc: "Direct API access, co-marketing, and priority support from the platform's team.",
                color: "bg-primary text-primary-foreground",
              },
              {
                badge: "Certified",
                desc: "Platform-verified expertise. We've passed certification exams and maintain active credentials.",
                color: "bg-accent text-accent-foreground",
              },
              {
                badge: "Integrated",
                desc: "Technically connected through standard APIs — used actively in client campaigns.",
                color: "bg-muted text-muted-foreground",
              },
            ].map((tier) => (
              <div
                key={tier.badge}
                className="bg-card border border-border rounded-xl p-6"
              >
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${tier.color}`}
                >
                  {tier.badge}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tier.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-primary-foreground mb-4">
              Don't See Your Platform?
            </h2>
            <p className="text-primary-foreground/80 mb-8 leading-relaxed">
              We're constantly expanding our integrations. Contact us to discuss
              your stack and we'll confirm compatibility or build a custom data
              bridge.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-md font-bold text-base hover:opacity-90 transition-smooth"
              data-ocid="integrations-cta"
            >
              Talk to an Integration Specialist{" "}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function IntegrationCard({ item }: { item: Integration }) {
  return (
    <div
      className="bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-smooth"
      data-ocid={`integration-${item.id}`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div
          className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}
        >
          <span className="text-xs font-bold text-primary-foreground">
            {item.initials}
          </span>
        </div>
        <span
          className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold flex-shrink-0 ${badgeStyles[item.badge]}`}
        >
          {item.badge}
        </span>
      </div>
      <h3 className="font-semibold text-foreground mb-1.5">{item.name}</h3>
      <p className="text-xs text-muted-foreground leading-relaxed">
        {item.description}
      </p>
      <div className="flex items-center gap-1.5 mt-3">
        <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
        <span className="text-xs text-primary font-medium">
          {item.category}
        </span>
      </div>
    </div>
  );
}
