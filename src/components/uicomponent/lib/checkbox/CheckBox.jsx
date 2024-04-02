import React from "react";

const CheckBox = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      {/* <div className="w-3 h-3 border border-gray-400 rounded-md flex items-center justify-center bg-white focus:outline-none">
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-500"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        )}
      </div>
       */}
       <div className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center bg-white focus:outline-none">
        {checked && (
          <div className="w-2 h-2 bg-blue border-2 border-blue outline outline-2 outline-blue  "></div>
        )}
      </div>
      <span>{label}</span>
    </label>
  );
};

export default CheckBox;
