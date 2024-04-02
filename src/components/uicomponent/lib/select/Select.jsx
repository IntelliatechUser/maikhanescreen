import React from "react";
import { useState } from "react";
const Select = ({
  LeftIcon,
  rightIcon,
  dataTestId,
  disabled,
  name,
  options,
  handleOptionClick,
  variant,
  size,
  className,
}) => {
  const [openOptions, setOpenOptions] = useState(false);
  const variantClasses =
    variant === "primary" ? "" : variant === "secondary" ? "" : ""; // Add more variants as needed
  const sizeClasses =
    size === "sm"
      ? ""
      : size === "md"
      ? ""
      : size === "default"
      ? " w-full "
      : "";

  const baseClass = ` `;
  return (
    <>
      <div className={`relative ${sizeClasses} ${className}`}>
        <button
          data-testid={dataTestId}
          disabled={disabled}
          className={`cursor-pointer  text-secondary bg-white border-2 border-yellow-dark focus:shadow-1xl no-underline transition-all duration-200 ease-in-out rounded-lg flex items-center h-[70px] text-poppins text-regular text-[24px]  ${variantClasses}  ${baseClass} ${sizeClasses} `}
          onClick={() => setOpenOptions((prev) => !prev)}
        >
          <span className="pl-7 pr-2 ">{LeftIcon}</span>{" "}
          <span className="text-input mt-2 ">{name}</span>
          <span className="flex-1 flex justify-end pr-4">{rightIcon}</span>
        </button>
        {openOptions && options.length > 0 && (
          <ul
            className={`autocomplete-options text-secondary list-none border-2 border-yellow-dark bg-white rounded-xl absolute  ${sizeClasses}`}
          >
            {options?.map((item) => (
              <li
                key={item.value}
                onClick={() => handleOptionClick(item.value)}
                className="text-input text-poppins text-regular text-[26px] cursor-pointer hover:bg-gray p-2"
              >
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Select;
