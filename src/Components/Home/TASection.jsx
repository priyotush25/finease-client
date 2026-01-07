import React from "react";
import { Link } from "react-router";

const CTASection = () => {
  return (
    <section className="py-24 bg-neutral dark:bg-primary">
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Take Control of Your Finances Today
        </h2>

        {/* Subtitle */}
        <p className="text-black mb-8 text-lg md:text-xl leading-relaxed">
          Start tracking your income, expenses, and savings goals effortlessly with FinEase. Join thousands of users who are managing their money smarter!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link className="bg-accent hover:bg-accent/90 text-secondary font-semibold px-8 py-4 rounded-lg transition w-full sm:w-auto cursor-pointer" to="/signup">
            Get Started
          </Link>
          <button className="bg-accent-content hover:bg-accent-content/90 text-primary font-semibold px-8 py-4 rounded-lg transition w-full sm:w-auto cursor-pointer">
            Learn More...
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;