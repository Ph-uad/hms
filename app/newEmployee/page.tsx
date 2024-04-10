"use client";

import Tabs from "@/components/ui/tab";
import useAddNewEmployee from "@/hooks/use-add-newEmployee";
import { cn } from "@/lib/utils";
import GeneralInformation from "./components/general-information";
import WorkStatus from "./components/work-status";
import Credentiials from "./components/credentiials";
import FileUpload from "./components/file-upload";

const Page = () => {
  const { currentStep } = useAddNewEmployee();
  const steps = ["1", "2", "3", "4"];
  const stepsLabel = [
    "General Indormation",
    "Work Status",
    "Credentials",
    "Finish",
  ];
  const classes = cn(
    "w-[80%] flex flex-col  justify-center space-y-6 mx-auto py-8"
  );

  const displaySteps = (step: number) => {
    switch (step) {
      case 1:
        return <GeneralInformation />;
      case 2:
        return <WorkStatus />;
      case 3:
        return <Credentiials />;
      case 4:
        return <FileUpload />;

      default:
        return null;
    }
  };

  return (
    <div className={classes}>
      <div className="w-full px-[10%] md:px-0 md:max-w-[860px] flex flex-col items-center justify-center mx-auto">
        <Tabs
          steps={steps}
          currentStep={currentStep}
          stepsLabel={stepsLabel}
        />
        {displaySteps(currentStep)}
      </div>
    </div>
  );
};

export default Page;
