
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/ui/section-heading";
import ServiceCard from "@/components/ui/service-card";
import TestimonialCard from "@/components/ui/testimonial-card";
import ContactCTA from "@/components/ui/contact-cta";
import { Globe, Smartphone, Palette, Cloud, Layout as LayoutIcon, BookOpen } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: <Globe size={24} />,
      title: "Custom Web Design",
      description: "Beautiful, responsive websites tailored to your business needs and goals.",
      linkTo: "/services#web-design",
    },
    {
      icon: <Palette size={24} />,
      title: "UI/UX Design",
      description: "User-centric design that creates seamless digital experiences.",
      linkTo: "/services#ui-ux-design",
    },
    {
      icon: <Smartphone size={24} />,
      title: "App Development",
      description: "Native and cross-platform mobile applications that perform flawlessly.",
      linkTo: "/services#app-development",
    },
    {
      icon: <LayoutIcon size={24} />,
      title: "Brand Build",
      description: "Equity-based service to establish and strengthen your brand identity.",
      linkTo: "/services#brand-build",
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud Computing",
      description: "Scalable cloud solutions that grow with your business needs.",
      linkTo: "/services#cloud-computing",
    },
    {
      icon: <BookOpen size={24} />,
      title: "Graphic Design Course",
      description: "Learn professional graphic design techniques from industry experts.",
      linkTo: "/services#graphic-design",
    },
  ];

  const testimonials = [
    {
      quote: "Applixera transformed our outdated website into a modern, user-friendly platform that's dramatically increased our conversion rates.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechVision Inc.",
      rating: 5,
    },
    {
      quote: "The mobile app Applixera developed for us has received outstanding feedback from users and helped us expand our customer base.",
      author: "Michael Chen",
      role: "Product Manager",
      company: "NexGen Solutions",
      rating: 5,
    },
    {
      quote: "Working with Applixera on our brand identity was a game-changer. They truly understood our vision and brought it to life brilliantly.",
      author: "Emma Rodriguez",
      role: "CEO",
      company: "Innovate Studios",
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-50 to-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Transforming Ideas Into{" "}
                <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl">
                We design and build exceptional websites and applications that drive results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-brand-500 hover:bg-brand-600">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-brand-500/10 rounded-full blur-3xl"></div>
              <img
                src="/placeholder.svg"
                alt="Digital Solutions"
                className="relative z-10 w-full h-auto rounded-lg shadow-lg animate-scale-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/placeholder.svg"
                alt="About Applixera"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <SectionHeading
                title="Building Digital Excellence Since 2018"
                subtitle="Applixera is a premier digital agency specializing in creating custom websites, applications, and brand experiences that help businesses thrive in the digital landscape."
              />
              <p className="text-gray-600">
                Our team of expert designers, developers, and strategists work together to deliver innovative solutions that meet your specific business needs and goals.
              </p>
              <Button variant="outline" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive digital solutions to elevate your business"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                linkTo={service.linkTo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Hear from businesses that have transformed their digital presence with Applixera"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-brand-900 text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">150+</div>
              <div className="text-brand-200">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">98%</div>
              <div className="text-brand-200">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">12</div>
              <div className="text-brand-200">Industry Awards</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">24/7</div>
              <div className="text-brand-200">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </Layout>
  );
};

export default Index;
