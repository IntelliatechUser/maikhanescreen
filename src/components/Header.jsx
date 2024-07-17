import React from "react";
import logo from "../assets/logo/logo.png";
import Countryandlanguage from "../CommonComponents/Countryandlanguage";

const Header = () => (
  <header className="bg-white shadow mb-8">
    <div className="container mx-auto p-4 pb-1 flex justify-between items-center">
      <img className="h-20" src={logo} />
      <div className="flex flex-col justify-end">
        <div className="flex justify-end gap-2">
          <Countryandlanguage />
        </div>
        <nav>
          <a href="/" className="text-gray-600 px-3">
            Home
          </a>
          <a href="/company" className="text-gray-600 px-3">
            Company
          </a>
          <a href="/contact" className="text-gray-600 px-3">
            Contact Us
          </a>
          <a href="/pricing" className="text-gray-600 px-3">
            Pricing
          </a>
          <a href="/support" className="text-gray-600 px-3">
            Support
          </a>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
