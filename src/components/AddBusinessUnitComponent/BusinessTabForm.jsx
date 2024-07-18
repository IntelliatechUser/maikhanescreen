import React from 'react';
import CustomRadioButton from "../../CommonComponents/CustomRadioButton";
import { useForm } from "react-hook-form"

const BusinessTabForm = () => {
    const [selectedValue, setSelectedValue] = React.useState('mobile');
    const [inputValues, setInputValues] = React.useState({});

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleOnInputChange = (e) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        })
    }

    const onValidateId = () => {
        const { idDocumentNumber, idType } = inputValues;
        if (idDocumentNumber && idType) {
            if (idType === 'PAN') {
                setInputValues({
                    ...inputValues,
                    addressLine1: 'National Highway 8',
                    addressLine2: '823/4 south street',
                    city: 'Kamrej',
                    state: 'Gujarat',
                    email: 'nawabdutta@gmail.com',
                    zipCode: '394185',
                    mobile: '98 98 252125'
                })
            }
            if (idType === 'GST') {
                setInputValues({
                    ...inputValues,
                    addressLine1: 'Netaji Subhash Marg',
                    addressLine2: 'Chandni Chowk',
                    city: 'New Delhi',
                    state: 'Delhi',
                    email: 'niyatinakulsastry@gmail.com',
                    zipCode: '110006',
                    mobile: '11 2336 5358'
                })
            }
            if (idType === 'CIN') {
                setInputValues({
                    ...inputValues,
                    addressLine1: 'Ravindra Path',
                    addressLine2: 'Old Dhan Mandi',
                    city: 'Sri Ganganagar',
                    state: 'Rajasthan',
                    email: 'animeshrajpatel@gmail.com',
                    zipCode: '335001',
                    mobile: '92 69 620001'
                })
            }

        }
    }

    return (
        <div className='mt-15 mr-7'>
            <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
                <div>
                    <label className="block text-gray-600 mb-2">Photo Id Type</label>
                    <select name="idType" className="w-full p-3 border border-customOrange outline-none rounded" onChange={(e) => handleOnInputChange(e)}>
                        <option>Select Category</option>
                        <option value={'PAN'}>PAN</option>
                        <option value={'GST'}>GST</option>
                        <option value={'CIN'}>CIN</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-600 mb-2">Photo Id Document/Certificate Number</label>
                    <div className="flex">
                        <input type="text" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="HGEU49660T" name="idDocumentNumber" onChange={(e) => handleOnInputChange(e)} />
                        <button className="ml-2 border border-customOrange text-[#FF9F08] py-2 px-4 rounded-md" onClick={() => onValidateId()}>Validate</button>
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
                    <input type="text" className="w-full p-3 border border-customOrange outline-none rounded"
                        placeholder="Address Line 01" name="addressLine1" value={inputValues?.addressLine1 || ''}
                        onChange={(e) => handleOnInputChange(e)} />
                </div>
                <div>
                    <input type="text" className="w-full p-3 border border-customOrange outline-none rounded"
                        placeholder="Address Line 02" name="addressLine2" value={inputValues?.addressLine2 || ''}
                        onChange={(e) => handleOnInputChange(e)} />
                </div>
                <div>
                    <div className="flex">
                        <input type="email" className="w-full p-3 border border-customOrange outline-none rounded"
                            placeholder="Email Verify Option" name="email" value={inputValues?.email || ''}
                            onChange={(e) => handleOnInputChange(e)} />
                        <button className="ml-2 text-[#FF9F08] py-2 px-4">Verify</button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                    <input type="text" className="w-full p-3 border border-customOrange outline-none rounded"
                        placeholder="Town/City" name="city" value={inputValues?.city || ''}
                        onChange={(e) => handleOnInputChange(e)} />
                </div>
                <div>
                    <input type="text" className="w-full p-3 border border-customOrange outline-none rounded"
                        placeholder="State/Province/Territory" name="state" value={inputValues?.state || ''}
                        onChange={(e) => handleOnInputChange(e)} />
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
                    <input type="text" className="w-full p-3 border border-customOrange outline-none rounded"
                        placeholder="Postal Code" name="zipCode" value={inputValues?.zipCode || ''}
                        onChange={(e) => handleOnInputChange(e)} />
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
                        <input className="w-full p-3 border border-customOrange outline-none rounded" type="text"
                            id="mobileNumber" placeholder="Mobile Number" name='mobile' value={inputValues?.mobile || ''}
                            onChange={(e) => handleOnInputChange(e)} />
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
