import { services } from "@/data/services";
import { fadeInLeft, staggerContainer, staggerItem } from "@/lib/animations";
import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Menu, TrendingUp, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const serviceGroups = [
  {
    label: "SEO",
    items: services.filter((s) => s.category === "seo").slice(0, 4),
  },
  {
    label: "Advertising",
    items: services.filter(
      (s) => s.category === "ppc" || s.category === "advertising",
    ),
  },
  {
    label: "Social & Content",
    items: services.filter(
      (s) => s.category === "social" || s.category === "content",
    ),
  },
  {
    label: "Web & Optimization",
    items: services
      .filter((s) => s.category === "web" || s.category === "optimization")
      .slice(0, 5),
  },
];

const companyLinks = [
  { to: "/about" as const, label: "About Us" },
  { to: "/team" as const, label: "Our Team" },
  { to: "/careers" as const, label: "Careers" },
  { to: "/portfolio" as const, label: "Portfolio" },
  { to: "/blog" as const, label: "Blog" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const companyDropdownRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  // biome-ignore lint/correctness/useExhaustiveDependencies: close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setCompanyOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
      if (
        companyDropdownRef.current &&
        !companyDropdownRef.current.contains(e.target as Node)
      ) {
        setCompanyOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(`${path}/`);

  const isCompanyActive =
    isActive("/about") ||
    isActive("/team") ||
    isActive("/careers") ||
    isActive("/blog");

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg shadow-primary/5"
          : "bg-card shadow-sm"
      }`}
      data-ocid="main-nav"
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <motion.div variants={fadeInLeft} initial="hidden" animate="visible">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              className="w-8 h-8 bg-primary rounded-md flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <TrendingUp className="w-5 h-5 text-primary-foreground" />
            </motion.div>
            <span className="font-display font-bold text-lg text-foreground">
              ElevateX <span className="text-primary">Media</span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Services dropdown */}
          <motion.div
            variants={staggerItem}
            className="relative"
            ref={dropdownRef}
          >
            <button
              type="button"
              onClick={() => {
                setServicesOpen((o) => !o);
                setCompanyOpen(false);
              }}
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-smooth ${
                isActive("/services")
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-muted"
              }`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              data-ocid="nav-services-trigger"
            >
              Services{" "}
              <motion.span
                animate={{ rotate: servicesOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                style={{ display: "flex" }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.span>
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] bg-card border border-border rounded-xl shadow-2xl shadow-primary/10 p-6 grid grid-cols-2 gap-6"
                  initial={{ opacity: 0, scale: 0.95, y: -8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -8 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: "top center" }}
                >
                  {serviceGroups.map((group) => (
                    <div key={group.label}>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                        {group.label}
                      </p>
                      <ul className="space-y-1">
                        {group.items.map((s) => (
                          <li key={s.id}>
                            <Link
                              to="/services/$slug"
                              params={{ slug: s.slug }}
                              className="block px-2 py-1.5 text-sm text-foreground rounded-md transition-smooth hover:bg-primary/5 hover:text-primary"
                            >
                              {s.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="col-span-2 pt-4 border-t border-border">
                    <Link
                      to="/services"
                      className="text-sm font-semibold text-primary hover:underline"
                    >
                      View all services →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Company dropdown */}
          <motion.div
            variants={staggerItem}
            className="relative"
            ref={companyDropdownRef}
          >
            <button
              type="button"
              onClick={() => {
                setCompanyOpen((o) => !o);
                setServicesOpen(false);
              }}
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-smooth ${
                isCompanyActive
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-muted"
              }`}
              aria-expanded={companyOpen}
              aria-haspopup="true"
              data-ocid="nav-company-trigger"
            >
              Company{" "}
              <motion.span
                animate={{ rotate: companyOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                style={{ display: "flex" }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.span>
            </button>

            <AnimatePresence>
              {companyOpen && (
                <motion.div
                  className="absolute top-full left-0 mt-2 w-52 bg-card border border-border rounded-xl shadow-2xl shadow-primary/10 py-2"
                  initial={{ opacity: 0, scale: 0.95, y: -8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -8 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: "top left" }}
                >
                  {companyLinks.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`block px-4 py-2.5 text-sm transition-smooth ${
                        isActive(item.to)
                          ? "text-primary bg-primary/5 font-medium"
                          : "text-foreground hover:bg-muted hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {[
            { to: "/portfolio" as const, label: "Portfolio" },
            { to: "/pricing" as const, label: "Pricing" },
            { to: "/contact" as const, label: "Contact" },
          ].map(({ to, label }) => (
            <motion.div key={to} variants={staggerItem}>
              <Link
                to={to}
                className={`relative px-3 py-2 text-sm font-medium rounded-md transition-smooth ${
                  isActive(to)
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-muted"
                }`}
                data-ocid={`nav-${label.toLowerCase()}`}
              >
                {label}
                {isActive(to) && (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute -bottom-px left-2 right-2 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* CTA */}
        <motion.div
          className="hidden md:flex items-center gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 500, damping: 22 }}
            className="relative"
          >
            <Link
              to="/contact"
              className="button-primary text-sm relative overflow-hidden group"
              data-ocid="nav-cta-proposal"
            >
              <span className="relative z-10">Get a Proposal</span>
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
                }}
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-smooth"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          data-ocid="nav-mobile-toggle"
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                style={{ display: "flex" }}
              >
                <X className="w-5 h-5" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                style={{ display: "flex" }}
              >
                <Menu className="w-5 h-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-card border-t border-border px-4 pb-6 pt-2"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="mb-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest px-2 py-2">
                Services
              </p>
              {services.slice(0, 8).map((s) => (
                <Link
                  key={s.id}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="block px-2 py-2 text-sm text-foreground hover:text-primary transition-smooth"
                >
                  {s.title}
                </Link>
              ))}
              <Link
                to="/services"
                className="block px-2 py-2 text-sm font-semibold text-primary"
              >
                View all services →
              </Link>
            </div>

            <div className="mb-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest px-2 py-2">
                Company
              </p>
              {companyLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="block px-2 py-2 text-sm text-foreground hover:text-primary transition-smooth"
                >
                  {label}
                </Link>
              ))}
            </div>

            {[
              { to: "/portfolio" as const, label: "Portfolio" },
              { to: "/pricing" as const, label: "Pricing" },
              { to: "/contact" as const, label: "Contact" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="block px-2 py-3 text-sm font-medium text-foreground hover:text-primary border-t border-border transition-smooth"
              >
                {label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <Link
                to="/contact"
                className="button-primary w-full text-center block text-sm"
              >
                Get a Proposal
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
