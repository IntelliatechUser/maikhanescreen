import create from 'zustand';

const useStore = create((set) => ({
  allformdata:{},
  setAllFormdata: (allformdata) => set({ allformdata }),
  unitDetails: {
    unitRegistrationCountry: "",
    categorySelected: "",
    ownershipMode: "",
    unitName: "",
    subarea: "",
    locality: "",
    shopCategory: "",
    address: "",
    acceptedCurrency: "",
    openTime: "09:00",
    closeTime: "23:45",
    contactType: "mobile",
    contactNumber: "",
    paymentMode: "cash",
   
  },
  setUnitDetails: (data) => set((state) => ({
    unitDetails: { ...state.unitDetails, ...data }
  })),
  businessDetails: {
    idType: '',
    idDocumentNumber: '',
    legallyRegisteredName: '',
    businessEntityRegistrationCountry: 'India',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    gpsLocation: '',
    businessLogo: null,
    email: '',
    mobileNumber: '',   // Updated field name
    contact: 'mobile',
    landlineNumber: '' , 
    gstdocument: null, 
    cindocument: null, 
    pandocument: null, 
  },
  setBusinessDetails: (data) => set((state) => ({
    businessDetails: { ...state.businessDetails, ...data }
  })),
  ownerDetails: {
    idType: '',
    idDocumentNumber: '',
    name: '',
    dob: '',
    email: '',
    designation: '',
    mobileNumber: '',   // Updated field name
    landlineNumber: '', // Updated field name
    contact: 'mobile',
  },
  setOwnerDetails: (data) => set((state) => ({
    ownerDetails: { ...state.ownerDetails, ...data }
  })),
  licenseForm: {
    licenseNumber: '',
    validFrom: '',
    validUpto: '',
    licenseCategory: '',
    issuingAuthority: '',
    issuingAuthorityCountry: 'IND',
    licenseOwner: 'licenseOwner',
    licenseCertificate: null,
  },
  setLicenseForm: (form) => set((state) => ({
    licenseForm: { ...state.licenseForm, ...form },
  })),


}));

export default useStore;

