// import React from "react";
// import CustomCheckbox from "../../CommonComponents/CustomCheckBox";
// import CustomRadioButton from "../../CommonComponents/CustomRadioButton";

// const UnitDetails = () => {
// 	const [selectedValue, setSelectedValue] = React.useState("mobile");

// 	const handleRadioChange = (event) => {
// 		setSelectedValue(event.target.value);
// 	};
// 	return (
// 		<>
// 			<h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
// 				Unit Details
// 			</h3>
// 			<div className="grid grid-cols-1 text-sm md:grid-cols-3 gap-6">
// 				<div>
// 					<label
// 						className="block text-sm text-gray-600 mb-2"
// 						htmlFor="country"
// 					>
// 						Unit Registration Country
// 					</label>
// 					<select
// 						className="w-full p-3 border border-customOrange outline-none rounded"
// 						id="country"
// 					>
// 						<option>India</option>
// 						<option>USA</option>
// 						<option>UK</option>
// 					</select>
// 				</div>

// 				<div>
// 					<label
// 						className="block text-sm  text-gray-600 mb-2"
// 						htmlFor="category"
// 					>
// 						Category Selected
// 					</label>
// 					<select
// 						className="w-full p-3 border border-customOrange outline-none rounded"
// 						id="country"
// 					>
// 						<option>Liquor</option>
// 						<option>Wine Shop</option>
// 						<option>Restaurant & Bar</option>
// 					</select>
// 				</div>

// 				<div>
// 					<label
// 						className="block text-sm  text-gray-600 mb-2"
// 						htmlFor="ownership"
// 					>
// 						Unit Ownership Mode
// 					</label>
// 					<select
// 						className="w-full p-3 border border-customOrange outline-none rounded"
// 						id="ownership"
// 					>
// 						<option> Private Limited Company </option>
// 						<option> Public Limited Company </option>
// 						<option> Partnerships </option>
// 						<option> LLP Registration </option>
// 						<option> One Person Company </option>
// 						<option> Sole Proprietorship </option>
// 						<option> Section 8 Company </option>
// 					</select>
// 				</div>

// 				<div>
// 					<label
// 						className="block text-gray-600 mb-2"
// 						htmlFor="unitName"
// 					>
// 						Business Unit Name
// 					</label>
// 					<input
// 						className="w-full p-3 border border-customOrange outline-none rounded"
// 						type="text"
// 						id="unitName"
// 						placeholder="English Wine Shop"
// 					/>
// 				</div>

// 				<div>
// 					<label className="block text-gray mb-2" htmlFor="shopFor">
// 						Shop For
// 					</label>
// 					<div className="flex flex-col items-start gap-2 lg:flex-row lg:gap-0 lg:items-center">
// 						<div className="flex gap-2">
// 							<CustomCheckbox label="Liquor" />
// 						</div>
// 						<div className="flex gap-2">
// 							<CustomCheckbox label="Beer" />
// 						</div>
// 						<div className="flex gap-2">
// 							<CustomCheckbox label="Wine" />
// 						</div>
// 					</div>
// 				</div>

// 				<div>
// 					<label
// 						className="block text-gray-600 mb-2"
// 						htmlFor="subarea"
// 					>
// 						Subarea/Society/Landmark
// 					</label>
// 					<input
// 						className="w-full p-3 border border-customOrange outline-none rounded"
// 						type="text"
// 						id="subarea"
// 						placeholder="Enter Area Name"
// 					/>
// 				</div>

// 				<div>
// 					<label
// 						className="block text-gray-600 mb-2"
// 						htmlFor="locality"
// 					>
// 						Locality/Area Name
// 					</label>
// 					<input
// 						className="w-full p-3 border border-customOrange outline-none rounded"
// 						type="text"
// 						id="locality"
// 						placeholder="Enter Area Name"
// 					/>
// 				</div>

