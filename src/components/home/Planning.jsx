import React from "react";
import { motion } from "framer-motion";
import { BarChart2, PiggyBank, Heart } from "lucide-react";

export default function Planning() {
  const cards = [
    {
      icon: <BarChart2 className="w-8 h-8 text-white" />,
      title: "Better Control",
      desc: "Know exactly where your money goes and avoid overspending.",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: <PiggyBank className="w-8 h-8 text-white" />,
      title: "Build Savings",
      desc: "Set aside money every month to achieve long-term goals.",
      gradient: "from-emerald-500 to-green-600",
    },
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: "Reduce Stress",
      desc: "When your finances are organized, you feel more confident and secure.",
      gradient: "from-lime-400 to-green-500",
    },
  ];

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.3, duration: 0.8 },
    },
  };

  return (
    <section className="w-full py-20 bg-base-200 text-base-content transition-colors">
      <div className="max-w-5xl mx-auto text-center px-6">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="text-green-600">Financial Planning</span>
        </h2>

        {/* Green underline */}
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-6 rounded-full" />

        <p className="text-lg md:text-xl max-w-3xl mx-auto text-base-content/70 leading-relaxed">
          Gain clarity, control, and confidence over your finances. Plan your spending,
          save smartly, and prepare for a secure future—all with simple, effective strategies.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="
                relative
                rounded-3xl
                p-8
                bg-base-100
                border
                border-base-300
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-500
                hover:-translate-y-3
                group
              "
            >
              {/* Icon */}
              <div
                className={`p-4 rounded-full mb-5 bg-gradient-to-r ${card.gradient} shadow-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}
              >
                {card.icon}
              </div>

              <h3 className="text-xl font-bold mb-2">
                {card.title}
              </h3>

              <p className="text-base md:text-lg text-base-content/70">
                {card.desc}
              </p>

              {/* Soft green hover overlay */}
              <div className="absolute inset-0 rounded-3xl bg-green-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
