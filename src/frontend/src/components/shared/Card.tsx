import { cardHover, scaleIn } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "bordered" | "highlight";
  animated?: boolean;
}

export function Card({
  className,
  variant = "default",
  animated = false,
  ...props
}: CardProps) {
  const variants = {
    default: "bg-card border border-border rounded-xl shadow-xs",
    elevated:
      "bg-card border border-border rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(96,47,247,0.12)]",
    bordered:
      "bg-card border-2 border-border rounded-xl hover:border-primary/50 transition-colors duration-300",
    highlight:
      "bg-card border border-primary/30 rounded-xl shadow-sm ring-1 ring-primary/10 hover:ring-primary/30 hover:shadow-[0_8px_30px_rgba(96,47,247,0.15)] transition-all duration-300",
  };

  if (animated) {
    return (
      <motion.div
        className={cn(variants[variant], className)}
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        {...cardHover}
        {...(props as React.ComponentProps<typeof motion.div>)}
      />
    );
  }

  return <div className={cn(variants[variant], className)} {...props} />;
}

export function CardHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pb-0", className)} {...props} />;
}

export function CardContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-0", className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "font-display font-bold text-lg text-foreground leading-snug",
        className,
      )}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-muted-foreground leading-relaxed", className)}
      {...props}
    />
  );
}
