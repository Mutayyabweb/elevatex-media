import { j as jsxRuntimeExports, m as motion, b as staggerContainer, f as fadeInUp, w as cn } from "./index-D06-h7eS.js";
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      ),
      variants: staggerContainer,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-100px" },
      children: [
        eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            variants: fadeInUp,
            className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3",
            children: eyebrow
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h2,
          {
            variants: fadeInUp,
            className: "text-heading-lg text-foreground mb-4 max-w-3xl mx-auto",
            children: title
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: cn(
              "h-[3px] bg-gradient-to-r from-primary to-secondary rounded-full mb-4",
              align === "center" ? "mx-auto" : ""
            ),
            initial: { width: 0 },
            whileInView: { width: 60 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }
          }
        ),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            variants: fadeInUp,
            className: "text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed",
            children: subtitle
          }
        )
      ]
    }
  );
}
export {
  SectionHeading as S
};
