"use client";
import { CheckBadgeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";

interface Step {
  description: string;
  completed: boolean;
  highlighted: boolean;
  selected: boolean;
}

interface TabsProps {
  steps: string[];
  currentStep: number;
  stepsLabel: string[];
}

export default function Tabs({ steps, currentStep, stepsLabel }: TabsProps) {
  const [newStep, setNewStep] = useState<Step[]>([]);
  const stepRef = useRef<Step[]>([]);

  const updataStep = (stepNumber: number, steps: Step[]): Step[] => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) => ({
      description: step,
      completed: false,
      highlighted: index === 0,
      selected: index === 0,
    }));

    stepRef.current = stepsState;
    const current = updataStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displayTabs = newStep.map((step, index) => {
    console.log(currentStep, index, step);
    return (
      <div key={index} className={"flex items-center my-10 w-3/5"}>
        <div className="flex md:gap-4 flex-row items-center  p-2 text-primary-dark">
          <div
            className={`transition duration-500 ease-in-out w-[10px] overflow-visible flex flex-col items-center justify-center relative`}
          >
            <div className={`text-primary text-xs m-auto relative right-3`}>
              {step.completed ? (
                <>
                  {step.highlighted ? (
                    <MapPinIcon className="h-6 w-6 " />
                  ) : (
                    <CheckBadgeIcon className="h-6 w-6" />
                  )}
                </>
              ) : (
                <MapPinIcon className="h-6 w-6 text-gray-200" />
              )}
            </div>
            <p className={`${step.completed ? "" : "opacity-50"} text-xs md:text-nowrap absolute top-[140%]`}>
              {stepsLabel[index]}
            </p>
          </div>

          {index !== newStep.length - 1 && (
            <div
              className={`border-t-2 bg-gray-300 w-16 md:w-52 transition duration-500 ease-in-out mr-2 ${
                step.completed ? "border-primary " : ""
              }`}
            >
              {/* line */}
            </div>
          )}
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-row justify-center gap-4 items-center">
      {displayTabs}
    </div>
  );
}
