import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/shared/Badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  Heart,
  MapPin,
  Monitor,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

interface Benefit {
  icon: React.ElementType;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: Shield,
    title: "Health Insurance",
    description:
      "Comprehensive health coverage for you and your immediate family, including dental and vision.",
  },
  {
    icon: Building2,
    title: "401(k) Equivalent",
    description:
      "Retirement savings plan with employer matching up to 5% — your future matters to us.",
  },
  {
    icon: Monitor,
    title: "Remote Flexibility",
    description:
      "Work from home up to 3 days a week. We trust our team to deliver results wherever they work best.",
  },
  {
    icon: Calendar,
    title: "Generous PTO",
    description:
      "25 days of paid time off per year plus public holidays — because rest makes great work possible.",
  },
  {
    icon: BookOpen,
    title: "Learning & Development",
    description:
      "Annual PKR 50,000 learning budget for courses, certifications, conferences, and books.",
  },
  {
    icon: Heart,
    title: "Team Events",
    description:
      "Quarterly team retreats, monthly team dinners, and regular celebrations for wins big and small.",
  },
];

interface JobListing {
  id: string;
  title: string;
  department: string;
  level: "Junior" | "Mid" | "Senior";
  location: "Remote" | "Hybrid" | "On-site";
  description: string;
}

const jobs: JobListing[] = [
  {
    id: "seo-specialist",
    title: "SEO Specialist",
    department: "SEO",
    level: "Mid",
    location: "Hybrid",
    description:
      "Own on-page optimization, technical audits, and keyword strategy for a portfolio of 5–8 client accounts. You'll collaborate with content and web teams to execute campaigns that move rankings and revenue.",
  },
  {
    id: "content-writer",
    title: "Content Writer",
    department: "Content",
    level: "Mid",
    location: "Remote",
    description:
      "Produce high-quality SEO content, thought leadership articles, case studies, and email campaigns for clients across multiple industries. Must have strong research skills and a knack for matching brand voice.",
  },
  {
    id: "web-developer",
    title: "Web Developer",
    department: "Engineering",
    level: "Senior",
    location: "Hybrid",
    description:
      "Build conversion-optimized landing pages, client websites, and internal tools using React, Next.js, and WordPress. Core Web Vitals and performance optimization are core to this role.",
  },
  {
    id: "ppc-manager",
    title: "PPC Manager",
    department: "Paid Advertising",
    level: "Senior",
    location: "Hybrid",
    description:
      "Manage Google Ads, Meta Ads, and Bing campaigns with a combined spend of $500K+/month. You'll own strategy, bidding, audience segmentation, and weekly optimization across a portfolio of growth-stage clients.",
  },
  {
    id: "account-manager",
    title: "Account Manager",
    department: "Client Success",
    level: "Mid",
    location: "Hybrid",
    description:
      "Be the primary point of contact for 10–15 client accounts. Your job is to own communication, report on results, identify upsell opportunities, and ensure clients renew year after year.",
  },
  {
    id: "social-media-strategist",
    title: "Social Media Strategist",
    department: "Social Media",
    level: "Mid",
    location: "Remote",
    description:
      "Develop and execute organic social strategies across Instagram, LinkedIn, TikTok, and X for a diverse client base. You'll manage content calendars, community engagement, and monthly performance reporting.",
  },
  {
    id: "ux-designer",
    title: "UX Designer",
    department: "Design",
    level: "Mid",
    location: "Hybrid",
    description:
      "Design user experiences for client websites and landing pages with a focus on conversion. You'll conduct user research, create wireframes and prototypes, and collaborate closely with developers and strategists.",
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    department: "Analytics",
    level: "Junior",
    location: "Remote",
    description:
      "Build and maintain dashboards, run attribution analyses, and surface insights that shape client strategy. You'll work across Google Analytics, Looker Studio, and custom data pipelines to make our data-driven approach real.",
  },
];

const levelColors: Record<string, string> = {
  Junior: "bg-primary/70 text-white",
  Mid: "bg-primary text-white",
  Senior: "bg-foreground text-white",
};
const locationColors: Record<string, string> = {
  Remote: "bg-primary text-white",
  Hybrid: "bg-primary/80 text-white",
  "On-site": "bg-muted text-foreground",
};

const cultureHighlights = [
  {
    icon: Users,
    title: "30+ Talented People",
    body: "A close-knit team of specialists who love what they do and push each other to be better.",
  },
  {
    icon: Zap,
    title: "Fast Growth Culture",
    body: "We move quickly, trust our people, and create space for high performers to rise.",
  },
  {
    icon: Briefcase,
    title: "Real Ownership",
    body: "You own your work. Every team member has meaningful responsibility from day one.",
  },
];

export function Careers() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[480px] flex items-end">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80"
            alt="Team working together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.7_0.22_300/0.3),transparent_60%)]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="accent" size="lg" className="mb-6">
                Join Our Team
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-5"
            >
              Build Something That Matters
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-primary-foreground/80 leading-relaxed mb-8"
            >
              At ElevateX Media, you won't just execute campaigns — you'll own
              strategies, grow your expertise, and directly impact the success
              of businesses that are counting on you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <a
                href="#open-positions"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
                data-ocid="careers-hero-cta"
              >
                See Open Positions <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {cultureHighlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  whileHover={{ y: -4 }}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: i * 0.15 + 0.2,
                    }}
                    className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4"
                  >
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <h3 className="text-heading-sm text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              eyebrow="Why ElevateX"
              title="Benefits That Actually Matter"
              subtitle="We take care of our team so they can do their best work — and build a career they're proud of."
            />
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300"
                  data-ocid="careers-benefit"
                >
                  <motion.div
                    whileInView={{ scale: [0.7, 1.1, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center mb-4"
                  >
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-semibold text-foreground mb-1.5">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="open-positions" className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              eyebrow="Open Positions"
              title="We're Hiring Across Every Discipline"
              subtitle="See something that fits? Apply directly — we review every application personally."
            />
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-4">
            {jobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ x: 4 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
                data-ocid={`job-listing-${job.id}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${levelColors[job.level]}`}
                      >
                        {job.level}
                      </span>
                      <span className="text-xs text-muted-foreground font-medium">
                        {job.department}
                      </span>
                    </div>
                    <h3 className="text-heading-sm text-foreground mb-1.5 group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {job.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${locationColors[job.location]}`}
                      >
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      href={`mailto:info@elevatexmedia.com?subject=Application: ${job.title}&body=Hello,%0A%0AI am applying for the ${job.title} position.%0A%0A[Please attach your CV and a brief cover note]`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:opacity-90 transition-opacity"
                      data-ocid={`apply-${job.id}`}
                    >
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-muted-foreground text-sm mb-4">
              Don't see your role? We're always looking for exceptional talent.
            </p>
            <a
              href="mailto:info@elevatexmedia.com?subject=General Application - ElevateX Media&body=Hello,%0A%0AI would love to explore opportunities at ElevateX Media.%0A%0A[Please attach your CV and a brief introduction]"
              className="inline-flex items-center gap-2 button-secondary text-sm"
              data-ocid="careers-general-apply"
            >
              Send a General Application
            </a>
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
              Questions About Working Here?
            </motion.h2>
            <p className="text-primary-foreground/80 text-base mb-8 leading-relaxed">
              Reach out to our team directly — we'd love to tell you more about
              what it's like to work at ElevateX Media.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a
                href="mailto:info@elevatexmedia.com?subject=Careers Inquiry"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-md font-bold text-base hover:opacity-90 transition-opacity"
                data-ocid="careers-contact"
              >
                Email Our Team <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
