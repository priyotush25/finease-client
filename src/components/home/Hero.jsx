import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone } from "lucide-react";

const Hero = () => {
  const variants = {
    offscreen: { y: 80, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.3, duration: 1.2 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-base-100 via-green-50 to-base-200 py-12 md:py-0">
      {/* Subtle decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-[-20%] w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-40 right-[-20%] w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-teal-300 to-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-tl from-emerald-300 to-lime-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Take Control of <br className="hidden sm:block" />
              Your Finances with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700">
                FinEase
              </span>
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto lg:mx-0 mb-8 rounded-full" />
            <p className="text-lg sm:text-xl md:text-2xl text-base-content/80 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Simple, secure, and intelligent personal finance management. Track spending, build budgets, and reach your financial goals with ease.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                Get Started Free
                <ArrowRight className="ml-3 w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-base-200/80 backdrop-blur text-base-content font-semibold text-lg rounded-full border-2 border-base-300 hover:border-green-600 transition-all duration-300"
              >
                <Smartphone className="mr-3 w-5 h-5" />
                View Demo
              </motion.a>
            </div>
          </motion.div>

          {/* App Mockup */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants}
            transition={{ delay: 0.2 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative max-w-sm md:max-w-md lg:max-w-lg w-full">
              {/* Smartphone frame with professional finance dashboard */}
              <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl border-8 border-black">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl" /> {/* Notch */}
                <img
                  src="https://images.ctfassets.net/n3rcstr5ldte/762RsIZrPhn0yllMdmNwo8/38c479e38aab7b7cd5d35cece20abea2/Screenshot_2024-04-04_at_6.10.57_PM.png"
                  alt="FinEase app dashboard"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating balance card */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute hidden sm:block -top-10 -left-10 md:-left-16 p-6 bg-gradient-to-br from-emerald-600 to-green-700 rounded-3xl shadow-2xl text-white min-w-48"
              >
                <p className="text-sm opacity-90">Total Balance</p>
                <p className="text-3xl md:text-4xl font-bold">$12,450.00</p>
                <p className="text-xs opacity-80 mt-1">+8.2% this month</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Blob animation keyframes */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 12s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;