import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useReveal } from "@/hooks/useReveal";

export const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  useReveal();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main key={pathname} className="flex-1 pt-20 animate-fade-in">{children}</main>
      <Footer />
    </div>
  );
};
