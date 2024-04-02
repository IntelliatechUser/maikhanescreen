import React from "react";
import { Button, InputField, Select, Text } from "./uicomponent/lib";
import IconAwesomephone from "./uicomponent/lib/Icon/IconAwesomephone";
import IconAwesomeuser from "./uicomponent/lib/Icon/IconAwesomeuser";
import { useState } from "react";
import ArrowPreviewSmall from "./uicomponent/lib/Icon/ArrowPreviewSmall";
import maikhanelogo from "./uicomponent/png/maikhanelogo.png";
import { useEffect } from "react";
import {Link,useNavigate} from "react-router-dom";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
const Login = () => {
  const navigate=useNavigate();
  const []=useState();
  const [toggle,setToggle]=useState();
  const [selectedValue, setSelectedValue] = useState("");
  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

 
    
   
  return (
    <div className="flex h-[97vh] w-[97vw]" >
      <div className="flex-[44%] bg-gray-dark  flex justify-center items-center">
        <div
        
        ><img src={maikhanelogo} alt="maikhane logo" /></div>
      </div>
      <div className="flex-[56%] flex items-center p-[7%] relative ">
        <div className="flex-col w-full ">
          <div className="font-poppins font-bold text-[67px] text-yellow-dark">
            Login
          </div>

          <div className="font-poppins text-secondary font-regular text-[28px] mb-[60px]  ">
            Don't have an account
            <span className="text-yellow-dark"> Create Account</span>
          </div>
          <div className="flex-col  w-[65%]">
            <InputField size="default" className="mb-[15px] mt-5 " Icon={<IconAwesomephone/> } placeholder={"Enter the mobile number"} />

            <Select
              options={options}
              value={selectedValue}
              name="mySelect"
              handleOptionClick={handleSelectChange}
              variant="default"
              size="default"
              className="mb-[30px] py-2"
              LeftIcon={<IconAwesomeuser/>}
              rightIcon={<ArrowPreviewSmall color="#0F0F0F"/>}

            />
            <div className="flex justify-end">
              <Button size="default"  onClick={()=>navigate("/fillotplogin")}>
                <span className="font-poppins font-medium  text-[20px] text-white" >
                  SEND OTP
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-1   flex font-regular font-poppins  text-gray-light gap-[2.68rem] text-1xl">
          <div className="flex  ">
            <span>Change password |</span>
            <span>Reset Password |</span>
            <span>SignUp</span>
          </div>
          <div className="flex ml-10 ">
            <span className="mr-1 ">Privacy Policy |</span>
            <span>Term Of Use |</span>
            <span>Return Policy </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
