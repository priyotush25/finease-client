import React from "react";



function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 flex-none"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function TipCard({ title, body }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-start gap-3">
        <span className="mt-1 inline-flex items-center justify-center rounded-xl bg-[#ff6900]/10 p-2 text-[#ff6900]">
          <CheckIcon />
        </span>
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-white">
            {title}
          </h3>
          <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {body}
          </p>
        </div>
      </div>

      {/* Accent underline on hover */}
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#ff6900] via-orange-400 to-[#ff6900] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}

export default TipCard;