

// import React, { useState } from 'react';
// import { Formik, Field, Form, Error } from 'formik';
// import * as Yup from 'yup';
// import CustomRadioButton from "../../CommonComponents/CustomRadioButton";
// import OTPModal from '../../CommonComponents/Modal';
// import useStore from "../../store/UnitDetail";
// import axios from 'axios';
// import businessLogicStore from "../../store/BusinessLogicStore"
// // Validation schema using Yup
// const validationSchema = Yup.object({
//     // idType: Yup.string().required('Required'),
//     // idDocumentNumber: Yup.string().required('Required'),
//     // name: Yup.string().required('Required'),
//     // dob: Yup.string().required('Required'),
//     // email: Yup.string().required('Required'),
//     // designation: Yup.string().required('Required'),
//     // mobile: Yup.string().required('Required'),
// });

// const OwnerTabForm = ({ onSubmitOwner }) => {
//     const { ownerDetails, setOwnerDetails } = useStore();
//     const [formdisplay, setFormdisplay] = useState(ownerDetails.length);


//     const [selectedValue, setSelectedValue] = React.useState('mobile');
//     const [isModalOpen, setIsModalOpen] = React.useState(false);
//     const [otpSubmitted, setOtpSubmitted] = useState(false);
//     const [referenceId, setReferenceId] = useState("");
//     const [transactionId, setTransactionId] = useState("");
//     const [useCase, setUseCase] = useState("");
//     const [documentId, setDocumentId] = useState("");
//     const { currentTab, setCurrentTab } = businessLogicStore();

//     // Function to fetch document details
//     const fetchDocumentDetails = async (idType, idDocumentNumber, actions, setFieldValue) => {

//         let token = localStorage.getItem("token");
//         setFieldValue('dob', "");
//         setFieldValue('name', "");
//         try {
//             const response = await axios.post('http://43.204.36.147:8067/userVerification', {
//                 useCase: idType,
//                 documentId: idDocumentNumber
//             }, {
//                 headers: { 'Authorization': `Bearer ${token}` }
//             });

//             if (idType === "PAN") {
//                 const { name, dob, email, designation, mobile } = response.data.data;
//                 setFieldValue('name', name);
//                 setFieldValue('dob', dob);
//             } else if (idType === "AADHAR_REQUEST_OTP") {
//                 const { reference_id, transaction_id } = response.data.data;
//                 setFieldValue("idType", idType);
//                 setFieldValue("idDocumentNumber", idDocumentNumber);
//                 // setUseCase(idType);
//                 // setDocumentId(idDocumentNumber);
//                 // setReferenceId(reference_id);
//                 // setTransactionId(transaction_id);
//                 setIsModalOpen(true);
//             }
//         } catch (error) {
//             console.error('Error fetching document details:', error);
//         }
//     };

//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//         // Reset OTP verification state
//         setReferenceId("");
//         setTransactionId("");
//         setUseCase("");
//         setDocumentId("");
//     };

//     const handleSubmitOTP = async (actions, otp, idDocumentNumber) => {
//         let token = localStorage.getItem("token");
//         try {
//             const response = await axios.post('http://43.204.36.147:8067/aadharValidateOtp', {
//                 referenceId: referenceId,
//                 transactionId: transactionId,
//                 otp: otp,
//                 useCase: "AADHAR_VALIDATE_OTP",
//                 documentId: documentId,
//             }, {
//                 headers: { 'Authorization': `Bearer ${token}` }
//             });

//             const data1 = response.data;
//             let responseData = data1.data;
//             console.log(">>>>>>>>>>>>>>>name", responseData.name);
//             // actions.setValues({
//             //     ...actions.values,
//             //     name: responseData.name,
//             //     dob: responseData.dob
//             //     // Update other fields if necessary
//             // });


//             actions.setFieldValue("idType", "AADHAR_REQUEST_OTP");
//             actions.setFieldValue("idDocumentNumber", idDocumentNumber);
//             let dob = responseData.dob;
//             let name = responseData.name;
//             actions.setFieldValue("dob", dob);

//             actions.setFieldValue("name", name);

//             actions.setOtpSubmitted(true);
//             setTimeout(() => {
//                 actions.validateForm();
//             }, 2000);

