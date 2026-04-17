import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/shared/Button";
import { Link } from "@tanstack/react-router";
import { Home, Search } from "lucide-react";

export function NotFound() {
  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <div className="mb-6 inline-flex w-20 h-20 items-center justify-center rounded-2xl bg-primary">
            <Search className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-heading-xl text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-base text-muted-foreground mb-8 leading-relaxed">
            We couldn&apos;t find the page you&apos;re looking for. It may have
            been moved, renamed, or it might just be a typo. Let&apos;s get you
            back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/">
              <Button variant="primary" size="lg" data-ocid="404-home-btn">
                <Home className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <Link to="/services">
              <Button
                variant="secondary"
                size="lg"
                data-ocid="404-services-btn"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
