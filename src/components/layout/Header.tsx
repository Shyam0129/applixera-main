
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Join Us", path: "/careers" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center">
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
            Applixera
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-600 link-underline"
            >
              {link.name}
            </Link>
          ))}
          <Button size="sm" className="ml-4 bg-brand-500 hover:bg-brand-600">
            Get Started
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="container py-4 space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-500 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button className="w-full bg-brand-500 hover:bg-brand-600">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
