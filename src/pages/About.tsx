import { PageHero } from "@/components/shared/PageHero";
import {
  Heart,
  Eye,
  Star,
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  BookOpen,
  Mic,
  Sparkles,
  Quote,
  GraduationCap,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";

// ─── Stats Data ───────────────────────────────────────────────────────────────

const stats = [
  { value: "44+", label: "Years Experience", icon: Award },
  { value: "52k+", label: "Professionals Trained", icon: Users },
  { value: "200+", label: "Students Guided", icon: GraduationCap },
  { value: "40k+", label: "Workforce Managed", icon: Building2 },
];

const founderBadges = [
  { label: "People Management Expert", icon: Users },
  { label: "Spiritual Scientist", icon: Sparkles },
  { label: "Professional Trainer", icon: GraduationCap },
  { label: "Mentor & Author", icon: BookOpen },
];

const values = [
  { text: "Trust of Customers", icon: ShieldCheck },
  { text: "Absolute Confidentiality", icon: ShieldCheck },
  { text: "Quality of Service", icon: ShieldCheck },
  { text: "Corporate Ethics", icon: ShieldCheck },
];

// ─── About Page ───────────────────────────────────────────────────────────────

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="About Us"
        subtitle="A boutique consulting firm dedicated to improving competitiveness and creating sustainable advantage in both local and global markets."
      />

      {/* ── Overview with Split Layout ──────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left — Founder Profile (Compact & Circular) */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-48 h-48 md:w-56 md:h-56 mb-8">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-[1.05]" />
                <div className="absolute inset-0 rounded-full border border-primary/10 scale-[1.1]" />
                
                {/* Circular Image */}
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10 bg-blue-50">
                  <img
                    src="/founder/image.png"
                    alt="Dr. Suvendu Das"
                    className="w-full h-full object-cover object-top scale-110"
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full shadow-lg border border-blue-100 p-3 z-20">
                  <Award className="w-6 h-6 text-primary" />
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-heading font-black text-foreground mb-1 tracking-tight">
                Dr. Suvendu Das
              </h2>
              <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
                Founder & Managing Director
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {founderBadges.map((badge, i) => (
                  <div key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10">
                    <badge.icon className="w-3 h-3 text-primary/70" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary/80">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="w-full sm:w-auto">
                <button className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-full font-bold tracking-widest text-xs uppercase bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/15 transition-all hover:-translate-y-0.5 w-full">
                  Connect with Dr. Das
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* Right — Bio & Stats (Creative & Concise) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary/80">The Visionary</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground tracking-tight mb-6 leading-tight">
                About Hiteisee Consulting
              </h3>
              
              <div className="relative mb-10">
                <Quote className="w-12 h-12 text-primary/10 absolute -top-4 -left-4" />
                <p className="text-lg text-foreground/80 font-light leading-relaxed relative z-10">
                  Hiteisee Consulting is an independent, India-based management consulting and advisory firm headquartered in Bhubaneswar, with presence in New Delhi and Mumbai, founded by Dr. Suvendu Das.
                  <br/><br/>
                  We partner with organisations, professionals and institutions to create measurable value through HR & People Strategy, Industrial Relations, Learning & Development, Organisational Transformation, Research, Advisory and Outsourced Shared Services. Our solutions span the complete people and organisational lifecycle—from building future-ready talent and strengthening leadership capability to enhancing employee effectiveness and institutional excellence.
                  <br/><br/>
                  Backed by a curated network of seasoned professionals with diverse industry expertise, Hiteisee Consulting brings global best practices, contextual insights and customised solutions to organisations across PSUs, joint ventures, private enterprises, MSMEs and educational institutions.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 mt-8">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary/80">The Visionary</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground tracking-tight mb-6 leading-tight">
                Empowering People.<br/>
                <span className="text-primary">Transforming Organizations.</span>
              </h3>
              
              <div className="relative mb-10">
                <Quote className="w-12 h-12 text-primary/10 absolute -top-4 -left-4" />
                <p className="text-lg text-foreground/80 font-light leading-relaxed relative z-10">
                  Dr. Suvendu Das is a distinguished People Management Expert, Management Consultant, Professional Trainer, Inspirational Speaker, Mentor and Author, and Founder & Managing Director of Hiteisee Consulting. With over 44 years of corporate experience, he has held senior HR leadership positions in SAIL, PPL.
                  <br/><br/>
                  His expertise spans People Strategy, HR, IR, ER, OD, Leadership, L&D, Talent Management, CSR, Corporate Communications and Organisational Change across large and mega organisations.
                  <br/><br/>
                  He has trained 52,400+ professionals and is advising organisations on people capability, organisational effectiveness and sustainable performance across diverse PSUs, JVs, private enterprises, MSMEs and institutions pan India.
                  <br/><br/>
                  An alumnus of the University of Delhi and IISWBM, Kolkata, he is also a Professor of Practise, accomplished corporate educator and empanelled resource person with TISS, Mumbai, NPC, leading management and professional institutions.
                  <br/><br/>
                  Dr. Das is a respected professional forum speaker, practitioner committed to transforming people, strengthening organisations and creating sustainable value.
                </p>
              </div>

              {/* Stats grid (Compact) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-white border border-blue-100 rounded-xl p-4 text-center hover:shadow-sm hover:border-primary/20 transition-all">
                    <div className="text-2xl font-heading font-black text-foreground mb-1">
                      {stat.value}
                    </div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-primary">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The 3H Framework ─────────────────────────────────────────── */}
      <section className="py-16 bg-blue-50/50 border-t border-blue-100">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "Our Mission",
                content: (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To become one of the most trusted and effective consulting brands internationally—delivering measurable value, meaningful transformation and qualitative difference to organisations and people.
                  </p>
                ),
              },
              {
                icon: Eye,
                title: "Our Vision",
                content: (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To help individuals and organisations heal their pain areas, create meaningful transformation, achieve holistic well-being and deliver lasting happiness.
                  </p>
                ),
              },
              {
                icon: Star,
                title: "Our Values",
                content: (
                  <ul className="space-y-2">
                    {values.map((v, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {v.text}
                      </li>
                    ))}
                  </ul>
                ),
              },
            ].map((card, i) => (
              <div key={i} className="bg-white border border-blue-100 p-8 rounded-2xl hover:shadow-sm transition-all group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                  <card.icon className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-lg text-foreground mb-3">{card.title}</h4>
                {card.content}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
