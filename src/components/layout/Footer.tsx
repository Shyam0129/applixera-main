
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-xl font-bold bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
                Applixera
              </span>
            </Link>
            <p className="text-gray-600 text-sm">
              Transforming ideas into exceptional digital experiences. We build websites and applications that drive results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-brand-500">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-500">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-500">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-500">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-600 hover:text-brand-500 text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-brand-500 text-sm">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-600 hover:text-brand-500 text-sm">Portfolio</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-brand-500 text-sm">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-brand-500 text-sm">Blog</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-600 hover:text-brand-500 text-sm">Custom Web Design</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-brand-500 text-sm">UI/UX Design</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-brand-500 text-sm">App Development</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-brand-500 text-sm">Brand Build</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-brand-500 text-sm">Cloud Computing</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-medium text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-600 text-sm mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white"
              />
              <Button size="sm" className="bg-brand-500 hover:bg-brand-600">
                <Mail size={16} className="mr-2" /> Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="py-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-500">
            © {currentYear} Applixera. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-brand-500">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-sm text-gray-500 hover:text-brand-500">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
