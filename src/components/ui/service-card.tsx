
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkTo: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  linkTo,
  className,
}) => {
  return (
    <Card className={`h-full hover:shadow-md transition-shadow ${className}`}>
      <CardHeader>
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand-100 text-brand-600">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="ghost" asChild className="p-0 h-auto hover:bg-transparent">
          <Link to={linkTo} className="inline-flex items-center text-brand-600 hover:text-brand-700">
            Learn more <ArrowRight size={16} className="ml-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
