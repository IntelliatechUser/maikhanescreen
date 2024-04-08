import React from "react";

const Radio = ({ label, name, value, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer ">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <div className="border border-yellow-dark rounded-2xl flex items-center justify-center bg-white focus:outline-none w-11 h-11 ">
        {checked && (
          <div className="w-6 h-6 bg-yellow-dark rounded-2xl"></div>
        )}
      </div>
      {/* <span style={{marginLeft:"30px"}}>{label}</span> */}
            <span className="ml-10 font-poppins font-regular text-[1.04vw] text-input ">{label}</span>
    </label>
  );
};

export default Radio;
