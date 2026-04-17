import { services } from "@/data/services";
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";
import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

const companyLinks = [
  { to: "/about" as const, label: "About Us" },
  { to: "/team" as const, label: "Our Team" },
  { to: "/careers" as const, label: "Careers" },
  { to: "/portfolio" as const, label: "Portfolio" },
  { to: "/blog" as const, label: "Blog" },
  { to: "/contact" as const, label: "Contact" },
];

const resourceLinks = [
  { to: "/pricing" as const, label: "Pricing" },
  { to: "/faq" as const, label: "FAQ" },
  { to: "/services" as const, label: "All Services" },
];

const legalLinks: { href: string; label: string }[] = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/sitemap", label: "Sitemap" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main footer grid */}
      <motion.div
        className="container mx-auto px-4 lg:px-8 py-14 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Brand column */}
        <motion.div variants={staggerItem} className="lg:col-span-2">
          <motion.div variants={scaleIn}>
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg">
                ElevateX <span className="text-accent">Media</span>
              </span>
            </Link>
          </motion.div>
          <p className="text-sm leading-relaxed opacity-75 mb-4 max-w-xs">
            Results-driven digital marketing that accelerates growth. We combine
            data, strategy, and creativity to deliver measurable ROI.
          </p>
          <p className="text-xs opacity-50 font-medium uppercase tracking-widest mb-5">
            Pakistan&apos;s Premier Digital Agency
          </p>
          {/* Contact quick links */}
          <ul className="space-y-2.5">
            <li className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-accent shrink-0" />
              <a
                href="tel:03145503574"
                className="text-sm opacity-75 hover:opacity-100 hover:text-accent transition-smooth"
              >
                03145503574
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-accent shrink-0" />
              <a
                href="mailto:info@elevatexmedia.com"
                className="text-sm opacity-75 hover:opacity-100 hover:text-accent transition-smooth break-all"
              >
                info@elevatexmedia.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
              <address className="text-sm opacity-75 not-italic leading-snug">
                Plot No 622, Street 6, Shabbir Lane
                <br />
                Peshawar Road, Rawalpindi
              </address>
            </li>
          </ul>

          {/* Newsletter */}
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-widest opacity-60 mb-2">
              Newsletter
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-md text-sm bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 focus:border-primary focus:shadow-[0_0_0_3px_rgba(96,47,247,0.25)]"
              />
              <button
                type="button"
                className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-smooth shrink-0"
              >
                Join
              </button>
            </div>
          </div>
        </motion.div>

        {/* Services column */}
        <motion.div variants={staggerItem}>
          <h3 className="font-display font-semibold text-sm uppercase tracking-widest opacity-60 mb-4">
            Our Services
          </h3>
          <ul className="space-y-2">
            {services.slice(0, 9).map((s) => (
              <li key={s.id}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-sm opacity-75 hover:opacity-100 hover:text-accent transition-smooth"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Company links */}
        <motion.div variants={staggerItem}>
          <h3 className="font-display font-semibold text-sm uppercase tracking-widest opacity-60 mb-4">
            Company
          </h3>
          <ul className="space-y-2 mb-6">
            {companyLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-sm opacity-75 hover:opacity-100 hover:text-accent transition-smooth"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Resources + More Services */}
        <motion.div variants={staggerItem}>
          <h3 className="font-display font-semibold text-sm uppercase tracking-widest opacity-60 mb-4">
            Resources
          </h3>
          <ul className="space-y-2 mb-6">
            {resourceLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-sm opacity-75 hover:opacity-100 hover:text-accent transition-smooth"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="font-display font-semibold text-sm uppercase tracking-widest opacity-60 mb-4">
            More Services
          </h3>
          <ul className="space-y-2">
            {services.slice(9, 14).map((s) => (
              <li key={s.id}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-sm opacity-75 hover:opacity-100 hover:text-accent transition-smooth"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-block px-5 py-2.5 bg-accent text-accent-foreground font-semibold rounded-md text-sm transition-smooth hover:opacity-90"
                data-ocid="footer-cta-proposal"
              >
                Get a Proposal →
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        className="border-t border-primary-foreground/10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-60">
          <p>© {year} ElevateX Media. All rights reserved.</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {legalLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="hover:opacity-100 transition-smooth"
              >
                {label}
              </a>
            ))}
          </div>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 underline transition-smooth"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
