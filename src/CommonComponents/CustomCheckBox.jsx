import React, { useState } from 'react';

const CustomCheckbox = ({ label }) => {
    const [checked, setChecked] = useState(false);

    return (
        <>
            <div className={`w-6 h-6 flex items-center justify-center border-2 rounded-md cursor-pointer border-customOrange`}
                onClick={() => setChecked(!checked)}
            >
                {checked && (<div className="w-3 h-3 bg-customOrange rounded-sm"></div>)}
            </div>
            <label
                className={`ml-2 mr-[2.5rem] text-secondary`}
                onClick={() => setChecked(!checked)}
            >
                {label}
            </label>
        </>
    );
};

export default CustomCheckbox;
