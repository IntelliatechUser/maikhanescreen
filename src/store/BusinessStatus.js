import { create } from 'zustand';


const BusinessStatus = create((set) => ({
  countInprogress: null,
  countRegistered:null,
  listBusinessInProgress: null,
 listBusinessRegistered: null,

  setCountInprogress: (data) => set(() => ({ countInprogress: data })),
  setCountRegistered: (data) => set(() => ({ countRegistered: data })),
  setListBusinessInProgress: (data) => set(() => ({ listBusinessInProgress: data })),
  
  setListBusinessRegistered: (data) => set(() => ({ listBusinessRegistered: data })),
 
}));

export default BusinessStatus;