// import React from 'react';
// import CustomRadioButton from "../../CommonComponents/CustomRadioButton";
// import OTPModal from '../../CommonComponents/Modal';

// const OwnerTabForm = () => {
//     const [selectedValue, setSelectedValue] = React.useState('mobile');
//     const [inputValues, setInputValues] = React.useState({});
//     const [isModalOpen, setIsModalOpen] = React.useState(false);

//     const handleRadioChange = (event) => {
//         setSelectedValue(event.target.value);
//     };

//     const handleOnInputChange = (e) => {
//         setInputValues({
//             ...inputValues,
//             [e.target.name]: e.target.value
//         })
//     }

//     const onValidateId = () => {
//         const { idDocumentNumber, idType } = inputValues;
//         if (idDocumentNumber && idType) {
//             if (idType === 'PAN') {
//                 setInputValues({
//                     ...inputValues,
//                     name: 'Victor Avery',
//                     dob: '09/Jan/1996',
//                     email: 'victoravery@gmail.com',
//                     designation: 'Test 1',
//                     mobile: '98 98 252125'
//                 })
//             }
//             if (idType === 'DIL') {
//                 setInputValues({
//                     ...inputValues,
//                     name: 'Zoe Berry',
//                     dob: '22/Nov/1998',
//                     email: 'zeoberry@gmail.com',
//                     designation: 'Test 2',
//                     mobile: '11 2336 5358'
//                 })
//             }
//             if (idType === 'Aadhar') {
//                 setIsModalOpen(true);
//             }

//         }
//     }

//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//     }

//     const handleSubmitOTP = () => {
//         setInputValues({
//             ...inputValues,
//             name: 'Sarah Path',
//             dob: '11/Oct/2000',
//             email: 'sarahpath@gmail.com',
//             designation: 'Test 3',
//             mobile: '92 69 620001'
//         })
//         setIsModalOpen(false);
//     }

//     return (
//         <div className='mt-15 mr-7'>
//             <div className="mb-6">
//                 <h2 className="text-lg font-semibold">Legal Identity Details <span className="text-sm font-normal">(Personal Photo Identification Document/Certificate Number)</span></h2>
//                 <p className="text-sm text-gray-700">
//                     <strong className="text-[#FF9F08]">Note:</strong> ID Must Be - Government Issued And Legally Valid <br />
//                     ID Must Have - Recent Photograph And Date Of Birth
//                 </p>
//             </div>

//             <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
//                 <div>
//                     <label className="block text-gray-600 mb-2">Photo Id Type</label>
//                     <select className="w-full p-3 border border-customOrange outline-none rounded" name="idType" onChange={(e) => handleOnInputChange(e)}>
//                         <option>Select Category</option>
//                         <option value={'PAN'}>PAN</option>
//                         <option value={'Aadhar'}>Aadhar</option>
//                         <option value={'DIL'}>Driving Licence</option>
//                     </select>
//                 </div>
//                 <div>
//                     <label className="block text-gray-600 mb-2">Photo Id Document/Certificate Number</label>
//                     <div className="flex">
//                         <input type="text" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="HGEU49660T"
//                             name="idDocumentNumber" onChange={(e) => handleOnInputChange(e)} />
//                         <button className="ml-2 border border-customOrange text-[#FF9F08] py-2 px-4 rounded-md" onClick={() => onValidateId()}>Validate</button>
//                     </div>
//                 </div>
//             </div>

//             <div className="mb-6">
//                 <h2 className="text-lg font-semibold">Business Owner-Group Member Details</h2>
//                 <p className="text-sm text-gray-700">
//                     All The Business Transactions Are Done Against The Name Of The Business Entity...Read More <br />
//                     <span className="text-[#FF9F08]">(Minimum 1 Member Details Must Be Provided)</span>
//                 </p>
//             </div>

//             <div className="grid md:grid-cols-[70%_30%] gap-6 mb-6 items-start ">
//               <div className="grid md:grid-cols-2 gap-6  ">  <div>
//                     <input type="text" className="w-full p-3 border border-customOrange outline-none rounded"
//                         placeholder="Name" name="name" onChange={(e) => handleOnInputChange(e)} value={inputValues?.name || ''} />
//                 </div>
//                 <div>
//                     <input type="text" className="w-full p-3 border border-customOrange outline-none rounded"
//                         placeholder="Designation"
//                         name="designation" onChange={(e) => handleOnInputChange(e)} value={inputValues?.designation || ''} />
//                 </div>
//                 <div>
//                     <input type="text" className="w-full p-3 border border-customOrange outline-none rounded"
//                         name="dob" onChange={(e) => handleOnInputChange(e)} placeholder="Date of Birth" value={inputValues?.dob || ''} />
//                 </div>
//                 <div>
//                     <div className="flex">
//                         <input type="email" className="w-full p-3 border border-customOrange outline-none rounded"
//                             placeholder="Email" name="email" onChange={(e) => handleOnInputChange(e)} value={inputValues?.email || ''} />
//                         <button className="ml-2 text-[#FF9F08] py-2 px-4">Verify</button>
//                     </div>
//                 </div></div>
//                 <div>
//                     <label className="block text-gray-600 mb-2" htmlFor="contactNumber">Owner Member Contact Number</label>
//                     <div className="flex flex-col lg:items-center ">
//                         <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 ">
//                           <CustomRadioButton
//                                 id="mobile"
//                                 name="contact"
//                                 value="mobile"
//                                 checked={selectedValue === 'mobile'}
//                                 onChange={handleRadioChange}
//                                 label="Mobile"
//                             />
//                             <CustomRadioButton
//                                 id="landline"
//                                 name="contact"
//                                 value="landline"
//                                 checked={selectedValue === 'landline'}
//                                 onChange={handleRadioChange}
//                                 label="Landline"
//                             />
//                             <CustomRadioButton
//                                 id="both"
//                                 name="contact"
//                                 value="both"
//                                 checked={selectedValue === 'both'}
//                                 onChange={handleRadioChange}
//                                 label="Both"
//                             />
//                         </div>
//                     </div>

