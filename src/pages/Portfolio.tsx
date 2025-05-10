
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import ContactCTA from "@/components/ui/contact-cta";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  // Categories for filtering
  const categories = [
    "All",
    "Web Design",
    "UI/UX Design",
    "Mobile App",
    "Branding",
    "Cloud Solutions",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  // Portfolio projects
  const projects = [
    {
      title: "TechVision Website Redesign",
      category: "Web Design",
      description:
        "A complete website redesign for a technology consulting firm, focusing on modern design and improved user experience.",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "HealthMate Mobile App",
      category: "Mobile App",
      description:
        "A healthcare app that connects patients with doctors for virtual consultations and appointment scheduling.",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "EcoLifestyle Brand Identity",
      category: "Branding",
      description:
        "Comprehensive branding package for an eco-friendly lifestyle company, including logo, color palette, and marketing materials.",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "RetailPro E-commerce Platform",
      category: "Web Design",
      description:
        "Custom e-commerce solution with advanced product filtering, user accounts, and secure payment processing.",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "TravelBuddy UI Design",
      category: "UI/UX Design",
      description:
        "User interface design for a travel planning application that simplifies trip organization and discovery.",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "CloudSync Migration",
      category: "Cloud Solutions",
      description:
        "Migration of legacy systems to a scalable cloud infrastructure for a financial services provider.",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "FoodFusion App",
      category: "Mobile App",
      description:
        "Recipe discovery and meal planning mobile application with personalized recommendations.",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "CreativeCo Website",
      category: "Web Design",
      description:
        "Dynamic portfolio website for a creative agency with interactive elements and content management system.",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "SportsFit Brand Refresh",
      category: "Branding",
      description:
        "Modernization of brand identity for a fitness equipment manufacturer to appeal to a younger demographic.",
      image: "/placeholder.svg",
      link: "#",
    },
  ];

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Client logos
  const clientLogos = Array.from({ length: 8 }).map((_, index) => ({
    name: `Client ${index + 1}`,
    logo: "/placeholder.svg",
  }));

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        title="Our Portfolio"
        subtitle="Explore our recent projects and see how we've helped businesses achieve their digital goals"
      />

      {/* Portfolio Filters */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={activeCategory === category ? "default" : "outline"}
                className={
                  activeCategory === category
                    ? "bg-brand-500 hover:bg-brand-600"
                    : ""
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow h-full"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-6 w-full">
                        <Link
                          to={project.link}
                          className="text-white hover:underline flex items-center justify-center bg-brand-500 hover:bg-brand-600 p-2 rounded-md w-full"
                        >
                          View Project <ExternalLink size={16} className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-brand-500 mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Trusted by Leading Companies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-white rounded-lg"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 max-w-full grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Intro */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Case Studies</h2>
            <p className="text-lg text-gray-600 mb-8">
              Dive deeper into our most impactful projects and discover how we helped our clients
              overcome challenges and achieve exceptional results.
            </p>
            <Button asChild className="bg-brand-500 hover:bg-brand-600">
              <Link to="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-brand-500 font-semibold mb-2">Featured Case Study</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                TechVision Website Redesign
              </h2>
              <div className="space-y-4 text-gray-600 mb-6">
                <p>
                  TechVision, a leading technology consulting firm, approached us to redesign their
                  outdated website and improve user engagement.
                </p>
                <p>
                  Our team implemented a modern design with improved information architecture, resulting
                  in a 45% increase in time on site and a 60% increase in lead generation.
                </p>
              </div>
              <div className="space-y-4 mb-6">
                <div>
                  <div className="font-medium">Increase in Conversion Rate</div>
                  <div className="h-2 bg-gray-200 rounded-full mt-2">
                    <div className="h-2 bg-brand-500 rounded-full w-3/4"></div>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span>Previous</span>
                    <span className="font-semibold">75% increase</span>
                  </div>
                </div>
                <div>
                  <div className="font-medium">Reduction in Bounce Rate</div>
                  <div className="h-2 bg-gray-200 rounded-full mt-2">
                    <div className="h-2 bg-brand-500 rounded-full w-2/3"></div>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span>Previous</span>
                    <span className="font-semibold">65% decrease</span>
                  </div>
                </div>
              </div>
              <Button asChild className="bg-brand-500 hover:bg-brand-600">
                <Link to="/case-studies/techvision">Read Full Case Study</Link>
              </Button>
            </div>
            <div>
              <div className="relative">
                <div className="absolute inset-0 bg-brand-200 rounded-lg transform rotate-3"></div>
                <img
                  src="/placeholder.svg"
                  alt="TechVision Website"
                  className="relative z-10 rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA
        title="Ready to start your project?"
        subtitle="Contact us to discuss how we can help you achieve your digital goals."
      />
    </Layout>
  );
};

export default Portfolio;
