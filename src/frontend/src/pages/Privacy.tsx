import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/shared/Badge";
import { Link } from "@tanstack/react-router";

interface PolicySection {
  id: string;
  title: string;
  content: string[];
}

const sections: PolicySection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: [
      "ElevateX Media ('we', 'our', or 'us') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our digital marketing services.",
      "By accessing our website at elevatexmedia.com, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree, please discontinue use of our website and services.",
      "This policy was last updated on April 1, 2025. We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.",
    ],
  },
  {
    id: "information-collect",
    title: "2. Information We Collect",
    content: [
      "We collect several types of information from and about users of our website and services:",
      "Personal Identification Information: Name, email address, phone number, company name, job title, and business address — collected when you fill out our contact or inquiry forms.",
      "Usage Data: IP address, browser type, browser version, pages visited, time and date of visits, time spent on pages, and other diagnostic data. This is collected automatically through cookies and analytics tools.",
      "Communication Data: Records of correspondence when you contact us by email, phone, or contact form.",
      "Marketing Data: Your preferences in receiving marketing communications from us and your communication preferences.",
    ],
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    content: [
      "We use the information we collect for the following purposes:",
      "To provide and manage our digital marketing services to you and your organization.",
      "To respond to your inquiries, requests, and provide customer support.",
      "To send you service-related communications, including campaign reports, strategy updates, and invoices.",
      "To improve our website and services based on user behavior and feedback.",
      "To send marketing communications where you have consented or where we have a legitimate interest in doing so.",
      "To comply with legal obligations and resolve any disputes.",
    ],
  },
  {
    id: "information-sharing",
    title: "4. Information Sharing",
    content: [
      "We do not sell, trade, or rent your personal information to third parties. We may share your data in the following limited circumstances:",
      "Service Providers: We may share data with trusted third-party vendors who assist us in operating our business (e.g., Google Analytics, CRM platforms, email service providers). These parties are contractually required to maintain confidentiality.",
      "Legal Requirements: We may disclose your information if required to do so by law, court order, or governmental authority.",
      "Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.",
      "We will never share your data with advertisers or third-party marketing platforms without your explicit consent.",
    ],
  },
  {
    id: "cookies",
    title: "5. Cookies and Tracking Technologies",
    content: [
      "We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device.",
      "Essential Cookies: Required for the website to function properly. These cannot be disabled.",
      "Analytics Cookies: Help us understand how visitors interact with our website. We use Google Analytics 4 for this purpose. You can opt out via browser settings or the Google Analytics opt-out browser add-on.",
      "Marketing Cookies: Used to track visitors across websites to display relevant ads. These are only set when you have given explicit consent.",
      "You can control cookie preferences through your browser settings. Note that disabling certain cookies may affect the functionality of our website.",
    ],
  },
  {
    id: "data-security",
    title: "6. Data Security",
    content: [
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      "Measures include: SSL/TLS encryption for data in transit, access controls limiting data access to authorized personnel only, regular security assessments, and secure data storage with encryption at rest.",
      "While we take reasonable precautions, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security of your data.",
    ],
  },
  {
    id: "your-rights",
    title: "7. Your Rights",
    content: [
      "Depending on your location, you may have the following rights regarding your personal data:",
      "Right to Access: Request a copy of the personal data we hold about you.",
      "Right to Rectification: Request correction of inaccurate or incomplete data.",
      "Right to Erasure: Request deletion of your personal data in certain circumstances.",
      "Right to Restrict Processing: Request that we limit how we process your data.",
      "Right to Object: Object to the processing of your personal data for direct marketing.",
      "Right to Data Portability: Request that we transfer your data to another organization or directly to you.",
      "To exercise any of these rights, please contact us using the details in Section 8.",
    ],
  },
  {
    id: "contact-us",
    title: "8. Contact Us",
    content: [
      "If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us:",
      "ElevateX Media\nPlot No 622, Street 6, Shabbir Lane\nPeshawar Road, Rawalpindi, Pakistan",
      "Email: info@elevatexmedia.com\nPhone: +92 314 550 3574",
      "We aim to respond to all privacy-related inquiries within 5 business days.",
    ],
  },
];

export function Privacy() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden min-h-[280px] flex items-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-16">
          <Badge variant="accent" size="lg" className="mb-5">
            Legal
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-primary-foreground/80 text-base">
            Last updated: April 1, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
            {/* Sidebar TOC */}
            <aside className="lg:w-56 flex-shrink-0">
              <div className="lg:sticky lg:top-8">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                  Contents
                </p>
                <nav className="space-y-1" data-ocid="privacy-toc">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-sm text-muted-foreground hover:text-primary transition-smooth py-1"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Body */}
            <div className="flex-1 min-w-0 space-y-10">
              {sections.map((s) => (
                <div key={s.id} id={s.id} data-ocid={`privacy-section-${s.id}`}>
                  <h2 className="text-heading-md text-foreground mb-4 pb-2 border-b border-border">
                    {s.title}
                  </h2>
                  <div className="space-y-3">
                    {s.content.map((para) => (
                      <p
                        key={para.slice(0, 40)}
                        className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  to="/terms"
                  className="text-sm text-primary font-semibold hover:underline"
                  data-ocid="privacy-link-terms"
                >
                  View Terms of Service →
                </Link>
                <Link
                  to="/contact"
                  className="text-sm text-primary font-semibold hover:underline"
                  data-ocid="privacy-link-contact"
                >
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