//                     <div>  {selectedValue === 'mobile' ? (<div>
//                     <label className="block text-gray-600 mb-2" htmlFor="mobileNumber">Mobile Number (OTP Verification Via SMS)</label>
//                     <div className="flex flex-col items-start gap-2 lg:gap-0 lg:flex-row lg:items-center">
//                         <select className="p-3 border border-customOrange outline-none rounded mr-2">
//                             <option>IND +91</option>
//                             <option>USA +1</option>
//                             <option>UK +44</option>
//                         </select>
//                         <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" id="mobileNumber" placeholder="Mobile Number"
//                             name="mobile" onChange={(e) => handleOnInputChange(e)} value={inputValues?.mobile || ''} />
//                         <button className="ml-2 py-3 px-6 text-[#FF9F08]">Verify Number</button>
//                     </div>
//                 </div>) : (
//                     selectedValue === 'landline' ? (
//                         <div>
//                             <label className="block text-gray-600 mb-2" htmlFor="mobileNumber">Landline Number</label>
//                             <div className="flex items-center">
//                                 <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" id="landlineNumber" placeholder="Landline Number" />
//                             </div>
//                         </div>
//                     ) : (
//                         <div>
//                             <div>
//                                 <label className="block text-gray-600 mb-2" htmlFor="mobileNumber">Mobile Number (OTP Verification Via SMS)</label>
//                                 <div className="flex flex-col items-start gap-2 lg:gap-0 lg:flex-row lg:items-center">
//                                     <select className="p-3 border border-customOrange outline-none rounded mr-2">
//                                         <option>IND +91</option>
//                                         <option>USA +1</option>
//                                         <option>UK +44</option>
//                                     </select>
//                                     <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" id="mobileNumber" placeholder="Mobile Number" />
//                                     <button className="ml-2 py-3 px-6 text-[#FF9F08]">Verify Number</button>
//                                 </div>
//                             </div>
//                             <div className="mt-5">
//                                 <label className="block text-gray-600 mb-2" htmlFor="mobileNumber">Landline Number</label>
//                                 <div className="flex items-center">
//                                     <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" id="landlineNumber" placeholder="Landline Number" />
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 )}</div>
//                 </div>

//             </div>

//             <div className="grid md:grid-cols-3 gap-6 mb-6">
//                 {/* <div>
//                     <input type="text" className="w-full p-3 border border-customOrange outline-none rounded"
//                         name="dob" onChange={(e) => handleOnInputChange(e)} placeholder="Date of Birth" value={inputValues?.dob || ''} />
//                 </div>
//                 <div>
//                     <div className="flex">
//                         <input type="email" className="w-full p-3 border border-customOrange outline-none rounded"
//                             placeholder="Email" name="email" onChange={(e) => handleOnInputChange(e)} value={inputValues?.email || ''} />
//                         <button className="ml-2 text-[#FF9F08] py-2 px-4">Verify</button>
//                     </div>
//                 </div> */}
//                 {/* {selectedValue === 'mobile' ? (<div>
//                     <label className="block text-gray-600 mb-2" htmlFor="mobileNumber">Mobile Number (OTP Verification Via SMS)</label>
//                     <div className="flex flex-col items-start gap-2 lg:gap-0 lg:flex-row lg:items-center">
//                         <select className="p-3 border border-customOrange outline-none rounded mr-2">
//                             <option>IND +91</option>
//                             <option>USA +1</option>
//                             <option>UK +44</option>
//                         </select>
//                         <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" id="mobileNumber" placeholder="Mobile Number"
//                             name="mobile" onChange={(e) => handleOnInputChange(e)} value={inputValues?.mobile || ''} />
//                         <button className="ml-2 py-3 px-6 text-[#FF9F08]">Verify Number</button>
//                     </div>
//                 </div>) : (
//                     selectedValue === 'landline' ? (
//                         <div>
//                             <label className="block text-gray-600 mb-2" htmlFor="mobileNumber">Landline Number</label>
//                             <div className="flex items-center">
//                                 <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" id="landlineNumber" placeholder="Landline Number" />
//                             </div>
//                         </div>
//                     ) : (
//                         <div>
//                             <div>
//                                 <label className="block text-gray-600 mb-2" htmlFor="mobileNumber">Mobile Number (OTP Verification Via SMS)</label>
//                                 <div className="flex flex-col items-start gap-2 lg:gap-0 lg:flex-row lg:items-center">
//                                     <select className="p-3 border border-customOrange outline-none rounded mr-2">
//                                         <option>IND +91</option>
//                                         <option>USA +1</option>
//                                         <option>UK +44</option>
//                                     </select>
//                                     <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" id="mobileNumber" placeholder="Mobile Number" />
//                                     <button className="ml-2 py-3 px-6 text-[#FF9F08]">Verify Number</button>
//                                 </div>
//                             </div>
//                             <div className="mt-5">
//                                 <label className="block text-gray-600 mb-2" htmlFor="mobileNumber">Landline Number</label>
//                                 <div className="flex items-center">
//                                     <input className="w-full p-3 border border-customOrange outline-none rounded" type="text" id="landlineNumber" placeholder="Landline Number" />
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 )} */}
//             </div>
//             <OTPModal
//                 isOpen={isModalOpen}
//                 onClose={handleCloseModal}
//                 onSubmitOTP={handleSubmitOTP}
//             />
//         </div>
//     );
// };

// export default OwnerTabForm;
// import React from 'react';
// import { Formik, Field, Form } from 'formik';
// import * as Yup from 'yup';
// import CustomRadioButton from "../../CommonComponents/CustomRadioButton";
// import OTPModal from '../../CommonComponents/Modal';
// import useStore from "../../store/UnitDetail";
// // Validation schema using Yup
// const validationSchema = Yup.object({
//     idType: Yup.string().required('Required'),
//     idDocumentNumber: Yup.string().required('Required'),
//     name: Yup.string().required('Required'),
//     dob:Yup.string().required('Required'),
//     email: Yup.string().required('Required'),
//     designation: Yup.string().required('Required'),
//     mobile: Yup.string().required('Required'),
//     // landline: Yup.string().required('Required'),
// });

// const OwnerTabForm = ({onSubmitOwner}) => {
//     const { ownerDetails, setOwnerDetails } = useStore();
//     const [selectedValue, setSelectedValue] = React.useState('mobile');
//     const [isModalOpen, setIsModalOpen] = React.useState(false);

//     const handleRadioChange = (event) => {
//         setSelectedValue(event.target.value);
//     };

//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//     };

//     const handleSubmitOTP = (actions) => {
//         actions.setValues({
//             ...actions.values,
//             name: 'Sarah Path',
//             dob: '11/Oct/2000',
//             email: 'sarahpath@gmail.com',
//             designation: 'Test 3',
//             mobile: '92 69 620001',
//         });
//         setIsModalOpen(false);
//         actions.setSubmitting(false);
//     };