//         } catch (error) {
//             console.error("Error verifying OTP:", error);
//         }
//         setReferenceId("");
//         setTransactionId("");
//         setIsModalOpen(false);
//         setUseCase("");
//         setDocumentId("");
//         // actions.setSubmitting(false);
//     };


//     const formdisplayHandler = () => {


//         const formHandler = (values) => {

//             return <>

//                 <div className="mb-6">
//                     <h2 className="text-lg font-semibold">Legal Identity Details <span className="text-sm font-normal">(Personal Photo Identification Document/Certificate Number)</span></h2>
//                     <p className="text-sm text-gray-700">
//                         <strong className="text-[#FF9F08]">Note:</strong> ID Must Be - Government Issued And Legally Valid <br />
//                         ID Must Have - Recent Photograph And Date Of Birth
//                     </p>
//                 </div>

//                 <Formik
//                     initialValues={values}
//                     validationSchema={validationSchema}
//                     onSubmit={(values, actions) => {
//                         let savebutton = document.activeElement.id
//                         if (savebutton == "ownerdatasave") {

//                             setOwnerDetails(values);
//                             let tab = currentTab;
//                             setCurrentTab(tab + 1)
//                         } else {
//                             console.log('Form submitted with values:', values);
//                             onSubmitOwner(values);
//                             // let tab=currentTab;
//                             // setCurrentTab(tab-1);
//                             setOwnerDetails(values);
//                         }
//                         // if (otpSubmitted) {
//                         //     actions.setSubmitting(false);
//                         // }
//                         const { idDocumentNumber, idType } = values;
//                         // if (idDocumentNumber && idType) {
//                         //     if (idType === 'PAN') {
//                         //         actions.setValues({
//                         //             ...values,
//                         //             name: 'Victor Avery',
//                         //             dob: '09/Jan/1996',
//                         //             email: 'victoravery@gmail.com',
//                         //             designation: 'Test 1',
//                         //             mobile: '98 98 252125',
//                         //         });
//                         //     } else if (idType === 'DIL') {
//                         //         actions.setValues({
//                         //             ...values,
//                         //             name: 'Zoe Berry',
//                         //             dob: '22/Nov/1998',
//                         //             email: 'zeoberry@gmail.com',
//                         //             designation: 'Test 2',
//                         //             mobile: '11 2336 5358',
//                         //         });
//                         //     } else if (idType === 'AADHAR_REQUEST_OTP') {
//                         //         setIsModalOpen(true); // Open modal for Aadhar
//                         //     }
//                         // }
//                     }}
//                 >
//                     {({ errors, touched, values, setFieldValue, setValues, validateForm }) => (
//                         <Form>
//                             <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
//                                 <div>
//                                     <label className="block text-gray-600 mb-2">Photo Id Type</label>
//                                     <Field as="select" name="idType" className="w-full p-3 border border-customOrange outline-none rounded" onClick={() => {
//                                         setFieldValue("dob", "");
//                                         setFieldValue("name", "");
//                                     }}>
//                                         <option value="">Select Category</option>
//                                         <option value="PAN">PAN</option>
//                                         <option value="AADHAR_REQUEST_OTP">Aadhar</option>
//                                         {/* <option value="DIL">Driving Licence</option> */}
//                                     </Field>
//                                     {errors.idType && touched.idType && <div className="text-red-600">{errors.idType}</div>}
//                                 </div>
//                                 <div>
//                                     <label className="block text-gray-600 mb-2">Photo Id Document/Certificate Number</label>
//                                     <div className="flex">
//                                         <Field type="text" name="idDocumentNumber" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="HGEU49660T" />
//                                         {values?.idType === 'AADHAR_REQUEST_OTP' ? (
//                                             <button
//                                                 type="button"
//                                                 className="ml-2 border border-customOrange text-[#FF9F08] py-2 px-4 rounded-md"
//                                                 onClick={() => fetchDocumentDetails(values.idType, values.idDocumentNumber, { setValues }, setFieldValue)}
//                                             >
//                                                 Request OTP
//                                             </button>
//                                         ) : (
//                                             <button
//                                                 type="button"
//                                                 className="ml-2 border border-customOrange text-[#FF9F08] py-2 px-4 rounded-md"
//                                                 onClick={() => fetchDocumentDetails(values.idType, values.idDocumentNumber, { setValues }, setFieldValue)}
//                                             >
//                                                 Validate
//                                             </button>
//                                         )}
//                                     </div>
//                                     {errors.idDocumentNumber && touched.idDocumentNumber && <div className="text-red-600">{errors.idDocumentNumber}</div>}
//                                 </div>
//                             </div>

