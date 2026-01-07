import React from 'react';

import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import Footer from '../Components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../Components/Navbar/Navbar';

const Root = () => {
    return (
        <>
            <Navbar />
            <div className='overflow-x-hidden'>
                <Outlet />
                <Footer />
                <ToastContainer />
                <Toaster />
            </div>
        </>

    );
};

export default Root;