import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/shared/Badge";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
  staggerContainer,
  staggerItem,
  useCountUp,
  useScrollAnimation,
} from "@/lib/animations";
import type { CaseStudy } from "@/types";
import { Link, notFound, useParams } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Quote,
  Star,
  Target,
  TrendingUp,
} from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";

// Industry → Unsplash image mapping
const industryImages: Record<string, string> = {
  eCommerce:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
  SaaS: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  Healthcare:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
  "Local Business":
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
  Finance:
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
  "Real Estate":
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
  Education:
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
  B2B: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
};

function getHeroImage(cs: CaseStudy): string {
  if (cs.image && cs.image !== "/assets/images/placeholder.svg")
    return cs.image;
  return (
    industryImages[cs.industry] ??
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
  );
}

// Parse numeric value from strings like "245%", "$2M", "3.2x"
function parseMetricValue(value: string): {
  target: number;
  prefix: string;
  suffix: string;
} {
  const cleaned = value.replace(/,/g, "");
  const prefixMatch = cleaned.match(/^([^0-9]*)/);
  const suffixMatch = cleaned.match(/([^0-9]+)$/);
  const numMatch = cleaned.match(/[\d.]+/);

  const prefix = prefixMatch?.[1] ?? "";
  const rawSuffix = suffixMatch?.[1] ?? "";
  const suffix = rawSuffix === prefix ? "" : rawSuffix;
  const num = numMatch ? Number.parseFloat(numMatch[0]) : 0;

  return { target: num, prefix, suffix };
}

function AnimatedMetric({
  value,
  metric,
  index,
}: { value: string; metric: string; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const { target, prefix, suffix } = parseMetricValue(value);
  const { displayValue } = useCountUp(
    Math.round(target),
    1800,
    suffix,
    isVisible,
  );

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="text-center p-5 rounded-xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-smooth"
      data-ocid={`result-metric-${index}`}
    >
      <div className="inline-flex w-9 h-9 items-center justify-center rounded-lg bg-primary mb-3">
        <TrendingUp className="w-4 h-4 text-primary-foreground" />
      </div>
      <p className="text-3xl font-display font-bold text-foreground mb-1 leading-none">
        {isVisible ? `${prefix}${displayValue}` : value}
      </p>
      <p className="text-xs text-muted-foreground leading-snug">{metric}</p>
    </motion.div>
  );
}

