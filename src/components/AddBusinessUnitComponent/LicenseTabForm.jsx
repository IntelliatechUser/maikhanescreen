import React from 'react';
import CustomRadioButton from "../../CommonComponents/CustomRadioButton";

const LicenseTabForm = () => {
    const [selectedValue, setSelectedValue] = React.useState('mobile');

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className='mt-15 mr-7'>
            <h2 className="text-lg font-semibold">Please Provide The Liquor Service License Details</h2><br />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className=" grid-cols-1 md:grid-cols-3">
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="currency">License Number</label>
                        <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" placeholder='ABCDESZ3245' />
                    </div>
                    <div className=" grid-cols-1 md:grid-cols-2">
                        <div className='flex items-center justify-between w-full gap-2 mt-5'>
                            <div className='flex flex-col gap'>
                                <label className="block text-gray-700 mb-2" htmlFor="currency">Valid From</label>
                                <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" />
                            </div>
                            <div className='flex flex-col gap'>
                                <label className="block text-gray-700 mb-2" htmlFor="currency">Valid Upto</label>
                                <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="currency">License Category/Type Name</label>
                        <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" placeholder='Describe The License Category Type' />
                    </div>
                    <div className='mt-5'>
                        <label className="block text-gray-700 mb-2">License Issuing Authority</label>
                        <div className="flex items-center mt-1">
                            <input type="text" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Enter the Name of Issuing Authority" />
                            <select className="p-3 border border-customOrange outline-none rounded ml-2 block">
                                <option>IND</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className=" grid-cols-1 md:grid-cols-3">
                    <label className="block text-gray-600 mb-2">License Owner Details</label>
                    <div className='flex flex-col gap-2'>
                        <CustomRadioButton
                            id="licenseOwner"
                            name="licenseOwner"
                            value="licenseOwner"
                            checked={selectedValue === 'licenseOwner'}
                            onChange={handleRadioChange}
                            label={`License Ownership is with Business Organization Business organization : Name goes here`}
                        />
                        <CustomRadioButton
                            id="ownerGroupMember"
                            name="licenseOwner"
                            value="ownerGroupMember"
                            checked={selectedValue === 'ownerGroupMember'}
                            onChange={handleRadioChange}
                            label={'License Ownership is with Owner-Group Member Owner-Group Member : Name goes here '}
                        />
                        <CustomRadioButton
                            id="thirdParty"
                            name="licenseOwner"
                            value="thirdParty"
                            checked={selectedValue === 'thirdParty'}
                            onChange={handleRadioChange}
                            label="License Ownership is with Third-Party"
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-6">
                <div className='mt-5'>
                    <label className="block text-gray-700 mb-2">Liquor Service License Certificate</label>
                    <button className="mt-1 block bg-transparent border-2 border-[#FF9F08] text-[#FF9F08] py-2 px-4 rounded-md">Upload Certificate</button>
                </div>
            </div>
        </div >
    );
};

export default LicenseTabForm;
