
import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Add scroll animation effect
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('fade-in-up');
        }
      });
    };
    
    // Initial check for elements in viewport
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Clean up
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow pt-16 md:pt-20">{children}</main>
      <Footer />
      
      {/* Enhanced decorative elements with more vibrant colors */}
      <div className="fixed top-20 left-10 w-64 h-64 bg-purple-500/30 rounded-full filter blur-3xl z-0 opacity-30"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-pink-500/30 rounded-full filter blur-3xl z-0 opacity-30"></div>
      <div className="fixed bottom-40 left-40 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl z-0 opacity-20"></div>
      <div className="fixed top-40 right-40 w-72 h-72 bg-green-400/20 rounded-full filter blur-3xl z-0 opacity-20"></div>
    </div>
  );
};

export default Layout;
