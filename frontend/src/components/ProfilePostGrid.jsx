import React from "react";

function ProfilePostGrid({ children, selectedType, onSelectType, tabs }) {
  return (
    <>
      <div className="flex justify-center py-3 gap-5">
        {Object.entries(tabs).map(([key, value]) => (
          <Tab
            key={key}
            isSelected={selectedType === value}
            onSelect={() => onSelectType(value)}
          >
            {key}
          </Tab>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-1">{children}</div>
    </>
  );
}

function Tab({ isSelected, onSelect, children }) {
  return (
    <li className="list-none font-bold">
      <button className={isSelected ? "text-slate-900" : ""} onClick={onSelect}>
        {children}
      </button>
      {isSelected && <div className="border-2 border-sky-400 rounded"></div>}
    </li>
  );
}

export default ProfilePostGrid;
