// // import React from "react";
// // import CustomRadioButton from "../../CommonComponents/CustomRadioButton";

// // const BusinessTabForm = () => {
// // 	const [selectedValue, setSelectedValue] = React.useState("mobile");
// // 	const [inputValues, setInputValues] = React.useState({});
// // 	const [selectedIdType, setSelectedIdType] = React.useState("");

// // 	const handleRadioChange = (event) => {
// // 		setSelectedValue(event.target.value);
// // 	};

// // 	const handleOnInputChange = (e) => {
// // 		setInputValues({
// // 			...inputValues,
// // 			[e.target.name]: e.target.value,
// // 		});
// // 	};

// // 	const handleIdTypeChange = (e) => {
// // 		setSelectedIdType(e.target.value);
// // 		handleOnInputChange(e);
// // 	};

// // 	const onValidateId = () => {
// // 		const { idDocumentNumber, idType } = inputValues;
// // 		if (idDocumentNumber && idType) {
// // 			if (idType === "PAN") {
// // 				setInputValues({
// // 					...inputValues,
// // 					addressLine1: "National Highway 8",
// // 					addressLine2: "823/4 south street",
// // 					city: "Kamrej",
// // 					state: "Gujarat",
// // 					email: "nawabdutta@gmail.com",
// // 					zipCode: "394185",
// // 					mobile: "98 98 252125",
// // 				});
// // 			}
// // 			if (idType === "GST") {
// // 				setInputValues({
// // 					...inputValues,
// // 					addressLine1: "Netaji Subhash Marg",
// // 					addressLine2: "Chandni Chowk",
// // 					city: "New Delhi",
// // 					state: "Delhi",
// // 					email: "niyatinakulsastry@gmail.com",
// // 					zipCode: "110006",
// // 					mobile: "11 2336 5358",
// // 				});
// // 			}
// // 			if (idType === "CIN") {
// // 				setInputValues({
// // 					...inputValues,
// // 					addressLine1: "Ravindra Path",
// // 					addressLine2: "Old Dhan Mandi",
// // 					city: "Sri Ganganagar",
// // 					state: "Rajasthan",
// // 					email: "animeshrajpatel@gmail.com",
// // 					zipCode: "335001",
// // 					mobile: "92 69 620001",
// // 				});
// // 			}
// // 		}
// // 	};

// // 	return (
// // 		<div className="mt-15 mr-7 ">
// // 			<div className="grid md:grid-cols-[60%_40%] gap-6 mb-6 ">
// // 				<div>
// // 					<label className="block text-gray-600 mb-2">
// // 						Photo Id Type
// // 					</label>
// // 					<select
// // 						name="idType"
// // 						className="w-full p-3 border border-customOrange outline-none rounded"
// // 						onChange={handleIdTypeChange}
// // 					>
// // 						<option value={"select"}>Select Category</option>
// // 						<option value={"PAN"}>PAN</option>
// // 						<option value={"GST"}>GST</option>
// // 						<option value={"CIN"}>CIN</option>
// // 					</select>
// // 				</div>
// // 				<div>
// // 					<label className="block text-gray-600 mb-2">
// // 						Photo Id Document/Certificate Number
// // 					</label>
// // 					<div className="flex">
// // 						<input
// // 							type="text"
// // 							className="w-full p-3 border border-customOrange outline-none rounded"
// // 							placeholder="HGEU49660T"
// // 							name="idDocumentNumber"
// // 							onChange={handleOnInputChange}
// // 						/>
// // 						<button
// // 							className="ml-2 border border-customOrange text-[#FF9F08] py-2 px-4 rounded-md"
// // 							onClick={onValidateId}
// // 						>
// // 							Validate
// // 						</button>
// // 					</div>
// // 				</div>
// // 			</div>

// // 			<div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
// // 				<div>
// // 					<label className="block text-gray-600 mb-2">
// // 						Legally Registered Name Of Business Entity
// // 					</label>
// // 					<input
// // 						type="text"
// // 						className="w-full p-3 border border-customOrange outline-none rounded"
// // 						placeholder="Legally Registered Name"
// // 					/>
// // 					<p className="mt-1 text-xs text-gray-600">
// // 						All The Business Transactions Are Done Against The Name
// // 						Of The Business Entity.
// // 					</p>
// // 				</div>
// // 				<div>
// // 					<label className="block text-gray-600 mb-2">
// // 						Business Entity Registration Country
// // 					</label>
// // 					<div className="flex">
// // 						<select className="w-full p-3 border border-customOrange outline-none rounded">
// // 							<option>India</option>
// // 						</select>
// // 					</div>
// // 				</div>
// // 			</div>

// // 			<div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
// // 				{/* left   */}
// // 				<div className="flex flex-col gap-4">
// // 					<div className="flex gap-4">
// // 						<div className="w-[50%]">
// // 							<input
// // 								type="text"
// // 								className="w-full p-3 border border-customOrange outline-none rounded"
// // 								placeholder="Address Line 01"
// // 								name="addressLine1"
// // 								value={inputValues?.addressLine1 || ""}
// // 								onChange={handleOnInputChange}
// // 							/>
// // 						</div>

// // 						<div className="w-[50%]">
// // 							<input
// // 								type="text"
// // 								className="w-full p-3 border border-customOrange outline-none rounded"
// // 								placeholder="Address Line 02"
// // 								name="addressLine2"
// // 								value={inputValues?.addressLine2 || ""}
// // 								onChange={handleOnInputChange}
// // 							/>
// // 						</div>
// // 					</div>

// // 					<div className="flex gap-4">
// // 						<div className="w-[50%]">
// // 							<input
// // 								type="text"
// // 								className="w-full p-3 border border-customOrange outline-none rounded"
// // 								placeholder="Town/City"
// // 								name="city"
// // 								value={inputValues?.city || ""}
// // 								onChange={handleOnInputChange}
// // 							/>
// // 						</div>
// // 						<div className="w-[50%]">
// // 							<input
// // 								type="text"
// // 								className="w-full p-3 border border-customOrange outline-none rounded"
// // 								placeholder="State/Province/Territory"
// // 								name="state"
// // 								value={inputValues?.state || ""}
// // 								onChange={handleOnInputChange}
// // 							/>
// // 						</div>
// // 					</div>

// // 					<div className="flex gap-4">
// // 						<div className="w-[50%]">
// // 							<input
// // 								type="text"
// // 								className="w-full p-3 border border-customOrange outline-none rounded"
// // 								placeholder="Postal Code"
// // 								name="zipCode"
// // 								value={inputValues?.zipCode || ""}
// // 								onChange={handleOnInputChange}
// // 							/>
// // 						</div>
// // 						<div className="w-[50%]">
// // 							<input
// // 								type="text"
// // 								className="w-full p-3 border border-customOrange outline-none rounded"
// // 								placeholder="Add GPS Location"
// // 							/>
// // 						</div>
// // 					</div>

// // 					<div>
// // 						<div className="flex gap-2 ">
// // 							<div className="w-[70%]">
// // 								<input
// // 									type="text"
// // 									className="w-full p-3 border border-customOrange outline-none rounded"
// // 									placeholder="Add Business Logo"
// // 								/>
// // 							</div>
// // 							<div>
// // 								<button className="  ml-2 border border-customOrange text-[#FF9F08] py-3 px-8 rounded-md border-dashed">
// // 									Upload
// // 								</button>
// // 							</div>
// // 						</div>
// // 					</div>
// // 				</div>