// 				<div>
// 					<label
// 						className="block text-gray-600 mb-2"
// 						htmlFor="shop-category"
// 					>
// 						Shop Category
// 					</label>
// 					<select
// 						className="w-full p-3 border border-customOrange outline-none rounded"
// 						id="shop-category"
// 					>
// 						<option>Counter Store</option>
// 						<option>Online Store</option>
// 					</select>
// 				</div>

// 				<div>
// 					<label
// 						className="block text-gray-600 mb-2"
// 						htmlFor="address"
// 					>
// 						Address
// 					</label>
// 					<input
// 						className="w-full p-3 border border-customOrange outline-none rounded"
// 						type="text"
// 						id="address"
// 						placeholder="Select Address"
// 					/>
// 				</div>

// 				<div className=" grid-cols-1 md:grid-cols-3 h-[230px]">
// 					<div>
// 						<label
// 							className="block text-gray-700 mb-2"
// 							htmlFor="currency"
// 						>
// 							Accepted Currency
// 						</label>
// 						<select
// 							className="w-full p-3 border border-customOrange outline-none rounded"
// 							id="currency"
// 						>
// 							<option>Indian Rupees : INR</option>
// 							<option>Euro : EUR</option>
// 							<option>South African Rand : ZAR</option>
// 							<option>American Dollars : USD</option>
// 							<option>British Pounds : GBD</option>
// 							<option>Japanese Yen : JPY</option>
// 						</select>
// 					</div>
// 				</div>

// 				<div className="grid-cols-1  md:grid-cols-2 gap-6">
// 					<div className=" flex flex-col lg:flex-row w-full  gap-6">
// 						<div className="w-full">
// 							<label
// 								className="block text-gray-700 mb-2"
// 								htmlFor="openTime"
// 							>
// 								Open Time
// 							</label>
// 							<input
// 								className="w-full p-3 border border-customOrange outline-none rounded"
// 								type="time"
// 								id="openTime"
// 								defaultValue="09:00"
// 							/>
// 						</div>
// 						<div className="w-full">
// 							<label
// 								className="block text-gray-700 mb-2"
// 								htmlFor="closeTime"
// 							>
// 								Close Time
// 							</label>
// 							<input
// 								className="w-full p-3 border border-customOrange outline-none rounded"
// 								type="time"
// 								id="closeTime"
// 								defaultValue="23:45"
// 							/>
// 						</div>
// 					</div>

