import { c as createLucideIcon, j as jsxRuntimeExports, L as Layout, m as motion, l as fadeInLeft, t as fadeInRight, b as staggerContainer, d as staggerItem, f as fadeInUp, T as TrendingUp, s as scaleIn, a as Link, u as useScrollAnimation, h as useCountUp } from "./index-D06-h7eS.js";
import { B as Badge } from "./Badge-DlTTkVfq.js";
import { S as SectionHeading } from "./SectionHeading-DROvuUGz.js";
import { C as CircleCheckBig } from "./circle-check-big-CcsUT1TI.js";
import { E as Eye } from "./eye-D596aClo.js";
import { L as Lightbulb } from "./lightbulb-C0rqXvQa.js";
import { U as Users } from "./users-2GspXASm.js";
import { A as Award } from "./award-BmIH9f6X.js";
import { C as ChartNoAxesColumn } from "./chart-no-axes-column-BA6_pYTJ.js";
import { A as ArrowRight } from "./arrow-right-DEWDOBIA.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m11 17 2 2a1 1 0 1 0 3-3", key: "efffak" }],
  [
    "path",
    {
      d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",
      key: "9pr0kb"
    }
  ],
  ["path", { d: "m21 3 1 11h-2", key: "1tisrp" }],
  ["path", { d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3", key: "1uvwmv" }],
  ["path", { d: "M3 4h8", key: "1ep09j" }]
];
const Handshake = createLucideIcon("handshake", __iconNode);
const statsData = [
  { label: "Digital Marketing Experts", target: 30, suffix: "+", icon: Users },
  { label: "Clients Served", target: 500, suffix: "+", icon: Award },
  { label: "Services Offered", target: 18, suffix: "+", icon: ChartNoAxesColumn },
  { label: "Client Retention Rate", target: 95, suffix: "%", icon: TrendingUp }
];
const values = [
  {
    icon: Eye,
    title: "Transparency",
    description: "You deserve to know exactly where your budget goes and what it delivers. Full reporting, no black boxes, no vanity metrics — ever."
  },
  {
    icon: TrendingUp,
    title: "Results First",
    description: "Every strategy and campaign is anchored to measurable outcomes. We're obsessed with your ROI — not impressions or activity reports."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Digital marketing evolves constantly. We stay ahead of algorithm changes, platform updates, and emerging channels so your campaigns always have the edge."
  },
  {
    icon: Handshake,
    title: "True Partnership",
    description: "We don't treat clients as accounts. We invest in understanding your business deeply and act as a genuine extension of your team."
  }
];
const differentiators = [
  {
    num: "01",
    title: "Strategy Before Tactics",
    description: "We start with deep discovery — your goals, market, competitors, and customer journey — before recommending a single tactic. Strategy drives everything we do."
  },
  {
    num: "02",
    title: "Data-Driven at Every Step",
    description: "From keyword selection to ad copy, every decision is backed by data. We test, measure, and iterate relentlessly so your results compound over time."
  },
  {
    num: "03",
    title: "Full-Funnel Expertise",
    description: "We don't just drive traffic. We optimize the entire funnel from awareness to conversion, ensuring every dollar of marketing spend delivers maximum return."
  }
];
const team = [
  {
    name: "Mutayyab Hussain",
    title: "Founder & CEO",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
  },
  {
    name: "Sara Ahmed",
    title: "Head of SEO",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
  },
  {
    name: "Ali Khan",
    title: "PPC Director",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80"
  },
  {
    name: "Fatima Malik",
    title: "Creative Director",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
  },
  {
    name: "Omar Siddiqui",
    title: "Head of Content",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
  },
  {
    name: "Zara Qureshi",
    title: "Social Media Lead",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80"
  }
];
const timeline = [
  {
    year: "2019",
    side: "left",
    title: "Founded in Rawalpindi",
    desc: "Mutayyab Hussain launched ElevateX with a vision to bring enterprise-grade digital marketing to growing businesses."
  },
  {
    year: "2020",
    side: "right",
    title: "First 50 Clients",
    desc: "Word spread fast. Within our first year, we had helped 50+ businesses transform their online presence and revenue."
  },
  {
    year: "2021",
    side: "left",
    title: "Team of 15 Specialists",
    desc: "Expanded our team with certified SEO, PPC, and content experts to serve a growing client roster across Pakistan."
  },
  {
    year: "2023",
    side: "right",
    title: "500+ Clients & $2B+ Revenue",
    desc: "A milestone year — surpassing 500 active clients and driving over $2 billion in trackable client revenue."
  }
];
function StatCounter({
  target,
  suffix,
  label,
  icon: Icon
}) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const { displayValue } = useCountUp(target, 2e3, suffix, isVisible);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      variants: scaleIn,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true },
      className: "text-center",
      "data-ocid": "about-stat",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-8 h-8 text-primary-foreground/80" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-1", children: isVisible ? displayValue : `0${suffix}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-primary-foreground/70 leading-snug", children: label })
      ]
    }
  );
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-primary overflow-hidden min-h-[520px] flex items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
            alt: "ElevateX Media team collaboration",
            className: "w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8 relative z-10 py-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "accent", size: "lg", className: "mb-6", children: "About ElevateX Media" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h1,
          {
            initial: { opacity: 0, y: 40 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
            className: "text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-5 max-w-3xl",
            children: "We Turn Ambition Into Measurable Growth"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.25 },
            className: "text-xl text-primary-foreground/80 leading-relaxed max-w-2xl",
            children: "A data-driven digital marketing agency that delivers strategy, creativity, and relentless optimization — with transparent results you can measure."
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: fadeInLeft,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-80px" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3", children: "Our Story" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-heading-lg text-foreground mb-6", children: "Built on a Belief That Marketing Should Be Accountable" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-muted-foreground leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "ElevateX Media was founded by Mutayyab Hussain in Rawalpindi with a clear mission: bring enterprise-grade digital marketing to businesses that deserve better results than what they were getting." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Too many agencies delivered reports full of vanity metrics while actual leads and revenue stagnated. We set out to do it differently — with radical transparency, data-backed decisions, and a genuine commitment to client success." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Today, our team of 30+ specialists covers every discipline of digital marketing — from technical SEO and paid search to social media, content, and web development. We have helped 500+ businesses across Pakistan and beyond achieve sustained, measurable growth." })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: fadeInRight,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-80px" },
          className: "relative",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden h-64 mb-6 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
                alt: "ElevateX Media modern office",
                className: "w-full h-full object-cover"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                variants: staggerContainer,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true },
                className: "bg-primary/5 border border-primary/10 rounded-2xl p-6 space-y-4",
                children: [
                  "Pakistan-based team serving clients worldwide",
                  "Founded on principles of transparency and accountability",
                  "Specialists in SEO, PPC, Social, Content & Web",
                  "500+ successful client engagements",
                  "Data-driven culture — no guesswork, ever"
                ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    variants: staggerItem,
                    className: "flex items-start gap-3",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 text-primary mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground leading-snug", children: item })
                    ]
                  },
                  item
                ))
              }
            )
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: fadeInUp,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-80px" },
          className: "text-center mb-14",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3", children: "Our Journey" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-heading-lg text-foreground", children: "How We Got Here" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-10", children: timeline.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            variants: item.side === "left" ? fadeInLeft : fadeInRight,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, margin: "-60px" },
            className: `flex flex-col md:flex-row items-center gap-6 ${item.side === "right" ? "md:flex-row-reverse" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `flex-1 ${item.side === "right" ? "md:text-left" : "md:text-right"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-smooth", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-primary uppercase tracking-widest", children: item.year }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground mt-1 mb-2", children: item.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.desc })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "hidden md:flex w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-sm items-center justify-center shrink-0 z-10",
                  initial: { scale: 0 },
                  whileInView: { scale: 1 },
                  viewport: { once: true },
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                    delay: i * 0.1
                  },
                  children: i + 1
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 hidden md:block" })
            ]
          },
          item.year
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          eyebrow: "Mission & Values",
          title: "The Principles That Drive Everything We Do",
          subtitle: "These are not marketing words — they are the commitments we make to every client, every day."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          variants: staggerContainer,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-80px" },
          className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto",
          children: values.map((value, i) => {
            const Icon = value.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                variants: scaleIn,
                custom: i,
                className: "bg-card border border-border rounded-xl p-6 hover:shadow-md transition-smooth",
                whileHover: {
                  y: -6,
                  boxShadow: "0 12px 40px rgba(96,47,247,0.15)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      className: "w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4",
                      whileHover: { scale: 1.15, rotate: 8 },
                      transition: { type: "spring", stiffness: 300, damping: 12 },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-primary-foreground" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-heading-sm text-foreground mb-2", children: value.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: value.description })
                ]
              },
              value.title
            );
          })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 bg-primary relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 opacity-15 pointer-events-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-1/4 w-80 h-80 bg-primary-foreground rounded-full blur-3xl" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          variants: staggerContainer,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          className: "grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto",
          children: statsData.map(({ target, suffix, label, icon }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCounter,
            {
              target,
              suffix,
              label,
              icon
            },
            label
          ))
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          eyebrow: "Our Team",
          title: "Meet the Specialists Behind Your Results",
          subtitle: "Our team brings deep expertise across every digital marketing discipline, united by a shared commitment to client growth and measurable outcomes."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          variants: staggerContainer,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-80px" },
          className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto",
          children: team.map((member, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: scaleIn,
              custom: i,
              className: "text-center group",
              "data-ocid": "team-member",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "w-20 h-20 rounded-2xl overflow-hidden mx-auto mb-3 shadow-sm",
                    whileHover: { scale: 1.08, y: -4 },
                    transition: { type: "spring", stiffness: 400, damping: 15 },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: member.img,
                        alt: member.name,
                        className: "w-full h-full object-cover",
                        onError: (e) => {
                          const target = e.target;
                          target.src = "";
                          target.parentElement.className = "w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-3";
                        }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground leading-tight", children: member.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-snug", children: member.title })
              ]
            },
            member.name
          ))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          variants: fadeInUp,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          className: "text-center text-muted-foreground mt-8 text-sm",
          children: "Plus 24+ more specialists across SEO, content, design, development, and analytics."
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          eyebrow: "Why ElevateX Media",
          title: "What Makes Us Different",
          subtitle: "There are thousands of digital marketing agencies. Here is why businesses choose us — and stay with us."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          variants: staggerContainer,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-80px" },
          className: "grid md:grid-cols-3 gap-8 max-w-5xl mx-auto",
          children: differentiators.map((diff, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: staggerItem,
              custom: i,
              className: "bg-card border border-border rounded-xl p-8 hover:shadow-md transition-smooth",
              whileHover: { y: -6, borderColor: "rgba(96,47,247,0.4)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-5",
                    whileHover: { scale: 1.15, rotate: -5 },
                    transition: { type: "spring", stiffness: 300, damping: 12 },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground font-bold text-sm font-mono", children: diff.num })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-heading-sm text-foreground mb-3", children: diff.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm", children: diff.description })
              ]
            },
            diff.title
          ))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        variants: fadeInUp,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        className: "max-w-2xl mx-auto",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-display font-bold text-primary-foreground mb-4", children: "Ready to Grow With Us?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg mb-8 leading-relaxed", children: "Let us have a conversation about your goals and how ElevateX Media can help you achieve them — with a free consultation, no obligation." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.97 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/contact",
              className: "inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-md font-bold text-base hover:opacity-90 transition-smooth",
              "data-ocid": "about-cta",
              children: [
                "Get a Free Strategy Call",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
              ]
            }
          ) })
        ]
      }
    ) }) })
  ] });
}
export {
  About
};
