
import React from "react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/page-hero";
import SectionHeading from "@/components/ui/section-heading";
import ContactCTA from "@/components/ui/contact-cta";
import { CheckCircle } from "lucide-react";

const About = () => {
  const values = [
    {
      title: "Innovation",
      description:
        "We constantly explore new technologies and approaches to deliver cutting-edge solutions.",
    },
    {
      title: "Excellence",
      description:
        "We strive for perfection in every project, paying attention to the smallest details.",
    },
    {
      title: "Collaboration",
      description:
        "We work closely with our clients, making them an integral part of the creative process.",
    },
    {
      title: "Integrity",
      description:
        "We maintain the highest ethical standards in all our business practices and relationships.",
    },
    {
      title: "Growth",
      description:
        "We help our clients grow while continuously expanding our own knowledge and capabilities.",
    },
    {
      title: "Impact",
      description:
        "We aim to create meaningful solutions that make a positive difference for our clients.",
    },
  ];

  const timeline = [
    {
      year: "2018",
      title: "The Beginning",
      description:
        "Applixera was founded with a mission to provide innovative digital solutions.",
    },
    {
      year: "2019",
      title: "Expansion",
      description:
        "Expanded our team and service offerings to include mobile app development.",
    },
    {
      year: "2020",
      title: "Going Global",
      description:
        "Started working with international clients and opened our second office.",
    },
    {
      year: "2021",
      title: "New Horizons",
      description:
        "Introduced our cloud computing solutions and graphic design courses.",
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description:
        "Received multiple awards for our innovative designs and client satisfaction.",
    },
    {
      year: "2023",
      title: "Continued Growth",
      description:
        "Expanded our team to over 50 talented professionals and launched new service lines.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        title="About Applixera"
        subtitle="We're a team of designers, developers, and strategists passionate about creating exceptional digital experiences"
      />

      {/* Mission & Vision */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
              <p className="text-gray-600">
                To empower businesses with innovative digital solutions that drive growth,
                enhance user experiences, and create lasting value in an ever-evolving
                digital landscape.
              </p>
              <ul className="space-y-3">
                {["Client-focused approach", "Technical excellence", "Innovative solutions", "Measurable results"].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-brand-500 mr-2 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading digital agency known for creating transformative
                digital experiences that set new industry standards and help businesses
                thrive in the digital age.
              </p>
              <ul className="space-y-3">
                {["Industry leadership", "Continuous innovation", "Global impact", "Long-term partnerships"].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-brand-500 mr-2 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block w-20 h-20 rounded-full overflow-hidden mb-4">
                <img
                  src="/placeholder.svg"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </span>
              <h2 className="text-2xl md:text-3xl font-bold">Founder's Note</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                When I founded Applixera in 2018, my vision was to create a company that would not just build websites and applications, but would craft digital experiences that truly impact our clients' businesses and their customers' lives.
              </p>
              <p>
                Having worked in the tech industry for over a decade, I noticed a gap between what businesses needed and what traditional agencies delivered. Too often, digital projects focused on aesthetics at the expense of functionality, or vice versa.
              </p>
              <p>
                At Applixera, we've assembled a team of passionate professionals who understand that great digital products require both form and function. We believe in collaboration, transparency, and measurable results.
              </p>
              <p>
                As we continue to grow and evolve, our commitment to excellence and innovation remains unwavering. We're excited about the future and the opportunity to help more businesses thrive in the digital landscape.
              </p>
              <div className="pt-4">
                <p className="font-medium text-gray-900">Alex Mitchell</p>
                <p className="text-sm">Founder & CEO, Applixera</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Our Journey"
            subtitle="The story of Applixera's growth and evolution"
            align="center"
          />
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-10 md:pl-0">
                  {/* Timeline line */}
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-5 top-8 bottom-0 w-px bg-brand-200 md:left-1/2 md:ml-[-0.5px]"></div>
                  )}
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 w-10 h-10 rounded-full bg-brand-100 border-4 border-brand-500 flex items-center justify-center text-brand-700 font-bold md:left-1/2 md:ml-[-20px]">
                    {index + 1}
                  </div>
                  
                  {/* Timeline content */}
                  <div className={`md:w-1/2 md:pr-12 ${index % 2 === 0 ? 'md:text-right md:ml-auto md:pl-12' : ''}`}>
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <div className="font-bold text-brand-500 mb-1">{item.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA
        title="Ready to start your project with us?"
        subtitle="Let's discuss how we can help you achieve your digital goals."
      />
    </Layout>
  );
};

export default About;
