// import React from 'react';
// import CustomRadioButton from "../../CommonComponents/CustomRadioButton";

// const LicenseTabForm = () => {
//     const [selectedValue, setSelectedValue] = React.useState('mobile');

//     const handleRadioChange = (event) => {
//         setSelectedValue(event.target.value);
//     };

//     return (
//         <div className='mt-15 mr-7'>
//             <h2 className="text-lg font-semibold">Please Provide The Liquor Service License Details</h2><br />
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 <div className=" grid-cols-1 md:grid-cols-2">
//                     <div>
//                         <label className="block text-gray-700 mb-2" htmlFor="currency">License Number</label>
//                         <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" placeholder='ABCDESZ3245' />
//                     </div>
//                     <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//                         <div className='flex items-center justify-between w-full gap-2 mt-5'>
//                             <div className='flex flex-col gap'>
//                                 <label className="block text-gray-700 mb-2" htmlFor="currency">Valid From</label>
//                                 <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" />
//                             </div>
//                             <div className='flex flex-col gap'>
//                                 <label className="block text-gray-700 mb-2" htmlFor="currency">Valid Upto</label>
//                                 <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
//                     <div>
//                         <label className="block text-gray-700 mb-2" htmlFor="currency">License Category/Type Name</label>
//                         <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" placeholder='Describe The License Category Type' />
//                     </div>
//                     <div className='mt-5'>
//                         <label className="block text-gray-700 mb-2">License Issuing Authority</label>
//                         <div className="flex items-center mt-1">
//                             <input type="text" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Enter the Name of Issuing Authority" />
//                             <select className="p-3 border border-customOrange outline-none rounded ml-2 block">
//                                 <option>IND</option>
//                             </select>
//                         </div>
//                     </div>
//                 </div>
//                 <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//                     <label className="block text-gray-600 mb-2">License Owner Details</label>
//                     <div className='flex flex-col gap-2'>
//                         <CustomRadioButton
//                             id="licenseOwner"
//                             name="licenseOwner"
//                             value="licenseOwner"
//                             checked={selectedValue === 'licenseOwner'}
//                             onChange={handleRadioChange}
//                             label={`License Ownership is with Business Organization Business organization : Name goes here`}
//                         />
//                         <CustomRadioButton
//                             id="ownerGroupMember"
//                             name="licenseOwner"
//                             value="ownerGroupMember"
//                             checked={selectedValue === 'ownerGroupMember'}
//                             onChange={handleRadioChange}
//                             label={'License Ownership is with Owner-Group Member Owner-Group Member : Name goes here '}
//                         />
//                         <CustomRadioButton
//                             id="thirdParty"
//                             name="licenseOwner"
//                             value="thirdParty"
//                             checked={selectedValue === 'thirdParty'}
//                             onChange={handleRadioChange}
//                             label="License Ownership is with Third-Party"
//                         />
//                     </div>
//                 </div>
//             </div>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
//                 <div className='mt-5'>
//                     <label className="block text-gray-700 mb-2">Liquor Service License Certificate</label>
//                     <button className="mt-1 block bg-transparent border-2 border-[#FF9F08] text-[#FF9F08] py-2 px-4 rounded-md">Upload Certificate</button>
//                 </div>
//             </div>
//         </div >
//     );
// };

// export default LicenseTabForm;


import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomRadioButton from "../../CommonComponents/CustomRadioButton";
import useStore from "../../store/UnitDetail"; // Adjust the import based on your store file location

