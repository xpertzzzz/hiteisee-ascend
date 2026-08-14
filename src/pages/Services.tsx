import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PageHero } from "@/components/shared/PageHero";
import { ArrowRight } from "lucide-react";
import { getServices, getCategoryIcon, type ServiceItem } from "@/lib/adminData";

export const serviceCategories = [
  { id: "all", label: "All Capabilities" },
  { id: "ir-legal", label: "Industrial Relations & Legal" },
  { id: "strategy", label: "Corporate Strategy & Growth" },
  { id: "hr-ops", label: "Human Capital & Operations" },
  { id: "risk", label: "Risk & Asset Protection" },
];

// Helper to create a URL-friendly slug from a title
export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// Category color accents — light themed
const categoryColors: Record<string, { bg: string; border: string; icon: string; tag: string }> = {
  "ir-legal": {
    bg: "bg-amber-50 hover:bg-amber-100/60",
    border: "border-amber-200",
    icon: "text-amber-600 bg-amber-100",
    tag: "text-amber-700",
  },
  strategy: {
    bg: "bg-emerald-50 hover:bg-emerald-100/60",
    border: "border-emerald-200",
    icon: "text-emerald-600 bg-emerald-100",
    tag: "text-emerald-700",
  },
  "hr-ops": {
    bg: "bg-blue-50 hover:bg-blue-100/60",
    border: "border-blue-200",
    icon: "text-blue-600 bg-blue-100",
    tag: "text-blue-700",
  },
  risk: {
    bg: "bg-rose-50 hover:bg-rose-100/60",
    border: "border-rose-200",
    icon: "text-rose-600 bg-rose-100",
    tag: "text-rose-700",
  },
};

// ─── Light Service Card ───────────────────────────────────────────────────────

interface ServiceCardProps {
  cap: ServiceItem;
  onNavigate: (slug: string) => void;
}

const ServiceCard = ({ cap, onNavigate }: ServiceCardProps) => {
  const IconComponent = getCategoryIcon(cap.category);

  return (
    <div
      onClick={() => onNavigate(`/services/${slugify(cap.title)}`)}
      className="bg-white border-blue-100 hover:border-primary/30 border rounded-2xl p-6 cursor-pointer flex flex-col min-h-[220px] shadow-sm hover:shadow-md transition-all group"
    >
      {/* Icon */}
      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-primary bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors">
        <IconComponent className="w-5 h-5" />
      </div>

      {/* Category tag */}
      <span className="text-[10px] font-bold uppercase tracking-[0.15em] mb-2 text-slate-400 group-hover:text-primary transition-colors">
        {serviceCategories.find((c) => c.id === cap.category)?.label || "Service"}
      </span>

      {/* Title */}
      <h4 className="font-heading font-bold text-base md:text-lg leading-snug text-foreground mb-3">
        {cap.title}
      </h4>

      {/* Divider */}
      <div className="w-8 h-[2px] rounded-full mb-3 bg-current opacity-20" />

      {/* Arrow */}
      <div className="mt-auto self-end">
        <div className="w-9 h-9 rounded-full border border-primary/25 flex items-center justify-center bg-white text-primary">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

// ─── Main Services Page ──────────────────────────────────────────────────────

export const Services = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [servicesList, setServicesList] = useState<ServiceItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setServicesList(getServices());
  }, []);

  const filteredCapabilities = servicesList.filter(
    (cap) => activeFilter === "all" || cap.category === activeFilter
  );

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Our Services"
        subtitle="Comprehensive solutions tailored to elevate your business performance and human capital."
        theme="training"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary/80">
                What We Deliver
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3 tracking-tight">
              Our Expertise,{" "}
              <span className="text-primary">Your Advantage</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Comprehensive corporate solutions crafted by industry veterans with decades of experience
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {serviceCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border ${
                    activeFilter === cat.id
                      ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                      : "bg-white text-muted-foreground border-blue-100 hover:border-primary/30 hover:text-primary"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6 items-stretch">
            {filteredCapabilities.map((cap) => (
              <ServiceCard
                key={`${cap.title}-${cap.id}`}
                cap={cap}
                onNavigate={navigate}
              />
            ))}
          </div>

          {/* Empty state */}
          {filteredCapabilities.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No services found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;