// 					<div className="flex w-full gap-6 mt-5">
// 						<div>
// 							<label
// 								className="block text-gray-600 mb-2"
// 								htmlFor="paymentMethod"
// 							>
// 								Payment Method
// 							</label>
// 							<div className="flex flex-col gap-2 items-start lg:flex-row lg:items-center">
// 								<div className="flex">
// 									<CustomCheckbox label="Cash" />
// 								</div>
// 								<div className="flex">
// 									<CustomCheckbox label="Card" />
// 								</div>
// 								<div className="flex">
// 									<CustomCheckbox label="Mobile" />
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				<div className=" grid-cols-1 md:grid-cols-3">
// 					<div>
// 						<label
// 							className="block text-sm text-gray-600 mb-2"
// 							htmlFor="contactNumber"
// 						>
// 							Unit/Reception Contact{" "}
// 							<span className=" text-xs"> (Optional)</span>
// 						</label>
// 						<div className="flex items-center">
// 							<div className=" flex  flex-col gap-2  lg:flex-row ">
// 								<CustomRadioButton
// 									id="mobile"
// 									name="contact"
// 									value="mobile"
// 									checked={selectedValue === "mobile"}
// 									onChange={handleRadioChange}
// 									label="Mobile"
// 								/>
// 								<CustomRadioButton
// 									id="landline"
// 									name="contact"
// 									value="landline"
// 									checked={selectedValue === "landline"}
// 									onChange={handleRadioChange}
// 									label="Landline"
// 								/>
// 								<CustomRadioButton
// 									id="both"
// 									name="contact"
// 									value="both"
// 									checked={selectedValue === "both"}
// 									onChange={handleRadioChange}
// 									label="Both"
// 								/>
// 							</div>
// 						</div>
// 					</div>
// 					{selectedValue === "mobile" ? (
// 						<div className="mt-5">
// 							<label
// 								className="block text-gray-600 mb-2"
// 								htmlFor="mobileNumber"
// 							>
// 								Mobile Number <br />
// 								<span className="text-xs">
// 									{" "}
// 									(OTP Verification Via SMS)
// 								</span>
// 							</label>
// 							<div className="flex flex-col items-start gap-2 lg:flex-row lg:gap-0 lg:items-center">
// 								<select className="p-3 border border-customOrange outline-none rounded mr-2">
// 									<option>IND +91</option>
// 									<option>USA +1</option>
// 									<option>UK +44</option>
// 								</select>
// 								<input
// 									className="w-full p-3 border border-customOrange outline-none rounded"
// 									type="text"
// 									id="mobileNumber"
// 									placeholder="Mobile Number"
// 								/>
// 								<button className="ml-2 pl-0 lg:py-3 lg:px-6  text-[#FF9F08]">
// 									Verify Number
// 								</button>
// 							</div>
// 						</div>
// 					) : selectedValue === "landline" ? (
// 						<div className="mt-5">
// 							<label
// 								className="block text-gray-600 mb-2"
// 								htmlFor="mobileNumber"
// 							>
// 								Landline Number
// 							</label>
// 							<div className="flex items-center">
// 								<input
// 									className="w-full p-3 border border-customOrange outline-none rounded"
// 									type="text"
// 									id="landlineNumber"
// 									placeholder="Landline Number"
// 								/>
// 							</div>
// 						</div>
// 					) : (
// 						<>
// 							<div className="mt-5">
// 								<label
// 									className="block text-gray-600 mb-2"
// 									htmlFor="mobileNumber"
// 								>
// 									Mobile Number (OTP Verification Via SMS)
// 								</label>
// 								<div className="flex items-center">
// 									<select className="p-3 border border-customOrange outline-none rounded mr-2">
// 										<option>IND +91</option>
// 										<option>USA +1</option>
// 										<option>UK +44</option>
// 									</select>
// 									<input
// 										className="w-full p-3 border border-customOrange outline-none rounded"
// 										type="text"
// 										id="mobileNumber"
// 										placeholder="Mobile Number"
// 									/>
// 									<button className="ml-2 py-3 px-6 text-[#FF9F08]">
// 										Verify Number
// 									</button>
// 								</div>
// 							</div>
// 							<div className="mt-5">
// 								<label
// 									className="block text-gray-600 mb-2"
// 									htmlFor="mobileNumber"
// 								>
// 									Landline Number
// 								</label>
// 								<div className="flex items-center">
// 									<input
// 										className="w-full p-3 border border-customOrange outline-none rounded"
// 										type="text"
// 										id="landlineNumber"
// 										placeholder="Landline Number"
// 									/>
// 								</div>
// 							</div>
// 						</>
// 					)}
// 				</div>
// 			</div>
// 		</>
// 	);
// };
// export default React.memo(UnitDetails);


// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import CustomCheckbox from "../../CommonComponents/CustomCheckBox";
// import CustomRadioButton from "../../CommonComponents/CustomRadioButton";
// import useStore from "../../store/UnitDetail";

// const UnitDetails = ({ onNext }) => {

// 	const { unitDetails, setUnitDetails } = useStore();
//     const validationSchema = Yup.object({
//         // unitRegistrationCountry: Yup.string().required("Required"),
//         // categorySelected: Yup.string().required("Required"),
//         // ownershipMode: Yup.string().required("Required"),
//         // unitName: Yup.string().required("Required"),
//         // subarea: Yup.string().required("Required"),
//         // locality: Yup.string().required("Required"),
//         // shopCategory: Yup.string().required("Required"),
//         // address: Yup.string().required("Required"),
//         // acceptedCurrency: Yup.string().required("Required"),
//         // openTime: Yup.string().required("Required"),
//         // closeTime: Yup.string().required("Required"),
//         // contactNumber: Yup.string().required("Required"),
//         // Add validation for other fields as needed
//     });

