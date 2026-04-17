import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/shared/Badge";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { getServiceBySlug } from "@/data/services";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
  slideInLeft,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";
import { Link, notFound, useParams } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BarChart2,
  Building2,
  CheckCircle,
  Clock,
  FileText,
  Mail,
  MapPin,
  Megaphone,
  Mic,
  Monitor,
  MousePointer,
  Phone,
  Radio,
  RefreshCw,
  Search,
  Settings,
  Share2,
  Shield,
  ShoppingCart,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  MapPin,
  Building2,
  MousePointer,
  Share2,
  Megaphone,
  FileText,
  Mail,
  Monitor,
  RefreshCw,
  TrendingUp,
  ShoppingCart,
  Shield,
  Zap,
  Settings,
  Radio,
  Mic,
  Star,
};

// Service slug → hero image mapping
const serviceImages: Record<string, string> = {
  seo: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&q=80",
  "local-seo":
    "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&q=80",
  "technical-seo":
    "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&q=80",
  ppc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  "google-ads":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  social:
    "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80",
  "social-media":
    "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80",
  content:
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
  "content-marketing":
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
  web: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
  "web-design":
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
};

function getServiceImage(slug: string, category?: string): string {
  if (serviceImages[slug]) return serviceImages[slug];
  if (category && serviceImages[category]) return serviceImages[category];
  return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80";
}

const whyElevateX = [
  {
    icon: Award,
    title: "Certified Specialists",
    desc: "Google, Meta, and HubSpot certified experts on every campaign.",
  },
  {
    icon: BarChart2,
    title: "Data-Driven Strategy",
    desc: "Every decision backed by analytics, testing, and real performance data.",
  },
  {
    icon: Users,
    title: "Dedicated Account Team",
    desc: "You get a dedicated strategist, not a rotating help desk.",
  },
  {
    icon: Clock,
    title: "Transparent Reporting",
    desc: "Real-time dashboards so you always know exactly what's happening.",
  },
];

const proofStats = [
  { value: "500+", label: "Active Clients" },
  { value: "150%", label: "Avg Lead Increase" },
  { value: "$2B+", label: "Revenue Generated" },
  { value: "98%", label: "Client Retention Rate" },
];

