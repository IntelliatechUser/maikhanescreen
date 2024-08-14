import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
// import StepProgressBar from '../components/StepProgressBar';
import UnitDetails from '../components/AddBusinessUnitComponent/UnitDetails';
import businessLogicStore from "../store/BusinessLogicStore";
import OwnershipAndLicenceDetails from '../components/AddBusinessUnitComponent/OwnerShipDetails';
import useStore from "../store/UnitDetail";
const AddBusinessUnitPage = () => {

    const { currentStep, setCurrentStep, currentTab, setCurrentTab } = businessLogicStore();
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
console.log(">>>>>>>>>>>>>currentstep",currentStep);
    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <UnitDetails onNext={handleNext}  />
                );
            case 2:
                return (
                    // <OwnershipAndLicenceDetails currentTab={currentTab} handleTabChange={handleTabChange} formData={formData}  />
                    <OwnershipAndLicenceDetails currentTab={currentTab} handleTabChange={handleTabChange}  onSubmitBusiness={onSubmitBusiness} onSubmitOwner={onSubmitOwner} onSubmitLicence={onSubmitLicence} currentStep={currentStep} />

                );
            default:
                return null;
        }
    };
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>formdata", formData);
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>allformdata", allformdata);
    return (
        <Layout>
            <h2 className="text-3xl  font-bold text-gray-700  text-center">Add New Business Unit</h2>
            {/* <StepProgressBar currentStep={currentStep} currentTab={currentTab} /> */}
            <div className="bg-white  rounded-lg shadow-xl p-6">
                {renderStepContent()}
            </div>
            {/* {currentStep == 1 ? <div className="flex justify-end mt-6">
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
            </div>} */}
            {/* {(currentStep == 2) && <div className="flex justify-start mt-6">
                <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="py-3 px-6 bg-customOrange text-white rounded-[1.5rem] mb-10"
                >
                    Back
                </button>
            </div>} */}
            {/* {(currentTab === 3) && currentStep === 2 && <div className="flex justify-end mt-6">
                <button
                    type="button"
                    onClick={handleNext}
                    className="py-3 px-6 bg-customOrange text-white rounded-[1.5rem] mb-10"
                >
                    SUBMIT FOR REGISTRATION
                </button>
            </div>} */}

        </Layout>
    );
};

export default AddBusinessUnitPage;
