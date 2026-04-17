import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Layout, m as motion, a as Link } from "./index-D06-h7eS.js";
import { B as Badge } from "./Badge-DlTTkVfq.js";
import { S as SectionHeading } from "./SectionHeading-DROvuUGz.js";
import { F as FileText } from "./file-text-Bs5ZmYz8.js";
import { B as BookOpen } from "./book-open-MmRJ3XQV.js";
import { A as ArrowRight } from "./arrow-right-DEWDOBIA.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1", key: "f1a2em" }],
  ["rect", { width: "9", height: "7", x: "3", y: "14", rx: "1", key: "jqznyg" }],
  ["rect", { width: "5", height: "7", x: "16", y: "14", rx: "1", key: "q5h2i8" }]
];
const LayoutTemplate = createLucideIcon("layout-template", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }],
  ["path", { d: "M13 6h8", key: "15sg57" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 18h8", key: "oe0vm4" }]
];
const ListChecks = createLucideIcon("list-checks", __iconNode);
const typeIcons = {
  Guide: BookOpen,
  Template: LayoutTemplate,
  Whitepaper: FileText,
  Checklist: ListChecks
};
const typeColors = {
  Guide: "bg-primary text-primary-foreground",
  Template: "bg-primary/80 text-white",
  Whitepaper: "bg-foreground text-white",
  Checklist: "bg-chart-4/80 text-white"
};
const resourceImages = {
  Guide: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80",
  Template: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
  Whitepaper: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
  Checklist: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&q=80"
};
const resources = [
  {
    id: "seo-complete-guide",
    title: "The Complete SEO Guide for 2025",
    description: "A comprehensive walkthrough of on-page, off-page, and technical SEO strategies proven to drive organic traffic growth.",
    type: "Guide",
    category: "SEO",
    pages: 48,
    image: resourceImages.Guide
  },
  {
    id: "seo-audit-checklist",
    title: "SEO Audit Checklist — 120 Point Inspection",
    description: "Use this checklist to systematically identify technical, on-page, and authority issues across any website.",
    type: "Checklist",
    category: "SEO",
    pages: 12,
    image: resourceImages.Checklist
  },
  {
    id: "local-seo-whitepaper",
    title: "Local SEO: Dominating Your Market in 2025",
    description: "Data-backed research on local search ranking factors, Google Business Profile optimization, and citation building.",
    type: "Whitepaper",
    category: "SEO",
    pages: 32,
    image: resourceImages.Whitepaper
  },
  {
    id: "keyword-research-template",
    title: "Keyword Research & Mapping Template",
    description: "A ready-to-use spreadsheet template for organizing keyword clusters, intent mapping, and content planning.",
    type: "Template",
    category: "SEO",
    pages: 6,
    image: resourceImages.Template
  },
  {
    id: "ppc-launch-guide",
    title: "Google Ads Launch Guide for B2B Companies",
    description: "Step-by-step instructions for setting up high-performing Google Ads campaigns from account structure to conversion tracking.",
    type: "Guide",
    category: "PPC",
    pages: 36,
    image: resourceImages.Guide
  },
  {
    id: "ppc-audit-checklist",
    title: "PPC Account Audit Checklist",
    description: "Identify wasted spend, poor Quality Scores, and missed opportunities with this systematic paid media audit checklist.",
    type: "Checklist",
    category: "PPC",
    pages: 10,
    image: resourceImages.Checklist
  },
  {
    id: "ppc-bid-whitepaper",
    title: "Smart Bidding Strategies: A Performance Marketer's Whitepaper",
    description: "An in-depth look at automated bidding in Google Ads — when to use it, how to configure it, and when to stay manual.",
    type: "Whitepaper",
    category: "PPC",
    pages: 28,
    image: resourceImages.Whitepaper
  },
  {
    id: "web-design-ux-guide",
    title: "UX Best Practices for High-Converting Websites",
    description: "Explore the design principles, layout patterns, and CTA strategies that separate converting websites from beautiful ones.",
    type: "Guide",
    category: "Web Design",
    pages: 42,
    image: resourceImages.Guide
  },
  {
    id: "web-design-brief-template",
    title: "Website Design Brief Template",
    description: "A structured template for capturing project goals, audience, brand guidelines, and technical requirements before any design work begins.",
    type: "Template",
    category: "Web Design",
    pages: 8,
    image: resourceImages.Template
  },
  {
    id: "content-strategy-guide",
    title: "Content Marketing Strategy Playbook",
    description: "Build a content machine that drives SEO, generates leads, and builds brand authority — from strategy to editorial calendar.",
    type: "Guide",
    category: "Content",
    pages: 54,
    image: resourceImages.Guide
  },
  {
    id: "content-calendar-template",
    title: "6-Month Editorial Calendar Template",
    description: "A plug-and-play editorial calendar for planning blog posts, social content, email campaigns, and video across a full quarter.",
    type: "Template",
    category: "Content",
    pages: 4,
    image: resourceImages.Template
  },
  {
    id: "social-media-guide",
    title: "Social Media Marketing Guide: Organic + Paid",
    description: "Everything from profile optimization and content pillars to ad targeting and budget allocation across LinkedIn, Instagram, and X.",
    type: "Guide",
    category: "Social Media",
    pages: 44,
    image: resourceImages.Guide
  },
  {
    id: "social-media-checklist",
    title: "Monthly Social Media Audit Checklist",
    description: "Use this checklist to review your social media accounts, content performance, follower growth, and engagement rates monthly.",
    type: "Checklist",
    category: "Social Media",
    pages: 8,
    image: resourceImages.Checklist
  }
];
const tabs = [
  "All",
  "SEO",
  "PPC",
  "Web Design",
  "Content",
  "Social Media"
];
function Resources() {
  const [active, setActive] = reactExports.useState("All");
  const filtered = active === "All" ? resources : resources.filter((r) => r.category === active);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-primary overflow-hidden min-h-[380px] flex items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.7_0.22_300/0.3),transparent_60%)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.3_0.08_270/0.4),transparent_60%)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: { y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] },
            transition: { duration: 9, repeat: Number.POSITIVE_INFINITY },
            className: "absolute top-16 right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8 relative z-10 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.5 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "accent", size: "lg", className: "mb-6", children: "Free Resources" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h1,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, delay: 0.1 },
            className: "text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-5",
            children: "Marketing Resource Library"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.2 },
            className: "text-xl text-primary-foreground/80 leading-relaxed",
            children: "Download free guides, checklists, templates, and whitepapers built by our team of digital marketing experts to help you grow."
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "flex flex-wrap gap-2 mb-10 relative",
          "data-ocid": "resources-filter",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: tabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.button,
            {
              type: "button",
              onClick: () => setActive(tab),
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.97 },
              className: `relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${active === tab ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/30" : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"}`,
              "data-ocid": `resources-tab-${tab.toLowerCase().replace(/\s+/g, "-")}`,
              children: tab
            },
            tab
          ))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: filtered.map((resource, i) => {
        const Icon = typeIcons[resource.type];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-40px" },
            transition: { duration: 0.5, delay: i % 3 * 0.1 },
            whileHover: { y: -4 },
            className: "bg-card border border-border rounded-xl overflow-hidden flex flex-col hover:shadow-xl hover:border-primary/30 transition-all duration-300 group",
            "data-ocid": `resource-card-${resource.id}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-36 overflow-hidden relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: resource.image,
                    alt: resource.title,
                    className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${typeColors[resource.type]}`,
                    children: resource.type
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground mt-1", children: [
                    resource.pages,
                    " pages · ",
                    resource.category
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-heading-sm text-foreground mb-2 leading-snug group-hover:text-primary transition-colors", children: resource.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed flex-1 mb-4", children: resource.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.button,
                  {
                    type: "button",
                    whileHover: { scale: 1.03 },
                    whileTap: { scale: 0.97 },
                    className: "w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-primary/10 text-primary text-sm font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-200 animate-pulse-subtle",
                    "data-ocid": `resource-download-${resource.id}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                      "Download Free"
                    ]
                  }
                ) })
              ] })
            ]
          },
          resource.id
        );
      }) }),
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-24", "data-ocid": "resources-empty", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-12 h-12 text-muted-foreground mx-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No resources in this category yet. Check back soon!" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "max-w-2xl mx-auto",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-card border border-primary/20 rounded-2xl p-8 text-center overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                animate: { scale: [1, 1.5, 1], opacity: [0.08, 0.15, 0.08] },
                transition: { duration: 4, repeat: Number.POSITIVE_INFINITY },
                className: "absolute -right-8 -top-8 w-40 h-40 bg-primary rounded-full blur-3xl"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                animate: { scale: [1, 1.4, 1], opacity: [0.05, 0.12, 0.05] },
                transition: {
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 1.5
                },
                className: "absolute -left-8 -bottom-8 w-40 h-40 bg-primary rounded-full blur-3xl"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-display font-bold text-foreground mb-2", children: "Get New Resources in Your Inbox" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "We publish new guides and templates every month. Join 5,000+ marketers who get them first." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 max-w-md mx-auto", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "email",
                    placeholder: "you@company.com",
                    className: "flex-1 px-4 py-2.5 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all duration-200 text-sm",
                    "data-ocid": "resources-newsletter-input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.button,
                  {
                    type: "button",
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.97 },
                    className: "px-6 py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-semibold hover:opacity-90 transition-opacity",
                    "data-ocid": "resources-newsletter-submit",
                    children: "Subscribe Free"
                  }
                )
              ] })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center mt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeading,
          {
            eyebrow: "Need Expert Help?",
            title: "Ready to Put These Insights Into Action?",
            subtitle: "Our team can turn these strategies into real campaigns — built and managed to drive measurable revenue growth."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: { scale: 1.04 }, whileTap: { scale: 0.97 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/contact",
            className: "inline-flex items-center gap-2 button-primary",
            "data-ocid": "resources-cta",
            children: [
              "Get a Free Strategy Session ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        ) })
      ] })
    ] }) })
  ] });
}
export {
  Resources
};
