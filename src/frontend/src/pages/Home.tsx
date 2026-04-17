import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { caseStudies } from "@/data/caseStudies";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import {
  fadeInUp,
  scaleIn,
  slideInLeft,
  slideInRight,
  staggerContainer,
  staggerItem,
  useCountUp,
  useScrollAnimation,
} from "@/lib/animations";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  LineChart,
  Quote,
  Shield,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const featuredServiceSlugs = [
  "search-engine-optimization",
  "pay-per-click-advertising",
  "social-media-management",
  "content-marketing",
  "web-design",
  "conversion-rate-optimization",
];

const featuredServices = featuredServiceSlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter(Boolean) as (typeof services)[number][];

const featuredCaseStudies = caseStudies.slice(0, 3);
const featuredTestimonials = testimonials.slice(0, 4);

const heroWords = ["Drive", "More", "Revenue", "With"];

const caseStudyImages = [
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
];

const trustLogos = [
  "Google Partner",
  "Meta Partner",
  "HubSpot Certified",
  "Shopify Experts",
  "Semrush Agency",
  "WordPress VIP",
  "Salesforce Partner",
  "Mailchimp Pro",
];

const benefits = [
  {
    icon: BarChart3,
    title: "Data-Driven Strategy",
    description:
      "Every decision we make is backed by real data. We track what matters, measure what works, and constantly optimize for better results.",
  },
  {
    icon: Users,
    title: "Full-Service Team",
    description:
      "From SEO to web design to paid ads — a complete digital marketing team under one roof, aligned to your goals.",
  },
  {
    icon: LineChart,
    title: "Transparent Reporting",
    description:
      "No black boxes. You get clear, plain-English monthly reports showing exactly what we did, what improved, and what's next.",
  },
  {
    icon: Shield,
    title: "Proven Track Record",
    description:
      "500+ clients trust us with their digital growth. Our case studies and results speak louder than any pitch deck.",
  },
];

const checklistItems = [
  "No long-term lock-in contracts",
  "Dedicated account manager for every client",
  "Real-time reporting dashboards",
  "Full-service team — no outsourcing",
];

// ─── Stat Counter ─────────────────────────────────────────────────────────────
function StatCounter({
  target,
  suffix = "",
  label,
  triggered,
}: {
  target: number;
  suffix?: string;
  label: string;
  triggered: boolean;
}) {
  const { displayValue } = useCountUp(target, 2200, suffix, triggered);
  return (
    <motion.div
      variants={staggerItem}
      className="flex flex-col items-center text-center sm:text-left sm:items-start"
    >
      <p className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground tabular-nums">
        {displayValue}
      </p>
      <p className="mt-2 text-primary-foreground/80 text-sm font-medium tracking-wide uppercase">
        {label}
      </p>
    </motion.div>
  );
}

