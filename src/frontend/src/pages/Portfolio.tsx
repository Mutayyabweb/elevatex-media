import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/shared/Badge";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { caseStudies } from "@/data/caseStudies";
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";
import type { CaseStudy } from "@/types";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BarChart3,
  ImageOff,
  Target,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const INDUSTRY_TABS = [
  "All",
  "eCommerce",
  "Healthcare",
  "B2B",
  "Local Business",
  "SaaS",
] as const;
type IndustryTab = (typeof INDUSTRY_TABS)[number];

const STATS = [
  { icon: BarChart3, value: "2,400+", label: "Campaigns Launched" },
  { icon: Target, value: "6.8x", label: "Average ROAS" },
  { icon: Users, value: "98%", label: "Client Retention Rate" },
  { icon: Award, value: "50+", label: "Industry Awards" },
];

// Industry → Unsplash image mapping
const industryImages: Record<string, string> = {
  eCommerce:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  SaaS: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  Healthcare:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
  "Local Business":
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  Finance:
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
  "Real Estate":
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
  Education:
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
  B2B: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
};

function getCaseStudyImage(cs: CaseStudy): string {
  return cs.image && cs.image !== "/assets/images/placeholder.svg"
    ? cs.image
    : (industryImages[cs.industry] ??
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80");
}

interface EnhancedCaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

function EnhancedCaseStudyCard({
  caseStudy,
  index,
}: EnhancedCaseStudyCardProps) {
  const topResult = caseStudy.results[0];
  const [imgError, setImgError] = useState(false);
  const imgSrc = getCaseStudyImage(caseStudy);

  return (
    <motion.div
      variants={staggerItem}
      custom={index}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link to="/portfolio/$id" params={{ id: caseStudy.slug }}>
        <article className="group bg-card border border-border rounded-xl overflow-hidden shadow-xs hover:shadow-lg hover:border-primary/30 transition-smooth h-full flex flex-col cursor-pointer">
          <div className="relative overflow-hidden h-52 bg-muted flex items-center justify-center">
            {imgError ? (
              <div className="absolute inset-0 bg-muted flex items-center justify-center">
                <ImageOff className="w-10 h-10 text-muted-foreground opacity-40" />
              </div>
            ) : (
              <img
                src={imgSrc}
                alt={`${caseStudy.client} case study`}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                onError={() => setImgError(true)}
              />
            )}
            {/* Gradient overlay — darker on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />

            {/* Overlay metrics appear on hover */}
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="accent" size="sm">
                  {caseStudy.industry}
                </Badge>
                {topResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-primary rounded-lg px-3 py-1.5"
                  >
                    <p className="text-lg font-display font-bold text-primary-foreground leading-none">
                      {topResult.value}
                    </p>
                    <p className="text-[10px] text-primary-foreground/80">
                      {topResult.metric}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          <div className="p-5 flex flex-col flex-1">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
              {caseStudy.service}
            </p>
            <h3 className="font-display font-bold text-base text-foreground mb-2 leading-snug">
              {caseStudy.client}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
              {caseStudy.challenge}
            </p>

            {topResult && (
              <div className="mt-4 p-3 bg-primary/5 border border-primary/15 rounded-lg group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <p className="text-xl font-display font-bold text-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {topResult.value}
                </p>
                <p className="text-xs text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-300">
                  {topResult.metric}
                </p>
              </div>
            )}

            <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all duration-200">
              View Case Study <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

export function Portfolio() {
  const [filter, setFilter] = useState<IndustryTab>("All");

  const filtered =
    filter === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.industry === filter);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20 relative overflow-hidden min-h-[400px] flex items-end">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 opacity-20 pointer-events-none"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 40%, oklch(0.7 0.18 270), transparent 50%), radial-gradient(ellipse at 80% 60%, oklch(0.6 0.2 300), transparent 50%)",
            backgroundSize: "200% 200%",
          }}
        />

        {/* Floating thumbnail previews */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            {
              src: industryImages.eCommerce,
              x: "72%",
              y: "10%",
              rotate: 6,
              size: "w-28 h-20",
            },
            {
              src: industryImages.Healthcare,
              x: "82%",
              y: "55%",
              rotate: -4,
              size: "w-24 h-16",
            },
            {
              src: industryImages.SaaS,
              x: "62%",
              y: "65%",
              rotate: 3,
              size: "w-20 h-14",
            },
          ].map(({ src, x, y, rotate, size }, i) => (
            <motion.div
              key={src}
              className={`absolute ${size} rounded-lg overflow-hidden opacity-20 shadow-lg`}
              style={{ left: x, top: y }}
              animate={{ y: [0, -12, 0], rotate: [rotate, rotate + 2, rotate] }}
              transition={{
                duration: 5 + i,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.8,
              }}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative pb-8">
          <BreadcrumbNav crumbs={[{ label: "Portfolio" }]} />
          <div className="mt-8 max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60 mb-3"
            >
              Proven Results
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.05,
              }}
              className="text-heading-xl text-primary-foreground mb-5 leading-tight"
            >
              Our Client Success Stories
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl"
            >
              Every number tells a story. Browse our case studies to see how
              ElevateX Media delivers measurable, lasting growth across
              industries — from eCommerce to SaaS and beyond.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-card border-b border-border py-8 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {STATS.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                variants={staggerItem}
                custom={i}
                className="flex items-center gap-3"
              >
                <motion.div
                  className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </motion.div>
                <div>
                  <p className="text-2xl font-display font-bold text-primary leading-none">
                    {value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Case Studies"
            title="Results Across Every Industry"
            subtitle="Filter by industry to find stories most relevant to your business — then imagine what we could do for you."
          />

          {/* Filter Tabs with sliding indicator */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-2 justify-center mb-12"
            role="tablist"
            aria-label="Filter by industry"
            data-ocid="portfolio-filter"
          >
            {INDUSTRY_TABS.map((tab, i) => (
              <motion.button
                key={tab}
                type="button"
                role="tab"
                aria-selected={filter === tab}
                onClick={() => setFilter(tab)}
                variants={staggerItem}
                custom={i}
                className={[
                  "relative px-5 py-2.5 rounded-full text-sm font-semibold transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring overflow-hidden",
                  filter === tab
                    ? "bg-primary text-primary-foreground shadow-sm shadow-primary/30"
                    : "bg-card border border-border text-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5",
                ].join(" ")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                data-ocid={`portfolio-filter-${tab.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {tab}
                {tab !== "All" && (
                  <span className="ml-1.5 text-xs opacity-60">
                    ({caseStudies.filter((c) => c.industry === tab).length})
                  </span>
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              data-ocid="portfolio-grid"
            >
              {filtered.map((cs, i) => (
                <EnhancedCaseStudyCard key={cs.id} caseStudy={cs} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-center py-20 text-muted-foreground"
              data-ocid="portfolio-empty"
            >
              <p className="text-lg font-medium">No case studies found</p>
              <p className="text-sm mt-1">
                Try selecting a different industry filter.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Process Proof strip */}
      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            {[
              {
                step: "01",
                title: "Deep Discovery",
                desc: "We audit your business, competitors, and market to build a data-backed strategy — not guesswork.",
              },
              {
                step: "02",
                title: "Execution Excellence",
                desc: "Our specialists execute every campaign with precision, constantly testing and refining for maximum ROI.",
              },
              {
                step: "03",
                title: "Transparent Reporting",
                desc: "Every result is tracked and reported — you always know what's working, what we're improving, and why.",
              },
            ].map(({ step, title, desc }, i) => (
              <motion.div
                key={step}
                variants={staggerItem}
                custom={i}
                className="flex flex-col items-center"
              >
                <motion.span
                  className="text-5xl font-display font-bold text-primary/20 mb-3"
                  whileInView={{ opacity: [0, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                >
                  {step}
                </motion.span>
                <h3 className="text-heading-sm text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                  {desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-primary-foreground mb-4">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
              Let's discuss your goals and build a strategy that delivers
              results like these — starting with a free, no-obligation proposal.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-bold rounded-md transition-smooth hover:opacity-90 text-base"
                data-ocid="portfolio-cta"
              >
                Get a Free Proposal <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
