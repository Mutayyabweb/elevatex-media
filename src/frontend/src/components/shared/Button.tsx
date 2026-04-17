import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import { motion } from "motion/react";
import { type ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-smooth disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 overflow-hidden",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:opacity-90 active:opacity-80",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-muted active:opacity-80 border border-border",
        accent:
          "bg-accent text-accent-foreground hover:opacity-90 active:opacity-80",
        outline:
          "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        ghost: "text-foreground hover:bg-muted hover:text-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:opacity-90",
        hero: "bg-primary text-primary-foreground hover:opacity-90 shadow-lg text-base font-bold",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
        xl: "px-10 py-5 text-lg",
        icon: "w-9 h-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const MotionButton = motion.button;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    const isHero = variant === "hero";
    const isPrimary = variant === "primary" || variant === "hero";

    return (
      <MotionButton
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 500, damping: 22 }}
        {...(props as React.ComponentProps<typeof MotionButton>)}
      >
        {/* Shimmer sweep for primary/hero */}
        {isPrimary && (
          <span
            className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
            }}
            aria-hidden="true"
          />
        )}
        {/* Hero pulse ring */}
        {isHero && (
          <span
            className="pointer-events-none absolute inset-0 rounded-md animate-ping opacity-20 bg-primary-foreground"
            style={{ animationDuration: "2.5s" }}
            aria-hidden="true"
          />
        )}
        {children}
      </MotionButton>
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
