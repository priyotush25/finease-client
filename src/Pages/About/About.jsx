import React from "react";
import { FaLock, FaChartPie, FaUserCheck, FaLeaf } from "react-icons/fa";
import Container from "../../Components/Container/Container";

const About = () => {
  return (
    <section className="bg-base-100 transition-colors duration-300 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-emerald-500/5 to-transparent -z-10"></div>

      <Container className="py-24">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-sm font-bold uppercase tracking-widest mb-6 border border-emerald-500/20">
            <FaLeaf className="text-xs" />
            <span>Our Story</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-base-content mb-8 tracking-tight">
            Clarity in every <span className="text-emerald-600">Transaction.</span>
          </h1>
          <p className="text-xl text-base-content/60 leading-relaxed max-w-3xl mx-auto">
            FinEase is a modern financial ecosystem designed to bridge the gap between 
            complex banking data and everyday human decisions.
          </p>
        </div>

        {/* Feature Grid with Bento-Style Layout */}
        <div className="grid lg:grid-cols-12 gap-8 mb-32">
          {/* Main Content Box */}
          <div className="lg:col-span-7 bg-base-200/50 backdrop-blur-md border border-base-content/5 rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-6 leading-tight">
              Designed for <span className="text-emerald-600">Financial Simplicity.</span>
            </h2>
            <div className="space-y-6 text-base-content/70 text-lg leading-relaxed">
              <p>
                We believe that managing personal finance shouldn't feel like a chore. 
                FinEase simplifies the noise of modern life by bringing budgeting, 
                expense tracking, and real-time insights into a single, intuitive dashboard.
              </p>
              <p>
                Built on a foundation of <strong>security-first engineering</strong>, 
                we ensure your financial journey is private, protected, and entirely under your control.
              </p>
            </div>
          </div>

          {/* Icon Cards Column */}
          <div className="lg:col-span-5 space-y-6">
            {[
              { 
                icon: <FaLock />, 
                title: "Bank-Level Security", 
                desc: "Firebase-encrypted auth and data protection protocols." 
              },
              { 
                icon: <FaChartPie />, 
                title: "Deep Analytics", 
                desc: "Visualizing patterns to help you save more every month." 
              },
              { 
                icon: <FaUserCheck />, 
                title: "Zero-Learning Curve", 
                desc: "Designed for humans, not accountants. Get started in seconds." 
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-base-100 border border-base-content/5 shadow-sm hover:shadow-xl hover:border-emerald-500/20 transition-all group">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-base-content mb-1">{item.title}</h4>
                    <p className="text-sm text-base-content/50">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Informative Image Tag */}
        

        {/* Mission & Vision - Modern Split Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden bg-emerald-950 p-12 rounded-[3rem] text-white">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 blur-3xl rounded-full"></div>
            <h3 className="text-2xl font-bold mb-6 text-emerald-400">Our Mission</h3>
            <p className="text-emerald-100/80 text-lg leading-relaxed">
              To empower individuals with simple, secure, and reliable tools
              that enable smarter financial decisions and long-term stability 
              across all stages of life.
            </p>
          </div>

          <div className="bg-emerald-600 p-12 rounded-[3rem] text-white">
            <h3 className="text-2xl font-bold mb-6 text-emerald-100">Our Vision</h3>
            <p className="text-white/90 text-lg leading-relaxed">
              To become the global standard for digital financial companionship, 
              helping people build a future where money management is as 
              natural as breathing.
            </p>
          </div>
        </div>

        {/* Trust Stats Bar */}
        <div className="mt-24 pt-12 border-t border-base-content/5 flex flex-wrap justify-center gap-12 md:gap-24">
            <div className="text-center">
                <p className="text-4xl font-black text-emerald-600">10k+</p>
                <p className="text-sm font-bold text-base-content/40 uppercase">Active Users</p>
            </div>
            <div className="text-center">
                <p className="text-4xl font-black text-emerald-600">$2M+</p>
                <p className="text-sm font-bold text-base-content/40 uppercase">Expenses Tracked</p>
            </div>
            <div className="text-center">
                <p className="text-4xl font-black text-emerald-600">99.9%</p>
                <p className="text-sm font-bold text-base-content/40 uppercase">Uptime</p>
            </div>
        </div>

      </Container>
    </section>
  );
};

export default About;