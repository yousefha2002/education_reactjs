import React, { ReactNode } from 'react';

interface TabProps {
    label: string;
    children: ReactNode;
}

const Tab = ({ label, children }:TabProps) => {
    return <div className="hidden p-4 border border-gray-300">{children}</div>;
};

export default Tab;