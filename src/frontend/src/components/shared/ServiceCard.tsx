import { cardHover, fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  FileText,
  Mail,
  MapPin,
  Megaphone,
  Mic,
  Monitor,
  MousePointer,
  Radio,
  RefreshCw,
  Search,
  Settings,
  Share2,
  Shield,
  ShoppingCart,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  MapPin,
  Building2,
  MousePointer,
  Share2,
  Megaphone,
  FileText,
  Mail,
  Monitor,
  RefreshCw,
  TrendingUp,
  ShoppingCart,
  Shield,
  Zap,
  Settings,
  Radio,
  Mic,
  Star,
};

interface ServiceCardProps {
  service: Service;
  variant?: "default" | "compact";
  index?: number;
}

export function ServiceCard({
  service,
  variant = "default",
  index = 0,
}: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Search;

  if (variant === "compact") {
    return (
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        custom={index}
        {...cardHover}
      >
        <Link to="/services/$slug" params={{ slug: service.slug }}>
          <div className="group relative bg-card border border-border rounded-xl p-5 h-full flex flex-col cursor-pointer overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(96,47,247,0.15)]">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
              <Icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-sm text-foreground mb-1 leading-snug">
              {service.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed flex-1 line-clamp-2">
              {service.shortDesc}
            </p>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={index}
      {...cardHover}
    >
      <Link to="/services/$slug" params={{ slug: service.slug }}>
        <div className="group relative bg-card border border-border rounded-xl p-6 h-full flex flex-col cursor-pointer overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_12px_40px_rgba(96,47,247,0.18)]">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/0 transition-all duration-500 pointer-events-none rounded-xl" />

          <motion.div
            className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4 relative z-10"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <Icon className="w-6 h-6 text-primary-foreground" />
          </motion.div>

          <div className="relative z-10">
            <h3 className="font-display font-bold text-base text-foreground mb-2 leading-snug relative inline-block">
              {service.title}
              <span
                className={cn(
                  "absolute -bottom-0.5 left-0 h-[2px] bg-primary rounded-full",
                  "w-0 group-hover:w-full transition-all duration-400 ease-out",
                )}
              />
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1 mt-2">
              {service.shortDesc}
            </p>
          </div>

          <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary relative z-10 overflow-hidden">
            <span className="translate-x-0 group-hover:-translate-x-1 transition-transform duration-200">
              Learn More
            </span>
            <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