// // 				{/* right  */}

// // 				<div className="flex flex-col gap-3">
// // 					<div className="flex  ">
// // 						<input
// // 							type="email"
// // 							className="w-full p-3 border border-customOrange outline-none rounded"
// // 							placeholder="Email Verify Option"
// // 							name="email"
// // 							value={inputValues?.email || ""}
// // 							onChange={handleOnInputChange}
// // 						/>
// // 						<button className="ml-2 text-[#FF9F08] py-2 px-4">
// // 							Verify
// // 						</button>
// // 					</div>

// // 					<div>
// // 						<label
// // 							className="block text-gray-600 mb-2"
// // 							htmlFor="contactNumber"
// // 						>
// // 							Unit/Reception Contact Number (Optional)
// // 						</label>
// // 						<div className="flex  items-center">
// // 							<div className="flex flex-col lg:flex-row gap-2 lg:gap-0">
// // 								<CustomRadioButton
// // 									id="mobile"
// // 									name="contact"
// // 									value="mobile"
// // 									checked={selectedValue === "mobile"}
// // 									onChange={handleRadioChange}
// // 									label="Mobile"
// // 								/>
// // 								<CustomRadioButton
// // 									id="landline"
// // 									name="contact"
// // 									value="landline"
// // 									checked={selectedValue === "landline"}
// // 									onChange={handleRadioChange}
// // 									label="Landline"
// // 								/>
// // 								<CustomRadioButton
// // 									id="both"
// // 									name="contact"
// // 									value="both"
// // 									checked={selectedValue === "both"}
// // 									onChange={handleRadioChange}
// // 									label="Both"
// // 								/>
// // 							</div>
// // 						</div>
// // 					</div>

// // 					<div>
// // 						{selectedValue === "mobile" ? (
// // 							<div>
// // 								<label
// // 									className="block text-gray-600 mb-2"
// // 									htmlFor="mobileNumber"
// // 								>
// // 									Mobile Number (OTP Verification Via SMS)
// // 								</label>
// // 								<div className="flex flex-col items-start gap-2 lg:gap-0 lg:flex-row lg:items-center">
// // 									<select className="p-3 border border-customOrange outline-none rounded mr-2">
// // 										<option>IND +91</option>
// // 										<option>USA +1</option>
// // 										<option>UK +44</option>
// // 									</select>
// // 									<input
// // 										className="w-full p-3 border border-customOrange outline-none rounded"
// // 										type="text"
// // 										id="mobileNumber"
// // 										placeholder="Mobile Number"
// // 										name="mobile"
// // 										value={inputValues?.mobile || ""}
// // 										onChange={handleOnInputChange}
// // 									/>
// // 									<button className="ml-2 py-3 px-6 text-[#FF9F08]">
// // 										Verify
// // 									</button>
// // 								</div>
// // 							</div>
// // 						) : selectedValue === "landline" ? (
// // 							<div>
// // 								<label
// // 									className="block text-gray-600 mb-2"
// // 									htmlFor="mobileNumber"
// // 								>
// // 									Landline Number
// // 								</label>
// // 								<div className="flex items-center">
// // 									<input
// // 										className="w-full p-3 border border-customOrange outline-none rounded"
// // 										type="text"
// // 										id="landlineNumber"
// // 										placeholder="Landline Number"
// // 									/>
// // 								</div>
// // 							</div>
// // 						) : (
// // 							<div>
// // 								<div>
// // 									<label
// // 										className="block text-gray-600 mb-2"
// // 										htmlFor="mobileNumber"
// // 									>
// // 										Mobile Number (OTP Verification Via SMS)
// // 									</label>
// // 									<div className="flex items-center">
// // 										<select className="p-3 border border-customOrange outline-none rounded mr-2">
// // 											<option>IND +91</option>
// // 											<option>USA +1</option>
// // 											<option>UK +44</option>
// // 										</select>
// // 										<input
// // 											className="w-full p-3 border border-customOrange outline-none rounded"
// // 											type="text"
// // 											id="mobileNumber"
// // 											placeholder="Mobile Number"
// // 										/>
// // 										<button className="ml-2 py-3 px-6 text-[#FF9F08]">
// // 											Verify Number
// // 										</button>
// // 									</div>
// // 								</div>
// // 								<div className="mt-5">
// // 									<label
// // 										className="block text-gray-600 mb-2"
// // 										htmlFor="mobileNumber"
// // 									>
// // 										Landline Number
// // 									</label>
// // 									<div className="flex items-center">
// // 										<input
// // 											className="w-full p-3 border border-customOrange outline-none rounded"
// // 											type="text"
// // 											id="landlineNumber"
// // 											placeholder="Landline Number"
// // 										/>
// // 									</div>
// // 								</div>
// // 							</div>
// // 						)}
// // 					</div>
// // 				</div>
// // 			</div>

	
// // 		</div>
// // 	);
// // };

// // export default BusinessTabForm;
// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import CustomRadioButton from "../../CommonComponents/CustomRadioButton";
// import useStore from "../../store/UnitDetail";
// const BusinessTabForm = ({ onSubmitBusiness }) => {
// 	const { businessDetails, setBusinessDetails } = useStore();
//     // const initialValues = {
//     //     idType: '',
//     //     idDocumentNumber: '',
//     //     legallyRegisteredName: '',
//     //     businessEntityRegistrationCountry: 'India',
//     //     addressLine1: '',
//     //     addressLine2: '',
//     //     city: '',
//     //     state: '',
//     //     zipCode: '',
//     //     gpsLocation: '',
//     //     businessLogo: '',
//     //     email: '',
//     //     mobile: '',
//     //     contact: 'mobile',
//     //     landline: ''
//     // };

//     const validationSchema = Yup.object({
//         // idType: Yup.string().required('Required'),
//         // idDocumentNumber: Yup.string().required('Required'),
//         // legallyRegisteredName: Yup.string().required('Required'),
//         // addressLine1: Yup.string().required('Required'),
//         // addressLine2: Yup.string().required('Required'),
//         // city: Yup.string().required('Required'),
//         // state: Yup.string().required('Required'),
       
		
		
		
// 		// zipCode: Yup.string().required('Required'),
//         // email: Yup.string().required('Required'),
//         // // mobile: Yup.string().required('Required'),
//         // landline: Yup.string().required('Required'),
//     });

//     return (
//         <Formik
//             initialValues={businessDetails}
//              validationSchema={validationSchema}
//             onSubmit={(values) => {
				
