import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/careers", label: "Careers" },
  { to: "/blog", label: "Blog" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/75 backdrop-blur-xl border-b border-border shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="container-custom flex h-18 items-center justify-between py-4">
        <Logo />
        <div className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => `nav-link ${isActive ? "active text-primary" : ""}`}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
        <NavLink
          to="/contact"
          className="hidden lg:inline-flex items-center rounded-full bg-accent-grad px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft transition-all hover:shadow-glow-orange hover:scale-[1.03]"
        >
          Get in Touch
        </NavLink>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl glass"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out bg-white/95 backdrop-blur-xl border-b border-border ${
          open ? "max-h-[480px]" : "max-h-0"
        }`}
      >
        <div className="container-custom flex flex-col gap-1 py-4">
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                  isActive ? "bg-secondary text-primary" : "text-foreground/80 hover:bg-secondary"
                }`
              }
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="mt-2 rounded-full bg-accent-grad px-5 py-3 text-center text-sm font-semibold text-accent-foreground"
          >
            Get in Touch
          </NavLink>
        </div>
      </div>
    </header>
  );
};
