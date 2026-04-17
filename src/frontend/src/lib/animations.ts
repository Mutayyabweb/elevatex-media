import type { Variants } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Use named easing that is compatible with motion/react types
const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ─── Motion Variants ──────────────────────────────────────────────────────────

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

export const heroText: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT },
  },
};

export const counterAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

// ─── Interaction Helpers ──────────────────────────────────────────────────────

export const cardHover = {
  whileHover: {
    scale: 1.03,
    y: -4,
    transition: { type: "spring" as const, stiffness: 400, damping: 20 },
  },
};

export const buttonHover = {
  whileHover: {
    scale: 1.04,
    transition: { type: "spring" as const, stiffness: 500, damping: 20 },
  },
  whileTap: {
    scale: 0.97,
    transition: { type: "spring" as const, stiffness: 500, damping: 25 },
  },
};

export const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 0 0 rgba(96,47,247,0)",
      "0 0 0 8px rgba(96,47,247,0.2)",
      "0 0 0 0 rgba(96,47,247,0)",
    ],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut" as const,
    },
  },
};

// ─── Hooks ────────────────────────────────────────────────────────────────────

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export function useCountUp(
  target: number,
  duration = 2000,
  suffix = "",
  triggered = true,
) {
  const [count, setCount] = useState(0);
  const [displayValue, setDisplayValue] = useState(`0${suffix}`);

  useEffect(() => {
    if (!triggered) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3; // ease-out cubic
      const current = Math.floor(eased * target);
      setCount(current);
      setDisplayValue(`${current.toLocaleString()}${suffix}`);
      if (progress < 1) requestAnimationFrame(step);
      else setDisplayValue(`${target.toLocaleString()}${suffix}`);
    };
    requestAnimationFrame(step);
  }, [target, duration, suffix, triggered]);

  return { count, displayValue };
}
