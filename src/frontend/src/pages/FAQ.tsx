import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/shared/Badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Link } from "@tanstack/react-router";
import { ChevronDown, HelpCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQGroup {
  topic: string;
  description: string;
  items: FAQItem[];
}

const faqGroups: FAQGroup[] = [
  {
    topic: "Pricing & Plans",
    description: "Understand how our pricing works and what's included.",
    items: [
      {
        id: "p1",
        question: "How is your pricing structured?",
        answer:
          "Our pricing is based on service scope, campaign complexity, and your business goals. We offer three main tiers — Starter (~$1,500/mo), Growth (~$3,000/mo), and Enterprise (custom quote). Each tier includes dedicated account management, monthly reporting, and strategy sessions. We do not lock clients into long-term contracts by default; most plans operate on a 3-month minimum with month-to-month flexibility after that.",
      },
      {
        id: "p2",
        question: "Are there any setup or onboarding fees?",
        answer:
          "Starter and Growth plans include a one-time onboarding fee that covers strategy development, account audits, and campaign architecture. Enterprise engagements bundle onboarding into the first month's retainer. We're transparent about all costs upfront — there are no surprise charges.",
      },
      {
        id: "p3",
        question: "Can I upgrade or downgrade my plan?",
        answer:
          "Yes. You can upgrade your plan at any billing cycle. Downgrading is possible with 30 days' notice, though we'll review your active campaigns to ensure continuity. We always recommend discussing your goals before making changes so we can advise on the right service level.",
      },
      {
        id: "p4",
        question: "Do you require long-term contracts?",
        answer:
          "We ask for a 3-month minimum engagement so we have enough time to build and optimize campaigns effectively — SEO and content especially take time to show results. After that, all plans roll month-to-month with 30 days' written notice to cancel.",
      },
    ],
  },
  {
    topic: "Our Services",
    description: "Learn what we offer, how services work, and what to expect.",
    items: [
      {
        id: "s1",
        question: "What digital marketing services do you offer?",
        answer:
          "We offer a comprehensive suite: SEO (Technical, Local, eCommerce, Enterprise), PPC (Google Ads, Bing Ads, Shopping, Programmatic), Social Media Marketing (organic + paid), Content Marketing, Email Marketing, Web Design & Development, Conversion Rate Optimization (CRO), Reputation Management, Video Marketing, Influencer Marketing, and more. Visit our Services page for the full list.",
      },
      {
        id: "s2",
        question: "Do you specialize in any specific industries?",
        answer:
          "We have deep experience across B2B, eCommerce, healthcare, real estate, professional services, and SaaS. Our team adapts strategies to the competitive dynamics of your specific market. During onboarding, we conduct a full industry and competitor analysis before recommending channels and tactics.",
      },
      {
        id: "s3",
        question:
          "Can I hire you for a one-time project like a website redesign?",
        answer:
          "Yes. We offer project-based engagements for web design, website audits, content production, and paid campaign setup. Project pricing is scoped during a discovery call. Many project clients transition into monthly retainers after seeing initial results.",
      },
      {
        id: "s4",
        question: "Will you manage my Google and Meta ad accounts directly?",
        answer:
          "Yes. We manage PPC campaigns directly within your ad accounts (or create new ones under your ownership). We handle strategy, copy, creative, bidding, audience targeting, and continuous optimization. You retain full ownership of accounts at all times.",
      },
    ],
  },
  {
    topic: "Process & Timeline",
    description: "What happens after you sign on and how long results take.",
    items: [
      {
        id: "t1",
        question: "What does the onboarding process look like?",
        answer:
          "After signing, we begin a structured onboarding: (1) Discovery call with your team to align on goals, KPIs, and audience, (2) Full audit of existing channels and assets, (3) Competitive analysis and keyword/audience research, (4) Strategy document reviewed and approved by you, (5) Campaign build and launch. Most clients are live within 2–3 weeks of signing.",
      },
      {
        id: "t2",
        question: "How long does it take to see results from SEO?",
        answer:
          "SEO is a long-term investment. Most clients begin to see meaningful ranking improvements and organic traffic growth between 3–6 months. Competitive industries may take longer. We set realistic milestones during onboarding and report progress monthly with full transparency on what's working and what we're adjusting.",
      },
      {
        id: "t3",
        question: "How quickly can PPC campaigns generate leads?",
        answer:
          "Paid search and social campaigns can begin generating traffic within days of launch. However, we typically run a 2–4 week learning period where we test audiences, ad copy, and bidding strategies before performance stabilizes. Month 2 and beyond is usually when ROI becomes consistent and scalable.",
      },
      {
        id: "t4",
        question: "Who will be managing my account day-to-day?",
        answer:
          "Every client is assigned a dedicated Account Manager who is your primary point of contact. Behind them is a team of channel specialists (SEO, PPC, Content, Design) executing the strategy. You'll have your Account Manager's direct contact and can expect responses within one business day.",
      },
    ],
  },
  {
    topic: "Support & Reporting",
    description:
      "How we communicate, what reports look like, and how we handle issues.",
    items: [
      {
        id: "r1",
        question: "What does monthly reporting include?",
        answer:
          "Monthly reports include: channel-by-channel performance vs. KPIs, traffic and ranking data, ad spend and ROI breakdown, conversion tracking analysis, a summary of work completed, and a roadmap for the next month. Reports are delivered via a live dashboard you can access anytime, plus a written narrative from your Account Manager.",
      },
      {
        id: "r2",
        question: "How often will we have strategy calls?",
        answer:
          "Starter plans include a monthly strategy call. Growth plans include bi-weekly check-ins. Enterprise clients have weekly or as-needed calls plus quarterly business reviews. Ad hoc calls can always be scheduled if something urgent comes up — we're never out of reach.",
      },
      {
        id: "r3",
        question: "What happens if a campaign underperforms?",
        answer:
          "We take underperformance seriously. If a campaign is not hitting benchmarks, we proactively flag it in your report, present a diagnosis, and recommend adjustments. We never hide bad news. Our culture is built on radical transparency — you'll always know exactly what's happening and why.",
      },
      {
        id: "r4",
        question: "Do I own the work produced — content, ads, and website?",
        answer:
          "Absolutely. All content, creative assets, ad accounts, analytics access, and website code belong to you. We never hold your assets hostage. If you ever leave, we conduct a full handover with documentation so your next team can hit the ground running.",
      },
    ],
  },
];

function FAQAccordionItem({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border border-border rounded-xl overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-card hover:bg-muted/30 transition-colors duration-200"
        aria-expanded={open}
        data-ocid={`faq-item-${item.id}`}
      >
        <span className="font-semibold text-foreground text-sm leading-snug pr-2">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-3 bg-card border-t border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden min-h-[380px] flex items-center">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.7_0.22_300/0.3),transparent_60%)]" />
          {(
            ["faq-deco-1", "faq-deco-2", "faq-deco-3", "faq-deco-4"] as const
          ).map((dKey, i) => (
            <motion.div
              key={dKey}
              animate={{
                y: [0, -20 + i * 5, 0],
                opacity: [0.06, 0.12, 0.06],
                rotate: [0, 15 - i * 5, 0],
              }}
              transition={{
                duration: 5 + i * 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.7,
              }}
              className="absolute text-white font-display font-black select-none"
              style={{
                fontSize: "7rem",
                top: `${10 + i * 18}%`,
                right: `${5 + i * 8}%`,
              }}
            >
              ?
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
                FAQ
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-5"
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-primary-foreground/80 leading-relaxed"
            >
              Everything you need to know about working with ElevateX Media —
              from pricing and process to reporting and results.
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQ Groups */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-16">
            {faqGroups.map((group) => (
              <motion.div
                key={group.topic}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                data-ocid={`faq-group-${group.topic.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
                  >
                    <HelpCircle className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h2 className="text-heading-md text-foreground mb-1">
                      {group.topic}
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      {group.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-3 pl-14">
                  {group.items.map((item, i) => (
                    <FAQAccordionItem key={item.id} item={item} index={i} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 bg-primary overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.7_0.22_300/0.25),transparent_60%)]" />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                eyebrow="Still Have Questions?"
                title="We're Happy to Help"
                subtitle="Can't find the answer you're looking for? Reach out directly and our team will get back to you within one business day."
              />
            </motion.div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/contact"
                  className="button-primary inline-flex items-center gap-2"
                  data-ocid="faq-cta-contact"
                >
                  Contact Our Team
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <a
                  href="tel:03145503574"
                  className="button-secondary inline-flex items-center gap-2"
                  data-ocid="faq-cta-call"
                >
                  Call Us Directly
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
