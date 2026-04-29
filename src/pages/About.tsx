import { Layout } from "@/components/Layout";
import { Target, Compass, Heart, Award, Quote } from "lucide-react";
import { useContent } from "@/lib/content";
import aboutImg from "@/assets/about.jpg";
import founderImg from "@/assets/founder.jpg";

const About = () => {
  const c = useContent();
  return (
    <Layout>
      {/* HEADER */}
      <section className="bg-hero">
        <div className="container-custom py-20 md:py-28 text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold mb-3 animate-fade-up">About Us</p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-foreground animate-fade-up">
            Four decades of <span className="text-gradient-green">people-first</span> consulting
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-muted-foreground animate-fade-up">
            We help organizations build the capabilities, cultures and leadership needed to thrive through change.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section">
        <div className="container-custom grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <img src={aboutImg} alt="Hiteisee office" width={1280} height={960} loading="lazy" className="rounded-[1.75rem] shadow-elevated border border-border" />
          </div>
          <div className="reveal space-y-5">
            <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">Overview</p>
            <h2 className="font-display text-4xl font-semibold text-foreground">A trusted partner across industries</h2>
            <p className="text-muted-foreground leading-relaxed">
              Hiteisee Consulting was founded with a clear conviction: that great organizations are built by great people. For more than four decades we have helped enterprises across India and beyond redesign their people strategies, transform leadership pipelines and unlock new dimensions of performance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our work spans HR transformation, strategy advisory, leadership development and infrastructure consulting — always anchored by deep expertise and a quiet, principled approach.
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY QUOTE */}
      <section className="py-20">
        <div className="container-custom">
          <div className="reveal max-w-4xl mx-auto bg-cta-grad rounded-[2rem] p-12 md:p-16 text-center shadow-elevated">
            <Quote className="mx-auto text-accent mb-6" size={42} />
            <p className="font-display text-2xl md:text-3xl text-primary-foreground leading-relaxed">
              "We believe consulting is not about giving advice — it is about walking alongside leaders, asking the right questions, and unlocking what is already possible."
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-primary-foreground/80">Our Philosophy</p>
          </div>
        </div>
      </section>

      {/* MISSION VISION VALUES */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Mission", desc: "Empower organizations and people to achieve their highest potential through thoughtful, lasting solutions." },
              { icon: Compass, title: "Vision", desc: "To be the most trusted advisor for people-led transformation across emerging and established markets." },
              { icon: Heart, title: "Values", desc: "Integrity, excellence, empathy and an unwavering commitment to our clients' long-term success." },
            ].map((v, i) => (
              <div key={v.title} className="reveal group bg-card rounded-2xl p-8 border border-border shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 hover:border-primary-glow/50 hover:scale-[1.02]" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="h-14 w-14 rounded-2xl bg-cta-grad flex items-center justify-center mb-5 transition-shadow group-hover:shadow-glow-green">
                  <v.icon className="text-primary-foreground" size={26} />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section bg-soft">
        <div className="container-custom grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 reveal">
            <div className="relative">
              <div className="absolute -inset-4 bg-cta-grad rounded-[2rem] opacity-20 blur-2xl" />
              <img src={founderImg} alt="Founder of Hiteisee Consulting" width={1024} height={1280} loading="lazy" className="relative rounded-[1.75rem] shadow-elevated border border-white/60" />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 reveal">
            <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">Founder</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold inline-block relative group">
              A lifetime devoted to people
              <span className="absolute left-0 -bottom-1 h-1 w-0 bg-accent rounded-full transition-all duration-500 group-hover:w-full" />
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              With over four decades of experience advising boards, CEOs and HR leaders, our founder has shaped the people agenda of some of India's most respected enterprises — and trained more than 42,000 professionals along the way.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {[
                { icon: Award, value: "40+ Years", label: "Industry Experience" },
                { icon: Award, value: "42,000+", label: "Professionals Trained" },
              ].map((h) => (
                <div key={h.label} className="bg-card border border-border rounded-2xl p-5 shadow-soft flex items-center gap-4 transition-all hover:shadow-card hover:border-primary-glow/40">
                  <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center">
                    <h.icon className="text-accent" size={20} />
                  </div>
                  <div>
                    <div className="font-display text-xl font-semibold">{h.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{h.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-secondary/60 border border-border rounded-2xl p-6 mt-2">
              <Quote className="text-primary mb-3" size={22} />
              <p className="text-foreground/90 italic leading-relaxed">
                "Every organization is a story of people. Our job is simply to help that story reach its fullest expression."
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
