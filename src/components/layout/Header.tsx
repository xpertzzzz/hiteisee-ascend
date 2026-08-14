import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Lock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Career", path: "/careers" },
  { label: "Blog", path: "/blog" },
  { label: "Gallery", path: "/gallery" },
  { label: "Payment", path: "/payment" },
  { label: "Contact", path: "/contact" },
];

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

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'pt-2 md:pt-3 px-3 md:px-5' : 'pt-0 px-0'}`}
      >
        {/* Top Bar Area */}
        <div
          className={`hidden xl:flex items-center justify-between w-full bg-slate-50 text-slate-700 text-xs font-semibold tracking-wide overflow-hidden mx-auto border-b border-blue-100 transition-all duration-300 ${scrolled ? 'h-0 opacity-0 border-transparent' : 'h-11 opacity-100 px-6 lg:px-10'}`}
        >
          <div className="flex items-center gap-6">
            <span className="uppercase text-[10px] text-primary tracking-[0.2em] font-bold">Dr. Suvendu Das, Managing Director</span>
            <div className="h-4 w-px bg-blue-100" />
            <span className="uppercase text-[10px] tracking-widest text-slate-500">हितैषी = Hiteisee CONSULTING</span>
          </div>

          <div className="flex items-center gap-5 tracking-wider h-full">
            <a href="tel:+919937509666" className="flex items-center gap-1.5 hover:text-primary">
              <Phone className="w-3.5 h-3.5 text-primary" /> 9937509666, 0674-2744700
            </a>
            <div className="h-4 w-px bg-blue-100" />
            <a href="mailto:hiteiseeconsulting@gmail.com" className="flex items-center gap-1.5 hover:text-primary">
              <Mail className="w-3.5 h-3.5 text-primary" /> hiteiseeconsulting@gmail.com ; info@hiteisee.in
            </a>
            <div className="h-4 w-px bg-blue-100 mx-2" />
            <Link to="/admin/login" className="flex items-center gap-1.5 hover:text-primary">
              <Lock className="w-3.5 h-3.5" /> Portal
            </Link>
          </div>
        </div>

        {/* Main sticky navbar */}
        <div
          className={`mx-auto flex items-center justify-between w-full transition-all duration-300 ${scrolled
            ? 'max-w-[1400px] bg-white/95 backdrop-blur-md border border-blue-100 rounded-full h-16 md:h-20 px-4 lg:px-8 shadow-sm shadow-blue-100/50'
            : 'max-w-full bg-white border-b border-blue-100 h-20 md:h-[88px] px-6 lg:px-10'
            }`}
        >
          {/* Logo Section */}
          <div className="flex-1 flex justify-start">
            <Link to="/" className="inline-flex items-center gap-4 hover:opacity-90 transition-opacity">
              <div className={`flex items-center justify-center transition-transform duration-300 ${scrolled ? 'scale-95 origin-left' : 'scale-100'}`}>
                <img
                  src="/logo/logo.png"
                  alt="Hiteisee Consulting Logo"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex flex-none items-center justify-center gap-7 h-full" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              
              if (link.label === "Services") {
                return (
                  <div 
                    key={link.path}
                    className="relative h-full flex items-center group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`text-[13px] font-bold uppercase tracking-wider relative flex items-center gap-1 py-2 ${isActive ? "text-primary" : "text-slate-600 hover:text-primary transition-colors"}`}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                      <span className={`absolute -bottom-1 left-0 w-full h-[2px] rounded-t-full origin-left bg-primary transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                    </Link>

                    {/* Mega Menu Dropdown */}
                    <div 
                      className={`absolute top-[100%] left-1/2 -translate-x-1/2 pt-6 w-[700px] transition-all duration-300 ease-out z-[100] ${servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}
                    >
                      <div className="bg-white border border-blue-100 rounded-2xl shadow-xl p-8 grid grid-cols-2 gap-x-8 gap-y-3 relative before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:w-4 before:h-4 before:bg-white before:border-t before:border-l before:border-blue-100 before:rotate-45">
                        {serviceList.map((service, idx) => (
                          <Link 
                            key={idx} 
                            to={`/services?service=${encodeURIComponent(service)}`}
                            className="block py-2 text-sm font-semibold text-slate-600 hover:text-primary transition-colors hover:pl-2 group"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-100 group-hover:bg-primary mr-2 transition-colors"></span>
                            {service}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[13px] font-bold uppercase tracking-wider relative group py-2 ${isActive ? "text-primary" : "text-slate-600 hover:text-primary transition-colors"}`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-full h-[2px] rounded-t-full origin-left bg-primary transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex flex-1 items-center justify-end gap-6 ml-auto">
            <Link to="/contact">
              <Button className="rounded-full px-8 font-bold tracking-widest text-xs h-11 bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20 uppercase transition-all hover:-translate-y-0.5">
                Start Inquiry
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="xl:hidden p-2.5 rounded-full ml-auto text-slate-700 bg-slate-50 hover:bg-blue-50 border border-blue-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Content */}
        {mobileOpen && (
          <div className="xl:hidden absolute top-full left-4 right-4 mt-3 bg-white border border-blue-100 rounded-2xl shadow-xl z-[60] max-h-[80vh] overflow-y-auto">
            <div className="p-5 space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${isActive
                      ? "bg-primary/10 text-primary"
                      : "text-slate-600 hover:bg-blue-50 hover:text-primary"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="my-4 h-px bg-blue-100 w-full" />
              
              <div className="px-4 py-2 mb-2">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-2">Services</p>
                <div className="grid grid-cols-1 gap-2">
                  {serviceList.slice(0, 5).map((service, idx) => (
                    <Link key={idx} to="/services" onClick={() => setMobileOpen(false)} className="text-xs font-semibold text-slate-600 py-1.5 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary" /> {service}
                    </Link>
                  ))}
                  <Link to="/services" onClick={() => setMobileOpen(false)} className="text-xs font-bold text-primary py-1.5">+ View all {serviceList.length} services</Link>
                </div>
              </div>

              <div className="my-4 h-px bg-blue-100 w-full" />

              <Link
                to="/admin/login"
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 text-center text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-primary bg-slate-50 hover:bg-blue-50 rounded-xl border border-slate-100 transition-colors"
              >
                <Lock className="w-4 h-4" /> Portal Login
              </Link>

              <div className="pt-2">
                <Link to="/contact" className="block w-full" onClick={() => setMobileOpen(false)}>
                  <Button size="lg" className="w-full justify-center h-13 rounded-xl font-bold tracking-widest text-xs uppercase bg-primary text-white hover:bg-primary/90 shadow-md">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
