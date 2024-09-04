



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



import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import businessStatus from "../../store/BusinessStatus"; // Update the path as necessary

const DetailViewBusinessInprogress = () => {
  const { id } = useParams();
  const { listBusinessInProgress } = businessStatus();
  const navigate = useNavigate();

  // Find the business detail with the matching id
  const businessDetail = listBusinessInProgress?.find(item => item.id === parseInt(id));

  if (!businessDetail) {
    return <div>Business not found</div>;
  }

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
      <div className="bg-light-gray shadow-md rounded-lg p-6 w-full  ">
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



