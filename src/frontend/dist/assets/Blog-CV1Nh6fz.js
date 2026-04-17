import { r as reactExports, j as jsxRuntimeExports, L as Layout, m as motion, a as Link } from "./index-D06-h7eS.js";
import { B as Badge } from "./Badge-DlTTkVfq.js";
import { S as SectionHeading } from "./SectionHeading-DROvuUGz.js";
import { b as blogPosts, U as User } from "./blog-CWW7317X.js";
import { A as ArrowRight } from "./arrow-right-DEWDOBIA.js";
import { C as Calendar } from "./calendar-Bp1eai6m.js";
import { C as Clock } from "./clock-BwmukiVX.js";
const ALL = "All";
const categories = [
  ALL,
  ...Array.from(new Set(blogPosts.map((p) => p.category)))
];
const categoryImages = {
  SEO: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&q=80",
  PPC: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  "Social Media": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
  "Content Marketing": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80",
  "Web Design": "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80",
  "Email Marketing": "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80",
  Analytics: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
};
function getPostImage(post) {
  return categoryImages[post.category] ?? "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80";
}
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" }
  })
};
function BlogCard({ post, index }) {
  const imgSrc = getPostImage(post);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.article,
    {
      custom: index,
      variants: cardVariants,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-60px" },
      className: "bg-card border border-border rounded-xl overflow-hidden group flex flex-col h-full hover:shadow-xl hover:border-primary/30 transition-all duration-300",
      "data-ocid": "blog-card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-52 overflow-hidden bg-muted flex-shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: imgSrc,
              alt: post.title,
              className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-sm font-bold text-white", children: [
            "Read More ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", size: "sm", children: post.category }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5" }),
              formatDate(post.date)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
              post.readTime
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5" }),
              post.author
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-heading-sm text-foreground mb-2 line-clamp-2 leading-snug group-hover:text-primary transition-colors duration-200", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1 mb-4", children: post.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/blog/$id",
              params: { id: post.id },
              className: "inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all duration-200",
              "data-ocid": "blog-read-more",
              children: [
                "Read More ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function Blog() {
  const [active, setActive] = reactExports.useState(ALL);
  const filtered = active === ALL ? blogPosts : blogPosts.filter((p) => p.category === active);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-primary overflow-hidden min-h-[420px] flex items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.7_0.22_300/0.35),transparent_60%)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.3_0.08_270/0.4),transparent_60%)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: { y: [0, -20, 0], opacity: [0.15, 0.25, 0.15] },
            transition: {
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            },
            className: "absolute top-16 right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: { y: [0, 20, 0], opacity: [0.1, 0.2, 0.1] },
            transition: {
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2
            },
            className: "absolute bottom-8 left-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8 relative z-10 py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "max-w-3xl",
            variants: fadeInUp,
            initial: "hidden",
            animate: "visible",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.5 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "accent", size: "lg", className: "mb-6", children: "Blog" })
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
                  className: "text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-4",
                  children: "Digital Marketing Insights"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.p,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.7, delay: 0.2 },
                  className: "text-xl text-primary-foreground/80 leading-relaxed mb-8",
                  children: "Expert strategies, industry trends, and actionable guides from the ElevateX Media team."
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.35 },
            className: "mt-8 rounded-xl overflow-hidden max-w-2xl relative h-56",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
                  alt: "Digital marketing insights",
                  className: "w-full h-full object-cover"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "flex flex-wrap gap-2 mb-10",
          role: "tablist",
          "aria-label": "Filter by category",
          "data-ocid": "blog-filter",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.button,
            {
              type: "button",
              role: "tab",
              "aria-selected": active === cat,
              onClick: () => setActive(cat),
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.97 },
              className: `px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${active === cat ? "bg-primary text-primary-foreground shadow-md shadow-primary/30" : "bg-muted text-foreground hover:bg-muted/70 border border-border"}`,
              "data-ocid": `blog-filter-tab-${cat.toLowerCase().replace(/\s+/g, "-")}`,
              children: cat
            },
            cat
          ))
        }
      ),
      filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "text-center py-20 text-muted-foreground",
          "data-ocid": "blog-empty",
          children: "No posts in this category yet. Check back soon!"
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: filtered.map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(BlogCard, { post, index: i }, post.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              eyebrow: "Work With Us",
              title: "Ready to Put These Strategies to Work?",
              subtitle: "Our team implements the exact strategies we write about — with proven results for 500+ businesses."
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: { scale: 1.04 }, whileTap: { scale: 0.97 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/contact",
          className: "button-primary inline-flex items-center gap-2 px-8 py-4 text-base",
          "data-ocid": "blog-cta",
          children: [
            "Get a Free Strategy Session ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
          ]
        }
      ) }) })
    ] }) })
  ] });
}
export {
  Blog
};
