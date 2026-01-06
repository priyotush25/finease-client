import React from "react";
import Container from "../../components/layout/Container";
import { motion } from "framer-motion";
import {
  Lock,
  PieChart,
  UserCheck,
  Target,
  Sparkles,
  Shield,
  Users,
  TrendingUp,
  Calendar,
  Heart,
} from "lucide-react";

const About = () => {
  const cardVariants = {
    offscreen: { y: 60, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.3, duration: 0.9 },
    },
  };

  const values = [
    { icon: <Lock className="w-12 h-12 text-white" />, title: "Bank-Level Security", desc: "Your financial data is encrypted and protected with industry-leading standards.", gradient: "from-emerald-500 to-green-600" },
    { icon: <PieChart className="w-12 h-12 text-white" />, title: "Clear Insights", desc: "Beautiful charts and reports that make understanding your finances effortless.", gradient: "from-green-400 to-emerald-500" },
    { icon: <UserCheck className="w-12 h-12 text-white" />, title: "User-First Design", desc: "Intuitive interface crafted for real people, not just finance experts.", gradient: "from-lime-400 to-green-500" },
    { icon: <Target className="w-12 h-12 text-white" />, title: "Goal Oriented", desc: "Tools to set, track, and achieve your financial dreams — big or small.", gradient: "from-green-500 to-teal-500" },
    { icon: <Sparkles className="w-12 h-12 text-white" />, title: "Smart Automation", desc: "Automatic categorization and gentle reminders keep you on track.", gradient: "from-emerald-400 to-lime-500" },
    { icon: <Heart className="w-12 h-12 text-white" />, title: "Built with Care", desc: "Every feature is designed to reduce stress and bring peace of mind.", gradient: "from-teal-400 to-emerald-600" },
  ];

  const timeline = [
    { year: "2023", event: "FinEase Launched", desc: "Started with a simple mission: make personal finance stress-free." },
    { year: "2024", event: "10,000+ Users", desc: "Grew rapidly thanks to word-of-mouth and trusted security." },
    { year: "2025", event: "Major Redesign", desc: "Introduced beautiful charts, goals, and responsive design." },
    { year: "2026", event: "Today", desc: "Continuing to empower thousands with smarter money tools." },
  ];

  const Counter = ({ end, label }) => {
    // Simple counter animation (you can enhance with a library if needed)
    return (
      <motion.div className="text-center" variants={cardVariants}>
        <motion.h3 className="text-5xl font-bold text-green-600" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          {end}+
        </motion.h3>
        <p className="text-lg text-base-content/70 mt-2">{label}</p>
      </motion.div>
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-base-100 to-base-200 text-base-content overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-green-600">FinEase</span>
          </h1>
          <div className="w-40 h-1.5 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-10 rounded-full" />
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-base-content/80 leading-relaxed">
            FinEase was born from a simple belief: managing money shouldn't be complicated or stressful. 
            We're here to give you clarity, control, and confidence — one smart feature at a time.
          </p>
        </motion.div>

     
        {/* Values Grid - 6 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
              className="relative group rounded-3xl p-10 bg-base-100 border border-base-300 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 h-full flex flex-col"
            >
              <div className={`absolute -top-10 left-1/2 -translate-x-1/2 p-7 rounded-full bg-gradient-to-r ${value.gradient} shadow-2xl transition-transform duration-500 group-hover:scale-110`}>
                {value.icon}
              </div>
              <div className="mt-16 text-center flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-base-content/70 leading-relaxed flex-grow">{value.desc}</p>
                <div className={`mt-8 h-1 w-24 mx-auto rounded-full bg-gradient-to-r ${value.gradient} opacity-80`} />
              </div>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-15 bg-green-400 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-green-400 to-emerald-500" />
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={cardVariants}
                className={`relative flex items-center mb-16 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                  <h4 className="text-2xl font-bold text-green-600">{item.year}</h4>
                  <h5 className="text-xl font-semibold mt-2">{item.event}</h5>
                  <p className="text-base-content/70 mt-3">{item.desc}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-lg" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Optional Team Section - Uncomment when ready */}
        {/*
        <div className="mt-32">
          <h2 className="text-4xl font-bold text-center mb-16">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            // Add team member cards with photos here
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default About;