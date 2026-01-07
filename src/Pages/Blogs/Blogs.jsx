import React from 'react';
import { FiUser, FiCalendar, FiClock, FiArrowRight, FiTag } from 'react-icons/fi';
import Container from '../../Components/Container/Container';


const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Create a Realistic Monthly Budget That Actually Works",
      excerpt: "Discover proven strategies to build a sustainable budget, track expenses effectively, and stay financially disciplined without feeling restricted.",
      author: "Sarah Mitchell",
      date: "Jan 2, 2026",
      readTime: "7 min",
      category: "Budgeting",
      featured: true,
      color: "from-emerald-400 to-cyan-500"
    },
    {
      id: 2,
      title: "Building an Emergency Fund in 2026",
      excerpt: "Learn why an emergency fund is crucial and practical steps to build one quickly — even on a tight income.",
      author: "James Carter",
      date: "Dec 28, 2025",
      readTime: "9 min",
      category: "Savings",
      color: "from-green-400 to-emerald-600"
    },
    {
      id: 3,
      title: "Data-Driven Spending Insights",
      excerpt: "Use transaction tracking and category insights to uncover hidden patterns and make smarter financial decisions.",
      author: "Emma Rodriguez",
      date: "Dec 20, 2025",
      readTime: "6 min",
      category: "Insights",
      color: "from-teal-400 to-emerald-500"
    },
    {
      id: 4,
      title: "5 Financial Goal Mistakes",
      excerpt: "Avoid common pitfalls that derail savings goals and learn how to set SMART financial targets.",
      author: "Michael Chen",
      date: "Dec 15, 2025",
      readTime: "8 min",
      category: "Goals",
      color: "from-lime-400 to-green-500"
    },
    {
      id: 5,
      title: "Paying Off $15k in Debt",
      excerpt: "How consistent tracking and visual reports turned overwhelming debt into financial freedom.",
      author: "Lisa Thompson",
      date: "Dec 10, 2025",
      readTime: "10 min",
      category: "Success Story",
      color: "from-emerald-500 to-teal-700"
    },
    {
      id: 6,
      title: "Investment Basics for Beginners",
      excerpt: "Demystifying stocks and index funds. Simple steps to begin investing safely while managing daily cash.",
      author: "David Park",
      date: "Dec 5, 2025",
      readTime: "11 min",
      category: "Investing",
      color: "from-green-500 to-teal-500"
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-base-100 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-emerald-950 py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-500/10 blur-[100px] rounded-full -ml-36 -mb-36"></div>
        
        <Container>
          <div className="relative z-10 text-center">
            <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 mb-6 tracking-widest uppercase inline-block border border-emerald-500/30">
              Knowledge Hub
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              Master Your <span className="text-emerald-500">Wealth</span>
            </h1>
            <p className="text-xl text-emerald-100/70 max-w-2xl mx-auto leading-relaxed">
              Practical tips and expert insights to help you achieve financial peace and grow your savings.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Post Card */}
      {featuredPost && (
        <Container className="-mt-16 relative z-20">
          <div className="bg-base-100 dark:bg-base-200 border border-base-content/10 rounded-[2.5rem] shadow-2xl overflow-hidden group">
            <div className="grid lg:grid-cols-2">
              <div className={`h-64 lg:h-auto bg-gradient-to-br ${featuredPost.color} relative overflow-hidden flex items-center justify-center p-12`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                <h3 className="text-white text-4xl font-black text-center drop-shadow-lg leading-tight">
                    {featuredPost.category} <br/> Strategies
                </h3>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm mb-4 uppercase tracking-tighter">
                  <FiTag /> {featuredPost.category}
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-base-content mb-6 leading-tight group-hover:text-emerald-600 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-base-content/60 text-lg mb-8 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-y-4 gap-x-8 text-sm text-base-content/40 border-t border-base-content/5 pt-8">
                  <div className="flex items-center gap-2"><FiUser className="text-emerald-500"/> {featuredPost.author}</div>
                  <div className="flex items-center gap-2"><FiCalendar className="text-emerald-500"/> {featuredPost.date}</div>
                  <div className="flex items-center gap-2"><FiClock className="text-emerald-500"/> {featuredPost.readTime}</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}

      {/* Blog Grid */}
      <section className="py-24">
        <Container>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black text-base-content">Latest Articles</h2>
            <div className="h-1 flex-grow mx-8 bg-base-content/5 rounded-full hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className={`h-52 rounded-3xl bg-gradient-to-br ${post.color} mb-6 relative overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-emerald-500/10 flex items-center justify-center`}>
                    <span className="text-white/30 text-6xl font-black">{post.category[0]}</span>
                </div>

                <div className="flex items-center gap-3 text-xs font-bold text-emerald-600 uppercase mb-4">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-base-content/20"></span>
                  <span className="text-base-content/40">{post.readTime} read</span>
                </div>

                <h3 className="text-xl font-extrabold text-base-content mb-3 group-hover:text-emerald-600 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-base-content/50 text-sm leading-relaxed mb-6 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between group-hover:translate-x-1 transition-transform">
                  <span className="text-xs font-medium text-base-content/40">{post.date}</span>
                  <div className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <FiArrowRight />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Blogs;