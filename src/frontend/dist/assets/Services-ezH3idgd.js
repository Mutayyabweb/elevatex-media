import { c as createLucideIcon, r as reactExports, k as servicesByCategory, j as jsxRuntimeExports, L as Layout, m as motion, b as staggerContainer, d as staggerItem, S as Search, T as TrendingUp, A as AnimatePresence, l as fadeInLeft, f as fadeInUp, g as services, a as Link } from "./index-D06-h7eS.js";
import { B as Badge } from "./Badge-DlTTkVfq.js";
import { B as BreadcrumbNav } from "./BreadcrumbNav-aeaQJMb8.js";
import { S as SectionHeading } from "./SectionHeading-DROvuUGz.js";
import { a as Share2, S as ServiceCard } from "./ServiceCard-BAWu1jiO.js";
import { C as ChartColumn } from "./chart-column-CQ7gfXX1.js";
import { Z as Zap } from "./zap-CSfWXYxT.js";
import { A as ArrowRight } from "./arrow-right-DEWDOBIA.js";
import "./chevron-right-1kC-Y_C-.js";
import "./star-DuBK-hMH.js";
import "./shield-BhmTEjrV.js";
import "./monitor-DviW4mMe.js";
import "./file-text-Bs5ZmYz8.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode);
const ALL_KEY = "all";
const categoryTabs = [
  { key: ALL_KEY, label: "All Services", icon: Globe },
  { key: "seo", label: "SEO & Search", icon: Search },
  { key: "social", label: "Social Media", icon: Share2 },
  { key: "content", label: "Content", icon: ChartColumn },
  { key: "web", label: "Web & Design", icon: Zap },
  { key: "optimization", label: "Optimization", icon: TrendingUp },
  { key: "ppc", label: "Paid Ads", icon: ChartColumn },
  { key: "advertising", label: "Programmatic", icon: Globe }
];
const categoryMeta = {
  seo: {
    label: "SEO & Search",
    desc: "Dominate organic search rankings and drive qualified traffic"
  },
  ppc: {
    label: "Paid Advertising",
    desc: "Immediate results with expertly managed paid campaigns"
  },
  social: {
    label: "Social Media",
    desc: "Build community and convert followers into customers"
  },
  content: {
    label: "Content Marketing",
    desc: "Authority-building content that ranks and converts"
  },
  web: {
    label: "Web & Design",
    desc: "Beautiful, high-converting digital experiences"
  },
  optimization: {
    label: "Optimization",
    desc: "Maximize performance, conversions, and ROI"
  },
  advertising: {
    label: "Programmatic",
    desc: "Reach your audience at scale with AI-driven advertising"
  }
};
const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "150%", label: "Avg. Lead Increase" },
  { value: "$2B+", label: "Revenue Generated" },
  { value: "18", label: "Specialized Services" }
];
function Particle({
  x,
  y,
  size,
  delay
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "absolute rounded-full bg-primary-foreground/10 pointer-events-none",
      style: { left: x, top: y, width: size, height: size },
      animate: { y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] },
      transition: {
        duration: 4 + delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay
      }
    }
  );
}
const particles = [
  { id: "p1", x: "5%", y: "20%", size: 80, delay: 0 },
  { id: "p2", x: "15%", y: "70%", size: 50, delay: 1 },
  { id: "p3", x: "75%", y: "15%", size: 100, delay: 0.5 },
  { id: "p4", x: "85%", y: "60%", size: 60, delay: 1.5 },
  { id: "p5", x: "60%", y: "80%", size: 40, delay: 2 },
  { id: "p6", x: "40%", y: "30%", size: 30, delay: 0.8 }
];
function Services() {
  const [activeTab, setActiveTab] = reactExports.useState(ALL_KEY);
  const filteredServices = activeTab === ALL_KEY ? services : servicesByCategory[activeTab] ?? [];
  const groupedByCategory = activeTab === ALL_KEY ? Object.entries(servicesByCategory).filter(([, svcs]) => svcs.length > 0) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-primary py-24 overflow-hidden min-h-[420px] flex items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80",
            alt: "Digital services background",
            className: "w-full h-full object-cover opacity-10"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80" })
      ] }),
      particles.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(Particle, { ...p }, p.id)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbNav, { crumbs: [{ label: "Services" }] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 max-w-3xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: -10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "accent", size: "lg", className: "mb-4", children: "18 Specialized Services" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.h1,
            {
              initial: { opacity: 0, y: 40 },
              animate: { opacity: 1, y: 0 },
              transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1
              },
              className: "text-heading-xl text-primary-foreground mb-5 md:text-5xl",
              children: [
                "Our Digital Marketing",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-80", children: "Services" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.25 },
              className: "text-lg text-primary-foreground/80 leading-relaxed max-w-2xl",
              children: "Leverage our expert strategies and data-powered campaigns to increase leads, revenue, and market share. Every service is built to deliver measurable ROI."
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            variants: staggerContainer,
            initial: "hidden",
            animate: "visible",
            className: "mt-12 grid grid-cols-2 md:grid-cols-4 gap-6",
            children: stats.map(({ value, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                variants: staggerItem,
                className: "text-primary-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-display font-bold mb-1", children: value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-primary-foreground/70", children: label })
                ]
              },
              label
            ))
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border sticky top-0 z-10 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        variants: staggerContainer,
        initial: "hidden",
        animate: "visible",
        className: "flex items-center gap-1 overflow-x-auto py-3 scrollbar-none",
        role: "tablist",
        "aria-label": "Filter services by category",
        children: categoryTabs.map(({ key, label, icon: Icon }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": activeTab === key,
            onClick: () => setActiveTab(key),
            "data-ocid": `services-tab-${key}`,
            variants: staggerItem,
            custom: i,
            className: `flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-smooth shrink-0 relative ${activeTab === key ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/60"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3.5 h-3.5" }),
              label,
              activeTab === key && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  layoutId: "tab-indicator",
                  className: "absolute inset-0 rounded-full bg-primary -z-10",
                  transition: { type: "spring", bounce: 0.2, duration: 0.4 }
                }
              )
            ]
          },
          key
        ))
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        transition: { duration: 0.3 },
        children: groupedByCategory ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: groupedByCategory.map(([catKey, catServices], idx) => {
          const meta = categoryMeta[catKey];
          if (!meta) return null;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "section",
            {
              className: `py-16 ${idx % 2 === 0 ? "bg-background" : "bg-muted/20"} border-b border-border last:border-0`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    variants: fadeInLeft,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: true, margin: "-80px" },
                    className: "flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-widest mb-1.5", children: meta.label }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-heading-md text-foreground", children: meta.desc })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "shrink-0 text-sm text-muted-foreground font-medium", children: [
                        catServices.length,
                        " service",
                        catServices.length !== 1 ? "s" : ""
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5", children: catServices.map((service, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ServiceCard,
                  {
                    service,
                    index: i
                  },
                  service.id
                )) })
              ] })
            },
            catKey
          );
        }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
          activeTab !== ALL_KEY && categoryMeta[activeTab] && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: fadeInUp,
              initial: "hidden",
              animate: "visible",
              className: "mb-10",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-widest mb-1.5", children: categoryMeta[activeTab].label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-heading-md text-foreground", children: categoryMeta[activeTab].desc })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5", children: filteredServices.map((service, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { service, index: i }, service.id)) })
        ] }) })
      },
      activeTab
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 bg-primary relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "absolute inset-0 opacity-20 pointer-events-none",
          animate: { backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] },
          transition: {
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear"
          },
          style: {
            backgroundImage: "radial-gradient(ellipse at 30% 50%, oklch(0.7 0.15 290), transparent 60%), radial-gradient(ellipse at 70% 50%, oklch(0.6 0.2 260), transparent 60%)",
            backgroundSize: "200% 200%"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8 text-center relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: fadeInUp,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-80px" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "accent", size: "md", className: "mb-4", children: "Free Strategy Session" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4", children: "Not Sure Which Services You Need?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 mb-8 max-w-xl mx-auto text-lg", children: "Our strategists will analyze your business and recommend the right mix of services to achieve your goals — at no cost." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.98 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/contact",
                className: "inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-bold rounded-md transition-smooth hover:opacity-90 text-base",
                "data-ocid": "services-cta-proposal",
                children: [
                  "Get a Free Strategy Consultation",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
                ]
              }
            ) })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-muted/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          eyebrow: "Quick Navigation",
          title: "All 18 Services at a Glance",
          subtitle: "Browse the full list of digital marketing services we offer."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          variants: staggerContainer,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-80px" },
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",
          children: services.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: staggerItem, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/services/$slug",
              params: { slug: service.slug },
              className: "flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/40 hover:bg-primary/5 transition-smooth group",
              "data-ocid": `service-list-${service.id}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 text-primary shrink-0 transition-smooth group-hover:translate-x-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: service.title })
              ]
            }
          ) }, service.id))
        }
      )
    ] }) })
  ] });
}
export {
  Services
};
