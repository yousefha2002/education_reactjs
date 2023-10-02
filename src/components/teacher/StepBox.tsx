import { Link } from 'react-router-dom'
import { AiOutlineCheck } from 'react-icons/ai';

type props = {
    step:{
        title:string,
        id:number,
    }
    activeStep:number
}

export default function StepBox({step,activeStep}:props) {
    return (
        <Link to={`/teacher/signup/step${step.id}`} key={step.id}>
                <li
                    className={`relative flex justify-center text-main ${
                        step.id === activeStep ? 'bg-active' : ''
                    }`}
                >
                    <span
                    className={`absolute -bottom-[2.2rem] w-[35px] flex justify-center items-center
                    h-[35px] left-1/2 p-1 -translate-x-1/2 rounded-full font-[400] text-[18px] ${
                        step.id === activeStep ? 'bg-main' : 'bg-gray-600'
                    } text-white`}
                    >
                    {step.id}
                    </span>

                    <span className={`hidden sm:block ${step.id === activeStep ? 'text-main' : 'text-Gray'}`}>
                        {step.title}
                    </span>
                </li>
                </Link>
    )
}