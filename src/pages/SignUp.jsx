// import React, { useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
// import { BarsOwner, Commonheading } from "../components/Commonheading";
// import restaurantbarsmall from "../assets/img/resturantbarsmall.png";
// import liquorstore from "../assets/img/liquorstore.png";
// import liquorbrand from "../assets/img/liquorbrand.png";
// import hotels from "../assets/img/hotels.png";
// import Footer from "../components/Footer";
// import Slider from "react-slick";
// import Layout from "../components/Layout";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import restaurantbar from "../assets/img/restaurantbar.jpg";

// const SignUp = () => {
//   const navigate = useNavigate();

//   const validationSchema = Yup.object().shape({
//     fullName: Yup.string().required("Full name is required"),
//     phoneNumber: Yup.string().required("Phone number is required"),
//     email: Yup.string()
//       .email("Invalid email format")
//       .required("Email is required"),
//     password: Yup.string().required("Password is required"),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref("password"), null], "Passwords must match")
//       .required("Confirm Password is required"),
//     role: Yup.string().required("Role is required"),
//   });

//   const initialValues = {
//     fullName: "",
//     phoneNumber: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     role: "",
//   };

//   const onSubmit = (values) => {
//     console.log("Form data", values);
//     // Perform signup logic here (e.g., API call)
//     navigate("/");
//   };

//   const settings1 = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: true,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true,
//     nextArrow: (
//       <div>
//         <div className="next-slick-arrow">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             stroke="black"
//             height="24"
//             viewBox="0 -960 960 960"
//             width="24"
//             fill="orange"
//           >
//             <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
//           </svg>
//         </div>
//       </div>
//     ),
//     prevArrow: (
//       <div>
//         <div className="next-slick-arrow rotate-180">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             stroke="black"
//             height="24"
//             viewBox="0 -960 960 960"
//             width="24"
//             fill="orange"
//           >
//             <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
//           </svg>
//         </div>
//       </div>
//     ),
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <Layout>
//       <div className="grid min-h-[70vh] gap-y-2">
//         <div className="grid md:min-h-[40vh] md:grid-cols-[60%_40%] gap-10 ">
//           <div className="grid md:grid-rows-[8%_13%_41%_14%_auto] gap-y-2 p-2 "><div className="font-bold text-2xl ">Sign Up Help</div>
//             <div className="flex  w-[70%] text-sm mb-10">
//               <Commonheading heading={"Restaurant Bar"} img={restaurantbarsmall} />
//               <Commonheading heading={"Hotels"} img={hotels} />
//               <Commonheading heading={"Liquor Brand"} img={liquorbrand} />
//             </div>
//             <div className="text-yellow-dark shadow-gray  rounded-md p-2 gap-1  tablet-small:text-[13px] tablet-big:text-[14px]">
//               <ul className=" ">
//                 <li className="pb-2">1. Account Creation Signup should be done by either Manager/Owner/ Corporate Representative</li>
//                 <li className="pb-2"> 2. Additional users for reception and cashier can be created by the owner/Manager after Successful registration of the business Unit .</li>
//                 <li className="pb-2">3. Reception and Cashier Team Member Should login directly using the URL : staff login

//                   https:/ /www.maikhane.com/businessplatform/stafflogin user name and password for staff login will be shared by owner and manager of the business unit</li>


