import { ReactNode } from "react";
import steps from "../../utils/steps";
import StepBox from "./StepBox";

interface StepsProps {
    activeStep: number;
    children:ReactNode
}

const Steps = ({ activeStep,children }:StepsProps) => {
    return (
        <div className="Container">
        <div className="my-8 bg-white shadow-md p-8">
            <div className="after:mt-4 after:block after:h-1 mb-16 after:w-full after:rounded-lg after:bg-gray-200">
                <ol className="grid grid-cols-4 text-sm font-medium text-gray-500">
                    {steps.map(step =><StepBox activeStep={activeStep} step={step}/>)}
                </ol>
            </div>
            {children}
        </div>
        </div>
    );
};

export default Steps;