//                             <div className="mb-6">
//                                 <h2 className="text-lg font-semibold">Business Owner-Group Member Details</h2>
//                                 <p className="text-sm text-gray-700">
//                                     All The Business Transactions Are Done Against The Name Of The Business Entity...Read More <br />
//                                     <span className="text-[#FF9F08]">(Minimum 1 Member Details Must Be Provided)</span>
//                                 </p>
//                             </div>

//                             <div className="grid md:grid-cols-[70%_30%] gap-6 mb-6 items-start">
//                                 <div className="grid md:grid-cols-2 gap-6">
//                                     <div>
//                                         <Field type="text" name="name" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Name" disabled={true} />
//                                         {errors.name && touched.name && <div className="text-red-600">{errors.name}</div>}
//                                     </div>
//                                     <div>
//                                         <Field type="text" name="designation" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Designation" />
//                                         {errors.designation && touched.designation && <div className="text-red-600">{errors.designation}</div>}
//                                     </div>
//                                     <div>
//                                         <Field type="text" name="dob" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Date of Birth" />
//                                         {errors.dob && touched.dob && <div className="text-red-600">{errors.dob}</div>}
//                                     </div>
//                                     <div>
//                                         <div className="flex">
//                                             <Field type="email" name="email" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Email" />
//                                             {/* <button type="button" className="ml-2 text-[#FF9F08] py-2 px-4">Verify</button> */}
//                                         </div>
//                                         {errors.email && touched.email && <div className="text-red-600">{errors.email}</div>}
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <label className="block text-gray-600 mb-2">Owner Member Contact Number</label>
//                                     <div className="flex flex-col lg:items-center">
//                                         <div className="flex flex-col lg:flex-row gap-2 lg:gap-0">
//                                             <CustomRadioButton
//                                                 id="mobile"
//                                                 name="contact"
//                                                 value="mobile"
//                                                 checked={values?.contact === 'mobile'}
//                                                 onChange={() => setFieldValue('contact', 'mobile')}
//                                                 label="Mobile"
//                                             />
//                                             <CustomRadioButton
//                                                 id="landline"
//                                                 name="contact"
//                                                 value="landline"
//                                                 checked={values?.contact === 'landline'}
//                                                 onChange={() => setFieldValue('contact', 'landline')}
//                                                 label="Landline"
//                                             />
//                                             <CustomRadioButton
//                                                 id="both"
//                                                 name="contact"
//                                                 value="both"
//                                                 checked={values?.contact === 'both'}
//                                                 onChange={() => setFieldValue('contact', 'both')}
//                                                 label="Both"
//                                             />
//                                         </div>
//                                     </div>

//                                     <div>
//                                         {values?.contact === 'mobile' && (
//                                             <div>
//                                                 <label className="block text-gray-600 mb-2">Mobile Number (OTP Verification Via SMS)</label>
//                                                 <div className="flex flex-col items-start gap-2 lg:gap-0 lg:flex-row lg:items-center">
//                                                     <Field as="select" name="mobileCountryCode" className="p-3 border border-customOrange outline-none rounded mr-2">
//                                                         <option>IND +91</option>
//                                                         <option>USA +1</option>
//                                                         <option>UK +44</option>
//                                                     </Field>
//                                                     <Field type="text" name="mobileNumber" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Mobile Number" />
//                                                     {/* <button type="button" className="ml-2 py-3 px-6 text-[#FF9F08]">Verify Number</button> */}
//                                                 </div>
//                                             </div>
//                                         )}

//                                         {values?.contact === 'landline' && (
//                                             <div>
//                                                 <label className="block text-gray-600 mb-2">Landline Number</label>
//                                                 <Field type="text" name="landlineNumber" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Landline Number" />
//                                             </div>
//                                         )}

