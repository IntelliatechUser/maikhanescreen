import React from "react";
import { Button, InputField, Select, Text } from "./uicomponent/lib";
import { useState } from "react";
import IconAwesomeuser from "./uicomponent/lib/Icon/IconAwesomeuser";
import IconAwesomepassword from "./uicomponent/lib/Icon/IconAwesomepassword";
import IconAwesomeemail from "./uicomponent/lib/Icon/IconAwesomeemail";
import IconAwesomeconfirmpassword from "./uicomponent/lib/Icon/IconAwesomeconfirmpassword";
import IconAwesomephone from "./uicomponent/lib/Icon/IconAwesomephone";
import ArrowPreviewSmall from "./uicomponent/lib/Icon/ArrowPreviewSmall";
import maikhanelogo from "./uicomponent/png/maikhanelogo.png"
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
const Register = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <div className="flex min-h-[100vh] w-[97vw]">
      <div className="flex-[44%] bg-gray-dark flex justify-center items-center  ">
        <div
          className="bg-cover bg-no-repeat"
         
        >
<img src={maikhanelogo} alt="maikhane logo" />

        </div>
      </div>
      <div className="flex-[56%] flex items-center p-[7%] relative">
        <div className="flex-col w-full">
          <div className="font-poppins font-regular text-[28px] text-mediumText ">
        Register Now
          </div>
          <div className="font-poppins font-bold text-[3.87vw] text-yellow-dark">
        Create Account
          </div>
          <div className="font-poppins font-regular text-[28px] text-mediumText mb-5">
        Already have an account ? <span className="text-yellow-dark">Login</span>
          </div>
          <div className="flex-col  w-[70%]">
            <InputField size="default" className="mb-5 mt-5" Icon={<IconAwesomeuser/>}/>
            <InputField size="default" className="mb-5 mt-5" Icon={<IconAwesomephone/>}/>
            <InputField size="default" className="mb-5 mt-5" Icon={<IconAwesomeemail/>}/>
            <InputField size="default" className="mb-5 mt-5" Icon={<IconAwesomepassword/>}/>
            <InputField size="default" className="mb-5 mt-5" Icon={<IconAwesomeconfirmpassword/>}/>
            <Select
                options={options}
                value={selectedValue}
                name="mySelect"
                handleOptionClick={handleSelectChange}
                variant="default"
                size="default"
                LeftIcon={<IconAwesomeuser />}
                rightIcon={<ArrowPreviewSmall color="#0F0F0F" />}
                z="z-30"
                className="mb-7 mt-5"
              />
           
            <div className="flex justify-end">
              <Button >
                <span className="font-poppins font-medium  text-[20px] text-white">
                  Create Account
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

export default Register;
