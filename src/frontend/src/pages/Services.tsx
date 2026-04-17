import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/shared/Badge";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { services, servicesByCategory } from "@/data/services";
import {
  fadeInLeft,
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Globe,
  Search,
  Share2,
  TrendingUp,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const ALL_KEY = "all";

const categoryTabs = [
  { key: ALL_KEY, label: "All Services", icon: Globe },
  { key: "seo", label: "SEO & Search", icon: Search },
  { key: "social", label: "Social Media", icon: Share2 },
  { key: "content", label: "Content", icon: BarChart3 },
  { key: "web", label: "Web & Design", icon: Zap },
  { key: "optimization", label: "Optimization", icon: TrendingUp },
  { key: "ppc", label: "Paid Ads", icon: BarChart3 },
  { key: "advertising", label: "Programmatic", icon: Globe },
] as const;

const categoryMeta: Record<string, { label: string; desc: string }> = {
  seo: {
    label: "SEO & Search",
    desc: "Dominate organic search rankings and drive qualified traffic",
  },
  ppc: {
    label: "Paid Advertising",
    desc: "Immediate results with expertly managed paid campaigns",
  },
  social: {
    label: "Social Media",
    desc: "Build community and convert followers into customers",
  },
  content: {
    label: "Content Marketing",
    desc: "Authority-building content that ranks and converts",
  },
  web: {
    label: "Web & Design",
    desc: "Beautiful, high-converting digital experiences",
  },
  optimization: {
    label: "Optimization",
    desc: "Maximize performance, conversions, and ROI",
  },
  advertising: {
    label: "Programmatic",
    desc: "Reach your audience at scale with AI-driven advertising",
  },
};

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "150%", label: "Avg. Lead Increase" },
  { value: "$2B+", label: "Revenue Generated" },
  { value: "18", label: "Specialized Services" },
];

type CategoryKey =
  | "all"
  | "seo"
  | "ppc"
  | "social"
  | "content"
  | "web"
  | "optimization"
  | "advertising";

