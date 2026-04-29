import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useContent, writeContent, resetContent, isLoggedIn, logout, SiteContent } from "@/lib/content";
import { LogOut, Save, RotateCcw, Plus, Trash2, LayoutDashboard, Sparkles, Briefcase, BarChart3, Megaphone, Info, Phone } from "lucide-react";
import { toast } from "sonner";

const sections = [
  { key: "hero", label: "Hero", icon: Sparkles },
  { key: "services", label: "Services", icon: Briefcase },
  { key: "stats", label: "Stats", icon: BarChart3 },
  { key: "cta", label: "CTA Section", icon: Megaphone },
  { key: "about", label: "About", icon: Info },
  { key: "contact", label: "Contact", icon: Phone },
] as const;

const Input = (p: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) => {
  const { label, ...rest } = p;
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      <input {...rest} className="mt-1.5 w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/15" />
    </label>
  );
};

const Textarea = (p: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) => {
  const { label, ...rest } = p;
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      <textarea {...rest} rows={4} className="mt-1.5 w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 resize-y" />
    </label>
  );
};

const Admin = () => {
  const content = useContent();
  const [draft, setDraft] = useState<SiteContent>(content);
  const [tab, setTab] = useState<(typeof sections)[number]["key"]>("hero");
  const nav = useNavigate();

  if (!isLoggedIn()) return <Navigate to="/admin/login" replace />;

  const update = <K extends keyof SiteContent>(k: K, v: SiteContent[K]) => setDraft({ ...draft, [k]: v });

  const save = () => {
    writeContent(draft);
    toast.success("Changes saved. Site updated.");
  };
  const reset = () => {
    if (confirm("Reset all content to defaults? This cannot be undone.")) {
      resetContent();
      setTimeout(() => window.location.reload(), 200);
    }
  };
  const onLogout = () => {
    logout();
    nav("/");
  };

  return (
    <Layout>
      <section className="bg-soft min-h-screen">
        <div className="container-custom py-10">
          {/* Header */}
          <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-cta-grad flex items-center justify-center shadow-soft">
                <LayoutDashboard className="text-primary-foreground" size={22} />
              </div>
              <div>
                <h1 className="font-display text-3xl font-semibold">Admin Dashboard</h1>
                <p className="text-xs text-muted-foreground">Manage everything across your site.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <button onClick={reset} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium hover:border-primary/40 transition">
                <RotateCcw size={15} /> Reset
              </button>
              <button onClick={save} className="inline-flex items-center gap-2 rounded-full bg-cta-grad px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-glow-green transition">
                <Save size={15} /> Save Changes
              </button>
              <button onClick={onLogout} className="inline-flex items-center gap-2 rounded-full bg-accent-grad px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft hover:shadow-glow-orange transition">
                <LogOut size={15} /> Logout
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* Sidebar */}
            <aside className="lg:col-span-3">
              <nav className="bg-card border border-border rounded-2xl p-2 shadow-soft sticky top-24">
                {sections.map((s) => (
                  <button
                    key={s.key}
                    onClick={() => setTab(s.key)}
                    className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                      tab === s.key ? "bg-secondary text-primary" : "text-muted-foreground hover:bg-secondary/60"
                    }`}
                  >
                    <s.icon size={16} /> {s.label}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Editor */}
            <div className="lg:col-span-9">
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-soft">
                {tab === "hero" && (
                  <div className="space-y-5">
                    <h2 className="font-display text-2xl font-semibold">Hero Section</h2>
                    <Input label="Eyebrow / Tagline" value={draft.hero.eyebrow} onChange={(e) => update("hero", { ...draft.hero, eyebrow: e.target.value })} />
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input label="Title (start)" value={draft.hero.title} onChange={(e) => update("hero", { ...draft.hero, title: e.target.value })} />
                      <Input label="Title (accent)" value={draft.hero.titleAccent} onChange={(e) => update("hero", { ...draft.hero, titleAccent: e.target.value })} />
                    </div>
                    <Textarea label="Subtitle" value={draft.hero.subtitle} onChange={(e) => update("hero", { ...draft.hero, subtitle: e.target.value })} />
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input label="Primary CTA Text" value={draft.hero.primaryCta} onChange={(e) => update("hero", { ...draft.hero, primaryCta: e.target.value })} />
                      <Input label="Secondary CTA Text" value={draft.hero.secondaryCta} onChange={(e) => update("hero", { ...draft.hero, secondaryCta: e.target.value })} />
                    </div>
                  </div>
                )}

                {tab === "services" && (
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <h2 className="font-display text-2xl font-semibold">Services</h2>
                      <button
                        onClick={() => update("services", [...draft.services, { icon: "Sparkles", title: "New Service", desc: "Description" }])}
                        className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold hover:text-accent transition"
                      >
                        <Plus size={15} /> Add
                      </button>
                    </div>
                    {draft.services.map((s, i) => (
                      <div key={i} className="rounded-xl border border-border p-4 space-y-3 bg-secondary/30">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Service #{i + 1}</span>
                          <button onClick={() => update("services", draft.services.filter((_, x) => x !== i))} className="text-destructive hover:opacity-70">
                            <Trash2 size={15} />
                          </button>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3">
                          <Input label="Title" value={s.title} onChange={(e) => update("services", draft.services.map((x, idx) => idx === i ? { ...x, title: e.target.value } : x))} />
                          <Input label="Icon (Users, TrendingUp, Briefcase, GraduationCap, Building2, Lightbulb, Sparkles, ShieldCheck, BarChart3, Network)" value={s.icon} onChange={(e) => update("services", draft.services.map((x, idx) => idx === i ? { ...x, icon: e.target.value } : x))} />
                        </div>
                        <Textarea label="Description" value={s.desc} onChange={(e) => update("services", draft.services.map((x, idx) => idx === i ? { ...x, desc: e.target.value } : x))} />
                      </div>
                    ))}
                  </div>
                )}

                {tab === "stats" && (
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <h2 className="font-display text-2xl font-semibold">Stats</h2>
                      <button
                        onClick={() => update("stats", [...draft.stats, { value: 0, suffix: "+", label: "New stat" }])}
                        className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold hover:text-accent transition"
                      >
                        <Plus size={15} /> Add
                      </button>
                    </div>
                    {draft.stats.map((s, i) => (
                      <div key={i} className="rounded-xl border border-border p-4 grid sm:grid-cols-4 gap-3 items-end bg-secondary/30">
                        <Input label="Value" type="number" value={s.value} onChange={(e) => update("stats", draft.stats.map((x, idx) => idx === i ? { ...x, value: Number(e.target.value) } : x))} />
                        <Input label="Suffix" value={s.suffix} onChange={(e) => update("stats", draft.stats.map((x, idx) => idx === i ? { ...x, suffix: e.target.value } : x))} />
                        <Input label="Label" value={s.label} onChange={(e) => update("stats", draft.stats.map((x, idx) => idx === i ? { ...x, label: e.target.value } : x))} />
                        <button onClick={() => update("stats", draft.stats.filter((_, x) => x !== i))} className="rounded-xl border border-border py-2.5 text-destructive hover:bg-destructive/5">
                          <Trash2 size={15} className="mx-auto" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {tab === "cta" && (
                  <div className="space-y-5">
                    <h2 className="font-display text-2xl font-semibold">CTA Section</h2>
                    <Input label="Title" value={draft.ctaSection.title} onChange={(e) => update("ctaSection", { ...draft.ctaSection, title: e.target.value })} />
                    <Textarea label="Subtitle" value={draft.ctaSection.subtitle} onChange={(e) => update("ctaSection", { ...draft.ctaSection, subtitle: e.target.value })} />
                    <Input label="Button Text" value={draft.ctaSection.button} onChange={(e) => update("ctaSection", { ...draft.ctaSection, button: e.target.value })} />
                  </div>
                )}

                {tab === "about" && (
                  <div className="space-y-5">
                    <h2 className="font-display text-2xl font-semibold">About Page</h2>
                    <Input label="Overview Title" value={draft.about.overviewTitle} onChange={(e) => update("about", { ...draft.about, overviewTitle: e.target.value })} />
                    <Textarea label="Overview Body" value={draft.about.overviewBody} onChange={(e) => update("about", { ...draft.about, overviewBody: e.target.value })} />
                    <Textarea label="Philosophy Quote" value={draft.about.philosophy} onChange={(e) => update("about", { ...draft.about, philosophy: e.target.value })} />
                    <Input label="Founder Heading" value={draft.about.founderName} onChange={(e) => update("about", { ...draft.about, founderName: e.target.value })} />
                    <Textarea label="Founder Body" value={draft.about.founderBody} onChange={(e) => update("about", { ...draft.about, founderBody: e.target.value })} />
                    <Textarea label="Founder Quote" value={draft.about.founderQuote} onChange={(e) => update("about", { ...draft.about, founderQuote: e.target.value })} />
                  </div>
                )}

                {tab === "contact" && (
                  <div className="space-y-5">
                    <h2 className="font-display text-2xl font-semibold">Contact Information</h2>
                    <Input label="Email" type="email" value={draft.contact.email} onChange={(e) => update("contact", { ...draft.contact, email: e.target.value })} />
                    <Input label="Phone" value={draft.contact.phone} onChange={(e) => update("contact", { ...draft.contact, phone: e.target.value })} />
                    <Input label="Address" value={draft.contact.address} onChange={(e) => update("contact", { ...draft.contact, address: e.target.value })} />
                    <Input label="Hours" value={draft.contact.hours} onChange={(e) => update("contact", { ...draft.contact, hours: e.target.value })} />
                  </div>
                )}
              </div>

              <div className="mt-4 text-xs text-muted-foreground text-center">
                Changes are saved to your browser. Click <strong>Save Changes</strong> to apply across the site.
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admin;
