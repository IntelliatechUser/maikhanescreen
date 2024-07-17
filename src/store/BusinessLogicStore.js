import { create } from 'zustand'

const businessLogicStore = create((set) => ({
    currentStep: 1,
    setCurrentStep: (data) => {
        set(() => ({ currentStep: data }))
    },
    currentTab: 1,
    setCurrentTab: (data) => set(() => ({ currentTab: data })),
}))

export default businessLogicStore;