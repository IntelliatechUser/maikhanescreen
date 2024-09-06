



// import React from 'react';
// import { useParams,useNavigate } from 'react-router-dom';
// import businessStatus from "../../store/BusinessStatus"; // Update the path as necessary

// const DetailViewBusinessInprogress = () => {
//   const { id } = useParams();
//   const { listBusinessInProgress } = businessStatus();
//   const navigate = useNavigate();
//   // Find the business detail with the matching id
//   const businessDetail = listBusinessInProgress?.find(item => item.id === parseInt(id));

//   if (!businessDetail) {
//     return <div>Business not found</div>;
//   }

//   return (

    
//     <div className="p-6 max-w-4xl mx-auto bg-light-gray shadow-md rounded-lg ">
//       <h2 className="text-3xl font-bold text-gray-800 mb-6">{businessDetail.unitName.toUpperCase()}</h2>
//       <div className="flex flex-col space-y-4">
//         <div className="flex ">
//           <span className="flex-1 text-sm  font-bold">Business Category:</span>
//           <span className=" flex-1 text-sm text-gray-700">{businessDetail.businessCategory}</span>
//         </div>
//         <div className="flex ">
//           <span className="flex-1 text-sm  font-bold">Ownership Mode:</span>
//           <span className="flex-1 text-sm text-gray-700">{businessDetail.ownershipMode}</span>
//         </div>
//         <div className="flex ">
//           <span className="flex-1 text-sm  font-bold">Email:</span>
//           <span className="flex-1 text-sm text-gray-700">{businessDetail.isEmail ? businessDetail.email : "N/A"}</span>
//         </div>
//         <div className="flex ">
//           <span className="flex-1 text-sm  font-bold">Contact Number:</span>
//           <span className="flex-1 text-sm text-gray-700">{businessDetail.isContactNo ? businessDetail.contact_no : "N/A"}</span>
//         </div>
//         <div className="flex justify-between">
//           <span className="flex-1 text-sm  font-bold">Registered Country:</span>
//           <span className="flex-1 text-sm text-gray-700">{businessDetail.registerCountry}</span>
//         </div>
//         <div className="flex justify-between">
//           <span className="flex-1 text-sm  font-bold">Registered Address:</span>
//           <span className="flex-1 first:text-sm text-gray-700">{businessDetail.registerAddress}</span>
//         </div>
//         <div className="flex justify-between">
//           <span className="flex-1 text-sm  font-bold">Legal Business Name:</span>
//           <span className="flex-1 text-sm text-gray-700">{businessDetail.legalBusinessName}</span>
//         </div>
//         <div className="flex justify-between">
//           <span className="flex-1 text-sm  font-bold">City:</span>
//           <span className="flex-1 text-sm text-gray-700">{businessDetail.city}</span>
//         </div>
//         <div className="flex justify-between">
//           <span className="flex-1 text-sm  font-bold">State:</span>
//           <span className="flex-1 text-sm text-gray-700">{businessDetail.state}</span>
//         </div>
//         <div className="flex justify-between">
//           <span className="flex-1 text-sm  font-bold">Postal Code:</span>
//           <span className="flex-1 text-sm text-gray-700">{businessDetail.postalCode}</span>
//         </div>
//         <div className="flex justify-between">
//           <span className="flex-1 text-sm  font-bold">GPS Location:</span>
//           <span className="flex-1 text-sm text-gray-700">{businessDetail.gpsLocation}</span>
//         </div>
//       </div>
//     </div>
    
//   );
// };

// export default DetailViewBusinessInprogress;


import axios from 'axios';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import businessStatus from "../../store/BusinessStatus"; // Update the path as necessary
import { useEffect } from 'react';
import localStorageUtil from '../../utility/utility';
import useStore from "../../store/UnitDetail";


