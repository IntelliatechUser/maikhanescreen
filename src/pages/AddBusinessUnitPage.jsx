// src/pages/AddBusinessUnitPage.js
import React, { useState } from 'react';
import Layout from '../components/Layout';
import StepProgressBar from '../components/StepProgressBar';
import UnitDetails from '../components/AddBusinessUnitComponent/UnitDetails';

const AddBusinessUnitPage = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        if (currentStep < 2) {
            setCurrentStep(currentStep + 1);
        }
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <UnitDetails />
                );
            case 2:
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="category">Shop Category</label>
                            <select className="w-full p-3 border rounded" id="category">
                                <option>Counter Store</option>
                                <option>Online Store</option>
                            </select>
                        </div>

                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <Layout>
            <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">Add New Business Unit</h2>
            <StepProgressBar currentStep={currentStep} />

            <div className="bg-white p-8 rounded-lg shadow">
                <form>
                    {renderStepContent()}
                    <div className="flex justify-end mt-6">
                        <button
                            type="button"
                            onClick={handleNext}
                            className="py-3 px-6 bg-customOrange text-white rounded-[1.5rem]"
                        >
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default AddBusinessUnitPage;
