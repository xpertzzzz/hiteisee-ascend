import { Link } from "react-router-dom";
import { Check } from "lucide-react";

export type HeroTheme = 'blog' | 'leadership' | 'spiritual' | 'career' | 'training' | 'gallery' | 'corporate';

interface PageHeroProps {
  title: string;
  subtitle: string;
  theme?: HeroTheme;
  showBadge?: boolean;
}

// Light blue themed page hero — no background images, no dark overlays, no animations
export const PageHero = ({
  title,
  subtitle,
  showBadge = true
}: PageHeroProps) => {
  return (
    <section className="relative w-full bg-gradient-to-br from-blue-50 via-sky-50 to-white border-b border-blue-100 py-12 md:py-16 flex flex-col items-center justify-center text-center min-h-[220px]">
      {/* Subtle background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 right-0 w-[300px] h-[300px] rounded-full bg-blue-100/50 blur-[70px]" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-sky-100/50 blur-[60px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 mb-4 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 w-fit mx-auto">
          <Link to="/" className="text-primary/70 hover:text-primary font-semibold text-[9px] uppercase tracking-widest">Home</Link>
          <span className="text-primary/40 cursor-default text-[10px] leading-none mb-0.5">›</span>
          <span className="text-primary font-bold cursor-default text-[9px] uppercase tracking-widest">{title}</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-3 tracking-tight leading-tight">
          {title}
        </h1>

        <div className="w-12 h-[3px] bg-primary rounded-full mb-4 mx-auto" />

        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base font-normal leading-relaxed">
          {subtitle}
        </p>

        {showBadge && (
          <div className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold text-primary bg-primary/8 px-5 py-2 rounded-full border border-primary/20 tracking-[0.2em] uppercase">
            <Check className="w-3 h-3" />
            Complete People Solutions Delivered
          </div>
        )}
      </div>
    </section>
  );
};
