import React, { useEffect } from "react";
import BusinessTabForm from "./BusinessTabForm";
import OwnerTabForm from "./OwnerTabForm";
import LicenseTabForm from "./LicenseTabForm";
import TeamTabForm from "./TeamTabForm";
import { useState } from "react";
import useStore from "../../store/UnitDetail";
import UnitDetails from "./UnitDetails";
import UnitDetailsForm from "./UnitDetailsForm";
import StepProgressBar from '../../components/StepProgressBar';
import AddNewBusinessUnitHeader from "../AddNewBusinessUnitHeader";
import { toast } from "react-toastify";
const OwnershipAndLicenceDetails = ({ currentTab, handleTabChange, onSubmitOwner, onSubmitBusiness, onSubmitLicence, onSubmitUnitDetail, currentStep }) => {


    const { ownerDetails, setOwnerDetails } = useStore();
    const [formdisplay, setFormdisplay] = useState(ownerDetails);


    const addNewMember = () => {
       
        if (formdisplay.length < 2) {
           
            setFormdisplay([...formdisplay, {
                idType: "",
                idDocumentNumber: "",
                name: "",
                dateOfBirth: "",
                email: "",
                designation: "",
                mobileNo: "",
            
                validate: "Validate This Member"
            }]);  // Update formdisplay to reflect the new member
        } else {
           
            toast.error("Cannot add more than two owners");
        }


    };

    return (
        <div>
            <AddNewBusinessUnitHeader />
            <StepProgressBar currentStep={currentStep} currentTab={currentTab} />
            {/* <h3 className="text-2xl font-semi text-gray-700 mb-6 text-center">Ownership and Licence Details</h3> */}
            <div className="flex">
                <div className={`flex w-full items-center border-gray-200 h-20 rounded-md bg-[#8080801a] justify-between ${currentTab === 4 || currentTab === 2 ? 'w-[80%]' : 'w-full'}`}>
                    <div>

                        <button
                            // onClick={() => handleTabChange(1)}
                            className={`py-2 px-6 ${currentTab === 1 ? 'text-[#FF9F08] border-orange-500 font-bold' : 'font-bold text-black'}`}>
                            Unit Details
                        </button>
                        <button
                            // onClick={() => handleTabChange(1)}
                            className={`py-2 px-6 ${currentTab === 2 ? 'text-[#FF9F08] border-orange-500 font-bold' : 'font-bold text-black'}`}>
                            Org. Details
                        </button>
                        <button
                            // onClick={() => handleTabChange(2)}
                            className={`py-2 px-6 ${currentTab === 3 ? 'text-[#FF9F08] border-orange-500 font-bold' : 'font-bold text-black'}`}>
                            Owner
                        </button>
                        <button
                            // onClick={() => handleTabChange(3)}
                            className={`py-2 px-6 ${currentTab === 4 ? 'text-[#FF9F08] border-orange-500 font-bold' : 'font-bold text-black'}`}>
                            License
                        </button></div>
                    {/* <button
                        // onClick={() => handleTabChange(4)}
                        className={`py-2 px-6 ${currentTab === 4 ? 'text-[#FF9F08] border-orange-500 font-bold' : 'font-bold text-black'}`}>
                        Team
                    </button> */}

                    <div>  {currentTab === 3 ?
                        <button className="flex items-center text-[#FF9F08] py-2 px-4 rounded-full">
                            <span className="flex items-center justify-center bg-[#FF9F08] font-semibold text-[36px] text-white rounded-full h-10 w-10 p-1 mr-2">+</span>
                            <span className="text-[20px] font-bold" onClick={addNewMember}>Add Owner</span>
                        </button>
                        : <></>}</div>
                </div>
                {/* {currentTab === 4 ?
                    <button className="flex items-center text-[#FF9F08] py-2 px-4 rounded-full">
                        <span className="flex items-center justify-center bg-[#FF9F08] font-semibold text-[36px] text-white rounded-full h-10 w-10 p-1 mr-2">+</span>
                        <span className="text-[20px] font-bold">Add Member</span>
                    </button>
                    : <></>} */}

            </div>

            <div className="mt-6">
                {currentTab === 1 && <UnitDetailsForm onSubmitUnitDetail={onSubmitUnitDetail} />}
                {currentTab === 2 && <BusinessTabForm onSubmitBusiness={onSubmitBusiness} />}
                {currentTab === 3 && <OwnerTabForm onSubmitOwner={onSubmitOwner} formdisplay={formdisplay} setFormdisplay={setFormdisplay} />}
                {currentTab === 4 && <LicenseTabForm onSubmitLicence={onSubmitLicence} />}
                {/* {currentTab === 4 && <TeamTabForm />} */}
            </div>
        </div>
    )
}
export default OwnershipAndLicenceDetails
