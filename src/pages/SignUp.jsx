
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
import Loader from "../utility/Loader.jsx";
import { toast } from "react-toastify";
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
  const [loading, setLoading] = useState(false);
  const [sucessMessage,setSuccessMessage]=useState("");
  const navigate = useNavigate();
  const {
    fullName,
    phoneNumber,
    email,
    role,
    password,
    confirmPassword,
  
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
    setError
  } = useSignupStore();


  const onSubmit = async (values) => {
    setLoading(true);
    // setFullName(values.fullName);
    // setPhoneNumber(Number(values.phoneNumber));
    // setEmail(values.email);
    // setRole(Number(values.role));
    // setPassword(values.password);
    // setConfirmPassword(values.confirmPassword);
    try {
      const response = await axios.post('http://43.204.36.147:8067/user/signup', {
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
      toast.success("Successful SignUp")
      setLoading(false);
      setSuccess(true);
      setError("")
      navigate("/")
       // set({ loading: false, success: true });
      }
 
    } catch (error) {
      console.log("error>>>>>>>>>>", JSON.stringify(error));
      setSuccessMessage("");
      setLoading(false);
      setError(error.response?.data?.message || error.message);
      // set({ loading: false, error: error.response?.data?.message || error.message });
    }
    setLoading(false);
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
                            className="text-red mt-1 text-sm"
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
                            className="text-red mt-1 text-sm"
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
                            className="text-red mt-1 text-sm"
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
                            className="text-red mt-1 text-sm"
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
                            className="text-red mt-1 text-sm"
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
                            className="text-red mt-1 text-sm"
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
