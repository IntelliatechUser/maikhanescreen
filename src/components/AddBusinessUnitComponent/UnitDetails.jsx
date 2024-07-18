import React from "react";
import CustomCheckbox from "../../CommonComponents/CustomCheckBox";
import CustomRadioButton from "../../CommonComponents/CustomRadioButton";

const UnitDetails = () => {
    const [selectedValue, setSelectedValue] = React.useState('mobile');

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <>
            <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Unit Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <label className="block text-gray-600 mb-2" htmlFor="country">Business Unit Registration Country</label>
                    <select className="w-full p-3 border border-customOrange outline-none rounded" id="country">
                        <option>India</option>
                        <option>USA</option>
                        <option>UK</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-600 mb-2" htmlFor="category">Business Category Selected</label>
                    <select className="w-full p-3 border border-customOrange outline-none rounded" id="country">
                        <option>Liquor</option>
                        <option>Wine Shop</option>
                        <option>Restaurant & Bar</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-600 mb-2" htmlFor="ownership">Business Unit Ownership Mode</label>
                    <select className="w-full p-3 border border-customOrange outline-none rounded" id="ownership">
                        <option> Private Limited Company </option>
                        <option> Public Limited Company </option>
                        <option> Partnerships </option>
                        <option> LLP Registration </option>
                        <option> One Person Company </option>
                        <option> Sole Proprietorship </option>
                        <option> Section 8 Company </option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-600 mb-2" htmlFor="unitName">Business Unit Name</label>
                    <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" id="unitName" placeholder="English Wine Shop" />
                </div>
                <div>
                    <label className="block text-gray-600 mb-2" htmlFor="shopFor">Shop For</label>
                    <div className="flex items-center">
                        <CustomCheckbox label="Liquor" />
                        <CustomCheckbox label="Beer" />
                        <CustomCheckbox label="Wine" />
                    </div>
                </div>
                <div>
                    <label className="block text-gray-600 mb-2" htmlFor="subarea">Subarea/Society/Landmark</label>
                    <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" id="subarea" placeholder="Enter Area Name" />
                </div>
                <div>
                    <label className="block text-gray-600 mb-2" htmlFor="locality">Locality/Area Name</label>
                    <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" id="locality" placeholder="Enter Area Name" />
                </div>
                <div>
                    <label className="block text-gray-600 mb-2" htmlFor="shop-category">Shop Category</label>
                    <select className="w-full p-3 border border-customOrange outline-none rounded" id="shop-category">
                        <option>Counter Store</option>
                        <option>Online Store</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-600 mb-2" htmlFor="address">Address</label>
                    <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" id="address" placeholder="Select Address" />
                </div>

                <div className=" grid-cols-1 md:grid-cols-3 h-[230px]">
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="currency">Accepted Currency</label>
                        <select className="w-full p-3 border border-customOrange outline-none rounded" id="currency">
                            <option>Indian Rupees : INR</option>
                            <option>Euro : EUR</option>
                            <option>South African Rand : ZAR</option>
                            <option>American Dollars : USD</option>
                            <option>British Pounds : GBD</option>
                            <option>Japanese Yen : JPY</option>

                        </select>
                    </div>
                </div>
                <div className="grid-cols-1 md:grid-cols-2 gap-6">
                    <div className=" flex w-full gap-6">
                        <div className="w-full">
                            <label className="block text-gray-700 mb-2" htmlFor="openTime">Open Time</label>
                            <input className="w-full p-3 border border-customOrange outline-none rounded" type="time" id="openTime" defaultValue="09:00" />
                        </div>
                        <div className="w-full">
                            <label className="block text-gray-700 mb-2" htmlFor="closeTime">Close Time</label>
                            <input className="w-full p-3 border border-customOrange outline-none rounded" type="time" id="closeTime" defaultValue="23:45" />
                        </div>
                    </div>

                    <div className="flex w-full gap-6 mt-5">
                        <div>
                            <label className="block text-gray-600 mb-2" htmlFor="paymentMethod">Payment Method</label>
                            <div className="flex items-center">
                                <CustomCheckbox label="Cash" />
                                <CustomCheckbox label="Card" />
                                <CustomCheckbox label="Mobile" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" grid-cols-1 md:grid-cols-3">
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
                    {selectedValue === 'mobile' ? (<div className="mt-5">
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
                            <div className="mt-5">
                                <label className="block text-gray-600 mb-2" htmlFor="mobileNumber">Landline Number</label>
                                <div className="flex items-center">
                                    <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" id="landlineNumber" placeholder="Landline Number" />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="mt-5">
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
                            </>
                        )
                    )}
                </div>
            </div>
        </>
    )
}
export default React.memo(UnitDetails);