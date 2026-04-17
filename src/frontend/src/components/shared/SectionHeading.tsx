import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {eyebrow && (
        <motion.p
          variants={fadeInUp}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3"
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        variants={fadeInUp}
        className="text-heading-lg text-foreground mb-4 max-w-3xl mx-auto"
      >
        {title}
      </motion.h2>

      {/* Animated gradient underline */}
      <motion.div
        className={cn(
          "h-[3px] bg-gradient-to-r from-primary to-secondary rounded-full mb-4",
          align === "center" ? "mx-auto" : "",
        )}
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
