import React, { useState } from 'react';

const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    };

    return (
        <div className="max-w-2xl w-full px-2 ">
            <div className="w-full max-w-2xl  md:max-w-full [&_button]:max-w-fit inline-flex flex-nowrap  gap-4 md:px-4 overflow-x-scroll hide-scroll-bar md:[mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)]">
                {children.map(child => (
                    <button
                        key={child.props.label}
                        className={`${activeTab === child.props.label ? ' bg-pink-950 text-slate-50 rounded-full' : 'max-w-max rounded-full '
                            } flex-shrink-0 inline-flex text-gray-700 text-xs font-medium py-1 px-2 max-w-max rounded-full `}
                        onClick={e => handleClick(e, child.props.label)}
                    >
                        {child.props.label}
                    </button>
                ))}
            </div>
            <div className="pt-4">
                {children.map(child => {
                    if (child.props.label === activeTab) {
                        return <div key={child.props.label}>{child.props.children}</div>;
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

const Tab = ({ label, children }) => {
    return (
        <div label={label} className="hidden">
            {children}
        </div>
    );
};
export { Tabs, Tab };