//     return (
//         <div className='mt-15 mr-7'>
//             <div className="mb-6">
//                 <h2 className="text-lg font-semibold">Legal Identity Details <span className="text-sm font-normal">(Personal Photo Identification Document/Certificate Number)</span></h2>
//                 <p className="text-sm text-gray-700">
//                     <strong className="text-[#FF9F08]">Note:</strong> ID Must Be - Government Issued And Legally Valid <br />
//                     ID Must Have - Recent Photograph And Date Of Birth
//                 </p>
//             </div>

//             <Formik
//                 // initialValues={{
//                 //     idType: '',
//                 //     idDocumentNumber: '',
//                 //     name: '',
//                 //     dob: '',
//                 //     email: '',
//                 //     designation: '',
//                 //     mobile: '',
//                 //     landline: '',
//                 //     contact: 'mobile',
//                 // }}
//                   initialValues={ownerDetails}
//                 validationSchema={validationSchema}
//                 onSubmit={(values, actions) => {

//                     onSubmitOwner(values);
//                     setOwnerDetails(values);
//                     const { idDocumentNumber, idType } = values;
//                     if (idDocumentNumber && idType) {
//                         if (idType === 'PAN') {
//                             actions.setValues({
//                                 ...values,
//                                 name: 'Victor Avery',
//                                 dob: '09/Jan/1996',
//                                 email: 'victoravery@gmail.com',
//                                 designation: 'Test 1',
//                                 mobile: '98 98 252125',
//                             });
//                         } else if (idType === 'DIL') {
//                             actions.setValues({
//                                 ...values,
//                                 name: 'Zoe Berry',
//                                 dob: '22/Nov/1998',
//                                 email: 'zeoberry@gmail.com',
//                                 designation: 'Test 2',
//                                 mobile: '11 2336 5358',
//                             });
//                         } else if (idType === 'Aadhar') {
//                             setIsModalOpen(true);
//                         }
//                     }
//                 }}
//             >
//                 {({ errors, touched, values, setFieldValue }) => (
//                     <Form>
//                         <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
//                             <div>
//                                 <label className="block text-gray-600 mb-2">Photo Id Type</label>
//                                 <Field as="select" name="idType" className="w-full p-3 border border-customOrange outline-none rounded">
//                                     <option value="">Select Category</option>
//                                     <option value="PAN">PAN</option>
//                                     <option value="Aadhar">Aadhar</option>
//                                     <option value="DIL">Driving Licence</option>
//                                 </Field>
//                             </div>
//                             <div>
//                                 <label className="block text-gray-600 mb-2">Photo Id Document/Certificate Number</label>
//                                 <div className="flex">
//                                     <Field type="text" name="idDocumentNumber" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="HGEU49660T" />
//                                     <button type="submit" className="ml-2 border border-customOrange text-[#FF9F08] py-2 px-4 rounded-md">Validate</button>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="mb-6">
//                             <h2 className="text-lg font-semibold">Business Owner-Group Member Details</h2>
//                             <p className="text-sm text-gray-700">
//                                 All The Business Transactions Are Done Against The Name Of The Business Entity...Read More <br />
//                                 <span className="text-[#FF9F08]">(Minimum 1 Member Details Must Be Provided)</span>
//                             </p>
//                         </div>

//                         <div className="grid md:grid-cols-[70%_30%] gap-6 mb-6 items-start">
//                             <div className="grid md:grid-cols-2 gap-6">
//                                 <div>
//                                     <Field type="text" name="name" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Name" />
//                                     {errors.name && touched.name && <div className="text-red-600">{errors.name}</div>}
//                                 </div>
//                                 <div>
//                                     <Field type="text" name="designation" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Designation" />
//                                     {errors.designation && touched.designation && <div className="text-red-600">{errors.designation}</div>}
//                                 </div>
//                                 <div>
//                                     <Field type="text" name="dob" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Date of Birth" />
//                                     {errors.dob && touched.dob && <div className="text-red-600">{errors.dob}</div>}
//                                 </div>
//                                 <div>
//                                     <div className="flex">
//                                         <Field type="email" name="email" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Email" />
//                                         <button type="button" className="ml-2 text-[#FF9F08] py-2 px-4">Verify</button>
//                                     </div>
//                                     {errors.email && touched.email && <div className="text-red-600">{errors.email}</div>}
//                                 </div>
//                             </div>
//                             <div>
//                                 <label className="block text-gray-600 mb-2">Owner Member Contact Number</label>
//                                 <div className="flex flex-col lg:items-center">
//                                     <div className="flex flex-col lg:flex-row gap-2 lg:gap-0">
//                                         <CustomRadioButton
//                                             id="mobile"
//                                             name="contact"
//                                             value="mobile"
//                                             checked={values.contact === 'mobile'}
//                                             onChange={() => setFieldValue('contact', 'mobile')}
//                                             label="Mobile"
//                                         />
//                                         <CustomRadioButton
//                                             id="landline"
//                                             name="contact"
//                                             value="landline"
//                                             checked={values.contact === 'landline'}
//                                             onChange={() => setFieldValue('contact', 'landline')}
//                                             label="Landline"
//                                         />
//                                         <CustomRadioButton
//                                             id="both"
//                                             name="contact"
//                                             value="both"
//                                             checked={values.contact === 'both'}
//                                             onChange={() => setFieldValue('contact', 'both')}
//                                             label="Both"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div>
//                                     {values.contact === 'mobile' && (
//                                         <div>
//                                             <label className="block text-gray-600 mb-2">Mobile Number (OTP Verification Via SMS)</label>
//                                             <div className="flex flex-col items-start gap-2 lg:gap-0 lg:flex-row lg:items-center">
//                                                 <Field as="select" name="mobileCountryCode" className="p-3 border border-customOrange outline-none rounded mr-2">
//                                                     <option>IND +91</option>
//                                                     <option>USA +1</option>
//                                                     <option>UK +44</option>
//                                                 </Field>
//                                                 <Field type="text" name="mobile" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Mobile Number" />
//                                                 <button type="button" className="ml-2 py-3 px-6 text-[#FF9F08]">Verify Number</button>
//                                             </div>
//                                         </div>
//                                     )}

//                                     {values.contact === 'landline' && (
//                                         <div>
//                                             <label className="block text-gray-600 mb-2">Landline Number</label>
//                                             <Field type="text" name="landline" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Landline Number" />
//                                         </div>
//                                     )}