//                                         {values?.contact === 'both' && (
//                                             <div>
//                                                 <div>
//                                                     <label className="block text-gray-600 mb-2">Mobile Number (OTP Verification Via SMS)</label>
//                                                     <div className="flex flex-col items-start gap-2 lg:gap-0 lg:flex-row lg:items-center">
//                                                         <Field as="select" name="mobileCountryCode" className="p-3 border border-customOrange outline-none rounded mr-2">
//                                                             <option>IND +91</option>
//                                                             <option>USA +1</option>
//                                                             <option>UK +44</option>
//                                                         </Field>
//                                                         <Field type="text" name="mobileNumber" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Mobile Number" />
//                                                         <button type="button" className="ml-2 py-3 px-6 text-[#FF9F08]">Verify Number</button>
//                                                     </div>
//                                                 </div>
//                                                 <div className="mt-5">
//                                                     <label className="block text-gray-600 mb-2">Landline Number</label>
//                                                     <Field type="text" name="landlineNumber" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Landline Number" />
//                                                 </div>
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>

//                             </div>
//                             <div className='flex justify-between'> <button
//                                 type="submit"
//                                 className="w-fit mt-4 py-2 px-4 bg-[#FF9F08] text-white rounded-md"
//                             >
//                                 Back
//                             </button>
//                                 <button
//                                     type="submit" id="ownerdatasave"
//                                     className="mt-6 p-3 bg-customOrange text-white rounded"
//                                 // onClick={() => {

//                                 //     let tab = currentTab;
//                                 //     setCurrentTab(tab + 1)

//                                 // }}
//                                 >
//                                     Next
//                                 </button></div>
//                             <OTPModal
//                                 isOpen={isModalOpen}
//                                 onClose={handleCloseModal}
//                                 onSubmitOTP={(otp) => handleSubmitOTP({ setValues, validateForm, setFieldValue }, otp, values.idDocumentNumber)}
//                             />
//                         </Form>
//                     )}
//                 </Formik>





//             </>
//         }








//         return <>{



//             ownerDetails.length === 0 ? Array(1).fill(null).map(() => formHandler()) : ownerDetails.map((values) => formHandler(values))


//             }





//         </>








//     }
//     return (
//         <div className='mt-15 mr-7'>
//            {formdisplayHandler()}


//         </div>
//     );
// };

// export default OwnerTabForm;



