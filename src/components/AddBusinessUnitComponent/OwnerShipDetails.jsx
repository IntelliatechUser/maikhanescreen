import React from "react";
import BusinessTabForm from "./BusinessTabForm";
import OwnerTabForm from "./OwnerTabForm";
import LicenseTabForm from "./LicenseTabForm";
import TeamTabForm from "./TeamTabForm";

const OwnershipAndLicenceDetails = ({ currentTab, handleTabChange }) => {
    return (
        <div>
            <h3 className="text-2xl font-bold text-gray-700 mb-6 text-center">Ownership and Licence Details</h3>
            <div className="flex border-gray-200 h-20 rounded-md bg-gray w-full justify-start">
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
