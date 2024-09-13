


import restaurantbarsmall from "../../assets/img/resturantbarsmall.png";
import liquorstore from "../../assets/img/liquorstore.png";
import liquorbrand from "../../assets/img/liquorbrand.png";
import amusementpark from "../../assets/img/amusementpark.png";
import hotels from "../../assets/img/hotels.png";
import membershipclub from "../../assets/img/membershipclub.png";
import { HeadingUnitRegisteration } from "../Commonheading";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomCheckbox from "../../CommonComponents/CustomCheckBox";
import CustomRadioButton from "../../CommonComponents/CustomRadioButton";
import useStore from "../../store/UnitDetail";
import OTPModal from '../../CommonComponents/Modal';
import axios from "axios";
import localStorageUtil from "../../utility/utility";
import businessLogicStore from "../../store/BusinessLogicStore";
import { makeApiRequest } from "../../api/ApiRequest";

const UnitDetails = () => {

	const { unitDetails, setUnitDetails } = useStore();
	const { currentStep, setCurrentStep, currentTab, setCurrentTab } = businessLogicStore();

	const [country, setCountry] = useState("");
	const [ownershipModes, setOwnershipModes] = useState([]);


	let countryId =
		[{
			name: "India", id: 1
		},
		{ name: "USA", id: 2 },
		{ name: "UK", id: 3 },

		]

	const validationSchema = Yup.object({
		unitRegistrationCountry: Yup.string().required("Please select a country"),
		categorySelected: Yup.string().required("Please select a category"),
		ownershipMode: Yup.string().required("Please select ownership mode")
	});
	let token = localStorageUtil.getItem("token")
	useEffect(() => {



		const fetchCountry = async () => {
			try {



				const response = await axios.get(`https://api.ipdata.co?api-key=409dc360bfb903547b374aff8050493c124ee2ee9ef26e441d68e3f8`



				);
				if (!unitDetails.loadFirsttimeCountry) {
					
					setCountry(response.data.country_name);
					let object={ ...unitDetails, loadFirsttimeCountry: true, unitRegistrationCountry: response.data.country_name }

					console.log(">>>>>>>>>>>>>>>>>>>>>>,obj",object);
					setUnitDetails(object)

				} 
				
				
				else {
					
					setCountry("");
				 }
				// 	let object={ ...unitDetails, loadFirsttimeCountry: true, unitRegistrationCountry: unitDetails.unitRegistrationCountry,ownershipMode:unitDetails.ownershipMode }

				// 	console.log(">>>>>>>>>>>>>>>>>>>>>>,obj",object);
				// 	setUnitDetails(object)
					
				// }


			} catch (error) {
				console.error("Error fetching the country:", error);
			}
		};

		const fetchOwnershipModes = async (country) => {

			


				let Country = countryId.find((item) => item.name === country)

				// const response = await axios.get(`http://43.204.36.147:8067/api/countries/${Country.id}/ownership-modes`,


				// 	{
				// 		headers: {
				// 			'Authorization': `Bearer ${token}`
				// 		}
				// 	}
				// );

				const returnObject = await makeApiRequest(`/api/countries/${Country.id}/ownership-modes`, "get", {  });

console.log(">>>>>>>>>>>>>>>>returnObject unitdetails",returnObject);
if(returnObject.statusCode==200){
				 setOwnershipModes(returnObject?.response?.data);
			} else {
				console.error("Error fetching ownership modes:");
			}
		};

		fetchCountry().then(() => {
			if (country || unitDetails.unitRegistrationCountry) {
				
				fetchOwnershipModes(country || unitDetails.unitRegistrationCountry);
			}
		});
	}, [country]);

	const handleCountryChange = async (e, setFieldValue) => {
		const selectedCountry = e.target.value;
	let obj2=	{
			...unitDetails,
			ownershipMode: "", // Clear ownershipMode in Zustand
			unitRegistrationCountry: selectedCountry, // Update the country
		}
console.log(">>>>>>>>>>>>>>obj2",obj2);
console.log(">>>>>>country",country);
		setUnitDetails(obj2);
		// useStore.getState().setUnitDetails({
		// 	unitRegistrationCountry: selectedCountry,
		// 	ownershipMode: "", // Clear ownershipMode
		// });

		setFieldValue("unitRegistrationCountry", selectedCountry);
		setFieldValue("ownershipMode", "");
		if (selectedCountry) {
			let Country = countryId.find((item) => item.name == selectedCountry)
			const returnObject = await makeApiRequest(`/api/countries/${Country.id}/ownership-modes`, "get", {  });

console.log(">>>>>>>>>>>>>>>>returnObject unitdetails",returnObject);
if(returnObject.statusCode==200){
				 setOwnershipModes(returnObject?.response?.data);
}else{}
			//	handleOwnership(values,setFieldValue);

			
			console.log(">>>>>>>>>>>>>>inside method unitdetails", unitDetails);
		
		}
	};



	console.log(">>>>>>>>>>>>>>country", country);

	console.log(">>>>>>>>>>>>>>unitdetails", unitDetails);
	return (
		<>
			<div className="grid grid-cols-[55%_45%]">
				<div className="flex flex-col gap-14 ">
					<div className="grid grid-cols-3 ">
						<HeadingUnitRegisteration heading={"Restaurant Bar"} img={restaurantbarsmall} />
						<HeadingUnitRegisteration heading={"Hotels"} img={hotels} />
						<HeadingUnitRegisteration heading={"Membership Club"} img={membershipclub} />
					</div>
					<div className="grid grid-cols-3">
						<HeadingUnitRegisteration heading={"Liquor Brand"} img={liquorbrand} />
						<HeadingUnitRegisteration heading={"Liquor Store"} img={liquorstore} />
						<HeadingUnitRegisteration heading={"Amusement Park"} img={amusementpark} />
					</div>
				</div>
				<div>
					<Formik
						initialValues={{ ...unitDetails, unitRegistrationCountry: country || unitDetails.unitRegistrationCountry }}
						enableReinitialize={true}
						validationSchema={validationSchema}
						onSubmit={(values) => {
							console.log(">>>>>>>>unitdetails>>>>>>>>>>>", values);
							setUnitDetails(values);
							setCurrentStep(2);
							setCurrentTab(1);
						}}
					>
						{({ setFieldValue, values, setValues, validateForm }) => (
							<Form className="space-y-4">
								<div>
									<label className="block text-sm text-gray-600 mb-2" htmlFor="unitRegistrationCountry">
										Unit Registration Country
									</label>
									<Field
										as="select"
										name="unitRegistrationCountry"
										className="w-full p-3 border border-customOrange outline-none rounded"
										onChange={(e) => handleCountryChange(e, setFieldValue)}
									>
										<option value="">Select Country</option>
										<option value="India">INDIA</option>
										<option value="USA">USA</option>
										<option value="UK">UK</option>
									</Field>
									<ErrorMessage name="unitRegistrationCountry" component="div" className="text-darkred text-sm font-medium" />
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
									<ErrorMessage name="categorySelected" component="div" className="text-darkred text-sm font-medium" />
								</div>

								<div>
									<label className="block text-sm text-gray-600 mb-2" htmlFor="ownershipMode">
										Unit Ownership Mode
									</label>
									<Field as="select" name="ownershipMode" className="w-full p-3 border border-customOrange outline-none rounded"
									//  onChange={(e)=>handleOwnership(e,setFieldValue)}

									>
										<option value="">Select Ownership Mode</option>
										{ownershipModes?.map((item, index) => (
											<option key={index} value={item.mode}>
												{item.mode}
											</option>
										))}
									</Field>
									<ErrorMessage name="ownershipMode" component="div" className="text-darkred text-sm font-medium" />
								</div>

								<div className="flex justify-end">
									<button type="submit" className="w-60 p-3 bg-customOrange text-white rounded-3xl">
										Save And Continue
									</button>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</>
	);
};

export default UnitDetails;



