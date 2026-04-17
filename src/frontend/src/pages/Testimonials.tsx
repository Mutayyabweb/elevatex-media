import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/shared/Badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Play, Quote, Star } from "lucide-react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

type ServiceFilter =
  | "All"
  | "SEO"
  | "PPC"
  | "Web Design"
  | "Content"
  | "Social";

const avatarImages = [
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  "https://images.unsplash.com/photo-1494790108755-2616b9e0b38a?w=200&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
];

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  service: ServiceFilter;
  rating: number;
  quote: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "David Hartley",
    role: "VP of Marketing",
    company: "Nexus Commerce",
    service: "SEO",
    rating: 5,
    quote:
      "ElevateX Media transformed our organic presence completely. We went from page 3 to the top 3 positions for our most competitive keywords within 6 months. The ROI has been remarkable — organic traffic is now our #1 acquisition channel.",
    initials: "DH",
  },
  {
    id: "t2",
    name: "Sarah Mitchell",
    role: "CEO",
    company: "Brightwave Tech",
    service: "PPC",
    rating: 5,
    quote:
      "Our Google Ads were burning cash before we hired ElevateX. They rebuilt everything from the ground up, cut our CPA by 40%, and tripled our conversion rate. I wish we'd found them sooner.",
    initials: "SM",
  },
  {
    id: "t3",
    name: "James Okafor",
    role: "Director of Growth",
    company: "Meridian Health",
    service: "Content",
    rating: 5,
    quote:
      "The content strategy they built for us is world-class. Every article ranks, every email converts. Our blog now drives 35% of our qualified leads — content that actually works.",
    initials: "JO",
  },
  {
    id: "t4",
    name: "Priya Nair",
    role: "Founder",
    company: "Bloom Beauty Co.",
    service: "Social",
    rating: 5,
    quote:
      "We went from 2,000 to 45,000 Instagram followers in 8 months. More importantly, that audience actually buys. ElevateX built a community around our brand that we're proud of.",
    initials: "PN",
  },
  {
    id: "t5",
    name: "Marcus Chen",
    role: "CMO",
    company: "Atlas Logistics",
    service: "Web Design",
    rating: 5,
    quote:
      "Our new website is stunning and it performs. Bounce rate dropped 28%, session duration is up 60%, and the leads coming through the contact form have never been higher quality.",
    initials: "MC",
  },
  {
    id: "t6",
    name: "Rebecca Torres",
    role: "Marketing Manager",
    company: "Vantage Capital",
    service: "SEO",
    rating: 5,
    quote:
      "In a highly competitive financial services market, ranking organically felt impossible. ElevateX proved otherwise — 180% increase in organic leads year-over-year.",
    initials: "RT",
  },
  {
    id: "t7",
    name: "Liam O'Brien",
    role: "E-Commerce Director",
    company: "StoreFront Pro",
    service: "PPC",
    rating: 5,
    quote:
      "Managing $800K/month in ad spend is not easy, but the ElevateX PPC team handles it with precision. Our ROAS improved by 2.3x in the first quarter working together.",
    initials: "LO",
  },
  {
    id: "t8",
    name: "Fatima Al-Hassan",
    role: "Brand Director",
    company: "Zara Home MENA",
    service: "Social",
    rating: 5,
    quote:
      "They understand our brand's voice at a deep level. Every post, every campaign feels authentic — yet the numbers speak for themselves. 220% improvement in social-driven revenue.",
    initials: "FA",
  },
  {
    id: "t9",
    name: "Noah Williams",
    role: "Co-Founder",
    company: "Pulse Analytics",
    service: "Web Design",
    rating: 5,
    quote:
      "From wireframe to launch in 6 weeks. The design is minimal and sharp, load times are under 1.5 seconds, and our trial sign-up rate improved by 47% on the new site.",
    initials: "NW",
  },
  {
    id: "t10",
    name: "Amara Diallo",
    role: "Head of Digital",
    company: "EduPath Global",
    service: "Content",
    rating: 5,
    quote:
      "ElevateX produces content that earns backlinks naturally. In 12 months we've accumulated 300+ referring domains from their content alone. Organic authority has skyrocketed.",
    initials: "AD",
  },
  {
    id: "t11",
    name: "Carlos Reyes",
    role: "Owner",
    company: "Precision Auto Group",
    service: "SEO",
    rating: 5,
    quote:
      "Local SEO was our blind spot. After 4 months with ElevateX, we're ranking #1 for 'car dealership Rawalpindi' and the surrounding area. Foot traffic up 35% from organic search.",
    initials: "CR",
  },
  {
    id: "t12",
    name: "Sophie Bennett",
    role: "Marketing Lead",
    company: "Horizon SaaS",
    service: "PPC",
    rating: 4,
    quote:
      "The team's analytical rigor is impressive. They spotted audience overlap issues we'd lived with for two years, restructured our Meta campaigns, and dropped our CPL by 55% in 60 days.",
    initials: "SB",
  },
];

