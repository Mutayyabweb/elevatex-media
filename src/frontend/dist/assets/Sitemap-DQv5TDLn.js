import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Layout, S as Search, a as Link } from "./index-D06-h7eS.js";
import { B as Badge } from "./Badge-DlTTkVfq.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
      key: "169xi5"
    }
  ],
  ["path", { d: "M15 5.764v15", key: "1pn4in" }],
  ["path", { d: "M9 3.236v15", key: "1uimfh" }]
];
const Map = createLucideIcon("map", __iconNode);
const sitemapData = [
  {
    title: "Main Navigation",
    pages: [
      { label: "Home", path: "/" },
      { label: "About Us", path: "/about" },
      { label: "Services", path: "/services" },
      { label: "Portfolio / Case Studies", path: "/portfolio" },
      { label: "Blog", path: "/blog" },
      { label: "Contact", path: "/contact" }
    ]
  },
  {
    title: "Services",
    pages: [
      { label: "SEO Services", path: "/services/seo" },
      { label: "Local SEO", path: "/services/local-seo" },
      { label: "eCommerce SEO", path: "/services/ecommerce-seo" },
      { label: "Technical SEO", path: "/services/technical-seo" },
      { label: "PPC Management", path: "/services/ppc" },
      { label: "Google Ads", path: "/services/google-ads" },
      { label: "Social Media Marketing", path: "/services/social-media" },
      { label: "Content Marketing", path: "/services/content-marketing" },
      { label: "Email Marketing", path: "/services/email-marketing" },
      { label: "Web Design", path: "/services/web-design" },
      { label: "Web Development", path: "/services/web-development" },
      { label: "Conversion Rate Optimization", path: "/services/cro" },
      {
        label: "Reputation Management",
        path: "/services/reputation-management"
      },
      { label: "Video Marketing", path: "/services/video-marketing" },
      { label: "Influencer Marketing", path: "/services/influencer-marketing" }
    ]
  },
  {
    title: "Resources",
    pages: [
      { label: "Resource Library", path: "/resources" },
      { label: "Blog", path: "/blog" },
      { label: "FAQ", path: "/faq" },
      { label: "Pricing", path: "/pricing" },
      { label: "Integrations", path: "/integrations" }
    ]
  },
  {
    title: "Company",
    pages: [
      { label: "About Us", path: "/about" },
      { label: "Team", path: "/team" },
      { label: "Careers", path: "/careers" },
      { label: "Testimonials", path: "/testimonials" },
      { label: "Portfolio", path: "/portfolio" }
    ]
  },
  {
    title: "Client Area",
    pages: [
      { label: "Client Login", path: "/client-login" },
      { label: "Contact Support", path: "/contact" }
    ]
  },
  {
    title: "Legal",
    pages: [
      { label: "Privacy Policy", path: "/privacy" },
      { label: "Terms of Service", path: "/terms" },
      { label: "Sitemap", path: "/sitemap" }
    ]
  }
];
function Sitemap() {
  const [query, setQuery] = reactExports.useState("");
  const allPages = sitemapData.flatMap(
    (s) => s.pages.map((p) => ({ ...p, section: s.title }))
  );
  const filtered = query.trim() ? allPages.filter(
    (p) => p.label.toLowerCase().includes(query.toLowerCase()) || p.path.toLowerCase().includes(query.toLowerCase())
  ) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-primary overflow-hidden min-h-[280px] flex items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-10 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/3 w-80 h-80 bg-accent rounded-full blur-3xl" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8 relative z-10 py-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "accent", size: "lg", className: "mb-5", children: "Navigation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-tight mb-4", children: "Site Map" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-base max-w-xl", children: "A complete overview of every page on the ElevateX Media website, organized by section for easy navigation." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 bg-muted/30 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          value: query,
          onChange: (e) => setQuery(e.target.value),
          placeholder: "Search pages by name or path…",
          "aria-label": "Search pages",
          className: "w-full pl-11 pr-4 py-3 rounded-lg border border-input bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth",
          "data-ocid": "sitemap-search"
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8 max-w-5xl", children: filtered !== null ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-6", children: [
        filtered.length,
        " result",
        filtered.length !== 1 ? "s" : "",
        ' for "',
        query,
        '"'
      ] }),
      filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16", "data-ocid": "sitemap-empty", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Map, { className: "w-10 h-10 text-muted-foreground mx-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No pages match your search." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3", children: filtered.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SitemapLink, { page: p, showSection: true }, p.path)) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12", children: sitemapData.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": `sitemap-section-${section.title.toLowerCase().replace(/\s+/g, "-")}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-heading-sm text-foreground mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-5 bg-primary rounded-full inline-block" }),
            section.title
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: section.pages.map((page) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SitemapLink, { page }) }, page.path)) })
        ]
      },
      section.title
    )) }) }) })
  ] });
}
function SitemapLink({
  page,
  showSection
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: page.path,
      className: "flex items-center gap-2 text-sm text-primary hover:underline hover:text-primary/80 transition-smooth py-0.5 group",
      "data-ocid": `sitemap-link-${page.path.replace(/\//g, "-").replace(/^-/, "")}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-smooth flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 truncate", children: page.label }),
        showSection && page.section && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-auto flex-shrink-0", children: page.section }),
        page.external && /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3 flex-shrink-0" })
      ]
    }
  );
}
export {
  Sitemap
};