const DetailViewBusinessInprogress = () => {
  const { licenseForm, setLicenseForm, unitDetails, businessDetails, ownerDetails,setUnitDetails,setBusinessDetails,setOwnerAddgetApi } = useStore();
  const { id } = useParams();
  const { listBusinessInProgress } = businessStatus();
  const businessDetail = listBusinessInProgress?.find(item => item.id === parseInt(id));
  const navigate = useNavigate();
 
  useEffect(()=>{
    const fetchBusinessList = async () => {
      try {
          const profile = localStorageUtil.getItem("profile");
          
          const userId = profile.id;
          const token = localStorage.getItem("token");
          if (!token) {
              throw new Error("Token not found");
          }
          let params = {

              // userId: 19,
              // status: "in-process"
          }
          const response = await axios.get('http://43.204.36.147:8067/businessController/19', {
              params,
              headers: {
                  'Authorization': `Bearer ${token}`
              }
          });
         
      
        
          console.log(">>>>response.data.data",response.data.data);
let data=response.data.data;

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
unitDetails.shopFor=data.shopFor.split(',').map(item => item.trim());
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


console.log(">>>>>>>>ownerDetails>>>fetch1",owners);
// If you need to map other details, such as members, you can access it like:
const members = data.members; // Assuming you will handle this accordingly

// licenseForm.licenseCategory = data?.licenseDto[0]?.licenseCategory;
// licenseForm.licenseNumber = data?.licenseDto[0]?.licenseNo;
// licenseForm.validFrom = data?.licenseDto[0]?.validFrom;
// licenseForm.validUpto = data?.licenseDto[0]?.validTo;
// licenseForm.issuingAuthority = data?.licenseDto[0]?.issuingAuthority;
// licenseForm.licenseOwner = data?.licenseDto[0]?.ownerDetail;
businessDetails.businessLogo = data.logo;
businessDetails.gstdocument = data.uploadGst;
businessDetails.cindocument = data.uploadCin;
businessDetails.pandocument = data.uploadpan;
licenseForm.licenseCertificate = data.logoPath;
// setLicenseForm(licenseForm);
setBusinessDetails(businessDetails);
setUnitDetails(unitDetails);
setOwnerAddgetApi(owners);
alert("ww")
console.log(">>>>>>>>ownerDetails>>>fetch2",owners);
        //   let merchantsignup = {
        //     businessUnitDetailDto: {
        //         "unitName": unitDetails?.unitName,
               
        //         "businessCategory": unitDetails?.categorySelected,
        //         "ownershipMode": unitDetails?.categorySelected,
        //         "email": businessDetails?.email,
        //         "isEmail": true,
        //         "contactNoType": businessDetails?.contact,
        //         "contact_no": businessDetails?.mobileNumber || businessDetails?.landlineNumber,
        //         "isContactNo": true,
        //         "registerCountry": unitDetails?.unitRegistrationCountry,
        //         "society": "Beachside",
        //         "locality": "Island Haven",
        //         "registerAddress": unitDetails?.address,
        //         "shopFor": ["Accommodation", "Dining", "Tours"],
        //         "shopCategory": unitDetails?.shopCategory,
        //         "openTime": unitDetails?.openTime,
        //         "closeTime": unitDetails?.closeTime,
        //         "paymentMode": ["Credit Card", "Debit Card", "Cash", "Online Payment"],
        //         "photoIdType": businessDetails.idType,
        //         "photoIdNo": businessDetails?.idDocumentNumber,
        //         "legalBusinessName": businessDetails?.legallyRegisteredName,
        //         "country": businessDetails?.businessEntityRegistrationCountry || "",
        //         "address1": businessDetails?.addressLine1,
        //         "address2": businessDetails?.addressLine2,
        //         "city": businessDetails?.city,
        //         "state": businessDetails?.state,
        //         "postalCode": "20222",
        //         "gpsLocation": "4.1755, 73.5094",
        //         "postalAddress": businessDetails?.zipCode,
                
        //         "users": ownerDetails
                
                
                
                
                
        //         // [
        //         //   {
        //         //     "name": ownerDetails?.name,
        //         //     "mobileNo": ownerDetails?.mobileNumber || ownerDetails?.landlineNumber,
        //         //     "isNoVerified": true,
        //         //     "contactNoType": ownerDetails?.contact,
        //         //     "dateOfBirth": ownerDetails?.dob,
        //         //     "email": ownerDetails?.email,
        //         //     "isEmail": true,
        //         //     "idType":  ownerDetails?.idType,
        //         //     "documentNo": ownerDetails?.idDocumentNumber,
        //         //     "isDocVerified": true,
        //         //     "status": "Active",
        //         //     "role": "Owner",
        //         //     "designation":ownerDetails?.designation
        //         // }
        //         // //   },
        //         // //   {
        //         // //     "name": "Jane Smith",
        //         // //     "mobileNo": "0987654321",
        //         // //     "isNoVerified": false,
        //         // //     "contactNoType": "Mobile",
        //         // //     "dateOfBirth": "1990-05-22",
        //         // //     "email": "jane.smith@oceanviewresort.com",
        //         // //     "isEmail": true,
        //         // //     "idType": "Driver's License",
        //         // //     "documentNo": "DL98765432",
        //         // //     "isDocVerified": false,
        //         // //     "status": "Pending",
        //         // //     "role": "Owner"
        //         // //   }
        //         // ]
                
                
        //         ,
        //         "currencies": [
        //             {
        //                 "currencyAccepted": unitDetails?.acceptedCurrency,
        //                 "country": unitDetails?.unitRegistrationCountry
        //             },
        //             {
        //                 "currencyAccepted": "MVR",
        //                 "country": "Maldives"
        //             }
        //         ],
        //         "members": [
        //             {
        //                 "name": "Alice Brown",
        //                 "email": "alice.brown@oceanviewresort.com",
        //                 "dateOfBirth": "1985-03-30",
        //                 "designation": "General Manager",
        //                 "contactNo": "1231231235"
        //             },
        //             {
        //                 "name": "Bob White",
        //                 "email": "bob.white@oceanviewresort.com",
        //                 "dateOfBirth": "1988-11-05",
        //                 "designation": "Head Chef",
        //                 "contactNo": "3213214328"
        //             }
        //         ],
        //         "licenseDto": [
        //             {
        //                 "licenseCategory": values?.licenseCategory || "",
        //                 "licenseNo": values?.licenseNumber,
        //                 "validFrom": values?.validFrom,
        //                 "validTo": values?.validUpto,
        //                 // "validFrom":  "2023-01-01",
        //                 // "validTo": "2025-01-01",
        //                 "issuingAuthority": values?.issuingAuthority,

        //                 "ownerDetail": values?.licenseOwner
        //             }
        //         ]
        //     },
        //     logo: businessDetails.businessLogo,
        //     uploadGst: businessDetails.gstdocument,
        //     uploadCin: businessDetails.cindocument,
        //     uploadpan: businessDetails.pandocument,
        //     certificate: values.licenseCertificate,


        // }
          
      } catch (err) {
          console.error('Error fetching business list:', err);
          
      }
  };

  fetchBusinessList();
  },[])
  // Find the business detail with the matching id


  if (!businessDetail) {
    return <div>Business not found</div>;
  }
 console.log(">>>>>>>>>>>>>>>unitdetail businessdetail owner licence ",unitDetails,businessDetails,licenseForm,ownerDetails)
  return (
    <div className="px-6  flex w-[100%]  justify-between gap-x-3">
      {/* Back button */}
      <div className="mb-4">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center font-bold   "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
       
      </button>

      </div>
<div className='flex  flex-grow justify-center '>
      {/* Main content */}
      <div className="bg-[#f5f5f5] shadow-md rounded-lg p-6 w-full  ">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {businessDetail.unitName.toUpperCase()}
        </h2>
        <div className="flex flex-col space-y-4">
          <div className="flex">
            <span className="flex-1 text-sm font-bold">Business Category:</span>
            <span className="flex-1 text-sm text-gray-700">{businessDetail.businessCategory}</span>
          </div>
          <div className="flex">
            <span className="flex-1 text-sm font-bold">Ownership Mode:</span>
            <span className="flex-1 text-sm text-gray-700">{businessDetail.ownershipMode}</span>
          </div>
          <div className="flex">
            <span className="flex-1 text-sm font-bold">Email:</span>
            <span className="flex-1 text-sm text-gray-700">{businessDetail.isEmail ? businessDetail.email : "N/A"}</span>
          </div>
          <div className="flex">
            <span className="flex-1 text-sm font-bold">Contact Number:</span>
            <span className="flex-1 text-sm text-gray-700">{businessDetail.isContactNo ? businessDetail.contact_no : "N/A"}</span>
          </div>
          <div className="flex">
            <span className="flex-1 text-sm font-bold">Registered Country:</span>
            <span className="flex-1 text-sm text-gray-700">{businessDetail.registerCountry}</span>
          </div>
          <div className="flex">
            <span className="flex-1 text-sm font-bold">Registered Address:</span>
            <span className="flex-1 text-sm text-gray-700">{businessDetail.registerAddress}</span>
          </div>
          <div className="flex">
            <span className="flex-1 text-sm font-bold">Legal Business Name:</span>
            <span className="flex-1 text-sm text-gray-700">{businessDetail.legalBusinessName}</span>
          </div>
          <div className="flex">
            <span className="flex-1 text-sm font-bold">City:</span>
            <span className="flex-1 text-sm text-gray-700">{businessDetail.city}</span>
          </div>
          <div className="flex">
            <span className="flex-1 text-sm font-bold">State:</span>
            <span className="flex-1 text-sm text-gray-700">{businessDetail.state}</span>
          </div>
          <div className="flex">
            <span className="flex-1 text-sm font-bold">Postal Code:</span>
            <span className="flex-1 text-sm text-gray-700">{businessDetail.postalCode}</span>
          </div>
          <div className="flex">
            <span className="flex-1 text-sm font-bold">GPS Location:</span>
            <span className="flex-1 text-sm text-gray-700">{businessDetail.gpsLocation}</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DetailViewBusinessInprogress;



