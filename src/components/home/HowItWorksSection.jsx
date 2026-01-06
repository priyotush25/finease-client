import React from "react";
import { FaUserPlus, FaPlusCircle, FaChartBar } from "react-icons/fa";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <FaUserPlus className="text-4xl text-white" />,
      title: "Sign Up in Seconds",
      desc: "Create your free account with email or Google. No complicated forms – just get started instantly.",
      color: "bg-primary",
    },
    {
      icon: <FaPlusCircle className="text-4xl text-white" />,
      title: "Add Your Transactions",
      desc: "Log income and expenses effortlessly. Choose categories, add notes, and pick dates – all in a clean interface.",
      color: "bg-emerald-500",
    },
    {
      icon: <FaChartBar className="text-4xl text-white" />,
      title: "Set Budgets & View Reports",
      desc: "Create monthly budgets and watch beautiful charts show exactly where your money goes.",
      color: "bg-lime-500",
    },
  ];

  return (
    <section className="py-20 bg-base-200 text-base-content transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            How <span className="text-primary">FinEase</span> Simplifies Money
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-primary via-emerald-400 to-lime-400 mx-auto mb-6 rounded-full"></div>

          <p className="text-lg md:text-xl max-w-3xl mx-auto text-base-content/70 leading-relaxed">
            Follow these intuitive steps to organize your finances, set goals,
            and gain complete control over your money.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="
                relative 
                flex 
                flex-col 
                items-center 
                text-center 
                p-8 
                rounded-3xl 
                bg-base-100 
                shadow-lg 
                border 
                border-base-300
                transition 
                hover:-translate-y-2 
                hover:shadow-2xl
              "
            >
              {/* Icon */}
              <div
                className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center shadow-xl mb-6`}
              >
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-base-content/70 text-base md:text-lg leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