const videoTestimonials = [
  {
    id: "v1",
    name: "Tom Garrett",
    company: "GrowthForce B2B",
    quote:
      "Watch how ElevateX helped us 4x our inbound pipeline in under a year.",
    bg: "from-primary/30 to-primary/10",
  },
  {
    id: "v2",
    name: "Nina Patel",
    company: "Elevate eCommerce",
    quote:
      "From $50K/month to $400K/month in revenue — our growth story with ElevateX.",
    bg: "from-accent/30 to-accent/10",
  },
  {
    id: "v3",
    name: "Derek Lam",
    company: "Pacific Real Estate",
    quote:
      "How a full digital transformation turned our agency into a market leader.",
    bg: "from-muted to-background",
  },
];

const filterTabs: ServiceFilter[] = [
  "All",
  "SEO",
  "PPC",
  "Web Design",
  "Content",
  "Social",
];

const stats = [
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
  { value: 4.9, suffix: "/5", label: "Average Rating" },
  { value: 200, suffix: "+", label: "Case Studies" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 1800;
    const step = (value / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else setDisplay(Math.floor(start * 10) / 10);
    }, 16);
    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <motion.div
      ref={ref}
      onViewportEnter={() => setStarted(true)}
      viewport={{ once: true }}
    >
      <span className="text-4xl lg:text-5xl font-display font-bold text-primary-foreground">
        {display}
        {suffix}
      </span>
    </motion.div>
  );
}

function AnimatedStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: i * 0.07,
            type: "spring",
            stiffness: 200,
          }}
        >
          <Star
            className={`w-4 h-4 ${i <= rating ? "fill-accent text-accent" : "text-muted-foreground"}`}
          />
        </motion.div>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [active, setActive] = useState<ServiceFilter>("All");
  const filtered =
    active === "All"
      ? testimonials
      : testimonials.filter((t) => t.service === active);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden min-h-[420px] flex items-center">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.7_0.22_300/0.3),transparent_60%)]" />
          {([0, 1, 2, 3] as const).map((i) => (
            <motion.div
              key={`quote-${i}`}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.08, 0.16, 0.08],
                rotate: [0, 10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 5 + i * 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.8,
              }}
              className="absolute text-white/20 font-display font-bold select-none"
              style={{
                fontSize: "8rem",
                top: `${10 + i * 20}%`,
                right: `${5 + i * 10}%`,
              }}
            >
              "
            </motion.div>
          ))}
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="accent" size="lg" className="mb-6">
                Client Stories
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-5"
            >
              Real Results, Real Clients
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-primary-foreground/80 leading-relaxed"
            >
              Don't take our word for it — hear directly from the businesses
              we've helped grow with digital marketing that actually moves the
              needle.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-primary-foreground/70 text-sm mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Video Stories"
            title="Hear It In Their Own Words"
            subtitle="Watch clients describe their experience and results working with ElevateX Media."
          />
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {videoTestimonials.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`relative rounded-xl overflow-hidden aspect-video cursor-pointer group bg-gradient-to-br ${v.bg}`}
                data-ocid={`video-testimonial-${v.id}`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 bg-primary/80 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-primary/30 backdrop-blur-sm"
                  >
                    <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground ml-1" />
                  </motion.div>
                  <p className="text-foreground font-semibold text-sm text-center leading-snug mb-1">
                    {v.name}
                  </p>
                  <p className="text-muted-foreground text-xs text-center">
                    {v.company}
                  </p>
                  <p className="text-muted-foreground text-xs text-center mt-3 leading-relaxed">
                    {v.quote}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="flex flex-wrap gap-2 mb-10"
            data-ocid="testimonials-filter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {filterTabs.map((tab) => (
              <motion.button
                key={tab}
                type="button"
                onClick={() => setActive(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${active === tab ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/30" : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"}`}
                data-ocid={`testimonials-tab-${tab.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {tab}
              </motion.button>
            ))}
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 20px 40px oklch(0.53 0.22 300 / 0.15)",
                }}
                className="bg-card border border-border rounded-xl p-6 flex flex-col transition-all duration-300 cursor-default"
                data-ocid={`testimonial-card-${t.id}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <AnimatedStars rating={t.rating} />
                  <Quote className="w-8 h-8 text-primary/20 flex-shrink-0" />
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-5 flex-1 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <img
                    src={
                      avatarImages[
                        (Number.parseInt(t.id.replace("t", "")) - 1) %
                          avatarImages.length
                      ]
                    }
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0 border-2 border-primary/30"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-foreground text-sm truncate">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {t.role} · {t.company}
                    </p>
                  </div>
                  <span className="ml-auto flex-shrink-0 px-2 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {t.service}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-display font-bold text-primary-foreground mb-4"
            >
              Ready to Become Our Next Success Story?
            </motion.h2>
            <p className="text-primary-foreground/80 text-base mb-8 leading-relaxed">
              Join 500+ businesses that trust ElevateX Media to grow their
              digital presence and revenue.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-md font-bold text-base hover:opacity-90 transition-opacity"
                data-ocid="testimonials-cta"
              >
                Start Your Growth Journey <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
