import { create } from 'zustand'

const businessLogicStore = create((set) => ({
    currentStep: 1,
    setCurrentStep: (data) => {
        set(() => ({ currentStep: data }))
    },
    currentTab: 1,
    setCurrentTab: (data) => set(() => ({ currentTab: data })),
    currentFlow:"add",
    setCurrentFlow: (data) => set(() => ({ currentFlow: data })),
    diabledForm:false,
    setDiabledForm: (data) => set(() => ({ diabledForm: data })),

}))

export default businessLogicStore;