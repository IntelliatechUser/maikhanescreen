import React from "react";
import { useState } from "react";
import { Button, InputField, Select, Radio } from "./uicomponent/lib";
import maikhanelogo from "./uicomponent/png/maikhanelogo.png";
import IconAwesomeuser from "./uicomponent/lib/Icon/IconAwesomeuser";
import ArrowPreviewSmall from "./uicomponent/lib/Icon/ArrowPreviewSmall";
import Ownerdatail from "./Ownerdatail";
import IconCheckColor from "./uicomponent/lib/Icon/IconCheckColor";
import BigIndianflag from "./uicomponent/lib/Icon/BigIndianflag";
import SmallIndianImage from "./uicomponent/lib/Icon/SmallIndianImage";
import { TeamBusiness } from ".";
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
const BusinessDetail = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [borderbottom, setBorderBottom] = useState(true);
  const [selectedValue, setSelectedValue] = useState("");
  const [key, setkey] = useState("business");
  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };
  const handleRadioButtonChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="px-12 text-poppins text-regular text-[22px] text-mediumText">
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
              LeftIcon={<SmallIndianImage />}
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
      <div className="grid grid-cols-1 justify-center text-center text-poppins text-[45px] text-regular text-mediumText mt-4 border-b-4 border-yellow-dark p-9 ">
        <div>Add New Business Unit</div>
      </div>
      <div className="grid grid-cols-3  text-poppins text-regular mb-6 mt-0 items-center">
        <div className="text-poppins text-regular text-[26px] text-mediumText">
          Business Unit Ownership Mode
          <br />
          <div className="text-[20px]">Private Limited</div>
        </div>
        <div className="text-black text-[30px]">
          <div className="flex justify-center">
            <div className="grid grid-cols-3 justify-items-center p-6 w-[40%]">
              <div className="border-2 border-gray w-10 h-10 rounded-full"></div>
              <div className="border-2 border-gray   bg-yellow-dark w-10 h-10 rounded-full"></div>
              <div className="border-2 border-gray  w-10 h-10 rounded-full"></div>
            </div>
          </div>
          <div className="text-center">Ownership and Licence Details</div>
        </div>
        <div className="text-mediumText text-[25px] text-right">
          All fields are mandatory
        </div>
      </div>

      <div className="w-[50%] grid grid-cols-4 text-poppins text-[30px] text-mediumText text-regular mb-12">
        <button
          className={
            borderbottom
              ? `border-b-4 border-b-yellow-dark focus:border-b-4 focus:border-b-yellow-dark `
              : `focus:border-b-4 focus:border-b-yellow-dark`
          }

          onClick={() => {
            setBorderBottom(false);
            setkey("business");
          }}  
        >
          Business
        </button>
        <button
          className="   focus:border-b-4 focus:border-b-yellow-dark"
          onClick={() => {
            setBorderBottom(false);
            setkey("owner");
          }}
        >
          Owner
        </button>
        <button
          className="   focus:border-b-4 focus:border-b-yellow-dark"
          onClick={() => setBorderBottom(false)}
        >
          Licence
        </button>
        <button
          className="   focus:border-b-4 focus:border-b-yellow-dark"
          onClick={() => {
            setBorderBottom(false);
            setkey("team");
          }}
        >
          Team
        </button>
      </div>
      {key == "business" && (
        <div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div>Legally Registered Name Of Business Entity</div>
              <div>
                <InputField size="default" className="mb-[15px]"  placeholder="Legally Registered Name" />
              </div>
              <div className="leading-none">
                All The Business Transactions Are Done Against The Name Of The
                Business Entity...Read More
              </div>
            </div>
            <div>
              <div>Business Entity Registration Country</div>
              <div className="w-[80%]">
              
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
          </div>

          <div>Official Postel Address</div>
          <div className="grid grid-cols-3 gap-x-36">
            <div>
              <InputField size="default" className="mb-[15px] " placeholder={"Address Line 01"}/>
            </div>

            <div>
              <InputField size="default" className="mb-[15px] "  placeholder={"Address Line 02"}/>
            </div>
            <div>
              <InputField size="default" className="mb-[15px] "  placeholder={"Email - Verify Option"}/>
            </div>
            <div>
              <InputField size="default" className="mb-[15px] " placeholder={"Town/City"}/>
            </div>
            <div>
              <InputField size="default" className="mb-[15px] "  placeholder={"State/Province/Territory"}/>
            </div>
            <div>
              <div>
                <div>Unit/Reception Contact Number</div>
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
            <div>
              <InputField size="default" className="mb-[15px] " placeholder={"Postal Code"} />
            </div>
            <div>
              <InputField size="default" className="mb-[15px] " placeholder={"Add GPS Location"}/>
            </div>
            <div className="grid grid-cols-[30%_70%] gap-x-4">
              <Select
                options={options}
                value={selectedValue}
                name="mySelect"
                handleOptionClick={handleSelectChange}
                variant="default"
                size="default"
                LeftIcon={<IconAwesomeuser />}
                rightIcon={<ArrowPreviewSmall color="#0F0F0F" />}
                className="z-50 py-2"
              />
              <InputField size="default" className="mb-[15px] " />
            </div>
            <div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <InputField size="default" placeholder={"Add Business Logo"}/>
                </div>
                <div className="mt-2">
                  <Button />
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div className="leading-[50px]">
            Legal Identity Details Of Business Entity
          </div>
          <div className="grid grid-cols-3 gap-x-8">
            <div>
              <div>PAN Id Number</div>
              <div className="grid grid-cols-3 gap-4 ">
                <div className="col-span-2 ">
                  <InputField size="default" placeholder={"HGEUA9660T"}/>
                </div>
                <div>
                  <Button className="mt-2" />
                </div>
              </div>
            </div>
            <div>
              <div>CIN Or Registration Certificate Id Number</div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <InputField size="default" placeholder={"HGEUA9660T"}/>
                </div>
                <div className="mt-2">
                  <Button />
                </div>
              </div>
            </div>
            <div>
              <div>GST Id Certificate Number</div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <InputField size="default" placeholder={"HGEUA9660T"}/>
                </div>
                <div className="mt-2">
                  <Button />
                </div>
              </div>
            </div>
          </div>
          {/* <div class="grid  bg-gray min-h-[100vh] gap-y-2">
        <div className="grid grid-cols-[70%] min-h-[25vh]">
          <div className="grid  min-h-[25vh] ">
            <div className="bg-green">1</div>
          </div>
          
        </div>
        <div className="grid grid-cols-[100%] md:grid-cols-[20%_20%_auto] md:min-h-[25vh]  gap-x-5">
          <div className="bg-blue min-h-[75vh] md:min-h-[auto] grid items-center  justify-center">
            <div className="bg-pink">sss</div>
          </div>
          <div className="bg-green min-h-[25vh] md:min-h-[auto] ">2</div>
          <div className="bg-black min-h-[25vh] md:min-h-[auto] ">3</div>
        </div>
        <div className="grid grid-cols-[100%] min-h-[25vh]">
          <div className="bg-yellow-dark"></div>
        </div>
        <div className="grid grid-cols-[80%_20%] min-h-[25vh]">
          <div className="bg-blue">1</div>
          <div className="bg-green">2</div>
        </div>
      </div> */}
          <div className="flex justify-end my-10 text-poppins text-mediumText text-[20px] ">
            <div className="w-[20%]">
              <Button>Submit For Registration</Button>
            </div>
          </div>
        </div>
      )}

      {key == "owner" && <Ownerdatail />}
      {
        key=="team" && <TeamBusiness/>
      }
    </div>
  );
};

export default BusinessDetail;
