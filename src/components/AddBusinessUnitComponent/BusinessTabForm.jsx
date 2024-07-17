import React from 'react';
import CustomRadioButton from "../../CommonComponents/CustomRadioButton";

const BusinessTabForm = () => {
    const [selectedValue, setSelectedValue] = React.useState('mobile');

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className='mt-15 mr-7'>
            <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
                <div>
                    <label className="block text-gray-600 mb-2">Photo Id Type</label>
                    <select className="w-full p-3 border border-customOrange outline-none rounded">
                        <option>Select Category</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-600 mb-2">Photo Id Document/Certificate Number</label>
                    <div className="flex">
                        <input type="text" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="HGEU49660T" />
                        <button className="ml-2 border border-customOrange text-[#FF9F08] py-2 px-4 rounded-md">Validate</button>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
                <div>
                    <label className="block text-gray-600 mb-2">Legally Registered Name Of Business Entity</label>
                    <input type="text" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Legally Registered Name" />
                    <p className="mt-1 text-xs text-gray-600">All The Business Transactions Are Done Against The Name Of The Business Entity.</p>
                </div>
                <div>
                    <label className="block text-gray-600 mb-2">Business Entity Registration Country</label>
                    <div className="flex">
                        <select className="w-full p-3 border border-customOrange outline-none rounded">
                            <option>India</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                    <input type="text" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Address Line 01" />
                </div>
                <div>
                    <input type="text" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Address Line 02" />
                </div>
                <div>
                    <div className="flex">
                        <input type="email" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Email Verify Option" />
                        <button className="ml-2 text-[#FF9F08] py-2 px-4">Verify</button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                    <input type="text" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Town/City" />
                </div>
                <div>
                    <input type="text" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="State/Province/Territory" />
                </div>
                <div>
                    <label className="block text-gray-600 mb-2" htmlFor="contactNumber">Unit/Reception Contact Number (Optional)</label>
                    <div className="flex items-center">
                        <div className="flex space-x-4">
                            <CustomRadioButton
                                id="mobile"
                                name="contact"
                                value="mobile"
                                checked={selectedValue === 'mobile'}
                                onChange={handleRadioChange}
                                label="Mobile"
                            />
                            <CustomRadioButton
                                id="landline"
                                name="contact"
                                value="landline"
                                checked={selectedValue === 'landline'}
                                onChange={handleRadioChange}
                                label="Landline"
                            />
                            <CustomRadioButton
                                id="both"
                                name="contact"
                                value="both"
                                checked={selectedValue === 'both'}
                                onChange={handleRadioChange}
                                label="Both"
                            />
                        </div>
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                    <input type="text" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Postal Code" />
                </div>
                <div>
                    <input type="text" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Add GPS Location" />
                </div>
                {selectedValue === 'mobile' ? (<div>
                    <label className="block text-gray-600 mb-2" htmlFor="mobileNumber">Mobile Number (OTP Verification Via SMS)</label>
                    <div className="flex items-center">
                        <select className="p-3 border border-customOrange outline-none rounded mr-2">
                            <option>IND +91</option>
                            <option>USA +1</option>
                            <option>UK +44</option>
                        </select>
                        <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" id="mobileNumber" placeholder="Mobile Number" />
                        <button className="ml-2 py-3 px-6 text-[#FF9F08]">Verify Number</button>
                    </div>
                </div>) : (
                    selectedValue === 'landline' ? (
                        <div>
                            <label className="block text-gray-600 mb-2" htmlFor="mobileNumber">Landline Number</label>
                            <div className="flex items-center">
                                <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" id="landlineNumber" placeholder="Landline Number" />
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div>
                                <label className="block text-gray-600 mb-2" htmlFor="mobileNumber">Mobile Number (OTP Verification Via SMS)</label>
                                <div className="flex items-center">
                                    <select className="p-3 border border-customOrange outline-none rounded mr-2">
                                        <option>IND +91</option>
                                        <option>USA +1</option>
                                        <option>UK +44</option>
                                    </select>
                                    <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" id="mobileNumber" placeholder="Mobile Number" />
                                    <button className="ml-2 py-3 px-6 text-[#FF9F08]">Verify Number</button>
                                </div>
                            </div>
                            <div className="mt-5">
                                <label className="block text-gray-600 mb-2" htmlFor="mobileNumber">Landline Number</label>
                                <div className="flex items-center">
                                    <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" id="landlineNumber" placeholder="Landline Number" />
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>

            <div className="grid grid-cols-6 gap-6 mb-6">
                <div>
                    <input type="text" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Add Business Logo" />
                </div>
                <div>
                    <button className="ml-2 border border-customOrange text-[#FF9F08] py-2 px-4 rounded-md">Upload Logo</button>
                </div>
            </div>
        </div>
    );
};

export default BusinessTabForm;