// Floating particle component
function Particle({
  x,
  y,
  size,
  delay,
}: { x: string; y: string; size: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-primary-foreground/10 pointer-events-none"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
      transition={{
        duration: 4 + delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

const particles = [
  { id: "p1", x: "5%", y: "20%", size: 80, delay: 0 },
  { id: "p2", x: "15%", y: "70%", size: 50, delay: 1 },
  { id: "p3", x: "75%", y: "15%", size: 100, delay: 0.5 },
  { id: "p4", x: "85%", y: "60%", size: 60, delay: 1.5 },
  { id: "p5", x: "60%", y: "80%", size: 40, delay: 2 },
  { id: "p6", x: "40%", y: "30%", size: 30, delay: 0.8 },
];

export function Services() {
  const [activeTab, setActiveTab] = useState<CategoryKey>(ALL_KEY);

  const filteredServices =
    activeTab === ALL_KEY
      ? services
      : (servicesByCategory[activeTab as keyof typeof servicesByCategory] ??
        []);

  const groupedByCategory =
    activeTab === ALL_KEY
      ? (
          Object.entries(servicesByCategory) as [
            string,
            (typeof services)[number][],
          ][]
        ).filter(([, svcs]) => svcs.length > 0)
      : null;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary py-24 overflow-hidden min-h-[420px] flex items-center">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80"
            alt="Digital services background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80" />
        </div>

        {/* Particles */}
        {particles.map((p) => (
          <Particle key={p.id} {...p} />
        ))}

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <BreadcrumbNav crumbs={[{ label: "Services" }]} />

          <div className="mt-8 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="accent" size="lg" className="mb-4">
                18 Specialized Services
              </Badge>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1,
                }}
                className="text-heading-xl text-primary-foreground mb-5 md:text-5xl"
              >
                Our Digital Marketing
                <br />
                <span className="opacity-80">Services</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl"
            >
              Leverage our expert strategies and data-powered campaigns to
              increase leads, revenue, and market share. Every service is built
              to deliver measurable ROI.
            </motion.p>
          </div>

          {/* Stats bar */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map(({ value, label }) => (
              <motion.div
                key={label}
                variants={staggerItem}
                className="text-primary-foreground"
              >
                <div className="text-3xl font-display font-bold mb-1">
                  {value}
                </div>
                <div className="text-sm text-primary-foreground/70">
                  {label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category filter tabs */}
      <section className="bg-card border-b border-border sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none"
            role="tablist"
            aria-label="Filter services by category"
          >
            {categoryTabs.map(({ key, label, icon: Icon }, i) => (
              <motion.button
                key={key}
                type="button"
                role="tab"
                aria-selected={activeTab === key}
                onClick={() => setActiveTab(key as CategoryKey)}
                data-ocid={`services-tab-${key}`}
                variants={staggerItem}
                custom={i}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-smooth shrink-0 relative ${
                  activeTab === key
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
                {activeTab === key && (
                  <motion.span
                    layoutId="tab-indicator"
                    className="absolute inset-0 rounded-full bg-primary -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {groupedByCategory ? (
            <>
              {groupedByCategory.map(([catKey, catServices], idx) => {
                const meta = categoryMeta[catKey];
                if (!meta) return null;
                return (
                  <section
                    key={catKey}
                    className={`py-16 ${idx % 2 === 0 ? "bg-background" : "bg-muted/20"} border-b border-border last:border-0`}
                  >
                    <div className="container mx-auto px-4 lg:px-8">
                      <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4"
                      >
                        <div>
                          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1.5">
                            {meta.label}
                          </p>
                          <h2 className="text-heading-md text-foreground">
                            {meta.desc}
                          </h2>
                        </div>
                        <span className="shrink-0 text-sm text-muted-foreground font-medium">
                          {catServices.length} service
                          {catServices.length !== 1 ? "s" : ""}
                        </span>
                      </motion.div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {catServices.map((service, i) => (
                          <ServiceCard
                            key={service.id}
                            service={service}
                            index={i}
                          />
                        ))}
                      </div>
                    </div>
                  </section>
                );
              })}
            </>
          ) : (
            <section className="py-16 bg-background">
              <div className="container mx-auto px-4 lg:px-8">
                {activeTab !== ALL_KEY && categoryMeta[activeTab] && (
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="mb-10"
                  >
                    <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1.5">
                      {categoryMeta[activeTab].label}
                    </p>
                    <h2 className="text-heading-md text-foreground">
                      {categoryMeta[activeTab].desc}
                    </h2>
                  </motion.div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {filteredServices.map((service, i) => (
                    <ServiceCard key={service.id} service={service} index={i} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </motion.div>
      </AnimatePresence>

      {/* CTA banner */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20 pointer-events-none"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 50%, oklch(0.7 0.15 290), transparent 60%), radial-gradient(ellipse at 70% 50%, oklch(0.6 0.2 260), transparent 60%)",
            backgroundSize: "200% 200%",
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <Badge variant="accent" size="md" className="mb-4">
              Free Strategy Session
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Not Sure Which Services You Need?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-lg">
              Our strategists will analyze your business and recommend the right
              mix of services to achieve your goals — at no cost.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-bold rounded-md transition-smooth hover:opacity-90 text-base"
                data-ocid="services-cta-proposal"
              >
                Get a Free Strategy Consultation{" "}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Full service quick-links */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Quick Navigation"
            title="All 18 Services at a Glance"
            subtitle="Browse the full list of digital marketing services we offer."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={staggerItem}>
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/40 hover:bg-primary/5 transition-smooth group"
                  data-ocid={`service-list-${service.id}`}
                >
                  <ArrowRight className="w-4 h-4 text-primary shrink-0 transition-smooth group-hover:translate-x-0.5" />
                  <span className="text-sm font-medium text-foreground">
                    {service.title}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
