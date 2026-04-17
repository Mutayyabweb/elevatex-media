import { c as createLucideIcon, j as jsxRuntimeExports, L as Layout, m as motion, a as Link } from "./index-D06-h7eS.js";
import { B as Badge } from "./Badge-DlTTkVfq.js";
import { S as SectionHeading } from "./SectionHeading-DROvuUGz.js";
import { T as Target } from "./target-DlNjRVDm.js";
import { S as Shield } from "./shield-BhmTEjrV.js";
import { L as Lightbulb } from "./lightbulb-C0rqXvQa.js";
import { U as Users } from "./users-2GspXASm.js";
import { H as Heart } from "./heart-BYJ4op7m.js";
import { Z as Zap } from "./zap-CSfWXYxT.js";
import { A as ArrowRight } from "./arrow-right-DEWDOBIA.js";
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
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode);
const headshots = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  "https://images.unsplash.com/photo-1494790108755-2616b9e0b38a?w=400&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80"
];
const leadership = [
  {
    name: "Mutayyab Hussain",
    title: "Chief Executive Officer",
    initials: "MH",
    department: "Leadership",
    bio: "Mutayyab founded ElevateX Media with a mission to make enterprise-grade digital marketing accessible to ambitious businesses. He brings 10+ years of experience in growth strategy, SEO, and digital transformation across Pakistan and international markets."
  },
  {
    name: "Ayesha Raza",
    title: "Chief Operating Officer",
    initials: "AR",
    department: "Leadership",
    bio: "Ayesha oversees all day-to-day operations, client delivery, and team performance at ElevateX Media. She is the architect of our systems and processes, ensuring every client engagement runs smoothly from onboarding to reporting."
  },
  {
    name: "Zara Qureshi",
    title: "Chief Marketing Officer",
    initials: "ZQ",
    department: "Leadership",
    bio: "Zara leads brand strategy, demand generation, and growth marketing for ElevateX Media itself. With a background in B2B SaaS and performance marketing, she's obsessed with creating campaigns that generate measurable pipeline."
  },
  {
    name: "Hassan Baig",
    title: "Chief Technology Officer",
    initials: "HB",
    department: "Leadership",
    bio: "Hassan heads our web development practice and internal tech stack. He specializes in high-performance web architecture, Core Web Vitals optimization, and custom analytics infrastructure that powers our data-driven approach."
  },
  {
    name: "Sara Ahmed",
    title: "VP of SEO",
    initials: "SA",
    department: "SEO",
    bio: "Sara leads our SEO practice spanning Technical, Local, eCommerce, and Enterprise SEO disciplines. She has driven millions in organic revenue for clients across competitive verticals."
  },
  {
    name: "Omar Siddiqui",
    title: "VP of Web Design",
    initials: "OS",
    department: "Design",
    bio: "Omar directs all design and UX work at ElevateX Media. His team creates conversion-focused websites that marry visual excellence with performance — every design decision is backed by user research and A/B testing data."
  },
  {
    name: "Fatima Malik",
    title: "VP of Content",
    initials: "FM",
    department: "Content",
    bio: "Fatima leads our content strategy and production team, overseeing everything from SEO content and thought leadership to email campaigns and social copy."
  },
  {
    name: "Ali Khan",
    title: "Account Director",
    initials: "AK",
    department: "Client Success",
    bio: "Ali oversees our client success and account management teams, ensuring every client gets the attention, communication, and results they deserve. He has personally managed over 200 client relationships across multiple industries."
  }
];
const values = [
  {
    icon: Target,
    title: "Results-Obsessed",
    description: "We define success by your KPIs, not our activity metrics."
  },
  {
    icon: Shield,
    title: "Radically Transparent",
    description: "Full visibility into what we do, why, and what it delivers."
  },
  {
    icon: Lightbulb,
    title: "Curious by Default",
    description: "We question assumptions and test ideas relentlessly."
  },
  {
    icon: Users,
    title: "Team First",
    description: "We win together. Every specialist contributes to client success."
  },
  {
    icon: Heart,
    title: "Genuinely Caring",
    description: "We invest in understanding your business as if it were our own."
  },
  {
    icon: Zap,
    title: "Bias for Action",
    description: "We move fast, iterate quickly, and never wait for perfect."
  }
];
function Team() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-primary overflow-hidden min-h-[480px] flex items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
            alt: "Our team",
            className: "w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.7_0.22_300/0.2),transparent_60%)]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8 relative z-10 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.5 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "accent", size: "lg", className: "mb-6", children: "Our Team" })
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
            className: "text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-5",
            children: "The People Behind Your Results"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.2 },
            className: "text-xl text-primary-foreground/80 leading-relaxed",
            children: "Our leadership team brings decades of combined experience in digital marketing, technology, and client success — united by a shared mission to drive measurable growth."
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              eyebrow: "Leadership",
              title: "Meet Our Leadership Team",
              subtitle: "Experienced leaders who set the strategy, build the culture, and deliver the results our clients depend on."
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto", children: leadership.map((member, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-40px" },
          transition: {
            duration: 0.5,
            delay: i % 4 * 0.1,
            ease: [0.22, 1, 0.36, 1]
          },
          className: "bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/30 hover:shadow-xl transition-all duration-300",
          "data-ocid": "team-member-card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-52 overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: headshots[i % headshots.length],
                  alt: member.name,
                  className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { y: "100%" },
                  className: "absolute bottom-0 inset-x-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "https://linkedin.com",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/40 transition-colors",
                      "aria-label": `${member.name} on LinkedIn`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "w-4 h-4 text-white" })
                    }
                  ) })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 bg-primary/80 text-primary-foreground text-xs font-medium rounded-full backdrop-blur-sm", children: member.department }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-heading-sm text-foreground mb-0.5", children: member.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-wide mb-3", children: member.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed line-clamp-4", children: member.bio })
            ] })
          ]
        },
        member.name
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          className: "text-center text-muted-foreground mt-10 text-sm",
          children: "Plus 25+ specialists across SEO, PPC, content, social media, design, development, and analytics."
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              eyebrow: "Our Culture",
              title: "The Values That Drive Everything We Do",
              subtitle: "These aren't posters on a wall — they're the operating principles our team lives by every day."
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto", children: values.map((value, i) => {
        const Icon = value.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: i % 3 * 0.1 },
            whileHover: { y: -4 },
            className: "bg-card border border-border rounded-xl p-6 flex items-start gap-4 hover:shadow-md hover:border-primary/30 transition-all duration-300",
            "data-ocid": "team-value",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  whileHover: { rotate: 10, scale: 1.1 },
                  className: "w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary-foreground" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-1", children: value.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: value.description })
              ] })
            ]
          },
          value.title
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 lg:px-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-4xl font-display font-bold text-primary-foreground mb-4",
          children: "Want to Work With This Team?"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.1 },
          className: "text-primary-foreground/80 text-lg mb-8 leading-relaxed",
          children: "We're growing and always looking for talented people who share our values. Explore open positions or reach out to start a conversation."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            whileHover: { scale: 1.04 },
            whileTap: { scale: 0.97 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/careers",
                className: "inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-md font-bold text-base hover:opacity-90 transition-opacity",
                "data-ocid": "team-cta-careers",
                children: [
                  "View Open Positions ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            whileHover: { scale: 1.04 },
            whileTap: { scale: 0.97 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/contact",
                className: "inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-md font-semibold text-base hover:bg-primary-foreground/10 transition-colors",
                "data-ocid": "team-cta-contact",
                children: "Get in Touch"
              }
            )
          }
        )
      ] })
    ] }) }) })
  ] });
}
export {
  Team
};
