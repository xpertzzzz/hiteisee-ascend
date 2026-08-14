import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { getServices, getCategoryIcon, type ServiceItem } from "@/lib/adminData";
import { useState, useEffect } from "react";
import { slugify, serviceCategories } from "./Services";

// Fisher-Yates shuffle to pick N random items
const pickRandom = <T,>(arr: T[], count: number): T[] => {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
};

// ─── Home Service Card (light themed, no animations) ─────────────────────────

interface HomeServiceCardProps {
  service: ServiceItem;
  index: number;
}

const categoryColors: Record<string, { bg: string; border: string; icon: string }> = {
  "ir-legal": {
    bg: "bg-amber-50",
    border: "border-amber-200",
    icon: "text-amber-600 bg-amber-100",
  },
  strategy: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    icon: "text-emerald-600 bg-emerald-100",
  },
  "hr-ops": {
    bg: "bg-blue-50",
    border: "border-blue-200",
    icon: "text-blue-600 bg-blue-100",
  },
  risk: {
    bg: "bg-rose-50",
    border: "border-rose-200",
    icon: "text-rose-600 bg-rose-100",
  },
};

const HomeServiceCard = ({ service }: HomeServiceCardProps) => {
  const navigate = useNavigate();
  const IconComponent = getCategoryIcon(service.category);
  const colors = categoryColors[service.category] || categoryColors["hr-ops"];

  return (
    <div
      onClick={() => navigate(`/services/${slugify(service.title)}`)}
      className={`${colors.bg} ${colors.border} border rounded-2xl p-6 cursor-pointer flex flex-col min-h-[240px] hover:shadow-md`}
    >
      {/* Icon */}
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${colors.icon}`}>
        <IconComponent className="w-5 h-5" />
      </div>

      {/* Category tag */}
      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-2">
        {serviceCategories.find((c) => c.id === service.category)?.label || "Service"}
      </span>

      {/* Title */}
      <h4 className="font-heading font-bold text-lg leading-snug text-foreground mb-2">
        {service.title}
      </h4>

      {/* Service details preview */}
      <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-2">
        {service.details.slice(0, 2).join(" • ")}
      </p>

      {/* Arrow */}
      <div className="mt-auto self-end">
        <div className="w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center bg-white text-primary">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

// ─── Partners ────────────────────────────────────────────────────────────────

const partners = [
  { name: "CIIR", path: "/partners/ciir.png" },
  { name: "Coal India", path: "/partners/coal.png" },
  { name: "Cost", path: "/partners/cost.png" },
  { name: "Fashion", path: "/partners/fashion.png" },
  { name: "IFFCO", path: "/partners/iffco.png" },
  { name: "Aditya", path: "/partners/aditya.png" },
  { name: "Jaikishan", path: "/partners/jaikishan.png" },
  { name: "KIIT", path: "/partners/kiit.png" },
  { name: "Mayfair", path: "/partners/mayfair.png" },
  { name: "MCF", path: "/partners/mcf.png" },
  { name: "MCL", path: "/partners/mcl.png" },
  { name: "NALCO", path: "/partners/nalco.png" },
  { name: "Odisha Sasan", path: "/partners/odishasasan.png" },
  { name: "OPTCL", path: "/partners/optcl.png" },
  { name: "Prasar India", path: "/partners/prasar%20india.png" },
  { name: "Simon India", path: "/partners/simon%20india.png" }
];

// ─── Main Index Page ─────────────────────────────────────────────────────────

const DISPLAY_COUNT = 4;
const ROTATE_INTERVAL = 4000;

const Index = () => {
  const [allServices, setAllServices] = useState<ServiceItem[]>([]);
  const [displayedServices, setDisplayedServices] = useState<ServiceItem[]>([]);

  useEffect(() => {
    const services = getServices();
    setAllServices(services);
    setDisplayedServices(pickRandom(services, DISPLAY_COUNT));
  }, []);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    if (allServices.length <= DISPLAY_COUNT) return;
    const interval = setInterval(() => {
      setDisplayedServices(pickRandom(allServices, DISPLAY_COUNT));
    }, ROTATE_INTERVAL);
    return () => clearInterval(interval);
  }, [allServices]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section — light themed, no video */}
      <section className="relative py-20 md:py-28 flex items-center bg-gradient-to-br from-blue-50 via-sky-50 to-white border-b border-blue-100">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-blue-100/60 blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-sky-100/60 blur-[60px]" />
        </div>

        <div className="relative w-full max-w-[1240px] mx-auto px-6">
          <div className="max-w-[600px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                Complete People Solutions Delivered
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-black text-foreground leading-[1.1] mb-6 tracking-tight">
              Complete People{" "}
              <span className="text-primary">Solutions</span>{" "}
              Delivered.
            </h1>

            <div className="w-14 h-[3px] bg-primary rounded-full mb-6" />

            <p className="text-base md:text-lg text-muted-foreground leading-[1.75] mb-8 max-w-[500px]">
              <span className="text-foreground font-semibold">Transforming Individuals, Leaders and Organizations</span>{" "}
              through Consulting, Training, Strategy and Human Development.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/contact">
                <Button className="h-12 px-8 text-xs font-bold uppercase tracking-widest bg-primary text-white hover:bg-primary/90 rounded-full shadow-lg shadow-primary/20">
                  Start Inquiry
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="outline"
                  className="h-12 px-8 text-xs font-bold uppercase tracking-widest border-primary/30 text-primary hover:bg-primary/5 rounded-full"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Grid — 4 Random Cards, Auto-Rotating */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-[1240px] mx-auto px-6">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-primary/8 border border-primary/15">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80">
                  Core Competencies
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground tracking-tight">
                Transformative{" "}
                <span className="text-primary">Solutions</span>
              </h2>
            </div>
            <Link to="/services" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary hover:text-primary/70">
              View All Services
              <div className="w-8 h-8 rounded-full border border-primary/25 flex items-center justify-center ml-3">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 min-h-[240px]">
            {displayedServices.map((service, i) => (
              <HomeServiceCard
                key={service.id}
                service={service}
                index={i}
              />
            ))}
          </div>

          {/* Show More Services */}
          <div className="flex justify-center mt-10">
            <Link to="/services">
              <Button className="h-13 px-10 rounded-full font-bold tracking-widest text-xs uppercase bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/15">
                Show All {allServices.length} Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Showcase (Infinite Scroll Ribbon) */}
      <section className="pt-14 pb-10 bg-blue-50/60 border-y border-blue-100" style={{ overflowX: "clip", overflowY: "visible" }}>
        <div className="max-w-[1240px] mx-auto px-6 mb-8 text-center">
          <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-primary/8 border border-primary/15">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80">
              Trusted Partners
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground tracking-tight">
            Our Esteemed Customers
          </h3>
        </div>

        <div className="relative w-full flex" style={{ overflowX: "clip", overflowY: "visible" }}>
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-blue-50/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-blue-50/80 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee whitespace-nowrap flex items-center gap-10 pt-4 pb-4">
            {[...partners, ...partners, ...partners].map((partner, i) => (
              <div key={i} className="relative inline-flex flex-shrink-0 mx-4">
                <div className="h-12 md:h-14 w-auto flex items-center justify-center px-2">
                  <img
                    src={partner.path}
                    alt={partner.name}
                    className="h-full w-auto object-contain select-none opacity-80 hover:opacity-100"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="py-20 bg-white border-t border-blue-100">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <div className="w-14 h-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 border border-primary/20 text-primary">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-5 tracking-tight">
            Ready to transform your business?{" "}
            <br className="hidden md:block" />
            Let's Start the Conversation.
          </h2>
          <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with Dr. Suvendu Das and the Hiteisee team to explore customized best practices tailored for your organizational success.
          </p>
          <Link to="/contact">
            <Button className="h-12 px-10 rounded-full font-bold tracking-widest text-xs uppercase bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
