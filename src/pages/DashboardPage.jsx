import React from "react";
import Layout from "../components/Layout";
import SupportCard from "../CommonComponents/SupportCard";
import BusinessUnitIcon from "../assets/icons/createBusinessUnitIcon.svg"
import RegisteredUnitIcon from "../assets/icons/registeredBusinessUnitIcon.svg"
import ProcessUnitIcon from "../assets/icons/inProcessUnitIcon.svg";
import LoginSupportIcon from "../assets/icons/loginSupportIcon.svg";
import SalesSupportIcon from "../assets/icons/salesSupportIcon.svg";
import BillingSupportIcon from "../assets/icons/billingSupportIcon.svg";
import OperationSupportIcon from "../assets/icons/operationSupportIcon.svg";
import { useNavigate } from "react-router-dom";
import businessLogicStore from "../store/BusinessLogicStore";
import businessStatus from "../store/BusinessStatus";
import localStorageUtil from "../utility/utility";
import axios from "axios";
import { useEffect } from "react";
import useStore from "../store/UnitDetail";

const Dashboard = () => {
    const { currentStep, setCurrentStep, currentTab, setCurrentTab, setCurrentFlow, setDiabledForm } = businessLogicStore();
    const { resetUnitDetails, resetBusinessDetails, resetOwnerDetails, resetLicenseDetails } = useStore();
    const { setCountInprogress, setCountRegistered, countInprogress, countRegistered } = businessStatus();

    useEffect(() => {


        const fetchBusinessInProgressCount = async () => {



            const token = await localStorageUtil.getItem("token")
            const profile = await localStorageUtil.getItem("profile");
            const userId = profile.id;
            console.log("profile>>>>>>>>>>", profile);
            console.log("token>>>>>>>>>>>", token);
            let params = {
                userId: userId,

            }
            console.log(">>>>>>>>>>>params", params);
            try {
                const response = await axios.get('http://43.204.36.147:8067/businessController/countBusinessByStatus', {
                    params,
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const { registered, 'in-process': inProcess } = response.data.data;
                // alert("api runs2");
                console.log('BusinessIn Progress count', inProcess);
                setCountInprogress(inProcess);
                setCountRegistered(registered);

            } catch (error) {


                console.error('Error in BusinessIn Progress count', error);


            }
        }

        fetchBusinessInProgressCount();
    }, [])

    const navigate = useNavigate();

    return (
        <Layout>
            <div className="min-h-screen bg-gray-100 p-6">
                <div className="mx-auto">
                    <h2 className="text-2xl font-bold text-gray-700 mb-6">Your Dashboard</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 mb-12 gap-6">
                        <SupportCard title="Create Business Unit" description="Create a business Unit" Icon={BusinessUnitIcon} handleRedirect={() => {
                            resetUnitDetails();
                            resetBusinessDetails();
                            resetOwnerDetails();
                            resetLicenseDetails();
                            setCurrentStep(1);
                            setCurrentTab(1);
                            setCurrentFlow("add");
                            setDiabledForm(false);
                            navigate("/addBusinessUnit")


                        }} />
                        <SupportCard title="In-Process Business Unit" description="Submit a sales request or connect with a sales associates." Icon={ProcessUnitIcon} number={countInprogress} handleRedirect={() => {

                            resetUnitDetails();
                            resetBusinessDetails();
                            resetOwnerDetails();
                            resetLicenseDetails();
                            setCurrentStep(2);
                            setCurrentTab(1);
                            setCurrentFlow("get");

                            setDiabledForm(true);
                            navigate("/registeredbusinessinprogress")


                        }} />
                        <SupportCard title="Registered Business Unit" description="Submit a sales request or connect with a sales associates." Icon={RegisteredUnitIcon} number={countRegistered}

                            handleRedirect={() => {

                                navigate("/registeredbusinessregistered")


                            }}
                        />
                    </div>

                    <h2 className="text-2xl font-bold text-gray-700 mb-6">General Support Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 mb-12 gap-6">
                        <SupportCard title="Sales Support" description="Submit a sales request or connect with a sales associates."
                            buttonTitle={'Connect with sales support'} Icon={SalesSupportIcon} />
                        <SupportCard title="Login/Access Support" description="Submit a sales request or connect with a sales associates."
                            buttonTitle={'Connect with sales support'}
                            Icon={LoginSupportIcon} />
                    </div>

                    <h2 className="text-2xl font-bold text-gray-700 mb-6">Subscriber Support Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <SupportCard title="Technical Support" description="Submit a sales request or connect with a sales associates."
                            Icon={SalesSupportIcon} buttonTitle={'Connect with sales support'} />
                        <SupportCard title="Billing Support" description="Submit a sales request or connect with a sales associates."
                            Icon={BillingSupportIcon} buttonTitle={'Connect with sales support'} />
                        <SupportCard title="Operation Support" description="Submit a sales request or connect with a sales associates."
                            Icon={OperationSupportIcon} buttonTitle={'Connect with sales support'} />
                    </div>
                </div>
            </div>
        </Layout>

    )
}
export default Dashboard;