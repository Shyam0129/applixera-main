
import React from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  children?: React.ReactNode;
  colorScheme?: "primary" | "secondary" | "accent" | "vibrant" | "warm" | "fresh";
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  align = "center",
  className,
  children,
  colorScheme = "primary",
}) => {
  const gradientClasses = {
    primary: "bg-gradient-to-br from-brand-50 to-white",
    secondary: "bg-gradient-fresh",
    accent: "bg-gradient-warm",
    vibrant: "bg-gradient-vibrant",
    warm: "bg-gradient-warm",
    fresh: "bg-gradient-fresh"
  };

  return (
    <div 
      className={cn(
        "py-16 md:py-24 overflow-hidden relative",
        gradientClasses[colorScheme],
        className
      )}
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 blob bg-white/10"></div>
      <div className="absolute top-20 right-20 w-32 h-32 blob bg-white/20 delay-300"></div>
      <div className="absolute bottom-10 left-1/3 w-40 h-40 blob bg-white/15 delay-100"></div>
      
      <div className="container relative z-10">
        <div className={cn(
          "max-w-4xl",
          align === "center" && "mx-auto text-center",
          align === "right" && "ml-auto text-right"
        )}>
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bounce-in"
          >
            {title}
          </h1>
          {subtitle && (
            <p 
              className="mt-4 text-xl text-muted-foreground bounce-in delay-200"
            >
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8 bounce-in delay-300">{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default PageHero;
