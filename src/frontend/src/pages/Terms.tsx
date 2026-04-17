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
    id: "agreement",
    title: "1. Agreement to Terms",
    content: [
      "These Terms of Service ('Terms') govern your access to and use of the website and digital marketing services provided by ElevateX Media ('Company', 'we', 'us', or 'our'). By accessing our website or engaging our services, you agree to be bound by these Terms.",
      "If you do not agree to these Terms, please do not use our website or services. We reserve the right to update these Terms at any time. Continued use of our services after changes constitutes acceptance of the revised Terms.",
      "These Terms were last revised on April 1, 2025.",
    ],
  },
  {
    id: "services",
    title: "2. Services",
    content: [
      "ElevateX Media provides digital marketing services including, but not limited to: Search Engine Optimization (SEO), Pay-Per-Click (PPC) advertising management, Social Media Marketing, Content Marketing, Web Design and Development, Email Marketing, and Conversion Rate Optimization.",
      "The specific services, deliverables, timelines, and pricing for each engagement are defined in a separate Service Agreement or Statement of Work (SOW) signed between you and ElevateX Media. In the event of any conflict between these Terms and a signed SOW, the SOW shall prevail.",
      "We reserve the right to refuse service, modify service offerings, or discontinue any service at our sole discretion, with reasonable notice to active clients.",
    ],
  },
  {
    id: "payment",
    title: "3. Payment Terms",
    content: [
      "Fees for our services are set forth in your Service Agreement. Unless otherwise stated, invoices are due within 15 days of issuance. Monthly retainer fees are billed at the beginning of each service month.",
      "Late payments may incur a late fee of 2% per month on the outstanding balance. We reserve the right to suspend services for accounts more than 30 days overdue.",
      "All fees are non-refundable once services have commenced, except as explicitly stated in the Service Agreement. Setup fees and project deposits are non-refundable.",
      "Prices are exclusive of applicable taxes. You are responsible for all applicable taxes in your jurisdiction.",
    ],
  },
  {
    id: "intellectual-property",
    title: "4. Intellectual Property",
    content: [
      "Upon full payment of all fees, all deliverables created by ElevateX Media specifically for your engagement — including website designs, written content, and campaign creative — become your property.",
      "ElevateX Media retains ownership of all proprietary tools, methodologies, templates, frameworks, and pre-existing intellectual property used in delivering services. These are licensed to you for use during the engagement only.",
      "You grant ElevateX Media a non-exclusive, worldwide, royalty-free license to use your trademarks, logos, and brand materials solely for the purpose of delivering the contracted services.",
      "ElevateX Media may reference your company as a client in its marketing materials (including case studies, website, and proposals) unless you request otherwise in writing.",
    ],
  },
  {
    id: "liability",
    title: "5. Limitation of Liability",
    content: [
      "ElevateX Media provides digital marketing services with diligence and expertise, but does not guarantee specific results. Marketing outcomes depend on many factors outside our control, including market conditions, competition, algorithm changes, and client-side resources.",
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, ELEVATEX MEDIA SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, REVENUE, DATA, OR BUSINESS OPPORTUNITIES.",
      "Our total liability for any claim arising out of or relating to the services shall not exceed the total fees paid by you in the three months immediately preceding the claim.",
      "Nothing in these Terms limits liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded by applicable law.",
    ],
  },
  {
    id: "termination",
    title: "6. Termination",
    content: [
      "Either party may terminate the service engagement with 30 days' written notice. Specific notice requirements may be set forth in your Service Agreement.",
      "Upon termination, you remain responsible for all fees incurred up to the effective termination date. Any outstanding invoices become due immediately upon termination.",
      "ElevateX Media may terminate services immediately without notice if you breach these Terms, fail to pay fees, or engage in conduct that is illegal, abusive, or harmful.",
      "Upon termination, we will provide a full handover of all your assets, account access credentials, and campaign documentation within 14 days.",
    ],
  },
  {
    id: "changes",
    title: "7. Changes to Terms",
    content: [
      "We reserve the right to modify these Terms at any time. If changes are material, we will provide at least 14 days' notice before the new terms take effect for existing clients.",
      "Material changes include changes to payment terms, liability provisions, or intellectual property ownership. We will notify active clients of material changes via email.",
      "By continuing to use our services after changes take effect, you accept the revised Terms.",
    ],
  },
  {
    id: "contact",
    title: "8. Contact Information",
    content: [
      "For questions about these Terms of Service, please contact us:",
      "ElevateX Media\nPlot No 622, Street 6, Shabbir Lane\nPeshawar Road, Rawalpindi, Pakistan",
      "Email: info@elevatexmedia.com\nPhone: +92 314 550 3574",
      "Legal correspondence should be sent to the address above, marked 'Attn: Legal Department'.",
    ],
  },
];

export function Terms() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden min-h-[280px] flex items-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-16">
          <Badge variant="accent" size="lg" className="mb-5">
            Legal
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-tight mb-4">
            Terms of Service
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
                <nav className="space-y-1" data-ocid="terms-toc">
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
                <div key={s.id} id={s.id} data-ocid={`terms-section-${s.id}`}>
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
                  to="/privacy"
                  className="text-sm text-primary font-semibold hover:underline"
                  data-ocid="terms-link-privacy"
                >
                  View Privacy Policy →
                </Link>
                <Link
                  to="/contact"
                  className="text-sm text-primary font-semibold hover:underline"
                  data-ocid="terms-link-contact"
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
