import React from "react";
import { useState } from "react";
import { Button, InputField, Select, Radio } from "./uicomponent/lib";
import Footer from "./Footer";
import IconAwesomeuser from "./uicomponent/lib/Icon/IconAwesomeuser";
import ArrowPreviewSmall from "./uicomponent/lib/Icon/ArrowPreviewSmall";
import maikhanelogo from "./uicomponent/png/maikhanelogo.png";
import Smallindianimage from "./uicomponent/lib/Icon/SmallIndianImage.jsx";
import BigIndianflag from "./uicomponent/lib/Icon/BigIndianflag.jsx";
import DirectionCrossIcon from "./uicomponent/lib/Icon/DirectionCrossIcon.jsx";
import {Link,useNavigate} from "react-router-dom";
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  1,
];
const AddBusinessUnitGrid = () => {
  const navigate=useNavigate();
  const [selectedOption, setSelectedOption] = useState("option1");
  const [selectedValue, setSelectedValue] = useState("");
  const handleRadioButtonChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <div className="text-poppins text-regular text-[22px] text-mediumText">
      <div className="grid grid-cols-2 justify-between w-[90%] mx-auto">
        <div>
          <img
            src={maikhanelogo}
            alt="maikhane logo"
            className="w-[359px] h-[189px]"
          />
        </div>
        <div>
          <div className="flex justify-end mb-10 mt-5">
            <div className="w-[30%] grid grid-cols-2 gap-x-5">
            <Select
              options={options}
              value={selectedValue}
              name=""
              handleOptionClick={handleSelectChange}
              variant="default"
              size="default"
              LeftIcon={<Smallindianimage />}
              rightIcon={<ArrowPreviewSmall color="#0F0F0F" />}
              className="z-50 py-2"
            />
             <Select
              options={options}
              value={selectedValue}
              name="my"
              handleOptionClick={handleSelectChange}
              variant="default"
              size="default"
              LeftIcon={<IconAwesomeuser />}
              rightIcon={<ArrowPreviewSmall color="#0F0F0F" />}
              className="z-50 py-2"
            />
            </div>
          </div>
          <div className="flex justify-end">
            <div className="w-[70%] grid grid-cols-4   justify-items-end items-center text-poppins text-regular text-[22px] text-black capitalize text-center">
              <div>Home</div>
              <div>Company</div>
              <div>Contact us</div>
              <div>Support</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 justify-center text-center text-poppins text-[45px] text-regular text-mediumText my-4 border-b-4 border-yellow-dark p-9 ">
        <div>Add New Business Unit</div>
      </div>
      <div className="grid grid-cols-3 text-center text-poppins text-regular my-6 items-center">
        <div></div>
        <div className="text-black text-[30px]">
          <div className="flex justify-center">
            <div className="grid grid-cols-3 justify-items-center p-10 w-[40%]">
              <div className="border-0 border-yellow-dark bg-yellow-dark w-10 h-10 rounded-full"></div>
              <div className="border-2 border-gray w-10 h-10 rounded-full"></div>
              <div className="border-2 border-gray w-10 h-10 rounded-full"></div>
            </div>
          </div>
          <div>Unit Details</div>
        </div>
        <div className="text-mediumText text-[25px]">
          All fields are mandatory
        </div>
      </div>
      <div className="px-7 ">
        <div className="grid grid-cols-3 gap-x-40 grid-rows-5 justify-center">
          <div className="   gap-y-0 ">
            <div>Business Category Selected</div>{" "}
            <InputField size="default" className="mb-[15px] " />
          </div>
          <div className=" ">
            <div className="">Business Unit Name</div>
            <div className="flex-1">
              {" "}
              <InputField size="default" className="mb-[15px] " />
            </div>
          </div>
          <div className=" ">
            <div>Area Name</div>
            <div>
              {" "}
              <InputField size="default" className="mb-[15px] " />
            </div>
          </div>
          <div className=" ">
            <div>Business Unit Registration Country</div>
            <div>
              <Select
                options={options}
                value={selectedValue}
                name="mySelect"
                handleOptionClick={handleSelectChange}
                variant="default"
                size="default"
                LeftIcon={<BigIndianflag />}
                rightIcon={<ArrowPreviewSmall color="#0F0F0F" />}
                className="z-40 py-2"
              />
            </div>
          </div>
          <div className="">
            <div>Shop For</div>
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
          <div className="">
            <div>Subarea/Society/Landmark</div>
            <div>
              <InputField size="default" className="mb-[15px] " />
            </div>
          </div>
          <div className="">
            <div>Business Unit Ownership Mode</div>
            <div>
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
          <div className="">
            <div>Shop Category</div>
            <div>
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
          <div className="">
            <div>Address</div>
            <div>
              <InputField size="default" className="mb-[15px] " RightIcon={<DirectionCrossIcon/>} />
            </div>
          </div>
          <div className="row-span-2 ">
            {/* <div className="grid grid-row-2">
              <div>row1</div>
              <div>row2</div>
            </div> */}
          </div>
          <div className="">
            
            <div className="grid grid-cols-2 gap-x-6 ">
              <div><div>Open Time</div><InputField size="default" className="mb-[15px] " /></div>
              
              <div><div>Close Time</div><InputField size="default" className="mb-[15px] " /></div>
            </div>
          </div>
          <div className="">
            <div>
              <div>Unit/Reception Contact Number (Optional)</div>
              <div className="flex flex-wrap gap-2 items-center flex-1">
                <Radio
                  label="Mobile"
                  name="options"
                  value="option4"
                  checked={selectedOption === "option4"}
                  onChange={handleRadioButtonChange}
                />
                <Radio
                  label="Landline"
                  name="options"
                  value="option5"
                  checked={selectedOption === "option5"}
                  onChange={handleRadioButtonChange}
                />
                <Radio
                  label="Both"
                  name="options"
                  value="option6"
                  checked={selectedOption === "option6"}
                  onChange={handleRadioButtonChange}
                />
              </div>
            </div>
          </div>
          <div className="">
            {/* <div className="grid grid-row-2 gap-y-0">row1</div>
          <div>row2</div> */}
            <div></div>
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
          <div className="">
            <div>Mobile Number (OTP Verification Via SMS)</div>
            <div className="grid grid-cols-[30%_70%] gay-y-2 gap-x-2 ">
              <div>Country Code</div>
              <div>Mobile Number</div>
              <div>
                {" "}
                <Select
                  options={options}
                  value={selectedValue}
                  name="select"
                  handleOptionClick={handleSelectChange}
                  variant="default"
                  size="default"
                  LeftIcon={<IconAwesomeuser />}
                  rightIcon={<ArrowPreviewSmall color="#0F0F0F" />}
                  className="z-30 py-2"
                />
              </div>
              <div>
                {" "}
                <InputField size="default" className="mb-[15px] " />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-items-end mt-5">
          <div className="w-[10%]">
            <Button size="default" onClick={()=>navigate("/businessGrid")}>
              <span className="font-poppins font-medium  text-[20px] text-white">
                NEXT
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div className="border-2 border-yellow-dark mt-9"></div>
      <Footer />
    </div>
  );
};

export default AddBusinessUnitGrid;
