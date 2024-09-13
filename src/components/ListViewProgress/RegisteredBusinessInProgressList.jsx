



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import localStorageUtil from '../../utility/utility';
import businessStatus from "../../store/BusinessStatus";
import businessLogicStore from '../../store/BusinessLogicStore';
import useStore from "../../store/UnitDetail";
import { makeApiRequest } from "../../api/ApiRequest";
const RegisteredBusinessInProgressList = () => {
    const { licenseForm, setLicenseForm, unitDetails, businessDetails, ownerDetails, setUnitDetails, setBusinessDetails, setOwnerAddgetApi } = useStore();
    const { setCurrentStep, setCurrentFlow, setCurrentTab } = businessLogicStore();
    const { setListBusinessInProgress, listBusinessInProgress } = businessStatus();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBusinessSmallContentList = async () => {

            const profile = localStorageUtil.getItem("profile");

            const userId = profile.id;
            console.log(">>>>>>>>>>>>profile", profile);
            const token = localStorageUtil.getItem("token");
            if (!token) {
                throw new Error("Token not found");
            }
            let params = {

                userId: userId,
                status: "in-process"
            }


            const returnObject = await makeApiRequest("/businessController/business-units/by-status", "get", params);
            // const response = await axios.get('http://43.204.36.147:8067/businessController/business-units/by-status', {
            //     params,
            //     headers: {
            //         'Authorization': `Bearer ${token}`
            //     }
            // });

            //     // Use dummy data for testing

            if (returnObject.statusCode == 200) {
                setListBusinessInProgress(returnObject.response.data);
                setLoading(false);
            } else {
                console.error('Error fetching business list:');
                setError("Cannot fetch List Business in process");
                setLoading(false);
            }
        };

        fetchBusinessSmallContentList();
    }, []);
    function createFileFromUrl(url) {
        // Extract the file name from the URL (if available)
        // const filename = url.split('/').pop() || "defaultFileName.pdf";
        const filename = url;
        // Create a Blob with empty content (since we don't have the actual file data)
        const blob = new Blob([], { type: "application/pdf" });

        // Create a File object using the Blob
        const file = new File([blob], filename, { type: "application/pdf", lastModified: Date.now() });

        return file;
    }
    const fetchBusinessList = async () => {
        try {
            const profile = localStorageUtil.getItem("profile");

            const userId = profile.id;
            const token = localStorageUtil.getItem("token")
            if (!token) {
                throw new Error("Token not found");
            }
            let params = {

                // userId: 19,
                // status: "in-process"
            }
            const returnObject = await makeApiRequest(`/businessController/${userId}`, "get", {});

            let response = returnObject.response;
            // const response = await axios.get(`http://43.204.36.147:8067/businessController/${userId}`, {
            //     params,
            //     headers: {
            //         'Authorization': `Bearer ${token}`
            //     }
            // });




            let data = response.data;

            unitDetails.subarea = data.society;
            unitDetails.unitName = data.unitName;
            unitDetails.categorySelected = data.businessCategory;
            unitDetails.ownershipMode = data.ownershipMode;
            unitDetails.unitRegistrationCountry = data.registerCountry;
            unitDetails.address = data.registerAddress;
            unitDetails.shopCategory = data.shopCategory;
            unitDetails.openTime = data.openTime;
            unitDetails.closeTime = data.closeTime;
            unitDetails.acceptedCurrency = data.currencies[0]?.currencyAccepted;
            unitDetails.unitRegistrationCountry = data.currencies[0]?.country;
            unitDetails.locality = data.locality;
            unitDetails.mobileNumber = data.contact_no;
            unitDetails.shopFor = data.shopFor.split(',').map(item => item.trim());
            businessDetails.email = data.email;
            businessDetails.contact = data.contactNoType;
            businessDetails.mobileNumber = data.contact_no;

            businessDetails.idType = data.photoIdType;
            businessDetails.idDocumentNumber = data.photoIdNo;
            businessDetails.legallyRegisteredName = data.legalBusinessName;
            businessDetails.businessEntityRegistrationCountry = data.country;
            businessDetails.addressLine1 = data.address1;
            businessDetails.addressLine2 = data.address2;
            businessDetails.city = data.city;
            businessDetails.state = data.state;
            businessDetails.zipCode = data.postalAddress;


            let owners = data.users; // Assuming ownerDetails is an array
            let licence = {}

            licence.licenseNumber = data.licenses[0].licenseNo;
            licence.validFrom = data.licenses[0].validFrom;
            licence.validUpto = data.licenses[0].validTo;
            licence.licenseCategory = data.licenses[0].licenseCategory;
            licence.issuingAuthority = data.licenses[0].issuingAuthority;
            licence.issuingAuthorityCountry = data.licenses[0].issuingAuthorityCountry;
            licence.licenseOwner = data.licenses[0].ownerDetail;


            console.log(">>>>>>>>ownerDetails>>>fetch1", owners);
            // If you need to map other details, such as members, you can access it like:
            const members = data.members; // Assuming you will handle this accordingly


            businessDetails.businessLogo = createFileFromUrl(data.logoPath);
            businessDetails.gstdocument = createFileFromUrl(data.uploadGst);
            businessDetails.cindocument = createFileFromUrl(data.uploadCin);
            businessDetails.pandocument = createFileFromUrl(data.uploadPan);
            licence.licenseCertificate = createFileFromUrl(data.logoPath);
            setLicenseForm(licence);
            setBusinessDetails(businessDetails);
            setUnitDetails(unitDetails);
            setOwnerAddgetApi(owners);

            console.log(">>>>>>>>ownerDetails>>>fetch2", owners);

        } catch (err) {
            console.error('Error fetching business list:', err);

        }
    };



    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    console.log(">>>>>>>>>>>>>>>licenseForm, setLicenseForm, unitDetails, businessDetails, ownerDetails,", licenseForm, unitDetails, businessDetails, ownerDetails)
    return (
        <div className="p-4 shadow-xl">
            <h2 className="text-lg font-bold mb-4">IN-PROCESS BUSINESS UNIT</h2>
            <div className="pb-1 ">
                <li className="flex items-center justify-between p-2 bg-[#f5f5f5]  shadow-sm font-bold rounded-t-lg">
                    <div className="flex-1 flex items-center ">
                        <div className="flex-1 flex text-yellow-dark">
                            {/* <p className="font-semibold flex-1  text-center ">ID</p> */}


                            <p className=" flex-1 text-center" >UNITNAME</p>
                            <p className=" flex-1 text-center"> BUSINESS CATEGORY</p>
                            <p className="flex-1 text-center"> OWNERSHIP MODE</p>
                            <p className=" flex-1 text-center" > EMAIL</p>
                        </div>
                    </div>
                    <button

                        className="bg-blue-500 text-yellow-dark  px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                        View
                    </button>
                </li>
            </div>
            <ul className="space-y-1">
                {listBusinessInProgress.map((item) => (
                    <li key={item.id} className="flex items-center   justify-between pl-2 pr-2  bg-[#f5f5f5] shadow-sm">
                        <div className="flex-1 flex items-center space-x-4">
                            <div className="flex-1 flex">
                                {/* <p className="font-semibold flex-1  text-center">{item.id}</p> */}
                                <p className="text-gray-600 flex-1 text-center" > {item.unitName}</p>
                                <p className="text-gray-600 flex-1 text-center"> {item.businessCategory}</p>
                                <p className="text-gray-600 flex-1 text-center"> {item.ownershipMode}</p>
                                <p className="text-gray-600 flex-1 text-center"> {item.email}</p>
                            </div>
                        </div>
                        <button
                            onClick={async () => {
                                setCurrentStep(2);
                                await fetchBusinessList();

                                setCurrentTab(1);

                                navigate("/addBusinessUnit");
                                // handleViewClick(item)


                            }}
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
