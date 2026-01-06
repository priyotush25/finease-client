import React from "react";

const Newsletter = () => {
  return (
    <section className="py-24 bg-base-200 text-base-content transition-colors">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="text-primary">
            Get Smarter with Your Money
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-base-content/70 mb-12 max-w-2xl mx-auto">
          Weekly insights, budgeting tips, and saving strategies to help you take full control of your finances.
        </p>

        {/* Card */}
        <div
          className="
            bg-base-100
            border
            border-base-300
            rounded-3xl
            p-8
            shadow-xl
            transition
          "
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="
                w-full
                sm:flex-1
                px-6
                py-4
                rounded-full
                bg-base-200
                border
                border-base-300
                text-base-content
                focus:outline-none
                focus:ring-2
                focus:ring-primary
                transition
              "
            />
            <button
              className="
                w-full
                sm:w-auto
                px-10
                py-4
                rounded-full
                bg-primary
                text-white
                font-semibold
                hover:bg-green-600
                shadow-lg
                transition
                hover:scale-105
              "
            >
              Subscribe
            </button>
          </div>

          <p className="text-sm text-base-content/60 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