export function CaseStudyDetail() {
  const { id } = useParams({ from: "/portfolio/$id" });
  const cs = getCaseStudyBySlug(id);
  const heroRef = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  if (!cs) {
    notFound();
    return null;
  }

  const related = caseStudies
    .filter((c) => c.id !== cs.id && c.industry === cs.industry)
    .slice(0, 3);

  const services = cs.service.split(" & ");
  const heroImage = getHeroImage(cs);

  return (
    <Layout>
      {/* Hero — Parallax Banner */}
      <section
        ref={heroRef}
        className="relative overflow-hidden min-h-[560px] flex items-end"
      >
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img
            src={heroImage}
            alt={`${cs.client} case study`}
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/85 to-primary" />
        </motion.div>

        <motion.div
          className="container mx-auto px-4 lg:px-8 relative z-10 pt-12 pb-16"
          style={{ y: textY }}
        >
          <BreadcrumbNav
            crumbs={[
              { label: "Portfolio", to: "/portfolio" },
              { label: cs.client },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap gap-2 mb-5"
            >
              <Badge variant="accent" size="lg">
                {cs.industry}
              </Badge>
              {services.map((svc) => (
                <Badge key={svc} variant="muted" size="lg">
                  {svc.trim()}
                </Badge>
              ))}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.05,
              }}
              className="text-heading-xl text-primary-foreground mb-5"
            >
              {cs.client}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl"
            >
              {cs.challenge}
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Key Results Metrics — animated count-up */}
      <section className="bg-card border-b border-border py-12 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6 text-center"
          >
            Campaign Results
          </motion.p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {cs.results.map(({ metric, value }, i) => (
              <AnimatedMetric
                key={metric}
                value={value}
                metric={metric}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Challenge + Solution */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center mb-5">
                <Target className="w-5 h-5 text-destructive" />
              </div>
              <h2 className="text-heading-md text-foreground mb-4">
                The Challenge
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                {cs.challenge}
              </p>
              <div className="h-px bg-border" />
              <p className="text-sm text-muted-foreground mt-5 leading-relaxed">
                Many businesses in the{" "}
                <span className="font-semibold text-foreground">
                  {cs.industry}
                </span>{" "}
                space face these same hurdles — intense competition, unclear
                attribution, and digital channels that feel too complex to
                master without expert help.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center mb-5">
                <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <h2 className="text-heading-md text-foreground mb-4">
                Our Solution
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                {cs.solution}
              </p>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  Services Deployed
                </p>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {services.map((svc) => (
                    <motion.div key={svc} variants={staggerItem}>
                      <Badge variant="default" size="md">
                        {svc.trim()}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campaign Image — full-width */}
      <section className="bg-muted/20 py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="rounded-2xl overflow-hidden h-72 lg:h-96 bg-muted shadow-sm"
          >
            <img
              src={imgError ? "/assets/images/placeholder.svg" : heroImage}
              alt={`${cs.client} campaign results`}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          </motion.div>
        </div>
      </section>

      {/* Results Deep Dive — animated count-up */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2 text-center">
              By the Numbers
            </p>
            <h2 className="text-heading-md text-foreground mb-10 text-center">
              Results That Speak for Themselves
            </h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {cs.results.map(({ metric, value }, i) => (
                <motion.div
                  key={metric}
                  variants={staggerItem}
                  custom={i}
                  className="flex items-center gap-4 bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-sm transition-smooth"
                  whileHover={{ x: 4 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <TrendingUp className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <p className="text-2xl font-display font-bold text-foreground leading-none">
                      {value}
                    </p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {metric}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial — large quote with scale entrance */}
      {cs.testimonial && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-8 text-center">
                Client Testimonial
              </p>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-sm relative overflow-hidden"
                data-ocid="case-study-testimonial"
              >
                {/* Decorative large quote mark */}
                <div className="absolute top-4 right-6 pointer-events-none">
                  <Quote className="w-24 h-24 text-primary/5" />
                </div>

                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Quote className="w-10 h-10 text-primary/30 mb-5" />
                </motion.div>

                <motion.blockquote
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-xl font-body text-foreground leading-relaxed mb-8"
                >
                  &ldquo;{cs.testimonial.quote}&rdquo;
                </motion.blockquote>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex items-center gap-4 pt-6 border-t border-border"
                >
                  <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-bold text-base">
                      {cs.testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {cs.testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {cs.testimonial.title},{" "}
                      <span className="font-medium">{cs.client}</span>
                    </p>
                  </div>
                  <div className="ml-auto">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((k) => (
                        <motion.div
                          key={k}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.5 + k * 0.08,
                            type: "spring",
                            stiffness: 400,
                          }}
                        >
                          <Star className="w-4 h-4 text-accent fill-accent" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Case Studies */}
      {related.length > 0 && (
        <section className="py-20 bg-muted/20 border-t border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center justify-between mb-8"
            >
              <h2 className="text-heading-md text-foreground">
                More {cs.industry} Results
              </h2>
              <Link
                to="/portfolio"
                className="text-sm font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-smooth"
              >
                View all case studies <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {related.map((r, i) => (
                <motion.div
                  key={r.id}
                  variants={staggerItem}
                  custom={i}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link to="/portfolio/$id" params={{ id: r.slug }}>
                    <article className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-md transition-smooth h-full flex flex-col">
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={
                            industryImages[r.industry] ??
                            "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
                          }
                          alt={r.client}
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-3 left-3">
                          <Badge variant="accent" size="sm">
                            {r.industry}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
                          {r.service}
                        </p>
                        <h3 className="font-display font-bold text-base text-foreground mb-2">
                          {r.client}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
                          {r.challenge}
                        </p>
                        <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all duration-200">
                          View Case Study <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

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
              Want Results Like These?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-lg">
              Let's build a strategy tailored to your industry, goals, and
              budget. Get a free proposal — no strings attached.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-bold rounded-md transition-smooth hover:opacity-90 text-base"
                  data-ocid="case-study-cta"
                >
                  Get a Free Proposal <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-foreground/50 text-primary-foreground font-semibold rounded-md transition-smooth hover:bg-primary-foreground/10 text-base"
                data-ocid="case-study-back"
              >
                View All Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
