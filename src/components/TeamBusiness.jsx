import React from "react";
import { useState } from "react";
import { InputField, Select, Radio, Button } from "./uicomponent/lib";
import IconAwesomeuser from "./uicomponent/lib/Icon/IconAwesomeuser";
import ArrowPreviewSmall from "./uicomponent/lib/Icon/ArrowPreviewSmall";
import maikhanelogo from "./uicomponent/png/maikhanelogo.png";
import IconCheckColor from "./uicomponent/lib/Icon/IconCheckColor";
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
const Ownerdatail = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [selectedValue, setSelectedValue] = useState("");
  const handleRadioButtonChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    // <div className="px-12 text-poppins text-regular text-[22px] text-mediumText">
    //   <div className="grid grid-cols-2 justify-between w-[90%] mx-auto">
    //     <div>
    //       <img
    //         src={maikhanelogo}
    //         alt="maikhane logo"
    //         className="w-[359px] h-[189px]"
    //       />
    //     </div>
    //     <div>
    //       <div className="flex justify-end mb-10 mt-5">
    //         <div className="w-[30%] grid grid-cols-2 gap-x-5">
    //           <Select
    //             options={options}
    //             value={selectedValue}
    //             name=""
    //             handleOptionClick={handleSelectChange}
    //             variant="default"
    //             size="default"
    //             LeftIcon={<IconAwesomeuser />}
    //             rightIcon={<ArrowPreviewSmall color="#0F0F0F" />}
    //             className="z-50 py-2"
    //           />
    //           <Select
    //             options={options}
    //             value={selectedValue}
    //             name="my"
    //             handleOptionClick={handleSelectChange}
    //             variant="default"
    //             size="default"
    //             LeftIcon={<IconAwesomeuser />}
    //             rightIcon={<ArrowPreviewSmall color="#0F0F0F" />}
    //             className="z-50 py-2"
    //           />
    //         </div>
    //       </div>
    //       <div className="flex justify-end">
    //         <div className="w-[70%] grid grid-cols-4   justify-items-end items-center text-poppins text-regular text-[22px] text-black capitalize text-center">
    //           <div>Home</div>
    //           <div>Company</div>
    //           <div>Contact us</div>
    //           <div>Support</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="grid grid-cols-1 justify-center text-center text-poppins text-[45px] text-regular text-mediumText my-4 border-b-4 border-yellow-dark p-9 ">
    //     <div>Add New Business Unit</div>
    //   </div>
    //   <div className="grid grid-cols-3  text-poppins text-regular my-6 items-center">
    //     <div className="tex-poppins text-regular text-[26px] text-mediumText">
    //       Business Unit Ownership Mode
    //       <br />
    //       <div className="text-[20px]">Private Limited </div>
    //     </div>
    //     <div className="text-black text-[30px]">
    //       <div className="flex justify-center">
    //         <div className="grid grid-cols-3 justify-items-center p-10 w-[40%]">
    //           <div className="border-2 border-gray w-10 h-10 rounded-full"></div>
    //           <div className="border-2 border-gray   bg-yellow-dark w-10 h-10 rounded-full"></div>
    //           <div className="border-2 border-gray  w-10 h-10 rounded-full"></div>
    //         </div>
    //       </div>
    //       <div className="text-center">Ownership and Licence Details</div>
    //     </div>
    //     <div className="text-mediumText text-[25px] text-right">
    //       All fields are mandatory
    //     </div>
    //   </div>

    //   <div className="w-[50%] grid grid-cols-4 text-poppins text-[30px] text-mediumText text-regular mb-12">
    //     <button className="   focus:border-b-4 focus:border-b-yellow-dark  ">
    //       Business
    //     </button>
    //     <button className="   focus:border-b-4 focus:border-b-yellow-dark">
    //       Owner
    //     </button>
    //     <button className="   focus:border-b-4 focus:border-b-yellow-dark">
    //       Licence
    //     </button>
    //     <button className="   focus:border-b-4 focus:border-b-yellow-dark">
    //       Team
    //     </button>
    //   </div>
<div>
      <div>Business Management Team/Group Member</div>
      <div>
        You Are The Direct Representative Of The Owner Group Member(S). You Take
        Direct Orders And Report Directly To Owner Group Member(S).
      </div>

      <div className="grid grid-cols-3 gap-x-36">
        <div>
          {" "}
          <InputField size="default" className="mb-[15px] " placeholder={"Name"}/>
        </div>
        <div>
          {" "}
          <InputField size="default" className="mb-[15px] " placeholder={"Designation"}/>
        </div>
        <div>
          {" "}
          <InputField size="default" className="mb-[15px] " placeholder={"Date Of Birth"}/>
        </div>
        <div>
          {" "}
          <InputField size="default" className="mb-[15px] " RightIcon={<IconCheckColor/>} placeholder={"Email"}/>
        </div>
        <div>
          {" "}
          <InputField size="default" className="mb-[15px] " RightIcon={<IconCheckColor/>} placeholder={"Contact Number"}/>
        </div>
        <div></div>
      </div>
      <div>
        Legal Identity Details(Personal Photo Identification
        Document/Certificate Number)
      </div>
      <div className="grid grid-cols-[15%_85%] w-[30%]">
        <div className="text-yellow-dark"> Note : </div>{" "}
        <div>ID Must Be - Government Issued And Legally Valid</div>
        <div></div>
        <div>ID Must Have - Recent Photograph And Date Of Birth</div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div>PhotoId Type</div>{" "}
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
        <div>
          <div>Certificate ID Number</div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <InputField size="default" placeholder={"HGEUA9660T"}/>
            </div>
            <div className="mt-2">
              <Button />
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex justify-end my-10 text-poppins text-mediumText text-[20px] ">
        <div className="w-[20%]">
          <Button>ADD MEMBER</Button>
        </div>
      </div>
      <div className="flex justify-end my-10 text-poppins text-mediumText text-[20px] ">
        <div className="w-[20%]">
          <Button>Submit For Registration</Button>
        </div>
      </div>
    </div>
  );
};

export default Ownerdatail;
