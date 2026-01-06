import React, { useState } from "react";
import faqImg from "../../assets/faq.png"; // 👉 তোমার image path দাও

const faqs = [
  {
    question: "What is FinEase?",
    answer:
      "FinEase is a personal finance management app that helps you track expenses, plan budgets, and generate reports easily.",
  },
  {
    question: "How can I add a transaction?",
    answer:
      "You can add a transaction by going to the 'Add Transaction' page and filling in the necessary details like amount, category, and date.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes! All your data is securely stored and encrypted to ensure your privacy and security.",
  },
  {
    question: "Can I generate reports?",
    answer:
      "Absolutely! You can generate monthly or yearly reports for better financial analysis and planning.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-base-200 text-base-content transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="text-green-600">Frequently Asked Questions</span>
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Everything you need to know about FinEase and how it helps you manage your money.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* FAQ Left */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="
                  border
                  border-base-300
                  rounded-xl
                  overflow-hidden
                  bg-base-100
                  shadow-sm
                  hover:shadow-md
                  transition
                "
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    w-full
                    px-6
                    py-4
                    flex
                    justify-between
                    items-center
                    text-left
                    font-medium
                    hover:bg-green-50
                    dark:hover:bg-green-900/20
                    transition
                  "
                >
                  <span className="text-base-content">
                    {faq.question}
                  </span>
                  <span className="text-green-600 text-xl font-bold">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-6 py-4 text-base-content/70 border-t border-base-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Image Right */}
          <div className="flex justify-center">
            <img
              src={faqImg}
              alt="FAQ Illustration"
              className="w-full max-w-md rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
