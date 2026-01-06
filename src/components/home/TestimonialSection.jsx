import React from "react";

const testimonials = [
  {
    id: 2,
    name: "David Brown",
    role: "Software Developer",
    img: "https://randomuser.me/api/portraits/men/85.jpg",
    message:
      "Setting savings goals has never been simpler. I can clearly see my progress each month.",
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "Freelancer",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    message:
      "The charts and reports are so visual and helpful. I finally understand where my money goes!",
  },
  {
    id: 4,
    name: "Chris Evans",
    role: "Designer",
    img: "https://randomuser.me/api/portraits/men/20.jpg",
    message:
      "I love the clean UI and the intuitive layout. Managing my budget is actually fun now.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-base-100 text-base-content transition-colors">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-primary mb-4">
          What Our Users Say
        </h2>

        <div className="w-28 h-1 bg-gradient-to-r from-primary via-emerald-400 to-lime-400 mx-auto mb-6 rounded-full"></div>

        <p className="max-w-2xl mx-auto mb-12 text-base-content/70">
          Real feedback from people who improved their finances with FinEase.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="
                bg-base-200 
                rounded-3xl 
                shadow-lg 
                p-8 
                flex 
                flex-col 
                items-center 
                text-center
                hover:shadow-2xl 
                transition 
                hover:-translate-y-2
              "
            >
              {/* Quote Icon */}
              <svg
                className="w-10 h-10 text-primary mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.17 6A5.002 5.002 0 002 11v3a1 1 0 001 1h3v-4a1 1 0 011-1h1V6H7.17zM17.17 6A5.002 5.002 0 0012 11v3a1 1 0 001 1h3v-4a1 1 0 011-1h1V6h-3.83z" />
              </svg>

              {/* Message */}
              <p className="leading-relaxed mb-6 text-base-content/80">
                “{t.message}”
              </p>

              {/* User Info */}
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-2 object-cover border-2 border-primary"
              />
              <h4 className="text-xl font-bold text-primary">{t.name}</h4>
              <p className="text-sm text-base-content/60">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