// ─── Case Study Card ──────────────────────────────────────────────────────────
function CaseStudyCardEnhanced({
  cs,
  image,
  direction,
}: {
  cs: (typeof caseStudies)[0];
  image: string;
  direction: "left" | "right";
}) {
  return (
    <motion.div
      variants={direction === "left" ? slideInLeft : slideInRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={cs.client}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="absolute bottom-3 left-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/90 bg-primary/80 px-2.5 py-1 rounded-full backdrop-blur-sm">
            {cs.industry}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-foreground mb-1 leading-snug">
          {cs.client}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {cs.challenge}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-display font-bold text-primary">
              {cs.results[0]?.value}
            </p>
            <p className="text-xs text-muted-foreground">
              {cs.results[0]?.metric}
            </p>
          </div>
          <Link
            to="/portfolio/$id"
            params={{ id: cs.id }}
            className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all duration-200"
          >
            View Study <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Testimonial Card ─────────────────────────────────────────────────────────
function TestimonialCardAnimated({
  t,
  index,
}: {
  t: (typeof testimonials)[0];
  index: number;
}) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="bg-card border border-border rounded-2xl p-6 shadow-xs hover:shadow-lg hover:border-primary/30 hover:shadow-primary/8 transition-all duration-300 flex flex-col"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Quote className="w-6 h-6 text-primary/40 mb-3 shrink-0" />
      <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
        "{t.quote}"
      </p>
      <div className="flex items-center gap-1 mb-3">
        {(["s1", "s2", "s3", "s4", "s5"] as const).map((sid, i) => (
          <motion.div
            key={sid}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.08 + 0.3,
              type: "spring",
              stiffness: 400,
            }}
          >
            <Star
              className={`w-4 h-4 ${i < (t.rating ?? 5) ? "text-yellow-400 fill-yellow-400" : "text-muted"}`}
            />
          </motion.div>
        ))}
      </div>
      <div className="flex items-center gap-3 border-t border-border pt-3">
        <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-sm shrink-0">
          {t.author.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">
            {t.author}
          </p>
          <p className="text-xs text-muted-foreground truncate">{t.company}</p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────
export function Home() {
  const statsSection = useScrollAnimation(0.3);

  return (
    <Layout>
      {/* ─── Hero ───────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden min-h-[90vh] flex items-center"
        aria-label="Hero"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.53 0.22 300) 0%, oklch(0.09 0.035 270) 60%, oklch(0.13 0.04 270) 100%)",
        }}
      >
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.6 0.22 300), transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-[5%] w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.92 0.025 300), transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1], x: [0, -15, 0], y: [0, 15, 0] }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Grid dots overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              {/* Eyebrow badge */}
              <motion.div
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                className="inline-flex items-center gap-2 bg-primary-foreground/15 border border-primary-foreground/30 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm"
              >
                <Zap className="w-3.5 h-3.5" />
                Results-Driven Digital Marketing
              </motion.div>

              {/* Animated word-by-word headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.05] tracking-tight mb-3">
                {heroWords.map((word, i) => (
                  <motion.span
                    key={word}
                    className="inline-block mr-4"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: i * 0.1 + 0.2,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.6,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.92 0.025 300), oklch(1 0 0))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  ElevateX
                </motion.span>{" "}
                <motion.span
                  className="inline-block text-primary-foreground"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.7,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  Media
                </motion.span>
              </h1>

              {/* Subheadline */}
              <motion.p
                className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.8,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                We help ambitious businesses grow online through data-driven
                SEO, paid advertising, content marketing, and web design.
                Measurable results. Transparent reporting. Real growth.
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap gap-4 mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.9,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    to="/contact"
                    data-ocid="hero-cta-proposal"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-bold rounded-md text-base shadow-xl group overflow-hidden relative"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Get a Free Proposal
                      <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    to="/portfolio"
                    data-ocid="hero-cta-work"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-foreground/40 text-primary-foreground font-semibold rounded-md text-base hover:border-primary-foreground transition-all duration-200 group"
                  >
                    View Our Work
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Stats row */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-primary-foreground/20"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                transition={{ delayChildren: 1.0 }}
              >
                {[
                  { value: "$500M+", label: "Revenue Generated" },
                  { value: "500+", label: "Happy Clients" },
                  { value: "18+", label: "Services Offered" },
                  { value: "30+", label: "Certified Experts" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={staggerItem}
                    className="text-center sm:text-left"
                  >
                    <p className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground">
                      {stat.value}
                    </p>
                    <p className="text-sm text-primary-foreground/70 mt-1 leading-snug">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              className="hidden lg:block relative"
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/40 border border-primary-foreground/20">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                  alt="Digital marketing analytics dashboard"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-primary/30 to-transparent" />
              </div>
              {/* Floating stat badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-3 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <p className="text-xs text-muted-foreground">Monthly Revenue</p>
                <p className="text-lg font-display font-bold text-primary">
                  +143% ROI
                </p>
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-xl p-3 shadow-xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                <p className="text-xs opacity-80">Organic Traffic</p>
                <p className="text-lg font-display font-bold">↑ 380%</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Trust Logos Marquee ──────────────────────────────────────────────── */}
      <section
        className="py-10 bg-muted/40 border-y border-border overflow-hidden"
        aria-label="Partners"
      >
        <div className="relative">
          <motion.div
            className="flex gap-12 items-center whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {[...trustLogos, ...trustLogos].map((logo, i) => (
              <span
                key={`marquee-${logo}-${i < trustLogos.length ? "a" : "b"}`}
                className="text-sm font-semibold text-muted-foreground opacity-60 hover:opacity-100 transition-opacity duration-200 shrink-0 px-4"
              >
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Services Grid ────────────────────────────────────────────────────── */}
      <section
        className="py-24 bg-background relative overflow-hidden"
        aria-label="Our services"
      >
        {/* Background dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, oklch(0.53 0.22 300) 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Digital Marketing Services"
            subtitle="We offer a full suite of digital marketing services designed to grow your traffic, leads, and revenue — all measurably."
          />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="services-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {featuredServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <Link to="/services" data-ocid="services-all-cta">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-md text-base transition-smooth hover:bg-primary hover:text-primary-foreground group"
                >
                  View All 18+ Services
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Trust Band ───────────────────────────────────────────────────────── */}
      <section
        className="py-16 bg-primary relative overflow-hidden"
        aria-label="Trust metrics"
        ref={statsSection.ref as React.RefObject<HTMLElement>}
      >
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, oklch(0.6 0.22 300 / 0.3), transparent 70%)",
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <StatCounter
              target={500}
              suffix="+"
              label="Clients Served"
              triggered={statsSection.isVisible}
            />
            <StatCounter
              target={18}
              suffix="+"
              label="Digital Services"
              triggered={statsSection.isVisible}
            />
            <StatCounter
              target={30}
              suffix="+"
              label="Expert Specialists"
              triggered={statsSection.isVisible}
            />
            <StatCounter
              target={95}
              suffix="%"
              label="Client Retention"
              triggered={statsSection.isVisible}
            />
          </motion.div>
        </div>
      </section>

      {/* ─── Case Studies ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-muted/40" aria-label="Case studies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Proven Results"
            title="Real Results for Real Clients"
            subtitle="Don't take our word for it — explore our client success stories and see the numbers that matter."
          />

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="case-studies-grid"
          >
            {featuredCaseStudies.map((cs, i) => (
              <CaseStudyCardEnhanced
                key={cs.id}
                cs={cs}
                image={caseStudyImages[i] ?? caseStudyImages[0]}
                direction={i % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <Link to="/portfolio" data-ocid="case-studies-all-cta">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-md text-base transition-smooth hover:bg-primary hover:text-primary-foreground group"
                >
                  View All Case Studies
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Why Choose Us ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-background" aria-label="Why choose us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                Why ElevateX
              </p>
              <h2 className="text-heading-lg text-foreground mb-6">
                Why Choose ElevateX Media?
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                There's no shortage of digital agencies. What sets us apart is
                our obsession with measurable outcomes, our deep expertise
                across every channel, and our commitment to treating your budget
                like it's our own.
              </p>
              <ul className="space-y-3 mb-10">
                {checklistItems.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block"
              >
                <Link to="/about" data-ocid="why-us-about-cta">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md text-base transition-smooth hover:opacity-90 group"
                  >
                    Learn About Our Team
                    <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — benefit cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    variants={staggerItem}
                    whileHover={{
                      y: -4,
                      boxShadow: "0 12px 32px rgba(96,47,247,0.15)",
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    }}
                    className="bg-card rounded-xl border border-border p-6 shadow-xs cursor-default transition-colors duration-300 hover:border-primary/40"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-muted/30" aria-label="Client testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Client Reviews"
            title="What Our Clients Say"
            subtitle="We measure our success by the results we deliver and the relationships we build."
          />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-ocid="testimonials-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {featuredTestimonials.map((t, i) => (
              <TestimonialCardAnimated key={t.id} t={t} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Bottom CTA ───────────────────────────────────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden"
        aria-label="Call to action"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.53 0.22 300), oklch(0.09 0.035 270))",
        }}
      >
        {/* Animated gradient sweep */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)",
          }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Decorative circles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary-foreground/5"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-32 -left-20 w-[32rem] h-[32rem] rounded-full bg-accent/10"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 3,
            }}
          />
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/80 mb-4"
          >
            Let's Work Together
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground mb-6 leading-tight"
          >
            Ready to Grow Your Business?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Join 500+ businesses that trust ElevateX Media to grow their online
            presence. Get your free proposal — no obligation, no pressure. Just
            a clear strategy for your growth.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative"
            >
              <motion.div
                className="absolute -inset-1 rounded-lg bg-primary-foreground/20 blur-sm"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <Link to="/contact" data-ocid="bottom-cta-proposal">
                <button
                  type="button"
                  className="relative inline-flex items-center gap-2 px-10 py-5 bg-primary-foreground text-primary font-bold rounded-md text-lg shadow-xl group"
                >
                  Get My Free Proposal
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link to="/services" data-ocid="bottom-cta-services">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-10 py-5 border-2 border-primary-foreground/40 text-primary-foreground font-semibold rounded-md text-lg hover:border-primary-foreground transition-all duration-200"
                >
                  Explore Services
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            {[
              "No long-term contracts",
              "Free initial consultation",
              "Results-focused guarantee",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-primary-foreground/70 text-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-primary-foreground/90 shrink-0" />
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
}
