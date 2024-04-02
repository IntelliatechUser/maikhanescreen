import React from "react";
import { Button, CheckBox, InputField, Radio, Select } from "./uicomponent/lib";
import bikerbar from "./uicomponent/png/bikerbar.png";
import maikhanelogo from "./uicomponent/png/maikhanelogo.png";
import IconAwesomeuser from "./uicomponent/lib/Icon/IconAwesomeuser";
import ArrowPreviewSmall from "./uicomponent/lib/Icon/ArrowPreviewSmall";
import { useState } from "react";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
const AddBusinessUnit = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [selectedValue, setSelectedValue] = useState("");
  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleRadioButtonChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className="flex flex-col min-h-[100vh] mx-auto w-[95%] ">
      <div className="  border-0 ">
         <img src={maikhanelogo} alt="maikhane logo" className="w-[359px] h-[187px]"/>
      </div>
      <div className=" w-full  border-2 border-yellow-dark shadow-1xl ">
      
      <div className="px-12">
        <div className="flex flex-col flex-[90%] font-poppins font-regular text-[30px] text-mediumText">
          <div className="flex-1 flex items-center my-12 gap-6 mt-[68px]">
            <div>
              <img src={bikerbar} width="90px" height="90px" />
            </div>
            <div className="font-poppins font-regular text-[30px] text-mediumTex">
              Add New Business Unit
            </div>
          </div>

          <div className="flex-1 flex gap-32 text-[22px] mb-4">
            <div className="flex-col flex-1 ">
              <div>Business Category Selected</div>
              <InputField size="default" className="mb-[15px] " />
            </div>

            <div className="flex-col flex-1">
              <div>Area Name</div>
              <InputField size="default" className="mb-[15px] " />
            </div>

            <div className="flex-col flex-1">
              <div>Business Unit Name</div>
              <InputField size="default" className="mb-[15px] " />
            </div>
          </div>
          <div className="flex-1 flex gap-32 text-[22px] mb-4">
            <div className="flex-col flex-1">
              <div>Address</div>
              <InputField size="default" className="mb-[15px] " />
            </div>

            <div className="flex-col flex-1">
              <div>Subarea/Society/Landmark</div>
              <InputField size="default" className="mb-[15px] " />
            </div>

            <div className="flex-col flex-1">
              <div>Area Type</div>
              <Select
                options={options}
                value={selectedValue}
                name="mySelect"
                handleOptionClick={handleSelectChange}
                variant="default"
                size="default"
                LeftIcon={<IconAwesomeuser />}
                rightIcon={<ArrowPreviewSmall color="#0F0F0F" />}
                className="z-30 py-2"
              />
            </div>
          </div>
          <div className="flex-1 flex gap-32 text-[22px] mb-4">
            <div className="flex-col flex-1">
              <div>Working Time</div>
              <div className="flex gap-4">
                <InputField size="default" className="mb-[15px] " />
                <InputField size="default" className="mb-[15px] " />
              </div>
            </div>

            <div className="flex flex-col flex-1 ">
              <div className=" flex-2 ">Shop For</div>
              <div className="flex flex-wrap gap-2 items-center flex-1">
                <Radio
                  label="Liquor"
                  name="options"
                  value="option1"
                  checked={selectedOption === "option1"}
                  onChange={handleRadioButtonChange}
                />
                <Radio
                  label="Beer"
                  name="options"
                  value="option2"
                  checked={selectedOption === "option2"}
                  onChange={handleRadioButtonChange}
                />
                <Radio
                  label="Wine"
                  name="options"
                  value="option3"
                  checked={selectedOption === "option3"}
                  onChange={handleRadioButtonChange}
                />
              </div>
            </div>

            <div className="flex-col flex-1">
              <div>Shop Category</div>
              <Select
                options={options}
                value={selectedValue}
                name="mySelect"
                handleOptionClick={handleSelectChange}
                variant="default"
                size="default"
                LeftIcon={<IconAwesomeuser />}
                rightIcon={<ArrowPreviewSmall color="#0F0F0F" />}
                className="z-20 py-2"
              />
            </div>
          </div>
          <div className="flex-1 flex gap-32 text-[22px] mb-4">
            <div className="flex flex-col flex-1 ">
              <div className=" flex-2 ">Payment Method</div>
              <div className="flex flex-wrap gap-2 items-center flex-1">
                <Radio
                  label="Cash"
                  name="options"
                  value="option4"
                  checked={selectedOption === "option4"}
                  onChange={handleRadioButtonChange}
                />
                <Radio
                  label="Card"
                  name="options"
                  value="option5"
                  checked={selectedOption === "option5"}
                  onChange={handleRadioButtonChange}
                />
                <Radio
                  label="Mobile"
                  name="options"
                  value="option6"
                  checked={selectedOption === "option6"}
                  onChange={handleRadioButtonChange}
                />
              </div>
            </div>

            <div className="flex-col flex-1">
              <div>Contact Number</div>
              <InputField size="default" className="mb-[15px] " />
            </div>

            <div className="flex-col flex-1">
              <div>Official Email</div>
              <InputField size="default" className="mb-[15px] " />
            </div>
          </div>
          <div className="flex-1 flex gap-32 text-[22px] mb-4">
            <div className="flex flex-col  flex-[25%]">
              <div>Add Licence</div>
              <InputField size="default" className="mb-[15px] " />
            </div>

            <div className="flex-col flex-[70%]">
              {/* <div>Business Category Selected</div>
              <InputField size="default" className="mb-[15px] " /> */}
            </div>

            {/* <div className="flex-col flex-3">
              <div>Business Category Selected</div>
              <InputField size="default" className="mb-[15px] " />
            </div> */}
          </div>
        </div>
      </div>
      </div>
      <div className="flex justify-end ">

<Button className="w-[10%] my-4">
                <span className="font-poppins font-medium  text-[20px] text-white">
                  Connect
                </span>
              </Button>
</div>
      </div>
    
  );
};

export default AddBusinessUnit;