//                 <li className="pb-2">4. All the credential will be active after the successful verification of the business unit.</li></ul>
//             </div>
//             <div className="flex  w-[70%] text-sm pt-6 ">
//               <Commonheading heading={"Restaurant Bar"} img={restaurantbarsmall} />
//               <Commonheading heading={"Liquor Store"} img={liquorstore} />
//               <Commonheading heading={"Liquor Brand"} img={liquorbrand} />
//             </div>
//             <div className="text-yellow-dark shadow-gray mb-2  rounded-md p-2 mt-3 tablet-small:text-[9px] tablet-big:text-[11px] ">
//               <ul className=" gap-1 ">
//                 <li className="pb-2">1. Account Creation signup should be dono by either Manager/Owner/ Corporate Representative</li>
//                 <li className="pb-2">2. No Additional users for reception and cashier Gan be created. </li>
//                 <li className="pb-2">3. All the credential willbe active after the successful verification of the business unit.</li>
//               </ul>
//             </div>
//             {/* <div className="grid grid-cols-1">
//               <Slider {...settings1}>
//                 <div className="relative h-[230px] w-full flex">
//                   <img
//                     src={restaurantbar}
//                     className="absolute top-0 left-0 w-[70%] h-full object-cover rounded-lg "
//                   />
//                   <div className="absolute left-[75%] text-sm flex flex-col h-full tablet-small:text-[9px] tablet-big:text-[11px]">
//                     <p className="flex-1 font-bold">Other features</p>{" "}
//                     <p className="flex-1">Inventory management</p>{" "}
//                     <p className="flex-1">Attendance report</p>
//                     <p className="flex-1">Discount Vouchers</p>
//                     <p className="flex-1">Ticket Management</p>
//                     <p className="flex-1">Customer Interaction</p>
//                   </div>
//                 </div>
//                 <div className="relative h-[200px] w-full">
//                   <img
//                     src="https://dummyimage.com/300.png/09f/fff"
//                     className="absolute top-0 left-0 w-full h-full object-cover"
//                   />
//                 </div>
//               </Slider>
//             </div> */}
//           </div>
//           <div>
//             <div className="flex flex-col h-full shadow-gray rounded-lg">
//               <div className="rounded-lg px-6 w-full max-w-md text-sm p-4">
//                 <p className="font-semibold mb-6 text-left text-yellow-dark font-bold text-2xl pl-4">
//                   Create Account
//                 </p>
//                 <p className="font-semibold mb-6 text-left pl-4">
//                   Already have an account?
//                   <span
//                     className="text-yellow-dark pl-2 cursor-pointer"
//                     onClick={() => navigate("/")}
//                   >
//                     Login
//                   </span>
//                 </p>
//                 <Formik
//                   initialValues={initialValues}
//                   validationSchema={validationSchema}
//                   onSubmit={onSubmit}
//                 >
//                   {({ isSubmitting }) => (
//                     <Form>
//                       <div className=" px-4">
//                         <div className="mb-4">
//                           <label
//                             className="block text-gray-600 mb-2 text-black font-bold"
//                             htmlFor="fullName"
//                           >
//                             Full Name
//                           </label>
//                           <Field
//                             type="text"
//                             name="fullName"
//                             placeholder="Full Name"
//                             className="w-full p-2 rounded border-0  focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
//                           />
//                           <ErrorMessage
//                             name="fullName"
//                             component="div"
//                             className="text-red-600 mt-1 text-sm"
//                           />
//                         </div>
//                         <div className="mb-4">
//                           <label
//                             className="block text-gray-600 mb-2 text-black font-bold"
//                             htmlFor="phoneNumber"
//                           >
//                             Phone Number
//                           </label>
//                           <Field
//                             type="text"
//                             name="phoneNumber"
//                             placeholder="Phone Number"
//                             className="w-full p-2 rounded border-0  focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
//                           />
//                           <ErrorMessage
//                             name="phoneNumber"
//                             component="div"
//                             className="text-red-600 mt-1 text-sm"
//                           />
//                         </div>
//                         <div className="mb-4">
//                           <label
//                             className="block text-gray-600 mb-2 text-black font-bold"
//                             htmlFor="email"
//                           >
//                             Email
//                           </label>
//                           <Field
//                             type="email"
//                             name="email"
//                             placeholder="Email"
//                             className="w-full p-2 rounded border-0  focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
//                           />
//                           <ErrorMessage
//                             name="email"
//                             component="div"
//                             className="text-red-600 mt-1 text-sm"
//                           />
//                         </div>
//                         <div className="mb-4">
//                           <label
//                             className="block text-gray-600 mb-2 text-black font-bold"
//                             htmlFor="password"
//                           >
//                             Password
//                           </label>
//                           <Field
//                             type="password"
//                             name="password"
//                             placeholder="Password"
//                             className="w-full p-2 rounded border-0  focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
//                           />
//                           <ErrorMessage
//                             name="password"
//                             component="div"
//                             className="text-red-600 mt-1 text-sm"
//                           />
//                         </div>
//                         <div className="mb-4">
//                           <label
//                             className="block text-gray-600 mb-2 text-black font-bold"
//                             htmlFor="confirmPassword"
//                           >
//                             Confirm Password
//                           </label>
//                           <Field
//                             type="password"
//                             name="confirmPassword"
//                             placeholder="Confirm Password"
//                             className="w-full p-2 rounded border-0  focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
//                           />
//                           <ErrorMessage
//                             name="confirmPassword"
//                             component="div"
//                             className="text-red-600 mt-1 text-sm"
//                           />
//                         </div>
//                         <div className="mb-6">
//                           <label
//                             className="block text-gray-600 mb-2 text-black font-bold"
//                             htmlFor="role"
//                           >
//                             Role
//                           </label>
//                           <Field
//                             as="select"
//                             name="role"
//                             className="w-full p-2 rounded border-0  focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
//                           >
//                             <option value="" label="Select your role" />
//                             <option value="Owner" label="Owner" />
//                             <option value="Manager" label="Manager" />
//                           </Field>
//                           <ErrorMessage
//                             name="role"
//                             component="div"
//                             className="text-red-600 mt-1 text-sm"
//                           />
//                         </div>
//                         <div className="flex justify-start">
//                           <button
//                             type="submit"
//                             disabled={isSubmitting}
//                             className="bg-customOrange text-white p-2 w-full rounded-full hover:bg-indigo-700 border border-2"
//                           >
//                             Sign Up
//                           </button>
//                         </div>
//                       </div>
//                     </Form>
//                   )}
//                 </Formik>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="grid min-h-[10vh] md:min-h-[30vh] grid-cols-1">
//           <Slider {...settings}>
//             <div>
//               <BarsOwner />
//             </div>
//             <div>
//               <BarsOwner />
//             </div>
//             <div>
//               <BarsOwner />
//             </div>
//             <div>
//               <BarsOwner />
//             </div>
//             <div>
//               <BarsOwner />
//             </div>
//             <div>
//               <BarsOwner />
//             </div>
//           </Slider>
//         </div>
//         <div className="grid md:min-h-[20vh] md:grid-cols-[100%]">
//           <Footer />
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default SignUp;

// const SampleNextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         color: "black",
//         fontSize: "30px",
//         right: "10px",
//         zIndex: 1,
//       }}
//       onClick={onClick}
//     ></div>
//   );
// };

// const SamplePrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         color: "black",
//         fontSize: "30px",
//         left: "10px",
//         zIndex: 1,
//       }}
//       onClick={onClick}
//     ></div>
//   );
// };
// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
// import { BarsOwner, Commonheading } from "../components/Commonheading";
// import restaurantbarsmall from "../assets/img/resturantbarsmall.png";
// import liquorstore from "../assets/img/liquorstore.png";
// import liquorbrand from "../assets/img/liquorbrand.png";
// import hotels from "../assets/img/hotels.png";
// import Footer from "../components/Footer";
// import Slider from "react-slick";
// import Layout from "../components/Layout";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import restaurantbar from "../assets/img/restaurantbar.jpg";
// import useSignupStore from '../store/SignUpStore';

