import React from "react";
import { useState } from "react";
const InputField = ({
  RightIcon,
  Icon,
  label,
  // value,
  // setValue,
  name,
  placeholder,
  error,
  disabled,
  onChange,
  variant = "default",
  size = "md",
  className,
  validation = "numeric",
}) => {
  const [textbox, setTextbox] = useState("");
  const [validationerror, setValidationError] = useState("");
  const baseClasses = "pl-4 bg-white bg-no-repeat bg-padding-box   ";
  const variantClasses =
    variant === "simple"
      ? ""
      : variant === "default"
      ? "border-2 border-yellow-dark outline-0 focus:shadow-1xl focus:p-4 rounded-md opacity-100 "
      : "";
  const sizeClasses =
    size === "sm"
      ? " "
      : size === "md"
      ? ""
      : size === "lg"
      ? ""
      : size === "default"
      ? "w-full h-[70px]"
      : "";

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    // Switch to handle different types of validation
    switch (validation) {
      case "numeric": {
        // Regular expression to match numbers
        const numberPattern = /^\d{1,10}$/;
        if (inputValue !== "" && !numberPattern.test(inputValue)) {
          setValidationError("please enter valid mobile number");
        } else if (event.target.value.length >= 0) {
          setValidationError("");
        }

        setTextbox(event.target.value);
        break;
      }
      //   case "string": // For example, allow any characters except numbers // Your string validation logic goes here
      //   {
      //     const stringPattern = /^[^0-9]*$/;
      //     if (inputValue !== "" || !stringPattern.test(inputValue)) {
      //       setValidationError("please only enter string");
      //     } else {
      //       setValidationError("");
      //     }
      //     break;
      //   }
      //   default: {
      //     // onChange(event); // If no specific validation is provided, just pass the event
      //     break;
      //   }
    }
  };

  return (
    <div className={`input-wrapper  relative  ${sizeClasses} ${className}`}>
      <label
        htmlFor={label}
        className="font-weight-600 text-base text-gray block mb-2"
      >
        {label}
      </label>

      <input
        id={label}
        value={textbox}
        name={name}
        placeholder={placeholder}
        onChange={handleInputChange}
        disabled={disabled}
        className={`${baseClasses} ${sizeClasses} ${variantClasses} bg-white absolute  font-poppins font-regular text-[26px] text-input 
        
        `}
        style={{ paddingLeft: Icon ? "60px" : "30px", paddingRight : RightIcon ? "60px" : "30px" }}
        // outline outline-2 outline-green focus:outline-blue
      />
      <div className="absolute    pl-[29px] pt-[23px] ">{Icon}</div>
      <div className="absolute   right-3 pt-[23px] ">{RightIcon}</div>
      {
        <p className="error text-red text-sm mt-1 ml-3 absolute -bottom-5">
          {validationerror}
        </p>
      }
    </div>
  );
};

export default InputField;
