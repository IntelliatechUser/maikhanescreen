import React from 'react';

const StepProgressBar = ({ currentStep }) => {
    const steps = [
        { id: 1, name: "Step 1" },
        { id: 2, name: "Step 2" },
    ];
    return (
        <div className="flex justify-center items-center my-8 gap-0">
            {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                    <div className="relative flex flex-col items-center">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-black ${currentStep >= step.id ? 'bg-customOrange' : 'bg-gray'}`}>
                        </div>
                    </div>
                    {index < steps.length - 1 && (
                        <div className={`flex-grow w-[150px] h-1 ${currentStep > step.id ? 'progress-bar-active' : 'progress-bar'}`}></div>
                    )}
                </div>
            ))}
        </div>
    );
};
export default StepProgressBar


