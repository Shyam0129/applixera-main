
import React from "react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/page-hero";
import SectionHeading from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ContactCTA from "@/components/ui/contact-cta";
import { Briefcase, MapPin, Clock, CheckCircle, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Careers = () => {
  const { toast } = useToast();
  
  // Current openings
  const openings = [
    {
      title: "Senior UI/UX Designer",
      type: "Full-time",
      location: "Remote",
      description:
        "We're looking for an experienced UI/UX Designer to create exceptional user experiences for web and mobile applications.",
      requirements: [
        "5+ years of experience in UI/UX design",
        "Proficiency in Figma, Adobe XD, or similar tools",
        "Strong portfolio demonstrating user-centered design",
        "Experience working with cross-functional teams",
      ],
    },
    {
      title: "Frontend Developer",
      type: "Full-time",
      location: "Hybrid",
      description:
        "Join our development team to build modern, responsive web interfaces using the latest technologies.",
      requirements: [
        "3+ years of experience with React or similar frameworks",
        "Proficiency in HTML, CSS, and JavaScript",
        "Experience with responsive design and cross-browser compatibility",
        "Understanding of performance optimization techniques",
      ],
    },
    {
      title: "Project Manager",
      type: "Full-time",
      location: "On-site",
      description:
        "Lead our project teams to deliver exceptional digital products on time and within budget.",
      requirements: [
        "3+ years experience in digital project management",
        "Strong client communication skills",
        "Experience with agile methodologies",
        "Ability to manage multiple projects simultaneously",
      ],
    },
    {
      title: "Marketing Specialist",
      type: "Part-time",
      location: "Remote",
      description:
        "Help us grow our brand presence and generate leads through various digital marketing channels.",
      requirements: [
        "2+ years experience in digital marketing",
        "Experience with social media marketing and content creation",
        "Knowledge of SEO and analytics",
        "Creative thinking and strategic planning abilities",
      ],
    },
  ];

  // Benefits
  const benefits = [
    {
      title: "Flexible Working Hours",
      description:
        "Work when you're most productive with our flexible scheduling options.",
    },
    {
      title: "Remote Work Options",
      description:
        "Work from anywhere with our remote-first approach to collaboration.",
    },
    {
      title: "Professional Development",
      description:
        "Regular training, conferences, and resources to help you grow your skills.",
    },
    {
      title: "Competitive Compensation",
      description: "Attractive salary packages based on experience and skills.",
    },
    {
      title: "Health & Wellness Benefits",
      description:
        "Comprehensive health insurance and wellness program allowances.",
    },
    {
      title: "Team Retreats",
      description:
        "Regular team gatherings to foster collaboration and build relationships.",
    },
  ];

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description: "We'll review your application and get back to you soon.",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        title="Join Our Team"
        subtitle="Build your career with us and help create exceptional digital experiences"
      >
        <Button asChild size="lg" className="bg-brand-500 hover:bg-brand-600">
          <a href="#openings">View Current Openings</a>
        </Button>
      </PageHero>

      {/* Why Join Us */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SectionHeading
                title="Why Join Applixera"
                subtitle="Be part of a team that values innovation, collaboration, and personal growth"
              />
              <p className="text-gray-600">
                At Applixera, we're building a team of passionate, talented individuals who are eager to make an impact through technology and design. We believe in creating an environment where people can do their best work, grow professionally, and enjoy the journey along the way.
              </p>
              <div className="space-y-4">
                {[
                  "Collaborative and supportive culture",
                  "Work on diverse, challenging projects",
                  "Opportunities for continuous learning",
                  "Make a meaningful impact through your work",
                  "Work-life balance that respects your personal time",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-brand-500 mr-2 shrink-0 mt-1"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg"
                alt="Team Collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Employee Benefits"
            subtitle="We take care of our team with comprehensive benefits and perks"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section id="openings" className="section bg-white">
        <div className="container">
          <SectionHeading
            title="Current Openings"
            subtitle="Explore our available positions and find your next career opportunity"
            align="center"
          />
          <div className="space-y-6 mt-12">
            {openings.map((job, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="bg-gray-50 border-b">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <CardTitle className="text-2xl">{job.title}</CardTitle>
                    <div className="flex flex-wrap gap-3 mt-3 md:mt-0">
                      <div className="flex items-center text-sm text-gray-500">
                        <Briefcase size={16} className="mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin size={16} className="mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock size={16} className="mr-1" />
                        Posted 2 weeks ago
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="space-y-2 mb-6">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle
                          size={16}
                          className="text-brand-500 mr-2 shrink-0 mt-1"
                        />
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-brand-500 hover:bg-brand-600">
                    <a href="#application">Apply Now</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application" className="section bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Apply for a Position"
              subtitle="Submit your application and our team will review it as soon as possible"
              align="center"
            />
            <Card className="mt-8">
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
                    <label htmlFor="position" className="block font-medium">
                      Position Applied For
                    </label>
                    <select
                      id="position"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      required
                    >
                      <option value="">Select a position</option>
                      {openings.map((job, index) => (
                        <option key={index} value={job.title}>
                          {job.title}
                        </option>
                      ))}
                      <option value="other">Other/Not Listed</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="block font-medium">
                      Cover Letter
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us why you're interested in this position and what you'll bring to the team"
                      rows={5}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-medium">Resume/CV</label>
                    <div className="border-2 border-dashed border-gray-200 rounded-md p-6 text-center">
                      <Upload className="mx-auto h-8 w-8 text-gray-400" />
                      <div className="mt-2">
                        <label
                          htmlFor="file-upload"
                          className="cursor-pointer text-brand-500 hover:text-brand-600"
                        >
                          Click to upload
                        </label>
                        <span className="text-gray-500"> or drag and drop</span>
                        <p className="text-xs text-gray-500 mt-1">
                          PDF, DOCX or RTF (max. 5MB)
                        </p>
                      </div>
                      <Input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        accept=".pdf,.docx,.rtf"
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-brand-500 hover:bg-brand-600">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            title="Our Team Culture"
            subtitle="Get a glimpse of what it's like to work at Applixera"
            align="center"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg">
                <img
                  src="/placeholder.svg"
                  alt={`Team Culture ${index + 1}`}
                  className="w-full h-auto aspect-square object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/about">Learn More About Our Company</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA
        title="Have questions about our openings?"
        subtitle="Get in touch with our HR team for more information."
        buttonText="Contact HR"
        buttonLink="/contact?dept=hr"
      />
    </Layout>
  );
};

export default Careers;
