import React from "react";
import { FiMail, FiSend, FiShield, FiCheck } from "react-icons/fi";
import Container from "../Container/Container";

const Newsletter = () => {
  return (
    <section className="py-24 bg-base-100 transition-colors duration-500">
      <Container>
        {/* Main Card Wrapper: Applying the Testimonial Card Styling */}
        <div className="group relative max-w-4xl mx-auto bg-base-200/40 backdrop-blur-sm rounded-[3rem] p-10 md:p-16 border border-base-content/5 transition-all duration-500 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/5">
          
          {/* Floating Icon: Matching the Testimonial Quote Style */}
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-emerald-500 rounded-[1.5rem] flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
            <FiSend size={28} />
          </div>

          <div className="flex flex-col items-center text-center">
            {/* Header Badge */}
            <span className="px-4 py-1.5 rounded-full text-[10px] font-black bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-6 tracking-[0.2em] uppercase border border-emerald-500/20">
              Weekly Insights
            </span>

            {/* Heading: Adapts to Light/Dark Mode */}
            <h2 className="text-3xl md:text-5xl font-black text-base-content mb-6 leading-tight">
              Master Your <span className="text-emerald-600">Wealth</span> Weekly
            </h2>

            {/* Subtitle */}
            <p className="text-lg text-base-content/60 max-w-xl mb-10 leading-relaxed italic">
              "Join 5,000+ smart savers. Get exclusive budgeting guides and investment strategies delivered straight to your inbox."
            </p>

            {/* Input Group: Modern & Scannable */}
            <form 
              onSubmit={(e) => e.preventDefault()}
              className="w-full max-w-lg flex flex-col sm:flex-row items-center gap-3"
            >
              <div className="relative w-full">
                <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-emerald-500" />
                <input
                  type="email"
                  placeholder="Enter your professional email"
                  className="w-full bg-base-100 dark:bg-base-300/50 text-base-content border border-base-content/10 px-12 py-4 rounded-2xl outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 transition-all font-medium"
                />
              </div>
              <button className="flex items-center justify-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-2xl font-black hover:bg-emerald-600 transition-all w-full sm:w-auto shadow-lg shadow-emerald-500/20 active:scale-95">
                Join <FiSend />
              </button>
            </form>

            {/* Bottom Proofing: Matching the Testimonial Bottom Style */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-12 pt-8 border-t border-base-content/5 w-full">
              <div className="flex items-center gap-2 text-xs font-bold text-base-content/40 uppercase tracking-widest">
                <FiCheck className="text-emerald-500" /> No Spam
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-base-content/40 uppercase tracking-widest">
                <FiCheck className="text-emerald-500" /> Weekly Tips
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-base-content/40 uppercase tracking-widest">
                <FiShield className="text-emerald-500" /> Privacy Secured
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;