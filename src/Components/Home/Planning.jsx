import React from "react";
import { FiCheckCircle, FiTrendingUp, FiShield } from "react-icons/fi";

export default function Planning() {
  const steps = [
    {
      icon: <FiCheckCircle className="text-emerald-500" />,
      title: "Better Control",
      desc: "Gain a bird's-eye view of your cash flow. Know exactly where every cent goes and eliminate wasteful spending habit.",
      badge: "Management"
    },
    {
      icon: <FiTrendingUp className="text-emerald-500" />,
      title: "Build Savings",
      desc: "Automate your financial growth. Strategically set aside funds to reach your milestones faster and more efficiently.",
      badge: "Growth"
    },
    {
      icon: <FiShield className="text-emerald-500" />,
      title: "Reduce Stress",
      desc: "Eliminate the anxiety of the unknown. An organized budget is the best defense against unexpected life events.",
      badge: "Security"
    }
  ];

  return (
    <section className="w-full bg-base-100 py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16 border-b border-base-content/10 pb-10">
          <div className="max-w-2xl">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Strategic Wealth</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-base-content mt-2 tracking-tight">
              Why <span className="text-emerald-600 italic">Financial Planning</span> Matters
            </h2>
          </div>
          <p className="text-base-content/60 text-lg max-w-md md:text-right">
            Clarity is the foundation of wealth. We help you transform messy transactions into a clear roadmap for your future.
          </p>
        </div>

        {/* Planning Roadmap Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-3xl bg-base-200/50 border border-base-content/5 hover:border-emerald-500/20 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5"
            >
              {/* Step Number Decoration */}
              <span className="absolute top-8 right-8 text-6xl font-black text-base-content/5 group-hover:text-emerald-500/10 transition-colors">
                0{index + 1}
              </span>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-2xl mb-6">
                  {step.icon}
                </div>
                
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-2 py-1 rounded-md">
                  {step.badge}
                </span>

                <h3 className="text-2xl font-bold text-base-content mt-4 mb-3 group-hover:text-emerald-600 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-base-content/70 leading-relaxed text-sm md:text-base">
                  {step.desc}
                </p>
              </div>

              {/* Bottom Hover Bar */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Informational Visual Aid */}
        

        {/* Bottom Callout */}
        <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-base-200 border border-base-content/5 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Join 5,000+ people planning their future this month.
            </div>
        </div>
      </div>
    </section>
  );
}