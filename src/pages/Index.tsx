import { Link } from "react-router-dom";
import { ArrowRight, Users, TrendingUp, Briefcase, GraduationCap, Building2, Lightbulb, Sparkles, ShieldCheck, BarChart3, Network, type LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/Layout";
import { useContent } from "@/lib/content";
import heroImg from "@/assets/hero.jpg";

const ICONS: Record<string, LucideIcon> = {
  Users, TrendingUp, Briefcase, GraduationCap, Building2, Lightbulb, Sparkles, ShieldCheck, BarChart3, Network,
};

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting) {
          const dur = 1600;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / dur);
            setN(Math.floor(value * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <div ref={ref} className="font-display text-5xl md:text-6xl font-semibold text-gradient-green">
      {n.toLocaleString()}{suffix}
    </div>
  );
};

const clientLogos = ["TATA", "INFOSYS", "RELIANCE", "WIPRO", "MAHINDRA", "GODREJ", "BAJAJ", "ADITYA BIRLA"];

const Index = () => {
  const c = useContent();

  return (
    <Layout>
      {/* HERO — full-width background image */}
      <section className="relative -mt-20 min-h-[100vh] flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Hiteisee Consulting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 via-primary/60 to-primary-dark/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
        {/* Floating shapes */}
        <div aria-hidden className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl animate-float-slow" />
        <div aria-hidden className="absolute bottom-10 -right-24 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl animate-float-slower" />

        <div className="container-custom relative pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="max-w-3xl space-y-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary-foreground border-white/30 bg-white/15">
              <Sparkles size={14} className="text-accent-hover" />
              {c.hero.eyebrow}
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-primary-foreground">
              {c.hero.title}{" "}
              <span className="bg-gradient-to-r from-accent-hover to-accent bg-clip-text text-transparent">
                {c.hero.titleAccent}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl leading-relaxed">
              {c.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent-grad px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft transition-all hover:shadow-glow-orange hover:scale-[1.04]"
              >
                {c.hero.primaryCta}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 bg-white/10 backdrop-blur px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-white hover:text-primary hover:scale-[1.04]"
              >
                {c.hero.secondaryCta}
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70 text-xs uppercase tracking-[0.22em] animate-pulse">
          Scroll
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-14 reveal">
            <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold mb-3">What we do</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">Solutions tailored to your ambition</h2>
            <p className="mt-4 text-muted-foreground">Six core practices, one shared mission — to deliver measurable, lasting impact.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.services.map((s, i) => {
              const Icon = ICONS[s.icon] || Sparkles;
              return (
                <div
                  key={i}
                  className="reveal group relative bg-card rounded-2xl p-7 border border-border shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1.5 hover:border-primary-glow/50"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-accent/10">
                    <Icon className="text-primary transition-colors duration-300 group-hover:text-accent" size={26} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <ArrowRight className="absolute top-7 right-7 text-muted-foreground/40 transition-all duration-300 group-hover:text-accent group-hover:translate-x-1" size={18} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLIENTS STRIP */}
      <section className="py-14 bg-secondary/40 border-y border-border overflow-hidden">
        <div className="container-custom mb-8">
          <p className="text-center text-xs uppercase tracking-[0.22em] text-muted-foreground font-semibold">Trusted by leading organizations</p>
        </div>
        <div className="relative">
          <div className="flex gap-16 animate-scroll-x w-max">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div
                key={i}
                className="font-display text-2xl font-semibold tracking-wider text-muted-foreground/60 grayscale transition-all duration-300 hover:text-primary hover:grayscale-0"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {c.stats.map((s, i) => (
              <div key={i} className={`reveal text-center px-4 ${i !== 0 ? "lg:border-l lg:border-border" : ""}`} style={{ transitionDelay: `${i * 80}ms` }}>
                <Counter value={s.value} suffix={s.suffix} />
                <div className="mt-3 text-sm uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-custom">
          <div className="reveal relative overflow-hidden rounded-[2rem] bg-hero border border-border p-10 md:p-16 text-center">
            <div aria-hidden className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary-glow/20 blur-3xl" />
            <div aria-hidden className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground max-w-3xl mx-auto">
                {c.ctaSection.title}
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                {c.ctaSection.subtitle}
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-grad px-8 py-4 text-sm font-semibold text-accent-foreground shadow-soft transition-all hover:shadow-glow-orange hover:scale-[1.04]"
              >
                {c.ctaSection.button} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