import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import CustomRadioButton from "../../CommonComponents/CustomRadioButton";
import OTPModal from '../../CommonComponents/Modal';
import useStore from "../../store/UnitDetail";
import axios from 'axios';
import businessLogicStore from "../../store/BusinessLogicStore"
import localStorageUtil from "../../utility/utility";
import { toast } from 'react-toastify';
const emailExists = async (email) => {
    const store = useStore.getState();


    if (document.activeElement.id == "ownerdatasave")
        return store.ownerDetails.some((owner) => owner.email === email);
};
// Validation schema using Yup
const validationSchema = Yup.object({
    idType: Yup.string().required('Required'),
    idDocumentNumber: Yup.string().required('Required'),
    name: Yup.string().required('Required'),
    dob: Yup.string().required('Required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Required')
        .test('email-exists', 'Email already exists', async (value) => {
            if (!value) return false;
            return !(await emailExists(value));
        }),
    designation: Yup.string().required('Required'),
    contact: Yup.string().required("Required"),
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
const OwnerTabForm = ({ onSubmitOwner, formdisplay, setFormdisplay }) => {

    const [modalfor, setModalFor] = useState("");
    const [verify, setVerify] = useState("Verify");
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [isModalOpenMobileEmail, setIsModalOpenMobileEmail] = React.useState(false);


    const { ownerDetails, setOwnerDetails, setOwnerDelete } = useStore();
    const [selectedValue, setSelectedValue] = React.useState('mobile');

    const [otpSubmitted, setOtpSubmitted] = useState(false);
    const [referenceId, setReferenceId] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [useCase, setUseCase] = useState("");
    const [documentId, setDocumentId] = useState("");
    const { currentTab, setCurrentTab, setCurrentStep, currentStep } = businessLogicStore();

    // Function to fetch document details
    const fetchDocumentDetails = async (idType, idDocumentNumber, actions, setFieldValue) => {
        let token = localStorage.getItem("token");
        setFieldValue('dob', "");
        setFieldValue('name', "");
        try {
            const response = await axios.post('http://43.204.36.147:8067/userVerification', {
                useCase: idType,
                documentId: idDocumentNumber
            }, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (idType === "PAN") {
                const { name, dob, email, designation, mobile } = response.data.data;
                setFieldValue('name', name);
                setFieldValue('dob', dob);
            } else if (idType === "AADHAR_REQUEST_OTP") {
                const { reference_id, transaction_id } = response.data.data;
                setFieldValue("idType", idType);
                setFieldValue("idDocumentNumber", idDocumentNumber);
                setReferenceId(reference_id);
                setTransactionId(transaction_id);
                setIsModalOpen(true);

            }
        } catch (error) {
            console.error('Error fetching document details:', error);
        }
    };

    const handleCloseModal = () => {

        setIsModalOpen(false);
        // Reset OTP verification state
        setReferenceId("");
        setTransactionId("");
        setUseCase("");
        setDocumentId("");
    };
    const getOtp = async (cred = "mobileNumber", values, actions, setFieldValue) => {
        let params;
        setIsModalOpenMobileEmail(true);
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
    const handleVerifyOtp = async (actions, otp, values) => {
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
                    localStorageUtil.setItem("emailverifyowner", "Email is Verified")
                } else {
                    setVerify("Mobile is Verified");
                    localStorageUtil.setItem("mobileverifyowner", "Mobile is Verified")
                }

            }



        } catch (error) {
            console.error("Error verifying OTP:", error);
        } finally {
            setIsModalOpenMobileEmail(false);
        }




    };

    const handleSubmitOTP = async (actions, otp, idDocumentNumber) => {
        let token = localStorage.getItem("token");
        try {
            const response = await axios.post('http://43.204.36.147:8067/aadharValidateOtp', {
                referenceId: referenceId,
                transactionId: transactionId,
                otp: otp,
                useCase: "AADHAR_VALIDATE_OTP",
                documentId: documentId,
            }, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            const data1 = response.data;
            let responseData = data1.data;
            console.log(">>>>>>>>>>>>>>>name", responseData.name);

            actions.setFieldValue("idType", "AADHAR_REQUEST_OTP");
            actions.setFieldValue("idDocumentNumber", idDocumentNumber);
            actions.setFieldValue("dob", responseData.dob);
            actions.setFieldValue("name", responseData.name);

            setOtpSubmitted(true);
            // setTimeout(() => {
            //     actions.validateForm();
            // }, 2000);

        } catch (error) {
            console.error("Error verifying OTP:", error);
        }
        setReferenceId("");
        setTransactionId("");
        setIsModalOpen(false);
        setUseCase("");
        setDocumentId("");
    };


    const formHandler = (values, index) => {
        // const [validate,setValidate]=useState("");
        return (
            <>



                <div className="mb-6">
                    <h2 className="text-lg font-semibold">Legal Identity Details <span className="text-sm font-normal">(Personal Photo Identification Document/Certificate Number)</span></h2>
                    <p className="text-sm text-gray-700">
                        <strong className="text-[#FF9F08]">Note:</strong> ID Must Be - Government Issued And Legally Valid <br />
                        ID Must Have - Recent Photograph And Date Of Birth
                    </p>
                </div>


                <Formik
                    initialValues={
                        { ...values, contact: "mobile" }
                    }
                    enableReinitialize={true}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => {
                        //                 let obj={  idType: '',
                        // idDocumentNumber: '',
                        // name: '',
                        // dob: '',
                        // email: values.email,
                        // designation: '',
                        // mobileNumber: '',   // Updated field name
                        // landlineNumber: '', // Updated field name
                        // contact: 'mobile'

                        //                 }


                        console.log(">>>>>>>>>>>values ownertabform", values);
                        let buttonclick = document.activeElement.id

                        if (buttonclick === "ownerdatasave") {

                            // console.log(">>>>>>>>>>>>>ownerDetails.find((owner)", ownerDetails.find((owner) => owner.email.includes(values.email)));
                            if (ownerDetails.find((owner) => owner.email == values.email) == undefined) {



                                values.validate = "Validated"
                                // setOwnerDetails(values.email, values);
                                // let formdisplayindex = formdisplay.findIndex((owner, idx) => idx === index);
                                // if (formdisplayindex !== -1) {
                                //     formdisplay[formdisplayindex] = values;
                                //     setFormdisplay([...formdisplay]); // Spread operator to ensure state immutability
                                // }
                                toast.success("Owner Validated")
                                console.log(">>>>>>>>>>>>>ownerDetials", values);
                                setOwnerDetails(values.email, values);
                                // let tab = currentTab;
                                // setCurrentTab(tab + 1)


                            }

                            // let tab = currentTab;
                            // setCurrentTab(tab + 1)
                        } else if (buttonclick == "edit") {
                            toast.success("Owner Updated")
                            setOwnerDetails(values.email, values);
                        }

                        else {
                            console.log('Form submitted with values:', values);
                            // onSubmitOwner(values);
                            // // let tab=currentTab;
                            // // setCurrentTab(tab-1);
                            // setOwnerDetails(values);
                        }

                        const { idDocumentNumber, idType } = values;


                    }}
                >
                    {({ errors, touched, values, setFieldValue, setValues, validateForm }) => (
                        <Form>
                            <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
                                <div>
                                    <label className="block text-gray-600 mb-2">Photo Id Type</label>
                                    <Field as="select" name="idType" className="w-full p-3 border border-customOrange outline-none rounded" onClick={() => {
                                        setFieldValue("dob", "");
                                        setFieldValue("name", "");
                                    }}>
                                        <option value="">Select Category</option>
                                        <option value="PAN">PAN</option>
                                        <option value="AADHAR_REQUEST_OTP">Aadhar</option>
                                        {/* <option value="DIL">Driving Licence</option> */}
                                    </Field>
                                    {errors.idType && touched.idType && <div className="text-darkred text-sm font-medium">{errors.idType}</div>}
                                </div>
                                <div>
                                    <label className="block text-gray-600 mb-2">Photo Id Document/Certificate Number</label>
                                    <div className="flex">
                                        <Field type="text" name="idDocumentNumber" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="HGEU49660T" />
                                        {values.idType === 'AADHAR_REQUEST_OTP' ? (
                                            <button
                                                type="button"
                                                className="ml-2 border border-customOrange text-[#FF9F08] py-2 px-4 rounded-md"
                                                onClick={() => fetchDocumentDetails(values.idType, values.idDocumentNumber, { setValues }, setFieldValue)}
                                            >
                                                Request OTP
                                            </button>
                                        ) : (
                                            <button
                                                type="button"
                                                className="ml-2 border border-customOrange text-[#FF9F08] py-2 px-4 rounded-md"
                                                onClick={() => fetchDocumentDetails(values.idType, values.idDocumentNumber, { setValues }, setFieldValue)}
                                            >
                                                Validate
                                            </button>
                                        )}
                                    </div>
                                    {errors.idDocumentNumber && touched.idDocumentNumber && <div className="text-darkred text-sm font-medium">{errors.idDocumentNumber}</div>}
                                </div>
                            </div>
                            <div className="mb-6">
                                <h2 className="text-lg font-semibold">Business Owner-Group Member Details</h2>
                                <p className="text-sm text-gray-700">
                                    All The Business Transactions Are Done Against The Name Of The Business Entity...Read More <br />
                                    <span className="text-[#FF9F08]">(Minimum 1 Member Details Must Be Provided)</span>
                                </p>
                            </div>

                            <div className="grid md:grid-cols-[70%_30%] gap-6 mb-6 items-start">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Field type="text" name="name" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Name"  />
                                        {errors.name && touched.name && <div className="text-darkred text-sm font-medium">{errors.name}</div>}
                                    </div>
                                    <div>
                                        <Field type="text" name="designation" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Designation" />
                                        {errors.designation && touched.designation && <div className="text-darkred text-sm font-medium">{errors.designation}</div>}
                                    </div>
                                    <div>
                                        <Field type="text" name="dob" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Date of Birth" />
                                        {errors.dob && touched.dob && <div className="text-darkred text-sm font-medium">{errors.dob}</div>}
                                    </div>
                                    <div>
                                        <div className="flex">
                                            <Field type="email" name="email" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Email" disabled={values.validate == "Validated" ? true : false} />
                                            {/* <button type="button" className="ml-2 text-[#FF9F08] py-2 px-4">Verify</button> */}
                                        </div>
                                        {errors.email && touched.email && <div className="text-darkred text-sm font-medium">{errors.email}</div>}

                                    </div>
                                </div>


                                <div>
                                    <label className="block text-gray-600 mb-2">Owner Member Contact Number</label>
                                    <div className="flex items-center">
                                        <div className="flex flex-col lg:flex-row gap-2 lg:gap-0">
                                            <CustomRadioButton
                                                id="mobile"
                                                name="contact"
                                                value="mobile"
                                                checked={values.contact === 'mobile'}
                                                onChange={() => setFieldValue('contact', 'mobile')}
                                                label="Mobile"
                                            />
                                            <CustomRadioButton
                                                id="landline"
                                                name="contact"
                                                value="landline"
                                                checked={values.contact === 'landline'}
                                                onChange={() => setFieldValue('contact', 'landline')}
                                                label="Landline"
                                            />
                                            <CustomRadioButton
                                                id="both"
                                                name="contact"
                                                value="both"
                                                checked={values.contact === 'both'}
                                                onChange={() => setFieldValue('contact', 'both')}
                                                label="Both"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        {values.contact === 'mobile' && (
                                            <div>
                                                <label className="block text-gray-600 mb-2">Mobile Number (OTP Verification Via SMS)</label>
                                                <div className="flex flex-col items-start gap-2 lg:gap-0 lg:flex-row lg:items-center">
                                                    <Field as="select" name="mobileCountryCode" className="p-3 border border-customOrange outline-none rounded mr-2">
                                                        <option>IND +91</option>
                                                        <option>USA +1</option>
                                                        <option>UK +44</option>
                                                    </Field>
                                                    <Field type="text" name="mobileNumber" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Mobile Number"


                                                    // disabled={localStorageUtil.getItem("mobileverifyowner") == "Mobile is Verified" ? true : false}
                                                    />
                                                    {localStorageUtil.getItem("mobileverifyowner") !== "Mobile is Verified" ? <button type="button" className=" pl-0 lg:py-3 lg:px-6 text-[#FF9F08]" onClick={(event) => {


                                                        getOtp("mobileNumber", values, { setValues }, setFieldValue)




                                                    }




                                                    }


                                                    >
                                                        Verify
                                                    </button> :


                                                        <button type="button" className=" pl-0 lg:py-3 lg:px-6 text-[#FF9F08]"



                                                        >
                                                            MobileNumber is Verified
                                                        </button>}
                                                </div>

                                                {errors.mobileNumber && touched.mobileNumber && <div className="text-darkred text-sm font-medium">{errors.mobileNumber}</div>}

                                            </div>)}

                                        {values.contact === 'landline' && (
                                            <div>
                                                <label className="block text-gray-600 mb-2" htmlFor="landlineNumber">
                                                    Landline Number
                                                </label>
                                                <div className="flex items-center">
                                                    <Field
                                                        className="w-full p-3 border border-customOrange outline-none rounded"
                                                        type="text"
                                                        name="landlineNumber"
                                                        placeholder="Landline Number"
                                                    /></div><div>
                                                    {errors.landlineNumber && touched.landlineNumber && <div className="text-darkred text-sm font-medium">{errors.landlineNumber}</div>}

                                                </div>
                                            </div>
                                        )}

                                        {values.contact === 'both' && (
                                            <div>
                                                <div>
                                                    <label className="block text-gray-600 mb-2">Mobile Number (OTP Verification Via SMS)</label>
                                                    <div className="flex flex-col items-start gap-2 lg:gap-0 lg:flex-row lg:items-center">
                                                        <Field as="select" name="mobileCountryCode" className="p-3 border border-customOrange outline-none rounded mr-2">
                                                            <option>IND +91</option>
                                                            <option>USA +1</option>
                                                            <option>UK +44</option>
                                                        </Field>
                                                        <Field type="text" name="mobileNumber" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Mobile Number" />

                                                        <button type="button" className="ml-2  px-6 text-[#FF9F08]">Verify Number</button>
                                                    </div><div> {errors.mobileNumber && touched.mobileNumber && <div className="text-darkred text-sm font-medium">{errors.mobileNumber}</div>}
                                                    </div>
                                                </div>
                                                <div className="mt-5">
                                                    <label className="block text-gray-600 mb-2">Landline Number</label>
                                                    <Field type="text" name="landlineNumber" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Landline Number" />
                                                    {errors.landlineNumber && touched.landlineNumber && <div className="text-darkred text-sm font-medium">{errors.landlineNumber}</div>}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </div>
                            <div className='flex justify-between'>
                                {ownerDetails.length > 1 && ownerDetails.find((owner) => owner.email === values.email) ? <button type="button"
                                    id="ownerdatasave"
                                    className="mt-6 p-3 bg-customOrange text-white rounded"
                                    onClick={() => {
                                        console.log(">>>>>>>>>>>>>>>>ownerDetails", ownerDetails.filter((owner) => owner.email != values.email));
                                        setFormdisplay(ownerDetails.filter((owner) => owner.email != values.email));
                                        // setFormdisplay(prev=>formdisplay.filter((owner) => owner.email != values.email));
                                        setOwnerDelete(values.email);
                                        toast.success("Owner Deleted");

                                    }}
                                >
                                    Delete Owner
                                </button> : values.validate == "Validate This Member" && formdisplay.length > 1 ? <button className="mt-6 p-3 bg-customOrange text-white rounded" onClick={() => {

                                    let formdisplaydelete = formdisplay.filter((form, formindex) => formindex != index);
                                    setFormdisplay(formdisplaydelete);
                                    toast.success("Form Deleted")
                                }}>Delete Empty Form</button> : <div></div>}
                                <div>{ownerDetails.find((owner) => owner.email === values.email) && values.validate == "Validated" && <button
                                    type="submit" id="edit"
                                    className="mt-6 p-3 bg-customOrange text-white rounded"

                                >
                                    Update
                                </button>} <button
                                    type="submit" id="ownerdatasave"
                                    className="mt-6 p-3 bg-customOrange text-white rounded"

                                >
                                        {values.validate}
                                    </button></div>


                            </div>
                            <OTPModal
                                isOpen={isModalOpen}
                                onClose={handleCloseModal}
                                onSubmitOTP={(otp) => handleSubmitOTP({ setValues, validateForm, setFieldValue }, otp, values.idDocumentNumber)}
                            />
                            <OTPModal
                                isOpen={isModalOpenMobileEmail}
                                onClose={() => { setIsModalOpenMobileEmail(false) }}
                                onSubmitOTP={(otp) => handleVerifyOtp({ setValues, validateForm, setFieldValue }, otp, values)}
                            />
                        </Form>
                    )}
                </Formik>

            </>
        )
    }


    return (
        <>
            {formdisplay.length > 0 ? (
                formdisplay.map((owner, index) => (
                    <div key={index} className="mb-6 p-4 border-b-2 border-customOrange rounded-md">
                        {
                            console.log(">>>>>>>>>>>>ownerowner owner", owner)}
                        {formHandler(owner, index)}
                    </div>
                ))
            ) : (
                <div className="mb-6 p-4 border border-customOrange rounded-md">

                    {
                        setFormdisplay([...formdisplay, {
                            idType: "",
                            idDocumentNumber: "",
                            name: "",
                            dob: "",
                            email: "",
                            mobileNumber: "",
                            designation: "",

                            validate: "Validate This Member"
                        }])
                    }
                </div>
            )}

            {
                <div className='flex justify-between'>
                    <button
                        type="button"
                        className="w-fit mt-4 py-2 px-4 bg-[#FF9F08] text-white rounded-md" onClick={() => {

                            setFormdisplay(ownerDetails);
                            setCurrentStep(2);
                            setCurrentTab(2);
                        }}
                    >
                        Back
                    </button>
                    <button className="bg-[#FF9F08] text-white py-2 px-6 rounded-md" onClick={() => {
                        console.log(">>>>>>>>>>>>>formdisplay.length", formdisplay.length)
                        console.log(">>>>>>>>>>>>>ownerDetails.length", ownerDetails.length)


                        if (formdisplay.length == ownerDetails.length) {
                            setFormdisplay(ownerDetails);
                            let tab = currentTab;
                            setCurrentTab(tab + 1);

                        } else {
                            toast.info("Please Validate all members")
                        }
                    }}>Next</button></div>




            }

        </>
    );
};

export default OwnerTabForm;


