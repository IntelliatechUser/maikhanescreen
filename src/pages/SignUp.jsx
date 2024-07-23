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

// const options = [
//   { value: "option1", label: "Option 1", countryCode: "US" },
//   { value: "option2", label: "Option 2", countryCode: "CA" },
//   { value: "option3", label: "Option 3", countryCode: "FR" },
// ];

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [step, setStep] = useState(1);

//   const validationSchema1 = Yup.object().shape({
//     fullName: Yup.string().required("Full name is required"),
//     phoneNumber: Yup.string().required("Phone number is required"),
//     email: Yup.string()
//       .email("Invalid email format")
//       .required("Email is required"),
//   });

//   const validationSchema2 = Yup.object().shape({
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
//         <div className="grid md:min-h-[40vh] md:grid-cols-[70%_30%] gap-4">
//           <div className="grid md:grid-rows-[10%_20%_auto]">
//             <div className="text-xl font-bold">
//               Why Use Maikhane Business Platform
//             </div>
//             <div className="flex pb-4 w-[70%] text-sm">
//               <Commonheading
//                 heading={"Restaurant Bar"}
//                 img={restaurantbarsmall}
//               />
//               <Commonheading heading={"Hotels"} img={hotels} />
//               <Commonheading heading={"Liquor Brand"} img={liquorbrand} />
//               <Commonheading heading={"Liquor Store"} img={liquorstore} />
//             </div>
//             <div className="grid grid-cols-1">
//               <Slider {...settings1}>
//                 <div className="relative h-[230px] w-full flex">
//                   <img
//                     src={restaurantbar}
//                     className="absolute top-0 left-0 w-[70%] h-full object-cover rounded-lg "
//                   />
//                   <div className="absolute left-[75%] text-sm flex flex-col h-full tablet-small:text-[9px] tablet-big:text-[11px]">
//                     <p className="flex-1 font-bold">Other features</p>{" "}
//                     <p className="flex-1">Inventory management</p>{" "}
//                     <p className="flex-1">Attendence report</p>
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
//             </div>
//           </div>
//           <div>
//             <div className="flex flex-col h-full">
//               <div className="rounded-lg  px-6 w-full max-w-md text-sm">
//                 <p className="font-semibold mb-6 text-left text-yellow-dark font font-bold">
//                   Create Account
//                 </p>
//                 <p className="font-semibold mb-6 text-left">
//                   Already have account?
//                   <span
//                     className="text-yellow-dark pl-2 "
//                     onClick={() => navigate("/")}
//                   >
//                     Login
//                   </span>
//                 </p>
//                 <Formik
//                   initialValues={initialValues}
//                   validationSchema={
//                     step === 1 ? validationSchema1 : validationSchema2
//                   }
//                   onSubmit={(values, { setSubmitting }) => {
//                     if (step === 1) {
//                       setStep(2);
//                       setSubmitting(false);
//                     } else {
//                       onSubmit(values);
//                       navigate("/");
//                     }
//                   }}
//                 >
//                   {({ isSubmitting, validateForm, setTouched }) => (
//                     <Form>
//                       <div className="shadow-lg">
//                         {step === 1 && (
//                           <>
//                             <div className="mb-4">
//                               <label
//                                 className="block text-gray-600 mb-2 text-black font-bold"
//                                 htmlFor="fullName"
//                               >
//                                 Full Name
//                               </label>
//                               <Field
//                                 type="text"
//                                 name="fullName"
//                                 placeholder="Full Name"
//                                 className="w-full p-2 rounded border-0  focus:border-0 focus:outline-0 focus:border-yellow"
//                               />
//                               <ErrorMessage
//                                 name="fullName"
//                                 component="div"
//                                 className="text-red-600 mt-1 text-sm"
//                               />
//                             </div>
//                             <div className="mb-4">
//                               <label
//                                 className="block text-gray-600 mb-2 text-black font-bold"
//                                 htmlFor="phoneNumber"
//                               >
//                                 Phone Number
//                               </label>
//                               <Field
//                                 type="text"
//                                 name="phoneNumber"
//                                 placeholder="Phone Number"
//                                 className="w-full p-2 rounded border-0  focus:border-0 focus:outline-0 focus:border-yellow"
//                               />
//                               <ErrorMessage
//                                 name="phoneNumber"
//                                 component="div"
//                                 className="text-red-600 mt-1 text-sm"
//                               />
//                             </div>
//                             <div className="mb-4">
//                               <label
//                                 className="block text-gray-600 mb-2 text-black font-bold"
//                                 htmlFor="email"
//                               >
//                                 Email
//                               </label>
//                               <Field
//                                 type="email"
//                                 name="email"
//                                 placeholder="Email"
//                                 className="w-full p-2 rounded border-0  focus:border-0 focus:outline-0 focus:border-yellow"
//                               />
//                               <ErrorMessage
//                                 name="email"
//                                 component="div"
//                                 className="text-red-600 mt-1 text-sm"
//                               />
//                             </div>
//                             <div>
//                               <button
//                                 type="button"
//                                 onClick={() => {
//                                   setTouched({
//                                     fullName: true,
//                                     phoneNumber: true,
//                                     email: true,
//                                   });
//                                   validateForm().then((errors) => {
//                                     if (Object.keys(errors).length === 0) {
//                                       setStep(2);
//                                     }
//                                   });
//                                 }}
//                                 className="w-full bg-customOrange text-white p-2 w-full rounded-full hover:bg-indigo-700 border border-2"
//                               >
//                                 Next
//                               </button>
//                             </div>
//                           </>
//                         )}
//                       </div>
//                       <div className="shadow-lg">
//                         {step === 2 && (
//                           <>
//                             <div className="mb-4">
//                               <label
//                                 className="block text-gray-600 mb-2 text-black font-bold"
//                                 htmlFor="password"
//                               >
//                                 Password
//                               </label>
//                               <Field
//                                 type="password"
//                                 name="password"
//                                 placeholder="Password"
//                                 className="w-full p-2 rounded border-0  focus:border-0 focus:outline-0 focus:border-yellow"
//                               />
//                               <ErrorMessage
//                                 name="password"
//                                 component="div"
//                                 className="text-red-600 mt-1 text-sm"
//                               />
//                             </div>
//                             <div className="mb-4">
//                               <label
//                                 className="block text-gray-600 mb-2 text-black font-bold"
//                                 htmlFor="confirmPassword"
//                               >
//                                 Confirm Password
//                               </label>
//                               <Field
//                                 type="password"
//                                 name="confirmPassword"
//                                 placeholder="Confirm Password"
//                                 className="w-full p-2 rounded border-0  focus:border-0 focus:outline-0 focus:border-yellow"
//                               />
//                               <ErrorMessage
//                                 name="confirmPassword"
//                                 component="div"
//                                 className="text-red-600 mt-1 text-sm"
//                               />
//                             </div>
//                             <div className="mb-6">
//                               <label
//                                 className="block text-gray-600 mb-2 text-black font-bold"
//                                 htmlFor="role"
//                               >
//                                 Role
//                               </label>
//                               <Field
//                                 as="select"
//                                 name="role"
//                                 className="w-full p-2 rounded border-0  focus:border-0 focus:outline-0 focus:border-yellow"
//                               >
//                                 <option value="" label="Select your role" />
//                                 <option value="Owner" label="Owner" />
//                                 <option value="Manager" label="Manager" />
//                               </Field>
//                               <ErrorMessage
//                                 name="role"
//                                 component="div"
//                                 className="text-red-600 mt-1 text-sm"
//                               />
//                             </div>
//                             <div className="flex justify-start">
//                               {/* <button
//                               type="button"
//                               onClick={() => setStep(1)}
//                               className="bg-customOrange text-white p-2 rounded"
//                             >
//                               Back
//                             </button> */}
//                               <button
//                                 type="submit"
//                                 disabled={isSubmitting}
//                                 className="bg-customOrange text-white p-2 w-full rounded-full hover:bg-indigo-700 border border-2"
//                               >
//                                 Sign Up
//                               </button>
//                               {/* <button
//                               type="button"
//                               onClick={() => setStep(1)}
//                               className="bg-customOrange text-white p-2 rounded"
//                             >
//                               Cancel
//                             </button> */}
//                             </div>
//                           </>
//                         )}
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

