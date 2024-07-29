import React from 'react';
import CustomRadioButton from "../../CommonComponents/CustomRadioButton";
import OTPModal from '../../CommonComponents/Modal';

const OwnerTabForm = () => {
    const [selectedValue, setSelectedValue] = React.useState('mobile');
    const [inputValues, setInputValues] = React.useState({});
    const [isModalOpen, setIsModalOpen] = React.useState(false);

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
                    name: 'Victor Avery',
                    dob: '09/Jan/1996',
                    email: 'victoravery@gmail.com',
                    designation: 'Test 1',
                    mobile: '98 98 252125'
                })
            }
            if (idType === 'DIL') {
                setInputValues({
                    ...inputValues,
                    name: 'Zoe Berry',
                    dob: '22/Nov/1998',
                    email: 'zeoberry@gmail.com',
                    designation: 'Test 2',
                    mobile: '11 2336 5358'
                })
            }
            if (idType === 'Aadhar') {
                setIsModalOpen(true);
            }

        }
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    const handleSubmitOTP = () => {
        setInputValues({
            ...inputValues,
            name: 'Sarah Path',
            dob: '11/Oct/2000',
            email: 'sarahpath@gmail.com',
            designation: 'Test 3',
            mobile: '92 69 620001'
        })
        setIsModalOpen(false);
    }

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
                    <select className="w-full p-3 border border-customOrange outline-none rounded" name="idType" onChange={(e) => handleOnInputChange(e)}>
                        <option>Select Category</option>
                        <option value={'PAN'}>PAN</option>
                        <option value={'Aadhar'}>Aadhar</option>
                        <option value={'DIL'}>Driving Licence</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-600 mb-2">Photo Id Document/Certificate Number</label>
                    <div className="flex">
                        <input type="text" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="HGEU49660T"
                            name="idDocumentNumber" onChange={(e) => handleOnInputChange(e)} />
                        <button className="ml-2 border border-customOrange text-[#FF9F08] py-2 px-4 rounded-md" onClick={() => onValidateId()}>Validate</button>
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

            <div className="grid md:grid-cols-[70%_30%] gap-6 mb-6 items-start ">
              <div className="grid md:grid-cols-2 gap-6  ">  <div>
                    <input type="text" className="w-full p-3 border border-customOrange outline-none rounded"
                        placeholder="Name" name="name" onChange={(e) => handleOnInputChange(e)} value={inputValues?.name || ''} />
                </div>
                <div>
                    <input type="text" className="w-full p-3 border border-customOrange outline-none rounded"
                        placeholder="Designation"
                        name="designation" onChange={(e) => handleOnInputChange(e)} value={inputValues?.designation || ''} />
                </div>
                <div>
                    <input type="text" className="w-full p-3 border border-customOrange outline-none rounded"
                        name="dob" onChange={(e) => handleOnInputChange(e)} placeholder="Date of Birth" value={inputValues?.dob || ''} />
                </div>
                <div>
                    <div className="flex">
                        <input type="email" className="w-full p-3 border border-customOrange outline-none rounded"
                            placeholder="Email" name="email" onChange={(e) => handleOnInputChange(e)} value={inputValues?.email || ''} />
                        <button className="ml-2 text-[#FF9F08] py-2 px-4">Verify</button>
                    </div>
                </div></div>
                <div>
                    <label className="block text-gray-600 mb-2" htmlFor="contactNumber">Owner Member Contact Number</label>
                    <div className="flex flex-col lg:items-center ">
                        <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 ">
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

                    <div>  {selectedValue === 'mobile' ? (<div>
                    <label className="block text-gray-600 mb-2" htmlFor="mobileNumber">Mobile Number (OTP Verification Via SMS)</label>
                    <div className="flex flex-col items-start gap-2 lg:gap-0 lg:flex-row lg:items-center">
                        <select className="p-3 border border-customOrange outline-none rounded mr-2">
                            <option>IND +91</option>
                            <option>USA +1</option>
                            <option>UK +44</option>
                        </select>
                        <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" id="mobileNumber" placeholder="Mobile Number"
                            name="mobile" onChange={(e) => handleOnInputChange(e)} value={inputValues?.mobile || ''} />
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
                                <div className="flex flex-col items-start gap-2 lg:gap-0 lg:flex-row lg:items-center">
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
                )}</div>
                </div>

            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
                {/* <div>
                    <input type="text" className="w-full p-3 border border-customOrange outline-none rounded"
                        name="dob" onChange={(e) => handleOnInputChange(e)} placeholder="Date of Birth" value={inputValues?.dob || ''} />
                </div>
                <div>
                    <div className="flex">
                        <input type="email" className="w-full p-3 border border-customOrange outline-none rounded"
                            placeholder="Email" name="email" onChange={(e) => handleOnInputChange(e)} value={inputValues?.email || ''} />
                        <button className="ml-2 text-[#FF9F08] py-2 px-4">Verify</button>
                    </div>
                </div> */}
                {/* {selectedValue === 'mobile' ? (<div>
                    <label className="block text-gray-600 mb-2" htmlFor="mobileNumber">Mobile Number (OTP Verification Via SMS)</label>
                    <div className="flex flex-col items-start gap-2 lg:gap-0 lg:flex-row lg:items-center">
                        <select className="p-3 border border-customOrange outline-none rounded mr-2">
                            <option>IND +91</option>
                            <option>USA +1</option>
                            <option>UK +44</option>
                        </select>
                        <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" id="mobileNumber" placeholder="Mobile Number"
                            name="mobile" onChange={(e) => handleOnInputChange(e)} value={inputValues?.mobile || ''} />
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
                                <div className="flex flex-col items-start gap-2 lg:gap-0 lg:flex-row lg:items-center">
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
                )} */}
            </div>
            <OTPModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmitOTP={handleSubmitOTP}
            />
        </div>
    );
};

export default OwnerTabForm;
