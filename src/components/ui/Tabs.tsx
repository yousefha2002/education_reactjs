import React, { ReactNode, useState } from 'react';

interface TabsProps {
    children: ReactNode;
}

const Tabs = ({ children }:TabsProps) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
        <ul className="flex">
            {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
                return (
                <li
                    key={index}
                    className={`cursor-pointer text-[16px] rounded-md px-3 py-[6px] ${
                    activeTab === index ? 'text-white bg-main' : ''
                    }`}
                    onClick={() => setActiveTab(index)}
                >
                    {child.props.label}
                </li>
                );
            }
            return null;
            })}
        </ul>
        <div className="mt-2">
            {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
                return (
                <div
                    key={index}
                    className={`${
                    activeTab === index ? 'block' : 'hidden'
                    } p-4`}
                >
                    {child.props.children}
                </div>
                );
            }
            return null;
            })}
        </div>
        </div>
    );
};

export default Tabs;