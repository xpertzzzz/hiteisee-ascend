import { useEffect, useState, useSyncExternalStore } from "react";

export type SiteContent = {
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  services: { title: string; desc: string; icon: string }[];
  stats: { value: number; suffix: string; label: string }[];
  ctaSection: { title: string; subtitle: string; button: string };
  about: {
    overviewTitle: string;
    overviewBody: string;
    philosophy: string;
    founderName: string;
    founderBody: string;
    founderQuote: string;
  };
  contact: { email: string; phone: string; address: string; hours: string };
};

const DEFAULT_CONTENT: SiteContent = {
  hero: {
    eyebrow: "Complete People Solutions Delivered",
    title: "Unlock Your",
    titleAccent: "Business Potential",
    subtitle:
      "Expert guidance to drive sustainable growth and transformation — partnering with leaders to build resilient, people-first organizations.",
    primaryCta: "Start a Conversation",
    secondaryCta: "Explore Services",
  },
  services: [
    { icon: "Users", title: "HR Solutions", desc: "End-to-end people management, talent acquisition and engagement programs." },
    { icon: "TrendingUp", title: "Strategy Consulting", desc: "Data-driven strategy to unlock growth and operational excellence." },
    { icon: "Briefcase", title: "Advisory Services", desc: "Board-level advisory across governance, risk and transformation." },
    { icon: "GraduationCap", title: "Training & Development", desc: "Programs designed to upskill teams and develop future leaders." },
    { icon: "Building2", title: "Infrastructure Consulting", desc: "Strategic guidance on infrastructure planning and delivery." },
    { icon: "Lightbulb", title: "Innovation Advisory", desc: "Build innovation capability and design future-ready operating models." },
  ],
  stats: [
    { value: 40, suffix: "+", label: "Years of Experience" },
    { value: 42000, suffix: "+", label: "Professionals Trained" },
    { value: 350, suffix: "+", label: "Client Engagements" },
    { value: 25, suffix: "+", label: "Industries Served" },
  ],
  ctaSection: {
    title: "Ready to transform your business?",
    subtitle: "Let's design a roadmap built around your people, your strategy, and your future.",
    button: "Book a Discovery Call",
  },
  about: {
    overviewTitle: "A trusted partner across industries",
    overviewBody:
      "Hiteisee Consulting was founded with a clear conviction: that great organizations are built by great people. For more than four decades we have helped enterprises across India and beyond redesign their people strategies, transform leadership pipelines and unlock new dimensions of performance.",
    philosophy:
      "We believe consulting is not about giving advice — it is about walking alongside leaders, asking the right questions, and unlocking what is already possible.",
    founderName: "A lifetime devoted to people",
    founderBody:
      "With over four decades of experience advising boards, CEOs and HR leaders, our founder has shaped the people agenda of some of India's most respected enterprises — and trained more than 42,000 professionals along the way.",
    founderQuote:
      "Every organization is a story of people. Our job is simply to help that story reach its fullest expression.",
  },
  contact: {
    email: "contact@hiteisee.com",
    phone: "+91 00 0000 0000",
    address: "Mumbai, Maharashtra, India",
    hours: "Mon – Fri, 9:30 to 18:30 IST",
  },
};

const KEY = "hiteisee_content_v1";
const EVENT = "hiteisee_content_change";

const read = (): SiteContent => {
  if (typeof window === "undefined") return DEFAULT_CONTENT;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return DEFAULT_CONTENT;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_CONTENT, ...parsed };
  } catch {
    return DEFAULT_CONTENT;
  }
};

export const writeContent = (c: SiteContent) => {
  localStorage.setItem(KEY, JSON.stringify(c));
  window.dispatchEvent(new Event(EVENT));
};

export const resetContent = () => {
  localStorage.removeItem(KEY);
  window.dispatchEvent(new Event(EVENT));
};

const subscribe = (cb: () => void) => {
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", cb);
  };
};

export const useContent = (): SiteContent => {
  return useSyncExternalStore(subscribe, read, () => DEFAULT_CONTENT);
};

// Auth
const AUTH_KEY = "hiteisee_admin_auth";
const AUTH_EVENT = "hiteisee_auth_change";

export const isLoggedIn = () => localStorage.getItem(AUTH_KEY) === "1";
export const login = (user: string, pass: string) => {
  if (user === "admin" && pass === "admin") {
    localStorage.setItem(AUTH_KEY, "1");
    window.dispatchEvent(new Event(AUTH_EVENT));
    return true;
  }
  return false;
};
export const logout = () => {
  localStorage.removeItem(AUTH_KEY);
  window.dispatchEvent(new Event(AUTH_EVENT));
};

export const useAuth = () => {
  const [authed, setAuthed] = useState(isLoggedIn());
  useEffect(() => {
    const cb = () => setAuthed(isLoggedIn());
    window.addEventListener(AUTH_EVENT, cb);
    window.addEventListener("storage", cb);
    return () => {
      window.removeEventListener(AUTH_EVENT, cb);
      window.removeEventListener("storage", cb);
    };
  }, []);
  return authed;
};

export { DEFAULT_CONTENT };
