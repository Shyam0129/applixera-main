
import React from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  children?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  align = "center",
  className,
  children,
}) => {
  return (
    <div className={cn("py-16 md:py-24 bg-gradient-to-br from-brand-50 to-white", className)}>
      <div className="container">
        <div className={cn(
          "max-w-4xl",
          align === "center" && "mx-auto text-center",
          align === "right" && "ml-auto text-right"
        )}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-xl text-muted-foreground">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default PageHero;
