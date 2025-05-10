
import React from "react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageSquare, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="text-brand-500" />,
      title: "Phone",
      details: ["+1 (123) 456-7890", "+1 (987) 654-3210"],
      link: "tel:+11234567890",
    },
    {
      icon: <Mail className="text-brand-500" />,
      title: "Email",
      details: ["info@applixera.com", "support@applixera.com"],
      link: "mailto:info@applixera.com",
    },
    {
      icon: <MapPin className="text-brand-500" />,
      title: "Location",
      details: ["123 Innovation Street", "Tech City, TC 12345"],
      link: "https://maps.google.com",
    },
    {
      icon: <Clock className="text-brand-500" />,
      title: "Office Hours",
      details: ["Monday-Friday: 9am-6pm", "Saturday: 10am-4pm"],
      link: null,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team to discuss your project or inquire about our services"
      />

      {/* Contact Form & Info */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Contact Form */}
            <div className="md:col-span-7">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below, and our team will get back to you as soon as possible. We're here to answer any questions you may have.
                </p>
              </div>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="block font-medium">
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="block font-medium">
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="What is this regarding?"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="block font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-brand-500 hover:bg-brand-600">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="md:col-span-5">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <p className="text-gray-600">
                  You can reach out to us directly using the contact details below or through our social media channels.
                </p>
              </div>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-brand-50 mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {info.title}
                      </h3>
                      {info.details.map((detail, i) => (
                        <div key={i} className="text-gray-600">
                          {detail}
                        </div>
                      ))}
                      {info.link && (
                        <a
                          href={info.link}
                          className="inline-block mt-1 text-brand-500 hover:text-brand-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.title === "Location" ? "View on Map" : "Contact Us"}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-10">
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {["facebook", "twitter", "instagram", "linkedin"].map(
                    (social, index) => (
                      <a
                        key={index}
                        href="#"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-50 text-brand-500 hover:bg-brand-100 transition-colors"
                      >
                        <span className="sr-only">{social}</span>
                        <Share2 size={20} />
                      </a>
                    )
                  )}
                </div>
              </div>
              
              {/* Live Chat */}
              <div className="mt-10 p-6 bg-brand-50 rounded-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-brand-100 mr-4">
                    <MessageSquare className="text-brand-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Live Chat</h3>
                    <p className="text-gray-600 mb-4">
                      Have a quick question? Chat with our support team in real-time.
                    </p>
                    <Button className="bg-white text-brand-600 hover:bg-gray-100">
                      Start Chat
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0">
        <div className="h-96 bg-gray-200">
          {/* This would be replaced with an actual map integration */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="mx-auto text-gray-400 mb-4" />
              <div className="text-gray-600">
                Interactive map would be displayed here
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 mt-8">
              {[
                {
                  question: "What information should I include in my initial inquiry?",
                  answer: "To help us provide the most accurate information, please include details about your project, desired timeline, budget considerations, and any specific requirements you may have.",
                },
                {
                  question: "How quickly can I expect a response?",
                  answer: "We typically respond to all inquiries within 24 business hours. For urgent matters, please call us directly.",
                },
                {
                  question: "Do you work with clients outside your local area?",
                  answer: "Yes, we work with clients globally. We use various communication tools to ensure smooth collaboration regardless of location.",
                },
                {
                  question: "How do I request a quote for my project?",
                  answer: "You can request a quote by filling out the contact form on this page, calling us directly, or sending an email with details about your project.",
                },
              ].map((faq, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
