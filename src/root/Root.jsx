import React from 'react';
import Header from '../components/header/Header';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import Footer from '../components/footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Root = () => {
    return (
        <>
            <Header />
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