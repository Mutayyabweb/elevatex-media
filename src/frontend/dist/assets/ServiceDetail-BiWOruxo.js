import { n as useParams, o as getServiceBySlug, r as reactExports, p as notFound, T as TrendingUp, M as Mail, q as MapPin, S as Search, j as jsxRuntimeExports, L as Layout, m as motion, a as Link, P as Phone, b as staggerContainer, s as scaleIn, l as fadeInLeft, t as fadeInRight, e as slideInLeft, f as fadeInUp, d as staggerItem } from "./index-D06-h7eS.js";
import { B as Badge } from "./Badge-DlTTkVfq.js";
import { B as BreadcrumbNav } from "./BreadcrumbNav-aeaQJMb8.js";
import { M as Mic, R as Radio, b as Settings, c as ShoppingCart, d as RefreshCw, e as Megaphone, a as Share2, f as MousePointer, S as ServiceCard } from "./ServiceCard-BAWu1jiO.js";
import { u as useScroll, a as useTransform } from "./use-transform-Bb7REnt_.js";
import { S as Star } from "./star-DuBK-hMH.js";
import { Z as Zap } from "./zap-CSfWXYxT.js";
import { S as Shield } from "./shield-BhmTEjrV.js";
import { M as Monitor, B as Building2 } from "./monitor-DviW4mMe.js";
import { F as FileText } from "./file-text-Bs5ZmYz8.js";
import { A as ArrowRight } from "./arrow-right-DEWDOBIA.js";
import { C as CircleCheckBig } from "./circle-check-big-CcsUT1TI.js";
import { A as Award } from "./award-BmIH9f6X.js";
import { C as ChartNoAxesColumn } from "./chart-no-axes-column-BA6_pYTJ.js";
import { U as Users } from "./users-2GspXASm.js";
import { C as Clock } from "./clock-BwmukiVX.js";
import "./chevron-right-1kC-Y_C-.js";
const iconMap = {
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
  Star
};
const serviceImages = {
  seo: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&q=80",
  "local-seo": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&q=80",
  "technical-seo": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&q=80",
  ppc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  "google-ads": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  social: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80",
  "social-media": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80",
  content: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
  "content-marketing": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
  web: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
  "web-design": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80"
};
function getServiceImage(slug, category) {
  if (serviceImages[slug]) return serviceImages[slug];
  if (category && serviceImages[category]) return serviceImages[category];
  return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80";
}
const whyElevateX = [
  {
    icon: Award,
    title: "Certified Specialists",
    desc: "Google, Meta, and HubSpot certified experts on every campaign."
  },
  {
    icon: ChartNoAxesColumn,
    title: "Data-Driven Strategy",
    desc: "Every decision backed by analytics, testing, and real performance data."
  },
  {
    icon: Users,
    title: "Dedicated Account Team",
    desc: "You get a dedicated strategist, not a rotating help desk."
  },
  {
    icon: Clock,
    title: "Transparent Reporting",
    desc: "Real-time dashboards so you always know exactly what's happening."
  }
];
const proofStats = [
  { value: "500+", label: "Active Clients" },
  { value: "150%", label: "Avg Lead Increase" },
  { value: "$2B+", label: "Revenue Generated" },
  { value: "98%", label: "Client Retention Rate" }
];
function ServiceDetail() {
  const { slug } = useParams({ from: "/services/$slug" });
  const service = getServiceBySlug(slug);
  const heroRef = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  if (!service) {
    notFound();
    return null;
  }
  const Icon = iconMap[service.icon] ?? Search;
  const related = service.relatedServices.map((s) => getServiceBySlug(s)).filter(Boolean).slice(0, 3);
  const heroImage = getServiceImage(slug, service.category);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        ref: heroRef,
        className: "relative overflow-hidden min-h-[520px] flex items-end pb-0",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "absolute inset-0", style: { y: bgY }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: heroImage,
                alt: `${service.title} background`,
                className: "w-full h-full object-cover scale-110"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/90 to-primary" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "container mx-auto px-4 lg:px-8 relative z-10 pt-12 pb-16",
              style: { y: textY },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  BreadcrumbNav,
                  {
                    crumbs: [
                      { label: "Services", to: "/services" },
                      { label: service.title }
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, x: -20 },
                        animate: { opacity: 1, x: 0 },
                        transition: { duration: 0.5 },
                        className: "flex items-center gap-4 mb-5",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.div,
                            {
                              className: "w-14 h-14 rounded-2xl bg-primary-foreground/15 flex items-center justify-center shrink-0 backdrop-blur-sm",
                              whileHover: { scale: 1.1, rotate: 5 },
                              transition: { type: "spring", stiffness: 400, damping: 15 },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-7 h-7 text-primary-foreground" })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "accent", size: "md", className: "capitalize", children: service.category })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.h1,
                      {
                        initial: { opacity: 0, y: 30 },
                        animate: { opacity: 1, y: 0 },
                        transition: {
                          duration: 0.7,
                          ease: [0.22, 1, 0.36, 1],
                          delay: 0.1
                        },
                        className: "text-heading-xl text-primary-foreground mb-4 md:text-5xl",
                        children: service.title
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.p,
                      {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.6, delay: 0.2 },
                        className: "text-lg text-primary-foreground/80 leading-relaxed mb-8",
                        children: service.shortDesc
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.5, delay: 0.3 },
                        className: "flex flex-col sm:flex-row gap-3",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            Link,
                            {
                              to: "/contact",
                              className: "inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary-foreground text-primary font-bold rounded-md transition-smooth hover:opacity-90",
                              "data-ocid": "service-hero-cta",
                              children: [
                                "Get a Proposal ",
                                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            Link,
                            {
                              to: "/contact",
                              className: "inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-primary-foreground/50 text-primary-foreground font-semibold rounded-md transition-smooth hover:bg-primary-foreground/10",
                              "data-ocid": "service-hero-call",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                                " Call Our Experts"
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      variants: staggerContainer,
                      initial: "hidden",
                      animate: "visible",
                      className: "grid grid-cols-2 gap-4 lg:shrink-0 lg:w-72",
                      children: proofStats.map(({ value, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.div,
                        {
                          variants: scaleIn,
                          className: "bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/15",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-display font-bold text-primary-foreground mb-0.5", children: value }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-primary-foreground/65 leading-snug", children: label })
                          ]
                        },
                        label
                      ))
                    }
                  )
                ] })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: fadeInLeft,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-80px" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-widest mb-3", children: "About This Service" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-heading-md text-foreground mb-4", children: [
              "What Is ",
              service.title,
              "?"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground leading-relaxed mb-8", children: service.longDesc }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/contact",
                className: "button-primary inline-flex items-center gap-2",
                "data-ocid": "service-detail-cta",
                children: [
                  "Get a Proposal for",
                  " ",
                  service.title.split(" ").slice(0, 2).join(" "),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                ]
              }
            )
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
          className: "bg-muted/30 rounded-2xl p-8 border border-border",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-widest mb-3", children: "Key Benefits" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-heading-md text-foreground mb-6", children: "What You'll Achieve" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.ul,
              {
                variants: staggerContainer,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true },
                className: "space-y-4",
                children: service.benefits.map((benefit) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.li,
                  {
                    variants: slideInLeft,
                    className: "flex items-start gap-3",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          className: "w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5",
                          whileHover: { scale: 1.2 },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3.5 h-3.5 text-primary-foreground" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground leading-relaxed", children: benefit })
                    ]
                  },
                  benefit
                ))
              }
            )
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/25", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: fadeInUp,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-80px" },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-widest mb-3", children: "How We Work" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-heading-lg text-foreground", children: "Our Proven Process" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-xl mx-auto", children: "A structured, transparent approach that delivers consistent results." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block absolute top-8 left-0 right-0 h-px bg-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            variants: staggerContainer,
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, margin: "-60px" },
            className: `grid grid-cols-1 sm:grid-cols-2 gap-5 ${service.process.length <= 4 ? `lg:grid-cols-${service.process.length}` : service.process.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-3"}`,
            children: service.process.map(({ step, description }, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                variants: staggerItem,
                custom: idx,
                className: "bg-card border border-border rounded-xl p-6 relative group hover:border-primary/30 hover:shadow-md transition-smooth",
                "data-ocid": `process-step-${idx + 1}`,
                whileHover: {
                  y: -4,
                  boxShadow: "0 12px 40px rgba(96,47,247,0.15)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      className: "w-9 h-9 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center mb-4 relative z-10",
                      whileHover: { scale: 1.15 },
                      transition: { type: "spring", stiffness: 400, damping: 15 },
                      children: idx + 1
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-foreground mb-2", children: step }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: description })
                ]
              },
              step
            ))
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-14 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: fadeInLeft,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-80px" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-widest mb-3", children: "Why Choose Us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-heading-lg text-foreground mb-4", children: [
              "Why ElevateX Media for ",
              service.title.split(" ")[0],
              "?"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground leading-relaxed mb-8", children: "We're not a generalist agency trying to do everything. Our team lives and breathes digital marketing — with the specialists, systems, and track record to prove it." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/portfolio",
                className: "inline-flex items-center gap-2 text-primary font-semibold text-sm transition-smooth hover:gap-3",
                "data-ocid": "service-view-results",
                children: [
                  "View Our Results ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          variants: staggerContainer,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-60px" },
          className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
          children: whyElevateX.map(({ icon: DiffIcon, title, desc }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: scaleIn,
              className: "bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-sm transition-smooth",
              whileHover: {
                y: -4,
                boxShadow: "0 8px 30px rgba(96,47,247,0.12)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "w-10 h-10 rounded-lg bg-primary flex items-center justify-center mb-4",
                    whileHover: { scale: 1.15, rotate: 10 },
                    transition: { type: "spring", stiffness: 300, damping: 12 },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(DiffIcon, { className: "w-5 h-5 text-primary-foreground" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm text-foreground mb-2", children: title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: desc })
              ]
            },
            title
          ))
        }
      )
    ] }) }) }),
    related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: fadeInLeft,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          className: "flex items-end justify-between mb-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-widest mb-1.5", children: "Explore More" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-heading-md text-foreground", children: "Related Services" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/services",
                className: "text-sm font-semibold text-primary inline-flex items-center gap-1 transition-smooth hover:gap-2",
                "data-ocid": "service-view-all",
                children: [
                  "All Services ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          variants: staggerContainer,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          className: "grid grid-cols-1 sm:grid-cols-3 gap-5",
          children: related.map(
            (s, i) => s && /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { service: s, index: i }, s.id)
          )
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 bg-primary relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "absolute inset-0 opacity-15 pointer-events-none",
          animate: { backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] },
          transition: {
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear"
          },
          style: {
            backgroundImage: "radial-gradient(ellipse at 20% 60%, oklch(0.7 0.15 290), transparent 50%)",
            backgroundSize: "200% 200%"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: fadeInUp,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          className: "max-w-3xl mx-auto text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "accent", size: "md", className: "mb-4", children: "Free Proposal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4", children: [
              "Ready to Get Started with ",
              service.title,
              "?"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 mb-10 max-w-xl mx-auto text-lg", children: "Let our experts build a custom strategy tailored to your goals and budget. No obligation. No fluff." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  whileHover: { scale: 1.04 },
                  whileTap: { scale: 0.97 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/contact",
                      className: "inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-bold rounded-md transition-smooth hover:opacity-90 text-base",
                      "data-ocid": "service-detail-bottom-cta",
                      children: [
                        "Get a Free Proposal ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/services",
                  className: "inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-foreground/50 text-primary-foreground font-semibold rounded-md transition-smooth hover:bg-primary-foreground/10",
                  "data-ocid": "service-detail-back-link",
                  children: "Explore Other Services"
                }
              )
            ] })
          ]
        }
      ) })
    ] })
  ] });
}
export {
  ServiceDetail
};
