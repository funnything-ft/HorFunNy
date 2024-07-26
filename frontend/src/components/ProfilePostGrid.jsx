import React from "react";
import apiInstance from "../utils/axios";
import ProfilePost from "./ProfilePost";

function ProfilePostGrid({ selectedType, onSelectType, tabs, posts }) {
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
      <div className="grid grid-cols-3 gap-1">
        {posts.map((post) => (
          <ProfilePost image={post.image} key={post} />
        ))}
      </div>
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

export function retrieveUserPost() {
  return apiInstance
    .get("post/")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw json({ message: err.response.data.message }, { status: 500 });
    });
}

export default ProfilePostGrid;
