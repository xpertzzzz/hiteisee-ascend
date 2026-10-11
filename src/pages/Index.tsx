import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { getServices, getCategoryIcon, getServiceImage, type ServiceItem } from "@/lib/adminData";
import { useState, useEffect, useRef } from "react";
import { slugify, serviceCategories } from "./Services";

// ─── Home Service Card (Top Image Banner & High-Contrast Content) ───────────

interface HomeServiceCardProps {
  service: ServiceItem;
  index: number;
}

const HomeServiceCard = ({ service }: HomeServiceCardProps) => {
  const navigate = useNavigate();
  const IconComponent = getCategoryIcon(service.category, service.title);
  const serviceImg = getServiceImage(service.title, service.category);
  const categoryLabel = serviceCategories.find((c) => c.id === service.category)?.label || "Solutions";

  return (
    <div
      onClick={() => navigate(`/services/${slugify(service.title)}`)}
      className="bg-white border border-blue-100/90 rounded-3xl overflow-hidden cursor-pointer flex flex-col w-[290px] md:w-[325px] flex-shrink-0 snap-start shadow-[0_4px_20px_-4px_rgba(30,58,138,0.06)] hover:shadow-[0_18px_38px_-6px_rgba(30,58,138,0.18)] hover:-translate-y-1.5 transition-all duration-300 group"
    >
      {/* Top Half — Thematic Background Image with Contrast Overlays */}
      <div className="relative h-40 w-full overflow-hidden bg-slate-900">
        <img
          src={serviceImg}
          alt={service.title}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out opacity-90"
          loading="lazy"
        />
        {/* Gradients for high contrast and modern glass look */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/35 to-black/25" />
        
        {/* Floating Category Pill on top-left of image */}
        <div className="absolute top-3.5 left-3.5">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[9px] font-black uppercase tracking-[0.15em] text-blue-950 shadow-sm border border-white/60">
            {categoryLabel}
          </span>
        </div>

        {/* Floating Icon badge on bottom-left of image */}
        <div className="absolute bottom-3 left-3.5 w-11 h-11 rounded-2xl bg-white/95 backdrop-blur-md shadow-md border border-white/80 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105 transition-all duration-300">
          <IconComponent className="w-5 h-5 transition-colors" />
        </div>
      </div>

      {/* Bottom Half — Crisp Content Body with Guaranteed Readability */}
      <div className="p-5 flex-1 flex flex-col bg-white">
        {/* Title */}
        <h4 className="font-heading font-bold text-base md:text-lg leading-snug text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[48px]">
          {service.title}
        </h4>

        {/* Service details preview */}
        <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2 font-medium">
          {service.details.slice(0, 2).join(" • ")}
        </p>

        {/* Action CTA */}
        <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 group-hover:text-blue-700 flex items-center gap-1">
            Explore Service
          </span>
          <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex items-center justify-center shadow-xs">
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Partners & Esteemed Clients ─────────────────────────────────────────────

const partnerLogos = [
  { name: "Aditya", path: "/partners/aditya.png" },
  { name: "CIIR", path: "/partners/ciir.png" },
  { name: "Coal India", path: "/partners/coal.png" },
  { name: "Cost Accountants", path: "/partners/cost.png" },
  { name: "Fashion", path: "/partners/fashion.png" },
  { name: "IFFCO", path: "/partners/iffco.png" },
  { name: "Jai Kisaan", path: "/partners/jaikishan.png" },
  { name: "KIIT", path: "/partners/kiit.png" },
  { name: "Mayfair Hotels", path: "/partners/mayfair.png" },
  { name: "MCF", path: "/partners/mcf.png" },
  { name: "MCL", path: "/partners/mcl.png" },
  { name: "NALCO", path: "/partners/nalco.png" },
  { name: "Government of Odisha", path: "/partners/odishasasan.png" },
  { name: "OPTCL", path: "/partners/optcl.png" },
  { name: "Prasar India", path: "/partners/prasar%20india.png" },
  { name: "Simon India", path: "/partners/simon%20india.png" },
];

const esteemedClients = [
  "Naval Dockyard", "SAIL", "NPCIL", "NTPC", "NMDC", "Tata Steel", "L&T", "Indian Oil", "BEML", "PPL",
  "Zuari", "Chambal Fertilisers", "Mahatransco", "Nava", "OHPC", "IFCI", "NPC", "MDCSHE", "TISS", "FICCI",
  "Assocham", "ICC", "Falcon", "NIPM", "Thriveni", "Ankur", "NHRDN", "ISTD", "SOA University", "IIPM",
  "OSPC", "BHEL", "BDL", "GMR Power", "Muthoot Finance", "KTDC", "Hi-Land group", "Shahi Exports",
  "Arkitechno", "Kalinga Hospital", "Manipal Hospital", "NIH, Kolkata", "XIM University", "IMI", "NIT", "ILO"
];

// ─── Main Index Page ─────────────────────────────────────────────────────────

const AUTOSCROLL_INTERVAL = 3000;

const Index = () => {
  const [allServices, setAllServices] = useState<ServiceItem[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const services = getServices();
    setAllServices(services);
  }, []);

  // Auto-scroll logic for services
  useEffect(() => {
    if (allServices.length === 0 || isHovered) return;
    
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        // If we reached the end (with a small buffer), scroll back to start
        if (scrollLeft >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll by roughly one card width plus gap
          scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
        }
      }
    }, AUTOSCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, [allServices, isHovered]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section — Video background with overlay */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-blue-100">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay to ensure text is visible */}
        <div className="absolute inset-0 bg-black/50 z-[5]" />

        <div className="relative w-full max-w-[1240px] mx-auto px-6 z-10 py-20">
          <div className="max-w-[600px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm shadow-sm">
              <div className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-900">
                Complete People Solutions Delivered
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-black text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
              Complete People{" "}
              <span className="text-blue-400">Solutions</span>{" "}
              Delivered.
            </h1>

            <div className="w-14 h-[4px] bg-blue-400 rounded-full mb-6 shadow-sm" />

            <p className="text-base md:text-lg text-white/90 font-medium leading-[1.75] mb-8 max-w-[500px] drop-shadow-md">
              <span className="font-bold text-white">Transforming Individuals, Leaders and Organizations</span>{" "}
              through Consulting, Training, Strategy and Human Development.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/contact">
                <Button className="h-12 px-8 text-xs font-bold uppercase tracking-widest bg-blue-600 text-white hover:bg-blue-700 rounded-full shadow-lg shadow-blue-600/30">
                  Start Inquiry
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="outline"
                  className="h-12 px-8 text-xs font-bold uppercase tracking-widest border-white/40 text-white hover:bg-white/10 rounded-full backdrop-blur-sm"
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

          {/* Cards Grid - Scrollable & Auto-scrolling */}
          <div 
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6"
          >
            {allServices.map((service, i) => (
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
      <section className="pt-14 pb-12 bg-gradient-to-b from-blue-50/60 via-blue-50/30 to-background border-y border-blue-100" style={{ overflowX: "clip", overflowY: "visible" }}>
        <div className="max-w-[1240px] mx-auto px-6 mb-8 text-center">
          <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-primary/8 border border-primary/15">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80">
              Trusted Partners & Clients
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight">
            Our Esteemed Customers
          </h3>
          <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
            Trusted by leading public sector undertakings, multinational corporations, institutions, and industrial leaders across India.
          </p>
        </div>

        {/* Primary Partner Logos Marquee with Interactive Hover Cards */}
        <div className="relative w-full flex group/marquee" style={{ overflowX: "clip", overflowY: "visible" }}>
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-r from-blue-50/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-l from-blue-50/90 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee group-hover/marquee:[animation-play-state:paused] whitespace-nowrap flex items-center gap-6 pt-2 pb-6">
            {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, i) => (
              <div key={i} className="relative inline-flex flex-shrink-0">
                <div 
                  className="h-20 md:h-24 px-6 py-3 bg-white rounded-2xl shadow-sm border border-blue-100/70 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex items-center justify-center min-w-[160px] md:min-w-[180px] group/card cursor-pointer"
                  title={partner.name}
                >
                  <img
                    src={partner.path}
                    alt={partner.name}
                    className="max-h-12 md:max-h-14 w-auto max-w-[130px] object-contain select-none filter grayscale-[20%] opacity-85 group-hover/card:grayscale-0 group-hover/card:opacity-100 group-hover/card:scale-110 transition-all duration-300"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Corporate & PSU Client Organizations Ribbon */}
        <div className="relative w-full flex overflow-hidden mt-4 group/ribbon" style={{ overflowX: "clip", overflowY: "visible" }}>
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-r from-blue-50/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-l from-blue-50/90 to-transparent z-10 pointer-events-none" />

          <div 
            className="animate-marquee group-hover/ribbon:[animation-play-state:paused] whitespace-nowrap flex items-center gap-4 py-2" 
            style={{ animationDirection: "reverse", animationDuration: "45s" }}
          >
            {[...esteemedClients, ...esteemedClients, ...esteemedClients].map((client, i) => (
              <div key={i} className="relative inline-flex flex-shrink-0">
                <div className="h-10 px-5 py-2 bg-white/80 backdrop-blur-sm rounded-xl shadow-xs border border-blue-100/50 hover:border-blue-300 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center">
                  <span className="text-xs md:text-sm font-semibold text-slate-700 whitespace-nowrap">
                    {client}
                  </span>
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
