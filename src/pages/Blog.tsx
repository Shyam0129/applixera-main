
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ContactCTA from "@/components/ui/contact-cta";
import { Link } from "react-router-dom";
import { Search, Calendar, User, Tag, ArrowRight } from "lucide-react";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Categories for filtering
  const categories = [
    "All",
    "Web Design",
    "UI/UX",
    "Development",
    "Technology",
    "Business",
    "News",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  // Blog posts
  const posts = [
    {
      id: "1",
      title: "10 UI/UX Trends That Will Dominate in 2023",
      excerpt:
        "Explore the key design trends that will shape user experiences in the coming year, from micro-interactions to immersive 3D elements.",
      category: "UI/UX",
      author: "Jane Smith",
      date: "May 5, 2023",
      image: "/placeholder.svg",
      featured: true,
    },
    {
      id: "2",
      title: "The Importance of Website Performance for SEO",
      excerpt:
        "Learn how website speed and performance metrics directly impact your search engine rankings and user engagement.",
      category: "Web Design",
      author: "Michael Johnson",
      date: "April 22, 2023",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: "3",
      title: "React vs Angular: Choosing the Right Framework for Your Project",
      excerpt:
        "A comprehensive comparison of two popular JavaScript frameworks to help you make an informed decision for your next web application.",
      category: "Development",
      author: "David Chen",
      date: "April 15, 2023",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: "4",
      title: "Building Accessible Web Applications: A Complete Guide",
      excerpt:
        "Practical tips and techniques to ensure your web applications are accessible to all users, including those with disabilities.",
      category: "Development",
      author: "Sarah Johnson",
      date: "April 8, 2023",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: "5",
      title: "The Rise of Serverless Architecture",
      excerpt:
        "Explore how serverless architecture is changing the way we build and deploy web applications, offering scalability and cost efficiency.",
      category: "Technology",
      author: "Alex Thompson",
      date: "March 30, 2023",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: "6",
      title: "Designing for Dark Mode: Best Practices and Considerations",
      excerpt:
        "Learn how to implement effective dark mode designs that enhance user experience while maintaining brand consistency.",
      category: "UI/UX",
      author: "Emma Wilson",
      date: "March 22, 2023",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: "7",
      title: "How to Conduct Effective User Research for Your Digital Product",
      excerpt:
        "A step-by-step guide to planning and executing user research that yields actionable insights for your product development.",
      category: "UI/UX",
      author: "James Rodriguez",
      date: "March 15, 2023",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: "8",
      title: "Integrating AI into Modern Web Applications",
      excerpt:
        "Discover practical ways to leverage artificial intelligence to enhance functionality and user experience in web applications.",
      category: "Technology",
      author: "Priya Patel",
      date: "March 8, 2023",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: "9",
      title: "Applixera Wins Web Design Agency of the Year Award",
      excerpt:
        "We're proud to announce that Applixera has been recognized as the Top Web Design Agency for the second consecutive year.",
      category: "News",
      author: "Marketing Team",
      date: "March 1, 2023",
      image: "/placeholder.svg",
      featured: false,
    },
  ];

  // Filter posts based on active category and search query
  const filteredPosts = posts
    .filter(
      (post) => activeCategory === "All" || post.category === activeCategory
    )
    .filter(
      (post) =>
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Get the featured post
  const featuredPost = posts.find((post) => post.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        title="Blog & Insights"
        subtitle="Stay updated with the latest trends, tips, and insights from our team of experts"
      />

      {/* Search Bar */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container">
          <div className="max-w-xl mx-auto flex items-center">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button className="ml-2 bg-brand-500 hover:bg-brand-600">Search</Button>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-brand-500">
                  <Tag size={16} />
                  <span>{featuredPost.category}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 text-lg">{featuredPost.excerpt}</p>
                <div className="flex flex-wrap items-center text-sm text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <User size={16} className="mr-1" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {featuredPost.date}
                  </div>
                </div>
                <Button asChild className="bg-brand-500 hover:bg-brand-600">
                  <Link to={`/blog/${featuredPost.id}`}>
                    Read Article <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
              <div>
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-8 bg-gray-50">
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

      {/* Blog Posts */}
      <section className="section bg-white">
        <div className="container">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover:shadow-md transition-shadow h-full"
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-brand-500 text-white px-2 py-1 rounded text-xs">
                      {post.category}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{post.excerpt}</p>
                    <div className="flex flex-wrap items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <User size={14} className="mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      asChild
                      className="p-0 h-auto hover:bg-transparent"
                    >
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-brand-600 hover:text-brand-700"
                      >
                        Read More <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold mb-4">No articles found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or category filters to find what you're looking for.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
              >
                View All Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest articles, tutorials, and updates from our team delivered directly to your inbox.
            </p>
            <div className="flex max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="rounded-r-none"
              />
              <Button className="rounded-l-none bg-brand-500 hover:bg-brand-600">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA
        title="Have a topic you'd like us to cover?"
        subtitle="Let us know what you want to read about next."
        buttonText="Suggest a Topic"
        buttonLink="/contact?topic=blog"
      />
    </Layout>
  );
};

export default Blog;
