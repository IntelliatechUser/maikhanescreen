import React from "react";
import Card from "./uicomponent/lib/card/Card";
import maikhanelogo from "./uicomponent/png/maikhanelogo.png";
import Footer from "./Footer";
import IconAwesomeuser from "./uicomponent/lib/Icon/IconAwesomeuser";
import ArrowPreviewSmall from "./uicomponent/lib/Icon/ArrowPreviewSmall";
import { Button, InputField, Select, Radio } from "./uicomponent/lib";
import { useState } from "react";
import {Link,useNavigate} from 'react-router-dom';
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
const Dashboard = () => {
  const navigate=useNavigate();
    const [selectedValue, setSelectedValue] = useState("");
  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <div>
      <div className="grid grid-cols-3  w-[95%] mx-auto">
        <div>
          <img
            src={maikhanelogo}
            alt="maikhane logo"
            className="w-[359px] h-[189px]"
          />
        </div>
        <div className="grid grid-cols-4  items-center text-poppins text-regular text-[1.146vw] text-black capitalize">
       
          <div>Home</div>
          <div>Company</div>
          <div>Contact us</div>
          <div>Support</div>
        </div>
        <div> <div className="flex justify-end mb-10 mt-5">
            <div className="w-[50%] grid grid-cols-2 gap-x-5">
            <Select
              options={options}
              value={selectedValue}
              name=""
              handleOptionClick={handleSelectChange}
              variant="default"
              size="default"
              LeftIcon={<IconAwesomeuser />}
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
          </div></div>
      </div>
      <div className="border-2 border-yellow-dark mt-9"></div>
      <div className="w-[95%] mx-auto ">
        <div className="text-poppins text-regular text-[32px] text-mediumText mb-[15px] mt-[63px]">
          Your Dashboard
        </div>
        <div className="grid grid-cols-3 gap-11 w-[90%] mx-auto">
          <Card title="Business Unit" description="Create Business Unit" enabled="true" onClick={()=>{navigate("/addBusinessUnitGrid")}} /> 
          <Card title="In-Process Business Unit" description="Submit a sales request or connect with a sales associates."  counter={4}/>
          <Card title="Registered Business Unit" description="Submit a sales request or connect with a sales associates." counter={3}/>
          <Card
            title="Feedback and Reviews"
            description="Create a business Unit"
            roundinfo={"Connect with sale support"}
          />
          <Card
            title="Performance Analytics"
            description="Submit a sales request or connect with a sales associates."
            roundinfo={"Connect with sale support"}
          />
          <Card
            title="Customer Sales"
            description="Submit a sales request or connect with a sales associates."
            roundinfo={"Connect with sale support"}
          />
        </div>
        <div className="text-poppins text-regular text-[32px] text-mediumText mb-[15px] mt-[63px]">
        General Support Services
        </div>
        <div className="grid grid-cols-3 gap-11 w-[90%] mx-auto">
          <Card title="Sales Support" description="Submit a sales request or connect with a sales associates." />
          <Card title="Login/Access Support" description="Submit a sales request or connect with a sales associates." />
        </div>
        <div className="text-poppins text-regular text-[32px] text-mediumText mb-[15px] mt-[63px]">
        Suscriber Support services
        </div>
        <div className="grid grid-cols-3 gap-11 w-[90%] mx-auto">
          <Card title="Technical Support" description="Submit a sales request or connect with a sales associates." />
          <Card title="Billing Support" description="Submit a sales request or connect with a sales associates." />
          <Card title="Operation Support" description="Submit a sales request or connect with a sales associates." />
        </div>
      </div>
      <div className="border-2 border-yellow-dark mt-9"></div>
      <Footer />
    </div>
  );
};

export default Dashboard;
