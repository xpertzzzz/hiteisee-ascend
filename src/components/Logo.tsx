import { Link } from "react-router-dom";

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`flex items-center gap-2.5 group ${className}`}>
    <div className="relative h-10 w-10 rounded-xl bg-cta-grad shadow-soft flex items-center justify-center transition-transform group-hover:scale-105">
      <span className="font-display text-xl font-semibold text-primary-foreground">H</span>
      <span className="absolute -right-0.5 -bottom-0.5 h-2.5 w-2.5 rounded-full bg-accent shadow-glow-orange" />
    </div>
    <div className="leading-tight">
      <div className="font-display text-lg font-semibold text-foreground">Hiteisee</div>
      <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Consulting</div>
    </div>
  </Link>
);