//                                     {values.contact === 'both' && (
//                                         <div>
//                                             <div>
//                                                 <label className="block text-gray-600 mb-2">Mobile Number (OTP Verification Via SMS)</label>
//                                                 <div className="flex flex-col items-start gap-2 lg:gap-0 lg:flex-row lg:items-center">
//                                                     <Field as="select" name="mobileCountryCode" className="p-3 border border-customOrange outline-none rounded mr-2">
//                                                         <option>IND +91</option>
//                                                         <option>USA +1</option>
//                                                         <option>UK +44</option>
//                                                     </Field>
//                                                     <Field type="text" name="mobile" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Mobile Number" />
//                                                     <button type="button" className="ml-2 py-3 px-6 text-[#FF9F08]">Verify Number</button>
//                                                 </div>
//                                             </div>
//                                             <div className="mt-5">
//                                                 <label className="block text-gray-600 mb-2">Landline Number</label>
//                                                 <Field type="text" name="landline" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Landline Number" />
//                                             </div>
//                                         </div>
//                                     )}

//                                 </div>

//                             </div>
//                             <button
//                             type="submit"
//                             className="w-[25%] mt-4 py-2 px-4 bg-[#FF9F08] text-white rounded-md"
//                         >
//                             Back
//                         </button>
//                         </div>

//                         <OTPModal
//                             isOpen={isModalOpen}
//                             onClose={handleCloseModal}
//                             onSubmitOTP={handleSubmitOTP}
//                         />
//                     </Form>
//                 )}
//             </Formik>
//         </div>
//     );
// };

// export default OwnerTabForm;
// import React from 'react';
// import { Formik, Field, Form } from 'formik';
// import * as Yup from 'yup';
// import CustomRadioButton from "../../CommonComponents/CustomRadioButton";
// import OTPModal from '../../CommonComponents/Modal';
// import useStore from "../../store/UnitDetail";
// import axios from 'axios'; // Make sure axios is installed and imported

// // Validation schema using Yup
// const validationSchema = Yup.object({
//     idType: Yup.string().required('Required'),
//     idDocumentNumber: Yup.string().required('Required'),
//     name: Yup.string().required('Required'),
//     dob: Yup.string().required('Required'),
//     email: Yup.string().required('Required'),
//     designation: Yup.string().required('Required'),
//     mobile: Yup.string().required('Required'),
//     // landline: Yup.string().required('Required'),
// });

// const OwnerTabForm = ({ onSubmitOwner }) => {
//     const { ownerDetails, setOwnerDetails } = useStore();
//     const [selectedValue, setSelectedValue] = React.useState('mobile');
//     const [isModalOpen, setIsModalOpen] = React.useState(false);

//     // Function to fetch document details
//     const fetchDocumentDetails = async (idType, idDocumentNumber, actions,setFieldValue) => {
//         let token =localStorage.getItem("token");
//         // try {
//         //     const response = await axios.post('/api/validate-document', { idType, idDocumentNumber });
//         //     const { name, dob, email, designation, mobile } = response.data;
//         //     actions.setValues({
//         //         ...actions.values,
//         //         name,
//         //         dob,
//         //         email,
//         //         designation,
//         //         mobile,
//         //     });
//         // } catch (error) {
//         //     console.error('Error fetching document details:', error);
//         //     // Handle error appropriately, e.g., display a message to the user
//         // }

//         // if(idType!="PAN"){
//         //     try {

//         //         const response = await axios.post('http://43.204.36.147:8067/businessVerification', {
//         //             useCase: idType,
//         //             documentId: idDocumentNumber
//         //         },
//         //         {
//         //             headers: {
//         //                 'Authorization': `Bearer ${token}` // Replace with your actual token
//         //             }
//         //         });
//         //         const data1 = response.data;
//         //         let responseData = data1.data;
//         //         setFieldValue('legallyRegisteredName', responseData.name );
//         //         setFieldValue('addressLine1', responseData.address);
//         //         // Update other fields if necessary
//         //     } catch (error) {
//         //         console.error("Validation error:", error);
//         //     }}else{


//                 try {

//                     const response = await axios.post('http://43.204.36.147:8067/userVerification', {
//                         useCase: idType,
//                         documentId: idDocumentNumber
//                     },
//                     {
//                         headers: {
//                             'Authorization': `Bearer ${token}` // Replace with your actual token
//                         }
//                     });
//                     const data1 = response.data;
//                     let responseData = data1.data;
//                     setFieldValue('name', responseData.name);
//                     setFieldValue('dob', responseData.dob);
//                     // setFieldValue('legallyRegisteredName', responseData.name );
//                     // setFieldValue('addressLine1', responseData.address);
//                     // Update other fields if necessary
//                 } catch (error) {
//                     console.error("Validation error:", error);
//                 }

//             // }
//     };

//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//     };

//     const handleSubmitOTP = (actions) => {
//         actions.setValues({
//             ...actions.values,
//             name: 'Sarah Path',
//             dob: '11/Oct/2000',
//             email: 'sarahpath@gmail.com',
//             designation: 'Test 3',
//             mobile: '92 69 620001',
//         });
//         setIsModalOpen(false);
//         actions.setSubmitting(false);
//     };

//     return (
//         <div className='mt-15 mr-7'>
//             <div className="mb-6">
//                 <h2 className="text-lg font-semibold">Legal Identity Details <span className="text-sm font-normal">(Personal Photo Identification Document/Certificate Number)</span></h2>
//                 <p className="text-sm text-gray-700">
//                     <strong className="text-[#FF9F08]">Note:</strong> ID Must Be - Government Issued And Legally Valid <br />
//                     ID Must Have - Recent Photograph And Date Of Birth
//                 </p>
//             </div>