// 				setBusinessDetails(values);
// 				console.log(">>>>>>hi submit method works")
//                 // Call the parent component's callback with form values
//                 onSubmitBusiness(values);
//             }}
//         >
//             {({ setFieldValue, values }) => (
//                 <Form>
//                     <div className="mt-15 mr-7">
//                         <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
//                             <div>
//                                 <label className="block text-gray-600 mb-2">
//                                     Photo Id Type
//                                 </label>
//                                 <Field as="select" name="idType" className="w-full p-3 border border-customOrange outline-none rounded">
//                                     <option value="">Select Category</option>
//                                     <option value="PAN">PAN</option>
//                                     <option value="GST">GST</option>
//                                     <option value="CIN">CIN</option>
//                                 </Field>
//                                 <ErrorMessage name="idType" component="div" className="text-red-500 text-xs mt-1" />
//                             </div>
//                             <div>
//                                 <label className="block text-gray-600 mb-2">
//                                     Photo Id Document/Certificate Number
//                                 </label>
//                                 <div className="flex">
//                                     <Field
//                                         type="text"
//                                         name="idDocumentNumber"
//                                         className="w-full p-3 border border-customOrange outline-none rounded"
//                                         placeholder="HGEU49660T"
//                                     />
//                                     <button
//                                         type="button"
//                                         className="ml-2 border border-customOrange text-[#FF9F08] py-2 px-4 rounded-md"
//                                         onClick={() => {
//                                             // Validation logic here
//                                         }}
//                                     >
//                                         Validate
//                                     </button>
//                                     <ErrorMessage name="idDocumentNumber" component="div" className="text-red-500 text-xs mt-1" />
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
//                             <div>
//                                 <label className="block text-gray-600 mb-2">
//                                     Legally Registered Name Of Business Entity
//                                 </label>
//                                 <Field
//                                     type="text"
//                                     name="legallyRegisteredName"
//                                     className="w-full p-3 border border-customOrange outline-none rounded"
//                                     placeholder="Legally Registered Name"
//                                 />
//                                 <ErrorMessage name="legallyRegisteredName" component="div" className="text-red-500 text-xs mt-1" />
//                                 <p className="mt-1 text-xs text-gray-600">
//                                     All The Business Transactions Are Done Against The Name
//                                     Of The Business Entity.
//                                 </p>
//                             </div>
//                             <div>
//                                 <label className="block text-gray-600 mb-2">
//                                     Business Entity Registration Country
//                                 </label>
//                                 <Field as="select" name="businessEntityRegistrationCountry" className="w-full p-3 border border-customOrange outline-none rounded">
//                                     <option value="India">India</option>
//                                 </Field>
//                             </div>
//                         </div>

//                         <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
//                             <div className="flex flex-col gap-4">
//                                 <div className="flex gap-4">
//                                     <div className="w-[50%]">
//                                         <Field
//                                             type="text"
//                                             name="addressLine1"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="Address Line 01"
//                                         />
//                                         <ErrorMessage name="addressLine1" component="div" className="text-red-500 text-xs mt-1" />
//                                     </div>

//                                     <div className="w-[50%]">
//                                         <Field
//                                             type="text"
//                                             name="addressLine2"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="Address Line 02"
//                                         />
//                                         <ErrorMessage name="addressLine2" component="div" className="text-red-500 text-xs mt-1" />
//                                     </div>
//                                 </div>

//                                 <div className="flex gap-4">
//                                     <div className="w-[50%]">
//                                         <Field
//                                             type="text"
//                                             name="city"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="Town/City"
//                                         />
//                                         <ErrorMessage name="city" component="div" className="text-red-500 text-xs mt-1" />
//                                     </div>
//                                     <div className="w-[50%]">
//                                         <Field
//                                             type="text"
//                                             name="state"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="State/Province/Territory"
//                                         />
//                                         <ErrorMessage name="state" component="div" className="text-red-500 text-xs mt-1" />
//                                     </div>
//                                 </div>

//                                 <div className="flex gap-4">
//                                     <div className="w-[50%]">
//                                         <Field
//                                             type="text"
//                                             name="zipCode"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="Postal Code"
//                                         />
//                                         <ErrorMessage name="zipCode" component="div" className="text-red-500 text-xs mt-1" />
//                                     </div>
//                                     <div className="w-[50%]">
//                                         <Field
//                                             type="text"
//                                             name="gpsLocation"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="Add GPS Location"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <div className="flex gap-2 ">
//                                         <div className="w-[70%]">
//                                             <Field
//                                                 type="text"
//                                                 name="businessLogo"
//                                                 className="w-full p-3 border border-customOrange outline-none rounded"
//                                                 placeholder="Add Business Logo"
//                                             />
//                                         </div>
//                                         <div>
//                                             <button className="ml-2 border border-customOrange text-[#FF9F08] py-3 px-8 rounded-md border-dashed">
//                                                 Upload
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="flex flex-col gap-3">
//                                 <div className="flex">
//                                     <Field
//                                         type="email"
//                                         name="email"
//                                         className="w-full p-3 border border-customOrange outline-none rounded"
//                                         placeholder="Email Verify Option"
//                                     />
//                                     <button type="button" className="ml-2 text-[#FF9F08] py-2 px-4">
//                                         Verify
//                                     </button>
//                                     <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
//                                 </div>

