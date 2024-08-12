// import React, { useState } from 'react';

// const CustomCheckbox = ({ label }) => {
//     const [checked, setChecked] = useState(false);

//     return (
//         <>
//             <div className={`w-6 h-6 flex items-center justify-center border-2 rounded-md cursor-pointer border-customOrange`}
//                 onClick={() => setChecked(!checked)}
//             >
//                 {checked && (<div className="w-3 h-3 bg-customOrange rounded-sm"></div>)}
//             </div>
//             <label
//                 className={`ml-2 text-secondary`}
//                 onClick={() => setChecked(!checked)}
//             >
//                 {label}
//             </label>
//         </>
//     );
// };

// export default CustomCheckbox;


// import React from 'react';

// const CustomCheckbox = ({ id, name, checked, onChange, label }) => {
//     return (
//         <label className="flex text-secondary items-start cursor-pointer">
//             <input
//                 type="checkbox"
//                 id={id}
//                 name={name}
//                 checked={checked}
//                 onChange={onChange}
//                 className="hidden"
//             />
//             <span
//                 className={`w-6 h-6 inline-block border-2 rounded-md mr-2 relative border-customOrange`}
//             >
//                 {checked && (
//                     <span className="absolute inset-0 bg-customOrange m-1 rounded-sm"></span>
//                 )}
//             </span>
//             <span className={`ml-2 mr-[.5rem] flex-wrap max-w-[75%]`}>{label}</span>
//         </label>
//     );
// };

// export default CustomCheckbox;


import React from 'react';

const CustomCheckbox = ({ id, name, value, checked, onChange, label }) => {
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


