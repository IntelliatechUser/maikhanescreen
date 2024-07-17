import React from 'react';

const TeamTabForm = () => {

    return (
        <div className='mt-15 mr-7'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" placeholder='Name' />
                </div>
                <div>
                    <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" placeholder='Date of Birth' />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-5">
                <div>
                    <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" placeholder='Designation' />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                <div>
                    <input className="w-full p-3 border border-customOrange outline-none rounded" type="email" placeholder='Email' />
                </div>
                <div>
                    <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" placeholder='Contact Number' />
                </div>
            </div>
        </div >
    );
};

export default TeamTabForm;
