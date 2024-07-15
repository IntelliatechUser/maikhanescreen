// // import React from "react";
// // import Button from "./uicomponent/lib/button/Button";
// // import InputField from "./uicomponent/lib/inputfield/InputField";
// // import Select from "./uicomponent/lib/select/Select";
// // import CustomAutocomplete from "./uicomponent/lib/customAutocomplete/CustomAutocomplete";
// // import CheckBox from "./uicomponent/lib/checkbox/CheckBox";
// import Radio from "./uicomponent/lib/radio/Radio";
// import { useState } from "react";
// // import Accordion from "./uicomponent/lib/accordian/Accordian";
// const options = [
//   { value: "option1", label: "Option 1" },
//   { value: "option2", label: "Option 2" },
//   { value: "option3", label: "Option 3" },
// ];
// const allOptions = ["Apple", "Banana", "Cherry", "Orange", "Grapes"];
// const Header = () => {
//   const [selectedOption, setSelectedOption] = useState("option1");
//   const [isChecked, setIsChecked] = useState(false);
//   const [selectedValue, setSelectedValue] = useState("");
//   const [inputText, setInputText] = useState("");
//   const [filteredOptions, setFilteredOptions] = useState([]);
//   const accordionItems = [
//     {
//       title: "Section 1",
//       content: [
//         { label: "Item 1", value: "Value 1" },
//         { label: "Item 2", value: "Value 2" },
//       ],
//     },
//     {
//       title: "Section 2",
//       content: [
//         { label: "Item 3", value: "Value 3" },
//         { label: "Item 4", value: "Value 4" },
//       ],
//     },
//     // Add more sections as needed
//   ];
//   const handleRadioButtonChange = (e) => {
//     setSelectedOption(e.target.value);
//   };
//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };
//   const handleSelectChange = (e) => {
//     setSelectedValue(e.target.value);
//   };
//   const handleInputChange = (e) => {
//     const searchText = e.target.value;
//     setInputText(searchText);

//     // Dummy filter options based on the input text
//     const filtered = allOptions.filter((option) =>
//       option.toLowerCase().includes(searchText.toLowerCase())
//     );
//     if (searchText == "") {
//       setFilteredOptions([]);
//     } else setFilteredOptions(filtered);
//   };

//   const handleOptionClick = (selectedOption) => {
//     setInputText(selectedOption);
//     setFilteredOptions([]);
//   };

//   return (
//     <div>
//       {/* <Select
//         options={options}
//         value={selectedValue}
//         label="Select an option"
//         name="mySelect"
//         onChange={handleSelectChange}
//         variant="rounded"
//         size="md"
//       />
//       <Button
//         variant="secondary"
//         size="md"
//         onClick={() => console.log("Button clicked")}
//       >
//         Click Me
//       </Button>
//       <InputField variant="rounded" size="md" placeholder="username" />
//       <div className="relative">
//         {" "}
//         <CustomAutocomplete
//           variant="rounded"
//           size="md"
//           inputText={inputText}
//           handleInputChange={handleInputChange}
//           filteredOptions={filteredOptions}
//           handleOptionClick={handleOptionClick}
//         />
//       </div>
//       <br />
//       <br /> */}
//       {/* <CheckBox
//         label="Check me"
//         checked={isChecked}
//         onChange={handleCheckboxChange}
//       /> */}
//       Header
//       <br />
//       <br />
//       <Radio
//         label="Option 1"
//         name="options"
//         value="option1"
//         checked={selectedOption === "option1"}
//         onChange={handleRadioButtonChange}
//       />
//       <Radio
//         label="Option 2"
//         name="options"
//         value="option2"
//         checked={selectedOption === "option2"}
//         onChange={handleRadioButtonChange}
//       />
//       {/* <div className="flex">
//         <div className="flex-[20%] container mx-auto mt-4">
//           <h1 className="text-2xl font-semibold mb-1">Accordion Example</h1>
//           <Accordion items={accordionItems} />
//         </div>
//         <div className="flex-[80%] container  mx-auto mt-4">Main Content</div>
//       </div> */}
//     </div>
//   );
// };

// export default Header;
