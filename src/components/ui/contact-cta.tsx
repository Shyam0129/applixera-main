
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ContactCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

const ContactCTA: React.FC<ContactCTAProps> = ({
  title = "Ready to transform your digital presence?",
  subtitle = "Contact our team to discuss your project and get started today.",
  buttonText = "Contact Us",
  buttonLink = "/contact",
  className,
}) => {
  return (
    <section className={`bg-brand-900 py-16 md:py-24 ${className}`}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-brand-100 mb-8">
            {subtitle}
          </p>
          <Button size="lg" asChild className="bg-white text-brand-800 hover:bg-gray-100">
            <Link to={buttonLink}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