//     return (
//         <Formik
//             // initialValues={{
//             //     unitRegistrationCountry: "",
//             //     categorySelected: "",
//             //     ownershipMode: "",
//             //     unitName: "",
//             //     subarea: "",
//             //     locality: "",
//             //     shopCategory: "",
//             //     address: "",
//             //     acceptedCurrency: "",
//             //     openTime: "09:00",
//             //     closeTime: "23:45",
//             //     contactNumber: "",
//             //     // Add initial values for other fields as needed
//             // }}
// 			 initialValues={unitDetails}
//             validationSchema={validationSchema}
//             onSubmit={(values) => {
//                 onNext(values);
// 				setUnitDetails(values);
//             }}
//         >
//             {({ values, setFieldValue }) => (
//                 <Form>
//                     <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
//                         Unit Details
//                     </h3>
//                     <div className="grid grid-cols-1 text-sm md:grid-cols-3 gap-6">
//                         <div>
//                             <label className="block text-sm text-gray-600 mb-2" htmlFor="unitRegistrationCountry">
//                                 Unit Registration Country
//                             </label>
//                             <Field as="select" name="unitRegistrationCountry" className="w-full p-3 border border-customOrange outline-none rounded">
//                                 <option value="">Select Country</option>
//                                 <option value="India">India</option>
//                                 <option value="USA">USA</option>
//                                 <option value="UK">UK</option>
//                             </Field>
//                             <ErrorMessage name="unitRegistrationCountry" component="div" className="text-red-500 text-sm" />
//                         </div>

//                         <div>
//                             <label className="block text-sm text-gray-600 mb-2" htmlFor="categorySelected">
//                                 Category Selected
//                             </label>
//                             <Field as="select" name="categorySelected" className="w-full p-3 border border-customOrange outline-none rounded">
//                                 <option value="">Select Category</option>
//                                 <option value="Liquor">Liquor</option>
//                                 <option value="Wine Shop">Wine Shop</option>
//                                 <option value="Restaurant & Bar">Restaurant & Bar</option>
//                             </Field>
//                             <ErrorMessage name="categorySelected" component="div" className="text-red-500 text-sm" />
//                         </div>

//                         <div>
//                             <label className="block text-sm text-gray-600 mb-2" htmlFor="ownershipMode">
//                                 Unit Ownership Mode
//                             </label>
//                             <Field as="select" name="ownershipMode" className="w-full p-3 border border-customOrange outline-none rounded">
//                                 <option value="">Select Ownership Mode</option>
//                                 <option value="Private Limited Company">Private Limited Company</option>
//                                 <option value="Public Limited Company">Public Limited Company</option>
//                                 <option value="Partnerships">Partnerships</option>
//                                 <option value="LLP Registration">LLP Registration</option>
//                                 <option value="One Person Company">One Person Company</option>
//                                 <option value="Sole Proprietorship">Sole Proprietorship</option>
//                                 <option value="Section 8 Company">Section 8 Company</option>
//                             </Field>
//                             <ErrorMessage name="ownershipMode" component="div" className="text-red-500 text-sm" />
//                         </div>

//                         <div>
//                             <label className="block text-gray-600 mb-2" htmlFor="unitName">
//                                 Business Unit Name
//                             </label>
//                             <Field className="w-full p-3 border border-customOrange outline-none rounded" type="text" name="unitName" placeholder="English Wine Shop" />
//                             <ErrorMessage name="unitName" component="div" className="text-red-500 text-sm" />
//                         </div>

//                         <div>
//                             <label className="block text-gray mb-2" htmlFor="shopFor">
//                                 Shop For
//                             </label>
//                             <div className="flex flex-col items-start gap-2 lg:flex-row lg:gap-0 lg:items-center">
//                                 <div className="flex gap-2">
//                                     <CustomCheckbox label="Liquor" />
//                                 </div>
//                                 <div className="flex gap-2">
//                                     <CustomCheckbox label="Beer" />
//                                 </div>
//                                 <div className="flex gap-2">
//                                     <CustomCheckbox label="Wine" />
//                                 </div>
//                             </div>
//                         </div>

