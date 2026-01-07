import React from 'react';
import { FiArrowRight, FiPlay, FiCheckCircle } from 'react-icons/fi';
import Container from '../Container/Container';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-base-100 overflow-hidden pt-20 transition-colors duration-300">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-emerald-500/5 -skew-x-12 translate-x-20 hidden lg:block"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] animate-pulse"></div>
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center self-center lg:self-start gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 shadow-sm transition-all hover:bg-emerald-500/20 cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest">New: Smart Budgeting AI</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-base-content leading-[1.1] tracking-tight">
              Master Your Money <br />
              <span className="text-emerald-600">Grow Your Wealth.</span>
            </h1>

            <p className="text-lg md:text-xl text-base-content/60 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Stop guessing where your money goes. FinEase provides the clarity you need to track expenses, set budgets, and hit your financial goals faster than ever.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="btn btn-primary btn-lg rounded-2xl px-8 h-16 border-none shadow-xl shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all text-white group">
                Start Tracking Free
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="btn btn-ghost btn-lg rounded-2xl px-8 h-16 flex items-center gap-2 hover:bg-emerald-500/10 text-base-content transition-all">
                <div className="w-10 h-10 rounded-full bg-base-content/5 flex items-center justify-center">
                  <FiPlay className="text-emerald-600 translate-x-0.5" />
                </div>
                Watch Demo
              </button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              {['No Credit Card', 'Bank-Level Security', '10k+ Users'].map((text, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-medium text-base-content/50">
                  <FiCheckCircle className="text-emerald-500" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Dashboard Mockup */}
          <div className="relative group perspective-1000 hidden md:block">
            {/* Main Mockup Container */}
            <div className="relative z-10 bg-base-100 rounded-[2rem] border border-base-content/10 shadow-2xl p-4 transform lg:rotate-[-2deg] transition-all duration-700 group-hover:rotate-0 group-hover:scale-105">
              
              {/* Internal Dashboard Elements UI */}
              <div className="bg-emerald-950 rounded-[1.5rem] p-6 text-white overflow-hidden relative">
                 <div className="flex justify-between items-start mb-8">
                    <div>
                        <p className="text-emerald-400/70 text-xs font-bold uppercase tracking-widest">Total Balance</p>
                        <h3 className="text-3xl font-black mt-1">$45,280.00</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                        <FiCheckCircle className="text-emerald-400" />
                    </div>
                 </div>
                 
                 {/* Visualized Spending Chart Placeholder */}
                 <div className="h-32 flex items-end gap-2 mb-4">
                    {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                        <div 
                          key={i} 
                          style={{ height: `${h}%` }} 
                          className="flex-grow bg-emerald-500/40 rounded-t-lg transition-all duration-1000 group-hover:bg-emerald-400/80"
                        ></div>
                    ))}
                 </div>
                 <p className="text-xs text-emerald-100/40 text-center">Last 7 Days Spending Pattern</p>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -left-8 bg-base-100 border border-base-content/10 p-6 rounded-3xl shadow-2xl animate-bounce-slow">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/40">
                        <FiArrowRight className="-rotate-45" />
                    </div>
                    <div>
                        <p className="text-xs text-base-content/40 font-bold uppercase">Savings Goal</p>
                        <p className="text-lg font-black text-base-content">Target: $10,000</p>
                        <div className="w-32 h-1.5 bg-base-content/10 rounded-full mt-2">
                            <div className="w-[75%] h-full bg-emerald-500 rounded-full"></div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            
            {/* Secondary Floating Element */}
            <div className="absolute -top-10 -right-4 bg-base-100 border border-base-content/10 p-4 rounded-2xl shadow-xl hidden xl:block animate-float">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center text-xs">
                        +$
                    </div>
                    <span className="text-sm font-bold">Income Tracked!</span>
                </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;