// const SignUp = () => {
//   const navigate = useNavigate();
//   const {
//     fullName,
//     phoneNumber,
//     email,
//     role,
//     password,
//     confirmPassword,
//     loading,
//     error,
//     success,
//     setFullName,
//     setPhoneNumber,
//     setEmail,
//     setRole,
//     setPassword,
//     setConfirmPassword,
//     signup
//   } = useSignupStore(state => ({
//     ...state,
//     setFullName: state.setFullName,
//     setPhoneNumber: state.setPhoneNumber,
//     setEmail: state.setEmail,
//     setRole: state.setRole,
//     setPassword: state.setPassword,
//     setConfirmPassword: state.setConfirmPassword,
//     signup: state.signup,
//   }));

//   const validationSchema = Yup.object().shape({
//     fullName: Yup.string().required("Full name is required"),
//     phoneNumber: Yup.string().required("Phone number is required"),
//     email: Yup.string()
//       .email("Invalid email format")
//       .required("Email is required"),
//     password: Yup.string().required("Password is required"),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref("password"), null], "Passwords must match")
//       .required("Confirm Password is required"),
//     role: Yup.string()
//       .oneOf(["Owner", "Manager"], "Role must be either Owner or Manager")
//       .required("Role is required"),
//   });
  

//   const onSubmit = async (values) => {
//     setFullName(values.fullName);
//     setPhoneNumber(values.phoneNumber);
//     setEmail(values.email);
//     setRole(values.role);
//     setPassword(values.password);
//     setConfirmPassword(values.confirmPassword);
//     await signup();
//     if (success) {
//       navigate("/");
//     }
//   };

//   const settings1 = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: true,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true,
//     nextArrow: (
//       <div>
//         <div className="next-slick-arrow">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             stroke="black"
//             height="24"
//             viewBox="0 -960 960 960"
//             width="24"
//             fill="orange"
//           >
//             <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
//           </svg>
//         </div>
//       </div>
//     ),
//     prevArrow: (
//       <div>
//         <div className="next-slick-arrow rotate-180">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             stroke="black"
//             height="24"
//             viewBox="http://www.w3.org/2000/svg"
//             width="24"
//             fill="orange"
//           >
//             <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
//           </svg>
//         </div>
//       </div>
//     ),
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <Layout>
//       <div className="grid min-h-[70vh] gap-y-2">
//         <div className="grid md:min-h-[40vh] md:grid-cols-[60%_40%] gap-10 ">
//           <div className="grid md:grid-rows-[8%_13%_41%_14%_auto] gap-y-2 p-2 ">
//             <div className="font-bold text-2xl ">Sign Up Help</div>
//             <div className="flex  w-[70%] text-sm mb-10">
//               <Commonheading heading={"Restaurant Bar"} img={restaurantbarsmall} />
//               <Commonheading heading={"Hotels"} img={hotels} />
//               <Commonheading heading={"Liquor Brand"} img={liquorbrand} />
//             </div>
//             <div className="text-yellow-dark shadow-gray rounded-md p-2 gap-1 tablet-small:text-[13px] tablet-big:text-[14px]">
//               <ul className=" ">
//                 <li className="pb-2">1. Account Creation Signup should be done by either Manager/Owner/ Corporate Representative</li>
//                 <li className="pb-2"> 2. Additional users for reception and cashier can be created by the owner/Manager after Successful registration of the business Unit .</li>
//                 <li className="pb-2">3. Reception and Cashier Team Member Should login directly using the URL : staff login

