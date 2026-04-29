import { Layout } from "@/components/Layout";
import { Calendar, User, ArrowRight } from "lucide-react";

const featured = {
  title: "The Future of People Strategy: Five Shifts Defining 2026",
  excerpt: "From AI-augmented HR to skills-based organizations, here's what leaders are betting on for the next wave of talent transformation.",
  author: "Editorial Team",
  date: "Apr 22, 2026",
  img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80",
};

const posts = [
  { title: "Building Resilient Leadership Pipelines", excerpt: "How succession planning has evolved beyond org charts.", author: "Hiteisee Insights", date: "Apr 12, 2026", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80" },
  { title: "The Quiet Revolution in HR Analytics", excerpt: "Data is reshaping how we measure people impact.", author: "Hiteisee Insights", date: "Apr 03, 2026", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80" },
  { title: "Why Culture Beats Strategy at Breakfast", excerpt: "Revisiting Drucker's classic for the hybrid era.", author: "Hiteisee Insights", date: "Mar 28, 2026", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80" },
  { title: "Designing the Skills-Based Organization", excerpt: "A practical framework for HR leaders.", author: "Hiteisee Insights", date: "Mar 18, 2026", img: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=900&q=80" },
  { title: "Managing Through Uncertainty", excerpt: "Five practices that anchor leaders in volatile times.", author: "Hiteisee Insights", date: "Mar 09, 2026", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&q=80" },
  { title: "Reimagining Onboarding for Hybrid Teams", excerpt: "First impressions matter more than ever.", author: "Hiteisee Insights", date: "Feb 27, 2026", img: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=900&q=80" },
];

const Blog = () => {
  return (
    <Layout>
      <section className="bg-hero">
        <div className="container-custom py-20 md:py-24 text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold mb-3">Insights</p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold animate-fade-up">
            Perspectives on <span className="text-gradient-green">people & growth</span>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container-custom space-y-14">
          {/* Featured */}
          <article className="reveal group grid lg:grid-cols-5 gap-8 bg-card border border-border rounded-[1.75rem] overflow-hidden shadow-card hover:shadow-elevated transition-all">
            <div className="lg:col-span-3 overflow-hidden">
              <img src={featured.img} alt={featured.title} className="w-full h-full object-cover aspect-[16/10] transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="lg:col-span-2 p-8 md:p-10 flex flex-col justify-center">
              <span className="inline-flex w-fit text-[10px] uppercase tracking-[0.22em] font-semibold text-accent mb-3">Featured</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">{featured.title}</h2>
              <p className="mt-4 text-muted-foreground">{featured.excerpt}</p>
              <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><User size={13} />{featured.author}</span>
                <span className="inline-flex items-center gap-1.5"><Calendar size={13} />{featured.date}</span>
              </div>
              <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group/link">
                Read article <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </article>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p, i) => (
              <article
                key={p.title}
                className="reveal group bg-card border border-border rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all hover:-translate-y-1.5"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="overflow-hidden aspect-[16/10]">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><User size={12} />{p.author}</span>
                    <span className="inline-flex items-center gap-1.5"><Calendar size={12} />{p.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
