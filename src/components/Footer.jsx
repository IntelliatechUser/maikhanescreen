import React from "react";
import { FooterComponentLinks, SocialLinks } from "./FooterComponentLinks";
const Footer = () => {
  return (
    <div className="grid grid-cols-5 gap-x-4 pt-10 w-[95%] mx-auto ">
      <div>
        <img />
        <div className="text-poppins text-regular text-[22px] text-mediumText">
          HKBR private limited
        </div>

        <div className="text-poppins text-regular text-[22px] text-mediumText"></div>
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
      <div>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Footer;
