import React from "react";
import { FooterComponentLinks, SocialLinks } from "../CommonComponents/FooterComponentLink";
import logo from "../assets/logo/logo.png";
const Footer = () => {
  return (
    <div className="grid grid-flow-col gap-x-4 pt-10 w-[95%] mx-auto ">
      <div>
        <img className="h-20 object-contain " src={logo} />

        <div className="text-poppins text-regular text-[1vw] text-mediumText">
          HKBR private limited
        </div>
        <div className="text-poppins text-regular text-[1.25vw] text-mediumText">
          HKBR private limited
        </div>
        <div className="text-poppins text-regular text-[1.14vw] text-mediumText"></div>
      </div>
      <div className="grid gap-y-3">
        <FooterComponentLinks
          title={"For Restaurant"}
          list={["Partner with Us", "Feature for You"]}
        />{" "}
        <FooterComponentLinks
          title={"For Restaurant"}
          list={["Partner with Us", "Feature for You"]}
        />
      </div>
      <div className="grid ">
        <FooterComponentLinks
          title={"For Restaurant"}
          list={["Partner with Us", "Feature for You"]}
        />
      </div>

      <div className="grid ">
        <FooterComponentLinks
          title={"For Restaurant"}
          list={["Partner with Us", "Feature for You"]}
        />
      </div>
      <div >
        <SocialLinks />
      </div>
    </div>
  );
};

export default Footer;
