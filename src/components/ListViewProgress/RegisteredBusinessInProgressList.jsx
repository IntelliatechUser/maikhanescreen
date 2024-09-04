



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import localStorageUtil from '../../utility/utility';
import businessStatus from "../../store/BusinessStatus"; 


const RegisteredBusinessInProgressList = () => {
    const { setListBusinessInProgress,listBusinessInProgress } = businessStatus();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleViewClick = (item) => {
        navigate(`/registeredbusinessinprogress/DetailViewBusinessInprogress/${item.id}`);
        console.log('View clicked for item:', item);
        // Add logic to handle view action, e.g., navigate to a detail page
    };
    useEffect(() => {
        const fetchBusinessList = async () => {
            try {
                const profile = localStorageUtil.getItem("profile");
                
                const userId = profile.id;
                const token = localStorage.getItem("token");
                if (!token) {
                    throw new Error("Token not found");
                }
                let params = {

                    userId: userId,
                    status: "in-process"
                }
                const response = await axios.get('http://43.204.36.147:8067/businessController/business-units/by-status', {
                    params,
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                console.log(">>>>>>>>>>>>>>>>>>>>>>>>>Business inprocess list", response.data.data);
                //     // Use dummy data for testing
                setListBusinessInProgress(response.data.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching business list:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchBusinessList();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold mb-4">IN-PROCESS BUSINESS UNIT</h2>
            <div className="pb-1">
                <li className="flex items-center justify-between p-2 bg-light-gray  shadow-sm font-bold rounded-t-lg">
                    <div className="flex-1 flex items-center ">
                        <div className="flex-1 flex">
                        <p className="font-semibold flex-1  text-center ">ID</p>
                            <p className="text-gray-600 flex-1 text-center" > UNITNAME</p>
                            <p className="text-gray-600 flex-1 text-center"> BUSINESS CATEGORY</p>
                            <p className="text-gray-600 flex-1 text-center"> OWNERSHIP MODE</p>
                        </div>
                    </div>
                    <button

                        className="bg-blue-500 text-black  px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                        View
                    </button>
                </li>
            </div>
            <ul className="space-y-1">
                {listBusinessInProgress.map((item) => (
                    <li key={item.id} className="flex items-center   justify-between pl-2 pr-2  bg-light-gray rounded-lg shadow-sm">
                        <div className="flex-1 flex items-center space-x-4">
                            <div className="flex-1 flex">
                                <p className="font-semibold flex-1  text-center">{item.id}</p>
                                <p className="text-gray-600 flex-1 text-center" > {item.unitName}</p>
                                <p className="text-gray-600 flex-1 text-center"> {item.businessCategory}</p>
                                <p className="text-gray-600 flex-1 text-center"> {item.ownershipMode}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => handleViewClick(item)}
                            className="bg-blue-500 text-white bg-customOrange px-4 py-2 rounded-lg hover:bg-blue-600"
                        >
                            View
                        </button>
                    </li>
                ))}
            </ul>
        </div>

    );
};

// Function to handle view button click, adjust as needed


export default RegisteredBusinessInProgressList;