//                         <div>
//                             <label className="block text-gray-600 mb-2" htmlFor="subarea">
//                                 Subarea/Society/Landmark
//                             </label>
//                             <Field className="w-full p-3 border border-customOrange outline-none rounded" type="text" name="subarea" placeholder="Enter Area Name" />
//                             <ErrorMessage name="subarea" component="div" className="text-red-500 text-sm" />
//                         </div>

//                         <div>
//                             <label className="block text-gray-600 mb-2" htmlFor="locality">
//                                 Locality/Area Name
//                             </label>
//                             <Field className="w-full p-3 border border-customOrange outline-none rounded" type="text" name="locality" placeholder="Enter Area Name" />
//                             <ErrorMessage name="locality" component="div" className="text-red-500 text-sm" />
//                         </div>

//                         <div>
//                             <label className="block text-gray-600 mb-2" htmlFor="shopCategory">
//                                 Shop Category
//                             </label>
//                             <Field as="select" name="shopCategory" className="w-full p-3 border border-customOrange outline-none rounded">
//                                 <option value="">Select Shop Category</option>
//                                 <option value="Counter Store">Counter Store</option>
//                                 <option value="Online Store">Online Store</option>
//                             </Field>
//                             <ErrorMessage name="shopCategory" component="div" className="text-red-500 text-sm" />
//                         </div>

//                         <div>
//                             <label className="block text-gray-600 mb-2" htmlFor="address">
//                                 Address
//                             </label>
//                             <Field className="w-full p-3 border border-customOrange outline-none rounded" type="text" name="address" placeholder="Select Address" />
//                             <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
//                         </div>

//                         <div className=" grid-cols-1 md:grid-cols-3 h-[230px]">
//                             <div>
//                                 <label className="block text-gray-700 mb-2" htmlFor="acceptedCurrency">
//                                     Accepted Currency
//                                 </label>
//                                 <Field as="select" name="acceptedCurrency" className="w-full p-3 border border-customOrange outline-none rounded">
//                                     <option value="">Select Currency</option>
//                                     <option value="INR">Indian Rupess : INR</option>
//                                     <option value="EUR">Euro : EUR</option>
//                                     <option value="ZAR">South African Rand : ZAR</option>
//                                     <option value="USD">American Dollars : USD</option>
//                                     <option value="GBP">British Pounds : GBD</option>
//                                     <option value="JPY">Japanese Yen : JPY</option>
//                                 </Field>
//                                 <ErrorMessage name="acceptedCurrency" component="div" className="text-red-500 text-sm" />
//                             </div>
//                         </div>

//                         <div className="grid-cols-1  md:grid-cols-2 gap-6">
//                             <div className=" flex flex-col lg:flex-row w-full  gap-6">
//                                 <div className="w-full">
//                                     <label className="block text-gray-700 mb-2" htmlFor="openTime">
//                                         Open Time
//                                     </label>
//                                     <Field className="w-full p-3 border border-customOrange outline-none rounded" type="time" name="openTime" />
//                                     <ErrorMessage name="openTime" component="div" className="text-red-500 text-sm" />
//                                 </div>
//                                 <div className="w-full">
//                                     <label className="block text-gray-700 mb-2" htmlFor="closeTime">
//                                         Close Time
//                                     </label>
//                                     <Field className="w-full p-3 border border-customOrange outline-none rounded" type="time" name="closeTime" />
//                                     <ErrorMessage name="closeTime" component="div" className="text-red-500 text-sm" />
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="grid-cols-1  md:grid-cols-2">
//                             <div className="flex flex-col items-start">
//                                 <label className="block text-gray-700 mb-2" htmlFor="contactNumber">
//                                     Contact Number
//                                 </label>
//                                 <Field className="w-full p-3 border border-customOrange outline-none rounded" type="text" name="contactNumber" placeholder="Enter Contact Number" />
//                                 <ErrorMessage name="contactNumber" component="div" className="text-red-500 text-sm" />
//                             </div>
//                         </div>

