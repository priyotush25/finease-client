import React, { useState } from 'react';
import { IoMdEyeOff } from 'react-icons/io';
import { IoEye } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router';
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import useAuth from '../../Hooks/useAuth';
import Container from '../../Components/Container/Container';

const googleProvider = new GoogleAuthProvider();

const Signup = () => {
    const [type, setType] = useState(true);
    const [error, setError] = useState(null);
    const [missingE, setMissingE] = useState(null);
    const { createUserByGoogle, createUserByEmail, updateUserProfile, setUser } = useAuth();
    const navigate = useNavigate();

    const handleWithGoogle = () => {
        createUserByGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate("/");
            })
            .catch((err) => { console.error(err); });
    };

    const handleSignup = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        const name = e.target.name.value;
        const photoURL = e.target.photo.value;

        setError(null);
        setMissingE(null);

        if (pass.length < 6) {
            setError("Password must be at least 6 characters long.");
            toast.error("Password must be at least 6 characters long.");
            return;
        }

        const passUpperRegex = /[A-Z]/;
        if (!passUpperRegex.test(pass)) {
            setError("Password must contain at least one uppercase letter.");
            toast.error("Password must contain at least one uppercase letter.");
            return;
        }

        const passLowerRegex = /[a-z]/;
        if (!passLowerRegex.test(pass)) {
            setError("Password must contain at least one lowercase letter.");
            toast.error("Password must contain at least one lowercase letter.");
            return;
        }

        createUserByEmail(email, pass)
            .then(result => {
                const user = result.user;
                updateUserProfile({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        e.target.reset();
                        setUser({ ...user, displayName: name, photoURL: photoURL });
                        navigate("/");
                    })
                    .catch(() => { setUser(user); });
            })
            .catch(error => {
                if (error.code === 'auth/missing-email') {
                    setMissingE('Email not found!');
                    toast.error('Email not found!');
                    return;
                }
                if (error.code === 'auth/email-already-in-use') {
                    setMissingE('This email is already registered.');
                    toast.error('This email is already registered.');
                    return;
                }
            });
    };

    const handleInputType = (e) => {
        e.preventDefault();
        setType(!type);
    };

    return (
        <section className='min-h-screen flex items-center py-20 bg-base-200/50 transition-colors duration-300'>
            <Container>
                <div className='flex flex-col lg:flex-row shadow-2xl rounded-[2.5rem] bg-base-100 overflow-hidden border border-base-content/5'>
                    
                    {/* Left Side: Onboarding Content */}
                    <div className='hidden lg:flex lg:w-1/2 bg-emerald-950 p-16 flex-col justify-center text-white relative overflow-hidden'>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 blur-[80px] -ml-24 -mb-24"></div>
                        
                        <div className="relative z-10">
                            <h1 className='text-5xl font-black mb-6 leading-tight'>
                                Hello, <br />
                                <span className='text-emerald-500'>Buddy!</span>
                            </h1>
                            <p className='text-emerald-100/70 text-lg mb-10 max-w-sm'>
                                Take control of your finances with ease. Join FinEase today to track your income & expenses with confidence.
                            </p>
                            
                            <div className='space-y-4'>
                                <p className='text-sm font-medium opacity-50'>Already have an account?</p>
                                <Link 
                                    className='inline-block px-10 py-4 rounded-2xl border-2 border-emerald-500/50 text-emerald-500 font-bold hover:bg-emerald-500 hover:text-emerald-950 transition-all hover:scale-105 active:scale-95' 
                                    to="/login"
                                >
                                    Log In Instead
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Signup Form */}
                    <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-20 bg-base-100">
                        <div className="max-w-md mx-auto w-full">
                            <h2 className='font-black text-3xl md:text-4xl mb-2 text-base-content'>
                                Sign <span className='text-emerald-600'>Up</span>
                            </h2>
                            <p className="text-base-content/50 mb-10 font-medium">Start your journey to financial freedom.</p>

                            <form onSubmit={handleSignup} className='space-y-4'>
                                <div className="space-y-1">
                                    <input 
                                        type="text" 
                                        className="w-full p-4 rounded-2xl bg-base-200 border border-base-content/5 focus:border-emerald-500/50 outline-none text-base-content transition-all focus:ring-4 focus:ring-emerald-500/5" 
                                        placeholder="Full Name" 
                                        name='name' 
                                        required 
                                    />
                                </div>

                                <div className="space-y-1">
                                    <input 
                                        type="email" 
                                        className={`w-full p-4 rounded-2xl bg-base-200 border outline-none text-base-content transition-all focus:ring-4 focus:ring-emerald-500/5 ${missingE ? 'border-red-500' : 'border-base-content/5 focus:border-emerald-500/50'}`} 
                                        placeholder="Email Address" 
                                        name='email' 
                                        required
                                    />
                                    {missingE && <p className='text-red-500 text-xs mt-1 ml-2 font-bold'>{missingE}</p>}
                                </div>

                                <div className="space-y-1">
                                    <input 
                                        type="text" 
                                        className="w-full p-4 rounded-2xl bg-base-200 border border-base-content/5 focus:border-emerald-500/50 outline-none text-base-content transition-all focus:ring-4 focus:ring-emerald-500/5" 
                                        placeholder="Photo URL" 
                                        name='photo' 
                                    />
                                </div>

                                <div className="space-y-1">
                                    <div className='relative'>
                                        <input 
                                            type={!type ? 'text' : 'password'} 
                                            className={`w-full p-4 rounded-2xl bg-base-200 border outline-none text-base-content transition-all focus:ring-4 focus:ring-emerald-500/5 ${error ? 'border-red-500' : 'border-base-content/5 focus:border-emerald-500/50'}`} 
                                            placeholder="Create Password" 
                                            name='pass' 
                                            required
                                        />
                                        <button 
                                            type="button"
                                            onClick={handleInputType} 
                                            className='absolute right-5 top-1/2 -translate-y-1/2 text-xl text-base-content/30 hover:text-emerald-600 transition-colors'
                                        >
                                            {!type ? <IoMdEyeOff /> : <IoEye />}
                                        </button>
                                    </div>
                                    {error && <p className='text-red-500 text-xs mt-1 ml-2 font-bold'>{error}</p>}
                                </div>

                                <button className="w-full py-4 mt-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-lg transition-all shadow-lg shadow-emerald-600/20 active:scale-[0.98]">
                                    Create Account
                                </button>
                            </form>

                            <p className='mt-6 text-center font-medium text-base-content/50 lg:hidden'>
                                Already have an account? <Link className='text-emerald-600 font-bold hover:underline' to="/login">Login</Link>
                            </p>

                            <div className="relative my-8">
                                <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-base-content/10"></span></div>
                                <div className="relative flex justify-center text-xs uppercase"><span className="bg-base-100 px-4 text-base-content/40 font-bold tracking-widest">Or join with</span></div>
                            </div>

                            <button 
                                onClick={handleWithGoogle} 
                                className="w-full py-4 rounded-2xl bg-base-100 border border-base-content/10 hover:bg-base-200 font-bold text-base-content transition-all flex items-center justify-center gap-3"
                            >
                                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="google" className='w-5' />
                                <span>Continue with Google</span>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Signup;