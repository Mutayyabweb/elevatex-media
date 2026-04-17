import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/shared/Badge";
import { services } from "@/data/services";
import { useActor } from "@caffeineai/core-infrastructure";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { useState } from "react";
import { createActor } from "../backend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}
interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "03145503574",
    href: "tel:+923145503574",
    color: "bg-primary",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@elevatexmedia.com",
    href: "mailto:info@elevatexmedia.com",
    color: "bg-primary",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Plot No 622, Street 6, Shabbir Lane, Peshawar Road, Rawalpindi",
    href: undefined,
    color: "bg-primary",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri: 9AM–6PM · Sat: 10AM–2PM",
    href: undefined,
    color: "bg-primary",
  },
];

const businessHours = [
  { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM – 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export function Contact() {
  const { actor } = useActor(createActor);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function validate(): boolean {
    const next: FieldErrors = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!EMAIL_REGEX.test(form.email))
      next.email = "Please enter a valid email address.";
    if (!form.message.trim()) next.message = "Message is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FieldErrors])
      setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleBlur(
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name } = e.target;
    const next: FieldErrors = {};
    if (name === "name" && !form.name.trim()) next.name = "Name is required.";
    if (name === "email") {
      if (!form.email.trim()) next.email = "Email is required.";
      else if (!EMAIL_REGEX.test(form.email))
        next.email = "Please enter a valid email address.";
    }
    if (name === "message" && !form.message.trim())
      next.message = "Message is required.";
    setErrors((prev) => ({ ...prev, ...next }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      if (!actor) {
        setSubmitError(
          "Service unavailable. Please try again later or email us directly at info@elevatexmedia.com.",
        );
        return;
      }
      const result = await actor.submitContactForm(
        form.name,
        form.email,
        form.phone,
        form.company,
        form.service,
        form.message,
      );
      if (result.__kind__ === "ok") {
        setSubmitted(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        setSubmitError(
          "Something went wrong. Please try again or email us directly at info@elevatexmedia.com.",
        );
      }
    } catch {
      setSubmitError(
        "Something went wrong. Please try again or email us directly at info@elevatexmedia.com.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden min-h-[420px] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.7_0.22_300/0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.3_0.08_270/0.4),transparent_60%)]" />
          {([Phone, Mail, MapPin] as const).map((Icon, i) => (
            <motion.div
              key={`floating-icon-${Icon.displayName ?? i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.12, 0.2, 0.12], y: [0, -15, 0] }}
              transition={{
                duration: 6 + i * 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 1.2,
              }}
              className="absolute"
              style={{ top: `${20 + i * 25}%`, right: `${8 + i * 12}%` }}
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Icon className="w-6 h-6 text-white/60" />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge variant="accent" size="lg" className="mb-6">
                Contact Us
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-4">
                Let&apos;s Grow Your Business Together
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Tell us about your goals and we will show you exactly how we can
                help. Free consultation, no obligation.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="hidden lg:block rounded-xl overflow-hidden h-64 relative"
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Modern office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/40" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  custom={i}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-5 flex items-start gap-4 hover:shadow-md hover:border-primary/30 transition-all duration-300"
                >
                  <div
                    className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-foreground hover:text-primary transition-colors font-medium break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground leading-snug">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-heading-md text-foreground mb-2">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card border border-border rounded-xl p-8 flex items-start gap-4"
                  data-ocid="contact-success"
                  role="alert"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  >
                    <CheckCircle className="w-8 h-8 text-primary flex-shrink-0" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Your message has been sent! We will get back to you
                      shortly.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                  data-ocid="contact-form"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Full Name{" "}
                        <span className="text-destructive" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Your full name"
                        autoComplete="name"
                        className={`w-full px-4 py-3 rounded-md border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200 ${errors.name ? "border-destructive" : "border-input focus:border-primary"}`}
                        data-ocid="input-name"
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p
                          role="alert"
                          className="mt-1.5 text-xs text-destructive flex items-center gap-1"
                          data-ocid="input-name.field_error"
                        >
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Email Address{" "}
                        <span className="text-destructive" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="you@company.com"
                        autoComplete="email"
                        className={`w-full px-4 py-3 rounded-md border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200 ${errors.email ? "border-destructive" : "border-input focus:border-primary"}`}
                        data-ocid="input-email"
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p
                          role="alert"
                          className="mt-1.5 text-xs text-destructive flex items-center gap-1"
                          data-ocid="input-email.field_error"
                        >
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+92 XXX XXXXXXX"
                        autoComplete="tel"
                        className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all duration-200"
                        data-ocid="input-phone"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        autoComplete="organization"
                        className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all duration-200"
                        data-ocid="input-company"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all duration-200"
                      data-ocid="select-service"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Message{" "}
                      <span className="text-destructive" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={5}
                      placeholder="Tell us about your business, current challenges, and goals..."
                      className={`w-full px-4 py-3 rounded-md border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200 resize-none ${errors.message ? "border-destructive" : "border-input focus:border-primary"}`}
                      data-ocid="input-message"
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p
                        role="alert"
                        className="mt-1.5 text-xs text-destructive flex items-center gap-1"
                        data-ocid="input-message.field_error"
                      >
                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <motion.button
                      type="submit"
                      disabled={submitting}
                      whileHover={{ scale: submitting ? 1 : 1.03 }}
                      whileTap={{ scale: submitting ? 1 : 0.97 }}
                      className="button-primary inline-flex items-center gap-2 px-8 py-3 disabled:opacity-60"
                      data-ocid="submit-contact"
                    >
                      {submitting ? (
                        <>
                          <span
                            className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"
                            data-ocid="submit-contact.loading_state"
                          />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message <Send className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-destructive">*</span> Required. We
                      never share your information.
                    </p>
                  </div>
                  {submitError && (
                    <div
                      className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3"
                      role="alert"
                      data-ocid="contact.error_state"
                    >
                      <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-destructive leading-relaxed">
                        {submitError}
                      </p>
                    </div>
                  )}
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="space-y-5"
            >
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="h-36 relative">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                    alt="Our office"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/50" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-display font-bold text-lg">
                      ElevateX Media
                    </p>
                    <p className="text-white/80 text-xs">
                      Rawalpindi, Pakistan
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-display font-bold text-primary-foreground">
                        MH
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        Mutayyab Hussain
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Founder & CEO
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {contactInfo.slice(0, 3).map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className="flex items-start gap-3"
                        >
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-0.5">
                              {item.label}
                            </p>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="text-sm text-foreground hover:text-primary transition-colors font-medium break-all"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-sm text-foreground leading-snug">
                                {item.value}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold text-foreground text-sm">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-2.5">
                  {businessHours.map((item) => (
                    <div
                      key={item.day}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-muted-foreground">{item.day}</span>
                      <span
                        className={`font-medium ${item.hours === "Closed" ? "text-destructive" : "text-foreground"}`}
                      >
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden bg-primary/5 border border-primary/20 rounded-xl p-6">
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.15, 0.3, 0.15] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -right-4 -top-4 w-24 h-24 bg-primary rounded-full blur-2xl"
                />
                <CheckCircle className="w-7 h-7 text-primary mb-3 relative z-10" />
                <h4 className="font-semibold text-foreground mb-2 text-sm relative z-10">
                  We Respond Within 24 Hours
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed relative z-10">
                  Every inquiry gets a personal response from a real team member
                  — not an automated reply.
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto rounded-xl overflow-hidden border border-border h-64 bg-card relative"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.53_0.22_300/0.08),transparent_70%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-primary/30">
                    <MapPin className="w-7 h-7 text-primary-foreground" />
                  </div>
                </motion.div>
                <p className="text-foreground font-semibold">
                  Plot No 622, Street 6, Shabbir Lane
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Peshawar Road, Rawalpindi, Pakistan
                </p>
                <a
                  href="https://maps.google.com/?q=Peshawar+Road+Rawalpindi+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-4 text-xs text-primary font-medium hover:opacity-80 transition-opacity"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
