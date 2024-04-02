import React from "react";
import Input from "../inputfield/InputField";
const CustomAutocomplete = ({
  inputText,
  handleInputChange,
  filteredOptions,
  handleOptionClick,
  variant,size
}) => {
    const sizeClasses =
    size === "sm"
      ? "w-32"
      : size === "md"
      ? "w-64"
      : size === "lg"
      ? ""
      : "";
  return (

    <div className="autocomplete-input absolute">
      <Input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type to search..."
        className="border p-2 rounded-md "
        variant={variant}
        size={size}
      />
      {filteredOptions.length > 0 && (
        <ul className={`autocomplete-options list-none p-0 m-0 border rounded-md absolute ${sizeClasses} bg-blue`}>
          {filteredOptions.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className=" cursor-pointer hover:bg-gray-200"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomAutocomplete;
