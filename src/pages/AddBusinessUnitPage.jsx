import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import StepProgressBar from '../components/StepProgressBar';
import UnitDetails from '../components/AddBusinessUnitComponent/UnitDetails';
import businessLogicStore from "../store/BusinessLogicStore";
import OwnershipAndLicenceDetails from '../components/AddBusinessUnitComponent/OwnerShipDetails';
import useStore from "../store/UnitDetail";
const AddBusinessUnitPage = () => {
    const { allformdata, setAllFormdata } = useStore();
    const [formData, setFormData] = useState(null);
    const { currentStep, setCurrentStep, currentTab, setCurrentTab } = businessLogicStore();
    const onSubmitBusiness = (business) => {

        console.log(">>>>>>>>>>>business data", business);
        // alert("hello");
        // setFormData(prevData => ({ ...prevData, business: business }));
        // setAllFormdata({...allformdata,business})
        setCurrentStep(1);
        setCurrentTab(1);

    }
    

    const onSubmitOwner = (Ownerdata) => {
        console.log(">>>>>>>>>>>Owner data", Ownerdata);
        // alert("hello");
        // setFormData(prevData => ({ ...prevData, owner: Ownerdata }));
        // setAllFormdata({...allformdata,Ownerdata})
        setCurrentStep(1);
        setCurrentTab(1);
    }

    const onSubmitLicence = (licencedata) => {
        console.log(">>>>>>>>>>>Licence data", licencedata);
         
        // setFormData(prevData => ({ ...prevData, license: licencedata }));
        // setAllFormdata({...allformdata,licencedata})
        setCurrentTab(1);
        setCurrentStep(1);
    }
  

    const handleNext = (data) => {
        if (currentStep < 2) {
            setFormData(data);
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
                    <OwnershipAndLicenceDetails currentTab={currentTab} handleTabChange={handleTabChange}  onSubmitBusiness={onSubmitBusiness} onSubmitOwner={onSubmitOwner} onSubmitLicence={onSubmitLicence} />

                );
            default:
                return null;
        }
    };
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>formdata", formData);
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>allformdata", allformdata);
    return (
        <Layout>
            <h2 className="text-3xl  font-bold text-gray-700 mb-6 text-center">Add New Business Unit</h2>
            <StepProgressBar currentStep={currentStep} />
            <div className="bg-white p-8 rounded-lg shadow-xl">
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
