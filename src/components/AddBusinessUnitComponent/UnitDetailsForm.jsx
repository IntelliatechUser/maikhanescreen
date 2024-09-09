import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomCheckbox from "../../CommonComponents/CustomCheckBox";
import CustomRadioButton from "../../CommonComponents/CustomRadioButton";
import useStore from "../../store/UnitDetail";
import { useEffect } from "react";
import OTPModal from '../../CommonComponents/Modal';
import axios from "axios";
import { useState } from "react";
import localStorageUtil from "../../utility/utility";
import businessLogicStore from "../../store/BusinessLogicStore";
import VerifiedIcon from '../../assets/icons/VerifiedIcon.jsx';
const UnitDetails = ({ onNext}) => {
    const [category, setCategorySelected] = useState("Select Category");
  
    const [verify, setVerify] = useState("");
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const { unitDetails, setUnitDetails } = useStore();
    const [shopFor, setShopFor] = useState(unitDetails.shopFor);
    const [selectedValue, setSelectedValue] = React.useState(unitDetails.contactType || "mobile");
    const [selectedPaymentMode, setSelectedPaymentMode] = React.useState(unitDetails.paymentMode || "cash");
    const handleRadioChange = (event, setFieldValue) => {
        setSelectedValue(event.target.value);
        setFieldValue("contactType", event.target.value);
    };

    const { currentStep, setCurrentStep, currentTab, setCurrentTab,currentFlow,diabledForm } = businessLogicStore();
    const handleCheckboxChange = (event, setFieldValue) => {
        const { value, checked } = event.target;
        console.log(">>>>>>>>>>>>shopFor", shopFor);
        let shopsfors = checked
            ? [...shopFor, value]
            : shopFor.filter(item => item !== value)

        setShopFor(shopsfors);
        setFieldValue("shopFor", checked
            ? [...shopFor, value]
            : shopFor.filter(item => item !== value)
        );

    };
  

    const fetchDocumentDetails = async (countryCode, mobileNumber, actions, setFieldValue) => {

        setIsModalOpen(true);
        try {
            let token = localStorageUtil.getItem("token");
            const response = await axios.get('http://43.204.36.147:8067/otp/generateOtpForUser', {
                params: {
                    countryCode: "+91",
                    mobileNumber: mobileNumber
                },
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });





        } catch (error) {
            console.error('Error in getting otp', error);
        }
    };
    const handleSubmitOTP = async (actions, otp, mobileNumber) => {
        let token = localStorageUtil.getItem("token");
        try {
            const response = await axios.post(
                'http://43.204.36.147:8067/otp/validateOtpForUser',
                {
                    mobileNumber: mobileNumber,
                    otp: otp
                },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
            const data = response?.data;
            console.log(">>>>>>>>>>>>responseData", data.status);
            if (data.status == 200) {
               
                setVerify("Mobile Verified");
                localStorageUtil.setItem("mobileverify", "Mobile is Verified")
            }



        } catch (error) {
            console.error("Error verifying OTP:", error);
        } finally {
            setIsModalOpen(false);
        }




    };
    const handlePaymentModeChange = (event, setFieldValue) => {
        setSelectedPaymentMode(event.target.value);
        setFieldValue("paymentMode", event.target.value);
    };

    const validationSchema = Yup.object({
        unitRegistrationCountry: Yup.string().required("Required"),
        categorySelected: Yup.string().required("Required"),
        ownershipMode: Yup.string().required("Required"),
        unitName: Yup.string().required("Required"),
        shopFor: Yup.array()
            .min(1, "Select at least one option")
            .required("Required"), // Add this validation
        subarea: Yup.string().required("Required"),
        locality: Yup.string().required("Required"),
        shopCategory: Yup.string().required("Required"),
        address: Yup.string().required("Required"),
        acceptedCurrency: Yup.string().required("Required"),
        openTime: Yup.string().required("Required"),
        closeTime: Yup.string().required("Required"),
        contactType: Yup.string().required("Required"),
        mobileNumber: Yup.string().test(
            'mobileNumberValidation',
            'Mobile number is required ',
            function (value) {
                const { contactType } = this.parent;
                if ((contactType === 'mobile' || contactType === 'both') ) {
                    
                    return !!value;
                }
                
                return true;
            }
        ).matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits')
            .nullable(), // Ensures validation only runs if the field is not empty,
        landlineNumber: Yup.string().test(
            'landlineNumberValidation',
            'Landline number is required ',
            function (value) {
                const { contactType } = this.parent;
                if (contactType === 'landline' || contactType === 'both') {
                    return !!value;
                }
                return true;
            }
        ).matches(/^[0-9]{10}$/, 'Landline number must be exactly 10 digits')
            .nullable(),

    });
console.log(">>>>>>>>>>>>>>>>>>>>>>>>shopFor",shopFor,diabledForm);
    return (
        <Formik
            initialValues={unitDetails}
            
            validationSchema={validationSchema}
            validateOnChange={true}
            validateOnBlur={true}
            validateOnMount={true}
            onSubmit={(values) => {
                console.log(">>>>>>>>>>>>>>>>values.shopFor", values);
                values.shopFor = [...shopFor];
                // onNext(values);

                setCurrentTab(2);
                setUnitDetails(values);
            }}
        >
            {({ errors, touched, values, setFieldValue, setValues, validateForm }) => (
                <Form>
                    {/* <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
						Unit Detailsdd
					</h3> */}
                    <div className="grid grid-cols-1 text-sm md:grid-cols-3 gap-6">
                        

                        <div>
                            <label className="block text-gray-600 mb-2" htmlFor="unitName">
                                Business Unit Name
                            </label>
                            <Field className="w-full p-3 border border-customOrange outline-none rounded" type="text" name="unitName" placeholder={category}
                            disabled={diabledForm} />
                            <ErrorMessage name="unitName" component="div" className="text-darkred text-sm font-medium " />
                        </div>

                        <div>
                            <label className="block text-gray mb-2" htmlFor="shopFor">
                                Shop For
                            </label>
                            <div
                                role="group"
                                aria-labelledby="checkbox-group"
                                className="flex flex-col items-start gap-2 lg:flex-row lg:gap-2 lg:items-center"
                            >
                                <div className="flex gap-2">
                                    <CustomCheckbox
                                        id="Accommodation"
                                        name="shopFor"
                                        value="Accommodation"
                                        checked={values.shopFor.includes("Accommodation")}
                                        onChange={(e) => handleCheckboxChange(e, setFieldValue)}
                                        label="Accommodation"
                                        disabled={diabledForm}
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <CustomCheckbox
                                        id="Dining"
                                        name="shopFor"
                                        value="Dining"
                                        checked={values.shopFor.includes("Dining")}
                                        onChange={(e) => handleCheckboxChange(e, setFieldValue)}
                                        label="Dining"
                                        disabled={diabledForm}
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <CustomCheckbox
                                        id="wine"
                                        name="shopFor"
                                        value="Tours"
                                        checked={values.shopFor.includes("Tours")}
                                        onChange={(e) => handleCheckboxChange(e, setFieldValue)}
                                        label="Tours"
                                        disabled={diabledForm}
                                    />
                                </div>
                            </div>
                            <ErrorMessage
                                name="shopFor"
                                component="div"
                                className="text-darkred text-sm font-medium "
                            />
                        </div>

                        <div>
                            <label className="block text-gray-600 mb-2" htmlFor="subarea">
                                Subarea/Society/Landmark
                            </label>
                            <Field className="w-full p-3 border border-customOrange outline-none rounded" type="text" name="subarea" placeholder="Enter Area Name"  disabled={diabledForm} />
                            <ErrorMessage name="subarea" component="div" className="text-darkred text-sm font-medium " />
                        </div>

                        <div>
                            <label className="block text-gray-600 mb-2" htmlFor="locality">
                                Locality/Area Name
                            </label>
                            <Field className="w-full p-3 border border-customOrange outline-none rounded" type="text" name="locality" placeholder="Enter Area Name" disabled={diabledForm} />
                            <ErrorMessage name="locality" component="div" className="text-darkred text-sm font-medium " />
                        </div>

                        <div>
                            <label className="block text-gray-600 mb-2" htmlFor="shopCategory">
                                Shop Category
                            </label>
                            <Field as="select" name="shopCategory" className="w-full p-3 border border-customOrange outline-none rounded" disabled={diabledForm} >
                                <option value="">Select Shop Category</option>
                                <option value="Counter Store">Counter Store</option>
                                <option value="Online Store">Online Store</option>
                            </Field>
                            <ErrorMessage name="shopCategory" component="div" className="text-darkred text-sm font-medium " />
                        </div>

                        <div>
                            <label className="block text-gray-600 mb-2" htmlFor="address">
                                Address
                            </label>
                            <Field className="w-full p-3 border border-customOrange outline-none rounded" type="text" name="address" placeholder="Select Address" disabled={diabledForm}  />
                            <ErrorMessage name="address" component="div" className="text-darkred text-sm font-medium " />
                        </div>

                        <div className="grid-cols-1 md:grid-cols-3 ">
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="acceptedCurrency">
                                    Accepted Currency
                                </label>
                                <Field as="select" name="acceptedCurrency" className="w-full p-3 border border-customOrange outline-none rounded" disabled={diabledForm} >
                                    <option value="">Select Currency</option>
                                    <option value="INR">Indian Rupees : INR</option>
                                    <option value="EUR">Euro : EUR</option>
                                    <option value="ZAR">South African Rand : ZAR</option>
                                    <option value="USD">American Dollars : USD</option>
                                    <option value="GBP">British Pounds : GBD</option>
                                    <option value="JPY">Japanese Yen : JPY</option>
                                </Field>
                                <ErrorMessage name="acceptedCurrency" component="div" className="text-darkred text-sm font-medium " />
                            </div>
                        </div>

                        <div className="grid-cols-1 md:grid-cols-2 gap-6 ">
                            <div className="flex flex-col lg:flex-row w-full gap-6">
                                <div className="w-full">
                                    <label className="block text-gray-700 mb-2" htmlFor="openTime">
                                        Open Time
                                    </label>
                                    <Field className="w-full p-3 border border-customOrange outline-none rounded" type="time" name="openTime" disabled={diabledForm}  />
                                    <ErrorMessage name="openTime" component="div" className="text-darkred text-sm font-medium " />
                                </div>
                                <div className="w-full">
                                    <label className="block text-gray-700 mb-2" htmlFor="closeTime">
                                        Close Time
                                    </label>
                                    <Field className="w-full p-3 border border-customOrange outline-none rounded" type="time" name="closeTime" disabled={diabledForm} />
                                    <ErrorMessage name="closeTime" component="div" className="text-darkred text-sm font-medium " />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 text-sm md:grid-cols-3 gap-6">
                                {/* Existing form fields here */}

                                {/* Payment Mode Section */}
                                <div className="md:col-span-2">
                                    <label className="block text-gray-600 mb-2" htmlFor="paymentMode">
                                        Payment Mode
                                    </label>
                                    <div className="flex flex-col lg:flex-row gap-2">
                                        <CustomRadioButton
                                            id="cash"
                                            name="paymentMode"
                                            value="cash"
                                            checked={selectedPaymentMode === "cash"}
                                            onChange={(e) => handlePaymentModeChange(e, setFieldValue)}
                                            label="Cash"
                                            disabled={diabledForm} 
                                        />
                                        <CustomRadioButton
                                            id="card"
                                            name="paymentMode"
                                            value="card"
                                            checked={selectedPaymentMode === "card"}
                                            onChange={(e) => handlePaymentModeChange(e, setFieldValue)}
                                            label="Card"
                                            disabled={diabledForm} 
                                        />
                                        <CustomRadioButton
                                            id="mobile"
                                            name="paymentMode"
                                            value="mobile"
                                            checked={selectedPaymentMode === "mobile"}
                                            onChange={(e) => handlePaymentModeChange(e, setFieldValue)}
                                            label="Mobile"
                                            disabled={diabledForm} 
                                        />
                                    </div>
                                    <ErrorMessage name="paymentMode" component="div" className="text-darkred text-sm font-medium " />
                                </div>

                                {/* Existing form fields here */}

                            </div>
                        </div>

                        <div className="grid-cols-1 md:grid-cols-3">
                            <div>
                                <label className="block text-sm text-gray-600 mb-2" htmlFor="contactType">
                                    Unit/Reception Contact
                                    <span className="text-xs"> (Optional)</span>
                                </label>
                                <div className="flex items-center">
                                    <div className="flex flex-col gap-2 lg:flex-row">
                                        <CustomRadioButton
                                            id="mobile"
                                            name="contactType"
                                            value="mobile"
                                            checked={selectedValue === "mobile"}
                                            onChange={(e) => handleRadioChange(e, setFieldValue)}
                                            label="Mobile"
                                            disabled={diabledForm} 
                                        />
                                        <CustomRadioButton
                                            id="landline"
                                            name="contactType"
                                            value="landline"
                                            checked={selectedValue === "landline"}
                                            onChange={(e) => handleRadioChange(e, setFieldValue)}
                                            label="Landline"
                                            disabled={diabledForm} 
                                        />
                                        <CustomRadioButton
                                            id="both"
                                            name="contactType"
                                            value="both"
                                            checked={selectedValue === "both"}
                                            onChange={(e) => handleRadioChange(e, setFieldValue)}
                                            label="Both"
                                            disabled={diabledForm} 
                                        />
                                    </div>
                                </div>
                            </div>
                            {selectedValue === "mobile" ? (
                                <div className="mt-5">
                                    <label className="block text-gray-600 mb-2" htmlFor="mobileNumber">
                                        Mobile Number <br />
                                        <span className="text-xs">(OTP Verification Via SMS)</span>
                                    </label>
                                    <div className="flex flex-col items-start gap-2 lg:flex-row lg:gap-0 lg:items-center">
                                        <Field
                                            as="select"
                                            name="countryCode"
                                            className="p-3 border border-customOrange outline-none rounded mr-2" disabled={diabledForm} 
                                        >
                                            <option value="IND +91">IND +91</option>
                                            <option value="USA +1">USA +1</option>
                                            <option value="UK +44">UK +44</option>
                                        </Field>
                                        <Field
                                            className="w-full p-3 border border-customOrange outline-none rounded"
                                            type="text"
                                            name="mobileNumber"
                                            placeholder="Mobile Number" disabled={diabledForm} 
                                            onChange={(e) => {
                                                setVerify("");
                                                localStorage.removeItem("mobileverify");// Clear localStorage when the mobile number changes
                                                setFieldValue("mobileNumber", e.target.value);
                                            }}
                                        // disabled={localStorageUtil.getItem("mobileverify")=="Mobile is Verified" ? true :false}
                                        />
                                        {localStorageUtil.getItem("mobileverify") !== "Mobile is Verified" ? <button type="button" className=" pl-0 lg:py-3 lg:px-6 text-[#FF9F08]"  disabled={diabledForm} onClick={(event) => {


                                            fetchDocumentDetails(values.countryCode, values.mobileNumber, { setValues }, setFieldValue)




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
                                <div className="mt-5">
                                    <label className="block text-gray-600 mb-2" htmlFor="landlineNumber">
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
                            ) : (
                                <>
                                    <div className="mt-5">
                                        <label className="block text-gray-600 mb-2" htmlFor="mobileNumber">
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
                                            {/* <button className="ml-2 py-3 px-6 text-[#FF9F08]">
												Verify Number
											</button> */}
                                        </div>
                                        <ErrorMessage name="mobileNumber" component="div" className="text-darkred text-sm font-medium " />
                                    </div>
                                    <div className="mt-5">
                                        <label className="block text-gray-600 mb-2" htmlFor="landlineNumber">
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
                                </>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-between ">
                       {currentFlow=="add" && <button type="submit" className="btn-primary mt-6 text-white bg-customOrange px-6 py-3 border border-transparent rounded-md" onClick={() => {
                            setCurrentStep(1);
                            setCurrentTab(-1);
                        }}>
                            Back
                        </button>}
                       { currentFlow=="get" && <button type="submit" className="btn-primary mt-6 text-white  px-6 py-3 border border-transparent rounded-md" onClick={() => {
                           
                        }}>
                           
                        </button>}

                        <button type="submit" className="btn-primary mt-6 text-white bg-customOrange px-6 py-3 border border-transparent rounded-md">
                            Next
                        </button>


                    </div>
                    {/* <div className="mt-8 text-center">
                    <button
                           type="submit"
                          className="inline-flex justify-end items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-yellow-dark bg-customBlue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                   >
                          DDNext
                       </button>
                   </div> */}
                    <OTPModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onSubmitOTP={(otp) => handleSubmitOTP({ setValues, validateForm, setFieldValue }, otp, values.mobileNumber)}
                    />
                </Form>
            )}
        </Formik>
    );
};

export default UnitDetails;