export function ServiceDetail() {
  const { slug } = useParams({ from: "/services/$slug" });
  const service = getServiceBySlug(slug);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  if (!service) {
    notFound();
    return null;
  }

  const Icon = iconMap[service.icon] ?? Search;
  const related = service.relatedServices
    .map((s) => getServiceBySlug(s))
    .filter(Boolean)
    .slice(0, 3);

  const heroImage = getServiceImage(slug, service.category);

  return (
    <Layout>
      {/* Hero — Parallax Banner */}
      <section
        ref={heroRef}
        className="relative overflow-hidden min-h-[520px] flex items-end pb-0"
      >
        {/* Parallax image layer */}
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img
            src={heroImage}
            alt={`${service.title} background`}
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/90 to-primary" />
        </motion.div>

        <motion.div
          className="container mx-auto px-4 lg:px-8 relative z-10 pt-12 pb-16"
          style={{ y: textY }}
        >
          <BreadcrumbNav
            crumbs={[
              { label: "Services", to: "/services" },
              { label: service.title },
            ]}
          />
          <div className="mt-8 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-5"
              >
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-primary-foreground/15 flex items-center justify-center shrink-0 backdrop-blur-sm"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                <Badge variant="accent" size="md" className="capitalize">
                  {service.category}
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1,
                }}
                className="text-heading-xl text-primary-foreground mb-4 md:text-5xl"
              >
                {service.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-primary-foreground/80 leading-relaxed mb-8"
              >
                {service.shortDesc}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary-foreground text-primary font-bold rounded-md transition-smooth hover:opacity-90"
                  data-ocid="service-hero-cta"
                >
                  Get a Proposal <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-primary-foreground/50 text-primary-foreground font-semibold rounded-md transition-smooth hover:bg-primary-foreground/10"
                  data-ocid="service-hero-call"
                >
                  <Phone className="w-4 h-4" /> Call Our Experts
                </Link>
              </motion.div>
            </div>

            {/* Hero stats */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 gap-4 lg:shrink-0 lg:w-72"
            >
              {proofStats.map(({ value, label }) => (
                <motion.div
                  key={label}
                  variants={scaleIn}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/15"
                >
                  <div className="text-2xl font-display font-bold text-primary-foreground mb-0.5">
                    {value}
                  </div>
                  <div className="text-xs text-primary-foreground/65 leading-snug">
                    {label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What Is + Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                About This Service
              </p>
              <h2 className="text-heading-md text-foreground mb-4">
                What Is {service.title}?
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                {service.longDesc}
              </p>
              <Link
                to="/contact"
                className="button-primary inline-flex items-center gap-2"
                data-ocid="service-detail-cta"
              >
                Get a Proposal for{" "}
                {service.title.split(" ").slice(0, 2).join(" ")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Benefits — staggered list */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="bg-muted/30 rounded-2xl p-8 border border-border"
            >
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                Key Benefits
              </p>
              <h2 className="text-heading-md text-foreground mb-6">
                What You'll Achieve
              </h2>
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {service.benefits.map((benefit) => (
                  <motion.li
                    key={benefit}
                    variants={slideInLeft}
                    className="flex items-start gap-3"
                  >
                    <motion.div
                      className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5"
                      whileHover={{ scale: 1.2 }}
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-primary-foreground" />
                    </motion.div>
                    <span className="text-sm text-foreground leading-relaxed">
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-muted/25">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-12"
          >
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              How We Work
            </p>
            <h2 className="text-heading-lg text-foreground">
              Our Proven Process
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-xl mx-auto">
              A structured, transparent approach that delivers consistent
              results.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-border" />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className={`grid grid-cols-1 sm:grid-cols-2 gap-5 ${
                service.process.length <= 4
                  ? `lg:grid-cols-${service.process.length}`
                  : service.process.length === 5
                    ? "lg:grid-cols-5"
                    : "lg:grid-cols-3"
              }`}
            >
              {service.process.map(({ step, description }, idx) => (
                <motion.div
                  key={step}
                  variants={staggerItem}
                  custom={idx}
                  className="bg-card border border-border rounded-xl p-6 relative group hover:border-primary/30 hover:shadow-md transition-smooth"
                  data-ocid={`process-step-${idx + 1}`}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 12px 40px rgba(96,47,247,0.15)",
                  }}
                >
                  <motion.div
                    className="w-9 h-9 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center mb-4 relative z-10"
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    {idx + 1}
                  </motion.div>
                  <h3 className="font-display font-bold text-base text-foreground mb-2">
                    {step}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why ElevateX */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                Why Choose Us
              </p>
              <h2 className="text-heading-lg text-foreground mb-4">
                Why ElevateX Media for {service.title.split(" ")[0]}?
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                We're not a generalist agency trying to do everything. Our team
                lives and breathes digital marketing — with the specialists,
                systems, and track record to prove it.
              </p>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm transition-smooth hover:gap-3"
                data-ocid="service-view-results"
              >
                View Our Results <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {whyElevateX.map(({ icon: DiffIcon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={scaleIn}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-sm transition-smooth"
                  whileHover={{
                    y: -4,
                    boxShadow: "0 8px 30px rgba(96,47,247,0.12)",
                  }}
                >
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 12 }}
                  >
                    <DiffIcon className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-display font-bold text-sm text-foreground mb-2">
                    {title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {related.length > 0 && (
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-end justify-between mb-8"
            >
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1.5">
                  Explore More
                </p>
                <h2 className="text-heading-md text-foreground">
                  Related Services
                </h2>
              </div>
              <Link
                to="/services"
                className="text-sm font-semibold text-primary inline-flex items-center gap-1 transition-smooth hover:gap-2"
                data-ocid="service-view-all"
              >
                All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-5"
            >
              {related.map(
                (s, i) => s && <ServiceCard key={s.id} service={s} index={i} />,
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-15 pointer-events-none"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 60%, oklch(0.7 0.15 290), transparent 50%)",
            backgroundSize: "200% 200%",
          }}
        />
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge variant="accent" size="md" className="mb-4">
              Free Proposal
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Ready to Get Started with {service.title}?
            </h2>
            <p className="text-primary-foreground/80 mb-10 max-w-xl mx-auto text-lg">
              Let our experts build a custom strategy tailored to your goals and
              budget. No obligation. No fluff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-bold rounded-md transition-smooth hover:opacity-90 text-base"
                  data-ocid="service-detail-bottom-cta"
                >
                  Get a Free Proposal <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-foreground/50 text-primary-foreground font-semibold rounded-md transition-smooth hover:bg-primary-foreground/10"
                data-ocid="service-detail-back-link"
              >
                Explore Other Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
