import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

// No animations — renders children directly (light theme, no motion)
const AnimatedSection = ({ children, className = "" }: Props) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default AnimatedSection;
