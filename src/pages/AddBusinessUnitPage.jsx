import React, { useState } from 'react';
import Layout from '../components/Layout';
import StepProgressBar from '../components/StepProgressBar';
import UnitDetails from '../components/AddBusinessUnitComponent/UnitDetails';
import businessLogicStore from "../store/BusinessLogicStore";
import OwnershipAndLicenceDetails from '../components/AddBusinessUnitComponent/OwnerShipDetails';

const AddBusinessUnitPage = () => {

    const { currentStep, setCurrentStep, currentTab, setCurrentTab } = businessLogicStore();

    const handleNext = () => {
        if (currentStep < 2) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleTabChange = (tabIndex) => {
        setCurrentTab(tabIndex);
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <UnitDetails />
                );
            case 2:
                return (
                    <OwnershipAndLicenceDetails currentTab={currentTab} handleTabChange={handleTabChange} />
                );
            default:
                return null;
        }
    };

    return (
        <Layout>
            <h2 className="text-3xl  font-bold text-gray-700 mb-6 text-center">Add New Business Unit</h2>
            <StepProgressBar currentStep={currentStep} />
            <div className="bg-white p-8 rounded-lg shadow-xl">
                {renderStepContent()}
            </div>
            {currentStep === 1 ? <div className="flex justify-end mt-6">
                <button
                    type="button"
                    onClick={handleNext}
                    className="py-3 px-6 bg-customOrange text-white rounded-[1.5rem] mb-10"
                >
                    Next
                </button>
            </div> : <div className="flex justify-start mt-6">
                <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="py-3 px-6 bg-customOrange text-white rounded-[1.5rem] mb-10"
                >
                    Back
                </button>
            </div>}

            {(currentTab === 3) && currentStep === 2 && <div className="flex justify-end mt-6">
                <button
                    type="button"
                    onClick={handleNext}
                    className="py-3 px-6 bg-customOrange text-white rounded-[1.5rem] mb-10"
                >
                    SUBMIT FOR REGISTRATION
                </button>
            </div>}

        </Layout>
    );
};

export default AddBusinessUnitPage;
