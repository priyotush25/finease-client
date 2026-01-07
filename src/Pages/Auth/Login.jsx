import React, { useState } from 'react';
import { IoMdEyeOff } from 'react-icons/io';
import { IoEye } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router';
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import useAuth from '../../Hooks/useAuth';
import Container from '../../Components/Container/Container';

const googleProvider = new GoogleAuthProvider();

const Login = () => {
    const [error, setError] = useState(null);
    const [type, setType] = useState(true);
    const { createUserByGoogle, login, setUser } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
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

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        setError(null);

        login(email, pass)
            .then(result => {
                const user = result.user;
                e.target.reset();
                setUser(user);
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch(error => {
                if (error.code === 'auth/invalid-credential') {
                    setError('Email or Password is invalid!');
                    toast.error('Email or Password is invalid!');
                }
            });
    };

    const handleInputType = (e) => {
        e.preventDefault();
        setType(!type);
    };

    const handleAutoFill = () => {
        setEmail('fine@gmail.com');
        setPassword('fine123');
    };

    return (
        <section className='min-h-screen flex items-center py-20 bg-base-200/50 transition-colors duration-300'>
            <Container>
                <div className='flex flex-col lg:flex-row shadow-2xl rounded-[2.5rem] bg-base-100 overflow-hidden border border-base-content/5'>
                    
                    {/* Left Side: Branding/Welcome (Hidden on mobile) */}
                    <div className='hidden lg:flex lg:w-1/2 bg-emerald-950 p-16 flex-col justify-center text-white relative overflow-hidden'>
                        {/* Abstract Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 blur-[80px] -ml-24 -mb-24"></div>
                        
                        <div className="relative z-10">
                            <h1 className='text-5xl font-black mb-6 leading-tight'>
                                Good to see <br />
                                <span className='text-emerald-500'>you again!</span>
                            </h1>
                            <p className='text-emerald-100/70 text-lg mb-10 max-w-sm'>
                                Let’s keep your finances on track with FinEase. Your goals are waiting for you.
                            </p>
                            
                            <div className='space-y-4'>
                                <p className='text-sm font-medium opacity-50'>Don't have an account yet?</p>
                                <Link 
                                    className='inline-block px-10 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/20' 
                                    to="/signup"
                                >
                                    Create Account
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Login Form */}
                    <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-20 bg-base-100 flex flex-col justify-center">
                        <div className="max-w-md mx-auto w-full">
                            <h2 className='font-black text-3xl md:text-4xl mb-2 text-base-content'>
                                Log <span className='text-emerald-600'>In</span>
                            </h2>
                            <p className="text-base-content/50 mb-10 font-medium">Please enter your details to continue.</p>

                            <form onSubmit={handleLogin} className='space-y-5'>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-base-content/70 ml-1 uppercase tracking-widest">Email Address</label>
                                    <input 
                                        type="email" 
                                        className="w-full p-4 rounded-2xl bg-base-200 border border-base-content/5 focus:border-emerald-500/50 outline-none text-base-content transition-all focus:ring-4 focus:ring-emerald-500/5" 
                                        placeholder="name@example.com" 
                                        name='email' 
                                        defaultValue={email} 
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-base-content/70 ml-1 uppercase tracking-widest">Password</label>
                                    <div className='relative'>
                                        <input 
                                            type={!type ? 'text' : 'password'} 
                                            className="w-full p-4 rounded-2xl bg-base-200 border border-base-content/5 focus:border-emerald-500/50 outline-none text-base-content transition-all focus:ring-4 focus:ring-emerald-500/5" 
                                            placeholder="••••••••" 
                                            name='pass' 
                                            defaultValue={password} 
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
                                </div>

                                {error && (
                                    <p className='text-error text-sm font-bold bg-error/10 p-3 rounded-xl border border-error/20'>
                                        {error}
                                    </p>
                                )}

                                <div className="pt-2 space-y-4">
                                    <button className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-lg transition-all shadow-lg shadow-emerald-600/20 active:scale-[0.98]">
                                        Sign In
                                    </button>
                                    
                                    <button
                                        type="button"
                                        onClick={handleAutoFill}
                                        className="w-full py-4 rounded-2xl bg-base-100 border-2 border-emerald-600/20 hover:border-emerald-600/50 text-emerald-600 font-bold transition-all flex items-center justify-center gap-2"
                                    >
                                        Use Demo Credentials
                                    </button>
                                </div>
                            </form>

                            <div className="relative my-10">
                                <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-base-content/10"></span></div>
                                <div className="relative flex justify-center text-xs uppercase"><span className="bg-base-100 px-4 text-base-content/40 font-bold tracking-widest">Or continue with</span></div>
                            </div>

                            <button 
                                onClick={handleWithGoogle} 
                                className="w-full py-4 rounded-2xl bg-base-100 border border-base-content/10 hover:bg-base-200 font-bold text-base-content transition-all flex items-center justify-center gap-3"
                            >
                                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="google" className='w-5' />
                                <span>Google Account</span>
                            </button>

                            <p className='mt-10 text-center font-medium text-base-content/50 lg:hidden'>
                                New to FinEase? <Link className='text-emerald-600 font-bold hover:underline' to="/signup">Create Account</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Login;