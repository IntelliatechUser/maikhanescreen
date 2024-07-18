import React from 'react';

const CustomRadioButton = ({ id, name, value, checked, onChange, label }) => {
    return (
        <label className="flex items-start cursor-pointer">
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="hidden"
            />
            <span
                className={`w-6 h-6 inline-block border-2 rounded-md mr-2 relative border-customOrange`}
            >
                {checked && (
                    <span className="absolute inset-0 bg-customOrange m-1 rounded-sm"></span>
                )}
            </span>
            <span className={`ml-2 mr-[2.5rem] text-[#80808063] flex-wrap max-w-[75%]`}>{label}</span>
        </label>
    );
};

export default CustomRadioButton;
