import React from 'react'
import BusinessUnitInfo from '../CommonComponents/BusinessUnitInfo'
import { useNavigate } from "react-router-dom";
import businessLogicStore from "../store/BusinessLogicStore";
import useStore from "../store/UnitDetail";
import registration from "./../assets/img/registration.png"
import ownership from "./../assets/img/ownership.png"
import category from "./../assets/img/category.png"
const AddNewBusinessUnitHeader = () => {
    const { currentStep, setCurrentStep, currentTab, setCurrentTab,currentFlow } = businessLogicStore();
    const naviagte = useNavigate();
    const { unitDetails, setUnitDetails } = useStore();

    return (
        <div>

            <h3 className="text-2xl font-semibold text-gray-700  text-center">

            </h3>
            <div className='flex flex-col gap-2'>
              {currentFlow=="add" &&  <div className='flex  justify-end' ><button onClick={() => {
                    setCurrentStep(1)

                    setCurrentTab(-1)
                }} className="py-1 bg-customOrange text-white rounded-3xl w-36">Change</button></div>}
                <div>
                    <div className='grid grid-cols-3 gap-20'>
             
                        <BusinessUnitInfo img={registration} unitDetailsKey="Business Unit Registration Country" unitDetailsValue={unitDetails.unitRegistrationCountry}/>
                        <BusinessUnitInfo  img={ownership} unitDetailsKey="Business Unit Ownership Mode"   unitDetailsValue={unitDetails.categorySelected}/>
                        <BusinessUnitInfo img={category} unitDetailsKey="Business category" unitDetailsValue={unitDetails.ownershipMode}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddNewBusinessUnitHeader