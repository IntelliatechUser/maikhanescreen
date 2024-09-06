import React from 'react';

const CustomCheckbox = ({ id, name, value, checked, onChange, label, disabled }) => {
    return (
        <label className="flex text-secondary items-start cursor-pointer">
            <input
                type="checkbox"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="hidden"
                disabled={disabled}
            />
            <span
                className={`w-6 h-6 inline-block border-2 rounded-md mr-2 relative border-customOrange`}
            >
                {checked && (
                    <span className="absolute inset-0 bg-customOrange m-1 rounded-sm"></span>
                )}
            </span>
            <span className={`ml-2 mr-[.5rem] flex-wrap max-w-[75%]`}>{label}</span>
        </label>
    );
};

export default CustomCheckbox;


