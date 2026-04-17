import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

interface Crumb {
  label: string;
  to?: string;
}

interface BreadcrumbNavProps {
  crumbs: Crumb[];
}

export function BreadcrumbNav({ crumbs }: BreadcrumbNavProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1 text-sm text-muted-foreground flex-wrap"
    >
      <Link
        to="/"
        className="flex items-center gap-1 hover:text-primary transition-smooth"
      >
        <Home className="w-3.5 h-3.5" />
        <span className="sr-only">Home</span>
      </Link>
      {crumbs.map((crumb) => (
        <span key={crumb.label} className="flex items-center gap-1">
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          {crumb.to ? (
            <Link
              to={crumb.to}
              className="hover:text-primary transition-smooth"
            >
              {crumb.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
