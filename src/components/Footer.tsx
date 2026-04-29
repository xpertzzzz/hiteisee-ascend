import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="bg-footer-grad border-t border-border mt-12">
      <div className="container-custom py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-muted-foreground max-w-xs">
            Complete People Solutions Delivered. Expert guidance for sustainable growth and transformation.
          </p>
          <div className="flex gap-3 pt-2">
            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="h-10 w-10 rounded-full bg-white border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 hover:text-accent hover:border-accent hover:shadow-glow-orange"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Careers", "/careers"],
              ["Blog", "/blog"],
              ["Gallery", "/gallery"],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="text-muted-foreground hover:text-primary transition-colors relative group">
                  <span>{label}</span>
                  <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-5">Services</h4>
          <ul className="space-y-3 text-sm">
            {["HR Solutions", "Strategy Consulting", "Advisory", "Training", "Infrastructure"].map((s) => (
              <li key={s}>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors relative group">
                  <span>{s}</span>
                  <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
              <span>Mumbai, Maharashtra, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-primary shrink-0" />
              <a href="mailto:contact@hiteisee.com" className="hover:text-primary transition-colors">contact@hiteisee.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-primary shrink-0" />
              <a href="tel:+910000000000" className="hover:text-primary transition-colors">+91 00 0000 0000</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">© 2025 Hiteisee Consulting. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Complete People Solutions Delivered.</p>
        </div>
      </div>
    </footer>
  );
};
