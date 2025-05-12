
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
    <Card className={`h-full card-hover overflow-hidden ${className}`}>
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"></div>
      <CardHeader>
        <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white float">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="ghost" asChild className="p-0 h-auto hover:bg-transparent button-pop">
          <Link to={linkTo} className="inline-flex items-center text-indigo-600 hover:text-indigo-700">
            Learn more <ArrowRight size={16} className="ml-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
