
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
    <section className={`bg-gradient-vibrant py-16 md:py-24 ${className} relative overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full filter blur-xl"></div>
      <div className="absolute bottom-0 left-20 w-80 h-80 bg-white/10 rounded-full filter blur-xl"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bounce-in">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 bounce-in delay-200">
            {subtitle}
          </p>
          <Button 
            size="lg" 
            asChild 
            className="bg-white text-indigo-700 hover:bg-gray-100 button-pop shadow-lg bounce-in delay-300"
          >
            <Link to={buttonLink}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
