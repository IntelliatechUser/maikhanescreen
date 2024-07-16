// src/components/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
    <Header />
    <main className="flex-grow container mx-auto p-6">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;