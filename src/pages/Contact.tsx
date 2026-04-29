import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { toast } from "sonner";

const Field = ({ id, label, type = "text", textarea = false }: { id: string; label: string; type?: string; textarea?: boolean }) => {
  const [v, setV] = useState("");
  const has = v.length > 0;
  const Tag = textarea ? "textarea" : "input";
  return (
    <div className="relative">
      <Tag
        id={id}
        name={id}
        type={type}
        required
        rows={textarea ? 5 : undefined}
        value={v}
        onChange={(e) => setV(e.target.value)}
        placeholder=" "
        className="peer w-full rounded-xl border border-border bg-card px-4 pt-6 pb-2 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/15 resize-none"
      />
      <label
        htmlFor={id}
        className={`absolute left-4 text-muted-foreground pointer-events-none transition-all duration-200 ${
          has ? "top-2 text-[10px] uppercase tracking-wider text-primary font-semibold" : "top-4 text-sm"
        } peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary peer-focus:font-semibold`}
      >
        {label}
      </label>
    </div>
  );
};

const Contact = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll be in touch shortly.");
    (e.target as HTMLFormElement).reset();
  };
  return (
    <Layout>
      <section className="bg-hero">
        <div className="container-custom py-20 md:py-24 text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold mb-3">Contact</p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold animate-fade-up">
            Let's start a <span className="text-gradient-green">conversation</span>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container-custom grid lg:grid-cols-5 gap-10">
          <aside className="lg:col-span-2 space-y-6 reveal">
            <div className="bg-card border border-border rounded-2xl p-7 shadow-soft">
              <h3 className="font-display text-2xl font-semibold mb-2">Get in touch</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Whether you're exploring a new initiative or need a sounding board — we're here to help.
              </p>
              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center text-primary"><MapPin size={18} /></div>
                  <div><div className="font-semibold text-foreground">Office</div><div className="text-muted-foreground">Mumbai, Maharashtra, India</div></div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center text-primary"><Mail size={18} /></div>
                  <div><div className="font-semibold text-foreground">Email</div><a href="mailto:contact@hiteisee.com" className="text-muted-foreground hover:text-primary">contact@hiteisee.com</a></div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center text-primary"><Phone size={18} /></div>
                  <div><div className="font-semibold text-foreground">Phone</div><a href="tel:+910000000000" className="text-muted-foreground hover:text-primary">+91 00 0000 0000</a></div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center text-primary"><Clock size={18} /></div>
                  <div><div className="font-semibold text-foreground">Hours</div><div className="text-muted-foreground">Mon – Fri, 9:30 to 18:30 IST</div></div>
                </li>
              </ul>
            </div>
          </aside>

          <form onSubmit={onSubmit} className="lg:col-span-3 reveal bg-card border border-border rounded-2xl p-7 md:p-9 shadow-soft space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field id="name" label="Full name" />
              <Field id="email" label="Email address" type="email" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field id="company" label="Company" />
              <Field id="phone" label="Phone (optional)" type="tel" />
            </div>
            <Field id="message" label="How can we help?" textarea />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-accent-grad px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft transition-all hover:shadow-glow-orange hover:scale-[1.03]"
            >
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>

        <div className="container-custom mt-16">
          <div className="reveal rounded-2xl overflow-hidden border border-border shadow-soft h-80">
            <iframe
              title="Hiteisee Consulting location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=72.74%2C18.89%2C73.02%2C19.30&layer=mapnik"
              className="w-full h-full grayscale-[20%]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