// // Import css files

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
import React, { useState } from "react";
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
import restaurantbar from "../assets/img/restaurantbar.jpg";

const SignUp = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    role: Yup.string().required("Role is required"),
  });

  const initialValues = {
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  };

  const onSubmit = (values) => {
    console.log("Form data", values);
    // Perform signup logic here (e.g., API call)
    navigate("/");
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
            viewBox="0 -960 960 960"
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

  return (
    <Layout>
      <div className="grid min-h-[70vh] gap-y-2">
        <div className="grid md:min-h-[40vh] md:grid-cols-[60%_40%] gap-10 ">
          <div className="grid md:grid-rows-[8%_13%_43%_14%_auto] gap-y-2 p-2 "><div className="font-bold text-2xl ">Sign Up Help</div>
            <div className="flex  w-[70%] text-sm mb-10">
              <Commonheading heading={"Restaurant Bar"} img={restaurantbarsmall} />
              <Commonheading heading={"Hotels"} img={hotels} />
              <Commonheading heading={"Liquor Brand"} img={liquorbrand} />
            </div>
            <div className="text-yellow-dark shadow-gray  rounded-md p-2 gap-1  tablet-small:text-[13px] tablet-big:text-[14px]">
              <ul className=" ">
                <li className="pb-2">1. Account Creation Signup should be done by either Manager/Owner/ Corporate Representative</li>
                <li className="pb-2"> 2. Additional users for reception and cashier can be created by the owner/Manager after Successful registration of the business Unit .</li>
                <li className="pb-2">3. Reception and Cashier Team Member Should login directly using the URL : staff login

https:/ /www.maikhane.com/businessplatform/stafflogin user name and password for staff login will be shared by owner and manager of the business unit</li>
              
              
              <li className="pb-2">4. All the credential will be active after the successful verification of the business unit.</li></ul>
            </div>
            <div className="flex  w-[70%] text-sm pt-6 ">
              <Commonheading heading={"Restaurant Bar"} img={restaurantbarsmall} />
              <Commonheading heading={"Liquor Store"} img={liquorstore} />
              <Commonheading heading={"Liquor Brand"} img={liquorbrand} />
            </div>
            <div className="text-yellow-dark shadow-gray mb-2  rounded-md p-2 mt-3 tablet-small:text-[9px] tablet-big:text-[11px] ">
              <ul className=" gap-1 ">
                <li className="pb-2">1. Account Creation signup should be dono by either Manager/Owner/ Corporate Representative</li>
                <li className="pb-2">2. No Additional users for reception and cashier Gan be created. </li>
                <li className="pb-2">3. All the credential willbe active after the successful verification of the business unit.</li>
              </ul>
            </div>
            {/* <div className="grid grid-cols-1">
              <Slider {...settings1}>
                <div className="relative h-[230px] w-full flex">
                  <img
                    src={restaurantbar}
                    className="absolute top-0 left-0 w-[70%] h-full object-cover rounded-lg "
                  />
                  <div className="absolute left-[75%] text-sm flex flex-col h-full tablet-small:text-[9px] tablet-big:text-[11px]">
                    <p className="flex-1 font-bold">Other features</p>{" "}
                    <p className="flex-1">Inventory management</p>{" "}
                    <p className="flex-1">Attendance report</p>
                    <p className="flex-1">Discount Vouchers</p>
                    <p className="flex-1">Ticket Management</p>
                    <p className="flex-1">Customer Interaction</p>
                  </div>
                </div>
                <div className="relative h-[200px] w-full">
                  <img
                    src="https://dummyimage.com/300.png/09f/fff"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
              </Slider>
            </div> */}
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
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className=" px-4">
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
                            className="w-full p-2 rounded border-0  focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
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
                            className="w-full p-2 rounded border-0  focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
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
                            className="w-full p-2 rounded border-0  focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
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
                            className="w-full p-2 rounded border-0  focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
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
                            className="w-full p-2 rounded border-0  focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
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
                            className="w-full p-2 rounded border-0  focus:border-0 focus:outline-0 focus:border-yellow bg-[#eeecec]"
                          >
                            <option value="" label="Select your role" />
                            <option value="Owner" label="Owner" />
                            <option value="Manager" label="Manager" />
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
                            disabled={isSubmitting}
                            className="bg-customOrange text-white p-2 w-full rounded-full hover:bg-indigo-700 border border-2"
                          >
                            Sign Up
                          </button>
                        </div>
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
