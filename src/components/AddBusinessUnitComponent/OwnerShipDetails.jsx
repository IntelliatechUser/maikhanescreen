import React from "react";
import BusinessTabForm from "./BusinessTabForm";
import OwnerTabForm from "./OwnerTabForm";
import LicenseTabForm from "./LicenseTabForm";
import TeamTabForm from "./TeamTabForm";

const OwnershipAndLicenceDetails = ({ currentTab, handleTabChange }) => {
    return (
        <div>
            <h3 className="text-2xl font-semi text-gray-700 mb-6 text-center">Ownership and Licence Details</h3>
            <div className="flex">
                <div className={`flex border-gray-200 h-20 rounded-md bg-[#8080801a] justify-start ${currentTab === 4 || currentTab === 2 ? 'w-[80%]' : 'w-full'}`}>
                    <button
                        onClick={() => handleTabChange(1)}
                        className={`py-2 px-6 ${currentTab === 1 ? 'text-[#FF9F08] border-orange-500 font-bold' : 'font-bold text-black'}`}>
                        Business
                    </button>
                    <button
                        onClick={() => handleTabChange(2)}
                        className={`py-2 px-6 ${currentTab === 2 ? 'text-[#FF9F08] border-orange-500 font-bold' : 'font-bold text-black'}`}>
                        Owner
                    </button>
                    <button
                        onClick={() => handleTabChange(3)}
                        className={`py-2 px-6 ${currentTab === 3 ? 'text-[#FF9F08] border-orange-500 font-bold' : 'font-bold text-black'}`}>
                        License
                    </button>
                    <button
                        onClick={() => handleTabChange(4)}
                        className={`py-2 px-6 ${currentTab === 4 ? 'text-[#FF9F08] border-orange-500 font-bold' : 'font-bold text-black'}`}>
                        Team
                    </button>
                </div>
                {currentTab === 4 ?
                    <button className="flex items-center text-[#FF9F08] py-2 px-4 rounded-full">
                        <span className="flex items-center justify-center bg-[#FF9F08] font-semibold text-[36px] text-white rounded-full h-10 w-10 p-1 mr-2">+</span>
                        <span className="text-[20px] font-bold">Add Member</span>
                    </button>
                    : <></>}
                {currentTab === 2 ?
                    <button className="flex items-center text-[#FF9F08] py-2 px-4 rounded-full">
                        <span className="flex items-center justify-center bg-[#FF9F08] font-semibold text-[36px] text-white rounded-full h-10 w-10 p-1 mr-2">+</span>
                        <span className="text-[20px] font-bold">Add Owner</span>
                    </button>
                    : <></>}
            </div>

            <div className="mt-6">
                {currentTab === 1 && <BusinessTabForm />}
                {currentTab === 2 && <OwnerTabForm />}
                {currentTab === 3 && <LicenseTabForm />}
                {currentTab === 4 && <TeamTabForm />}
            </div>
        </div>
    )
}
export default OwnershipAndLicenceDetails
