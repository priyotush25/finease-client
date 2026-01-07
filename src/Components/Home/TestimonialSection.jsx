import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Container from "../Container/Container";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Student",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    message: "FinEase helped me track my expenses like never before. The charts are super insightful and actually easy to understand!",
  },
  {
    id: 2,
    name: "Mark Thompson",
    role: "Software Engineer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    message: "I love how easy it is to set saving goals and see my progress. The tech stack is solid and the UI is incredibly smooth.",
  },
  {
    id: 3,
    name: "Sara Williams",
    role: "Freelancer",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    message: "The UI is beautiful and intuitive. Managing my freelance taxes and daily finances has never been so fun and organized!",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-base-100 transition-colors duration-300">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-4 tracking-widest uppercase border border-emerald-500/20">
            User Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-base-content mb-6">
            Trusted by <span className="text-emerald-600">Smart Savers</span>
          </h2>
          <p className="text-lg text-base-content/60 max-w-2xl leading-relaxed">
            Discover how FinEase is transforming the way people interact with their money, one transaction at a time.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="group relative bg-base-200/40 backdrop-blur-sm rounded-[2.5rem] p-8 border border-base-content/5 transition-all duration-500 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/5 hover:-translate-y-2"
            >
              {/* Floating Quote Icon */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 transform rotate-12 group-hover:rotate-0 transition-transform">
                <FaQuoteLeft size={20} />
              </div>

              {/* Message */}
              <div className="mb-8">
                <p className="text-base-content/70 italic leading-relaxed text-lg">
                  "{t.message}"
                </p>
              </div>

              {/* User Identity */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-base-content/10">
                <div className="relative">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-14 h-14 rounded-2xl object-cover ring-2 ring-emerald-500/20 group-hover:ring-emerald-500 transition-all"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-base-100 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-base-content group-hover:text-emerald-600 transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-xs font-medium text-base-content/40 tracking-wide uppercase">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Social Proof Stats */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
           <p className="text-sm font-bold uppercase tracking-widest text-base-content">Featured In:</p>
           <div className="text-2xl font-black text-base-content">FORBES</div>
           <div className="text-2xl font-black text-base-content">FINTECH</div>
           <div className="text-2xl font-black text-base-content">TECHRUN</div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;