//             <Formik
//                 initialValues={ownerDetails}
//                 validationSchema={validationSchema}
//                 onSubmit={(values, actions) => {
//                     onSubmitOwner(values);
//                     setOwnerDetails(values);
//                     const { idDocumentNumber, idType } = values;
//                     if (idDocumentNumber && idType) {
//                         if (idType === 'PAN') {
//                             actions.setValues({
//                                 ...values,
//                                 name: 'Victor Avery',
//                                 dob: '09/Jan/1996',
//                                 email: 'victoravery@gmail.com',
//                                 designation: 'Test 1',
//                                 mobile: '98 98 252125',
//                             });
//                         } else if (idType === 'DIL') {
//                             actions.setValues({
//                                 ...values,
//                                 name: 'Zoe Berry',
//                                 dob: '22/Nov/1998',
//                                 email: 'zeoberry@gmail.com',
//                                 designation: 'Test 2',
//                                 mobile: '11 2336 5358',
//                             });
//                         } else if (idType === 'Aadhar') {
//                             setIsModalOpen(true);
//                         }
//                     }
//                 }}
//             >
//                 {({ errors, touched, values, setFieldValue, setValues }) => (
//                     <Form>
//                         <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
//                             <div>
//                                 <label className="block text-gray-600 mb-2">Photo Id Type</label>
//                                 <Field as="select" name="idType" className="w-full p-3 border border-customOrange outline-none rounded">
//                                     <option value="">Select Category</option>
//                                     <option value="PAN">PAN</option>
//                                     <option value="AADHAR_REQUEST_OTP">Aadhar</option>
//                                     <option value="DIL">Driving Licence</option>
//                                 </Field>
//                                 {errors.idType && touched.idType && <div className="text-red-600">{errors.idType}</div>}
//                             </div>
//                             <div>
//                                 <label className="block text-gray-600 mb-2">Photo Id Document/Certificate Number</label>
//                                 <div className="flex">
//                                     <Field type="text" name="idDocumentNumber" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="HGEU49660T" />
//                                     <button 
//                                         type="button" 
//                                         className="ml-2 border border-customOrange text-[#FF9F08] py-2 px-4 rounded-md"
//                                         onClick={() => fetchDocumentDetails(values.idType, values.idDocumentNumber, { setValues },setFieldValue)}
//                                     >
//                                         Validate
//                                     </button>
//                                 </div>
//                                 {errors.idDocumentNumber && touched.idDocumentNumber && <div className="text-red-600">{errors.idDocumentNumber}</div>}
//                             </div>
//                         </div>

//                         <div className="mb-6">
//                             <h2 className="text-lg font-semibold">Business Owner-Group Member Details</h2>
//                             <p className="text-sm text-gray-700">
//                                 All The Business Transactions Are Done Against The Name Of The Business Entity...Read More <br />
//                                 <span className="text-[#FF9F08]">(Minimum 1 Member Details Must Be Provided)</span>
//                             </p>
//                         </div>

//                         <div className="grid md:grid-cols-[70%_30%] gap-6 mb-6 items-start">
//                             <div className="grid md:grid-cols-2 gap-6">
//                                 <div>
//                                     <Field type="text" name="name" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Name" />
//                                     {errors.name && touched.name && <div className="text-red-600">{errors.name}</div>}
//                                 </div>
//                                 <div>
//                                     <Field type="text" name="designation" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Designation" />
//                                     {errors.designation && touched.designation && <div className="text-red-600">{errors.designation}</div>}
//                                 </div>
//                                 <div>
//                                     <Field type="text" name="dob" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Date of Birth" />
//                                     {errors.dob && touched.dob && <div className="text-red-600">{errors.dob}</div>}
//                                 </div>
//                                 <div>
//                                     <div className="flex">
//                                         <Field type="email" name="email" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Email" />
//                                         <button type="button" className="ml-2 text-[#FF9F08] py-2 px-4">Verify</button>
//                                     </div>
//                                     {errors.email && touched.email && <div className="text-red-600">{errors.email}</div>}
//                                 </div>
//                             </div>
//                             <div>
//                                 <label className="block text-gray-600 mb-2">Owner Member Contact Number</label>
//                                 <div className="flex flex-col lg:items-center">
//                                     <div className="flex flex-col lg:flex-row gap-2 lg:gap-0">
//                                         <CustomRadioButton
//                                             id="mobile"
//                                             name="contact"
//                                             value="mobile"
//                                             checked={values.contact === 'mobile'}
//                                             onChange={() => setFieldValue('contact', 'mobile')}
//                                             label="Mobile"
//                                         />
//                                         <CustomRadioButton
//                                             id="landline"
//                                             name="contact"
//                                             value="landline"
//                                             checked={values.contact === 'landline'}
//                                             onChange={() => setFieldValue('contact', 'landline')}
//                                             label="Landline"
//                                         />
//                                         <CustomRadioButton
//                                             id="both"
//                                             name="contact"
//                                             value="both"
//                                             checked={values.contact === 'both'}
//                                             onChange={() => setFieldValue('contact', 'both')}
//                                             label="Both"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div>
//                                     {values.contact === 'mobile' && (
//                                         <div>
//                                             <label className="block text-gray-600 mb-2">Mobile Number (OTP Verification Via SMS)</label>
//                                             <div className="flex flex-col items-start gap-2 lg:gap-0 lg:flex-row lg:items-center">
//                                                 <Field as="select" name="mobileCountryCode" className="p-3 border border-customOrange outline-none rounded mr-2">
//                                                     <option>IND +91</option>
//                                                     <option>USA +1</option>
//                                                     <option>UK +44</option>
//                                                 </Field>
//                                                 <Field type="text" name="mobile" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Mobile Number" />
//                                                 <button type="button" className="ml-2 py-3 px-6 text-[#FF9F08]">Verify Number</button>
//                                             </div>
//                                         </div>
//                                     )}

//                                     {values.contact === 'landline' && (
//                                         <div>
//                                             <label className="block text-gray-600 mb-2">Landline Number</label>
//                                             <Field type="text" name="landline" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Landline Number" />
//                                         </div>
//                                     )}

//                                     {values.contact === 'both' && (
//                                         <div>
//                                             <div>
//                                                 <label className="block text-gray-600 mb-2">Mobile Number (OTP Verification Via SMS)</label>
//                                                 <div className="flex flex-col items-start gap-2 lg:gap-0 lg:flex-row lg:items-center">
//                                                     <Field as="select" name="mobileCountryCode" className="p-3 border border-customOrange outline-none rounded mr-2">
//                                                         <option>IND +91</option>
//                                                         <option>USA +1</option>
//                                                         <option>UK +44</option>
//                                                     </Field>
//                                                     <Field type="text" name="mobile" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Mobile Number" />
//                                                     <button type="button" className="ml-2 py-3 px-6 text-[#FF9F08]">Verify Number</button>
//                                                 </div>
//                                             </div>
//                                             <div className="mt-5">
//                                                 <label className="block text-gray-600 mb-2">Landline Number</label>
//                                                 <Field type="text" name="landline" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Landline Number" />
//                                             </div>
//                                         </div>
//                                     )}
//                                 </div>

