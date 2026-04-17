import { c as createLucideIcon, n as useParams, r as reactExports, p as notFound, j as jsxRuntimeExports, L as Layout, m as motion, a as Link } from "./index-D06-h7eS.js";
import { B as Badge } from "./Badge-DlTTkVfq.js";
import { B as BreadcrumbNav } from "./BreadcrumbNav-aeaQJMb8.js";
import { b as blogPosts, U as User } from "./blog-CWW7317X.js";
import { u as useScroll, a as useTransform } from "./use-transform-Bb7REnt_.js";
import { C as Calendar } from "./calendar-Bp1eai6m.js";
import { C as Clock } from "./clock-BwmukiVX.js";
import { A as ArrowRight } from "./arrow-right-DEWDOBIA.js";
import "./chevron-right-1kC-Y_C-.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
];
const Bell = createLucideIcon("bell", __iconNode);
const categoryImages = {
  SEO: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&q=80",
  PPC: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  "Social Media": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80",
  "Content Marketing": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80",
  "Web Design": "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80",
  "Email Marketing": "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&q=80",
  Analytics: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
};
function getPostImage(post) {
  return categoryImages[post.category] ?? "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80";
}
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
function renderContent(content) {
  const lines = content.trim().split("\n");
  const elements = [];
  let key = 0;
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("## ")) {
      elements.push(
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h2,
          {
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.5 },
            className: "text-2xl font-display font-bold text-foreground mt-10 mb-4",
            children: line.slice(3)
          },
          key++
        )
      );
    } else if (line.startsWith("- ")) {
      const items = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.ul,
          {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: true },
            transition: { duration: 0.5 },
            className: "list-disc list-inside space-y-1.5 mb-5 text-muted-foreground pl-2",
            children: items.map((item) => {
              const parts = item.split(/\*\*(.*?)\*\*/g);
              return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: parts.map(
                (part, idx) => idx % 2 === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "strong",
                  {
                    className: "text-foreground font-semibold",
                    children: part
                  },
                  `bold-${idx}-${part.slice(0, 8)}`
                ) : part
              ) }, item);
            })
          },
          key++
        )
      );
      continue;
    } else if (line.trim() !== "") {
      const parts = line.split(/\*\*(.*?)\*\*/g);
      const k = key++;
      elements.push(
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 10 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.4 },
            className: "text-muted-foreground leading-relaxed mb-4",
            children: parts.map(
              (part, idx) => idx % 2 === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "strong",
                {
                  className: "text-foreground font-semibold",
                  children: part
                },
                `bold-${idx}-${part.slice(0, 8)}`
              ) : part
            )
          },
          k
        )
      );
    }
    i++;
  }
  return elements;
}
function RelatedCard({ post, index }) {
  const imgSrc = categoryImages[post.category] ?? "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, x: 30 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index * 0.1 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/blog/$id",
          params: { id: post.id },
          className: "group block bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300",
          "data-ocid": "related-post-card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-36 overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: imgSrc,
                alt: post.title,
                className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", size: "sm", className: "mb-2", children: post.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-200", children: post.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1.5 flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                post.readTime
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function BlogPost() {
  const { id } = useParams({ from: "/blog/$id" });
  const post = blogPosts.find((p) => p.id === id);
  const heroRef = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  if (!post) {
    notFound();
    return null;
  }
  const imgSrc = getPostImage(post);
  const related = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3);
  const displayRelated = related.length >= 3 ? related : [
    ...related,
    ...blogPosts.filter((p) => p.id !== post.id && !related.includes(p)).slice(0, 3 - related.length)
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/30 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      BreadcrumbNav,
      {
        crumbs: [{ label: "Blog", to: "/blog" }, { label: post.title }]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: heroRef, className: "relative h-80 lg:h-[480px] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { style: { y }, className: "absolute inset-0 scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: imgSrc,
          alt: post.title,
          className: "w-full h-full object-cover"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 p-8 lg:p-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.5 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", size: "lg", className: "mb-4", children: post.category })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h1,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: {
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1]
            },
            className: "text-3xl lg:text-5xl font-display font-bold text-white leading-tight",
            children: post.title
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: 0.2 },
        className: "max-w-3xl mx-auto flex flex-wrap items-center gap-5 text-sm text-muted-foreground",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 bg-primary rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: post.author })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
            formatDate(post.date)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
            post.readTime
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "max-w-3xl mx-auto", children: [
      renderContent(post.content),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-10 mt-10 border-t border-border flex flex-wrap items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/blog",
            className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors",
            "data-ocid": "back-to-blog",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
              " Back to Blog"
            ]
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
                to: "/contact",
                className: "button-primary inline-flex items-center gap-2 px-6 py-3 text-sm",
                "data-ocid": "blog-post-cta",
                children: [
                  "Get a Free Proposal ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                ]
              }
            )
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "max-w-xl mx-auto text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-block mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                animate: { scale: [1, 1.06, 1], opacity: [0.5, 1, 0.5] },
                transition: { duration: 2.5, repeat: Number.POSITIVE_INFINITY },
                className: "absolute inset-0 rounded-full bg-primary/30 blur-lg"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-6 h-6 text-primary-foreground" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-display font-bold text-foreground mb-2", children: "Get Insights in Your Inbox" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Join 5,000+ marketers who read our weekly digest." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 max-w-sm mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "email",
                placeholder: "you@company.com",
                className: "flex-1 px-4 py-2.5 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm",
                "data-ocid": "newsletter-email-input"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.button,
              {
                type: "button",
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.97 },
                className: "px-5 py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-semibold hover:opacity-90 transition-opacity",
                "data-ocid": "newsletter-submit",
                children: "Subscribe"
              }
            )
          ] })
        ]
      }
    ) }) }),
    displayRelated.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-heading-md text-foreground mb-8",
          children: "Related Articles"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 md:grid-cols-3 gap-5", children: displayRelated.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(RelatedCard, { post: p, index: i }, p.id)) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-3xl font-display font-bold text-primary-foreground mb-4",
          children: "Ready to Apply These Strategies?"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 mb-8 leading-relaxed", children: "Our team implements these exact strategies for businesses like yours. Let's talk about your goals." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: { scale: 1.04 }, whileTap: { scale: 0.97 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/contact",
          className: "inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-md font-bold text-base hover:opacity-90 transition-opacity",
          "data-ocid": "blogpost-bottom-cta",
          children: [
            "Start a Conversation ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
          ]
        }
      ) })
    ] }) }) })
  ] });
}
export {
  BlogPost
};
