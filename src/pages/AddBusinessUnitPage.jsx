import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
// import StepProgressBar from '../components/StepProgressBar';
import UnitDetails from '../components/AddBusinessUnitComponent/UnitDetails';
import businessLogicStore from "../store/BusinessLogicStore";
import OwnershipAndLicenceDetails from '../components/AddBusinessUnitComponent/OwnerShipDetails';
import useStore from "../store/UnitDetail";
import { useLocation } from 'react-router-dom';
const AddBusinessUnitPage = () => {
    const location = useLocation();

    const { currentStep, setCurrentStep, currentTab, setCurrentTab, currentFlow } = businessLogicStore();
    const onSubmitBusiness = (business) => {

        console.log(">>>>>>>>>>>business data", business);

        setCurrentStep(2);
        setCurrentTab(1);

    }


    const onSubmitOwner = (Ownerdata) => {
        console.log(">>>>>>>>>>>Owner data", Ownerdata);

        setCurrentStep(2);
        setCurrentTab(2);
    }

    const onSubmitLicence = (licencedata) => {
        console.log(">>>>>>>>>>>Licence data", licencedata);
        // alert("hello");

        setCurrentStep(2);
        setCurrentTab(3);

    }


    const handleNext = (data) => {
        if (currentStep < 2) {

            setCurrentStep(currentStep + 1);
        }
    };

    const handleTabChange = (tabIndex) => {
        setCurrentTab(tabIndex);
    };
    console.log(">>>>>>>>>>>>>currentstep currenttab", currentStep, currentTab);
    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <UnitDetails onNext={handleNext} />
                );
            case 2:
                return (

                    <OwnershipAndLicenceDetails currentTab={currentTab} handleTabChange={handleTabChange} onSubmitBusiness={onSubmitBusiness} onSubmitOwner={onSubmitOwner} onSubmitLicence={onSubmitLicence} currentStep={currentStep} />

                );
            default:
                return null;
        }
    };


    return (
        <Layout>
            {currentFlow == "add" && <h2 className="text-3xl  font-bold text-gray-700  text-center">Add New Business Unit</h2>}
            {currentFlow == "get" && <h2 className="text-3xl  font-bold text-gray-700  text-center">Get Business Unit</h2>}


            <div className="bg-white  rounded-lg shadow-xl p-6">
                {renderStepContent()}
            </div>


        </Layout>
    );
};

export default AddBusinessUnitPage;
