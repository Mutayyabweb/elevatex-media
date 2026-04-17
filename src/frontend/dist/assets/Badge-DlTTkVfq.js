import { j as jsxRuntimeExports, w as cn, aK as cva } from "./index-D06-h7eS.js";
const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full font-semibold transition-smooth",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground border border-border",
        accent: "bg-accent text-accent-foreground",
        success: "bg-chart-4 text-primary-foreground",
        muted: "bg-muted text-foreground border border-border",
        outline: "border border-border text-foreground"
      },
      size: {
        sm: "text-xs px-2 py-0.5",
        md: "text-xs px-3 py-1",
        lg: "text-sm px-4 py-1.5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
function Badge({ className, variant, size, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: cn(badgeVariants({ variant, size }), className),
      ...props
    }
  );
}
export {
  Badge as B
};