//                   https:/ /www.maikhane.com/businessplatform/stafflogin user name and password for staff login will be shared by owner and manager of the business unit</li>
//                 <li className="pb-2">4. All the credential will be active after the successful verification of the business unit.</li></ul>
//             </div>
//             <div className="flex  w-[70%] text-sm pt-6 ">
//               <Commonheading heading={"Restaurant Bar"} img={restaurantbarsmall} />
//               <Commonheading heading={"Liquor Store"} img={liquorstore} />
//               <Commonheading heading={"Liquor Brand"} img={liquorbrand} />
//             </div>
//             <div className="text-yellow-dark shadow-gray mb-2 rounded-md p-2 mt-3 tablet-small:text-[9px] tablet-big:text-[11px] ">
//               <ul className=" gap-1 ">
//                 <li className="pb-2">1. Account Creation signup should be done by either Manager/Owner/ Corporate Representative</li>
//                 <li className="pb-2">2. No Additional users for reception and cashier can be created. </li>
//                 <li className="pb-2">3. All the credentials will be active after the successful verification of the business unit.</li>
//               </ul>
//             </div>
//             {/* <div className="grid grid-cols-1">
//               <Slider {...settings1}>
//                 <div className="relative h-[230px] w-full flex">
//                   <img
//                     src={restaurantbar}
//                     className="absolute top-0 left-0 w-[70%] h-full object-cover rounded-lg "
//                   />
//                   <div className="absolute left-[75%] text-sm flex flex-col h-full tablet-small:text-[9px] tablet-big:text-[11px]">
//                     <p className="flex-1 font-bold">Other features</p>{" "}
//                     <p className="flex-1">Inventory management</p>{" "}
//                     <p className="flex-1">Attendance report</p>
//                     <p className="flex-1">Discount Vouchers</p>
//                     <p className="flex-1">Ticket Management</p>
//                     <p className="flex-1">Customer Interaction</p>
//                   </div>
//                 </div>
//                 <div className="relative h-[200px] w-full">
//                   <img
//                     src="https://dummyimage.com/300.png/09f/fff"
//                     className="absolute top-0 left-0 w-full h-full object-cover"
//                   />
//                 </div>
//               </Slider>
//             </div> */}
//           </div>
//           <div>
//             <div className="flex flex-col h-full shadow-gray rounded-lg">
//               <div className="rounded-lg px-6 w-full max-w-md text-sm p-4">
//                 <p className="font-semibold mb-6 text-left text-yellow-dark font-bold text-2xl pl-4">
//                   Create Account
//                 </p>
//                 <p className="font-semibold mb-6 text-left pl-4">
//                   Already have an account?
//                   <span
//                     className="text-yellow-dark pl-2 cursor-pointer"
//                     onClick={() => navigate("/")}
//                   >
//                     Login
//                   </span>
//                 </p>
//                 <Formik
//                   initialValues={{
//                     fullName,
//                     phoneNumber,
//                     email,
//                     password,
//                     confirmPassword,
//                     role
//                   }}
//                   validationSchema={validationSchema}
//                   onSubmit={onSubmit}
//                 >
//                   {({ isSubmitting }) => (
//                     <Form>
//                       <div className=" px-4">
//                         <div className="mb-4">
//                           <label
//                             className="block text-gray-600 mb-2 text-black font-bold"
//                             htmlFor="fullName"
//                           >
//                             Full Name
//                           </label>
//                           <Field
//                             type="text"
//                             name="fullName"
//                             placeholder="Full Name"
//                             className="w-full p-2 rounded border-0 focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
//                             onChange={(e) => setFullName(e.target.value)}
//                             value={fullName}
//                           />
//                           <ErrorMessage
//                             name="fullName"
//                             component="div"
//                             className="text-red-600 mt-1 text-sm"
//                           />
//                         </div>
//                         <div className="mb-4">
//                           <label
//                             className="block text-gray-600 mb-2 text-black font-bold"
//                             htmlFor="phoneNumber"
//                           >
//                             Phone Number
//                           </label>
//                           <Field
//                             type="text"
//                             name="phoneNumber"
//                             placeholder="Phone Number"
//                             className="w-full p-2 rounded border-0 focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
//                             onChange={(e) => setPhoneNumber(e.target.value)}
//                             value={phoneNumber}
//                           />
//                           <ErrorMessage
//                             name="phoneNumber"
//                             component="div"
//                             className="text-red-600 mt-1 text-sm"
//                           />
//                         </div>
//                         <div className="mb-4">
//                           <label
//                             className="block text-gray-600 mb-2 text-black font-bold"
//                             htmlFor="email"
//                           >
//                             Email
//                           </label>
//                           <Field
//                             type="email"
//                             name="email"
//                             placeholder="Email"
//                             className="w-full p-2 rounded border-0 focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
//                             onChange={(e) => setEmail(e.target.value)}
//                             value={email}
//                           />
//                           <ErrorMessage
//                             name="email"
//                             component="div"
//                             className="text-red-600 mt-1 text-sm"
//                           />
//                         </div>
//                         <div className="mb-4">
//                           <label
//                             className="block text-gray-600 mb-2 text-black font-bold"
//                             htmlFor="password"
//                           >
//                             Password
//                           </label>
//                           <Field
//                             type="password"
//                             name="password"
//                             placeholder="Password"
//                             className="w-full p-2 rounded border-0 focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
//                             onChange={(e) => setPassword(e.target.value)}
//                             value={password}
//                           />
//                           <ErrorMessage
//                             name="password"
//                             component="div"
//                             className="text-red-600 mt-1 text-sm"
//                           />
//                         </div>
//                         <div className="mb-4">
//                           <label
//                             className="block text-gray-600 mb-2 text-black font-bold"
//                             htmlFor="confirmPassword"
//                           >
//                             Confirm Password
//                           </label>
//                           <Field
//                             type="password"
//                             name="confirmPassword"
//                             placeholder="Confirm Password"
//                             className="w-full p-2 rounded border-0 focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             value={confirmPassword}
//                           />
//                           <ErrorMessage
//                             name="confirmPassword"
//                             component="div"
//                             className="text-red-600 mt-1 text-sm"
//                           />
//                         </div>
//                         <div className="mb-6">
//                           <label
//                             className="block text-gray-600 mb-2 text-black font-bold"
//                             htmlFor="role"
//                           >
//                             Role
//                           </label>
//                           <Field
//                             as="select"
//                             name="role"
//                             className="w-full p-2 rounded border-0 focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
//                             onChange={(e) => setRole(e.target.value)}
//                             value={role}
//                           >
//                             <option value="" label="Select your role" />
//                             <option value="Owner" label="Owner" />
//                             <option value="Manager" label="Manager" />
//                           </Field>
//                           <ErrorMessage
//                             name="role"
//                             component="div"
//                             className="text-red-600 mt-1 text-sm"
//                           />
//                         </div>
//                         <div className="flex justify-start">
//                           <button
//                             type="submit"
//                             disabled={loading}
//                             className="bg-customOrange text-white p-2 w-full rounded-full hover:bg-indigo-700 border border-2"
//                           >
//                             Sign Up
//                           </button>
//                         </div>
//                         {error && <div className="text-red-600 mt-2 text-sm">{error}</div>}
//                       </div>
//                     </Form>
//                   )}
//                 </Formik>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="grid min-h-[10vh] md:min-h-[30vh] grid-cols-1">
//           <Slider {...settings}>
//             <div>
//               <BarsOwner />
//             </div>
//             <div>
//               <BarsOwner />
//             </div>
//             <div>
//               <BarsOwner />
//             </div>
//             <div>
//               <BarsOwner />
//             </div>
//             <div>
//               <BarsOwner />
//             </div>
//             <div>
//               <BarsOwner />
//             </div>
//           </Slider>
//         </div>
//         <div className="grid md:min-h-[20vh] md:grid-cols-[100%]">
//           <Footer />
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default SignUp;

