import React, { useState } from "react";
import { FiChevronDown, FiHelpCircle, FiMessageCircle } from "react-icons/fi";
import Container from "../Container/Container";

const faqs = [
  {
    id: 1,
    question: "How do I track my monthly expenses in FinEase?",
    answer:
      "Simply head to the 'Add Transaction' page to log your spending. FinEase automatically categorizes your data and generates real-time visual reports on your dashboard.",
  },
  {
    id: 2,
    question: "Can I set monthly savings goals?",
    answer:
      "Yes! You can define specific targets in your wealth analytics. FinEase monitors your income-to-expense ratio to help you stay on track with your long-term goals.",
  },
  {
    id: 3,
    question: "Is my financial data secure?",
    answer:
      "Security is our priority. We use industry-standard Firebase authentication and secure cloud databases to ensure only you can access your private financial records.",
  },
  {
    id: 4,
    question: "Can I export my transactions?",
    answer:
      "Currently, you can view and manage all transactions in the 'My Transactions' portal. We are working on a one-click CSV export feature for tax and accounting purposes.",
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-base-100 transition-colors duration-500">
      <Container>
        {/* Section Header - Matching Testimonial Style */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="px-4 py-1.5 rounded-full text-[10px] font-black bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-4 tracking-[0.2em] uppercase border border-emerald-500/20">
            Help Center
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-base-content mb-6">
            Got <span className="text-emerald-600">Questions?</span>
          </h2>
          <p className="text-lg text-base-content/60 max-w-2xl leading-relaxed">
            Everything you need to know about managing your wealth with the FinEase platform.
          </p>
        </div>

        {/* FAQ Grid/List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`group rounded-[2rem] border transition-all duration-500 ${
                  isOpen
                    ? "bg-base-200/60 border-emerald-500/30 shadow-xl shadow-emerald-500/5"
                    : "bg-base-200/30 border-base-content/5 hover:border-emerald-500/20"
                }`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg transition-colors ${isOpen ? 'text-emerald-600' : 'text-base-content'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                    isOpen ? 'bg-emerald-500 text-white rotate-180' : 'bg-base-300 text-base-content/40'
                  }`}>
                    <FiChevronDown size={20} />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <div className="px-8 pb-8 text-base-content/60 leading-relaxed font-medium">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 p-4 rounded-3xl bg-base-200/50 border border-base-content/5">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg">
                    <FiHelpCircle />
                </div>
                <p className="text-sm font-bold text-base-content/60">
                    Still have questions? <a href="mailto:support@finease.com" className="text-emerald-600 hover:underline">Contact Support</a>
                </p>
            </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;