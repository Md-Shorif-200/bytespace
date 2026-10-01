"use client";
import { useState } from "react";

interface CustomTabsProps {
  tabs: string[];
 
  variant?: "default" | "centered-pyramid";
}

const CustomTabs = ({ tabs, variant = "default" }: CustomTabsProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  
  if (variant === "centered-pyramid") {

    const row1 = tabs.slice(0, 7); 
    const row2 = tabs.slice(7, 12); 
    const row3 = tabs.slice(14, 18); 

    return (
      <div className="flex flex-col items-center gap-3">
        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-3">
          {row1.map((tab) => (
            <TabButton
              key={tab}
              tab={tab}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center gap-3">
          {row2.map((tab) => (
            <TabButton
              key={tab}
              tab={tab}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </div>

        {/* Row 3 with + More */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {row3.map((tab) => (
            <TabButton
              key={tab}
              tab={tab}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}

          {/* + More Button */}
          <button className="h-[43px] px-3 text-[16px] font-medium text-accent hover:scale-105 ease-in cursor-pointer">
            + More
          </button>
        </div>
      </div>
    );
  }

  // Default flex-wrap variant
  return (
    <div className="flex flex-wrap gap-3">
      {tabs.map((tab) => (
        <TabButton
          key={tab}
          tab={tab}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      ))}
    </div>
  );
};

// Reusable Tab Button Component
const TabButton = ({
  tab,
  activeTab,
  setActiveTab,
}: {
  tab: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  return (
    <button
      onClick={() => setActiveTab(tab)}
      className={`  h-[40px] lg:h-[43px] rounded-[24px] px-3 lg:px-5 text-[14px] lg:text-[16px] font-medium leading-[120%] transition-all cursor-pointer whitespace-nowrap ${
        activeTab === tab
          ? "bg-primary text-dark"
          : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-gray-200"
      }`}
    >
      {tab}
    </button>
  );
};

export default CustomTabs;