// const SampleNextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         color: "black",
//         fontSize: "30px",
//         right: "10px",
//         zIndex: 1,
//       }}
//       onClick={onClick}
//     ></div>
//   );
// };

// const SamplePrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         color: "black",
//         fontSize: "30px",
//         left: "10px",
//         zIndex: 1,
//       }}
//       onClick={onClick}
//     ></div>
//   );
// };
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { BarsOwner, Commonheading } from "../components/Commonheading";
import restaurantbarsmall from "../assets/img/resturantbarsmall.png";
import liquorstore from "../assets/img/liquorstore.png";
import liquorbrand from "../assets/img/liquorbrand.png";
import hotels from "../assets/img/hotels.png";
import Footer from "../components/Footer";
import Slider from "react-slick";
import Layout from "../components/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useSignupStore from '../store/SignUpStore';
import {useState } from "react";
import axios from "axios";
const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  email: Yup.string()
    .email("Invalid email format")
    .matches(
      /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/,
      "Email must contain uppercase letters, lowercase letters, digits, and special characters (+, _, ., -)"
    )
    .required("Email is required"),
    password: Yup.string()
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=])(?=\S+$).{8,}$/,
      "Password must contain at least 8 characters, including uppercase letters, lowercase letters, digits, and special characters (@, #, $, %, ^, &, +, =)"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  role: Yup.string()
    .oneOf(["1", "2"], "Role must be either Owner or Manager")
    .required("Role is required"),
});

