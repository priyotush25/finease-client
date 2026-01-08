import React from 'react';
import logo from '../../assets/only-logo.png'
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin, FaPhoneAlt, FaFacebookF, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router';
import Container from '../Container/Container';

const Footer = () => {
    return (
        <footer className='bg-emerald-950 text-white pt-16 transition-colors duration-300'>
            <Container>
                <div className="footer sm:footer-horizontal p-10 flex flex-col md:flex-row justify-between gap-10">
                    {/* Brand Section */}
                    <nav className='space-y-4 max-w-sm'>
                        <Link to="/" className="transition-opacity hover:opacity-80 block w-fit">
                         <h1 className='text-5xl font-black'>FinEase</h1>
                        </Link>
                        
                        <div className='mt-4'>
                            <h3 className='text-2xl font-black text-emerald-500'>Bank Town</h3>
                            <p className='text-emerald-100/60 font-medium'>Sylhet. Bangladesh.</p>
                        </div>

                        <div className='space-y-3 pt-2'>
                            <div className='flex items-center gap-3 group cursor-pointer'>
                                <div className='w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-emerald-500 transition-colors'>
                                    <AiOutlineMail className='text-xl group-hover:text-emerald-950' />
                                </div>
                                <span className="text-emerald-100/70 hover:text-emerald-400 transition-colors">support@finease.com</span>
                            </div>
                            
                            <div className='flex items-center gap-3 group cursor-pointer'>
                                <div className='w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-emerald-500 transition-colors'>
                                    <FaPhoneAlt className='text-lg group-hover:text-emerald-950' />
                                </div>
                                <span className="text-emerald-100/70 hover:text-emerald-400 transition-colors">+880 1234-567809</span>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className='flex gap-3 pt-4'>
                            {[
                                { icon: <FaGithub />, link: 'https://github.com/priyotush25' },
                                { icon: <FaFacebookF />, link: 'https://facebook.com/priyotush25' },
                                { icon: <FaLinkedin />, link: 'https://linkedin.com/in/priyotush25' }
                            ].map((social, idx) => (
                                <a 
                                    key={idx}
                                    href={social.link} 
                                    target='_blank' 
                                    rel="noreferrer"
                                    className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center text-xl hover:bg-emerald-500 hover:text-emerald-950 transition-all hover:scale-110"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </nav>

                    {/* Explore Links */}
                    <nav className="flex flex-col gap-3">
                        <h6 className="text-emerald-500 font-black uppercase tracking-widest text-sm mb-4">Explore</h6>
                        <Link to="/" className="text-emerald-100/60 hover:text-white transition-colors">Home</Link>
                        <Link to="/add-transaction" className="text-emerald-100/60 hover:text-white transition-colors">Add Transaction</Link>
                        <Link to="/my-transaction" className="text-emerald-100/60 hover:text-white transition-colors">My Transactions</Link>
                        <Link to="/report" className="text-emerald-100/60 hover:text-white transition-colors">Wealth Reports</Link>
                    </nav>

                    {/* Quick Links */}
                    <nav className="flex flex-col gap-3">
                        <h6 className="text-emerald-500 font-black uppercase tracking-widest text-sm mb-4">Quick Links</h6>
                        <a className="text-emerald-100/60 hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
                        <a className="text-emerald-100/60 hover:text-white transition-colors cursor-pointer">Discussion</a>
                        <a className="text-emerald-100/60 hover:text-white transition-colors cursor-pointer">Terms & Conditions</a>
                        <a className="text-emerald-100/60 hover:text-white transition-colors cursor-pointer">Customer Support</a>
                    </nav>

                    {/* Newsletter */}
                    <div className="max-w-xs">
                        <h6 className="text-emerald-500 font-black uppercase tracking-widest text-sm mb-4">Subscribe</h6>
                        <p className="text-sm text-emerald-100/60 mb-6">Stay updated with the latest financial insights and platform updates.</p>
                        <form className='relative group'>
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="w-full bg-white/5 border border-white/10 p-4 pr-32 rounded-2xl outline-none focus:border-emerald-500/50 transition-all" 
                            />
                            <button className="absolute right-2 top-2 bottom-2 px-4 bg-emerald-500 text-emerald-950 rounded-xl font-bold text-sm hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/10">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 border-t border-white/5">
                    <div className='flex flex-col md:flex-row justify-between items-center py-8 gap-4 text-center md:text-left'>
                        <h2 className='text-emerald-100/30 text-sm font-medium tracking-wide'>
                            &copy; {new Date().getFullYear()} <span className='text-emerald-500 font-bold'>finease.web</span> | All rights reserved.
                        </h2>
                        <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-emerald-100/20">
                            <span className="hover:text-emerald-500 cursor-pointer">Security</span>
                            <span className="hover:text-emerald-500 cursor-pointer">Compliance</span>
                            <span className="hover:text-emerald-500 cursor-pointer">Cookies</span>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;