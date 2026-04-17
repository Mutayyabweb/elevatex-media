import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Layout, m as motion, A as AnimatePresence, a as Link } from "./index-D06-h7eS.js";
import { B as Badge } from "./Badge-DlTTkVfq.js";
import { S as SectionHeading } from "./SectionHeading-DROvuUGz.js";
import { S as Star } from "./star-DuBK-hMH.js";
import { A as ArrowRight } from "./arrow-right-DEWDOBIA.js";
import { Z as Zap } from "./zap-CSfWXYxT.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "M5 12h14", key: "1ays0h" }]];
const Minus = createLucideIcon("minus", __iconNode);
const tiers = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: "$1,500",
    annualPrice: "$1,200",
    period: "/ month",
    description: "For small businesses ready to establish a digital presence and start generating consistent leads.",
    highlight: false,
    features: [
      "Up to 2 marketing channels",
      "SEO or PPC (choose one focus)",
      "Monthly strategy call",
      "Full monthly performance report",
      "Dedicated Account Manager",
      "Google Analytics setup",
      "Up to 4 blog posts/month",
      "Email support (1 business day)",
      "Campaign setup included",
      "3-month minimum engagement"
    ],
    cta: "Get Started",
    ctaVariant: "secondary"
  },
  {
    id: "growth",
    name: "Growth",
    monthlyPrice: "$3,000",
    annualPrice: "$2,400",
    period: "/ month",
    description: "For growing businesses that need multi-channel execution and faster, more aggressive results.",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Up to 4 marketing channels",
      "SEO + PPC + Social Media",
      "Bi-weekly strategy calls",
      "Live reporting dashboard",
      "Dedicated Account Manager + Specialists",
      "Advanced conversion tracking",
      "Up to 8 blog posts/month",
      "Priority email & phone support",
      "Landing page design included",
      "CRO audits quarterly"
    ],
    cta: "Get Started",
    ctaVariant: "primary"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    period: "quote",
    description: "For large organizations requiring full-service digital marketing, custom integrations, and executive-level strategy.",
    highlight: false,
    features: [
      "Unlimited marketing channels",
      "Full-service SEO, PPC, Social, Content",
      "Weekly strategy calls + QBRs",
      "Custom real-time dashboard",
      "Dedicated team of 5+ specialists",
      "Custom analytics & attribution",
      "Unlimited content production",
      "24/7 priority support",
      "Custom web development",
      "White-label reporting available"
    ],
    cta: "Request a Quote",
    ctaVariant: "accent"
  }
];
const comparisonRows = [
  {
    feature: "Marketing channels",
    starter: "Up to 2",
    growth: "Up to 4",
    enterprise: "Unlimited"
  },
  {
    feature: "Dedicated Account Manager",
    starter: true,
    growth: true,
    enterprise: true
  },
  {
    feature: "Monthly reporting",
    starter: true,
    growth: true,
    enterprise: true
  },
  {
    feature: "Live reporting dashboard",
    starter: false,
    growth: true,
    enterprise: true
  },
  {
    feature: "Blog content per month",
    starter: "4 posts",
    growth: "8 posts",
    enterprise: "Unlimited"
  },
  {
    feature: "Strategy calls",
    starter: "Monthly",
    growth: "Bi-weekly",
    enterprise: "Weekly"
  },
  {
    feature: "PPC management",
    starter: "Add-on",
    growth: true,
    enterprise: true
  },
  {
    feature: "Landing page design",
    starter: false,
    growth: true,
    enterprise: true
  },
  {
    feature: "CRO audits",
    starter: false,
    growth: "Quarterly",
    enterprise: "Monthly"
  },
  {
    feature: "Custom web development",
    starter: false,
    growth: false,
    enterprise: true
  },
  {
    feature: "White-label reporting",
    starter: false,
    growth: false,
    enterprise: true
  },
  {
    feature: "Support",
    starter: "Email",
    growth: "Email + Phone",
    enterprise: "24/7 Priority"
  }
];
function ComparisonCell({ value }) {
  if (typeof value === "boolean") {
    return value ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-5 h-5 text-primary mx-auto" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-4 h-4 text-muted-foreground mx-auto opacity-40" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground font-medium", children: value });
}
function Pricing() {
  const [annual, setAnnual] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-primary overflow-hidden min-h-[380px] flex items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.7_0.22_300/0.3),transparent_60%)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.3_0.08_270/0.4),transparent_60%)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: { y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] },
            transition: { duration: 8, repeat: Number.POSITIVE_INFINITY },
            className: "absolute top-10 right-16 w-80 h-80 bg-white/10 rounded-full blur-3xl"
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
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "accent", size: "lg", className: "mb-6", children: "Transparent Pricing" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h1,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, delay: 0.1 },
            className: "text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-5",
            children: "Simple, Honest Pricing"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.2 },
            className: "text-xl text-primary-foreground/80 leading-relaxed",
            children: "No hidden fees, no surprise invoices. Choose the plan that fits your goals and budget."
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          eyebrow: "Our Plans",
          title: "Pick the Right Plan for Your Business",
          subtitle: "All plans include a dedicated account manager, monthly reporting, and a 3-month minimum engagement."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "flex items-center justify-center gap-4 mb-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `text-sm font-semibold transition-colors ${!annual ? "text-foreground" : "text-muted-foreground"}`,
                children: "Monthly"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                role: "switch",
                "aria-checked": annual,
                onClick: () => setAnnual((a) => !a),
                className: "relative w-12 h-6 bg-muted rounded-full border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                "data-ocid": "pricing-billing-toggle",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    animate: { x: annual ? 24 : 2 },
                    transition: { type: "spring", stiffness: 300, damping: 25 },
                    className: "absolute top-0.5 w-5 h-5 bg-primary rounded-full shadow-sm"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: `text-sm font-semibold transition-colors ${annual ? "text-foreground" : "text-muted-foreground"}`,
                children: [
                  "Annual ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary text-xs ml-1", children: "Save 20%" })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8 max-w-6xl mx-auto", children: tiers.map((tier, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95, y: 30 },
          whileInView: { opacity: 1, scale: 1, y: 0 },
          viewport: { once: true },
          transition: {
            duration: 0.5,
            delay: i * 0.12,
            ease: [0.22, 1, 0.36, 1]
          },
          className: `relative rounded-2xl border flex flex-col transition-all duration-300 ${tier.highlight ? "border-primary shadow-2xl shadow-primary/20 bg-card ring-2 ring-primary/30" : "border-border bg-card hover:shadow-lg hover:border-primary/30"}`,
          "data-ocid": `pricing-card-${tier.id}`,
          children: [
            tier.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: -10 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.4 },
                className: "absolute -top-4 left-1/2 -translate-x-1/2",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary text-primary-foreground text-xs font-bold rounded-full shadow-lg shadow-primary/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3" }),
                  tier.badge
                ] })
              }
            ),
            tier.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/20 to-transparent pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 flex-1 flex flex-col relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-heading-sm text-foreground mb-1", children: tier.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: -10 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: 10 },
                    transition: { duration: 0.25 },
                    className: "flex items-end gap-1 mb-3",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-display font-bold text-foreground", children: annual ? tier.annualPrice : tier.monthlyPrice }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm mb-1", children: tier.period })
                    ]
                  },
                  annual ? "annual" : "monthly"
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: tier.description })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 mb-8 flex-1", children: tier.features.map((feature, fi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.li,
                {
                  initial: { opacity: 0, x: -10 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.3, delay: fi * 0.05 },
                  className: "flex items-start gap-2.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-primary flex-shrink-0 mt-0.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground leading-snug", children: feature })
                  ]
                },
                feature
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  whileHover: { scale: 1.03 },
                  whileTap: { scale: 0.97 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/contact",
                      className: `w-full text-center inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200 ${tier.ctaVariant === "primary" ? "bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/30" : tier.ctaVariant === "accent" ? "bg-accent text-accent-foreground hover:opacity-90" : "bg-secondary text-secondary-foreground hover:bg-muted border border-border"}`,
                      "data-ocid": `pricing-cta-${tier.id}`,
                      children: [
                        tier.cta,
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                      ]
                    }
                  )
                }
              )
            ] })
          ]
        },
        tier.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          eyebrow: "Feature Comparison",
          title: "See What's Included in Each Plan",
          subtitle: "A side-by-side look at every feature so you can make an informed choice."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto overflow-x-auto rounded-xl border border-border shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[600px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-card border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-6 py-4 text-sm font-semibold text-foreground w-2/5", children: "Feature" }),
          tiers.map((tier) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "th",
            {
              className: `text-center px-6 py-4 text-sm font-semibold w-1/5 ${tier.highlight ? "text-primary" : "text-foreground"}`,
              children: [
                tier.name,
                tier.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 text-xs font-normal text-primary/70", children: "★" })
              ]
            },
            tier.id
          ))
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: comparisonRows.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.tr,
          {
            initial: { opacity: 0, x: -10 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.3, delay: i * 0.04 },
            className: `border-b border-border last:border-0 ${i % 2 === 0 ? "bg-card" : "bg-background"}`,
            "data-ocid": "comparison-row",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-sm text-muted-foreground", children: row.feature }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ComparisonCell, { value: row.starter }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ComparisonCell, { value: row.growth }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ComparisonCell, { value: row.enterprise }) })
            ]
          },
          row.feature
        )) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "w-14 h-14 bg-primary-foreground/15 border border-primary-foreground/30 rounded-2xl flex items-center justify-center mx-auto mb-6",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-7 h-7 text-primary-foreground" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.1 },
          className: "text-4xl font-display font-bold text-primary-foreground mb-4",
          children: "Need a Custom Package?"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg mb-8 leading-relaxed max-w-xl mx-auto", children: "Every business is different. If none of our standard plans fit your needs, tell us your goals and budget — and we'll craft a tailored proposal at no charge." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            whileHover: { scale: 1.04 },
            whileTap: { scale: 0.97 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/contact",
                className: "inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-md font-bold text-base hover:opacity-90 transition-opacity",
                "data-ocid": "pricing-custom-quote",
                children: [
                  "Request a Custom Quote ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "tel:03145503574",
            className: "inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-md font-semibold text-base hover:bg-primary-foreground/10 transition-colors",
            children: "Call Us: 03145503574"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/60 text-sm mt-6", children: "Free strategy session included with every proposal request." })
    ] }) }) })
  ] });
}
export {
  Pricing
};
