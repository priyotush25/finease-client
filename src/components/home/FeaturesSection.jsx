import React from "react";
import {
  Wallet,
  PieChart,
  PiggyBank,
  Lock,
  Smartphone,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Wallet className="w-10 h-10 text-white" />,
      title: "Easy Transaction Tracking",
      desc: "Add income & expenses in seconds. Categorize effortlessly and never miss a detail.",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: <PieChart className="w-10 h-10 text-white" />,
      title: "Insightful Reports & Charts",
      desc: "Visualize spending patterns with beautiful pie charts, bar graphs, and monthly summaries.",
      gradient: "from-emerald-400 to-lime-500",
    },
    {
      icon: <PiggyBank className="w-10 h-10 text-white" />,
      title: "Smart Budgets & Goals",
      desc: "Set monthly budgets and savings targets. Get gentle reminders when you're close to limits.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: <Target className="w-10 h-10 text-white" />,
      title: "Achieve Financial Goals",
      desc: "Track progress toward dreams like vacations, emergency funds, or big purchases.",
      gradient: "from-lime-400 to-green-500",
    },
    {
      icon: <Lock className="w-10 h-10 text-white" />,
      title: "100% Private & Secure",
      desc: "Your data stays yours. Firebase-powered auth ensures no one else sees your finances.",
      gradient: "from-emerald-500 to-green-600",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-white" />,
      title: "Fully Responsive Design",
      desc: "Manage money seamlessly on phone, tablet, or desktop – anywhere, anytime.",
      gradient: "from-green-400 to-teal-400",
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
    <section className="py-20 bg-base-100 text-base-content">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="text-green-600">FinEase</span> Works
          </h2>

          {/* Green underline */}
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-6 rounded-full" />

          <p className="text-lg md:text-xl max-w-3xl mx-auto text-base-content/70">
            Simple, secure, and smart tools designed to help you take full control of your finances.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="
                relative
                group
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
              "
            >
              {/* Floating Icon */}
              <div
                className={`absolute -top-8 left-1/2 -translate-x-1/2 p-5 rounded-full bg-gradient-to-r ${feature.gradient} shadow-xl transition-transform duration-500 group-hover:scale-110`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <div className="mt-14 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-base md:text-lg text-base-content/70">
                  {feature.desc}
                </p>
              </div>

              {/* Accent bar */}
              <div
                className={`mt-6 h-1 w-16 mx-auto rounded-full bg-gradient-to-r ${feature.gradient} opacity-80`}
              />

              {/* Soft green hover glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 bg-green-400 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
