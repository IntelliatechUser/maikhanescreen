// import React from "react";
// import logo from "../assets/logo/logo.png";
// import useAuthStore from "../store/useAuthStore";

// const Header = () => {
//   const { user, setUser } = useAuthStore();

//   const getLocalStorageToken = async () => {
//     let token= await localStorage.getItem("token");

//     console.log(">>>>>>>>token",token);
//     return token;
//   };
//   const getLocalStorageProfile = async () => {
//     const value = localStorage.getItem("profile");

// let profilename=JSON.parse(value).data.response.fullName

//       return profilename ? profilename : null;
//   };
//   const handleLogout = () => {
//     setUser({});
//     localStorage.removeItem("token");
//   };
// console.log(">>>>>>>>>>fullName",user?.user?.fullName)
//   return (
//     <header className="bg-white shadow-xl mb-8">
//       <div className="mx-auto p-4 pb-1 flex justify-between items-center">
//         <img className="h-20" src={logo} alt="Logo" />
//         <div className="flex flex-col justify-end gap-2">
//           {getLocalStorageProfile() && (
//             <div className="flex flex-col items-end pr-5">
//               <p>{getLocalStorageProfile()}</p>
//               {getLocalStorageToken() && (
//                 <button
//                   onClick={handleLogout}
//                   className="text-gray-600 px-3 ml-2 bg-customOrange rounded-lg py-1"
//                 >
//                   Logout
//                 </button>
//               )}
//             </div>
//           )}
//           <nav>
//             <a href="/" className="text-gray-600 px-3">
//               Home
//             </a>
//             <a href="/company" className="text-gray-600 px-3">
//               Company
//             </a>
//             <a href="/contact" className="text-gray-600 px-3">
//               Contact Us
//             </a>
//             <a href="/pricing" className="text-gray-600 px-3">
//               Pricing
//             </a>
//             <a href="/support" className="text-gray-600 px-3">
//               Support
//             </a>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


// import React, { useState, useEffect } from "react";
// import logo from "../assets/logo/logo.png";
// import useAuthStore from "../store/useAuthStore";

// const Header = () => {
//   const { user, setUser } = useAuthStore();
//   const [profileName, setProfileName] = useState(null);
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     // Fetch profile and token from localStorage on component mount
//     const fetchLocalStorageData = () => {
//       const storedToken = localStorage.getItem("token");
//       const storedProfile = localStorage.getItem("profile");

//       if (storedToken) {
//         setToken(storedToken);
//       }

//       if (storedProfile) {
//         try {
//           const profile = JSON.parse(storedProfile);
//           setProfileName(profile.data.response.fullName);
//         } catch (error) {
//           console.error('Error parsing profile from localStorage:', error);
//         }
//       }
//     };

//     fetchLocalStorageData();
//   }, []);

//   const handleLogout = () => {
//     setUser({});
//     localStorage.removeItem("token");
//     localStorage.removeItem("profile");
//     setToken(null);
//     setProfileName(null);
//   };

//   return (
//     <header className="bg-white shadow-xl mb-8">
//       <div className="mx-auto p-4 pb-1 flex justify-between items-center">
//         <img className="h-20" src={logo} alt="Logo" />
//         <div className="flex flex-col justify-end gap-2">
//           {profileName && (
//             <div className="flex flex-col items-end pr-5">
//               <p>{profileName}</p>
//               {token && (
//                 <button
//                   onClick={handleLogout}
//                   className="text-gray-600 px-3 ml-2 bg-customOrange rounded-lg py-1"
//                 >
//                   Logout
//                 </button>
//               )}
//             </div>
//           )}
//           <nav>
//             <a href="/" className="text-gray-600 px-3">
//               Home
//             </a>
//             <a href="/company" className="text-gray-600 px-3">
//               Company
//             </a>
//             <a href="/contact" className="text-gray-600 px-3">
//               Contact Us
//             </a>
//             <a href="/pricing" className="text-gray-600 px-3">
//               Pricing
//             </a>
//             <a href="/support" className="text-gray-600 px-3">
//               Support
//             </a>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
// import React, { useState, useEffect } from "react";
// import logo from "../assets/logo/logo.png";
// import useAuthStore from "../store/useAuthStore";

// const Header = () => {
//   const { user, setUser } = useAuthStore();
//   const [profileName, setProfileName] = useState(null);
//   const [token, setToken] = useState(null);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   useEffect(() => {
//     // Fetch profile and token from localStorage on component mount
//     const fetchLocalStorageData = () => {
//       const storedToken = localStorage.getItem("token");
//       const storedProfile = localStorage.getItem("profile");