const LicenseTabForm = ({ onSubmitLicence }) => {
    const { licenseForm, setLicenseForm,unitDetails,businessDetails,ownerDetails } = useStore();

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
        // licenseNumber: Yup.string().required('License Number is required'),
        // validFrom: Yup.date().required('Valid From is required'),
        // validUpto: Yup.date().required('Valid Upto is required'),
        // licenseCategory: Yup.string().required('License Category/Type Name is required'),
        // issuingAuthority: Yup.string().required('License Issuing Authority is required'),
        // licenseOwner: Yup.string().required('License Owner details are required'),
        // licenseCertificate: Yup.mixed().required('Liquor Service License Certificate is required'),
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {

                let submitforregistration = document.activeElement.id
                if("submitforregistration"==submitforregistration){
                    console.log(">>>>>>>>>>>>>>>>>>>>>unitDetails",unitDetails);
                    console.log(">>>>>>>>>>>>>>>>>>>>>businessDetails",businessDetails);
                    console.log(">>>>>>>>>>>>>>>>>>>>>ownerDetails",ownerDetails);
                    console.log(">>>>>>>>>>>>>>>>>>>>>licenseForm",licenseForm);
                   let unitDetails= {
                        unitRegistrationCountry: "",
                        categorySelected: "",
                        ownershipMode: "",
                        unitName: "",
                        subarea: "",
                        locality: "",
                        shopCategory: "",
                        address: "",
                        acceptedCurrency: "",
                        openTime: "09:00",
                        closeTime: "23:45",
                        contactType: "mobile",
                        contactNumber: "",
                        paymentMode: "cash",
                       
                      }
                     let businessDetails= {
                        idType: '',
                        idDocumentNumber: '',
                        legallyRegisteredName: '',
                        businessEntityRegistrationCountry: 'India',
                        addressLine1: '',
                        addressLine2: '',
                        city: '',
                        state: '',
                        zipCode: '',
                        gpsLocation: '',
                        businessLogo: null,
                        email: '',
                        mobileNumber: '',   // Updated field name
                        contact: 'mobile',
                        landlineNumber: '' , 
                        gstdocument: null, 
                        cindocument: null, 
                        pandocument: null, 
                      }
               
                  let businessUnitDetailDto = {
                        unitName: "Ocean View Resort",
                        businessCategory: "Hospitality",
                        ownershipMode: "Private",
                        email: "contact@oceanviewresort.com",
                        isEmail: true,
                        contactNoType: "Mobile",
                        contact_no: "9876543210",
                        isContactNo: true,
                        registerCountry: "Maldives",
                        society: "Beachside",
                        locality: "Island Haven",
                        registerAddress: "456 Beach Road",
                        shopFor: ["Accommodation", "Dining", "Tours"],
                        shopCategory: "Luxury",
                        openTime: "24/7",
                        closeTime: "24/7",
                        paymentModepaymentModepaymentMode: ["Credit Card", "Debit Card", "Cash", "Online Payment"],
                        photoIdType: "Passport",
                        photoIdNo: "P987654321",
                        legalBusinessName: "Ocean View Resort Pvt Ltd",
                        country: "Maldives",
                        address1: "456 Beach Road",
                        address2: "Suite 200",
                        city: "Malé",
                        state: "North Malé Atoll",
                        postalCode: "20222",
                        gpsLocation: "4.1755, 73.5094",
                        postalAddress: "PO Box 5678",
                        logo: "oceanview_logo.png",
                        uploadGst: "gst_certificate_maldives.pdf",
                        uploadCin: "cin_certificate_maldives.pdf",
                        users: [
                          {
                            name: "John Doe",
                            mobileNo: "1234567890",
                            isNoVerified: true,
                            contactNoType: "Mobile",
                            dateOfBirth: "1980-07-15",
                            email: "john.doe@oceanviewresort.com",
                            isEmail: true,
                            idType: "Passport",
                            documentNo: "P123456789",
                            isDocVerified: true,
                            status: "Active",
                            role: "Manager"
                          },
                          {
                            name: "Jane Smith",
                            mobileNo: "0987654321",
                            isNoVerified: false,
                            contactNoType: "Mobile",
                            dateOfBirth: "1990-05-22",
                            email: "jane.smith@oceanviewresort.com",
                            isEmail: true,
                            idType: "Driver's License",
                            documentNo: "DL98765432",
                            isDocVerified: false,
                            status: "Pending",
                            role: "Receptionist"
                          }
                        ],
                        currencies: [
                          {
                            currencyAccepted: "USD",
                            country: "United States"
                          },
                          {
                            currencyAccepted: "MVR",
                            country: "Maldives"
                          }
                        ],
                        members: [
                          {
                            name: "Alice Brown",
                            email: "alice.brown@oceanviewresort.com",
                            dateOfBirth: "1985-03-30",
                            designation: "General Manager",
                            contactNo: "1231231234"
                          },
                          {
                            name: "Bob White",
                            email: "bob.white@oceanviewresort.com",
                            dateOfBirth: "1988-11-05",
                            designation: "Head Chef",
                            contactNo: "3213214321"
                          }
                        ],
                        licenseDto: [
                          {
                            licenseCategory: "Tourism",
                            licenseNo: 987654321,
                            validFrom: "2023-01-01",
                            validTo: "2025-01-01",
                            issuingAuthority: "Maldives Tourism Authority",
                            certificate: "tourism_license_certificate.pdf",
                            ownerDetail: "John Doe"
                          }
                        ]
                      }
                      
                }else{
                setLicenseForm(values);
                onSubmitLicence(values);
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
                                    />
                                    <ErrorMessage name="licenseNumber" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                                <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                    <div className='flex items-center justify-between w-full gap-2 mt-5'>
                                        <div className='flex flex-col gap'>
                                            <label className="block text-gray-700 mb-2" htmlFor="validFrom">Valid From</label>
                                            <Field
                                                type="date"
                                                name="validFrom"
                                                className="w-full p-3 border border-customOrange outline-none rounded"
                                            />
                                            <ErrorMessage name="validFrom" component="div" className="text-red-500 text-xs mt-1" />
                                        </div>
                                        <div className='flex flex-col gap'>
                                            <label className="block text-gray-700 mb-2" htmlFor="validUpto">Valid Upto</label>
                                            <Field
                                                type="date"
                                                name="validUpto"
                                                className="w-full p-3 border border-customOrange outline-none rounded"
                                            />
                                            <ErrorMessage name="validUpto" component="div" className="text-red-500 text-xs mt-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-gray-700 mb-2" htmlFor="licenseCategory">License Category/Type Name</label>
                                    <Field
                                        type="text"
                                        name="licenseCategory"
                                        className="w-full p-3 border border-customOrange outline-none rounded"
                                        placeholder='Describe The License Category Type'
                                    />
                                    <ErrorMessage name="licenseCategory" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                                <div className='mt-5'>
                                    <label className="block text-gray-700 mb-2" htmlFor="issuingAuthority">License Issuing Authority</label>
                                    <div className="flex items-center mt-1">
                                        <Field
                                            type="text"
                                            name="issuingAuthority"
                                            className="w-full p-3 border border-customOrange outline-none rounded"
                                            placeholder="Enter the Name of Issuing Authority"
                                        />
                                        <Field as="select" name="issuingAuthorityCountry" className="p-3 border border-customOrange outline-none rounded ml-2 block">
                                            <option value="IND">IND</option>
                                            {/* Add more options as needed */}
                                        </Field>
                                    </div>
                                    <ErrorMessage name="issuingAuthority" component="div" className="text-red-500 text-xs mt-1" />
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
                                        label={`License Ownership is with Business Organization Business organization : Name goes here`}
                                    />
                                    <CustomRadioButton
                                        id="ownerGroupMember"
                                        name="licenseOwner"
                                        value="ownerGroupMember"
                                        checked={values.licenseOwner === 'ownerGroupMember'}
                                        onChange={() => setFieldValue('licenseOwner', 'ownerGroupMember')}
                                        label={'License Ownership is with Owner-Group Member Owner-Group Member : Name goes here '}
                                    />
                                    <CustomRadioButton
                                        id="thirdParty"
                                        name="licenseOwner"
                                        value="thirdParty"
                                        checked={values.licenseOwner === 'thirdParty'}
                                        onChange={() => setFieldValue('licenseOwner', 'thirdParty')}
                                        label="License Ownership is with Third-Party"
                                    />
                                    <ErrorMessage name="licenseOwner" component="div" className="text-red-500 text-xs mt-1" />
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                            <div className='mt-5'>
                                <label className="block text-gray-700 mb-2" htmlFor="licenseCertificate">Liquor Service License Certificate</label>
                                <input
                                    type="file"
                                    name="licenseCertificate"
                                    className="w-full p-3 border border-customOrange outline-none rounded"
                                    onChange={(event) => setFieldValue('licenseCertificate', event.currentTarget.files[0])}
                                />
                                <ErrorMessage name="licenseCertificate" component="div" className="text-red-500 text-xs mt-1" />
                            </div>
                        </div>
                        <div className="flex justify-between"><button
                            type="submit"
                            className="mt-4 py-2 px-4 bg-[#FF9F08] text-white rounded-md"
                        >
                            Back
                        </button>
                        <button
                            type="submit" id="submitforregistration"
                            className="mt-4 py-2 px-4 bg-[#FF9F08] text-white rounded-md"
                        >
                            Submit For Registration
                        </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default LicenseTabForm;
