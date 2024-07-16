import React from 'react';
import logo from '../assets/logo/logo.png'

const Header = () => (
    <header className="bg-white shadow mb-8">
        <div className="container mx-auto p-4 flex justify-between items-center">
            <img className='h-20' src={logo} />
            <nav>
                <a href="/" className="text-gray-600 px-3">Home</a>
                <a href="/company" className="text-gray-600 px-3">Company</a>
                <a href="/contact" className="text-gray-600 px-3">Contact Us</a>
                <a href="/pricing" className="text-gray-600 px-3">Pricing</a>
                <a href="/support" className="text-gray-600 px-3">Support</a>
            </nav>
        </div>
    </header>
);

export default Header;