//       if (storedToken) {
//         setToken(storedToken);
//       }

//       if (storedProfile) {
//         try {
//           const profile = JSON.parse(storedProfile);
//           setProfileName(profile.data.response.fullName);
//         } catch (error) {
//           console.error('Error parsing profile from localStorage:', error);
//         }
//       }
//     };

//     fetchLocalStorageData();
//   }, []);

//   const handleLogout = () => {
//     setUser({});
//     localStorage.removeItem("token");
//     localStorage.removeItem("profile");
//     setToken(null);
//     setProfileName(null);
//     setIsDropdownOpen(false); // Close the dropdown
//   };

//   return (
//     <header className="bg-white shadow-xl mb-8">
//       <div className="mx-auto p-4 pb-1 flex justify-between items-center">
//         <img className="h-20" src={logo} alt="Logo" />
//         <div className="flex flex-col justify-end gap-2 relative">
//           {profileName && (
//             <div className="flex flex-col items-end pr-5">
//               <div className="relative">
//                 <button
//                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                   className="text-gray-600 px-3 py-1 bg-customOrange rounded-lg flex items-center"
//                 >
//                   {profileName}
//                   <svg
//                     className={`ml-2 w-4 h-4 transform ${isDropdownOpen ? 'rotate-180' : ''}`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </button>
//                 {isDropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg">
//                     <a
//                       href="/profile"
//                       className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                     >
//                       My Profile
//                     </a>
//                     <button
//                       onClick={handleLogout}
//                       className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}
//           <nav>
//             <a href="/" className="text-gray-600 px-3">
//               Home
//             </a>
//             <a href="/company" className="text-gray-600 px-3">
//               Company
//             </a>
//             <a href="/contact" className="text-gray-600 px-3">
//               Contact Us
//             </a>
//             <a href="/pricing" className="text-gray-600 px-3">
//               Pricing
//             </a>
//             <a href="/support" className="text-gray-600 px-3">
//               Support
//             </a>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState, useEffect } from "react";
import logo from "../assets/logo/logo.png";
import useAuthStore from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import businessLogicStore from "../store/BusinessLogicStore";
const Header = () => {
  const { currentTab, setCurrentTab } = businessLogicStore();
  const location = useLocation();
  const { user, setUser } = useAuthStore();
  const [profileName, setProfileName] = useState(null);
  const [roleName, setRoleName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch profile and token from localStorage on component mount
    const fetchLocalStorageData = () => {
      const storedProfile = localStorage.getItem("profile");

      if (location.pathname == "/signup") {

      } else if (!storedProfile) {
        navigate("/")
      }
      if (storedProfile) {
        try {
          const profile = JSON.parse(storedProfile);
          setProfileName(profile.data.response.fullName);

          console.log(">>>>>>>>>>>>>profile", profile.data.response.fullName)
          setRoleName(profile.data.response.roleName);
        } catch (error) {
          console.error('Error parsing profile from localStorage:', error);
        }
      }
    };

    fetchLocalStorageData();
  }, []);

  const handleLogout = () => {

    setUser({});
    localStorage.removeItem("token");
    localStorage.removeItem("profile");
    setProfileName(null);
    setRoleName(null);
  };

  const handleProfileAction = (event) => {
    if (event.target.value === "logout") {
      setCurrentTab(1);
      handleLogout();
      navigate("/");
    } else if (event.target.value === "profile") {
      window.location.href = "/profile"; // Redirect to profile page
    }
  };
  console.log(">>>>>>>>>>>>>>profileName", profileName);
  return (
    <header className="bg-white shadow-xl mb-8">
      <div className="mx-auto p-4 pb-1 flex justify-between items-center">
        <img className="h-20" src={logo} alt="Logo" />
        <div className="flex flex-col justify-end gap-2 relative">
          {<div className="flex justify-end pr-5">{profileName?.toUpperCase()} {roleName && `(${roleName})`}</div>}
          {profileName && roleName && (
            <div className="flex flex-col items-end pr-5">
              <div className="relative">
                <select
                  onChange={handleProfileAction}
                  className="text-gray-600 px-3 py-1 border border-1 rounded-lg"
                  defaultValue=""
                >
                  {/* <option value="" disabled>
                    {profileName} ({roleName})
                  </option> */}

                  <option value="profile">My Profile</option>
                  <option value="logout" >Logout</option>
                </select>
              </div>
            </div>
          )}
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
};

export default Header;
