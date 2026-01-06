import React, { useState, useContext } from 'react';
import { IoMdEyeOff } from 'react-icons/io';
import { IoEye } from 'react-icons/io5';
import { BsGoogle } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router';
import Container from '../../components/layout/Container';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const { login, createUserByGoogle, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);
    login(email, password)
      .then(res => {
        setUser(res.user);
        navigate(location.state?.from || '/');
      })
      .catch(() => {
        setError('Email or Password is invalid!');
        toast.error('Email or Password is invalid!');
      });
  };

  const handleWithGoogle = () => {
    createUserByGoogle(googleProvider)
      .then(res => {
        setUser(res.user);
        navigate('/');
      })
      .catch(err => toast.error(err.message));
  };

  const handleAutoFill = () => {
    setEmail('finease@gmail.com');
    setPassword('Finease123');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-neutral dark:bg-neutral px-4">
      <Container>
        <div className="flex flex-col lg:flex-row w-full max-w-6xl shadow-2xl rounded-3xl overflow-hidden bg-base-100 dark:bg-secondary/90">

          {/* Left Branding */}
          <div className="hidden lg:flex w-1/2 relative bg-secondary dark:bg-secondary text-white dark:text-gray-700 p-16 flex-col justify-center overflow-hidden ">
            <div className="absolute w-72 h-72 bg-accent rounded-full -top-32 -left-32 opacity-70 animate-pulse"></div>
            <div className="absolute w-40 h-40 bg-accent rounded-full -bottom-20 -right-16 opacity-50 animate-pulse"></div>
            
            <h1 className="text-5xl font-bold mb-4">Welcome Back!</h1>
            <p className="text-lg mb-6 text-white/80 text-center">
              Keep your finances on track with <span className="font-semibold">FinEase</span>.
            </p>
            <Link
              to="/signup"
              className="inline-block bg-primary hover:bg-green-600 text-white font-bold px-8 py-3 rounded-full shadow-lg transition"
            >
              Sign Up
            </Link>
          </div>

          {/* Right Login Form */}
          <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center space-y-6 bg-base-100 dark:bg-secondary/90 backdrop-blur-md rounded-xl">
            <h2 className="text-3xl font-bold text-center text-secondary dark:text-accent-content mb-8">
              Log <span className="text-primary">In</span>
            </h2>

            <form onSubmit={handleLogin} className="space-y-5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="input input-bordered w-full rounded-xl border-accent text-secondary dark:text-accent-content dark:border-accent focus:ring-2 focus:ring-primary dark:focus:ring-primary transition"
                required
              />

              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="input input-bordered w-full rounded-xl border-accent text-secondary dark:text-accent-content pr-12 focus:ring-2 focus:ring-primary dark:focus:ring-primary transition"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3 cursor-pointer text-xl text-secondary dark:text-accent-content"
                >
                  {showPassword ? <IoMdEyeOff /> : <IoEye />}
                </span>
              </div>

              {error && <p className="text-red-500 font-medium text-center">{error}</p>}

              <button className="w-full bg-primary hover:bg-green-600 text-white font-bold py-3 rounded-xl shadow-lg transition">
                Log In
              </button>

              <button
                type="button"
                onClick={handleAutoFill}
                className="w-full border-2 border-primary text-primary font-semibold py-3 rounded-xl hover:bg-primary hover:text-white transition"
              >
                Autofill Credentials
              </button>
            </form>

            <div className="divider text-primary">OR</div>

            <button
              onClick={handleWithGoogle}
              className="w-full flex items-center justify-center gap-3 border border-accent rounded-xl py-3 hover:bg-accent-content/10 transition text-accent-content"
            >
              <BsGoogle className="w-6 h-6 text-red-500" />
              Log in with Google
            </button>

            <p className="text-center mt-6 dark:text-accent-content">
              Don't have an account?{' '}
              <Link className="text-primary hover:underline" to="/signup">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Login;
