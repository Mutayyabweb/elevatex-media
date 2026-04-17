import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Layout, m as motion, b as staggerContainer, d as staggerItem, A as AnimatePresence, f as fadeInUp, a as Link } from "./index-D06-h7eS.js";
import { B as Badge } from "./Badge-DlTTkVfq.js";
import { B as BreadcrumbNav } from "./BreadcrumbNav-aeaQJMb8.js";
import { S as SectionHeading } from "./SectionHeading-DROvuUGz.js";
import { c as caseStudies } from "./caseStudies-BeMBm89e.js";
import { C as ChartColumn } from "./chart-column-CQ7gfXX1.js";
import { T as Target } from "./target-DlNjRVDm.js";
import { U as Users } from "./users-2GspXASm.js";
import { A as Award } from "./award-BmIH9f6X.js";
import { A as ArrowRight } from "./arrow-right-DEWDOBIA.js";
import "./chevron-right-1kC-Y_C-.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83", key: "1bzlo9" }],
  ["line", { x1: "13.5", x2: "6", y1: "13.5", y2: "21", key: "1q0aeu" }],
  ["line", { x1: "18", x2: "21", y1: "12", y2: "15", key: "5mozeu" }],
  [
    "path",
    {
      d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",
      key: "mmje98"
    }
  ],
  ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9", key: "43el77" }]
];
const ImageOff = createLucideIcon("image-off", __iconNode);
const INDUSTRY_TABS = [
  "All",
  "eCommerce",
  "Healthcare",
  "B2B",
  "Local Business",
  "SaaS"
];
const STATS = [
  { icon: ChartColumn, value: "2,400+", label: "Campaigns Launched" },
  { icon: Target, value: "6.8x", label: "Average ROAS" },
  { icon: Users, value: "98%", label: "Client Retention Rate" },
  { icon: Award, value: "50+", label: "Industry Awards" }
];
const industryImages = {
  eCommerce: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  SaaS: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  Healthcare: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
  "Local Business": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  Finance: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
  "Real Estate": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
  Education: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
  B2B: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
};
function getCaseStudyImage(cs) {
  return cs.image && cs.image !== "/assets/images/placeholder.svg" ? cs.image : industryImages[cs.industry] ?? "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80";
}
function EnhancedCaseStudyCard({
  caseStudy,
  index
}) {
  const topResult = caseStudy.results[0];
  const [imgError, setImgError] = reactExports.useState(false);
  const imgSrc = getCaseStudyImage(caseStudy);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      variants: staggerItem,
      custom: index,
      whileHover: { y: -6 },
      transition: { type: "spring", stiffness: 300, damping: 20 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio/$id", params: { id: caseStudy.slug }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group bg-card border border-border rounded-xl overflow-hidden shadow-xs hover:shadow-lg hover:border-primary/30 transition-smooth h-full flex flex-col cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden h-52 bg-muted flex items-center justify-center", children: [
          imgError ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ImageOff, { className: "w-10 h-10 text-muted-foreground opacity-40" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: imgSrc,
              alt: `${caseStudy.client} case study`,
              className: "w-full h-full object-cover transition-all duration-500 group-hover:scale-110",
              onError: () => setImgError(true)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex flex-col justify-end p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "accent", size: "sm", children: caseStudy.industry }),
            topResult && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 10 },
                className: "opacity-0 group-hover:opacity-100 transition-all duration-300 bg-primary rounded-lg px-3 py-1.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-display font-bold text-primary-foreground leading-none", children: topResult.value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-primary-foreground/80", children: topResult.metric })
                ]
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-widest mb-1", children: caseStudy.service }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-foreground mb-2 leading-snug", children: caseStudy.client }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1", children: caseStudy.challenge }),
          topResult && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-3 bg-primary/5 border border-primary/15 rounded-lg group-hover:bg-primary group-hover:border-primary transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-display font-bold text-primary group-hover:text-primary-foreground transition-colors duration-300", children: topResult.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-300", children: topResult.metric })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all duration-200", children: [
            "View Case Study ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] })
        ] })
      ] }) })
    }
  );
}
function Portfolio() {
  const [filter, setFilter] = reactExports.useState("All");
  const filtered = filter === "All" ? caseStudies : caseStudies.filter((c) => c.industry === filter);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-primary py-20 relative overflow-hidden min-h-[400px] flex items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "absolute inset-0 opacity-20 pointer-events-none",
          animate: { backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] },
          transition: {
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear"
          },
          style: {
            backgroundImage: "radial-gradient(ellipse at 20% 40%, oklch(0.7 0.18 270), transparent 50%), radial-gradient(ellipse at 80% 60%, oklch(0.6 0.2 300), transparent 50%)",
            backgroundSize: "200% 200%"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
        {
          src: industryImages.eCommerce,
          x: "72%",
          y: "10%",
          rotate: 6,
          size: "w-28 h-20"
        },
        {
          src: industryImages.Healthcare,
          x: "82%",
          y: "55%",
          rotate: -4,
          size: "w-24 h-16"
        },
        {
          src: industryImages.SaaS,
          x: "62%",
          y: "65%",
          rotate: 3,
          size: "w-20 h-14"
        }
      ].map(({ src, x, y, rotate, size }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: `absolute ${size} rounded-lg overflow-hidden opacity-20 shadow-lg`,
          style: { left: x, top: y },
          animate: { y: [0, -12, 0], rotate: [rotate, rotate + 2, rotate] },
          transition: {
            duration: 5 + i,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.8
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", className: "w-full h-full object-cover" })
        },
        src
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8 relative pb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbNav, { crumbs: [{ label: "Portfolio" }] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 max-w-3xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.4 },
              className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60 mb-3",
              children: "Proven Results"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h1,
            {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              transition: {
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.05
              },
              className: "text-heading-xl text-primary-foreground mb-5 leading-tight",
              children: "Our Client Success Stories"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.15 },
              className: "text-lg text-primary-foreground/80 leading-relaxed max-w-2xl",
              children: "Every number tells a story. Browse our case studies to see how ElevateX Media delivers measurable, lasting growth across industries — from eCommerce to SaaS and beyond."
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-8 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        variants: staggerContainer,
        initial: "hidden",
        animate: "visible",
        className: "grid grid-cols-2 lg:grid-cols-4 gap-8",
        children: STATS.map(({ icon: Icon, value, label }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            variants: staggerItem,
            custom: i,
            className: "flex items-center gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0",
                  whileHover: { scale: 1.1, rotate: 5 },
                  transition: { type: "spring", stiffness: 400, damping: 15 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary-foreground" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-display font-bold text-primary leading-none", children: value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: label })
              ] })
            ]
          },
          label
        ))
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          eyebrow: "Case Studies",
          title: "Results Across Every Industry",
          subtitle: "Filter by industry to find stories most relevant to your business — then imagine what we could do for you."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          variants: staggerContainer,
          initial: "hidden",
          animate: "visible",
          className: "flex flex-wrap gap-2 justify-center mb-12",
          role: "tablist",
          "aria-label": "Filter by industry",
          "data-ocid": "portfolio-filter",
          children: INDUSTRY_TABS.map((tab, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.button,
            {
              type: "button",
              role: "tab",
              "aria-selected": filter === tab,
              onClick: () => setFilter(tab),
              variants: staggerItem,
              custom: i,
              className: [
                "relative px-5 py-2.5 rounded-full text-sm font-semibold transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring overflow-hidden",
                filter === tab ? "bg-primary text-primary-foreground shadow-sm shadow-primary/30" : "bg-card border border-border text-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5"
              ].join(" "),
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.97 },
              "data-ocid": `portfolio-filter-${tab.toLowerCase().replace(/\s+/g, "-")}`,
              children: [
                tab,
                tab !== "All" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1.5 text-xs opacity-60", children: [
                  "(",
                  caseStudies.filter((c) => c.industry === tab).length,
                  ")"
                ] })
              ]
            },
            tab
          ))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -10 },
          transition: { duration: 0.25 },
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
          "data-ocid": "portfolio-grid",
          children: filtered.map((cs, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(EnhancedCaseStudyCard, { caseStudy: cs, index: i }, cs.id))
        },
        filter
      ) }),
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: fadeInUp,
          initial: "hidden",
          animate: "visible",
          className: "text-center py-20 text-muted-foreground",
          "data-ocid": "portfolio-empty",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-medium", children: "No case studies found" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "Try selecting a different industry filter." })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-muted/30 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        variants: staggerContainer,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-60px" },
        className: "grid grid-cols-1 md:grid-cols-3 gap-8 text-center",
        children: [
          {
            step: "01",
            title: "Deep Discovery",
            desc: "We audit your business, competitors, and market to build a data-backed strategy — not guesswork."
          },
          {
            step: "02",
            title: "Execution Excellence",
            desc: "Our specialists execute every campaign with precision, constantly testing and refining for maximum ROI."
          },
          {
            step: "03",
            title: "Transparent Reporting",
            desc: "Every result is tracked and reported — you always know what's working, what we're improving, and why."
          }
        ].map(({ step, title, desc }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            variants: staggerItem,
            custom: i,
            className: "flex flex-col items-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  className: "text-5xl font-display font-bold text-primary/20 mb-3",
                  whileInView: { opacity: [0, 1] },
                  viewport: { once: true },
                  transition: { duration: 0.8, delay: i * 0.15 },
                  children: step
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-heading-sm text-foreground mb-2", children: title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed max-w-xs", children: desc })
            ]
          },
          step
        ))
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        variants: fadeInUp,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-display font-bold text-primary-foreground mb-4", children: "Ready to Be Our Next Success Story?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 mb-8 max-w-xl mx-auto text-lg leading-relaxed", children: "Let's discuss your goals and build a strategy that delivers results like these — starting with a free, no-obligation proposal." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.97 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/contact",
              className: "inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-bold rounded-md transition-smooth hover:opacity-90 text-base",
              "data-ocid": "portfolio-cta",
              children: [
                "Get a Free Proposal ",
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
  Portfolio
};
