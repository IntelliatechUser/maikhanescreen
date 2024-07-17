import React from 'react';
import CustomRadioButton from "../../CommonComponents/CustomRadioButton";

const OwnerTabForm = () => {
    const [selectedValue, setSelectedValue] = React.useState('mobile');

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className='mt-15 mr-7'>
            <div className="mb-6">
                <h2 className="text-lg font-semibold">Legal Identity Details <span className="text-sm font-normal">(Personal Photo Identification Document/Certificate Number)</span></h2>
                <p className="text-sm text-gray-700">
                    <strong className="text-[#FF9F08]">Note:</strong> ID Must Be - Government Issued And Legally Valid <br />
                    ID Must Have - Recent Photograph And Date Of Birth
                </p>
            </div>

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

            <div className="mb-6">
                <h2 className="text-lg font-semibold">Business Owner-Group Member Details</h2>
                <p className="text-sm text-gray-700">
                    All The Business Transactions Are Done Against The Name Of The Business Entity...Read More <br />
                    <span className="text-[#FF9F08]">(Minimum 1 Member Details Must Be Provided)</span>
                </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                    <input type="text" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Name" />
                </div>
                <div>
                    <input type="text" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Designation" />
                </div>
                <div>
                    <label className="block text-gray-600 mb-2" htmlFor="contactNumber">Owner Member Contact Number</label>
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
                    <input type="text" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Date of Birth" />
                </div>
                <div>
                    <div className="flex">
                        <input type="email" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Email" />
                        <button className="ml-2 text-[#FF9F08] py-2 px-4">Verify</button>
                    </div>
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
        </div>
    );
};

export default OwnerTabForm;
