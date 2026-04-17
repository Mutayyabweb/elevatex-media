import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/shared/Badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Minus, Star, Zap } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface PricingTier {
  id: string;
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  period: string;
  description: string;
  highlight: boolean;
  badge?: string;
  features: string[];
  cta: string;
  ctaVariant: "primary" | "secondary" | "accent";
}

const tiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: "$1,500",
    annualPrice: "$1,200",
    period: "/ month",
    description:
      "For small businesses ready to establish a digital presence and start generating consistent leads.",
    highlight: false,
    features: [
      "Up to 2 marketing channels",
      "SEO or PPC (choose one focus)",
      "Monthly strategy call",
      "Full monthly performance report",
      "Dedicated Account Manager",
      "Google Analytics setup",
      "Up to 4 blog posts/month",
      "Email support (1 business day)",
      "Campaign setup included",
      "3-month minimum engagement",
    ],
    cta: "Get Started",
    ctaVariant: "secondary",
  },
  {
    id: "growth",
    name: "Growth",
    monthlyPrice: "$3,000",
    annualPrice: "$2,400",
    period: "/ month",
    description:
      "For growing businesses that need multi-channel execution and faster, more aggressive results.",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Up to 4 marketing channels",
      "SEO + PPC + Social Media",
      "Bi-weekly strategy calls",
      "Live reporting dashboard",
      "Dedicated Account Manager + Specialists",
      "Advanced conversion tracking",
      "Up to 8 blog posts/month",
      "Priority email & phone support",
      "Landing page design included",
      "CRO audits quarterly",
    ],
    cta: "Get Started",
    ctaVariant: "primary",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    period: "quote",
    description:
      "For large organizations requiring full-service digital marketing, custom integrations, and executive-level strategy.",
    highlight: false,
    features: [
      "Unlimited marketing channels",
      "Full-service SEO, PPC, Social, Content",
      "Weekly strategy calls + QBRs",
      "Custom real-time dashboard",
      "Dedicated team of 5+ specialists",
      "Custom analytics & attribution",
      "Unlimited content production",
      "24/7 priority support",
      "Custom web development",
      "White-label reporting available",
    ],
    cta: "Request a Quote",
    ctaVariant: "accent",
  },
];

interface ComparisonRow {
  feature: string;
  starter: boolean | string;
  growth: boolean | string;
  enterprise: boolean | string;
}

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Marketing channels",
    starter: "Up to 2",
    growth: "Up to 4",
    enterprise: "Unlimited",
  },
  {
    feature: "Dedicated Account Manager",
    starter: true,
    growth: true,
    enterprise: true,
  },
  {
    feature: "Monthly reporting",
    starter: true,
    growth: true,
    enterprise: true,
  },
  {
    feature: "Live reporting dashboard",
    starter: false,
    growth: true,
    enterprise: true,
  },
  {
    feature: "Blog content per month",
    starter: "4 posts",
    growth: "8 posts",
    enterprise: "Unlimited",
  },
  {
    feature: "Strategy calls",
    starter: "Monthly",
    growth: "Bi-weekly",
    enterprise: "Weekly",
  },
  {
    feature: "PPC management",
    starter: "Add-on",
    growth: true,
    enterprise: true,
  },
  {
    feature: "Landing page design",
    starter: false,
    growth: true,
    enterprise: true,
  },
  {
    feature: "CRO audits",
    starter: false,
    growth: "Quarterly",
    enterprise: "Monthly",
  },
  {
    feature: "Custom web development",
    starter: false,
    growth: false,
    enterprise: true,
  },
  {
    feature: "White-label reporting",
    starter: false,
    growth: false,
    enterprise: true,
  },
  {
    feature: "Support",
    starter: "Email",
    growth: "Email + Phone",
    enterprise: "24/7 Priority",
  },
];