const SignUp = () => {
  const [sucessMessage,setSuccessMessage]=useState("");
  const navigate = useNavigate();
  const {
    fullName,
    phoneNumber,
    email,
    role,
    password,
    confirmPassword,
    loading,
    error,
    success,
    setFullName,
    setPhoneNumber,
    setEmail,
    setRole,
    setPassword,
    setConfirmPassword,
    signup,
    setSuccess,
    setLoading,setError
  } = useSignupStore();


  const onSubmit = async (values) => {

    // setFullName(values.fullName);
    // setPhoneNumber(Number(values.phoneNumber));
    // setEmail(values.email);
    // setRole(Number(values.role));
    // setPassword(values.password);
    // setConfirmPassword(values.confirmPassword);
    try {
      const response = await axios.post('http://192.168.1.15:8091/user/signup', {
        email: 
        values.email,
fullName
: values.fullName,

password:
values.password,

phoneNumber
: Number(values.phoneNumber)
,
roleId
: Number(values.role)

      }
        
        
        , {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.status === 500) {
       
        throw new Error(response.data.message || 'Failed to signup');
      }
      if (response.data.status === 200) {
    
        console.log("response>>>>>>>>>>2", response);
      setSuccessMessage("Successful signup");
      setLoading(false);
      setSuccess(true);
      setError("")
       // set({ loading: false, success: true });
      }
 
    } catch (error) {
      console.log("error>>>>>>>>>>", JSON.stringify(error));
      setSuccessMessage("");
      setLoading(false);
      setError(error.response?.data?.message || error.message);
      // set({ loading: false, error: error.response?.data?.message || error.message });
    }
    //  if (success) {
    //   alert("success");
    //   setSuccessMessage("User SignUp Successfully")
    //  }else{
    // alert("not in success")}
  };

  const settings1 = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="black"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="orange"
          >
            <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
          </svg>
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="next-slick-arrow rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="black"
            height="24"
            viewBox="http://www.w3.org/2000/svg"
            width="24"
            fill="orange"
          >
            <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
          </svg>
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
console.log(">>>>>>>>>>>>>>error",error);
  return (
    <Layout>
      <div className="grid min-h-[70vh] gap-y-2">
        <div className="grid md:min-h-[40vh] md:grid-cols-[60%_40%] gap-10 ">
          <div className="grid md:grid-rows-[8%_13%_41%_14%_auto] gap-y-2 p-2 ">
            <div className="font-bold text-2xl ">Sign Up Help</div>
            <div className="flex w-[70%] text-sm mb-10">
              <Commonheading heading={"Restaurant Bar"} img={restaurantbarsmall} />
              <Commonheading heading={"Hotels"} img={hotels} />
              <Commonheading heading={"Liquor Brand"} img={liquorbrand} />
            </div>
            <div className="text-yellow-dark shadow-gray rounded-md p-2 gap-1 tablet-small:text-[13px] tablet-big:text-[14px]">
              <ul>
                <li className="pb-2">1. Account Creation Signup should be done by either Manager/Owner/ Corporate Representative</li>
                <li className="pb-2">2. Additional users for reception and cashier can be created by the owner/Manager after Successful registration of the business Unit.</li>
                <li className="pb-2">3. Reception and Cashier Team Member Should login directly using the URL: staff login</li>
                <li className="pb-2">4. All the credential will be active after the successful verification of the business unit.</li>
              </ul>
            </div>
            <div className="flex w-[70%] text-sm pt-6">
              <Commonheading heading={"Restaurant Bar"} img={restaurantbarsmall} />
              <Commonheading heading={"Liquor Store"} img={liquorstore} />
              <Commonheading heading={"Liquor Brand"} img={liquorbrand} />
            </div>
            <div className="text-yellow-dark shadow-gray mb-2 rounded-md p-2 mt-3 tablet-small:text-[9px] tablet-big:text-[11px] ">
              <ul>
                <li className="pb-2">1. Account Creation signup should be done by either Manager/Owner/ Corporate Representative</li>
                <li className="pb-2">2. No Additional users for reception and cashier can be created.</li>
                <li className="pb-2">3. All the credentials will be active after the successful verification of the business unit.</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex flex-col h-full shadow-gray rounded-lg">
              <div className="rounded-lg px-6 w-full max-w-md text-sm p-4">
                <p className="font-semibold mb-6 text-left text-yellow-dark font-bold text-2xl pl-4">
                  Create Account
                </p>
                <p className="font-semibold mb-6 text-left pl-4">
                  Already have an account?
                  <span
                    className="text-yellow-dark pl-2 cursor-pointer"
                    onClick={() => navigate("/")}
                  >
                    Login
                  </span>
                </p>
                 
                <Formik
                  initialValues={{
                    fullName,
                    phoneNumber,
                    email,
                    password, 
                    confirmPassword,
                    role
                  }}
                  validationSchema={validationSchema
                    
                    
                   }
                  onSubmit={onSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className=" px-4">
                       
                        {sucessMessage && <div className="text-red-600 mt-2 text-sm text-[green]">{sucessMessage}</div>} 
                      {error && <div className="text-red-600 mt-2 text-sm text-acc-list">{error}</div>} 
                        <div className="mb-4">
                          <label
                            className="block text-gray-600 mb-2 text-black font-bold"
                            htmlFor="fullName"
                          >
                            Full Name
                          </label>
                          <Field
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            className="w-full p-2 rounded border-0 focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
                          
                          />
                          <ErrorMessage
                            name="fullName"
                            component="div"
                            className="text-red-600 mt-1 text-sm"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-600 mb-2 text-black font-bold"
                            htmlFor="phoneNumber"
                          >
                            Phone Number
                          </label>
                          <Field
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            className="w-full p-2 rounded border-0 focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
                          />
                          <ErrorMessage
                            name="phoneNumber"
                            component="div"
                            className="text-red-600 mt-1 text-sm"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-600 mb-2 text-black font-bold"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <Field
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full p-2 rounded border-0 focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-600 mt-1 text-sm"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-600 mb-2 text-black font-bold"
                            htmlFor="password"
                          >
                            Password
                          </label>
                          <Field
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full p-2 rounded border-0 focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-red-600 mt-1 text-sm"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-gray-600 mb-2 text-black font-bold"
                            htmlFor="confirmPassword"
                          >
                            Confirm Password
                          </label>
                          <Field
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="w-full p-2 rounded border-0 focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
                          />
                          <ErrorMessage
                            name="confirmPassword"
                            component="div"
                            className="text-red-600 mt-1 text-sm"
                          />
                        </div>
                        <div className="mb-6">
                          <label
                            className="block text-gray-600 mb-2 text-black font-bold"
                            htmlFor="role"
                          >
                            Role
                          </label>
                          <Field
                            as="select"
                            name="role"
                            className="w-full p-2 rounded border-0 focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
                          >
                            <option value="" label="Select your role" />
                            <option value="1" label="Owner" />
                            <option value="2" label="Manager" />
                          </Field>
                          <ErrorMessage
                            name="role"
                            component="div"
                            className="text-red-600 mt-1 text-sm"
                          />
                        </div>
                        <div className="flex justify-start">
                          <button
                            type="submit"
                            disabled={loading || isSubmitting}
                            className="bg-customOrange text-white p-2 w-full rounded-full hover:bg-indigo-700 border border-2"
                          >
                            Sign Up
                          </button>
                        </div>
                        {/* {error && <div className="text-red-600 mt-2 text-sm">{error}</div>} */}
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
        <div className="grid min-h-[10vh] md:min-h-[30vh] grid-cols-1">
          <Slider {...settings}>
            <div>
              <BarsOwner />
            </div>
            <div>
              <BarsOwner />
            </div>
            <div>
              <BarsOwner />
            </div>
            <div>
              <BarsOwner />
            </div>
            <div>
              <BarsOwner />
            </div>
            <div>
              <BarsOwner />
            </div>
          </Slider>
        </div>
        <div className="grid md:min-h-[20vh] md:grid-cols-[100%]">
          <Footer />
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        fontSize: "30px",
        right: "10px",
        zIndex: 1,
      }}
      onClick={onClick}
    ></div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        fontSize: "30px",
        left: "10px",
        zIndex: 1,
      }}
      onClick={onClick}
    ></div>
  );
};
// import React, { useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
// import { BarsOwner, Commonheading } from "../components/Commonheading";
// import restaurantbarsmall from "../assets/img/resturantbarsmall.png";
// import liquorstore from "../assets/img/liquorstore.png";
// import liquorbrand from "../assets/img/liquorbrand.png";
// import hotels from "../assets/img/hotels.png";
// import Footer from "../components/Footer";
// import Slider from "react-slick";
// import Layout from "../components/Layout";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import useSignupStore from '../store/SignUpStore';

