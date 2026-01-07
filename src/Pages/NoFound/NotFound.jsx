import React from 'react';
import { FiHome, FiArrowLeft, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router';
import Container from '../../Components/Container/Container';


const NotFound = () => {
    return (
        <section className="min-h-screen flex items-center bg-base-100 transition-colors duration-300 overflow-hidden relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-green-500 rounded-full blur-[150px]"></div>
            </div>

            <Container className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Large 404 Graphic */}
                    <div className="relative mb-8">
                        <h1 className="text-[12rem] md:text-[18rem] font-black text-emerald-500/10 leading-none select-none">
                            404
                        </h1>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="w-24 h-24 bg-emerald-500/10 rounded-3xl flex items-center justify-center text-5xl text-emerald-600 mb-4 shadow-inner">
                                <FiSearch />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-base-content tracking-tight">
                                Page Not Found
                            </h2>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-xl text-base-content/60 mb-12 max-w-lg mx-auto leading-relaxed">
                        It looks like this transaction was voided. The page you are looking for might have been moved, deleted, or never existed.
                    </p>

                    {/* Navigation Actions */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link 
                            to="/" 
                            className="btn btn-primary btn-lg rounded-2xl px-10 h-16 border-none shadow-xl shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all text-white flex items-center gap-2 w-full sm:w-auto"
                        >
                            <FiHome size={20} />
                            Back to Home
                        </Link>
                        
                        <button 
                            onClick={() => window.history.back()}
                            className="btn btn-ghost btn-lg rounded-2xl px-10 h-16 flex items-center gap-2 hover:bg-emerald-500/10 text-base-content transition-all w-full sm:w-auto"
                        >
                            <FiArrowLeft size={20} />
                            Go Back
                        </button>
                    </div>

                    {/* Subtle FinEase Branding */}
                    <div className="mt-20 pt-10 border-t border-base-content/5">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-base-content/30">
                            FinEase Financial Security
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default NotFound;