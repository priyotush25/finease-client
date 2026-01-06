import React from 'react';
import Navbar from './navbar/Navbar';

const Header = () => {
    return (
        <header className='sticky top-0 z-50 bg-accent-content shadow'>
            <Navbar />
        </header>
    );
};

export default Header;