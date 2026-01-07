import React from 'react';
import {
    FaUserPlus,
    FaPlusCircle,
    FaChartBar,
    FaBullseye,
    FaTrophy
} from 'react-icons/fa';
import Container from '../Container/Container';

const HowItWorksSection = () => {
    const steps = [
        {
            icon: <FaUserPlus />,
            title: "Sign Up in Seconds",
            desc: "Create your free account instantly with Google or Email integration.",
        },
        {
            icon: <FaPlusCircle />,
            title: "Add Transactions",
            desc: "Log income and expenses effortlessly with smart categorization.",
        },
        {
            icon: <FaChartBar />,
            title: "View Insights",
            desc: "Watch beautiful charts show exactly where your money goes.",
        },
        {
            icon: <FaBullseye />,
            title: "Track Goals",
            desc: "Set targets for emergencies or dreams and see your progress grow.",
        },
        {
            icon: <FaTrophy />,
            title: "Financial Peace",
            desc: "Achieve total control and watch your savings habits improve.",
        },
    ];

    return (
        <section className="py-24 bg-base-100 transition-colors duration-300">
            <Container>
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-20">
                    <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-4 tracking-widest uppercase border border-emerald-500/20">
                        The Process
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-base-content mb-6">
                        Master Your Money in <span className="text-emerald-600">5 Steps</span>
                    </h2>
                    <p className="text-lg text-base-content/60 max-w-2xl leading-relaxed">
                        Simple, intuitive steps to turn money chaos into clarity and confidence.
                    </p>
                </div>

                {/* Timeline Path */}
                <div className="relative">
                    {/* Desktop Connecting Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-emerald-500/10 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="group flex flex-col items-center text-center"
                            >
                                {/* Step Number & Icon */}
                                <div className="relative mb-8">
                                    {/* Outer Ring */}
                                    <div className="w-20 h-20 rounded-3xl bg-base-100 border-2 border-emerald-500/20 flex items-center justify-center text-3xl text-emerald-600 transition-all duration-500 group-hover:bg-emerald-600 group-hover:text-white group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-emerald-500/20">
                                        {step.icon}
                                    </div>
                                    
                                    {/* Step Number Badge */}
                                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center border-4 border-base-100">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="px-4">
                                    <h3 className="text-xl font-bold text-base-content mb-3 group-hover:text-emerald-600 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-base-content/60 leading-relaxed group-hover:text-base-content/80 transition-colors">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Mobile Arrow (visible only on mobile between steps) */}
                                {index !== steps.length - 1 && (
                                    <div className="lg:hidden mt-8 text-emerald-500/30">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Achievement Highlight */}
                
                <div className="mt-20 p-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent">
                    <div className="bg-base-100 py-6 text-center">
                        <p className="text-emerald-600 font-medium italic">
                            "The best time to start was yesterday. The second best time is now."
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HowItWorksSection;