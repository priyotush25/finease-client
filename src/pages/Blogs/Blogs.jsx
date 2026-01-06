import React from 'react';
import { FiUser, FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Create a Realistic Monthly Budget That Actually Works",
      excerpt: "Discover proven strategies to build a sustainable budget, track expenses effectively, and stay financially disciplined without feeling restricted.",
      author: "Sarah Mitchell",
      date: "January 2, 2026",
      readTime: "7 min read",
      category: "Budgeting",
      featured: true,
    },
    {
      id: 2,
      title: "The Ultimate Guide to Building an Emergency Fund in 2026",
      excerpt: "Learn why an emergency fund is crucial, how much you should save, and practical steps to build one quickly — even on a tight income.",
      author: "James Carter",
      date: "December 28, 2025",
      readTime: "9 min read",
      category: "Savings",
      featured: false
    },
    {
      id: 3,
      title: "Understanding Your Spending Habits: A Data-Driven Approach",
      excerpt: "Use transaction tracking and category insights to uncover hidden spending patterns and make smarter financial decisions.",
      author: "Emma Rodriguez",
      date: "December 20, 2025",
      readTime: "6 min read",
      category: "Insights"
    },
    {
      id: 4,
      title: "Top 5 Mistakes People Make When Setting Financial Goals",
      excerpt: "Avoid common pitfalls that derail savings goals and learn how to set SMART financial targets that lead to real progress.",
      author: "Michael Chen",
      date: "December 15, 2025",
      readTime: "8 min read",
      category: "Goals"
    },
    {
      id: 5,
      title: "How FinEase Helped Me Pay Off $15,000 in Debt",
      excerpt: "A real user story: How consistent tracking, budget alerts, and visual reports turned overwhelming debt into financial freedom.",
      author: "Lisa Thompson",
      date: "December 10, 2025",
      readTime: "10 min read",
      category: "Success Story"
    },
    {
      id: 6,
      title: "Investment Basics for Beginners: Start Growing Your Money",
      excerpt: "Demystifying stocks, bonds, and index funds. Simple steps to begin investing safely while managing everyday finances.",
      author: "David Park",
      date: "December 5, 2025",
      readTime: "11 min read",
      category: "Investing"
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-neutral">
      {/* Hero Section - FinEase Branded */}
      <section className="bg-gradient-to-br from-accent via-primary to-accent text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            FinEase Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Practical tips, expert insights, and real stories to help you master your money and achieve financial peace.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
          <div className="rounded-2xl shadow-2xl overflow-hidden bg-accent-content">
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-12 lg:p-16 flex flex-col justify-center">
                <span className="inline-block px-4 py-2 bg-accent text-primary rounded-full text-sm font-medium mb-4">
                  Featured Article
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
                  <div className="flex items-center gap-2">
                    <FiUser className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCalendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiClock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <a
                  href={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-orange-600 transition"
                >
                  Read Full Article <FiArrowRight className="w-5 h-5" />
                </a>
              </div>
              {/* Replace with actual finance-related image later */}
              <div className="bg-gradient-to-br from-teal-100 to-blue-100 border-2 border-dashed border-gray-300 rounded-xl w-full h-96 md:h-full flex items-center justify-center">
                <p className="text-gray-500 text-lg font-medium">Budget Planning Illustration</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid - Latest Articles */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Latest Financial Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <article
              key={post.id}
              className="bg-accent-content rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Placeholder for finance-themed images */}
              <div className="bg-gradient-to-br from-indigo-100 to-teal-50 border-2 border-dashed border-gray-300 rounded-t-xl w-full h-56 flex items-center justify-center">
                <p className="text-gray-500 text-sm font-medium text-center px-4">
                  {post.category === "Savings" && "Emergency Fund"}
                  {post.category === "Insights" && "Analytics Dashboard"}
                  {post.category === "Goals" && "Financial Goals"}
                  {post.category === "Success Story" && "Debt Free Journey"}
                  {post.category === "Investing" && "Investment Growth"}
                </p>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                  <span className="font-medium text-primary">{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition">
                  <a href={`/blog/${post.id}`}>
                    {post.title}
                  </a>
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <FiUser className="w-4 h-4" />
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <FiArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;