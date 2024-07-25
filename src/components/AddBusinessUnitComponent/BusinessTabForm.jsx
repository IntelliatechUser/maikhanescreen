import React from "react";
import CustomRadioButton from "../../CommonComponents/CustomRadioButton";

const BusinessTabForm = () => {
	const [selectedValue, setSelectedValue] = React.useState("mobile");
	const [inputValues, setInputValues] = React.useState({});
	const [selectedIdType, setSelectedIdType] = React.useState("");

	const handleRadioChange = (event) => {
		setSelectedValue(event.target.value);
	};

	const handleOnInputChange = (e) => {
		setInputValues({
			...inputValues,
			[e.target.name]: e.target.value,
		});
	};

	const handleIdTypeChange = (e) => {
		setSelectedIdType(e.target.value);
		handleOnInputChange(e);
	};

	const onValidateId = () => {
		const { idDocumentNumber, idType } = inputValues;
		if (idDocumentNumber && idType) {
			if (idType === "PAN") {
				setInputValues({
					...inputValues,
					addressLine1: "National Highway 8",
					addressLine2: "823/4 south street",
					city: "Kamrej",
					state: "Gujarat",
					email: "nawabdutta@gmail.com",
					zipCode: "394185",
					mobile: "98 98 252125",
				});
			}
			if (idType === "GST") {
				setInputValues({
					...inputValues,
					addressLine1: "Netaji Subhash Marg",
					addressLine2: "Chandni Chowk",
					city: "New Delhi",
					state: "Delhi",
					email: "niyatinakulsastry@gmail.com",
					zipCode: "110006",
					mobile: "11 2336 5358",
				});
			}
			if (idType === "CIN") {
				setInputValues({
					...inputValues,
					addressLine1: "Ravindra Path",
					addressLine2: "Old Dhan Mandi",
					city: "Sri Ganganagar",
					state: "Rajasthan",
					email: "animeshrajpatel@gmail.com",
					zipCode: "335001",
					mobile: "92 69 620001",
				});
			}
		}
	};

	return (
		<div className="mt-15 mr-7 ">
			<div className="grid md:grid-cols-[60%_40%] gap-6 mb-6 ">
				<div>
					<label className="block text-gray-600 mb-2">
						Photo Id Type
					</label>
					<select
						name="idType"
						className="w-full p-3 border border-customOrange outline-none rounded"
						onChange={handleIdTypeChange}
					>
						<option value={"select"}>Select Category</option>
						<option value={"PAN"}>PAN</option>
						<option value={"GST"}>GST</option>
						<option value={"CIN"}>CIN</option>
					</select>
				</div>
				<div>
					<label className="block text-gray-600 mb-2">
						Photo Id Document/Certificate Number
					</label>
					<div className="flex">
						<input
							type="text"
							className="w-full p-3 border border-customOrange outline-none rounded"
							placeholder="HGEU49660T"
							name="idDocumentNumber"
							onChange={handleOnInputChange}
						/>
						<button
							className="ml-2 border border-customOrange text-[#FF9F08] py-2 px-4 rounded-md"
							onClick={onValidateId}
						>
							Validate
						</button>
					</div>
				</div>
			</div>

			<div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
				<div>
					<label className="block text-gray-600 mb-2">
						Legally Registered Name Of Business Entity
					</label>
					<input
						type="text"
						className="w-full p-3 border border-customOrange outline-none rounded"
						placeholder="Legally Registered Name"
					/>
					<p className="mt-1 text-xs text-gray-600">
						All The Business Transactions Are Done Against The Name
						Of The Business Entity.
					</p>
				</div>
				<div>
					<label className="block text-gray-600 mb-2">
						Business Entity Registration Country
					</label>
					<div className="flex">
						<select className="w-full p-3 border border-customOrange outline-none rounded">
							<option>India</option>
						</select>
					</div>
				</div>
			</div>

			<div className="grid md:grid-cols-[60%_40%] gap-6 mb-6">
				{/* left   */}
				<div className="flex flex-col gap-4">
					<div className="flex gap-4">
						<div className="w-[50%]">
							<input
								type="text"
								className="w-full p-3 border border-customOrange outline-none rounded"
								placeholder="Address Line 01"
								name="addressLine1"
								value={inputValues?.addressLine1 || ""}
								onChange={handleOnInputChange}
							/>
						</div>

						<div className="w-[50%]">
							<input
								type="text"
								className="w-full p-3 border border-customOrange outline-none rounded"
								placeholder="Address Line 02"
								name="addressLine2"
								value={inputValues?.addressLine2 || ""}
								onChange={handleOnInputChange}
							/>
						</div>
					</div>

					<div className="flex gap-4">
						<div className="w-[50%]">
							<input
								type="text"
								className="w-full p-3 border border-customOrange outline-none rounded"
								placeholder="Town/City"
								name="city"
								value={inputValues?.city || ""}
								onChange={handleOnInputChange}
							/>
						</div>
						<div className="w-[50%]">
							<input
								type="text"
								className="w-full p-3 border border-customOrange outline-none rounded"
								placeholder="State/Province/Territory"
								name="state"
								value={inputValues?.state || ""}
								onChange={handleOnInputChange}
							/>
						</div>
					</div>

					<div className="flex gap-4">
						<div className="w-[50%]">
							<input
								type="text"
								className="w-full p-3 border border-customOrange outline-none rounded"
								placeholder="Postal Code"
								name="zipCode"
								value={inputValues?.zipCode || ""}
								onChange={handleOnInputChange}
							/>
						</div>
						<div className="w-[50%]">
							<input
								type="text"
								className="w-full p-3 border border-customOrange outline-none rounded"
								placeholder="Add GPS Location"
							/>
						</div>
					</div>

					<div>
						<div className="flex gap-2 ">
							<div className="w-[70%]">
								<input
									type="text"
									className="w-full p-3 border border-customOrange outline-none rounded"
									placeholder="Add Business Logo"
								/>
							</div>
							<div>
								<button className="  ml-2 border border-customOrange text-[#FF9F08] py-3 px-8 rounded-md border-dashed">
									Upload
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* right  */}

				<div className="flex flex-col gap-3">
					<div className="flex  ">
						<input
							type="email"
							className="w-full p-3 border border-customOrange outline-none rounded"
							placeholder="Email Verify Option"
							name="email"
							value={inputValues?.email || ""}
							onChange={handleOnInputChange}
						/>
						<button className="ml-2 text-[#FF9F08] py-2 px-4">
							Verify
						</button>
					</div>

					<div>
						<label
							className="block text-gray-600 mb-2"
							htmlFor="contactNumber"
						>
							Unit/Reception Contact Number (Optional)
						</label>
						<div className="flex  items-center">
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

					<div>
						{selectedValue === "mobile" ? (
							<div>
								<label
									className="block text-gray-600 mb-2"
									htmlFor="mobileNumber"
								>
									Mobile Number (OTP Verification Via SMS)
								</label>
								<div className="flex flex-col items-start gap-2 lg:gap-0 lg:flex-row lg:items-center">
									<select className="p-3 border border-customOrange outline-none rounded mr-2">
										<option>IND +91</option>
										<option>USA +1</option>
										<option>UK +44</option>
									</select>
									<input
										className="w-full p-3 border border-customOrange outline-none rounded"
										type="text"
										id="mobileNumber"
										placeholder="Mobile Number"
										name="mobile"
										value={inputValues?.mobile || ""}
										onChange={handleOnInputChange}
									/>
									<button className="ml-2 py-3 px-6 text-[#FF9F08]">
										Verify
									</button>
								</div>
							</div>
						) : selectedValue === "landline" ? (
							<div>
								<label
									className="block text-gray-600 mb-2"
									htmlFor="mobileNumber"
								>
									Landline Number
								</label>
								<div className="flex items-center">
									<input
										className="w-full p-3 border border-customOrange outline-none rounded"
										type="text"
										id="landlineNumber"
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
										<select className="p-3 border border-customOrange outline-none rounded mr-2">
											<option>IND +91</option>
											<option>USA +1</option>
											<option>UK +44</option>
										</select>
										<input
											className="w-full p-3 border border-customOrange outline-none rounded"
											type="text"
											id="mobileNumber"
											placeholder="Mobile Number"
										/>
										<button className="ml-2 py-3 px-6 text-[#FF9F08]">
											Verify Number
										</button>
									</div>
								</div>
								<div className="mt-5">
									<label
										className="block text-gray-600 mb-2"
										htmlFor="mobileNumber"
									>
										Landline Number
									</label>
									<div className="flex items-center">
										<input
											className="w-full p-3 border border-customOrange outline-none rounded"
											type="text"
											id="landlineNumber"
											placeholder="Landline Number"
										/>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>

	
		</div>
	);
};

export default BusinessTabForm;
