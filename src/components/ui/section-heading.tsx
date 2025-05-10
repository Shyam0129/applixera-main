
import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = "left",
  className,
  titleClassName,
  subtitleClassName,
}) => {
  return (
    <div
      className={cn(
        "mb-10",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      )}
    >
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold tracking-tight",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg text-muted-foreground max-w-3xl",
            align === "center" && "mx-auto",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
