import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react"; // Import useState from React

    export default function Accordion() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <details
            className={`w-full border rounded-lg shadow bg-white`}
            open={false}
            >
            <summary
                className="px-4 py-6 focus:outline-none focus-visible:ri relative list-none"
                onClick={toggleAccordion}
            >
                    Do I have to be a certified teacher?
                <span className="absolute inset-y-0 right-4 flex items-center">
                {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </span>
            </summary>
            <p className="px-4 py-6 pt-0 -mt-4 text-[15px] text-Gray">
            No, you are not required to be certified. Teaching or professional experience is recommended and will increase your chances of attracting students but if you are simply passionate about teaching
            </p>
        </details>
    );
}