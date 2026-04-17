import { Card } from "@/components/shared/Card";
import type { Testimonial } from "@/types";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="p-6 h-full flex flex-col">
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: testimonial.rating }, (_, i) => (
          <Star
            key={`star-${testimonial.id}-${i}`}
            className="w-4 h-4 fill-accent text-accent"
          />
        ))}
      </div>

      <blockquote className="text-sm text-foreground leading-relaxed flex-1 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <footer className="mt-5 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
          <span className="text-sm font-bold text-primary-foreground">
            {testimonial.author.charAt(0)}
          </span>
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-sm text-foreground truncate">
            {testimonial.author}
          </p>
          <p className="text-xs text-muted-foreground truncate">
            {testimonial.title}, {testimonial.company}
          </p>
        </div>
      </footer>
    </Card>
  );
}
