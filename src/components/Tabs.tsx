import React from "react";

interface TabsProps {
  active: string;
  setActive: (tab: string) => void;
}

export default function Tabs({ active, setActive }: TabsProps) {
  const tabs = ["Clock", "Transactions", "Scroll Watcher"];

  return (
    <div className="flex gap-2 border-b border-gray-300 pb-3 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition
            ${active === tab
              ? "bg-brand text-white shadow"
              : "bg-white hover:bg-gray-100 border border-gray-300"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
