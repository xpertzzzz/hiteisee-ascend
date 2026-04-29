import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Users, TrendingUp, Briefcase, GraduationCap, Building2, Lightbulb, ShieldCheck, BarChart3, Network, ArrowRight } from "lucide-react";

const tabs = ["All", "HR", "Consulting", "Advisory", "Infrastructure"] as const;

const services = [
  { icon: Users, title: "Talent Acquisition", desc: "Find, attract and retain the right people for your strategic priorities.", cat: "HR" },
  { icon: GraduationCap, title: "Leadership Development", desc: "Programs that build the next generation of confident leaders.", cat: "HR" },
  { icon: ShieldCheck, title: "HR Compliance", desc: "Stay aligned with regulations across geographies and industries.", cat: "HR" },
  { icon: TrendingUp, title: "Growth Strategy", desc: "Translate vision into a clear, executable plan for sustainable growth.", cat: "Consulting" },
  { icon: BarChart3, title: "Performance Consulting", desc: "Boost productivity through process redesign and analytics.", cat: "Consulting" },
  { icon: Lightbulb, title: "Innovation Advisory", desc: "Build innovation muscle and design future-ready operating models.", cat: "Consulting" },
  { icon: Briefcase, title: "Board Advisory", desc: "Independent counsel on governance, risk and stakeholder strategy.", cat: "Advisory" },
  { icon: Network, title: "M&A Advisory", desc: "People-focused integration support for mergers and acquisitions.", cat: "Advisory" },
  { icon: Building2, title: "Infrastructure Planning", desc: "Strategic guidance across infrastructure, real estate and facilities.", cat: "Infrastructure" },
];

const Services = () => {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const filtered = tab === "All" ? services : services.filter((s) => s.cat === tab);

  return (
    <Layout>
      <section className="bg-hero">
        <div className="container-custom py-20 md:py-28 text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold mb-3">Services</p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold animate-fade-up">
            Built for the work that <span className="text-gradient-green">moves you forward</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-muted-foreground animate-fade-up">
            A comprehensive suite of advisory and execution services across people, strategy and infrastructure.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2 md:gap-6 mb-12 border-b border-border pb-1">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative px-4 py-3 text-sm transition-all ${
                  tab === t ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
                {tab === t && <span className="absolute left-2 right-2 -bottom-[5px] h-[3px] rounded-full bg-primary" />}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((s, i) => (
              <div
                key={s.title}
                className="reveal group relative bg-card rounded-2xl p-7 border border-border shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1.5 hover:border-primary-glow/50 hover:bg-secondary/40"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center mb-5 transition-all group-hover:bg-accent/10">
                  <s.icon className="text-primary group-hover:text-accent transition-colors" size={26} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  Learn more <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
