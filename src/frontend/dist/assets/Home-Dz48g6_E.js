import { c as createLucideIcon, u as useScrollAnimation, j as jsxRuntimeExports, L as Layout, m as motion, s as scaleIn, a as Link, b as staggerContainer, d as staggerItem, f as fadeInUp, e as slideInLeft, g as services, h as useCountUp, i as slideInRight } from "./index-D06-h7eS.js";
import { S as SectionHeading } from "./SectionHeading-DROvuUGz.js";
import { S as ServiceCard } from "./ServiceCard-BAWu1jiO.js";
import { c as caseStudies } from "./caseStudies-BeMBm89e.js";
import { Z as Zap } from "./zap-CSfWXYxT.js";
import { A as ArrowRight } from "./arrow-right-DEWDOBIA.js";
import { C as ChevronRight } from "./chevron-right-1kC-Y_C-.js";
import { C as CircleCheck } from "./circle-check-Bf5VDwk9.js";
import { C as ChartColumn } from "./chart-column-CQ7gfXX1.js";
import { U as Users } from "./users-2GspXASm.js";
import { S as Shield } from "./shield-BhmTEjrV.js";
import { Q as Quote } from "./quote-DuU7H25o.js";
import { S as Star } from "./star-DuBK-hMH.js";
import "./monitor-DviW4mMe.js";
import "./file-text-Bs5ZmYz8.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]
];
const ChartLine = createLucideIcon("chart-line", __iconNode);
const testimonials = [
  {
    id: "1",
    quote: "ElevateX Media completely transformed our digital presence. Within six months, our organic traffic tripled and we're generating more qualified leads than ever before. Their team is strategic, transparent, and genuinely invested in our growth.",
    author: "Sarah Chen",
    title: "VP of Marketing",
    company: "Tech Solutions Inc.",
    industry: "Technology",
    rating: 5
  },
  {
    id: "2",
    quote: "The ROI we've seen from our PPC campaigns has been remarkable. ElevateX rebuilt our entire Google Ads account, and we went from a 2x ROAS to over 6x in less than four months. I wish we had made the switch sooner.",
    author: "James Morrison",
    title: "Director of E-Commerce",
    company: "Global Retail Co.",
    industry: "Retail",
    rating: 5
  },
  {
    id: "3",
    quote: "As a law firm, we were skeptical about digital marketing. ElevateX proved us wrong. Our local search visibility is incredible, the phone rings constantly, and the review management program they built has given us a 4.8-star reputation across Google.",
    author: "Michael Torres",
    title: "Managing Partner",
    company: "Premier Law Group",
    industry: "Legal",
    rating: 5
  },
  {
    id: "4",
    quote: "Our new website is night and day compared to the old one. It's beautiful, loads instantly, and our appointment booking rate has more than doubled. The team at ElevateX truly understood what our patients need.",
    author: "Dr. Amina Khalid",
    title: "Medical Director",
    company: "HealthPlus Clinics",
    industry: "Healthcare",
    rating: 5
  },
  {
    id: "5",
    quote: "The content and email nurture sequences ElevateX built for us changed everything about our lead generation. Our sales team used to spend hours educating prospects — now they arrive already sold on what we do.",
    author: "David Kaufman",
    title: "Chief Revenue Officer",
    company: "FinServ Partners",
    industry: "Financial Services",
    rating: 5
  },
  {
    id: "6",
    quote: "I was nervous about investing in social media for our restaurants, but the results have been incredible. Our Instagram following grew by 12,000 followers and weekday foot traffic is up 67%. ElevateX made social media work for us.",
    author: "Priya Sharma",
    title: "Owner & Founder",
    company: "Urban Eats Restaurant Group",
    industry: "Food & Beverage",
    rating: 5
  },
  {
    id: "7",
    quote: "We launched our SaaS product with no brand recognition. ElevateX built our content strategy from scratch and within four months we were ranking on page one for our most important keywords. The organic pipeline they created is our best growth channel.",
    author: "Alex Petrov",
    title: "CEO",
    company: "Nawsure Software",
    industry: "SaaS",
    rating: 5
  },
  {
    id: "8",
    quote: "Professional, data-driven, and genuinely results-focused. ElevateX doesn't just report numbers — they explain what they mean, what they're doing about it, and what to expect next. Best marketing partnership we've had.",
    author: "Lisa Nguyen",
    title: "Marketing Manager",
    company: "ProPet Supplies",
    industry: "Pet Products",
    rating: 5
  }
];
const featuredServiceSlugs = [
  "search-engine-optimization",
  "pay-per-click-advertising",
  "social-media-management",
  "content-marketing",
  "web-design",
  "conversion-rate-optimization"
];
const featuredServices = featuredServiceSlugs.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean);
const featuredCaseStudies = caseStudies.slice(0, 3);
const featuredTestimonials = testimonials.slice(0, 4);
const heroWords = ["Drive", "More", "Revenue", "With"];
const caseStudyImages = [
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
];
const trustLogos = [
  "Google Partner",
  "Meta Partner",
  "HubSpot Certified",
  "Shopify Experts",
  "Semrush Agency",
  "WordPress VIP",
  "Salesforce Partner",
  "Mailchimp Pro"
];
const benefits = [
  {
    icon: ChartColumn,
    title: "Data-Driven Strategy",
    description: "Every decision we make is backed by real data. We track what matters, measure what works, and constantly optimize for better results."
  },
  {
    icon: Users,
    title: "Full-Service Team",
    description: "From SEO to web design to paid ads — a complete digital marketing team under one roof, aligned to your goals."
  },
  {
    icon: ChartLine,
    title: "Transparent Reporting",
    description: "No black boxes. You get clear, plain-English monthly reports showing exactly what we did, what improved, and what's next."
  },
  {
    icon: Shield,
    title: "Proven Track Record",
    description: "500+ clients trust us with their digital growth. Our case studies and results speak louder than any pitch deck."
  }
];
const checklistItems = [
  "No long-term lock-in contracts",
  "Dedicated account manager for every client",
  "Real-time reporting dashboards",
  "Full-service team — no outsourcing"
];
function StatCounter({
  target,
  suffix = "",
  label,
  triggered
}) {
  const { displayValue } = useCountUp(target, 2200, suffix, triggered);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      variants: staggerItem,
      className: "flex flex-col items-center text-center sm:text-left sm:items-start",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl sm:text-5xl font-display font-bold text-primary-foreground tabular-nums", children: displayValue }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-primary-foreground/80 text-sm font-medium tracking-wide uppercase", children: label })
      ]
    }
  );
}
function CaseStudyCardEnhanced({
  cs,
  image,
  direction
}) {
  var _a, _b;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      variants: direction === "left" ? slideInLeft : slideInRight,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-80px" },
      whileHover: {
        y: -6,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      },
      className: "group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-48 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: image,
              alt: cs.client,
              className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-widest text-primary-foreground/90 bg-primary/80 px-2.5 py-1 rounded-full backdrop-blur-sm", children: cs.industry }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground mb-1 leading-snug", children: cs.client }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4 line-clamp-2", children: cs.challenge }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-display font-bold text-primary", children: (_a = cs.results[0]) == null ? void 0 : _a.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: (_b = cs.results[0]) == null ? void 0 : _b.metric })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/portfolio/$id",
                params: { id: cs.id },
                className: "flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all duration-200",
                children: [
                  "View Study ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function TestimonialCardAnimated({
  t,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      variants: staggerItem,
      whileHover: {
        y: -6,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      },
      className: "bg-card border border-border rounded-2xl p-6 shadow-xs hover:shadow-lg hover:border-primary/30 hover:shadow-primary/8 transition-all duration-300 flex flex-col",
      style: { animationDelay: `${index * 0.1}s` },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "w-6 h-6 text-primary/40 mb-3 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed flex-1 mb-4", children: [
          '"',
          t.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 mb-3", children: ["s1", "s2", "s3", "s4", "s5"].map((sid, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: {
              delay: i * 0.08 + 0.3,
              type: "spring",
              stiffness: 400
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Star,
              {
                className: `w-4 h-4 ${i < (t.rating ?? 5) ? "text-yellow-400 fill-yellow-400" : "text-muted"}`
              }
            )
          },
          sid
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 border-t border-border pt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-sm shrink-0", children: t.author.charAt(0) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground truncate", children: t.author }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: t.company })
          ] })
        ] })
      ]
    }
  );
}
function Home() {
  const statsSection = useScrollAnimation(0.3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative overflow-hidden min-h-[90vh] flex items-center",
        "aria-label": "Hero",
        style: {
          background: "linear-gradient(135deg, oklch(0.53 0.22 300) 0%, oklch(0.09 0.035 270) 60%, oklch(0.13 0.04 270) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none",
              style: {
                background: "radial-gradient(circle, oklch(0.6 0.22 300), transparent 70%)"
              },
              animate: { scale: [1, 1.15, 1], x: [0, 20, 0], y: [0, -20, 0] },
              transition: {
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute bottom-0 left-[5%] w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none",
              style: {
                background: "radial-gradient(circle, oklch(0.92 0.025 300), transparent 70%)"
              },
              animate: { scale: [1, 1.2, 1], x: [0, -15, 0], y: [0, 15, 0] },
              transition: {
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-10 pointer-events-none",
              style: {
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
                backgroundSize: "32px 32px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  variants: scaleIn,
                  initial: "hidden",
                  animate: "visible",
                  className: "inline-flex items-center gap-2 bg-primary-foreground/15 border border-primary-foreground/30 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3.5 h-3.5" }),
                    "Results-Driven Digital Marketing"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.05] tracking-tight mb-3", children: [
                heroWords.map((word, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    className: "inline-block mr-4",
                    initial: { opacity: 0, y: 40 },
                    animate: { opacity: 1, y: 0 },
                    transition: {
                      delay: i * 0.1 + 0.2,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    },
                    children: word
                  },
                  word
                )),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    className: "inline-block",
                    initial: { opacity: 0, y: 40 },
                    animate: { opacity: 1, y: 0 },
                    transition: {
                      delay: 0.6,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    },
                    style: {
                      background: "linear-gradient(135deg, oklch(0.92 0.025 300), oklch(1 0 0))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    },
                    children: "ElevateX"
                  }
                ),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    className: "inline-block text-primary-foreground",
                    initial: { opacity: 0, y: 40 },
                    animate: { opacity: 1, y: 0 },
                    transition: {
                      delay: 0.7,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    },
                    children: "Media"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.p,
                {
                  className: "text-lg sm:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: {
                    delay: 0.8,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  },
                  children: "We help ambitious businesses grow online through data-driven SEO, paid advertising, content marketing, and web design. Measurable results. Transparent reporting. Real growth."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  className: "flex flex-wrap gap-4 mb-16",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: {
                    delay: 0.9,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        whileHover: { scale: 1.04 },
                        whileTap: { scale: 0.97 },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Link,
                          {
                            to: "/contact",
                            "data-ocid": "hero-cta-proposal",
                            className: "inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-bold rounded-md text-base shadow-xl group overflow-hidden relative",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative z-10 flex items-center gap-2", children: [
                              "Get a Free Proposal",
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" })
                            ] })
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        whileHover: { scale: 1.04 },
                        whileTap: { scale: 0.97 },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Link,
                          {
                            to: "/portfolio",
                            "data-ocid": "hero-cta-work",
                            className: "inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-foreground/40 text-primary-foreground font-semibold rounded-md text-base hover:border-primary-foreground transition-all duration-200 group",
                            children: [
                              "View Our Work",
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5" })
                            ]
                          }
                        )
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-primary-foreground/20",
                  variants: staggerContainer,
                  initial: "hidden",
                  animate: "visible",
                  transition: { delayChildren: 1 },
                  children: [
                    { value: "$500M+", label: "Revenue Generated" },
                    { value: "500+", label: "Happy Clients" },
                    { value: "18+", label: "Services Offered" },
                    { value: "30+", label: "Certified Experts" }
                  ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      variants: staggerItem,
                      className: "text-center sm:text-left",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl sm:text-4xl font-display font-bold text-primary-foreground", children: stat.value }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary-foreground/70 mt-1 leading-snug", children: stat.label })
                      ]
                    },
                    stat.label
                  ))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "hidden lg:block relative",
                initial: { opacity: 0, x: 60, scale: 0.95 },
                animate: { opacity: 1, x: 0, scale: 1 },
                transition: {
                  delay: 0.4,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/40 border border-primary-foreground/20", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
                        alt: "Digital marketing analytics dashboard",
                        className: "w-full h-auto object-cover"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-tl from-primary/30 to-transparent" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      className: "absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-3 shadow-xl",
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 1.2, duration: 0.5 },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Monthly Revenue" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-display font-bold text-primary", children: "+143% ROI" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      className: "absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-xl p-3 shadow-xl",
                      initial: { opacity: 0, y: -20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 1.4, duration: 0.5 },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-80", children: "Organic Traffic" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-display font-bold", children: "↑ 380%" })
                      ]
                    }
                  )
                ]
              }
            )
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-10 bg-muted/40 border-y border-border overflow-hidden",
        "aria-label": "Partners",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "flex gap-12 items-center whitespace-nowrap",
            animate: { x: ["0%", "-50%"] },
            transition: {
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear"
            },
            children: [...trustLogos, ...trustLogos].map((logo, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-sm font-semibold text-muted-foreground opacity-60 hover:opacity-100 transition-opacity duration-200 shrink-0 px-4",
                children: logo
              },
              `marquee-${logo}-${i < trustLogos.length ? "a" : "b"}`
            ))
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "py-24 bg-background relative overflow-hidden",
        "aria-label": "Our services",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-[0.03] pointer-events-none",
              style: {
                backgroundImage: "radial-gradient(circle, oklch(0.53 0.22 300) 1.5px, transparent 1.5px)",
                backgroundSize: "28px 28px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeading,
              {
                eyebrow: "What We Do",
                title: "Our Digital Marketing Services",
                subtitle: "We offer a full suite of digital marketing services designed to grow your traffic, leads, and revenue — all measurably."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                "data-ocid": "services-grid",
                variants: staggerContainer,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true, margin: "-80px" },
                children: featuredServices.map((service, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { service, index: i }, service.id))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "mt-12 text-center",
                variants: fadeInUp,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    whileHover: { scale: 1.04 },
                    whileTap: { scale: 0.97 },
                    className: "inline-block",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", "data-ocid": "services-all-cta", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-md text-base transition-smooth hover:bg-primary hover:text-primary-foreground group",
                        children: [
                          "View All 18+ Services",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" })
                        ]
                      }
                    ) })
                  }
                )
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "py-16 bg-primary relative overflow-hidden",
        "aria-label": "Trust metrics",
        ref: statsSection.ref,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute inset-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse at 50% 50%, oklch(0.6 0.22 300 / 0.3), transparent 70%)"
              },
              animate: { scale: [1, 1.1, 1] },
              transition: {
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "grid grid-cols-2 lg:grid-cols-4 gap-8",
              variants: staggerContainer,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true, margin: "-60px" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatCounter,
                  {
                    target: 500,
                    suffix: "+",
                    label: "Clients Served",
                    triggered: statsSection.isVisible
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatCounter,
                  {
                    target: 18,
                    suffix: "+",
                    label: "Digital Services",
                    triggered: statsSection.isVisible
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatCounter,
                  {
                    target: 30,
                    suffix: "+",
                    label: "Expert Specialists",
                    triggered: statsSection.isVisible
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatCounter,
                  {
                    target: 95,
                    suffix: "%",
                    label: "Client Retention",
                    triggered: statsSection.isVisible
                  }
                )
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-muted/40", "aria-label": "Case studies", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          eyebrow: "Proven Results",
          title: "Real Results for Real Clients",
          subtitle: "Don't take our word for it — explore our client success stories and see the numbers that matter."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
          "data-ocid": "case-studies-grid",
          children: featuredCaseStudies.map((cs, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            CaseStudyCardEnhanced,
            {
              cs,
              image: caseStudyImages[i] ?? caseStudyImages[0],
              direction: i % 2 === 0 ? "left" : "right"
            },
            cs.id
          ))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "mt-12 text-center",
          variants: fadeInUp,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              whileHover: { scale: 1.04 },
              whileTap: { scale: 0.97 },
              className: "inline-block",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", "data-ocid": "case-studies-all-cta", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: "inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-md text-base transition-smooth hover:bg-primary hover:text-primary-foreground group",
                  children: [
                    "View All Case Studies",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" })
                  ]
                }
              ) })
            }
          )
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-background", "aria-label": "Why choose us", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: slideInLeft,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-80px" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3", children: "Why ElevateX" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-heading-lg text-foreground mb-6", children: "Why Choose ElevateX Media?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground leading-relaxed mb-8", children: "There's no shortage of digital agencies. What sets us apart is our obsession with measurable outcomes, our deep expertise across every channel, and our commitment to treating your budget like it's our own." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 mb-10", children: checklistItems.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.li,
              {
                className: "flex items-start gap-3 text-sm",
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.1 + 0.3, duration: 0.4 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: item })
                ]
              },
              item
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                whileHover: { scale: 1.04 },
                whileTap: { scale: 0.97 },
                className: "inline-block",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", "data-ocid": "why-us-about-cta", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md text-base transition-smooth hover:opacity-90 group",
                    children: [
                      "Learn About Our Team",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" })
                    ]
                  }
                ) })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
          variants: staggerContainer,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-80px" },
          children: benefits.map((benefit) => {
            const Icon = benefit.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                variants: staggerItem,
                whileHover: {
                  y: -4,
                  boxShadow: "0 12px 32px rgba(96,47,247,0.15)",
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }
                },
                className: "bg-card rounded-xl border border-border p-6 shadow-xs cursor-default transition-colors duration-300 hover:border-primary/40",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-primary-foreground" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground mb-2", children: benefit.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: benefit.description })
                ]
              },
              benefit.title
            );
          })
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-muted/30", "aria-label": "Client testimonials", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          eyebrow: "Client Reviews",
          title: "What Our Clients Say",
          subtitle: "We measure our success by the results we deliver and the relationships we build."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
          "data-ocid": "testimonials-grid",
          variants: staggerContainer,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-80px" },
          children: featuredTestimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialCardAnimated, { t, index: i }, t.id))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "py-24 relative overflow-hidden",
        "aria-label": "Call to action",
        style: {
          background: "linear-gradient(135deg, oklch(0.53 0.22 300), oklch(0.09 0.035 270))"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute inset-0 pointer-events-none",
              style: {
                background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)"
              },
              animate: { x: ["-100%", "100%"] },
              transition: {
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary-foreground/5",
                animate: { scale: [1, 1.1, 1], rotate: [0, 45, 0] },
                transition: {
                  duration: 12,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute -bottom-32 -left-20 w-[32rem] h-[32rem] rounded-full bg-accent/10",
                animate: { scale: [1, 1.15, 1] },
                transition: {
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 3
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
              variants: staggerContainer,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true, margin: "-80px" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    variants: fadeInUp,
                    className: "text-sm font-semibold uppercase tracking-widest text-primary-foreground/80 mb-4",
                    children: "Let's Work Together"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.h2,
                  {
                    variants: fadeInUp,
                    className: "text-4xl sm:text-5xl font-display font-bold text-primary-foreground mb-6 leading-tight",
                    children: "Ready to Grow Your Business?"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    variants: fadeInUp,
                    className: "text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed",
                    children: "Join 500+ businesses that trust ElevateX Media to grow their online presence. Get your free proposal — no obligation, no pressure. Just a clear strategy for your growth."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    variants: fadeInUp,
                    className: "flex flex-wrap justify-center gap-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.div,
                        {
                          whileHover: { scale: 1.05 },
                          whileTap: { scale: 0.97 },
                          className: "relative",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              motion.div,
                              {
                                className: "absolute -inset-1 rounded-lg bg-primary-foreground/20 blur-sm",
                                animate: { opacity: [0.5, 0.8, 0.5] },
                                transition: { duration: 2, repeat: Number.POSITIVE_INFINITY }
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", "data-ocid": "bottom-cta-proposal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "button",
                              {
                                type: "button",
                                className: "relative inline-flex items-center gap-2 px-10 py-5 bg-primary-foreground text-primary font-bold rounded-md text-lg shadow-xl group",
                                children: [
                                  "Get My Free Proposal",
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" })
                                ]
                              }
                            ) })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: { scale: 1.04 }, whileTap: { scale: 0.97 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", "data-ocid": "bottom-cta-services", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          className: "inline-flex items-center gap-2 px-10 py-5 border-2 border-primary-foreground/40 text-primary-foreground font-semibold rounded-md text-lg hover:border-primary-foreground transition-all duration-200",
                          children: "Explore Services"
                        }
                      ) }) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    variants: fadeInUp,
                    className: "mt-12 flex flex-wrap justify-center gap-6",
                    children: [
                      "No long-term contracts",
                      "Free initial consultation",
                      "Results-focused guarantee"
                    ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex items-center gap-2 text-primary-foreground/70 text-sm",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-primary-foreground/90 shrink-0" }),
                          item
                        ]
                      },
                      item
                    ))
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
}
export {
  Home
};