//                             </div>
//                             <button
//                                     type="submit"
//                                     className="w-[20%] mt-4 py-2 px-4 bg-[#FF9F08] text-white rounded-md"
//                                 >
//                                     Back
//                                 </button>
//                         </div>

//                         <OTPModal
//                             isOpen={isModalOpen}
//                             onClose={handleCloseModal}
//                             onSubmitOTP={handleSubmitOTP}
//                         />
//                     </Form>
//                 )}
//             </Formik>
//         </div>
//     );
// };

// export default OwnerTabForm;
// import React, { useState } from 'react';
// import { Formik, Field, Form } from 'formik';
// import * as Yup from 'yup';
// import CustomRadioButton from "../../CommonComponents/CustomRadioButton";
// import OTPModal from '../../CommonComponents/Modal';
// import useStore from "../../store/UnitDetail";
// import axios from 'axios';

// // Validation schema using Yup
// const validationSchema = Yup.object({
//     idType: Yup.string().required('Required'),
//     idDocumentNumber: Yup.string().required('Required'),
//     name: Yup.string().required('Required'),
//     dob: Yup.string().required('Required'),
//     email: Yup.string().required('Required'),
//     designation: Yup.string().required('Required'),
//     mobile: Yup.string().required('Required'),
// });

// const OwnerTabForm = ({ onSubmitOwner }) => {
//     const { ownerDetails, setOwnerDetails } = useStore();
//     const [selectedValue, setSelectedValue] = React.useState('mobile');
//     const [isModalOpen, setIsModalOpen] = React.useState(false);
//     const [isOtpVerification, setIsOtpVerification] = React.useState(false); // To track OTP verification state
//     const [referenceId, setReferenceId] = useState("");
//     const [transactionId, setTransactionId] = useState("");
//     const [useCase, setUseCase] = useState("");
//     const [documentId, setDocumentId] = useState("");
//     // Function to fetch document details
//     const fetchDocumentDetails = async (idType, idDocumentNumber, actions, setFieldValue) => {
//         let token = localStorage.getItem("token");
//         setFieldValue('dob', "");
//         setFieldValue('name', "");
//         // Handle PAN or Driving License case here
//         try {
//             // Example for PAN or Driving License
//             const response = await axios.post('http://43.204.36.147:8067/userVerification', {
//                 useCase: idType,
//                 documentId: idDocumentNumber


//             }, {
//                 headers: { 'Authorization': `Bearer ${token}` }
//             });
//             if (idType == "PAN") {
//                 const { name, dob, email, designation, mobile } = response.data.data;
//                 setFieldValue('name', name);
//                 setFieldValue('dob', dob);
//             } else if (idType == "AADHAR_REQUEST_OTP") {
//                 const { reference_id, transaction_id } = response.data.data;
//                 setUseCase(idType);
//                 setDocumentId(idDocumentNumber);

//                 setReferenceId(reference_id);
//                 setTransactionId(transaction_id);
//                 setIsModalOpen(true);
//             }
           
//         } catch (error) {
//             console.error('Error fetching document details:', error);
//         }
        
//     };

//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//          // Reset OTP verification state
//         setReferenceId("");
//         setTransactionId("");
//         setUseCase("");
//         setDocumentId("");
//     };

//     const handleSubmitOTP = async (actions, otp) => {
//         alert("otp screen");
//         let token = localStorage.getItem("token");

//         try {
//             // Assuming the OTP API endpoint
//             const response = await axios.post('http://43.204.36.147:8067/aadharValidateOtp', {
//                 referenceId: referenceId,
//                 transactionId: transactionId,
//                 otp: "335181",
//                 useCase: "AADHAR_VALIDATE_OTP",






//                 documentId: documentId,

//             }, {
//                 headers: { 'Authorization': `Bearer ${token}` }
//             });

//             const data1 = response.data;
//             let responseData = data1.data;

//             actions.setValues({
//                 ...actions.values,
//                 name: responseData.name,
//                 dob: responseData.dob
//                 // Update other fields if necessary
//             });

            
//             alert("otp api");
//         } catch (error) {
//             console.error("Error verifying OTP:", error);
//         }
//         setReferenceId("");
//         setTransactionId("");
//         setIsModalOpen(false);
//         setUseCase("");
//         setDocumentId("");
//         actions.setSubmitting(false);
//     };

//     return (
//         <div className='mt-15 mr-7'>
//             <div className="mb-6">
//                 <h2 className="text-lg font-semibold">Legal Identity Details <span className="text-sm font-normal">(Personal Photo Identification Document/Certificate Number)</span></h2>
//                 <p className="text-sm text-gray-700">
//                     <strong className="text-[#FF9F08]">Note:</strong> ID Must Be - Government Issued And Legally Valid <br />
//                     ID Must Have - Recent Photograph And Date Of Birth
//                 </p>
//             </div>

//             <Formik
//                 initialValues={ownerDetails}
//                 validationSchema={validationSchema}
//                 onSubmit={(values, actions) => {
//                     console.log('Form submitted with values:', values);
//                     onSubmitOwner(values);
//                     setOwnerDetails(values);
//                     const { idDocumentNumber, idType } = values;
//                     if (idDocumentNumber && idType) {
//                         if (idType === 'PAN') {
//                             actions.setValues({
//                                 ...values,
//                                 name: 'Victor Avery',
//                                 dob: '09/Jan/1996',
//                                 email: 'victoravery@gmail.com',
//                                 designation: 'Test 1',
//                                 mobile: '98 98 252125',
//                             });
//                         } else if (idType === 'DIL') {
//                             actions.setValues({
//                                 ...values,
//                                 name: 'Zoe Berry',
//                                 dob: '22/Nov/1998',
//                                 email: 'zeoberry@gmail.com',
//                                 designation: 'Test 2',
//                                 mobile: '11 2336 5358',
//                             });
//                         } else if (idType === 'AADHAR_REQUEST_OTP') {
//                             setIsModalOpen(true); // Open modal for Aadhar
//                         }
//                     }
//                 }}
//             >
//                 {({ errors, touched, values, setFieldValue, setValues, setSubmitting }) => (
//                     <Form>
//                         <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
//                             <div>
//                                 <label className="block text-gray-600 mb-2">Photo Id Type</label>
//                                 <Field as="select" name="idType" className="w-full p-3 border border-customOrange outline-none rounded">
//                                     <option value="">Select Category</option>
//                                     <option value="PAN">PAN</option>
//                                     <option value="AADHAR_REQUEST_OTP">Aadhar</option>
//                                     <option value="DIL">Driving Licence</option>
//                                 </Field>
//                                 {errors.idType && touched.idType && <div className="text-red-600">{errors.idType}</div>}
//                             </div>
//                             <div>
//                                 <label className="block text-gray-600 mb-2">Photo Id Document/Certificate Number</label>
//                                 <div className="flex">
//                                     <Field type="text" name="idDocumentNumber" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="HGEU49660T" />
//                                     {values.idType === 'AADHAR_REQUEST_OTP' ? (
//                                         <button
//                                             type="button"
//                                             className="ml-2 border border-customOrange text-[#FF9F08] py-2 px-4 rounded-md"
//                                             onClick={() => fetchDocumentDetails(values.idType, values.idDocumentNumber, { setValues }, setFieldValue)}
//                                         >
//                                             Request OTP
//                                         </button>
//                                     ) : (
//                                         <button
//                                             type="button"
//                                             className="ml-2 border border-customOrange text-[#FF9F08] py-2 px-4 rounded-md"
//                                             onClick={() => fetchDocumentDetails(values.idType, values.idDocumentNumber, { setValues }, setFieldValue)}
//                                         >
//                                             Validate
//                                         </button>
//                                     )}
//                                 </div>
//                                 {errors.idDocumentNumber && touched.idDocumentNumber && <div className="text-red-600">{errors.idDocumentNumber}</div>}
//                             </div>
//                         </div>

