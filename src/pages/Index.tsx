import { Link } from "react-router-dom";
import { ArrowRight, Users, TrendingUp, Briefcase, GraduationCap, Building2, Lightbulb, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/Layout";
import heroImg from "@/assets/hero.jpg";

const services = [
  { icon: Users, title: "HR Solutions", desc: "End-to-end people management, talent acquisition and engagement programs." },
  { icon: TrendingUp, title: "Strategy Consulting", desc: "Data-driven strategy to unlock growth and operational excellence." },
  { icon: Briefcase, title: "Advisory Services", desc: "Board-level advisory across governance, risk and transformation." },
  { icon: GraduationCap, title: "Training & Development", desc: "Programs designed to upskill teams and develop future leaders." },
  { icon: Building2, title: "Infrastructure Consulting", desc: "Strategic guidance on infrastructure planning and delivery." },
  { icon: Lightbulb, title: "Innovation Advisory", desc: "Build innovation capability and design future-ready operating models." },
];

const stats = [
  { value: 40, suffix: "+", label: "Years of Experience" },
  { value: 42000, suffix: "+", label: "Professionals Trained" },
  { value: 350, suffix: "+", label: "Client Engagements" },
  { value: 25, suffix: "+", label: "Industries Served" },
];

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
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div aria-hidden className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-primary-glow/20 blur-3xl animate-float-slow" />
        <div aria-hidden className="absolute top-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl animate-float-slower" />
        <div aria-hidden className="absolute bottom-0 left-1/2 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-float-slow" />

        <div className="container-custom relative grid lg:grid-cols-12 gap-12 items-center pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="lg:col-span-7 space-y-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary-dark">
              <Sparkles size={14} className="text-accent" />
              Complete People Solutions Delivered
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-foreground">
              Unlock Your <span className="text-gradient-green">Business Potential</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Expert guidance to drive sustainable growth and transformation — partnering with leaders to build resilient, people-first organizations.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent-grad px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft transition-all hover:shadow-glow-orange hover:scale-[1.04]"
              >
                Start a Conversation
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-white/60 backdrop-blur px-7 py-3.5 text-sm font-semibold text-primary transition-all hover:border-primary hover:bg-white hover:scale-[1.04]"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative animate-scale-in">
            <div className="absolute -inset-6 bg-cta-grad rounded-[2rem] opacity-15 blur-2xl" />
            <img
              src={heroImg}
              alt="Hiteisee consulting team in a strategy meeting"
              width={1536}
              height={1024}
              className="relative rounded-[1.75rem] shadow-elevated border border-white/60"
            />
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-card hidden md:flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-cta-grad flex items-center justify-center text-primary-foreground">
                <TrendingUp size={18} />
              </div>
              <div>
                <div className="font-display text-lg font-semibold text-foreground">98%</div>
                <div className="text-xs text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
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
            {services.map((s, i) => (
              <div
                key={s.title}
                className="reveal group relative bg-card rounded-2xl p-7 border border-border shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1.5 hover:border-primary-glow/50"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-accent/10">
                  <s.icon className="text-primary transition-colors duration-300 group-hover:text-accent" size={26} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <ArrowRight className="absolute top-7 right-7 text-muted-foreground/40 transition-all duration-300 group-hover:text-accent group-hover:translate-x-1" size={18} />
              </div>
            ))}
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
            {stats.map((s, i) => (
              <div key={s.label} className={`reveal text-center px-4 ${i !== 0 ? "lg:border-l lg:border-border" : ""}`} style={{ transitionDelay: `${i * 80}ms` }}>
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
                Ready to transform your business?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Let's design a roadmap built around your people, your strategy, and your future.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-grad px-8 py-4 text-sm font-semibold text-accent-foreground shadow-soft transition-all hover:shadow-glow-orange hover:scale-[1.04]"
              >
                Book a Discovery Call <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
