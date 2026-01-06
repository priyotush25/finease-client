import React, { use, useState } from 'react';
import { IoMdEyeOff } from 'react-icons/io';
import { IoEye } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router';
import Container from '../../components/layout/Container';
import { AuthContext } from '../../provider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';

const googleProvider = new GoogleAuthProvider();

const Signup = () => {
    const [type, setType] = useState(true);
    const [error, setError] = useState(null);
    const [missingE, setMissingE] = useState(null);
    const { createUserByGoogle, createUserByEmail, updateUserProfile, setUser } = use(AuthContext);
    const navigate = useNavigate();

    const handleWithGoogle = () => {
        createUserByGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                
                setUser(user);
                navigate("/")
            })
            .catch((err) => {
                

            })
    }

    const handleSignup = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        const name = e.target.name.value;
        const photoURL = e.target.photo.value;
        

        // clear errros
        setError(null);
        setMissingE(null)

        // password validation
        if (pass.length < 6) {
            setError("Password must be at least 6 characters long.");
            toast.error("Password must be at least 6 characters long.")
            return;
        }

        const passUpperRegex = /[A-Z]/;

        if (!passUpperRegex.test(pass)) {
            setError("Password must contain at least one uppercase letter.");
            toast.error("Password must contain at least one uppercase letter.")
            return;
        }

        const passLowerRegex = /[a-z]/;

        if (!passLowerRegex.test(pass)) {
            setError("Password must contain at least one lowercase letter.");
            toast.error("Password must contain at least one lowercase letter.")
            return;
        }

        // create user
        createUserByEmail(email, pass)
            .then(result => {
                const user = result.user
                
                updateUserProfile({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        e.target.reset();
                        setUser({ ...user, displayName: name, photoURL: photoURL });
                        navigate("/")
                    })
                    .catch(() => {
                        setUser(user)
                    })

            })
            .catch(error => {
                if (error.code === 'auth/missing-email') {
                    setMissingE('Email not found!')
                    toast.error('Email not found!')
                    return
                }

                if (error.code === 'auth/email-already-in-use') {
                    setMissingE('This email is already registered. Please try logging in.')
                    toast.error('This email is already registered. Please try logging in.')
                    return
                }

            })


    }


    const handleInputType = (e) => {
        e.preventDefault();
        setType(!type);
    }

    return (
        <section className='flex items-center py-10 px-4 bg-neutral text-black md:px-7 xl:px-0'>
            <Container>
                <div className='flex flex-col md:flex-row text-secondary justify-between shadow-sm py-10 px-5 md:p-10 xl:px-52 rounded-xl bg-base-100 relative overflow-hidden'>
                    <div className='w-[200px] h-[200px] bg-accent rounded-full absolute -top-16 -left-28 '></div>
                    <div className='w-[170px] h-[40px] bg-accent rounded-2xl absolute -right-5 -bottom-5'></div>
                    <div className='justify-center items-center flex-col space-y-4 hidden lg:flex'>
                        <h1 className='text-4xl'>
                            Hello, Buddy!
                        </h1>
                        <div>
                            <h3 className='text-lg text-center hidden md:flex'>
                                Take control of your finances with ease. Join FinEase <br /> today to track your income & expenses.
                            </h3>
                            <h3 className='text-lg text-center md:hidden'>
                                Take control of your finances with ease. Join FinEase today to track your <br /> income & expenses.
                            </h3>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <p className='text-center font-semibold mb-2'>Already have an account.</p>
                            <Link className='btn p-4 rounded-full w-44 hover:bg-primary border-none shadow-none duration-300 text-lg bg-[#ff6900de] font-semibold text-white transition' to="/login">
                                Log In
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-[400px]">
                        <h2 className='font-semibold text-xl lg:text-3xl mb-8 text-center'>Sign <span className='text-primary'>Up</span></h2>
                        <div className="space-y-4">
                            {/* Form */}
                            <form onSubmit={handleSignup} className='space-y-4'>
                                <input type="text" className="p-2 pl-4 border border-accent w-full rounded-full outline-primary text-xl font-extralight" placeholder="Name" name='name' required />
                                <input type="email" className={`p-2 pl-4 border border-accent w-full rounded-full outline-primary text-xl font-extralight ${missingE ? 'border-2 border-red-700' : ''}`} placeholder="Email" name='email' />
                                {
                                    missingE && <p className='text-red-700'>{missingE}</p>
                                }
                                <input type="text" className="p-2 pl-4 border border-accent w-full rounded-full outline-primary text-xl font-extralight" placeholder="Photo-URL" name='photo' />
                                <div className='relative'>
                                    <input type={!type ? 'text' : 'password'} className={`p-2 pl-4 border border-accent w-full rounded-full outline-primary text-xl font-extralight ${error ? 'border-2 border-red-700' : ''}`} placeholder="Password" name='pass' /><span onKeyDown={(e) => e.preventDefault} onClick={handleInputType} className='text-xl absolute top-3.5 right-5'>{!type ? <IoMdEyeOff /> : <IoEye />}</span>
                                </div>
                                {
                                    error && <p className='text-red-700'>{error}</p>
                                }
                                <button className="btn p-6 rounded-full w-full hover:bg-primary border-none shadow-none duration-300 text-lg bg-[#ff6900de] font-semibold text-white transition">Sign Up</button>
                            </form>
                            <p className='text-center font-semibold md:hidden'>Already have an account. Please <Link className='text-primary hover:underline' to="/login">Login</Link></p>
                            <div className="divider divider-neutral">or</div>
                            <button onClick={handleWithGoogle} className="btn p-6 rounded-full w-full hover:bg-accent shadow-none duration-300 bg-base-100 font-semibold text-secondary border border-accent transition text-lg">
                                <img src="data:image/svg+xml,%3Csvg%20width%3D%2248%22%20height%3D%2248%22%20viewBox%3D%220%200%2048%2048%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-path%3D%22url%28%23clip0_15258_34551%29%22%3E%3Cpath%20d%3D%22M24%2019.6367V28.9313H36.9163C36.3492%2031.9204%2034.6471%2034.4514%2032.0944%2036.1532L39.8835%2042.1968C44.4217%2038.0079%2047.0399%2031.8551%2047.0399%2024.546C47.0399%2022.8443%2046.8872%2021.2077%2046.6035%2019.637L24%2019.6367Z%22%20fill%3D%22%234285F4%22%2F%3E%3Cpath%20d%3D%22M10.5492%2028.5684L8.7925%2029.9131L2.57422%2034.7567C6.5233%2042.5893%2014.6172%2048.0003%2023.999%2048.0003C30.4788%2048.0003%2035.9115%2045.8621%2039.8825%2042.1968L32.0934%2036.1531C29.9552%2037.5931%2027.2279%2038.4659%2023.999%2038.4659C17.759%2038.4659%2012.4574%2034.255%2010.559%2028.5822L10.5492%2028.5684Z%22%20fill%3D%22%2334A853%22%2F%3E%3Cpath%20d%3D%22M2.57436%2013.2432C0.938084%2016.4721%200%2020.1158%200%2023.9994C0%2027.8829%200.938084%2031.5266%202.57436%2034.7556C2.57436%2034.7773%2010.5599%2028.5592%2010.5599%2028.5592C10.08%2027.1192%209.79624%2025.5921%209.79624%2023.9991C9.79624%2022.4062%2010.08%2020.879%2010.5599%2019.439L2.57436%2013.2432Z%22%20fill%3D%22%23FBBC05%22%2F%3E%3Cpath%20d%3D%22M23.9996%209.55636C27.5342%209.55636%2030.676%2010.7781%2033.1851%2013.1345L40.0577%206.2619C35.8904%202.37833%2030.4797%200%2023.9996%200C14.6179%200%206.52342%205.38908%202.57434%2013.2437L10.5597%2019.44C12.4578%2013.7672%2017.7596%209.55636%2023.9996%209.55636Z%22%20fill%3D%22%23EA4335%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22clip0_15258_34551%22%3E%3Crect%20width%3D%2248%22%20height%3D%2248%22%20fill%3D%22white%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E" alt="google logo" className='w-[25px]' />
                                <span>Sign up with Google</span>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Signup;