//                         <div className="mb-6">
//                             <h2 className="text-lg font-semibold">Business Owner-Group Member Details</h2>
//                             <p className="text-sm text-gray-700">
//                                 All The Business Transactions Are Done Against The Name Of The Business Entity...Read More <br />
//                                 <span className="text-[#FF9F08]">(Minimum 1 Member Details Must Be Provided)</span>
//                             </p>
//                         </div>

//                         <div className="grid md:grid-cols-[70%_30%] gap-6 mb-6 items-start">
//                             <div className="grid md:grid-cols-2 gap-6">
//                                 <div>
//                                     <Field type="text" name="name" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Name" />
//                                     {errors.name && touched.name && <div className="text-red-600">{errors.name}</div>}
//                                 </div>
//                                 <div>
//                                     <Field type="text" name="designation" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Designation" />
//                                     {errors.designation && touched.designation && <div className="text-red-600">{errors.designation}</div>}
//                                 </div>
//                                 <div>
//                                     <Field type="text" name="dob" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Date of Birth" />
//                                     {errors.dob && touched.dob && <div className="text-red-600">{errors.dob}</div>}
//                                 </div>
//                                 <div>
//                                     <div className="flex">
//                                         <Field type="email" name="email" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Email" />
//                                         <button type="button" className="ml-2 text-[#FF9F08] py-2 px-4">Verify</button>
//                                     </div>
//                                     {errors.email && touched.email && <div className="text-red-600">{errors.email}</div>}
//                                 </div>
//                             </div>
//                             <div>
//                                 <label className="block text-gray-600 mb-2">Owner Member Contact Number</label>
//                                 <div className="flex flex-col lg:items-center">
//                                     <div className="flex flex-col lg:flex-row gap-2 lg:gap-0">
//                                         <CustomRadioButton
//                                             id="mobile"
//                                             name="contact"
//                                             value="mobile"
//                                             checked={values.contact === 'mobile'}
//                                             onChange={() => setFieldValue('contact', 'mobile')}
//                                             label="Mobile"
//                                         />
//                                         <CustomRadioButton
//                                             id="landline"
//                                             name="contact"
//                                             value="landline"
//                                             checked={values.contact === 'landline'}
//                                             onChange={() => setFieldValue('contact', 'landline')}
//                                             label="Landline"
//                                         />
//                                         <CustomRadioButton
//                                             id="both"
//                                             name="contact"
//                                             value="both"
//                                             checked={values.contact === 'both'}
//                                             onChange={() => setFieldValue('contact', 'both')}
//                                             label="Both"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div>
//                                     {values.contact === 'mobile' && (
//                                         <div>
//                                             <label className="block text-gray-600 mb-2">Mobile Number (OTP Verification Via SMS)</label>
//                                             <div className="flex flex-col items-start gap-2 lg:gap-0 lg:flex-row lg:items-center">
//                                                 <Field as="select" name="mobileCountryCode" className="p-3 border border-customOrange outline-none rounded mr-2">
//                                                     <option>IND +91</option>
//                                                     <option>USA +1</option>
//                                                     <option>UK +44</option>
//                                                 </Field>
//                                                 <Field type="text" name="mobile" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Mobile Number" />
//                                                 <button type="button" className="ml-2 py-3 px-6 text-[#FF9F08]">Verify Number</button>
//                                             </div>
//                                         </div>
//                                     )}

//                                     {values.contact === 'landline' && (
//                                         <div>
//                                             <label className="block text-gray-600 mb-2">Landline Number</label>
//                                             <Field type="text" name="landline" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Landline Number" />
//                                         </div>
//                                     )}

//                                     {values.contact === 'both' && (
//                                         <div>
//                                             <div>
//                                                 <label className="block text-gray-600 mb-2">Mobile Number (OTP Verification Via SMS)</label>
//                                                 <div className="flex flex-col items-start gap-2 lg:gap-0 lg:flex-row lg:items-center">
//                                                     <Field as="select" name="mobileCountryCode" className="p-3 border border-customOrange outline-none rounded mr-2">
//                                                         <option>IND +91</option>
//                                                         <option>USA +1</option>
//                                                         <option>UK +44</option>
//                                                     </Field>
//                                                     <Field type="text" name="mobile" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Mobile Number" />
//                                                     <button type="button" className="ml-2 py-3 px-6 text-[#FF9F08]">Verify Number</button>
//                                                 </div>
//                                             </div>
//                                             <div className="mt-5">
//                                                 <label className="block text-gray-600 mb-2">Landline Number</label>
//                                                 <Field type="text" name="landline" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Landline Number" />
//                                             </div>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                             <button
//                                 type="submit"
//                                 className="w-[20%] mt-4 py-2 px-4 bg-[#FF9F08] text-white rounded-md"
//                             >
//                                 Back
//                             </button>
//                         </div>

//                         <OTPModal
//                             isOpen={isModalOpen}
//                             onClose={handleCloseModal}
//                             onSubmitOTP={(otp) => handleSubmitOTP({ setValues, setSubmitting }, otp)}
//                         />
//                     </Form>
//                 )}
//             </Formik>
//         </div>
//     );
// };

// export default OwnerTabForm;

