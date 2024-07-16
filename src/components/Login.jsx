import React from "react";

import { useState } from "react";

import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BarsOwner, Commonheading } from "./Commonheading";
import Footer from "./Footer";
import ReactCountryFlag from "react-country-flag";
import Countryandlanguage from "../CommonComponents/Countryandlanguage";
import SimpleSlider from "./SimpleSlider";
import Dashboard from "../pages/DashboardPage";
import Layout from "./Layout";
const options = [
  { value: "option1", label: "Option 1", countryCode: "US" },
  { value: "option2", label: "Option 2", countryCode: "CA" },
  { value: "option3", label: "Option 3", countryCode: "FR" },
];
const Login = () => {
  const navigate = useNavigate();

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
    // <div className="flex h-[97vh] w-[97vw]">
    //   <div className="flex-[44%] bg-gray-dark  flex justify-center items-center">
    //     <div>
    //       <img src={maikhanelogo} alt="maikhane logo" />
    //     </div>
    //   </div>
    //   <div className="flex-[56%] flex items-center p-[7%] relative ">
    //     <div className="flex-col w-full ">
    //       <div className="font-poppins font-bold text-[3.49vw] text-yellow-dark">
    //         Login
    //       </div>

    //       <div className="font-poppins text-secondary font-regular text-[1.45vw] mb-[60px]  ">
    //         Don't have an account
    //         <span className="text-yellow-dark"> Create Account</span>
    //       </div>
    //       <div className="flex-col  w-[65%]">
    //         <InputField
    //           size="default"
    //           className="mb-[15px] mt-5 "
    //           Icon={<IconAwesomephone />}
    //           placeholder={"Enter the mobile number"}
    //         />

    //         <Select
    //           options={options}
    //           value={selectedValue}
    //           name="mySelect"
    //           handleOptionClick={handleSelectChange}
    //           variant="default"
    //           size="default"
    //           className="mb-[30px] py-2"
    //           LeftIcon={<IconAwesomeuser />}
    //           rightIcon={<ArrowPreviewSmall color="#0F0F0F" />}
    //         />
    //         <div className="flex justify-end">
    //           <Button size="default" onClick={() => navigate("/fillotplogin")}>
    //             <span className="font-poppins font-medium  text-[20px] text-white">
    //               SEND OTP
    //             </span>
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="absolute bottom-1   flex font-regular font-poppins  text-gray-light gap-[2.68rem] text-1xl">
    //       <div className="flex  ">
    //         <span>Change password |</span>
    //         <span>Reset Password |</span>
    //         <span>SignUp</span>
    //       </div>
    //       <div className="flex ml-10 ">
    //         <span className="mr-1 ">Privacy Policy |</span>
    //         <span>Term Of Use |</span>
    //         <span>Return Policy </span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div class="grid  bg-gray min-h-[100vh]  gap-y-2 ">
    //   <div className="grid  md:grid-cols-[20%_80%]">
    //     <div className="bg-green p-2">
    //       {" "}
    //       <img
    //         src="https://dummyimage.com/300.png/09f/fff"
    //         width="40px"
    //         height="40px"
    //       />
    //     </div>
    //     <div className="flex justify-end">
    //       <div className="w-128">
    //         <div className="flex justify-end">
    //           <Countryandlanguage />
    //         </div>
    //         <div className="grid grid-cols-5 gap-2">
    //           <div>ss</div>
    //           <div>ss</div>
    //           <div>ss</div>
    //           <div>ss</div>
    //           <div>ss</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="grid md:min-h-[50vh] md:grid-cols-[70%_30%]">
    //     <div className="grid bg-pink grid md:grid-rows-[10%_20%_200px] p-2 ">
    //       <div className="bg-pink"></div>
    //       <div className="bg-orange flex">
    //         <Commonheading />
    //         <Commonheading />
    //         <Commonheading />
    //         <Commonheading />
    //       </div>
    //       <div className="border border-indigo-900 ">
    //         <img
    //           src="https://dummyimage.com/300.png/09f/fff"
    //           className=" object-cover"
    //         />
    //       </div>
    //     </div>
    //     <div className="bg-orange">
    //       <div className="flex flex-col h-full">
    //         <div className="flex-[70%] bg-blue">ddd</div>
    //         <div className="flex-[30%] bg-orange">dd</div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="grid md:min-h-[30vh] md:grid-cols-[25%_25%_25%_25%]">
    //     <BarsOwner />

    //     <BarsOwner />
    //     <BarsOwner />

    //     <BarsOwner />
    //   </div>
    //   <div className="grid md:min-h-[20vh] md:grid-cols-[100%]">
    //     <Footer />
    //   </div>
    // </div>
    <Layout>
      <Dashboard />
    </Layout>
  );
};

export default Login;
