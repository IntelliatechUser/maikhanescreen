import React from "react";
import Countryandlanguage from "./Countryandlanguage";
import faceBookIcon from "../assets/icons/SocialIcons/facebook.svg";
import linkedInIcon from "../assets/icons/SocialIcons/linkedin.svg";
import InstagramIcon from "../assets/icons/SocialIcons/instagram.svg";
import twitterIcon from "../assets/icons/SocialIcons/twitter.svg";
import youTubeIcon from "../assets/icons/SocialIcons/youtube.svg";

export const FooterComponentLinks = ({ title, list }) => {
  return (
    <div>
      <div className="text-poppins text-[1.30vw] text-regular text-black">
        {title}{" "}
      </div>

      <div>
        {list.map((item) => {
          return (
            <div className="text-poppins text-regular text-[1.14vw] text-mediumText">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const SocialLinks = () => {
  return (
    <div className="flex flex-col gap-2">
      {/* <div className="flex justify-end gap-2">
        <Countryandlanguage />
      </div> */}
      <div className="text-poppins text-[1.30vw] text-regular text-black">
        Social Links{" "}
      </div>
      <div className="grid grid-cols-5 gap-x-1">
        <img src={linkedInIcon} className="h-7 w-7" />
        <img
          src={InstagramIcon}
          className="h-7 w-7"
          // width="20px"
          // height="20px"
        />{" "}
        <img
          src={twitterIcon}
          className="h-7 w-7"
          // width="20px"
          // height="20px"
        />{" "}
        <img
          src={youTubeIcon}
          className="h-7 w-7"
          // width="20px"
          // height="20px"
        />
        <img
          src={faceBookIcon}
          className="h-7 w-7"
          // width="20px"
          // height="20px"
        />
      </div>

      <div className="flex justify-center gap-2">
        <img src="https://dummyimage.com/300.png/09f/fff" className="w-6 h-6" />
        <img src="https://dummyimage.com/300.png/09f/fff" className="w-6 h-6" />
      </div>
    </div>
  );
};
