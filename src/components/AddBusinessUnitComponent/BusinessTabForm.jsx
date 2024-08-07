

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import CustomRadioButton from "../../CommonComponents/CustomRadioButton";
import useStore from "../../store/UnitDetail";
import { useState } from "react"
import businessLogicStore from "../../store/BusinessLogicStore"
const BusinessTabForm = ({ onSubmitBusiness }) => {
    const { businessDetails, setBusinessDetails } = useStore();
    const [selectedIdType, setSelectedIdType] = useState(businessDetails.idType);
    const { currentTab, setCurrentTab } = businessLogicStore();
    const validationSchema = Yup.object({
        idType: Yup.string().required('Required'),
        // idDocumentNumber: Yup.string().required('Required'),
        // legallyRegisteredName: Yup.string().required('Required'),
        // addressLine1: Yup.string().required('Required'),
        // addressLine2: Yup.string().required('Required'),
        // city: Yup.string().required('Required'),
        // state: Yup.string().required('Required'),
        // zipCode: Yup.string().required('Required'),
        // email: Yup.string().required('Required'),
        // contactNumber: Yup.string().required('Required'),
        businessLogo: Yup.mixed().required('Business logo is required'),
     pandocument: Yup.mixed().required('pandocument logo is required'),
        cindocument: Yup.mixed().required('cindocument logo is required'),
     gstdocument: Yup.mixed().required('gstdocument logo is required')
        
    });

    const handleValidate = async (idType, idDocumentNumber, setFieldValue) => {
        setFieldValue('legallyRegisteredName', "");
        setFieldValue('addressLine1', "");
        let token = localStorage.getItem("token");
        const endpoint = idType === "PAN" ? 'userVerification' : 'businessVerification';
        try {
            const response = await axios.post(`http://43.204.36.147:8067/${endpoint}`, {
                useCase: idType,
                documentId: idDocumentNumber
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const responseData = response.data.data;
            setFieldValue('legallyRegisteredName', responseData.name);
            setFieldValue('addressLine1', responseData.address);
        } catch (error) {
            console.error("Validation error:", error);
        }
    };

    const [selectedValue, setSelectedValue] = React.useState("mobile");

    const handleRadioChange = (event,setFieldValue) => {
		setSelectedValue(event.target.value);
		setFieldValue("contact", event.target.value);
	};

    const handleFileChange = (event, setFieldValue, fieldName) => {
        const file = event.currentTarget.files[0];
        if (file) {
            setFieldValue(fieldName, file);
        }
    };
    const handleIdTypeChange = (event, setFieldValue) => {
        const idType = event.target.value;
        setSelectedIdType(idType);
        setFieldValue("idType", idType);
    };
    return (
        <Formik
            initialValues={businessDetails}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                let savebutton = document.activeElement.id
                if (savebutton == "businessdatasave") {
                    setBusinessDetails(values);
                    let tab = currentTab;
                    setCurrentTab(tab + 1)
                } else {
                    setBusinessDetails(values);
                    onSubmitBusiness(values);


                }
            }}
        >
            {({ setFieldValue, values }) => (
                <Form>
                    <div className="mt-15 mr-7">
                        <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
                            <div>
                                <label className="block text-gray-600 mb-2">Business ID Type</label>
                                <Field as="select" name="idType" className="w-full p-3 border border-customOrange outline-none rounded" onChange={(event) => {

                                    setFieldValue('legallyRegisteredName', "");
                                    setFieldValue('addressLine1', "");
                                    handleIdTypeChange(event, setFieldValue)
                                }}>
                                    <option value="">Select Category</option>
                                    <option value="PAN">PAN</option>
                                    <option value="GST">GST</option>
                                    <option value="CIN">CIN</option>
                                </Field>
                                <ErrorMessage name="idType" component="div" className="text-red-500 text-xs mt-1" />
                            </div>
                            <div>
                                <label className="block text-gray-600 mb-2">Photo Id Document/Certificate Number</label>
                                <div className="flex">
                                    <Field
                                        type="text"
                                        name="idDocumentNumber"
                                        className="w-full p-3 border border-customOrange outline-none rounded"
                                        placeholder="HGEU49660T"
                                    />
                                    <button
                                        type="button"
                                        className="ml-2 border border-customOrange text-[#FF9F08] py-2 px-4 rounded-md"
                                        onClick={() => handleValidate(values.idType, values.idDocumentNumber, setFieldValue)}
                                    >
                                        Validate
                                    </button>
                                </div>
                                <ErrorMessage name="idDocumentNumber" component="div" className="text-red-500 text-xs mt-1" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
                            <div>
                                <label className="block text-gray-600 mb-2">Legally Registered Name Of Business Entity</label>
                                <Field
                                    type="text"
                                    name="legallyRegisteredName"
                                    className="w-full p-3 border border-customOrange outline-none rounded"
                                    placeholder="Legally Registered Name"
                                />
                                <ErrorMessage name="legallyRegisteredName" component="div" className="text-red-500 text-xs mt-1" />
                                <p className="mt-1 text-xs text-gray-600">
                                    All The Business Transactions Are Done Against The Name
                                    Of The Business Entity.
                                </p>
                            </div>
                            <div>
                                <label className="block text-gray-600 mb-2">Business Entity Registration Country</label>
                                <Field as="select" name="businessEntityRegistrationCountry" className="w-full p-3 border border-customOrange outline-none rounded">
                                    <option value="India">India</option>
                                </Field>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-4">
                                    <div className="w-[50%]">
                                        <Field
                                            type="text"
                                            name="addressLine1"
                                            className="w-full p-3 border border-customOrange outline-none rounded"
                                            placeholder="Address Line 01"
                                        />
                                        <ErrorMessage name="addressLine1" component="div" className="text-red-500 text-xs mt-1" />
                                    </div>

                                    <div className="w-[50%]">
                                        <Field
                                            type="text"
                                            name="addressLine2"
                                            className="w-full p-3 border border-customOrange outline-none rounded"
                                            placeholder="Address Line 02"
                                        />
                                        <ErrorMessage name="addressLine2" component="div" className="text-red-500 text-xs mt-1" />
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-[50%]">
                                        <Field
                                            type="text"
                                            name="city"
                                            className="w-full p-3 border border-customOrange outline-none rounded"
                                            placeholder="Town/City"
                                        />
                                        <ErrorMessage name="city" component="div" className="text-red-500 text-xs mt-1" />
                                    </div>
                                    <div className="w-[50%]">
                                        <Field
                                            type="text"
                                            name="state"
                                            className="w-full p-3 border border-customOrange outline-none rounded"
                                            placeholder="State/Province/Territory"
                                        />
                                        <ErrorMessage name="state" component="div" className="text-red-500 text-xs mt-1" />
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-[50%]">
                                        <Field
                                            type="text"
                                            name="zipCode"
                                            className="w-full p-3 border border-customOrange outline-none rounded"
                                            placeholder="Postal Code"
                                        />
                                        <ErrorMessage name="zipCode" component="div" className="text-red-500 text-xs mt-1" />
                                    </div>
                                    <div className="w-[50%]">
                                        <Field
                                            type="text"
                                            name="gpsLocation"
                                            className="w-full p-3 border border-customOrange outline-none rounded"
                                            placeholder="Add GPS Location"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-600 mb-2">Upload Business Logo</label>
                                    <input
                                        type="file"
                                        name="businessLogo"
                                        accept="image/*"
                                        onChange={(event) => handleFileChange(event, setFieldValue, "businessLogo")}
                                        className="w-full p-3 border border-customOrange outline-none rounded"
                                    />
                                    <ErrorMessage name="businessLogo" component="div" className="text-red-500 text-xs mt-1" />
                                </div>

                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="flex">
                                    <Field
                                        type="email"
                                        name="email"
                                        className="w-full p-3 border border-customOrange outline-none rounded"
                                        placeholder="Email ID"
                                    />
                                    {/* <button type="button" className="ml-2 text-[#FF9F08] py-2 px-4">
                                        Verify
                                    </button> */}
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                                </div>

                                <div>
                                    <label className="block text-gray-600 mb-2" htmlFor="contactNumber">
                                        Unit/Reception Contact Number (Optional)
                                    </label>
                                    <div className="flex items-center">
                                        <div className="flex flex-col lg:flex-row gap-2 lg:gap-0">
                                            <CustomRadioButton
                                                id="mobile"
                                                name="contact"
                                                value="mobile"
                                                checked={selectedValue === "mobile"}
                                                onChange={(e) => handleRadioChange(e, setFieldValue)}
                                                label="Mobile"
                                            />
                                            <CustomRadioButton
                                                id="landline"
                                                name="contact"
                                                value="landline"
                                                checked={selectedValue === "landline"}
                                                onChange={(e) => handleRadioChange(e, setFieldValue)}
                                                label="Landline"
                                            />
                                            <CustomRadioButton
                                                id="both"
                                                name="contact"
                                                value="both"
                                                checked={selectedValue === "both"}
                                                onChange={(e) => handleRadioChange(e, setFieldValue)}
                                                label="Both"
                                            />
                                        </div>
                                    </div>
                                </div>
                            <div>    {selectedValue === "mobile" ? (
                            <div>
                                <label
                                    className="block text-gray-600 mb-2"
                                    htmlFor="mobileNumber"
                                >
                                    Mobile Number (OTP Verification Via SMS)
                                </label>
                                <div className="flex flex-col items-start gap-2 lg:gap-0 lg:flex-row lg:items-center">
                                <Field
											as="select"
											name="countryCode"
											className="p-3 border border-customOrange outline-none rounded mr-2"
										>
											<option value="IND +91">IND +91</option>
											<option value="USA +1">USA +1</option>
											<option value="UK +44">UK +44</option>
										</Field>
										<Field
											className="w-full p-3 border border-customOrange outline-none rounded"
											type="text"
											name="mobileNumber"
											placeholder="Mobile Number"
										/>
                                    {/* <button className="ml-2 py-3 px-6 text-[#FF9F08]">
                                        Verify
                                    </button> */}
                                </div>
                            </div>
                        ) : selectedValue === "landline" ? (
                            <div>
                                <label
                                    className="block text-gray-600 mb-2"
                                    htmlFor="landlineNumber"
                                >
                                    Landline Number
                                </label>
                                <div className="flex items-center">
                                <Field
											className="w-full p-3 border border-customOrange outline-none rounded"
											type="text"
											name="landlineNumber"
											placeholder="Landline Number"
										/>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div>
                                    <label
                                        className="block text-gray-600 mb-2"
                                        htmlFor="mobileNumber"
                                    >
                                        Mobile Number (OTP Verification Via SMS)
                                    </label>
                                    <div className="flex items-center">
                                    <Field
											as="select"
											name="countryCode"
											className="p-3 border border-customOrange outline-none rounded mr-2"
										>
											<option value="IND +91">IND +91</option>
											<option value="USA +1">USA +1</option>
											<option value="UK +44">UK +44</option>
										</Field>
										<Field
											className="w-full p-3 border border-customOrange outline-none rounded"
											type="text"
											name="mobileNumber"
											placeholder="Mobile Number"
										/>
                                        {/* <button className="ml-2 py-3 px-6 text-[#FF9F08]">
                                            Verify Number
                                        </button> */}
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <label
                                        className="block text-gray-600 mb-2"
                                        htmlFor="landlineNumber"
                                    >
                                        Landline Number
                                    </label>
                                    <div className="flex items-center">
                                    <Field
											className="w-full p-3 border border-customOrange outline-none rounded"
											type="text"
											name="landlineNumber"
											placeholder="Landline Number"
										/>
                                    </div>
                                </div>
                            </div>
                        )}</div>

                                <ErrorMessage name="contactNumber" component="div" className="text-red-500 text-xs mt-1" />
                            </div>
                        
                        </div>
                       
                        {selectedIdType === "PAN" && (
                            <div className="grid grid-cols-3 gap-6 mb-6">
                                <div>
                                    <label className="block text-gray-600 mb-2">GST Document Upload</label>
                                    <div className="flex">
                                        <input
                                            type="file"
                                            name="gstdocument"
                                            accept="pdf/*"
                                            onChange={(event) => handleFileChange(event, setFieldValue, "gstdocument")}
                                            className="w-full p-3 border border-customOrange outline-none rounded"
                                        />
                                    </div>
                                    <ErrorMessage name="gstdocument" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                                <div>
                                    <label className="block text-gray-600 mb-2">CIN Document Upload</label>
                                    <div className="flex">
                                        <input
                                            type="file"
                                            name="cindocument"
                                            accept="pdf/*"
                                            onChange={(event) => handleFileChange(event, setFieldValue, "cindocument")}
                                            className="w-full p-3 border border-customOrange outline-none rounded"
                                        />
                                    </div>
                                    <ErrorMessage name="cindocument" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                                <div>
                                    <label className="block text-gray-600 mb-2">PAN Document Upload</label>
                                    <div className="flex">
                                        <input
                                            type="file"
                                            name="pandocument"
                                            accept="pdf/*"
                                            onChange={(event) => handleFileChange(event, setFieldValue, "pandocument")}
                                            className="w-full p-3 border border-customOrange outline-none rounded"
                                        />
                                    </div>
                                    <ErrorMessage name="pandocument" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                            </div>
                        )}

                        {selectedIdType === "GST" && (
                            <div className="grid grid-cols-3 gap-6 mb-6">
                                <div>
                                    <label className="block text-gray-600 mb-2">PAN Document Upload</label>
                                    <div className="flex">
                                        <input
                                            type="file"
                                            name="pandocument"
                                            accept="pdf/*"
                                            onChange={(event) => handleFileChange(event, setFieldValue, "pandocument")}
                                            className="w-full p-3 border border-customOrange outline-none rounded"
                                        />
                                    </div>
                                    <ErrorMessage name="pandocument" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                                <div>
                                    <label className="block text-gray-600 mb-2">CIN Document Upload</label>
                                    <div className="flex">
                                        <input
                                            type="file"
                                            name="cindocument"
                                            accept="pdf/*"
                                            onChange={(event) => handleFileChange(event, setFieldValue, "cindocument")}
                                            className="w-full p-3 border border-customOrange outline-none rounded"
                                        />
                                    </div>
                                    <ErrorMessage name="cindocument" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                                <div>
                                    <label className="block text-gray-600 mb-2">GST Document Upload</label>
                                    <div className="flex">
                                        <input
                                            type="file"
                                            name="gstdocument"
                                            accept="pdf/*"
                                            onChange={(event) => handleFileChange(event, setFieldValue, "gstdocument")}
                                            className="w-full p-3 border border-customOrange outline-none rounded"
                                        />
                                    </div>
                                    <ErrorMessage name="gstdocument" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                            </div>
                        )}

                        {selectedIdType === "CIN" && (
                            <div className="grid grid-cols-3 gap-6 mb-6">
                                <div>
                                    <label className="block text-gray-600 mb-2">GST Document Upload</label>
                                    <div className="flex">
                                        <input
                                            type="file"
                                            name="gstdocument"
                                            accept="pdf/*"
                                            onChange={(event) => handleFileChange(event, setFieldValue, "gstdocument")}
                                            className="w-full p-3 border border-customOrange outline-none rounded"
                                        />
                                    </div>
                                    <ErrorMessage name="gstdocument" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                                <div>
                                    <label className="block text-gray-600 mb-2">PAN Document Upload</label>
                                    <div className="flex">
                                        <input
                                            type="file"
                                            name="pandocument"
                                            accept="pdf/*"
                                            onChange={(event) => handleFileChange(event, setFieldValue, "pandocument")}
                                            className="w-full p-3 border border-customOrange outline-none rounded"
                                        />
                                    </div>
                                    <ErrorMessage name="pandocument" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                                <div>
                                    <label className="block text-gray-600 mb-2">CIN Document Upload</label>
                                    <div className="flex">
                                        <input
                                            type="file"
                                            name="cindocument"
                                            accept="pdf/*"
                                            onChange={(event) => handleFileChange(event, setFieldValue, "cindocument")}
                                            className="w-full p-3 border border-customOrange outline-none rounded"
                                        />
                                    </div>
                                    <ErrorMessage name="cindocument" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                            </div>
                        )}
                        <div className="flex justify-between">  <button
                            type="submit"
                            className="mt-6 p-3 bg-customOrange text-white rounded"
                        >
                            Back
                        </button>
                            <button
                                type="submit" id="businessdatasave"
                                className="mt-6 p-3 bg-customOrange text-white rounded"

                            >
                                Next
                            </button></div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default BusinessTabForm;