import React, { useState } from 'react';
import { Formik, Field, Form,Error } from 'formik';
import * as Yup from 'yup';
import CustomRadioButton from "../../CommonComponents/CustomRadioButton";
import OTPModal from '../../CommonComponents/Modal';
import useStore from "../../store/UnitDetail";
import axios from 'axios';

// Validation schema using Yup
const validationSchema = Yup.object({
    idType: Yup.string().required('Required'),
    idDocumentNumber: Yup.string().required('Required'),
    name: Yup.string().required('Required'),
    dob: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
    designation: Yup.string().required('Required'),
    mobile: Yup.string().required('Required'),
});

const OwnerTabForm = ({ onSubmitOwner }) => {
    const { ownerDetails, setOwnerDetails } = useStore();
    const [selectedValue, setSelectedValue] = React.useState('mobile');
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [otpSubmitted, setOtpSubmitted] = useState(false);
    const [referenceId, setReferenceId] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [useCase, setUseCase] = useState("");
    const [documentId, setDocumentId] = useState("");

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
                setFieldValue("idType",idType);
                setFieldValue("idDocumentNumber",idDocumentNumber);
                // setUseCase(idType);
                // setDocumentId(idDocumentNumber);
                // setReferenceId(reference_id);
                // setTransactionId(transaction_id);
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

    const handleSubmitOTP = async (actions, otp,idDocumentNumber) => {
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
console.log(">>>>>>>>>>>>>>>name",responseData.name);
            // actions.setValues({
            //     ...actions.values,
            //     name: responseData.name,
            //     dob: responseData.dob
            //     // Update other fields if necessary
            // });
            actions.setFieldValue("idType","AADHAR_REQUEST_OTP");
            actions.setFieldValue("idDocumentNumber",idDocumentNumber);
          
            actions.setFieldValue("dob", responseData.dob);
            actions.setFieldValue("name",responseData.name);
           
            actions.setOtpSubmitted(true);
            setTimeout(() => {
                actions.validateForm();
            }, 1000);
    
        } catch (error) {
            console.error("Error verifying OTP:", error);
        }
        setReferenceId("");
        setTransactionId("");
        setIsModalOpen(false);
        setUseCase("");
        setDocumentId("");
        // actions.setSubmitting(false);
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

            <Formik
                initialValues={ownerDetails}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                    console.log('Form submitted with values:', values);
                    onSubmitOwner(values);
                    setOwnerDetails(values);
                    // if (otpSubmitted) {
                    //     actions.setSubmitting(false);
                    // }
                    const { idDocumentNumber, idType } = values;
                    // if (idDocumentNumber && idType) {
                    //     if (idType === 'PAN') {
                    //         actions.setValues({
                    //             ...values,
                    //             name: 'Victor Avery',
                    //             dob: '09/Jan/1996',
                    //             email: 'victoravery@gmail.com',
                    //             designation: 'Test 1',
                    //             mobile: '98 98 252125',
                    //         });
                    //     } else if (idType === 'DIL') {
                    //         actions.setValues({
                    //             ...values,
                    //             name: 'Zoe Berry',
                    //             dob: '22/Nov/1998',
                    //             email: 'zeoberry@gmail.com',
                    //             designation: 'Test 2',
                    //             mobile: '11 2336 5358',
                    //         });
                    //     } else if (idType === 'AADHAR_REQUEST_OTP') {
                    //         setIsModalOpen(true); // Open modal for Aadhar
                    //     }
                    // }
                }}
            >
                {({ errors, touched, values, setFieldValue, setValues, validateForm  }) => (
                    <Form>
                        <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
                            <div>
                                <label className="block text-gray-600 mb-2">Photo Id Type</label>
                                <Field as="select" name="idType" className="w-full p-3 border border-customOrange outline-none rounded">
                                    <option value="">Select Category</option>
                                    <option value="PAN">PAN</option>
                                    <option value="AADHAR_REQUEST_OTP">Aadhar</option>
                                    <option value="DIL">Driving Licence</option>
                                </Field>
                                {errors.idType && touched.idType && <div className="text-red-600">{errors.idType}</div>}
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
                                {errors.idDocumentNumber && touched.idDocumentNumber && <div className="text-red-600">{errors.idDocumentNumber}</div>}
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
                                    <Field type="text" name="name" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Name" />
                                    {errors.name && touched.name && <div className="text-red-600">{errors.name}</div>}
                                </div>
                                <div>
                                    <Field type="text" name="designation" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Designation" />
                                    {errors.designation && touched.designation && <div className="text-red-600">{errors.designation}</div>}
                                </div>
                                <div>
                                    <Field type="text" name="dob" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Date of Birth" />
                                    {errors.dob && touched.dob && <div className="text-red-600">{errors.dob}</div>}
                                </div>
                                <div>
                                    <div className="flex">
                                        <Field type="email" name="email" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Email" />
                                        <button type="button" className="ml-2 text-[#FF9F08] py-2 px-4">Verify</button>
                                    </div>
                                    {errors.email && touched.email && <div className="text-red-600">{errors.email}</div>}
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-600 mb-2">Owner Member Contact Number</label>
                                <div className="flex flex-col lg:items-center">
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
                                                <Field type="text" name="mobile" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Mobile Number" />
                                                <button type="button" className="ml-2 py-3 px-6 text-[#FF9F08]">Verify Number</button>
                                            </div>
                                        </div>
                                    )}

                                    {values.contact === 'landline' && (
                                        <div>
                                            <label className="block text-gray-600 mb-2">Landline Number</label>
                                            <Field type="text" name="landline" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Landline Number" />
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
                                                    <Field type="text" name="mobile" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Mobile Number" />
                                                    <button type="button" className="ml-2 py-3 px-6 text-[#FF9F08]">Verify Number</button>
                                                </div>
                                            </div>
                                            <div className="mt-5">
                                                <label className="block text-gray-600 mb-2">Landline Number</label>
                                                <Field type="text" name="landline" className="w-full p-3 border border-customOrange outline-none rounded" placeholder="Landline Number" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-[20%] mt-4 py-2 px-4 bg-[#FF9F08] text-white rounded-md"
                            >
                                Back
                            </button>
                        </div>

                        <OTPModal
                            isOpen={isModalOpen}
                            onClose={handleCloseModal}
                            onSubmitOTP={(otp) => handleSubmitOTP({ setValues, validateForm  ,setFieldValue}, otp,values.idDocumentNumber)}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default OwnerTabForm;