//                                 <div>
//                                     <label className="block text-gray-600 mb-2">
//                                         Unit/Reception Contact Number (Optional)
//                                     </label>
//                                     <div className="flex items-center">
//                                         <div className="flex flex-col lg:flex-row gap-2 lg:gap-0">
//                                             <CustomRadioButton
//                                                 id="mobile"
//                                                 name="contact"
//                                                 value="mobile"
//                                                 checked={values.contact === "mobile"}
//                                                 onChange={() => setFieldValue('contact', 'mobile')}
//                                                 label="Mobile"
//                                             />
//                                             <CustomRadioButton
//                                                 id="landline"
//                                                 name="contact"
//                                                 value="landline"
//                                                 checked={values.contact === "landline"}
//                                                 onChange={() => setFieldValue('contact', 'landline')}
//                                                 label="Landline"
//                                             />
//                                             <CustomRadioButton
//                                                 id="both"
//                                                 name="contact"
//                                                 value="both"
//                                                 checked={values.contact === "both"}
//                                                 onChange={() => setFieldValue('contact', 'both')}
//                                                 label="Both"
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {values.contact === "mobile" && (
//                                     <div>
//                                         <label className="block text-gray-600 mb-2">
//                                             Mobile Number (OTP Verification Via SMS)
//                                         </label>
//                                         <div className="flex flex-col items-start gap-2 lg:gap-0 lg:flex-row lg:items-center">
//                                             <Field as="select" name="mobileCountryCode" className="p-3 border border-customOrange outline-none rounded mr-2">
//                                                 <option value="IND +91">IND +91</option>
//                                                 <option value="USA +1">USA +1</option>
//                                                 <option value="UK +44">UK +44</option>
//                                             </Field>
//                                             <Field
//                                                 type="text"
//                                                 name="mobile"
//                                                 className="w-full p-3 border border-customOrange outline-none rounded"
//                                                 placeholder="Mobile Number"
//                                             />
//                                             <button type="button" className="ml-2 py-3 px-6 text-[#FF9F08]">
//                                                 Verify
//                                             </button>
//                                             <ErrorMessage name="mobile" component="div" className="text-red-500 text-xs mt-1" />
//                                         </div>
//                                     </div>
//                                 )}

//                                 {values.contact === "landline" && (
//                                     <div>
//                                         <label className="block text-gray-600 mb-2">
//                                             Landline Number
//                                         </label>
//                                         <Field
//                                             type="text"
//                                             name="landline"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="Landline Number"
//                                         />
//                                         <ErrorMessage name="landline" component="div" className="text-red-500 text-xs mt-1" />
//                                     </div>
//                                 )}

//                                 {values.contact === "both" && (
//                                     <div>
//                                         <div>
//                                             <label className="block text-gray-600 mb-2">
//                                                 Mobile Number (OTP Verification Via SMS)
//                                             </label>
//                                             <div className="flex items-center">
//                                                 <Field as="select" name="mobileCountryCode" className="p-3 border border-customOrange outline-none rounded mr-2">
//                                                     <option value="IND +91">IND +91</option>
//                                                     <option value="USA +1">USA +1</option>
//                                                     <option value="UK +44">UK +44</option>
//                                                 </Field>
//                                                 <Field
//                                                     type="text"
//                                                     name="mobile"
//                                                     className="w-full p-3 border border-customOrange outline-none rounded"
//                                                     placeholder="Mobile Number"
//                                                 />
//                                                 <button type="button" className="ml-2 py-3 px-6 text-[#FF9F08]">
//                                                     Verify Number
//                                                 </button>
//                                                 <ErrorMessage name="mobile" component="div" className="text-red-500 text-xs mt-1" />
//                                             </div>
//                                         </div>
//                                         <div className="mt-5">
//                                             <label className="block text-gray-600 mb-2">
//                                                 Landline Number
//                                             </label>
//                                             <Field
//                                                 type="text"
//                                                 name="landline"
//                                                 className="w-full p-3 border border-customOrange outline-none rounded"
//                                                 placeholder="Landline Number"
//                                             />
//                                             <ErrorMessage name="landline" component="div" className="text-red-500 text-xs mt-1" />
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>

//                         <button
//                             type="submit"
//                             className="mt-4 py-2 px-4 bg-[#FF9F08] text-white rounded-md"
//                         >
//                             Back
//                         </button>
//                     </div>
//                 </Form>
//             )}
//         </Formik>
//     );
// };

// export default BusinessTabForm;
// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import CustomRadioButton from "../../CommonComponents/CustomRadioButton";
// import useStore from "../../store/UnitDetail";

// const BusinessTabForm = ({ onSubmitBusiness }) => {
//     const { businessDetails, setBusinessDetails } = useStore();

//     const validationSchema = Yup.object({
//         idType: Yup.string().required('Required'),
//         idDocumentNumber: Yup.string().required('Required'),
//         legallyRegisteredName: Yup.string().required('Required'),
//         addressLine1: Yup.string().required('Required'),
//         addressLine2: Yup.string().required('Required'),
//         city: Yup.string().required('Required'),
//         state: Yup.string().required('Required'),
//         zipCode: Yup.string().required('Required'),
//         email: Yup.string().required('Required'),
//         landline: Yup.string().required('Required'),
//     });

//     const handleValidate = async (idType, idDocumentNumber, setFieldValue) => {
//         try {
//             // Replace with your API endpoint
//             const response = await axios.post('http://43.204.36.147:8067/businessVerification', {
// 				"useCase":idType,
// 				"documentId": idDocumentNumber
//             },
// 			{
// 				headers: {
// 					'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJIYXJzaGl0MTJAZ21haWwuY29tIiwibW9iaWxlTnVtYmVyIjo5OTg3NjU0MzIxLCJpc3MiOiJtYWlraGFuZSIsImV4cCI6MTcyMzIyODAzNSwidXNlcklkIjo0LCJpYXQiOjE3MjIzMzkwMDIsImVtYWlsIjoiSGFyc2hpdDEyQGdtYWlsLmNvbSIsInVzZXJuYW1lIjpudWxsfQ.x3yJ0o-kTpUrEw2yI4-YC0Rjq_cn4Eepfuamn8Sx3NJg6WnDguYS523tGv3XroKel142CBVedD3H3IomwFYp1g` // Replace YOUR_ACCESS_TOKEN with the actual token
// 				}
// 			}
// 		);
//             const data1 = response.data;
// console.log(">>>>>>>>>>>>>>>>data button validation",data1?.data)
// let reponsedata=data1.data;
//             // Update form fields with response data
//             setFieldValue('legallyRegisteredName', reponsedata.name);
//             setFieldValue('addressLine1', reponsedata.address);
//             // setFieldValue('addressLine2', data.addressLine2);
//             // setFieldValue('city', data.city);
//             // setFieldValue('state', data.state);
//             // setFieldValue('zipCode', data.zipCode );
//         } catch (error) {
//             console.error("Validation error:", error);
//         }
//     };

//     return (
//         <Formik
//             initialValues={businessDetails}
//             validationSchema={validationSchema}
//             onSubmit={(values) => {
//                 setBusinessDetails(values);
//                 console.log(">>>>>>hi submit method works")
//                 onSubmitBusiness(values);
//             }}
//         >
//             {({ setFieldValue, values }) => (
//                 <Form>
//                     <div className="mt-15 mr-7">
//                         <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
//                             <div>
//                                 <label className="block text-gray-600 mb-2">
//                                     Photo Id Type
//                                 </label>
//                                 <Field as="select" name="idType" className="w-full p-3 border border-customOrange outline-none rounded">
//                                     <option value="">Select Category</option>
//                                     <option value="PAN">PAN</option>
//                                     <option value="GST">GST</option>
//                                     <option value="CIN">CIN</option>
//                                 </Field>
//                                 <ErrorMessage name="idType" component="div" className="text-red-500 text-xs mt-1" />
//                             </div>
//                             <div>
//                                 <label className="block text-gray-600 mb-2">
//                                     Photo Id Document/Certificate Number
//                                 </label>
//                                 <div className="flex">
//                                     <Field
//                                         type="text"
//                                         name="idDocumentNumber"
//                                         className="w-full p-3 border border-customOrange outline-none rounded"
//                                         placeholder="HGEU49660T"
//                                     />
//                                     <button
//                                         type="button"
//                                         className="ml-2 border border-customOrange text-[#FF9F08] py-2 px-4 rounded-md"
//                                         onClick={() => handleValidate(values.idType, values.idDocumentNumber, setFieldValue)}
//                                     >
//                                         Validate
//                                     </button>
//                                     <ErrorMessage name="idDocumentNumber" component="div" className="text-red-500 text-xs mt-1" />
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
//                             <div>
//                                 <label className="block text-gray-600 mb-2">
//                                     Legally Registered Name Of Business Entity
//                                 </label>
//                                 <Field
//                                     type="text"
//                                     name="legallyRegisteredName"
//                                     className="w-full p-3 border border-customOrange outline-none rounded"
//                                     placeholder="Legally Registered Name"
//                                 />
//                                 <ErrorMessage name="legallyRegisteredName" component="div" className="text-red-500 text-xs mt-1" />
//                                 <p className="mt-1 text-xs text-gray-600">
//                                     All The Business Transactions Are Done Against The Name
//                                     Of The Business Entity.
//                                 </p>
//                             </div>
//                             <div>
//                                 <label className="block text-gray-600 mb-2">
//                                     Business Entity Registration Country
//                                 </label>
//                                 <Field as="select" name="businessEntityRegistrationCountry" className="w-full p-3 border border-customOrange outline-none rounded">
//                                     <option value="India">India</option>
//                                 </Field>
//                             </div>
//                         </div>

//                         <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
//                             <div className="flex flex-col gap-4">
//                                 <div className="flex gap-4">
//                                     <div className="w-[50%]">
//                                         <Field
//                                             type="text"
//                                             name="addressLine1"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="Address Line 01"
//                                         />
//                                         <ErrorMessage name="addressLine1" component="div" className="text-red-500 text-xs mt-1" />
//                                     </div>

//                                     <div className="w-[50%]">
//                                         <Field
//                                             type="text"
//                                             name="addressLine2"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="Address Line 02"
//                                         />
//                                         <ErrorMessage name="addressLine2" component="div" className="text-red-500 text-xs mt-1" />
//                                     </div>
//                                 </div>

//                                 <div className="flex gap-4">
//                                     <div className="w-[50%]">
//                                         <Field
//                                             type="text"
//                                             name="city"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="Town/City"
//                                         />
//                                         <ErrorMessage name="city" component="div" className="text-red-500 text-xs mt-1" />
//                                     </div>
//                                     <div className="w-[50%]">
//                                         <Field
//                                             type="text"
//                                             name="state"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="State/Province/Territory"
//                                         />
//                                         <ErrorMessage name="state" component="div" className="text-red-500 text-xs mt-1" />
//                                     </div>
//                                 </div>

//                                 <div className="flex gap-4">
//                                     <div className="w-[50%]">
//                                         <Field
//                                             type="text"
//                                             name="zipCode"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="Postal Code"
//                                         />
//                                         <ErrorMessage name="zipCode" component="div" className="text-red-500 text-xs mt-1" />
//                                     </div>
//                                     <div className="w-[50%]">
//                                         <Field
//                                             type="text"
//                                             name="gpsLocation"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="Add GPS Location"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <div className="flex gap-2 ">
//                                         <div className="w-[70%]">
//                                             <Field
//                                                 type="text"
//                                                 name="businessLogo"
//                                                 className="w-full p-3 border border-customOrange outline-none rounded"
//                                                 placeholder="Add Business Logo"
//                                             />
//                                         </div>
//                                         <div>
//                                             <button className="ml-2 border border-customOrange text-[#FF9F08] py-3 px-8 rounded-md border-dashed">
//                                                 Upload
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="flex flex-col gap-3">
//                                 <div className="flex">
//                                     <Field
//                                         type="email"
//                                         name="email"
//                                         className="w-full p-3 border border-customOrange outline-none rounded"
//                                         placeholder="Email Verify Option"
//                                     />
//                                     <button type="button" className="ml-2 text-[#FF9F08] py-2 px-4">
//                                         Verify
//                                     </button>
//                                     <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
//                                 </div>

//                                 <div>
//                                     <label className="block text-gray-600 mb-2">
//                                         Unit/Reception Contact Number (Optional)
//                                     </label>
//                                     <div className="flex items-center">
//                                         <div className="flex flex-col lg:flex-row gap-2 lg:gap-0">
//                                             <CustomRadioButton
//                                                 id="mobile"
//                                                 name="contact"
//                                                 value="mobile"
//                                                 checked={values.contact === "mobile"}
//                                                 onChange={() => setFieldValue('contact', 'mobile')}
//                                                 label="Mobile"
//                                             />
//                                             <CustomRadioButton
//                                                 id="landline"
//                                                 name="contact"
//                                                 value="landline"
//                                                 checked={values.contact === "landline"}
//                                                 onChange={() => setFieldValue('contact', 'landline')}
//                                                 label="Landline"
//                                             />
//                                             <CustomRadioButton
//                                                 id="both"
//                                                 name="contact"
//                                                 value="both"
//                                                 checked={values.contact === "both"}
//                                                 onChange={() => setFieldValue('contact', 'both')}
//                                                 label="Both"
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {values.contact === "mobile" && (
//                                     <div>
//                                         <label className="block text-gray-600 mb-2">
//                                             Mobile Number (OTP Verification Via SMS)
//                                         </label>
//                                         <div className="flex flex-col items-start gap-2 lg:gap-0 lg:flex-row lg:items-center">
//                                             <Field as="select" name="mobileCountryCode" className="p-3 border border-customOrange outline-none rounded mr-2">
//                                                 <option value="IND +91">IND +91</option>
//                                                 <option value="USA +1">USA +1</option>
//                                                 <option value="UK +44">UK +44</option>
//                                             </Field>
//                                             <Field
//                                                 type="text"
//                                                 name="mobile"
//                                                 className="w-full p-3 border border-customOrange outline-none rounded"
//                                                 placeholder="Mobile Number"
//                                             />
//                                             <button type="button" className="ml-2 py-3 px-6 text-[#FF9F08]">
//                                                 Verify
//                                             </button>
//                                             <ErrorMessage name="mobile" component="div" className="text-red-500 text-xs mt-1" />
//                                         </div>
//                                     </div>
//                                 )}

//                                 {values.contact === "landline" && (
//                                     <div>
//                                         <label className="block text-gray-600 mb-2">
//                                             Landline Number
//                                         </label>
//                                         <Field
//                                             type="text"
//                                             name="landline"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="Landline Number"
//                                         />
//                                         <ErrorMessage name="landline" component="div" className="text-red-500 text-xs mt-1" />
//                                     </div>
//                                 )}

//                                 {values.contact === "both" && (
//                                     <div>
//                                         <div>
//                                             <label className="block text-gray-600 mb-2">
//                                                 Mobile Number (OTP Verification Via SMS)
//                                             </label>
//                                             <div className="flex items-center">
//                                                 <Field as="select" name="mobileCountryCode" className="p-3 border border-customOrange outline-none rounded mr-2">
//                                                     <option value="IND +91">IND +91</option>
//                                                     <option value="USA +1">USA +1</option>
//                                                     <option value="UK +44">UK +44</option>
//                                                 </Field>
//                                                 <Field
//                                                     type="text"
//                                                     name="mobile"
//                                                     className="w-full p-3 border border-customOrange outline-none rounded"
//                                                     placeholder="Mobile Number"
//                                                 />
//                                                 <button type="button" className="ml-2 py-3 px-6 text-[#FF9F08]">
//                                                     Verify Number
//                                                 </button>
//                                                 <ErrorMessage name="mobile" component="div" className="text-red-500 text-xs mt-1" />
//                                             </div>
//                                         </div>
//                                         <div className="mt-5">
//                                             <label className="block text-gray-600 mb-2">
//                                                 Landline Number
//                                             </label>
//                                             <Field
//                                                 type="text"
//                                                 name="landline"
//                                                 className="w-full p-3 border border-customOrange outline-none rounded"
//                                                 placeholder="Landline Number"
//                                             />
//                                             <ErrorMessage name="landline" component="div" className="text-red-500 text-xs mt-1" />
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>

//                         <button
//                             type="submit"
//                             className="mt-4 py-2 px-4 bg-[#FF9F08] text-white rounded-md"
//                         >
//                             Back
//                         </button>
//                     </div>
//                 </Form>
//             )}
//         </Formik>
//     );
// };

// export default BusinessTabForm;
// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import CustomRadioButton from "../../CommonComponents/CustomRadioButton";
// import useStore from "../../store/UnitDetail";

// const BusinessTabForm = ({ onSubmitBusiness }) => {
//     const { businessDetails, setBusinessDetails } = useStore();

//     const validationSchema = Yup.object({
//         idType: Yup.string().required('Required'),
//         idDocumentNumber: Yup.string().required('Required'),
//         legallyRegisteredName: Yup.string().required('Required'),
//         addressLine1: Yup.string().required('Required'),
//         addressLine2: Yup.string().required('Required'),
//         city: Yup.string().required('Required'),
//         state: Yup.string().required('Required'),
//         zipCode: Yup.string().required('Required'),
//         email: Yup.string().required('Required'),
//         landline: Yup.string().required('Required'),
//     });

//     const handleValidate = async (idType, idDocumentNumber, setFieldValue) => {
       
// 		if(idType!="PAN"){
// 		try {
			
//             const response = await axios.post('http://43.204.36.147:8067/businessVerification', {
//                 useCase: idType,
//                 documentId: idDocumentNumber
//             },
//             {
//                 headers: {
//                     'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJIYXJzaGl0MTJAZ21haWwuY29tIiwibW9iaWxlTnVtYmVyIjo5OTg3NjU0MzIxLCJpc3MiOiJtYWlraGFuZSIsImV4cCI6MTcyMzIyODAzNSwidXNlcklkIjo0LCJpYXQiOjE3MjIzMzkwMDIsImVtYWlsIjoiSGFyc2hpdDEyQGdtYWlsLmNvbSIsInVzZXJuYW1lIjpudWxsfQ.x3yJ0o-kTpUrEw2yI4-YC0Rjq_cn4Eepfuamn8Sx3NJg6WnDguYS523tGv3XroKel142CBVedD3H3IomwFYp1g` // Replace with your actual token
//                 }
//             });
//             const data1 = response.data;
//             let responseData = data1.data;
//             setFieldValue('legallyRegisteredName', responseData.name );
//             setFieldValue('addressLine1', responseData.address);
//             // Update other fields if necessary
//         } catch (error) {
//             console.error("Validation error:", error);
//         }}else{


// 			try {
			
// 				const response = await axios.post('http://43.204.36.147:8067/userVerification', {
// 					useCase: idType,
// 					documentId: idDocumentNumber
// 				},
// 				{
// 					headers: {
// 						'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJIYXJzaGl0MTJAZ21haWwuY29tIiwibW9iaWxlTnVtYmVyIjo5OTg3NjU0MzIxLCJpc3MiOiJtYWlraGFuZSIsImV4cCI6MTcyMzIyODAzNSwidXNlcklkIjo0LCJpYXQiOjE3MjIzMzkwMDIsImVtYWlsIjoiSGFyc2hpdDEyQGdtYWlsLmNvbSIsInVzZXJuYW1lIjpudWxsfQ.x3yJ0o-kTpUrEw2yI4-YC0Rjq_cn4Eepfuamn8Sx3NJg6WnDguYS523tGv3XroKel142CBVedD3H3IomwFYp1g` // Replace with your actual token
// 					}
// 				});
// 				const data1 = response.data;
// 				let responseData = data1.data;
// 				setFieldValue('legallyRegisteredName', responseData.name );
// 				setFieldValue('addressLine1', responseData.address);
// 				// Update other fields if necessary
// 			} catch (error) {
// 				console.error("Validation error:", error);
// 			}

// 		}
//     };

//     return (
//         <Formik
//             initialValues={businessDetails}
//             validationSchema={validationSchema}
//             onSubmit={(values) => {
//                 setBusinessDetails(values);
//                 onSubmitBusiness(values);
//             }}
//         >
//             {({ setFieldValue, values }) => (
//                 <Form>
//                     <div className="mt-15 mr-7">
//                         <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
//                             <div>
//                                 <label className="block text-gray-600 mb-2">Photo Id Type</label>
//                                 <Field as="select" name="idType" className="w-full p-3 border border-customOrange outline-none rounded">
//                                     <option value="">Select Category</option>
//                                     <option value="PAN">PAN</option>
//                                     <option value="GST">GST</option>
//                                     <option value="CIN">CIN</option>
//                                 </Field>
//                                 <ErrorMessage name="idType" component="div" className="text-red-500 text-xs mt-1" />
//                             </div>
//                             <div>
//                                 <label className="block text-gray-600 mb-2">Photo Id Document/Certificate Number</label>
//                                 <div className="flex">
//                                     <Field
//                                         type="text"
//                                         name="idDocumentNumber"
//                                         className="w-full p-3 border border-customOrange outline-none rounded"
//                                         placeholder="HGEU49660T"
//                                     />
//                                     <button
//                                         type="button"
//                                         className="ml-2 border border-customOrange text-[#FF9F08] py-2 px-4 rounded-md"
//                                         onClick={() => handleValidate(values.idType, values.idDocumentNumber, setFieldValue)}
//                                     >
//                                         Validate
//                                     </button>
//                                     <ErrorMessage name="idDocumentNumber" component="div" className="text-red-500 text-xs mt-1" />
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
//                             <div>
//                                 <label className="block text-gray-600 mb-2">Legally Registered Name Of Business Entity</label>
//                                 <Field
//                                     type="text"
//                                     name="legallyRegisteredName"
//                                     className="w-full p-3 border border-customOrange outline-none rounded"
//                                     placeholder="Legally Registered Name"
//                                 />
//                                 <ErrorMessage name="legallyRegisteredName" component="div" className="text-red-500 text-xs mt-1" />
//                                 <p className="mt-1 text-xs text-gray-600">
//                                     All The Business Transactions Are Done Against The Name
//                                     Of The Business Entity.
//                                 </p>
//                             </div>
//                             <div>
//                                 <label className="block text-gray-600 mb-2">Business Entity Registration Country</label>
//                                 <Field as="select" name="businessEntityRegistrationCountry" className="w-full p-3 border border-customOrange outline-none rounded">
//                                     <option value="India">India</option>
//                                 </Field>
//                             </div>
//                         </div>

//                         <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
//                             <div className="flex flex-col gap-4">
//                                 <div className="flex gap-4">
//                                     <div className="w-[50%]">
//                                         <Field
//                                             type="text"
//                                             name="addressLine1"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="Address Line 01"
//                                         />
//                                         <ErrorMessage name="addressLine1" component="div" className="text-red-500 text-xs mt-1" />
//                                     </div>

//                                     <div className="w-[50%]">
//                                         <Field
//                                             type="text"
//                                             name="addressLine2"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="Address Line 02"
//                                         />
//                                         <ErrorMessage name="addressLine2" component="div" className="text-red-500 text-xs mt-1" />
//                                     </div>
//                                 </div>

//                                 <div className="flex gap-4">
//                                     <div className="w-[50%]">
//                                         <Field
//                                             type="text"
//                                             name="city"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="Town/City"
//                                         />
//                                         <ErrorMessage name="city" component="div" className="text-red-500 text-xs mt-1" />
//                                     </div>
//                                     <div className="w-[50%]">
//                                         <Field
//                                             type="text"
//                                             name="state"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="State/Province/Territory"
//                                         />
//                                         <ErrorMessage name="state" component="div" className="text-red-500 text-xs mt-1" />
//                                     </div>
//                                 </div>

//                                 <div className="flex gap-4">
//                                     <div className="w-[50%]">
//                                         <Field
//                                             type="text"
//                                             name="zipCode"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="Postal Code"
//                                         />
//                                         <ErrorMessage name="zipCode" component="div" className="text-red-500 text-xs mt-1" />
//                                     </div>
//                                     <div className="w-[50%]">
//                                         <Field
//                                             type="text"
//                                             name="gpsLocation"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="Add GPS Location"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <div className="flex gap-2 ">
//                                         <div className="w-[70%]">
//                                             <Field
//                                                 type="text"
//                                                 name="businessLogo"
//                                                 className="w-full p-3 border border-customOrange outline-none rounded"
//                                                 placeholder="Add Business Logo"
//                                             />
//                                         </div>
//                                         <div>
//                                             <button className="ml-2 border border-customOrange text-[#FF9F08] py-3 px-8 rounded-md border-dashed">
//                                                 Upload
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="flex flex-col gap-3">
//                                 <div className="flex">
//                                     <Field
//                                         type="email"
//                                         name="email"
//                                         className="w-full p-3 border border-customOrange outline-none rounded"
//                                         placeholder="Email Verify Option"
//                                     />
//                                     <button type="button" className="ml-2 text-[#FF9F08] py-2 px-4">
//                                         Verify
//                                     </button>
//                                     <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
//                                 </div>

//                                 <div>
//                                     <label className="block text-gray-600 mb-2">
//                                         Unit/Reception Contact Number (Optional)
//                                     </label>
//                                     <div className="flex items-center">
//                                         <div className="flex flex-col lg:flex-row gap-2 lg:gap-0">
//                                             <CustomRadioButton
//                                                 id="mobile"
//                                                 name="contact"
//                                                 value="mobile"
//                                                 checked={values.contact === "mobile"}
//                                                 onChange={() => setFieldValue('contact', 'mobile')}
//                                                 label="Mobile"
//                                             />
//                                             <CustomRadioButton
//                                                 id="landline"
//                                                 name="contact"
//                                                 value="landline"
//                                                 checked={values.contact === "landline"}
//                                                 onChange={() => setFieldValue('contact', 'landline')}
//                                                 label="Landline"
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <label className="block text-gray-600 mb-2">Mobile Number (With Country Code)</label>
//                                     <div className="flex">
//                                         <Field
//                                             type="tel"
//                                             name="mobileNumber"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="+91 000 000 0000"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <label className="block text-gray-600 mb-2">Landline Number (With Country Code)</label>
//                                     <div className="flex">
//                                         <Field
//                                             type="tel"
//                                             name="landline"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="+91 000 000 0000"
//                                         />
//                                         <ErrorMessage name="landline" component="div" className="text-red-500 text-xs mt-1" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="flex justify-between items-center mt-5">
//                             <div className="flex items-center gap-2 text-[#FF9F08]">
//                                 <button type="button" className="border border-customOrange py-2 px-4 rounded-md">
//                                     Previous
//                                 </button>
//                                 <span>to Unit Details</span>
//                             </div>
//                             <div className="flex items-center gap-2 text-white">
//                                 <span>to Team Details</span>
//                                 <button type="submit" className="bg-[#FF9F08] py-2 px-4 rounded-md">
//                                     Next
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </Form>
//             )}
//         </Formik>
//     );
// };

// export default BusinessTabForm;


// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import CustomRadioButton from "../../CommonComponents/CustomRadioButton";
// import useStore from "../../store/UnitDetail";

// const BusinessTabForm = ({ onSubmitBusiness }) => {
//     const { businessDetails, setBusinessDetails } = useStore();

//     const validationSchema = Yup.object({
//         idType: Yup.string().required('Required'),
//         idDocumentNumber: Yup.string().required('Required'),
//         legallyRegisteredName: Yup.string().required('Required'),
//         addressLine1: Yup.string().required('Required'),
//         addressLine2: Yup.string().required('Required'),
//         city: Yup.string().required('Required'),
//         state: Yup.string().required('Required'),
//         zipCode: Yup.string().required('Required'),
//         email: Yup.string().required('Required'),
//         contactNumber: Yup.string().required('Required'),
//     });

//     const handleValidate = async (idType, idDocumentNumber, setFieldValue) => {
//         let token =localStorage.getItem("token");
//         const endpoint = idType === "PAN" ? 'userVerification' : 'businessVerification';
//         try {
//             const response = await axios.post(`http://43.204.36.147:8067/${endpoint}`, {
//                 useCase: idType,
//                 documentId: idDocumentNumber
//             }, {
//                 headers: {
//                     'Authorization': `Bearer ${token}` // Replace with your actual token
//                 }
//             });
//             const responseData = response.data.data;
//             setFieldValue('legallyRegisteredName', responseData.name);
//             setFieldValue('addressLine1', responseData.address);
//             // Update other fields if necessary
//         } catch (error) {
//             console.error("Validation error:", error);
//         }
//     };

//     const [selectedValue, setSelectedValue] = React.useState("mobile");

//     const handleRadioChange = (event) => {
//         setSelectedValue(event.target.value);
//     };

//     return (
//         <Formik
//             initialValues={businessDetails}
//             validationSchema={validationSchema}
//             onSubmit={(values) => {
//                 setBusinessDetails(values);
//                 onSubmitBusiness(values);
//             }}
//         >
//             {({ setFieldValue, values }) => (
//                 <Form>
//                     <div className="mt-15 mr-7">
//                         <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
//                             <div>
//                                 <label className="block text-gray-600 mb-2">Photo Id Type</label>
//                                 <Field as="select" name="idType" className="w-full p-3 border border-customOrange outline-none rounded">
//                                     <option value="">Select Category</option>
//                                     <option value="PAN">PAN</option>
//                                     <option value="GST">GST</option>
//                                     <option value="CIN">CIN</option>
//                                 </Field>
//                                 <ErrorMessage name="idType" component="div" className="text-red-500 text-xs mt-1" />
//                             </div>
//                             <div>
//                                 <label className="block text-gray-600 mb-2">Photo Id Document/Certificate Number</label>
//                                 <div className="flex">
//                                     <Field
//                                         type="text"
//                                         name="idDocumentNumber"
//                                         className="w-full p-3 border border-customOrange outline-none rounded"
//                                         placeholder="HGEU49660T"
//                                     />
//                                     <button
//                                         type="button"
//                                         className="ml-2 border border-customOrange text-[#FF9F08] py-2 px-4 rounded-md"
//                                         onClick={() => handleValidate(values.idType, values.idDocumentNumber, setFieldValue)}
//                                     >
//                                         Validate
//                                     </button>
//                                 </div>
//                                 <ErrorMessage name="idDocumentNumber" component="div" className="text-red-500 text-xs mt-1" />
//                             </div>
//                         </div>

//                         <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
//                             <div>
//                                 <label className="block text-gray-600 mb-2">Legally Registered Name Of Business Entity</label>
//                                 <Field
//                                     type="text"
//                                     name="legallyRegisteredName"
//                                     className="w-full p-3 border border-customOrange outline-none rounded"
//                                     placeholder="Legally Registered Name"
//                                 />
//                                 <ErrorMessage name="legallyRegisteredName" component="div" className="text-red-500 text-xs mt-1" />
//                                 <p className="mt-1 text-xs text-gray-600">
//                                     All The Business Transactions Are Done Against The Name
//                                     Of The Business Entity.
//                                 </p>
//                             </div>
//                             <div>
//                                 <label className="block text-gray-600 mb-2">Business Entity Registration Country</label>
//                                 <Field as="select" name="businessEntityRegistrationCountry" className="w-full p-3 border border-customOrange outline-none rounded">
//                                     <option value="India">India</option>
//                                 </Field>
//                             </div>
//                         </div>

//                         <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
//                             <div className="flex flex-col gap-4">
//                                 <div className="flex gap-4">
//                                     <div className="w-[50%]">
//                                         <Field
//                                             type="text"
//                                             name="addressLine1"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="Address Line 01"
//                                         />
//                                         <ErrorMessage name="addressLine1" component="div" className="text-red-500 text-xs mt-1" />
//                                     </div>

//                                     <div className="w-[50%]">
//                                         <Field
//                                             type="text"
//                                             name="addressLine2"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="Address Line 02"
//                                         />
//                                         <ErrorMessage name="addressLine2" component="div" className="text-red-500 text-xs mt-1" />
//                                     </div>
//                                 </div>

//                                 <div className="flex gap-4">
//                                     <div className="w-[50%]">
//                                         <Field
//                                             type="text"
//                                             name="city"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="Town/City"
//                                         />
//                                         <ErrorMessage name="city" component="div" className="text-red-500 text-xs mt-1" />
//                                     </div>
//                                     <div className="w-[50%]">
//                                         <Field
//                                             type="text"
//                                             name="state"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="State/Province/Territory"
//                                         />
//                                         <ErrorMessage name="state" component="div" className="text-red-500 text-xs mt-1" />
//                                     </div>
//                                 </div>

//                                 <div className="flex gap-4">
//                                     <div className="w-[50%]">
//                                         <Field
//                                             type="text"
//                                             name="zipCode"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="Postal Code"
//                                         />
//                                         <ErrorMessage name="zipCode" component="div" className="text-red-500 text-xs mt-1" />
//                                     </div>
//                                     <div className="w-[50%]">
//                                         <Field
//                                             type="text"
//                                             name="gpsLocation"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="Add GPS Location"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <div className="flex gap-2">
//                                         <div className="w-[70%]">
//                                             <Field
//                                                 type="text"
//                                                 name="businessLogo"
//                                                 className="w-full p-3 border border-customOrange outline-none rounded"
//                                                 placeholder="Add Business Logo"
//                                             />
//                                         </div>
//                                         <div>
//                                             <button className="ml-2 border border-customOrange text-[#FF9F08] py-3 px-8 rounded-md border-dashed">
//                                                 Upload
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="flex flex-col gap-3">
//                                 <div className="flex">
//                                     <Field
//                                         type="email"
//                                         name="email"
//                                         className="w-full p-3 border border-customOrange outline-none rounded"
//                                         placeholder="Email Verify Option"
//                                     />
//                                     <button type="button" className="ml-2 text-[#FF9F08] py-2 px-4">
//                                         Verify
//                                     </button>
//                                     <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
//                                 </div>

//                                 <div>
//                                     <label className="block text-gray-600 mb-2" htmlFor="contactNumber">
//                                         Unit/Reception Contact Number (Optional)
//                                     </label>
//                                     <div className="flex items-center">
//                                         <div className="flex flex-col lg:flex-row gap-2 lg:gap-0">
//                                             <CustomRadioButton
//                                                 id="mobile"
//                                                 name="contact"
//                                                 value="mobile"
//                                                 checked={selectedValue === "mobile"}
//                                                 onChange={handleRadioChange}
//                                                 label="Mobile"
//                                             />
//                                             <CustomRadioButton
//                                                 id="landline"
//                                                 name="contact"
//                                                 value="landline"
//                                                 checked={selectedValue === "landline"}
//                                                 onChange={handleRadioChange}
//                                                 label="Landline"
//                                             />
//                                             <CustomRadioButton
//                                                 id="both"
//                                                 name="contact"
//                                                 value="both"
//                                                 checked={selectedValue === "both"}
//                                                 onChange={handleRadioChange}
//                                                 label="Both"
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {selectedValue === "mobile" && (
//                                     <Field
//                                         type="text"
//                                         name="contactNumber"
//                                         className="w-full p-3 border border-customOrange outline-none rounded"
//                                         placeholder="Enter Mobile Number"
//                                     />
//                                 )}
//                                 {selectedValue === "landline" && (
//                                     <Field
//                                         type="text"
//                                         name="contactNumber"
//                                         className="w-full p-3 border border-customOrange outline-none rounded"
//                                         placeholder="Enter Landline Number"
//                                     />
//                                 )}
//                                 {selectedValue === "both" && (
//                                     <div>
//                                         <Field
//                                             type="text"
//                                             name="mobileNumber"
//                                             className="w-full p-3 border border-customOrange outline-none rounded mb-2"
//                                             placeholder="Enter Mobile Number"
//                                         />
//                                         <Field
//                                             type="text"
//                                             name="landlineNumber"
//                                             className="w-full p-3 border border-customOrange outline-none rounded"
//                                             placeholder="Enter Landline Number"
//                                         />
//                                     </div>
//                                 )}
//                                 <ErrorMessage name="contactNumber" component="div" className="text-red-500 text-xs mt-1" />
//                             </div>
//                         </div>
//                         <button
//                             type="submit"
//                             className="mt-6 p-3 bg-customOrange text-white rounded"
//                         >
//                             Back
//                         </button>
//                     </div>
//                 </Form>
//             )}
//         </Formik>
//     );
// };

// export default BusinessTabForm;

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import CustomRadioButton from "../../CommonComponents/CustomRadioButton";
import useStore from "../../store/UnitDetail";

const BusinessTabForm = ({ onSubmitBusiness }) => {
    const { businessDetails, setBusinessDetails } = useStore();

    const validationSchema = Yup.object({
        // idType: Yup.string().required('Required'),
        // idDocumentNumber: Yup.string().required('Required'),
        // legallyRegisteredName: Yup.string().required('Required'),
        // addressLine1: Yup.string().required('Required'),
        // addressLine2: Yup.string().required('Required'),
        // city: Yup.string().required('Required'),
        // state: Yup.string().required('Required'),
        // zipCode: Yup.string().required('Required'),
        // email: Yup.string().required('Required'),
        // contactNumber: Yup.string().required('Required'),
        // businessLogo: Yup.mixed().required('Business logo is required')
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

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleFileChange = (event, setFieldValue) => {
        const file = event.currentTarget.files[0];
        if (file) {
            setFieldValue('businessLogo', file);
        }
    };

    return (
        <Formik
            initialValues={businessDetails}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                setBusinessDetails(values);
                onSubmitBusiness(values);
            }}
        >
            {({ setFieldValue, values }) => (
                <Form>
                    <div className="mt-15 mr-7">
                        <div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
                            <div>
                                <label className="block text-gray-600 mb-2">Photo Id Type</label>
                                <Field as="select" name="idType" className="w-full p-3 border border-customOrange outline-none rounded">
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
                                        onChange={(event) => handleFileChange(event, setFieldValue)}
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
                                        placeholder="Email Verify Option"
                                    />
                                    <button type="button" className="ml-2 text-[#FF9F08] py-2 px-4">
                                        Verify
                                    </button>
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
                                                onChange={handleRadioChange}
                                                label="Mobile"
                                            />
                                            <CustomRadioButton
                                                id="landline"
                                                name="contact"
                                                value="landline"
                                                checked={selectedValue === "landline"}
                                                onChange={handleRadioChange}
                                                label="Landline"
                                            />
                                            <CustomRadioButton
                                                id="both"
                                                name="contact"
                                                value="both"
                                                checked={selectedValue === "both"}
                                                onChange={handleRadioChange}
                                                label="Both"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {selectedValue === "mobile" && (
                                    <Field
                                        type="text"
                                        name="contactNumber"
                                        className="w-full p-3 border border-customOrange outline-none rounded"
                                        placeholder="Enter Mobile Number"
                                    />
                                )}
                                {selectedValue === "landline" && (
                                    <Field
                                        type="text"
                                        name="contactNumber"
                                        className="w-full p-3 border border-customOrange outline-none rounded"
                                        placeholder="Enter Landline Number"
                                    />
                                )}
                                {selectedValue === "both" && (
                                    <div>
                                        <Field
                                            type="text"
                                            name="mobileNumber"
                                            className="w-full p-3 border border-customOrange outline-none rounded mb-2"
                                            placeholder="Enter Mobile Number"
                                        />
                                        <Field
                                            type="text"
                                            name="landlineNumber"
                                            className="w-full p-3 border border-customOrange outline-none rounded"
                                            placeholder="Enter Landline Number"
                                        />
                                    </div>
                                )}
                                <ErrorMessage name="contactNumber" component="div" className="text-red-500 text-xs mt-1" />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="mt-6 p-3 bg-customOrange text-white rounded"
                        >
                            Back
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default BusinessTabForm;
