import React from 'react';
import {
  FaWallet,
  FaChartPie,
  FaPiggyBank,
  FaLock,
  FaMobileAlt,
  FaBullseye
} from 'react-icons/fa';
import Container from '../Container/Container';

const Features = () => {
  const features = [
    {
      icon: <FaWallet />,
      title: "Easy Transaction Tracking",
      desc: "Add income & expenses in seconds. Categorize effortlessly and never miss a detail.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      icon: <FaChartPie />,
      title: "Insightful Reports",
      desc: "Visualize spending patterns with beautiful pie charts, bar graphs, and monthly summaries.",
      color: "text-green-600",
      bgColor: "bg-green-600/10",
    },
    {
      icon: <FaPiggyBank />,
      title: "Smart Budgets",
      desc: "Set monthly budgets and savings targets. Get gentle reminders when you're close to limits.",
      color: "text-teal-500",
      bgColor: "bg-teal-500/10",
    },
    {
      icon: <FaBullseye />,
      title: "Financial Goals",
      desc: "Track progress toward dreams like vacations, emergency funds, or big purchases.",
      color: "text-lime-600",
      bgColor: "bg-lime-600/10",
    },
    {
      icon: <FaLock />,
      title: "100% Secure",
      desc: "Your data stays yours. Firebase-powered auth ensures no one else sees your finances.",
      color: "text-emerald-700",
      bgColor: "bg-emerald-700/10",
    },
    {
      icon: <FaMobileAlt />,
      title: "Fully Responsive",
      desc: "Manage money seamlessly on phone, tablet, or desktop – anywhere, anytime.",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
  ];

  return (
    <section className="py-24 bg-base-100 transition-colors duration-300 overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-4 tracking-wider uppercase border border-emerald-500/20">
            Smart Features
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-base-content mb-6 tracking-tight">
            Grow Your Wealth with <span className="text-emerald-600 dark:text-emerald-500">FinEase</span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl leading-relaxed">
            Experience a modern way to manage your finances. Our green-energy powered dashboard
            makes saving money as natural as breathing.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl border border-base-content/5 bg-base-200/30 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2"
            >
              {/* Green Glow effect for dark mode */}
              <div className={`absolute top-0 right-0 -mr-4 -mt-4 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${feature.bgColor}`} />

              <div className="relative z-10">
                {/* Icon Box */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all duration-400 group-hover:scale-110 group-hover:rotate-6 shadow-inner ${feature.bgColor} ${feature.color}`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-base-content mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-base-content/60 leading-relaxed group-hover:text-base-content/80 transition-colors">
                  {feature.desc}
                </p>

                <div className="mt-6 flex items-center text-sm font-bold text-emerald-600 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 cursor-pointer">
                  Learn more about {feature.title.split(' ')[0]} →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-24 relative overflow-hidden rounded-[2.5rem] bg-emerald-950 p-8 md:p-16 text-white border border-emerald-500/20 shadow-2xl">
            {/* Abstract Background Design */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[100px] -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 blur-[100px] -ml-32 -mb-32"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                    <h4 className="text-3xl md:text-4xl font-bold mb-4">Start your green financial journey</h4>
                    <p className="text-emerald-100/80 text-lg max-w-md">Join 10k+ users who have optimized their spending and reached their goals faster.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <button className="btn bg-emerald-500 hover:bg-emerald-400 border-none text-emerald-950 font-bold px-10 rounded-2xl h-14 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/20">
                        Get Started Free
                    </button>
                    <button className="btn btn-outline border-emerald-500/50 text-emerald-500 hover:bg-emerald-500/10 hover:border-emerald-500 px-8 rounded-2xl h-14">
                        View Demo
                    </button>
                </div>
            </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;