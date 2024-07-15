import React from "react";
import Countryandlanguage from "./Countryandlanguage";

export const FooterComponentLinks = ({ title, list }) => {
  console.log("list >>>>>>>>>>>>>>", list);
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
    <div>
      <div className="flex justify-end">
        <Countryandlanguage />
      </div>
      <div className="text-poppins text-[1.30vw] text-regular text-black">
        Social Links{" "}
      </div>
      <div className="grid grid-cols-5 gap-x-1">
        <img
          src="https://dummyimage.com/300.png/09f/fff"
          width="20px"
          height="20px"
        />
        <img
          src="https://dummyimage.com/300.png/09f/fff"
          width="20px"
          height="20px"
        />{" "}
        <img
          src="https://dummyimage.com/300.png/09f/fff"
          width="20px"
          height="20px"
        />{" "}
        <img
          src="https://dummyimage.com/300.png/09f/fff"
          width="20px"
          height="20px"
        />
        <img
          src="https://dummyimage.com/300.png/09f/fff"
          width="20px"
          height="20px"
        />
      </div>

      <div className="flex justify-center gap-2">
        <img
          src="https://dummyimage.com/300.png/09f/fff"
          width="50px"
          height="50px"
        />
        <img
          src="https://dummyimage.com/300.png/09f/fff"
          width="50px"
          height="50px"
        />
      </div>
    </div>
  );
};