//                         <div className="grid-cols-1  md:grid-cols-2">
//                             <div className="flex flex-col items-start">
//                                 <label className="block text-gray-700 mb-2" htmlFor="shopType">
//                                     Shop Type
//                                 </label>
//                                 <div className="flex items-center gap-3">
//                                     <Field className="mr-2" type="radio" name="shopType" value="Offline" />
//                                     <label htmlFor="shopType">Offline</label>
//                                     <Field className="mr-2" type="radio" name="shopType" value="Online" />
//                                     <label htmlFor="shopType">Online</label>
//                                 </div>
//                                 <ErrorMessage name="shopType" component="div" className="text-red-500 text-sm" />
//                             </div>
//                         </div>

//                         <div className="grid-cols-1 md:grid-cols-3">
//                             <div>
//                                 <label className="block text-gray-600 mb-2" htmlFor="otherServices">
//                                     Other Services
//                                 </label>
//                                 <Field className="w-full p-3 border border-customOrange outline-none rounded" type="text" name="otherServices" placeholder="Enter any other services" />
//                                 <ErrorMessage name="otherServices" component="div" className="text-red-500 text-sm" />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mt-8 text-center">
//                         <button
//                             type="submit"
//                             className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-yellow-dark bg-customBlue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                         >
//                             DDNext
//                         </button>
//                     </div>
//                 </Form>
//             )}
//         </Formik>
//     );
// };

// export default UnitDetails;