// const validationSchema = Yup.object().shape({
//   fullName: Yup.string().required("Full name is required"),
//   phoneNumber: Yup.string()
//     .required("Phone number is required")
//     .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
//   email: Yup.string()
//     .email("Invalid email format")
//     .matches(
//       /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/,
//       "Email must contain uppercase letters, lowercase letters, digits, and special characters (+, _, ., -)"
//     )
//     .required("Email is required"),
//   password: Yup.string()
//     .matches(
//       /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=])(?=\S+$).{8,}$/,
//       "Password must contain at least 8 characters, including uppercase letters, lowercase letters, digits, and special characters (@, #, $, %, ^, &, +, =)"
//     )
//     .required("Password is required"),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref("password"), null], "Passwords must match")
//     .required("Confirm Password is required"),
//   role: Yup.string()
//     .oneOf(["1", "2"], "Role must be either Owner or Manager")
//     .required("Role is required"),
// });

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const {
//     fullName,
//     phoneNumber,
//     email,
//     role,
//     password,
//     confirmPassword,
//     loading,
//     error,
//     success,
//     setFullName,
//     setPhoneNumber,
//     setEmail,
//     setRole,
//     setPassword,
//     setConfirmPassword,
//     signup
//   } = useSignupStore(state => ({
//     ...state,
//     setFullName: state.setFullName,
//     setPhoneNumber: state.setPhoneNumber,
//     setEmail: state.setEmail,
//     setRole: state.setRole,
//     setPassword: state.setPassword,
//     setConfirmPassword: state.setConfirmPassword,
//     signup: state.signup,
//   }));

//   const onSubmit = async (values) => {
//     alert("running");
//     setFullName(values.fullName);
//     setPhoneNumber(Number(values.phoneNumber));
//     setEmail(values.email);
//     setRole(Number(values.role));
//     setPassword(values.password);
//     setConfirmPassword(values.confirmPassword);
//     await signup();
    
//     // if (success) {
//     //   navigate("/");
//     // }
//   };

//   const settings1 = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: true,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true,
//     nextArrow: (
//       <div>
//         <div className="next-slick-arrow">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             stroke="black"
//             height="24"
//             viewBox="0 -960 960 960"
//             width="24"
//             fill="orange"
//           >
//             <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
//           </svg>
//         </div>
//       </div>
//     ),
//     prevArrow: (
//       <div>
//         <div className="next-slick-arrow rotate-180">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             stroke="black"
//             height="24"
//             viewBox="http://www.w3.org/2000/svg"
//             width="24"
//             fill="orange"
//           >
//             <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
//           </svg>
//         </div>
//       </div>
//     ),
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <Layout>
//       <div className="grid min-h-[70vh] gap-y-2">
//         <div className="grid md:min-h-[40vh] md:grid-cols-[60%_40%] gap-10 ">
//           <div className="grid md:grid-rows-[8%_13%_41%_14%_auto] gap-y-2 p-2 ">
//             <div className="font-bold text-2xl ">Sign Up Help</div>
//             <div className="flex w-[70%] text-sm mb-10">
//               <Commonheading heading={"Restaurant Bar"} img={restaurantbarsmall} />
//               <Commonheading heading={"Hotels"} img={hotels} />
//               <Commonheading heading={"Liquor Brand"} img={liquorbrand} />
//             </div>
//             <div className="text-yellow-dark shadow-gray rounded-md p-2 gap-1 tablet-small:text-[13px] tablet-big:text-[14px]">
//               <ul>
//                 <li className="pb-2">1. Account Creation Signup should be done by either Manager/Owner/ Corporate Representative</li>
//                 <li className="pb-2">2. Additional users for reception and cashier can be created by the owner/Manager after Successful registration of the business Unit.</li>
//                 <li className="pb-2">3. Reception and Cashier Team Member Should login directly using the URL: staff login</li>
//                 <li className="pb-2">4. All the credential will be active after the successful verification of the business unit.</li>
//               </ul>
//             </div>
//             <div className="flex w-[70%] text-sm pt-6">
//               <Commonheading heading={"Restaurant Bar"} img={restaurantbarsmall} />
//               <Commonheading heading={"Liquor Store"} img={liquorstore} />
//               <Commonheading heading={"Liquor Brand"} img={liquorbrand} />
//             </div>
//             <div className="text-yellow-dark shadow-gray mb-2 rounded-md p-2 mt-3 tablet-small:text-[9px] tablet-big:text-[11px] ">
//               <ul>
//                 <li className="pb-2">1. Account Creation signup should be done by either Manager/Owner/ Corporate Representative</li>
//                 <li className="pb-2">2. No Additional users for reception and cashier can be created.</li>
//                 <li className="pb-2">3. All the credentials will be active after the successful verification of the business unit.</li>
//               </ul>
//             </div>
//           </div>
//           <div>
//             <div className="flex flex-col h-full shadow-gray rounded-lg">
//               <div className="rounded-lg px-6 w-full max-w-md text-sm p-4">
//                 <p className="font-semibold mb-6 text-left text-yellow-dark font-bold text-2xl pl-4">
//                   Create Account
//                 </p>
//                 <p className="font-semibold mb-6 text-left pl-4">
//                   Already have an account?
//                   <span
//                     className="text-yellow-dark pl-2 cursor-pointer"
//                     onClick={() => navigate("/")}
//                   >
//                     Login
//                   </span>
//                 </p>
//                 {error && <div className="text-red-600 mt-2 text-sm text-acc-list">{error}</div>} 
//                 <Formik
//                   initialValues={{
//                     fullName,
//                     phoneNumber,
//                     email,
//                     password, 
//                     confirmPassword,
//                     role
//                   }}
//                   validationSchema={validationSchema}
//                   onSubmit={onSubmit}
//                 >
//                   {({ isSubmitting }) => (
//                     <Form>
//                       <div className=" px-4">
//                         <div className="mb-4">
//                           <label
//                             className="block text-gray-600 mb-2 text-black font-bold"
//                             htmlFor="fullName"
//                           >
//                             Full Name
//                           </label>
//                           <Field
//                             type="text"
//                             name="fullName"
//                             placeholder="Full Name"
//                             className="w-full p-2 rounded border-0 focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
//                           />
//                           <ErrorMessage
//                             name="fullName"
//                             component="div"
//                             className="text-red-600 mt-1 text-sm"
//                           />
//                         </div>
//                         <div className="mb-4">
//                           <label
//                             className="block text-gray-600 mb-2 text-black font-bold"
//                             htmlFor="phoneNumber"
//                           >
//                             Phone Number
//                           </label>
//                           <Field
//                             type="text"
//                             name="phoneNumber"
//                             placeholder="Phone Number"
//                             className="w-full p-2 rounded border-0 focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
//                           />
//                           <ErrorMessage
//                             name="phoneNumber"
//                             component="div"
//                             className="text-red-600 mt-1 text-sm"
//                           />
//                         </div>
//                         <div className="mb-4">
//                           <label
//                             className="block text-gray-600 mb-2 text-black font-bold"
//                             htmlFor="email"
//                           >
//                             Email
//                           </label>
//                           <Field
//                             type="email"
//                             name="email"
//                             placeholder="Email"
//                             className="w-full p-2 rounded border-0 focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
//                           />
//                           <ErrorMessage
//                             name="email"
//                             component="div"
//                             className="text-red-600 mt-1 text-sm"
//                           />
//                         </div>
//                         <div className="mb-4 relative">
//                           <label
//                             className="block text-gray-600 mb-2 text-black font-bold"
//                             htmlFor="password"
//                           >
//                             Password
//                           </label>
//                           <Field
//                             type={showPassword ? "text" : "password"}
//                             name="password"
//                             placeholder="Password"
//                             className="w-full p-2 rounded border-0 focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
//                           />
//                           <button
//                             type="button"
//                             className="absolute right-2 top-[70%] transform -translate-y-1/2 text-gray-600"
//                             onClick={() => setShowPassword(!showPassword)}
//                           >
//                             {showPassword ? "Hide" : "Show"}
//                           </button>
//                           <ErrorMessage
//                             name="password"
//                             component="div"
//                             className="text-red-600 mt-1 text-sm"
//                           />
//                         </div>
//                         <div className="mb-4 relative">
//                           <label
//                             className="block text-gray-600 mb-2 text-black font-bold"
//                             htmlFor="confirmPassword"
//                           >
//                             Confirm Password
//                           </label>
//                           <Field
//                             type={showConfirmPassword ? "text" : "password"}
//                             name="confirmPassword"
//                             placeholder="Confirm Password"
//                             className="w-full p-2 rounded border-0 focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
//                           />
//                           <button
//                             type="button"
//                             className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
//                             onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                           >
//                             {showConfirmPassword ? "Hide" : "Show"}
//                           </button>
//                           <ErrorMessage
//                             name="confirmPassword"
//                             component="div"
//                             className="text-red-600 mt-1 text-sm"
//                           />
//                         </div>
//                         <div className="mb-6">
//                           <label
//                             className="block text-gray-600 mb-2 text-black font-bold"
//                             htmlFor="role"
//                           >
//                             Role
//                           </label>
//                           <Field
//                             as="select"
//                             name="role"
//                             className="w-full p-2 rounded border-0 focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
//                           >
//                             <option value="" label="Select your role" />
//                             <option value="1" label="Owner" />
//                             <option value="2" label="Manager" />
//                           </Field>
//                           <ErrorMessage
//                             name="role"
//                             component="div"
//                             className="text-red-600 mt-1 text-sm"
//                           />
//                         </div>
//                         <div className="flex justify-start">
//                           <button
//                             type="submit"
//                             disabled={loading || isSubmitting}
//                             className="bg-customOrange text-white p-2 w-full rounded-full hover:bg-indigo-700 border border-2"
//                           >
//                             Sign Up
//                           </button>
//                         </div>
//                         {/* {error && <div className="text-red-600 mt-2 text-sm">{error}</div>} */}
//                       </div>
//                     </Form>
//                   )}
//                 </Formik>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="grid min-h-[10vh] md:min-h-[30vh] grid-cols-1">
//           <Slider {...settings}>
//             <div>
//               <BarsOwner />
//             </div>
//             <div>
//               <BarsOwner />
//             </div>
//             <div>
//               <BarsOwner />
//             </div>
//             <div>
//               <BarsOwner />
//             </div>
//             <div>
//               <BarsOwner />
//             </div>
//             <div>
//               <BarsOwner />
//             </div>
//           </Slider>
//         </div>
//         <div className="grid md:min-h-[20vh] md:grid-cols-[100%]">
//           <Footer />
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default SignUp;

// const SampleNextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         color: "black",
//         fontSize: "30px",
//         right: "10px",
//         zIndex: 1,
//       }}
//       onClick={onClick}
//     ></div>
//   );
// };

// const SamplePrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         color: "black",
//         fontSize: "30px",
//         left: "10px",
//         zIndex: 1,
//       }}
//       onClick={onClick}
//     ></div>
//   );
// };
