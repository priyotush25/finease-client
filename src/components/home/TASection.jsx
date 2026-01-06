import React from "react";

function CheckIcon() {
  return (
    <svg
      className="h-6 w-6 flex-none"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function TipCard({ title, body }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-green-200 bg-white/90 p-6 shadow-lg backdrop-blur-md transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl dark:border-green-700 dark:bg-gray-900/80">
      <div className="flex items-start gap-4">
        {/* Icon Circle */}
        <span className="mt-1 inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-green-400 to-emerald-500 p-3 text-white shadow-md">
          <CheckIcon />
        </span>

        {/* Text */}
        <div>
          <h3 className="font-semibold text-green-800 dark:text-green-300 text-lg drop-shadow-sm">
            {title}
          </h3>
          <p className="mt-2 text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-200">
            {body}
          </p>
        </div>
      </div>

      {/* Animated Gradient Underline */}
      <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-x-110 origin-left" />
    </div>
  );
}

export default TipCard;