function ComparisonCell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-5 h-5 text-primary mx-auto" />
    ) : (
      <Minus className="w-4 h-4 text-muted-foreground mx-auto opacity-40" />
    );
  }
  return <span className="text-sm text-foreground font-medium">{value}</span>;
}

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden min-h-[380px] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.7_0.22_300/0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.3_0.08_270/0.4),transparent_60%)]" />
          <motion.div
            animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-10 right-16 w-80 h-80 bg-white/10 rounded-full blur-3xl"
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
                Transparent Pricing
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-5"
            >
              Simple, Honest Pricing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-primary-foreground/80 leading-relaxed"
            >
              No hidden fees, no surprise invoices. Choose the plan that fits
              your goals and budget.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Our Plans"
            title="Pick the Right Plan for Your Business"
            subtitle="All plans include a dedicated account manager, monthly reporting, and a 3-month minimum engagement."
          />

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <span
              className={`text-sm font-semibold transition-colors ${!annual ? "text-foreground" : "text-muted-foreground"}`}
            >
              Monthly
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={annual}
              onClick={() => setAnnual((a) => !a)}
              className="relative w-12 h-6 bg-muted rounded-full border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              data-ocid="pricing-billing-toggle"
            >
              <motion.div
                animate={{ x: annual ? 24 : 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="absolute top-0.5 w-5 h-5 bg-primary rounded-full shadow-sm"
              />
            </button>
            <span
              className={`text-sm font-semibold transition-colors ${annual ? "text-foreground" : "text-muted-foreground"}`}
            >
              Annual <span className="text-primary text-xs ml-1">Save 20%</span>
            </span>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative rounded-2xl border flex flex-col transition-all duration-300 ${
                  tier.highlight
                    ? "border-primary shadow-2xl shadow-primary/20 bg-card ring-2 ring-primary/30"
                    : "border-border bg-card hover:shadow-lg hover:border-primary/30"
                }`}
                data-ocid={`pricing-card-${tier.id}`}
              >
                {tier.badge && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2"
                  >
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary text-primary-foreground text-xs font-bold rounded-full shadow-lg shadow-primary/30">
                      <Star className="w-3 h-3" />
                      {tier.badge}
                    </span>
                  </motion.div>
                )}
                {tier.highlight && (
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/20 to-transparent pointer-events-none" />
                )}
                <div className="p-8 flex-1 flex flex-col relative">
                  <div className="mb-6">
                    <h3 className="text-heading-sm text-foreground mb-1">
                      {tier.name}
                    </h3>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={annual ? "annual" : "monthly"}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.25 }}
                        className="flex items-end gap-1 mb-3"
                      >
                        <span className="text-4xl font-display font-bold text-foreground">
                          {annual ? tier.annualPrice : tier.monthlyPrice}
                        </span>
                        <span className="text-muted-foreground text-sm mb-1">
                          {tier.period}
                        </span>
                      </motion.div>
                    </AnimatePresence>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tier.description}
                    </p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature, fi) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: fi * 0.05 }}
                        className="flex items-start gap-2.5"
                      >
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground leading-snug">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link
                      to="/contact"
                      className={`w-full text-center inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200 ${
                        tier.ctaVariant === "primary"
                          ? "bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/30"
                          : tier.ctaVariant === "accent"
                            ? "bg-accent text-accent-foreground hover:opacity-90"
                            : "bg-secondary text-secondary-foreground hover:bg-muted border border-border"
                      }`}
                      data-ocid={`pricing-cta-${tier.id}`}
                    >
                      {tier.cta} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Feature Comparison"
            title="See What's Included in Each Plan"
            subtitle="A side-by-side look at every feature so you can make an informed choice."
          />
          <div className="max-w-5xl mx-auto overflow-x-auto rounded-xl border border-border shadow-sm">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-card border-b border-border">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-foreground w-2/5">
                    Feature
                  </th>
                  {tiers.map((tier) => (
                    <th
                      key={tier.id}
                      className={`text-center px-6 py-4 text-sm font-semibold w-1/5 ${tier.highlight ? "text-primary" : "text-foreground"}`}
                    >
                      {tier.name}
                      {tier.highlight && (
                        <span className="ml-1.5 text-xs font-normal text-primary/70">
                          ★
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-card" : "bg-background"}`}
                    data-ocid="comparison-row"
                  >
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <ComparisonCell value={row.starter} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <ComparisonCell value={row.growth} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <ComparisonCell value={row.enterprise} />
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-14 h-14 bg-primary-foreground/15 border border-primary-foreground/30 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Zap className="w-7 h-7 text-primary-foreground" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-display font-bold text-primary-foreground mb-4"
            >
              Need a Custom Package?
            </motion.h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed max-w-xl mx-auto">
              Every business is different. If none of our standard plans fit
              your needs, tell us your goals and budget — and we'll craft a
              tailored proposal at no charge.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-md font-bold text-base hover:opacity-90 transition-opacity"
                  data-ocid="pricing-custom-quote"
                >
                  Request a Custom Quote <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <a
                href="tel:03145503574"
                className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-md font-semibold text-base hover:bg-primary-foreground/10 transition-colors"
              >
                Call Us: 03145503574
              </a>
            </div>
            <p className="text-primary-foreground/60 text-sm mt-6">
              Free strategy session included with every proposal request.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
