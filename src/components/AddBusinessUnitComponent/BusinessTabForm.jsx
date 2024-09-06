

import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import CustomRadioButton from "../../CommonComponents/CustomRadioButton";
import useStore from "../../store/UnitDetail";
import { useState } from "react"
import businessLogicStore from "../../store/BusinessLogicStore"
import OTPModal from '../../CommonComponents/Modal';
import localStorageUtil from "../../utility/utility";
import VerifiedIcon from '../../assets/icons/VerifiedIcon.jsx';
const BusinessTabForm = ({ onSubmitBusiness }) => {
    const [verify, setVerify] = useState("Verify");
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [modalfor, setModalFor] = useState("");
    const { businessDetails, setBusinessDetails } = useStore();
    const [selectedIdType, setSelectedIdType] = useState(businessDetails.idType);
    const { currentTab, setCurrentTab, currentFlow, diabledForm } = businessLogicStore();
    const validationSchema = Yup.object({

        idDocumentNumber: Yup.string().required('Required'),
        legallyRegisteredName: Yup.string().required('Required'),
        addressLine1: Yup.string().required('Required'),
        // addressLine2: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        state: Yup.string().required('Required'),
        zipCode: Yup.string().required('Required'),
        contact: Yup.string().required('Required'),
        email: Yup.string().required('Required'),
        idType: Yup.string().required('Required'),


        businessLogo: Yup.mixed().required('Business logo is required'),
        pandocument: Yup.mixed().required('pandocument logo is required'),
        cindocument: Yup.mixed().required('cindocument logo is required'),
        gstdocument: Yup.mixed().required('gstdocument logo is required'),


        mobileNumber: Yup.string().test(
            'mobileNumberValidation',
            'Mobile number is required ',
            function (value) {
                const { contact } = this.parent;
                if (contact === 'mobile' || contact === 'both') {
                    return !!value;
                }
                return true;
            }
        ),
        landlineNumber: Yup.string().test(
            'landlineNumberValidation',
            'Landline number is required ',
            function (value) {
                const { contact } = this.parent;
                if (contact === 'landline' || contact === 'both') {
                    return !!value;
                }
                return true;
            }
        ),

    });
    const fetchDocumentDetails = async (cred = "mobileNumber", values, actions, setFieldValue) => {
        let params;
        setIsModalOpen(true);
        if (cred == "email") {
            setModalFor(cred)
            params = {

                email: values.email
            }
        } else {
            setModalFor("mobileNumber")
            params = {
                countryCode: "+91",
                mobileNumber: values.mobileNumber
            }
        }
        try {
            let token = localStorage.getItem("token");
            const response = await axios.get('http://43.204.36.147:8067/otp/generateOtpForUser', {
                params,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });






        } catch (error) {
            console.error('Error in getting otp', error);
        }
    };
    const handleSubmitOTP = async (actions, otp, values) => {
        let params;
        if (modalfor == "email") {
            params =
            {
                email: values.email,
                otp: otp
            }

        } else {
            params =
            {
                mobileNumber: values.mobileNumber,
                otp: otp
            }
        }
        let token = localStorage.getItem("token");
        try {
            const response = await axios.post(
                'http://43.204.36.147:8067/otp/validateOtpForUser',
                params,
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
            const data = response?.data;
            console.log(">>>>>>>>>>>>responseData", data.status);
            if (data.status == 200) {

                if (modalfor == "email") {
                    setVerify("Email is Verified");
                    localStorageUtil.setItem("emailverify", "Email is Verified")
                } else {
                    setVerify("Mobile is Verified");
                    localStorageUtil.setItem("mobileverifybusiness", "Mobile is Verified")
                }

            }



        } catch (error) {
            console.error("Error verifying OTP:", error);
        } finally {
            setIsModalOpen(false);
        }




    };
    const handleValidate = async (idType, idDocumentNumber, setFieldValue) => {
        setFieldValue('legallyRegisteredName', "");
        setFieldValue('addressLine1', "");
        setFieldValue('city', "");
        setFieldValue('state', "");
        setFieldValue('zipCode', "");
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
            setFieldValue('city', responseData.city);
            setFieldValue('state', responseData.state);
            setFieldValue('zipCode', responseData.postalCode);
        } catch (error) {
            console.error("Validation error:", error);
        }
    };

    const [selectedValue, setSelectedValue] = React.useState("mobile");

    const handleRadioChange = (event, setFieldValue) => {
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
    console.log(">>>>>>>>>>>>>>>businessDetail", businessDetails)
    return (
        <Formik
            initialValues={businessDetails}
            enableReinitialize={true}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                let savebutton = document.activeElement.id
                if (savebutton == "businessdatasave") {
                    console.log(">>>>>>>>>>BusinessDetails", values);
                    setBusinessDetails(values);
                    let tab = currentTab;
                    setCurrentTab(tab + 1)
                } else {



                }
            }}
        >
            {({ setFieldValue, values, setValues, validateForm }) => (


                <Form>
                    <div className="mt-15 mr-7">
                        <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
                            <div>
                                <label className="block text-gray-600 mb-2">Business ID Type</label>
                                <Field as="select" name="idType" className="w-full p-3 border border-customOrange outline-none rounded" disabled={diabledForm} onChange={(event) => {

                                    setFieldValue('legallyRegisteredName', "");
                                    setFieldValue('addressLine1', "");
                                    handleIdTypeChange(event, setFieldValue)
                                }}>
                                    <option value="">Select Category</option>
                                    <option value="PAN">PAN</option>
                                    <option value="GST">GST</option>
                                    <option value="CIN">CIN</option>
                                </Field>
                                <ErrorMessage name="idType" component="div" className="text-darkred text-sm font-medium " />
                            </div>
                            <div>
                                <label className="block text-gray-600 mb-2">Photo Id Document/Certificate Number</label>
                                <div className="flex">
                                    <Field
                                        type="text"
                                        name="idDocumentNumber"
                                        className="w-full p-3 border border-customOrange outline-none rounded"
                                        placeholder="HGEU49660T"
                                        disabled={diabledForm}
                                    />
                                    <button
                                        type="button"
                                        className="ml-2 border border-customOrange text-[#FF9F08] py-2 px-4 rounded-md"  disabled={diabledForm}
                                        onClick={() => handleValidate(values.idType, values.idDocumentNumber, setFieldValue)}
                                    >
                                        Validate
                                    </button>
                                </div>
                                <ErrorMessage name="idDocumentNumber" component="div" className="text-darkred text-sm font-medium " />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6   items-stretch">
                            <div className="flex flex-col gap-4">
                                <div>
                                    <label className="block text-gray-600 mb-2">Legally Registered Name Of Business Entity</label>
                                    <Field
                                        type="text"
                                        name="legallyRegisteredName"
                                        className="w-full p-3 border border-customOrange outline-none rounded"
                                        placeholder="Legally Registered Name"
                                        disabled={diabledForm}
                                    />
                                    <ErrorMessage name="legallyRegisteredName" component="div" className="text-darkred text-sm font-medium " />
                                </div> <div>  <p className="mt-1 text-xs text-gray-600">
                                    All The Business Transactions Are Done Against The Name
                                    Of The Business Entity.
                                </p>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex gap-4">
                                            <div className="w-[50%]">
                                                <Field
                                                    type="text"
                                                    name="addressLine1"
                                                    className="w-full p-3 border border-customOrange outline-none rounded"
                                                    placeholder="Address Line 01"
                                                    disabled={diabledForm}
                                                />
                                                <ErrorMessage name="addressLine1" component="div" className="text-red-500 text-xs mt-1" />
                                            </div>

                                            <div className="w-[50%]">
                                                <Field
                                                    type="text"
                                                    name="addressLine2"
                                                    className="w-full p-3 border border-customOrange outline-none rounded"
                                                    placeholder="Address Line 02"
                                                    disabled={diabledForm}
                                                />
                                                <ErrorMessage name="addressLine2" component="div" className="text-darkred text-sm font-medium " />
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="w-[50%]">
                                                <Field
                                                    type="text"
                                                    name="city"
                                                    className="w-full p-3 border border-customOrange outline-none rounded"
                                                    placeholder="Town/City"
                                                    disabled={diabledForm}
                                                />
                                                <ErrorMessage name="city" component="div" className="text-darkred text-sm font-medium " />
                                            </div>
                                            <div className="w-[50%]">
                                                <Field
                                                    type="text"
                                                    name="state"
                                                    className="w-full p-3 border border-customOrange outline-none rounded"
                                                    placeholder="State/Province/Territory"
                                                    disabled={diabledForm}
                                                />
                                                <ErrorMessage name="state" component="div" className="text-darkred text-sm font-medium " />
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="w-[50%]">
                                                <Field
                                                    type="text"
                                                    name="zipCode"
                                                    className="w-full p-3 border border-customOrange outline-none rounded"
                                                    placeholder="Postal Code"
                                                    disabled={diabledForm}
                                                />
                                                <ErrorMessage name="zipCode" component="div" className="text-darkred text-sm font-medium " />
                                            </div>
                                            <div className="w-[50%]">
                                                <Field
                                                    type="text"
                                                    name="gpsLocation"
                                                    className="w-full p-3 border border-customOrange outline-none rounded"
                                                    placeholder="Add GPS Location"
                                                    disabled={diabledForm}
                                                />
                                            </div>
                                        </div>



                                    </div>













                                </div>
                            </div>

                            <div className=" flex flex-col gap-4">
                                {/* <label className="block text-gray-600 mb-2">Business Entity Registration Country</label>
                                <Field as="select" name="businessEntityRegistrationCountry" className="w-full p-3 border border-customOrange outline-none rounded">
                                    <option value="India">India</option>
                                </Field> */}
                                <div className="w-[70%] ">
                                    <div>
                                        <label className="block text-gray-600 mb-2">Email</label>
                                        <div className="flex w-full"> <Field
                                            type="email"
                                            name="email"
                                            className="w-full p-3 border border-customOrange outline-none rounded"
                                            placeholder="Email ID"
                                        // disabled={localStorageUtil.getItem("emailverify") == "Email is Verified" ? true : false}
                                        />



                                            {localStorageUtil.getItem("emailverify") !== "Email is Verified" ? <button type="button" className="ml-2 border border-customOrange text-[#FF9F08] py-2 px-4 rounded-md flex-grow"  disabled={diabledForm} onClick={(event) => {


                                                fetchDocumentDetails("email", values, { setValues }, setFieldValue)




                                            }




                                            }


                                            >
                                                Verify
                                            </button> :


                                                <button type="button" className=" pl-0 lg:py-3 lg:px-6 text-[#FF9F08]"



                                                >
                                                    Email is Verified
                                                </button>}
                                        </div>
                                    </div>
                                    <ErrorMessage name="email" component="div" className="text-darkred text-sm font-medium " />
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
                                                disabled={diabledForm}
                                            />
                                            <CustomRadioButton
                                                id="landline"
                                                name="contact"
                                                value="landline"
                                                checked={selectedValue === "landline"}
                                                onChange={(e) => handleRadioChange(e, setFieldValue)}
                                                label="Landline"
                                                disabled={diabledForm}
                                            />
                                            <CustomRadioButton
                                                id="both"
                                                name="contact"
                                                value="both"
                                                checked={selectedValue === "both"}
                                                onChange={(e) => handleRadioChange(e, setFieldValue)}
                                                label="Both"
                                                disabled={diabledForm}
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
                                                disabled={diabledForm}
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
                                                disabled={diabledForm}
                                                onChange={(e) => {
                                                    setVerify("");
                                                    localStorage.removeItem("mobileverifybusiness");// Clear localStorage when the mobile number changes
                                                    setFieldValue("mobileNumber", e.target.value);
                                                }}
                                            // disabled={localStorageUtil.getItem("mobileverifybusiness")=="Mobile is Verified" ? true :false}
                                            />
                                            {localStorageUtil.getItem("mobileverifybusiness") !== "Mobile is Verified" ? <button type="button" className=" pl-0 lg:py-3 lg:px-6 text-[#FF9F08]"  disabled={diabledForm} onClick={(event) => {


                                                fetchDocumentDetails("mobileNumber", values, { setValues }, setFieldValue)




                                            }




                                            }


                                            >
                                                Verify
                                            </button> :
                                                <VerifiedIcon width={80} height={80} fill="green" />

                                                // <button type="button" className=" pl-0 lg:py-3 lg:px-6 text-[#FF9F08]"



                                                // >
                                                //     MobileNumber is Verified
                                                // </button>

                                            }

                                        </div>
                                        <ErrorMessage name="mobileNumber" component="div" className="text-darkred text-sm font-medium " />
                                    </div>
                                ) : selectedValue === "landline" ? (
                                    <div>
                                        <label className="block text-gray-600 mb-2" htmlFor="landlineNumber">
                                            Landline Number
                                        </label>
                                        <div className=" items-center">
                                            <Field
                                                className="w-full p-3 border border-customOrange outline-none rounded"
                                                type="text"
                                                name="landlineNumber"
                                                placeholder="Landline Number"
                                                disabled={diabledForm}
                                            />
                                            <ErrorMessage name="landlineNumber" component="div" className="text-darkred text-sm font-medium " />
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
                                                    disabled={diabledForm}
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
                                                    disabled={diabledForm}
                                                />
                                            </div><div>
                                                <ErrorMessage name="mobileNumber" component="div" className="text-darkred text-sm font-medium " />
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
                                                    disabled={diabledForm}
                                                /></div><div>
                                                <ErrorMessage name="landlineNumber" component="div" className="text-darkred text-sm font-medium " />
                                            </div>
                                        </div>
                                    </div>
                                )}</div>

                                <ErrorMessage name="contactNumber" component="div" className="text-darkred text-sm font-medium " />


                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-2">
                            <div >
                                <label className="block text-gray-600 mb-2">Upload Business Logo</label>
                                <input
                                    type="file"
                                    name="businessLogo"
                                    accept=".pdf"
                                    onChange={(event) => handleFileChange(event, setFieldValue, "businessLogo")}
                                    className="w-full p-3 border border-customOrange outline-none rounded"
                                    disabled={diabledForm}
                                />
                                <ErrorMessage name="businessLogo" component="div" className="text-darkred text-sm font-medium " />

                                {values.businessLogo && <p className="text-sm mt-1"> {values.businessLogo.name.includes("https") ?


<p className="text-sm mt-1">
    File: <a
        href={businessDetails.businessLogo.name}
        target="_blank"
        rel="noopener noreferrer"
        className="text-customBlue underline">
        Link
    </a>
</p> : <p className="text-sm mt-1">File: {values.businessLogo.name}</p>


}</p>}
                            </div>


                            <div>
                                <label className="block text-gray-600 mb-2">GST Document Upload</label>
                                <div className="flex">
                                    <input
                                        type="file"
                                        name="gstdocument"
                                        accept=".pdf"
                                        onChange={(event) => handleFileChange(event, setFieldValue, "gstdocument")}
                                        className="w-full p-3 border border-customOrange outline-none rounded"
                                        disabled={diabledForm}
                                    />
                                </div>
                                <ErrorMessage name="gstdocument" component="div" className="text-darkred text-sm font-medium " />
                                {values.gstdocument && <p className="text-sm mt-1"> {values.gstdocument.name.includes("https") ?


                                    <p className="text-sm mt-1">
                                        File: <a
                                            href={businessDetails.gstdocument.name}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-customBlue underline">
                                            Link
                                        </a>
                                    </p> : <p className="text-sm mt-1">File: {values.gstdocument.name}</p>


                                }</p>}
                            </div>
                            <div>
                                <label className="block text-gray-600 mb-2">CIN Document Upload</label>
                                <div className="flex">
                                    <input
                                        type="file"
                                        name="cindocument"
                                        accept=".pdf"
                                        onChange={(event) => handleFileChange(event, setFieldValue, "cindocument")}
                                        className="w-full p-3 border border-customOrange outline-none rounded"
                                        disabled={diabledForm}
                                    />
                                </div>
                                <ErrorMessage name="cindocument" component="div" className="text-darkred text-sm font-medium " />
                                {values.cindocument && <p className="text-sm mt-1"> {values.cindocument.name.includes("https") ?


                                    <p className="text-sm mt-1">
                                        File: <a
                                            href={businessDetails.cindocument.name}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-customBlue underline">
                                            Link
                                        </a>
                                    </p> : <p className="text-sm mt-1">File: {values.cindocument.name}</p>


                                }</p>}

                            </div>
                            <div>
                                <label className="block text-gray-600 mb-2">PAN Document Upload</label>
                                <div className="flex">
                                    <input
                                        type="file"
                                        name="pandocument"
                                        accept=".pdf"
                                        onChange={(event) => handleFileChange(event, setFieldValue, "pandocument")}
                                        className="w-full p-3 border border-customOrange outline-none rounded"
                                        disabled={diabledForm}
                                    />
                                </div>
                                <ErrorMessage name="pandocument" component="div" className="text-darkred text-sm font-medium " />
                                {values.pandocument && <p className="text-sm mt-1"> {values.pandocument.name.includes("https") ?


                                    <p className="text-sm mt-1">
                                        File: <a
                                            href={businessDetails.pandocument.name}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-customBlue underline">
                                            Link
                                        </a>
                                    </p> : <p className="text-sm mt-1">File: {values.pandocument.name}</p>


                                }</p>}


                            </div>



                            {





                            }

                        </div>



                        <div className="flex justify-between">  <button
                            type="button"
                            className="mt-6 p-3 bg-customOrange text-white rounded" onClick={() => onSubmitBusiness(values)}
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
                    <OTPModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onSubmitOTP={(otp) => handleSubmitOTP({ setValues, validateForm, setFieldValue }, otp, values)}

                    />

                </Form>
            )}
        </Formik>
    );
};

export default BusinessTabForm;





