import React from "react";
import { useState } from "react";
import { Select, InputField } from "./uicomponent/lib";
import IconAwesomeuser from "./uicomponent/lib/Icon/IconAwesomeuser";
import ArrowPreviewSmall from "./uicomponent/lib/Icon/ArrowPreviewSmall";
import bikerbar from "./uicomponent/png/bikerbar.png";
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
const BusinessGeneralInformation = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [selectedValue, setSelectedValue] = useState("");
  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <div className="flex flex-col">
      <div>fffffff</div>
      <div className="px-12 py-5 border-b-2 border-t-2 border-yellow-dark shadow-1xl font-poppins font-regular text-mediumText text-3xl">
        <div className="flex justify-between ">
        <div className=" flex items-center w-[32%] gap-[25px]">
          <div>
          <img src={bikerbar} width="90px" height="90px" />
          </div>
          <div className="">Business Entity - Owner Entity Detail</div>
        </div>
        <div className="flex items-center w-[32%] gap-[25px]">
          <div className="text-xl">ddd</div>
   
            <Select
              options={options}
              value={selectedValue}
              name="mySelect"
              handleOptionClick={handleSelectChange}
              variant="default"
              size="default"
              LeftIcon={<IconAwesomeuser />}
              rightIcon={<ArrowPreviewSmall color="#0F0F0F" />}
              className="z-20 py-2 flex-1  "
              
            />
        
        </div>
        </div>
        <div className="flex justify-between mt-6">
        <div className="flex items-center w-[36%] gap-[25px]">
          <div className="text-xl">ddd</div>
          <div className="flex-1">
            <Select
              options={options}
              value={selectedValue}
              name="mySelect"
              handleOptionClick={handleSelectChange}
              variant="default"
              size="default"
              LeftIcon={<IconAwesomeuser />}
              rightIcon={<ArrowPreviewSmall color="#0F0F0F" />}
              className="z-10 py-2"
            />
          </div>
        </div>
        <div className=" flex items-center w-[36%] gap-[25px]">
          <div className="text-xl">ddd</div>
          <div className="flex-1">
            <Select
              options={options}
              value={selectedValue}
              name="mySelect"
              handleOptionClick={handleSelectChange}
              variant="default"
              size="default"
              LeftIcon={<IconAwesomeuser />}
              rightIcon={<ArrowPreviewSmall color="#0F0F0F" />}
              className="z-70 py-2"
            />
          </div>
        </div>
        </div>
      </div>
      <div className="px-12 border-b-2 border-yellow-dark  shadow-1xl font-poppins font-regular text-mediumText ">
       <div className=" w-[36%] flex my-10 text-3xl"> <div className="flex-1">Business</div> <div className="flex-1">Owner</div> <div className="flex-1">Management</div></div>
        <div className="text-[22px]">Legally Registered business</div>
        <div className="bg-pink w-[40%]">
          {" "}
          <InputField size="default" className="mb-[15px]" />
        </div>
        <div className="text-lg">All the Business</div>
        <div className="text-[22px]"> Offical Postel address</div>
        <div className="flex gap-32 ">
          
            
            <div className="flex-1">
              
              <InputField size="default" className="mb-[15px] " />
            </div>
          
          <div className="flex-1">
            
            <InputField size="default" className="mb-[15px] " />
          </div>
          <div className="flex-1">
            
            <InputField size="default" className="mb-[15px] " />
          </div>
        </div>
        <div className="flex gap-32">
          
            
            <div className="flex-1">
              
              <InputField size="default" className="mb-[15px] " />
            </div>
          
          <div className="flex-1">
            
            <InputField size="default" className="mb-[15px] " />
          </div>
          <div className="flex-1">
            
            <InputField size="default" className="mb-[15px] " />
          </div>
        </div>
        <div className="flex gap-32">
          
            
            <div className="flex-1">
              
              <InputField size="default" className="mb-[15px] " />
            </div>
          
          <div className="flex-1">
            
            <InputField size="default" className="mb-[15px] " />
          </div>
          <div className="flex-1">
            
            <InputField size="default" className="mb-[15px] " />
          </div>
        </div>
        <div className="text-[22px]">LegalIdentity Details of Business Entity </div>
        <div className="flex gap-32 ">
          <div className="flex flex-col flex-1 ">
            <div className="text-[22px]">Pan id Number</div>
            <div className="flex gap-4">
              
              <div className="flex-1">
                <InputField size="default" className="mb-[15px] " />
              </div>
              <div className="flex-1">
                <InputField size="default" className="mb-[15px] " />
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="text-[22px]">Pan id Number</div>
            <div className="flex gap-4">
              <div className="flex-1">
                <InputField size="default" className="mb-[15px] " />
              </div>
              <div className="flex-1">
                <InputField size="default" className="mb-[15px] " />
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="text-[22px]">Pan id Number</div>
            <div className="flex gap-4">
              <div className="flex-1">
                <InputField size="default" className="mb-[15px] " />
              </div>
              <div className="flex-1">
                <InputField size="default" className="mb-[15px] " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessGeneralInformation;
