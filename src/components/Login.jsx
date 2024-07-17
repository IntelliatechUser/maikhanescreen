import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import restaurantbar from "../assets/img/restaurantbar.jpg";
import Slider from "react-slick";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useNavigate } from "react-router-dom";
import { BarsOwner, Commonheading } from "./Commonheading";
import restaurantbarsmall from "../assets/img/resturantbarsmall.png";
import liquorstore from "../assets/img/liquorstore.png";
import liquorbrand from "../assets/img/liquorbrand.png";
import hotels from "../assets/img/hotels.png";
import Footer from "./Footer";

import Layout from "./Layout";

const options = [
  { value: "option1", label: "Option 1", countryCode: "US" },
  { value: "option2", label: "Option 2", countryCode: "CA" },
  { value: "option3", label: "Option 3", countryCode: "FR" },
];

const Login = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });
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

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
  // Initial form values
  const initialValues = {
    username: "",
    password: "",
  };
  // Initial form values
  const onSubmit = (values) => {
    console.log("Form data", values);
    // Perform login logic here (e.g., API call)
  };

  const [toggle, setToggle] = useState();
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectChange = (e) => {
    const selected = options.find((option) => option.value === e.target.value);
    setSelectedOption(selected);
    setSelectedValue(selected.value);
    console.log("Selected:", selected);
  };
  return (
    <Layout>
      <div class="grid   min-h-[70vh]  gap-y-2 ">
        <div className="grid md:min-h-[40vh] md:grid-cols-[70%_30%]">
          <div className="grid   md:grid-rows-[10%_20%_200px] ">
            <div className="font-bold">Why Use Maikhane Business Platform</div>
            <div className=" flex pb-4 w-[70%] text-sm">
              <Commonheading
                heading={"Restaurant Bar"}
                img={restaurantbarsmall}
              />
              <Commonheading heading={"Hotels"} img={hotels} />
              <Commonheading heading={"Liquor Brand"} img={liquorbrand} />
              <Commonheading heading={"Liquor Store"} img={liquorstore} />
            </div>
            <div className="grid grid-cols-1 h-[200px] ">
              <Slider {...settings1} className="h-200px">
                <div className="relative h-[200px] w-full flex ">
                  <img
                    src={restaurantbar}
                    className="absolute top-0 left-0 w-[70%] h-full object-cover"
                  />

                  <div className="absolute left-[75%]">
                    <p>Inventory management</p> <p>Attendence report</p>
                  </div>
                </div>
                <div className="relative h-[200px] w-full">
                  <img
                    src="https://dummyimage.com/300.png/09f/fff"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-[200px] w-full">
                  <img
                    src="https://dummyimage.com/300.png/09f/fff"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-[200px] w-full">
                  <img
                    src="https://dummyimage.com/300.png/09f/fff"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-[200px] w-full">
                  <img
                    src="https://dummyimage.com/300.png/09f/fff"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
              </Slider>
            </div>
          </div>
          <div>
            <div className="flex flex-col h-full">
              <div className="flex-[70%] ">
                <div className=" rounded-lg shadow-md p-6 w-full max-w-md">
                  <h1 className="text-2xl font-semibold mb-6 text-center">
                    Login
                  </h1>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        <div className="mb-4">
                          <Field
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="w-full p-2 rounded border-2 border-yellow-dark focus:border-4 focus:outline-0 focus:border-yellow"
                          />
                          <ErrorMessage
                            name="username"
                            component="div"
                            className="text-red-600 mt-1 text-sm"
                          />
                        </div>
                        <div className="mb-6">
                          <Field
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full p-2 rounded border-2 border-yellow-dark focus:border-4 focus:outline-0 focus:border-yellow"
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-red-600 mt-1 text-sm"
                          />
                        </div>
                        <div>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-yellow-dark text-white p-2 rounded hover:bg-indigo-700  border border-2"
                          >
                            Login
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
              <div className="flex-[30%]  flex flex-col px-6">
                <div className="flex justify-between text-sm">
                  <div>Remember Me</div>
                  <div>Forgot Password</div>
                </div>
                <div className="flex flex-col justify-center items-center text-sm">
                  <div className="text-center mb-2">
                    if you have dont have account yet
                  </div>

                  <button
                    type="submit"
                    className="w-40 h-10 bg-yellow-dark text-white flex justify-center items-center p-3 rounded-full   border border-2"
                    onClick={() => navigate("/signup")}
                  >
                    SignUp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid min-h-[10vh]  md:min-h-[30vh] grid-cols-1">
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

export default Login;

// Import css files

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
