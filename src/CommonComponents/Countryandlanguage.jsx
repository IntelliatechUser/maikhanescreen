import React from "react";
import ReactCountryFlag from "react-country-flag";
import { useState } from "react";
const options = [
  { value: "option1", label: "Option 1", countryCode: "US" },
  { value: "option2", label: "Option 2", countryCode: "CA" },
  { value: "option3", label: "Option 3", countryCode: "FR" },
];
const Countryandlanguage = () => {
  const [selectedValue, setSelectedValue] = useState();
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const handleSelectChange = (e) => {
    const selected = options.find((option) => option.value === e.target.value);
    setSelectedOption(selected);
    setSelectedValue(selected.value);
    console.log("Selected:", selected);
  };

  return (
    <>
      <div className="relative inline-block ">
        <div className="flex items-center bg-white border text-sm border-gray-300 text-gray-700 py-2 px-2  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <ReactCountryFlag
            countryCode={selectedOption.countryCode}
            svg
            className="mr-2"
          />
          <select
            className="block appearance-none w-full bg-transparent focus:outline-none"
            value={selectedValue}
            onChange={handleSelectChange}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none  text-sm absolute inset-y-0 right-0 flex items-center px-[3px] text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.293 7.293L9 11.586l3.707-3.707-1.414-1.414L9 8.758l-2.293-2.293z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative inline-block ">
        <div className="flex items-center bg-white border border-gray-300 text-gray-700 py-2 px-2  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <ReactCountryFlag
            countryCode={selectedOption.countryCode}
            svg
            className="mr-2"
          />
          <select
            className="block appearance-none w-full bg-transparent focus:outline-none"
            value={selectedValue}
            onChange={handleSelectChange}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-[3px] text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.293 7.293L9 11.586l3.707-3.707-1.414-1.414L9 8.758l-2.293-2.293z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Countryandlanguage;
