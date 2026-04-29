import { Layout } from "@/components/Layout";
import { Mail, Sparkles, Heart, Users, Rocket } from "lucide-react";

const Careers = () => {
  return (
    <Layout>
      <section className="bg-hero">
        <div className="container-custom py-20 md:py-28 text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold mb-3">Careers</p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold animate-fade-up">
            Build a career with <span className="text-gradient-green">meaning</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-muted-foreground animate-fade-up">
            We're always looking for thoughtful, curious people who care deeply about the impact of their work.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none text-center reveal">
            <p className="text-muted-foreground leading-relaxed text-lg">
              At Hiteisee Consulting, you'll work alongside experienced advisors on engagements that genuinely move the needle for clients. We invest in our people through mentorship, learning and a culture that values quiet excellence over noise.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mt-14">
            {[
              { icon: Heart, title: "Purpose-Led Work", desc: "Engagements that create real, lasting impact." },
              { icon: Users, title: "Mentorship Culture", desc: "Learn from leaders with decades of experience." },
              { icon: Rocket, title: "Growth Pathways", desc: "Clear progression and continuous learning." },
            ].map((b, i) => (
              <div key={b.title} className="reveal bg-card rounded-2xl p-6 border border-border shadow-soft text-center" style={{ transitionDelay: `${i * 80}ms` }}>
                <b.icon className="mx-auto text-primary mb-4" size={26} />
                <h3 className="font-display text-lg font-semibold mb-1">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal mt-16 bg-cta-grad rounded-[2rem] p-10 md:p-14 text-center shadow-elevated relative overflow-hidden">
            <Sparkles className="mx-auto text-accent mb-5" size={32} />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground">
              Interested? We'd love to hear from you.
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
              Send us your CV and a short note about what excites you. We respond personally to every application.
            </p>
            <a
              href="mailto:careers@hiteisee.com"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-grad px-8 py-4 text-sm font-semibold text-accent-foreground shadow-soft transition-all hover:shadow-glow-orange hover:scale-[1.04]"
            >
              <Mail size={16} /> Send Application via Email
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
