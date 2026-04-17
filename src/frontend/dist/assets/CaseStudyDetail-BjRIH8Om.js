import { n as useParams, r as reactExports, p as notFound, j as jsxRuntimeExports, L as Layout, m as motion, f as fadeInUp, l as fadeInLeft, t as fadeInRight, b as staggerContainer, d as staggerItem, s as scaleIn, T as TrendingUp, a as Link, u as useScrollAnimation, h as useCountUp } from "./index-D06-h7eS.js";
import { B as Badge } from "./Badge-DlTTkVfq.js";
import { B as BreadcrumbNav } from "./BreadcrumbNav-aeaQJMb8.js";
import { g as getCaseStudyBySlug, c as caseStudies } from "./caseStudies-BeMBm89e.js";
import { u as useScroll, a as useTransform } from "./use-transform-Bb7REnt_.js";
import { T as Target } from "./target-DlNjRVDm.js";
import { C as CircleCheck } from "./circle-check-Bf5VDwk9.js";
import { Q as Quote } from "./quote-DuU7H25o.js";
import { S as Star } from "./star-DuBK-hMH.js";
import { A as ArrowRight } from "./arrow-right-DEWDOBIA.js";
import "./chevron-right-1kC-Y_C-.js";
const industryImages = {
  eCommerce: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
  SaaS: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  Healthcare: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
  "Local Business": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
  Finance: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
  "Real Estate": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
  Education: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
  B2B: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
};
function getHeroImage(cs) {
  if (cs.image && cs.image !== "/assets/images/placeholder.svg")
    return cs.image;
  return industryImages[cs.industry] ?? "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80";
}
function parseMetricValue(value) {
  const cleaned = value.replace(/,/g, "");
  const prefixMatch = cleaned.match(/^([^0-9]*)/);
  const suffixMatch = cleaned.match(/([^0-9]+)$/);
  const numMatch = cleaned.match(/[\d.]+/);
  const prefix = (prefixMatch == null ? void 0 : prefixMatch[1]) ?? "";
  const rawSuffix = (suffixMatch == null ? void 0 : suffixMatch[1]) ?? "";
  const suffix = rawSuffix === prefix ? "" : rawSuffix;
  const num = numMatch ? Number.parseFloat(numMatch[0]) : 0;
  return { target: num, prefix, suffix };
}
function AnimatedMetric({
  value,
  metric,
  index
}) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const { target, prefix, suffix } = parseMetricValue(value);
  const { displayValue } = useCountUp(
    Math.round(target),
    1800,
    suffix,
    isVisible
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      variants: scaleIn,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true },
      transition: { delay: index * 0.1 },
      className: "text-center p-5 rounded-xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-smooth",
      "data-ocid": `result-metric-${index}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex w-9 h-9 items-center justify-center rounded-lg bg-primary mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-display font-bold text-foreground mb-1 leading-none", children: isVisible ? `${prefix}${displayValue}` : value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-snug", children: metric })
      ]
    }
  );
}
function CaseStudyDetail() {
  const { id } = useParams({ from: "/portfolio/$id" });
  const cs = getCaseStudyBySlug(id);
  const heroRef = reactExports.useRef(null);
  const [imgError, setImgError] = reactExports.useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  if (!cs) {
    notFound();
    return null;
  }
  const related = caseStudies.filter((c) => c.id !== cs.id && c.industry === cs.industry).slice(0, 3);
  const services = cs.service.split(" & ");
  const heroImage = getHeroImage(cs);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        ref: heroRef,
        className: "relative overflow-hidden min-h-[560px] flex items-end",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "absolute inset-0", style: { y: bgY }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: heroImage,
                alt: `${cs.client} case study`,
                className: "w-full h-full object-cover scale-110"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/85 to-primary" })
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
                      { label: "Portfolio", to: "/portfolio" },
                      { label: cs.client }
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 max-w-3xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 12 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.4 },
                      className: "flex flex-wrap gap-2 mb-5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "accent", size: "lg", children: cs.industry }),
                        services.map((svc) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "muted", size: "lg", children: svc.trim() }, svc))
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
                        delay: 0.05
                      },
                      className: "text-heading-xl text-primary-foreground mb-5",
                      children: cs.client
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.p,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.5, delay: 0.15 },
                      className: "text-lg text-primary-foreground/80 leading-relaxed max-w-2xl",
                      children: cs.challenge
                    }
                  )
                ] })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-12 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          variants: fadeInUp,
          initial: "hidden",
          animate: "visible",
          className: "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6 text-center",
          children: "Campaign Results"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-6", children: cs.results.map(({ metric, value }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        AnimatedMetric,
        {
          value,
          metric,
          index: i
        },
        metric
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: fadeInLeft,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-80px" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5 text-destructive" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-heading-md text-foreground mb-4", children: "The Challenge" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground leading-relaxed mb-6", children: cs.challenge }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-border" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-5 leading-relaxed", children: [
              "Many businesses in the",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: cs.industry }),
              " ",
              "space face these same hurdles — intense competition, unclear attribution, and digital channels that feel too complex to master without expert help."
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
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-heading-md text-foreground mb-4", children: "Our Solution" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground leading-relaxed mb-6", children: cs.solution }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2", children: "Services Deployed" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  variants: staggerContainer,
                  initial: "hidden",
                  whileInView: "visible",
                  viewport: { once: true },
                  className: "flex flex-wrap gap-2",
                  children: services.map((svc) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: staggerItem, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", size: "md", children: svc.trim() }) }, svc))
                }
              )
            ] })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/20 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        variants: scaleIn,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-60px" },
        className: "rounded-2xl overflow-hidden h-72 lg:h-96 bg-muted shadow-sm",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: imgError ? "/assets/images/placeholder.svg" : heroImage,
            alt: `${cs.client} campaign results`,
            className: "w-full h-full object-cover",
            onError: () => setImgError(true)
          }
        )
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        variants: fadeInUp,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        className: "max-w-4xl mx-auto",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2 text-center", children: "By the Numbers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-heading-md text-foreground mb-10 text-center", children: "Results That Speak for Themselves" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              variants: staggerContainer,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true, margin: "-60px" },
              className: "grid grid-cols-1 md:grid-cols-2 gap-4",
              children: cs.results.map(({ metric, value }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  variants: staggerItem,
                  custom: i,
                  className: "flex items-center gap-4 bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-sm transition-smooth",
                  whileHover: { x: 4 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        className: "w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0",
                        whileHover: { scale: 1.1, rotate: 5 },
                        transition: { type: "spring", stiffness: 400, damping: 15 },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-6 h-6 text-primary-foreground" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-display font-bold text-foreground leading-none", children: value }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: metric })
                    ] })
                  ]
                },
                metric
              ))
            }
          )
        ]
      }
    ) }) }),
    cs.testimonial && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        variants: fadeInUp,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        className: "max-w-3xl mx-auto",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-8 text-center", children: "Client Testimonial" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95, y: 20 },
              whileInView: { opacity: 1, scale: 1, y: 0 },
              viewport: { once: true, margin: "-60px" },
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              className: "bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-sm relative overflow-hidden",
              "data-ocid": "case-study-testimonial",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-6 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "w-24 h-24 text-primary/5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { scale: 0.5, opacity: 0 },
                    whileInView: { scale: 1, opacity: 1 },
                    viewport: { once: true },
                    transition: { duration: 0.5, delay: 0.2 },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "w-10 h-10 text-primary/30 mb-5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.blockquote,
                  {
                    initial: { opacity: 0, y: 10 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.5, delay: 0.3 },
                    className: "text-xl font-body text-foreground leading-relaxed mb-8",
                    children: [
                      "“",
                      cs.testimonial.quote,
                      "”"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    viewport: { once: true },
                    transition: { duration: 0.4, delay: 0.4 },
                    className: "flex items-center gap-4 pt-6 border-t border-border",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-full bg-primary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground font-bold text-base", children: cs.testimonial.author.charAt(0) }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: cs.testimonial.author }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                          cs.testimonial.title,
                          ",",
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: cs.client })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: [1, 2, 3, 4, 5].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          initial: { opacity: 0, scale: 0 },
                          whileInView: { opacity: 1, scale: 1 },
                          viewport: { once: true },
                          transition: {
                            delay: 0.5 + k * 0.08,
                            type: "spring",
                            stiffness: 400
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 text-accent fill-accent" })
                        },
                        k
                      )) }) })
                    ]
                  }
                )
              ]
            }
          )
        ]
      }
    ) }) }),
    related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/20 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: fadeInUp,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          className: "flex items-center justify-between mb-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-heading-md text-foreground", children: [
              "More ",
              cs.industry,
              " Results"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/portfolio",
                className: "text-sm font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-smooth",
                children: [
                  "View all case studies ",
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
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
          children: related.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              variants: staggerItem,
              custom: i,
              whileHover: { y: -6 },
              transition: { type: "spring", stiffness: 300, damping: 20 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio/$id", params: { id: r.slug }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-md transition-smooth h-full flex flex-col", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-44 overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: industryImages[r.industry] ?? "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
                      alt: r.client,
                      className: "w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "accent", size: "sm", children: r.industry }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-widest mb-1", children: r.service }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-foreground mb-2", children: r.client }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2 flex-1", children: r.challenge }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all duration-200", children: [
                    "View Case Study ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                  ] })
                ] })
              ] }) })
            },
            r.id
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
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-display font-bold text-primary-foreground mb-4", children: "Want Results Like These?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 mb-8 max-w-xl mx-auto text-lg", children: "Let's build a strategy tailored to your industry, goals, and budget. Get a free proposal — no strings attached." }),
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
                    "data-ocid": "case-study-cta",
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
                to: "/portfolio",
                className: "inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-foreground/50 text-primary-foreground font-semibold rounded-md transition-smooth hover:bg-primary-foreground/10 text-base",
                "data-ocid": "case-study-back",
                children: "View All Case Studies"
              }
            )
          ] })
        ]
      }
    ) }) })
  ] });
}
export {
  CaseStudyDetail
};
