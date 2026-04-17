import { Badge } from "@/components/shared/Badge";
import type { CaseStudy } from "@/types";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ImageOff } from "lucide-react";
import { useState } from "react";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const topResult = caseStudy.results[0];
  const [imgError, setImgError] = useState(false);

  return (
    <Link to="/portfolio/$id" params={{ id: caseStudy.slug }}>
      <article className="group bg-card border border-border rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-smooth h-full flex flex-col cursor-pointer">
        <div className="relative overflow-hidden h-44 bg-muted flex items-center justify-center">
          {imgError ? (
            <div className="absolute inset-0 bg-muted flex items-center justify-center">
              <ImageOff className="w-10 h-10 text-muted-foreground opacity-40" />
            </div>
          ) : (
            <img
              src={caseStudy.image}
              alt={`${caseStudy.client} case study`}
              className="w-full h-full object-cover transition-smooth group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-3 left-3">
            <Badge variant="accent" size="sm">
              {caseStudy.industry}
            </Badge>
          </div>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
            {caseStudy.service}
          </p>
          <h3 className="font-display font-bold text-base text-foreground mb-2 leading-snug">
            {caseStudy.client}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
            {caseStudy.challenge}
          </p>

          {topResult && (
            <div className="mt-4 p-3 bg-primary rounded-lg">
              <p className="text-2xl font-display font-bold text-primary-foreground">
                {topResult.value}
              </p>
              <p className="text-xs text-primary-foreground/80">
                {topResult.metric}
              </p>
            </div>
          )}

          <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary transition-smooth group-hover:gap-2">
            View Case Study <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </article>
    </Link>
  );
}
