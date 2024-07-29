import React from "react";
import logo from "../assets/logo/logo.png";
import Countryandlanguage from "../CommonComponents/Countryandlanguage";
import useAuthStore from "../store/useAuthStore";
const Header = () => {
  const { user, logout } = useAuthStore();
 
  return ( <header className="bg-white shadow-xl mb-8">
    <div className="mx-auto p-4 pb-1 flex justify-between items-center">
      <img className="h-20" src={logo} />
      <div className="flex flex-col justify-end gap-2">
        {/* <div className="flex justify-end gap-4">
          <Countryandlanguage />
        </div> */}
          {/* <div className="flex flex-col items-end pr-5">
              <img
                className="h-10 w-10 rounded-full"
                // src={user.profilePhoto}
                alt="Profile"
              />
              <button
                onClick={logout}
                className="text-gray-600 px-3 ml-2 bg-customOrange rounded-lg py-1 "
              >
                Logout
              </button>
            </div> */}
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
}
export default Header;