import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomCheckbox from "../../CommonComponents/CustomCheckBox";
import CustomRadioButton from "../../CommonComponents/CustomRadioButton";
import useStore from "../../store/UnitDetail";
import { useEffect } from "react";
const UnitDetails = ({ onNext }) => {
	const { unitDetails, setUnitDetails } = useStore();
	const [selectedValue, setSelectedValue] = React.useState(unitDetails.contactType || "mobile");
    const [selectedPaymentMode, setSelectedPaymentMode] = React.useState(unitDetails.paymentMode || "cash");
	const handleRadioChange = (event,setFieldValue) => {
		setSelectedValue(event.target.value);
		setFieldValue("contactType", event.target.value);
	};


	const handlePaymentModeChange = (event, setFieldValue) => {
		setSelectedPaymentMode(event.target.value);
		setFieldValue("paymentMode", event.target.value);
	};

	const validationSchema = Yup.object({
		// unitRegistrationCountry: Yup.string().required("Required"),
		// categorySelected: Yup.string().required("Required"),
		// ownershipMode: Yup.string().required("Required"),
		// unitName: Yup.string().required("Required"),
		// subarea: Yup.string().required("Required"),
		// locality: Yup.string().required("Required"),
		// shopCategory: Yup.string().required("Required"),
		// address: Yup.string().required("Required"),
		// acceptedCurrency: Yup.string().required("Required"),
		// openTime: Yup.string().required("Required"),
		// closeTime: Yup.string().required("Required"),
		// contactType: Yup.string().required("Required"),
		// mobileNumber: Yup.string().required("Required"),
	});
	
	return (
		<Formik
			initialValues={unitDetails}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				onNext(values);
				setUnitDetails(values);
			}}
		>
			{({ values, setFieldValue }) => (
				<Form>
					<h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
						Unit Details
					</h3>
					<div className="grid grid-cols-1 text-sm md:grid-cols-3 gap-6">
						<div>
							<label className="block text-sm text-gray-600 mb-2" htmlFor="unitRegistrationCountry">
								Unit Registration Country
							</label>
							<Field as="select" name="unitRegistrationCountry" className="w-full p-3 border border-customOrange outline-none rounded">
								<option value="">Select Country</option>
								<option value="India">India</option>
								<option value="USA">USA</option>
								<option value="UK">UK</option>
							</Field>
							<ErrorMessage name="unitRegistrationCountry" component="div" className="text-red-500 text-sm" />
						</div>

						<div>
							<label className="block text-sm text-gray-600 mb-2" htmlFor="categorySelected">
								Category Selected
							</label>
							<Field as="select" name="categorySelected" className="w-full p-3 border border-customOrange outline-none rounded">
								<option value="">Select Category</option>
								<option value="Liquor">Liquor</option>
								<option value="Wine Shop">Wine Shop</option>
								<option value="Restaurant & Bar">Restaurant & Bar</option>
							</Field>
							<ErrorMessage name="categorySelected" component="div" className="text-red-500 text-sm" />
						</div>

						<div>
							<label className="block text-sm text-gray-600 mb-2" htmlFor="ownershipMode">
								Unit Ownership Mode
							</label>
							<Field as="select" name="ownershipMode" className="w-full p-3 border border-customOrange outline-none rounded">
								<option value="">Select Ownership Mode</option>
								<option value="Private Limited Company">Private Limited Company</option>
								<option value="Public Limited Company">Public Limited Company</option>
								<option value="Partnerships">Partnerships</option>
								<option value="LLP Registration">LLP Registration</option>
								<option value="One Person Company">One Person Company</option>
								<option value="Sole Proprietorship">Sole Proprietorship</option>
								<option value="Section 8 Company">Section 8 Company</option>
							</Field>
							<ErrorMessage name="ownershipMode" component="div" className="text-red-500 text-sm" />
						</div>

						<div>
							<label className="block text-gray-600 mb-2" htmlFor="unitName">
								Business Unit Name
							</label>
							<Field className="w-full p-3 border border-customOrange outline-none rounded" type="text" name="unitName" placeholder="English Wine Shop" />
							<ErrorMessage name="unitName" component="div" className="text-red-500 text-sm" />
						</div>

						<div>
							<label className="block text-gray mb-2" htmlFor="shopFor">
								Shop For
							</label>
							<div className="flex flex-col items-start gap-2 lg:flex-row lg:gap-0 lg:items-center">
								<div className="flex gap-2">
									<CustomCheckbox label="Liquor" />
								</div>
								<div className="flex gap-2">
									<CustomCheckbox label="Beer" />
								</div>
								<div className="flex gap-2">
									<CustomCheckbox label="Wine" />
								</div>
							</div>
						</div>

						<div>
							<label className="block text-gray-600 mb-2" htmlFor="subarea">
								Subarea/Society/Landmark
							</label>
							<Field className="w-full p-3 border border-customOrange outline-none rounded" type="text" name="subarea" placeholder="Enter Area Name" />
							<ErrorMessage name="subarea" component="div" className="text-red-500 text-sm" />
						</div>

						<div>
							<label className="block text-gray-600 mb-2" htmlFor="locality">
								Locality/Area Name
							</label>
							<Field className="w-full p-3 border border-customOrange outline-none rounded" type="text" name="locality" placeholder="Enter Area Name" />
							<ErrorMessage name="locality" component="div" className="text-red-500 text-sm" />
						</div>

						<div>
							<label className="block text-gray-600 mb-2" htmlFor="shopCategory">
								Shop Category
							</label>
							<Field as="select" name="shopCategory" className="w-full p-3 border border-customOrange outline-none rounded">
								<option value="">Select Shop Category</option>
								<option value="Counter Store">Counter Store</option>
								<option value="Online Store">Online Store</option>
							</Field>
							<ErrorMessage name="shopCategory" component="div" className="text-red-500 text-sm" />
						</div>

						<div>
							<label className="block text-gray-600 mb-2" htmlFor="address">
								Address
							</label>
							<Field className="w-full p-3 border border-customOrange outline-none rounded" type="text" name="address" placeholder="Select Address" />
							<ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
						</div>

						<div className="grid-cols-1 md:grid-cols-3 md:h-[230px]">
							<div>
								<label className="block text-gray-700 mb-2" htmlFor="acceptedCurrency">
									Accepted Currency
								</label>
								<Field as="select" name="acceptedCurrency" className="w-full p-3 border border-customOrange outline-none rounded">
									<option value="">Select Currency</option>
									<option value="INR">Indian Rupees : INR</option>
									<option value="EUR">Euro : EUR</option>
									<option value="ZAR">South African Rand : ZAR</option>
									<option value="USD">American Dollars : USD</option>
									<option value="GBP">British Pounds : GBD</option>
									<option value="JPY">Japanese Yen : JPY</option>
								</Field>
								<ErrorMessage name="acceptedCurrency" component="div" className="text-red-500 text-sm" />
							</div>
						</div>

						<div className="grid-cols-1 md:grid-cols-2 gap-6 ">
							<div className="flex flex-col lg:flex-row w-full gap-6">
								<div className="w-full">
									<label className="block text-gray-700 mb-2" htmlFor="openTime">
										Open Time
									</label>
									<Field className="w-full p-3 border border-customOrange outline-none rounded" type="time" name="openTime" />
									<ErrorMessage name="openTime" component="div" className="text-red-500 text-sm" />
								</div>
								<div className="w-full">
									<label className="block text-gray-700 mb-2" htmlFor="closeTime">
										Close Time
									</label>
									<Field className="w-full p-3 border border-customOrange outline-none rounded" type="time" name="closeTime" />
									<ErrorMessage name="closeTime" component="div" className="text-red-500 text-sm" />
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
								/>
								<CustomRadioButton
									id="card"
									name="paymentMode"
									value="card"
									checked={selectedPaymentMode === "card"}
									onChange={(e) => handlePaymentModeChange(e, setFieldValue)}
									label="Card"
								/>
								<CustomRadioButton
									id="mobile"
									name="paymentMode"
									value="mobile"
									checked={selectedPaymentMode === "mobile"}
									onChange={(e) => handlePaymentModeChange(e, setFieldValue)}
									label="Mobile"
								/>
							</div>
							<ErrorMessage name="paymentMode" component="div" className="text-red-500 text-sm" />
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
											onChange={ (e) => handleRadioChange(e, setFieldValue)}
											label="Mobile"
										/>
										<CustomRadioButton
											id="landline"
											name="contactType"
											value="landline"
											checked={selectedValue === "landline"}
											onChange={ (e) => handleRadioChange(e, setFieldValue)}
											label="Landline"
										/>
										<CustomRadioButton
											id="both"
											name="contactType"
											value="both"
											checked={selectedValue === "both"}
											onChange={ (e) => handleRadioChange(e, setFieldValue)}
											label="Both"
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
										{/* <button className="ml-2 pl-0 lg:py-3 lg:px-6 text-[#FF9F08]">
											Verify Number
										</button> */}
									</div>
									<ErrorMessage name="mobileNumber" component="div" className="text-red-500 text-sm" />
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
										/>
										<ErrorMessage name="landlineNumber" component="div" className="text-red-500 text-sm" />
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
											<button className="ml-2 py-3 px-6 text-[#FF9F08]">
												Verify Number
											</button>
										</div>
										<ErrorMessage name="mobileNumber" component="div" className="text-red-500 text-sm" />
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
											/>
											<ErrorMessage name="landlineNumber" component="div" className="text-red-500 text-sm" />
										</div>
									</div>
								</>
							)}
						</div>
					</div>
					<div className="flex justify-end "><button type="submit" className="btn-primary mt-6 text-white bg-customOrange px-6 py-3 border border-transparent rounded-md">
						Next
					</button></div>
                    {/* <div className="mt-8 text-center">
                    <button
                           type="submit"
                          className="inline-flex justify-end items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-yellow-dark bg-customBlue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                   >
                          DDNext
                       </button>
                   </div> */}
				</Form>
			)}
		</Formik>
	);
};

export default UnitDetails;


