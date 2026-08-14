import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const serviceList = [
  "Strategic HR services",
  "Strategic IR services",
  "Strategic L&D services",
  "Strategic CSR services",
  "Safety services",
  "TOM & Productivity services",
  "Executive Coaching / Mentoring",
  "Talent acquisition",
  "HR leased services",
  "Corporate Affairs services",
  "Litigation management",
  "Legal Advisory services",
  "P4 programme for students"
];

const Footer = () => {
  return (
    <footer className="relative bg-white border-t border-blue-100 mt-0">
      {/* Top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-sky-400 to-primary/60" />

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">

          <div className="lg:col-span-4 pr-4">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-1 tracking-tight flex items-baseline">
              Hiteisee<span className="text-primary text-3xl leading-none">.</span>
            </h3>
            <p className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4">CONSULTING</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-sm font-medium">
              We are a boutique consulting firm aspiring to serve industries and businesses to improve competitiveness and create sustainable competitive advantage.
            </p>
            <div className="mb-6 border-l-2 border-primary pl-4 py-1">
               <h4 className="font-bold text-slate-800 tracking-wide text-sm">Dr. Suvendu Das</h4>
               <p className="text-xs text-primary font-bold uppercase tracking-widest mt-0.5">Managing Director</p>
            </div>
            <div className="flex gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full text-xs uppercase tracking-widest font-bold shadow-md shadow-primary/20">
                Start Inquiry
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-foreground font-heading font-bold text-base mb-5 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Career", path: "/careers" },
                { label: "Blog", path: "/blog" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact Us", path: "/contact" },
                { label: "Payment Gateway", path: "/payment" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1.5 font-medium tracking-wide">
                    <ArrowRight className="w-3 h-3 text-primary/50" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-foreground font-heading font-bold text-base mb-5 tracking-wide">
              Our Services
            </h4>
            <ul className="space-y-2">
              {serviceList.slice(0, 8).map((service, idx) => (
                <li key={idx}>
                  <Link to={`/services?service=${encodeURIComponent(service)}`} className="text-xs text-muted-foreground hover:text-primary inline-flex items-center gap-1.5 font-medium tracking-wide">
                    <ArrowRight className="w-2.5 h-2.5 text-primary/50" />
                    {service}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-xs font-bold text-primary mt-1 inline-block">
                  + View all services
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-foreground font-heading font-bold text-base mb-5 tracking-wide">
              Corporate Office
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-medium leading-relaxed">2/6, Kanchanjanga VIP Enclaves, Chandrasekharpur, Bhubaneswar - 751016</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919937509666" className="hover:text-primary font-medium">9937509666</a>
                  <a href="tel:06742744700" className="hover:text-primary font-medium">0674-2744700</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground break-all">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:hiteiseeconsulting@gmail.com" className="hover:text-primary font-medium text-xs">hiteiseeconsulting@gmail.com</a>
                  <a href="mailto:info@hiteisee.in" className="hover:text-primary font-medium text-xs">info@hiteisee.in</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-100 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left font-medium tracking-wide">
            © 2026 <span className="text-foreground font-bold">Hiteisee Consulting</span>. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/about" className="text-[11px] font-bold text-muted-foreground hover:text-primary uppercase tracking-widest">About</Link>
            <Link to="/services" className="text-[11px] font-bold text-muted-foreground hover:text-primary uppercase tracking-widest">Services</Link>
            <Link to="/careers" className="text-[11px] font-bold text-muted-foreground hover:text-primary uppercase tracking-widest">Career</Link>
            <Link to="/contact" className="text-[11px] font-bold text-muted-foreground hover:text-primary uppercase tracking-widest">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
