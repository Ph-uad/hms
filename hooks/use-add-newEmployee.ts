import { set } from "react-hook-form";
import { create } from "zustand";

interface useAddNewEmployeeProps {
    data : {[key : string] : any},
    currentStep : number,
    setCurrentStep : (step : number) => void
}

const useAddNewEmployee = create<useAddNewEmployeeProps>((set) => (
    {
        data : {},
        currentStep :  1,
        setCurrentStep : (step) => set({ currentStep : step}) 
    }
))

export default useAddNewEmployee