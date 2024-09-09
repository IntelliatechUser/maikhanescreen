


import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomRadioButton from "../../CommonComponents/CustomRadioButton";
import useStore from "../../store/UnitDetail"; // Adjust the import based on your store file location
import useAuthStore from "../../store/useAuthStore";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import businessLogicStore from "../../store/BusinessLogicStore"
import localStorageUtil from "../../utility/utility";
const LicenseTabForm = ({ onSubmitLicence }) => {
    const { licenseForm, setLicenseForm, unitDetails, businessDetails, ownerDetails } = useStore();
    const { resetUnitDetails, resetLicenseDetails, resetOwnerDetails, resetBusinessDetails } = useStore();

    const { diabledForm, currentFlow } = businessLogicStore();
    const navigate = useNavigate();
    const initialValues = {
        licenseNumber: licenseForm.licenseNumber || '',
        validFrom: licenseForm.validFrom || '',
        validUpto: licenseForm.validUpto || '',
        licenseCategory: licenseForm.licenseCategory || '',
        issuingAuthority: licenseForm.issuingAuthority || '',
        issuingAuthorityCountry: licenseForm.issuingAuthorityCountry || 'IND',
        licenseOwner: licenseForm.licenseOwner || 'licenseOwner',
        licenseCertificate: licenseForm.licenseCertificate || '',
    };

    const validationSchema = Yup.object({
        licenseNumber: Yup.string()
            .required('License Number is required')
            .matches(/^\d+$/, 'License Number must be only digits')
            .min(8, 'License Number must be at least 8 digits long')
            .max(12, 'License Number must be at most 12 digits long'),
        // validFrom: Yup.date().required('Valid From is required'),
        // validUpto: Yup.date().required('Valid Upto is required'),
        // licenseCategory: Yup.string().required('License Category/Type Name is required'),
        // issuingAuthority: Yup.string().required('License Issuing Authority is required'),
        // licenseOwner: Yup.string().required('License Owner details are required'),
        licenseCertificate: Yup.mixed().required('Liquor Service License Certificate is required'),
    });
    const handleFileChange = (event, setFieldValue, fieldName) => {

        console.log(">>>>>>>", fieldName);
        const file = event.currentTarget.files[0];
        console.log(">>>>>>>>>>licenceform licence certificate", file);
        if (file) {
            setFieldValue(fieldName, file);
        }
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values) => {


                let submitforregistration = document.activeElement.id
                if ("submitforregistration" == submitforregistration) {
                    // alert("running");
                    setLicenseForm(values);

                    // alert("api merchant");
                    console.log(">>>>>>>>>>>>>>>>>>>>>unitDetails", unitDetails);
                    console.log(">>>>>>>>>>>>>>>>>>>>>businessDetails", businessDetails);
                    console.log(">>>>>>>>>>>>>>>>>>>>>ownerDetails", ownerDetails);
                    console.log(">>>>>>>>>>>>>>>>>>>>>licenseForm", licenseForm);

                    console.log(">>>>>>>>>>>>>>>>>>values.From", values?.validFrom);
                    console.log(">>>>>>>>>>>>>>>>>>values.validUpto", values?.validUpto);

                    let merchantsignup = {
                        businessUnitDetailDto: {
                            "unitName": unitDetails?.unitName,
                            "businessCategory": unitDetails?.categorySelected,
                            "ownershipMode": unitDetails?.categorySelected,
                            "email": businessDetails?.email,
                            "isEmail": true,
                            "contactNoType": businessDetails?.contact,
                            "contact_no": businessDetails?.mobileNumber || businessDetails?.landlineNumber,
                            "isContactNo": true,
                            "registerCountry": unitDetails?.unitRegistrationCountry,
                            "society": "Beachside",
                            "locality": "Island Haven",
                            "registerAddress": unitDetails?.address,
                            "shopFor": ["Accommodation", "Dining", "Tours"],
                            "shopCategory": unitDetails?.shopCategory,
                            "openTime": unitDetails?.openTime,
                            "closeTime": unitDetails?.closeTime,
                            "paymentMode": ["Credit Card", "Debit Card", "Cash", "Online Payment"],
                            "photoIdType": businessDetails.idType,
                            "photoIdNo": businessDetails.idDocumentNumber,

                            "legalBusinessName": businessDetails?.legallyRegisteredName,
                            "country": businessDetails?.businessEntityRegistrationCountry || "",
                            "address1": businessDetails?.addressLine1,
                            "address2": businessDetails?.addressLine2,
                            "city": businessDetails?.city,
                            "state": businessDetails?.state,
                            "postalCode": "20222",
                            "gpsLocation": "4.1755, 73.5094",
                            "postalAddress": businessDetails?.zipCode,

                            "users": ownerDetails





                            // [
                            //   {
                            //     "name": ownerDetails?.name,
                            //     "mobileNo": ownerDetails?.mobileNumber || ownerDetails?.landlineNumber,
                            //     "isNoVerified": true,
                            //     "contactNoType": ownerDetails?.contact,
                            //     "dateOfBirth": ownerDetails?.dob,
                            //     "email": ownerDetails?.email,
                            //     "isEmail": true,
                            //     "idType":  ownerDetails?.idType,
                            //     "documentNo": ownerDetails?.idDocumentNumber,
                            //     "isDocVerified": true,
                            //     "status": "Active",
                            //     "role": "Owner",
                            //     "designation":ownerDetails?.designation
                            // }
                            // //   },
                            // //   {
                            // //     "name": "Jane Smith",
                            // //     "mobileNo": "0987654321",
                            // //     "isNoVerified": false,
                            // //     "contactNoType": "Mobile",
                            // //     "dateOfBirth": "1990-05-22",
                            // //     "email": "jane.smith@oceanviewresort.com",
                            // //     "isEmail": true,
                            // //     "idType": "Driver's License",
                            // //     "documentNo": "DL98765432",
                            // //     "isDocVerified": false,
                            // //     "status": "Pending",
                            // //     "role": "Owner"
                            // //   }
                            // ]


                            ,
                            "currencies": [
                                {
                                    "currencyAccepted": unitDetails?.acceptedCurrency,
                                    "country": unitDetails?.unitRegistrationCountry
                                },
                                {
                                    "currencyAccepted": "MVR",
                                    "country": "Maldives"
                                }
                            ],
                            "members": [
                                {
                                    "name": "Alice Brown",
                                    "email": "alice.brown@oceanviewresort.com",
                                    "dateOfBirth": "1985-03-30",
                                    "designation": "General Manager",
                                    "contactNo": "1231231235"
                                },
                                {
                                    "name": "Bob White",
                                    "email": "bob.white@oceanviewresort.com",
                                    "dateOfBirth": "1988-11-05",
                                    "designation": "Head Chef",
                                    "contactNo": "3213214328"
                                }
                            ],
                            "licenseDto": [
                                {
                                    "licenseCategory": values?.licenseCategory || "",
                                    "licenseNo": values?.licenseNumber,
                                    "validFrom": values?.validFrom,
                                    "validTo": values?.validUpto,
                                    // "validFrom":  "2023-01-01",
                                    // "validTo": "2025-01-01",
                                    "issuingAuthority": values?.issuingAuthority,

                                    "ownerDetail": values?.licenseOwner
                                }
                            ]
                        },
                        logo: businessDetails.businessLogo,
                        uploadGst: businessDetails.gstdocument,
                        uploadCin: businessDetails.cindocument,
                        uploadpan: businessDetails.pandocument,
                        certificate: values.licenseCertificate,


                    }



                    let token = localStorageUtil.getItem("token")

                    if (!(businessDetails.businessLogo instanceof File) || !(businessDetails.gstdocument instanceof File) || !(businessDetails.cindocument instanceof File) || !(values.licenseCertificate instanceof File)) {
                        console.error('One or more files are not valid File objects');
                        return;
                    }
                    console.log(">>>>>>>>>>>>>merchantsignup", merchantsignup);

                    const formData = new FormData();
                    const jsonBlob = new Blob([JSON.stringify(merchantsignup.businessUnitDetailDto)], { type: 'application/json' });
                    formData.append('businessUnitDetailDto', jsonBlob);
                    formData.append('logo', businessDetails.businessLogo);
                    formData.append('uploadGst', businessDetails.gstdocument);
                    formData.append('uploadCin', businessDetails.cindocument);
                    formData.append('uploadPan', businessDetails.pandocument);
                    formData.append('certificate', values.licenseCertificate);
                    // alert("api runs1");
                    try {
                        const response = await axios.post('http://43.204.36.147:8067/businessController/registerBusiness', formData, {
                            headers: {
                                'Accept': 'application/json, text/plain, */*',
                                // 'Accept-Language': 'en-US,en;q=0.9',
                                'Authorization': `Bearer ${token}`,
                                // 'Connection': 'keep-alive',

                                // 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
                                'Content-Type': 'multipart/form-data'
                            },
                        });
                        // alert("api runs2");
                        console.log('File uploaded successfully', response.data);
                        toast.success("Business Registered")
                        //=============================================

                        // navigate('/dashboard', { replace: true });

                        // setUser({});
                        resetUnitDetails();
                        resetLicenseDetails();
                        resetOwnerDetails();
                        resetBusinessDetails();
                        // localStorage.removeItem("token");
                        localStorage.removeItem("mobileverify");
                        localStorage.removeItem("emailverify");
                        localStorage.removeItem("mobileverifybusiness");
                        localStorage.removeItem("mobileverifyowner");

                        // localStorage.removeItem("profile");

                        //=======================================


                        navigate("/dashboard");

                    } catch (error) {

                        if (error.code === 'ERR_NETWORK') {
                            console.error('Network error: Please check if the server is running and accessible.');
                        } else {
                            console.error('Error in Uploading Pdf files', error);
                        }

                    }


                }

            }}
        >
            {({ setFieldValue, values }) => (
                <Form>
                    <div className="mt-15 mr-7">
                        <h2 className="text-lg font-semibold">Please Provide The Liquor Service License Details</h2><br />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="grid-cols-1 md:grid-cols-2">
                                <div>
                                    <label className="block text-gray-700 mb-2" htmlFor="licenseNumber">License Number</label>
                                    <Field
                                        type="text"
                                        name="licenseNumber"
                                        className="w-full p-3 border border-customOrange outline-none rounded"
                                        placeholder='ABCDESZ3245'
                                        disabled={diabledForm}
                                    />
                                    <ErrorMessage name="licenseNumber" component="div" className="text-darkred text-sm font-medium" />
                                </div>
                                <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                    <div className='flex items-center justify-between w-full gap-2 mt-5'>
                                        <div className='flex flex-col gap'>
                                            <label className="block text-gray-700 mb-2" htmlFor="validFrom">Valid From</label>
                                            <Field
                                                type="date"
                                                name="validFrom"
                                                className="w-full p-3 border border-customOrange outline-none rounded"
                                                disabled={diabledForm}
                                            />
                                            <ErrorMessage name="validFrom" component="div" className="text-darkred text-sm font-medium" />
                                        </div>
                                        <div className='flex flex-col gap'>
                                            <label className="block text-gray-700 mb-2" htmlFor="validUpto">Valid Upto</label>
                                            <Field
                                                type="date"
                                                name="validUpto"
                                                className="w-full p-3 border border-customOrange outline-none rounded"
                                                disabled={diabledForm}
                                            />
                                            <ErrorMessage name="validUpto" component="div" className="text-darkred text-sm font-medium" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                                <label className="block text-gray-700 mb-2" htmlFor="issuingAuthority">License Issuing Authority</label>
                                <div className="flex items-center mt-1">
                                    <Field
                                        type="text"
                                        name="issuingAuthority"
                                        className="w-full p-3 border border-customOrange outline-none rounded"
                                        placeholder="Enter the Name of Issuing Authority"
                                        disabled={diabledForm}
                                    />
                                    <Field as="select" name="issuingAuthorityCountry" className="p-3 border border-customOrange outline-none rounded ml-2 block"
                                        disabled={diabledForm}>
                                        <option value="">Select Country</option>

                                        <option value="IND">IND</option>
                                        {/* Add more options as needed */}
                                    </Field>
                                </div>
                                <ErrorMessage name="issuingAuthority" component="div" className="text-darkred text-sm font-medium" />

                                <div className='mt-5'>
                                    <label className="block text-gray-700 mb-2" htmlFor="licenseCertificate">Liquor Service License Certificate</label>

                                    <input
                                        type="file"
                                        name="licenseCertificate"
                                      
                                        onChange={(event) => handleFileChange(event, setFieldValue, "licenseCertificate")}
                                        className="w-full p-3 border border-customOrange outline-none rounded"
                                        disabled={diabledForm}
                                    />
                                    <ErrorMessage name="licenseCertificate" component="div" className="text-darkred text-sm font-medium" />




                                    {values.licenseCertificate && <p className="text-sm mt-1"> {values.licenseCertificate.name.includes("https") ?


                                        <p className="text-sm mt-1">
                                            File: <a
                                                href={licenseForm.licenseCertificate.name}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-customBlue underline">
                                                Link
                                            </a>
                                        </p> : <p className="text-sm mt-1">File: {values.licenseCertificate.name}</p>


                                    }</p>}
















                                </div>
                            </div>
                            <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                <label className="block text-gray-600 mb-2">License Owner Details</label>
                                <div className='flex flex-col gap-2'>
                                    <CustomRadioButton
                                        id="licenseOwner"
                                        name="licenseOwner"
                                        value="licenseOwner"
                                        checked={values.licenseOwner === 'licenseOwner'}
                                        onChange={() => setFieldValue('licenseOwner', 'licenseOwner')}
                                        label={`License Ownership is with Business Organization Business organization`}
                                        disabled={diabledForm}
                                    />
                                    <CustomRadioButton
                                        id="ownerGroupMember"
                                        name="licenseOwner"
                                        value="ownerGroupMember"
                                        checked={values.licenseOwner === 'ownerGroupMember'}
                                        onChange={() => setFieldValue('licenseOwner', 'ownerGroupMember')}
                                        label={'License Ownership is with Owner-Group Member Owner-Group Member'}
                                        disabled={diabledForm}
                                    />
                                    <CustomRadioButton
                                        id="thirdParty"
                                        name="licenseOwner"
                                        value="thirdParty"
                                        checked={values.licenseOwner === 'thirdParty'}
                                        onChange={() => setFieldValue('licenseOwner', 'thirdParty')}
                                        label="License Ownership is with Third-Party"
                                        disabled={diabledForm}
                                    />
                                    <ErrorMessage name="licenseOwner" component="div" className="text-darkred text-sm font-medium" />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between"><button
                            type="button"
                            className="mt-4 py-2 px-4 bg-[#FF9F08] text-white rounded-md" onClick={() => onSubmitLicence(values)}
                        >
                            Back
                        </button>
                            {currentFlow == "add" && <button
                                type="submit" id="submitforregistration"
                                className="mt-4 py-2 px-4 bg-[#FF9F08] text-white rounded-md"
                            >
                                Submit For Registration
                            </button>}
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default LicenseTabForm;
