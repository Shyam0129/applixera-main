
import React from "react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/page-hero";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import ContactCTA from "@/components/ui/contact-cta";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Layout as LayoutIcon,
  BookOpen,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "web-design",
      icon: <Globe size={28} className="text-brand-600" />,
      title: "Custom Web Design",
      description:
        "We create beautiful, responsive websites tailored to your specific business needs and goals. Our websites don't just look great – they perform exceptionally well, with fast loading times, intuitive navigation, and seamless functionality across all devices.",
      features: [
        "Responsive design for all devices",
        "Custom UI/UX tailored to your brand",
        "SEO-optimized structure",
        "Performance optimization",
        "CMS integration",
        "E-commerce capabilities",
      ],
      cta: "Start Your Web Project",
    },
    {
      id: "ui-ux-design",
      icon: <Palette size={28} className="text-brand-600" />,
      title: "UI/UX Design",
      description:
        "Our user-centric approach to UI/UX design creates intuitive, engaging digital experiences that keep users coming back. We combine aesthetic appeal with functional design to create interfaces that are both beautiful and easy to use.",
      features: [
        "User research and persona development",
        "Information architecture",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Usability testing",
        "Design system creation",
      ],
      cta: "Improve Your User Experience",
    },
    {
      id: "app-development",
      icon: <Smartphone size={28} className="text-brand-600" />,
      title: "App Development",
      description:
        "From concept to launch, we develop native and cross-platform mobile applications that provide seamless user experiences and solve real business problems. Our apps are built with performance, security, and scalability in mind.",
      features: [
        "Native iOS and Android development",
        "Cross-platform solutions",
        "Backend integration",
        "API development",
        "Push notification services",
        "App store optimization",
      ],
      cta: "Build Your Mobile App",
    },
    {
      id: "brand-build",
      icon: <LayoutIcon size={28} className="text-brand-600" />,
      title: "Brand Build",
      description:
        "Our equity-based service helps startups and established businesses develop a strong, cohesive brand identity that resonates with their target audience and stands out in a crowded marketplace.",
      features: [
        "Brand strategy development",
        "Logo and visual identity creation",
        "Brand voice and messaging",
        "Brand guidelines",
        "Marketing collateral design",
        "Brand experience consulting",
      ],
      cta: "Strengthen Your Brand",
    },
    {
      id: "cloud-computing",
      icon: <Cloud size={28} className="text-brand-600" />,
      title: "Cloud Computing Solutions",
      description:
        "We provide scalable cloud solutions that grow with your business, from infrastructure setup to migration services and ongoing management. Our cloud experts help you leverage the power of leading platforms to improve efficiency and reduce costs.",
      features: [
        "Cloud architecture design",
        "Migration services",
        "DevOps implementation",
        "Serverless solutions",
        "Scalability optimization",
        "Security and compliance",
      ],
      cta: "Explore Cloud Solutions",
    },
    {
      id: "graphic-design",
      icon: <BookOpen size={28} className="text-brand-600" />,
      title: "Graphic Design Course",
      description:
        "Learn professional graphic design skills from industry experts through our comprehensive course. Whether you're a beginner or looking to enhance your skills, our program covers everything from fundamental principles to advanced techniques.",
      features: [
        "Fundamental design principles",
        "Software mastery (Adobe Creative Suite)",
        "Typography and color theory",
        "Branding and identity design",
        "Print and digital design",
        "Portfolio development",
      ],
      cta: "Enroll in Our Course",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        title="Our Services"
        subtitle="Comprehensive digital solutions to help your business thrive in the digital landscape"
      />

      {/* Services Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-lg text-gray-600">
              At Applixera, we offer end-to-end digital services designed to help your business succeed online. From initial strategy to design, development, and ongoing support, our team of experts is here to bring your vision to life.
            </p>
          </div>

          {/* Individual Services */}
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 !== 0 ? "lg:col-start-2" : ""}>
                  <div className="mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle
                          size={18}
                          className="text-brand-500 mr-2 shrink-0 mt-1"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="bg-brand-500 hover:bg-brand-600">
                    <Link to="/contact">
                      {service.cta} <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </div>
                <div className={index % 2 !== 0 ? "lg:col-start-1" : ""}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-100 to-brand-200 rounded-lg transform rotate-3"></div>
                    <Card className="relative z-10">
                      <CardContent className="p-0 overflow-hidden">
                        <img
                          src="/placeholder.svg"
                          alt={service.title}
                          className="w-full h-auto"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Our Process"
            subtitle="How we approach every project to ensure success"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                number: "01",
                title: "Discovery",
                description: "We start by understanding your business, goals, and requirements.",
              },
              {
                number: "02",
                title: "Strategy & Planning",
                description: "We develop a detailed plan tailored to your specific needs.",
              },
              {
                number: "03",
                title: "Design & Development",
                description: "Our team brings your vision to life with precision and creativity.",
              },
              {
                number: "04",
                title: "Testing & Launch",
                description: "We rigorously test and refine before delivering the final product.",
              },
            ].map((step, index) => (
              <div key={index} className="relative text-center bg-white p-8 rounded-lg shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-100 text-brand-600 font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            title="Technologies We Use"
            subtitle="We work with the latest and most effective technologies to deliver exceptional results"
            align="center"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-12">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-gray-50 rounded-lg h-24"
              >
                <img
                  src="/placeholder.svg"
                  alt={`Technology ${index + 1}`}
                  className="max-h-12 max-w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Answers to common questions about our services"
            align="center"
          />
          <div className="max-w-3xl mx-auto space-y-6 mt-12">
            {[
              {
                question: "How long does it typically take to complete a website?",
                answer: "The timeline varies depending on the complexity of the project. A standard website usually takes 4-8 weeks, while more complex sites with custom functionality may take 12-16 weeks.",
              },
              {
                question: "What is your pricing structure?",
                answer: "We provide customized quotes based on the specific requirements of each project. Factors that influence pricing include design complexity, functionality needs, and the scope of content.",
              },
              {
                question: "Do you provide maintenance after the project is completed?",
                answer: "Yes, we offer various maintenance packages to ensure your website or application continues to function properly and stays up-to-date with the latest security standards.",
              },
              {
                question: "Can you help with content creation for my website?",
                answer: "Absolutely! We provide content creation services including copywriting, photography, video production, and graphic design to help complete your project.",
              },
              {
                question: "How do you handle revisions during the design process?",
                answer: "We include a specified number of revision rounds in our project quotes. Our iterative approach ensures we capture your feedback throughout the process.",
              },
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA
        title="Need a custom solution?"
        subtitle="Contact us to discuss your specific requirements and how we can help."
      />
    </Layout>
  );
};

export default Services;
