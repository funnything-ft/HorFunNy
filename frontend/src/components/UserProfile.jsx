import React from "react";
import UIButton from "./UIButton";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function UserProfile({ profile, setShowNewPostModal }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="lg:hidden flex justify-end mb-4 gap-2">
        <UIButton
          className="w-32 sm:w-36"
          variant="primary"
          size="lg"
          type="button"
        >
          Edit
        </UIButton>
        <UIButton
          className="w-32 sm:w-36"
          variant="primary"
          size="lg"
          type="button"
          onClick={() => setShowNewPostModal(true)}
        >
          New Post
        </UIButton>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-5 border-b-2 pb-2 items-center sm:items-start">
        <div className="col-span-1 flex justify-center sm:pe-4">
          <Image
            src={profile.image}
            roundedCircle
            className="object-cover w-32 h-32 sm:w-40 sm:h-40 "
          />
        </div>
        <div className="col-span-3 flex flex-col justify-center">
          <div className="px-4 text-center md:hidden">
            <h1 className="text-2xl mb-2">{profile.user.username}</h1>
            <div className="font-bold text-xl">{profile.name}</div>
            {profile.desc && <p className="text-sm">{profile.desc}</p>}
          </div>
          <div className="px-4 hidden md:block lg:hidden">
            <h1 className="text-2xl text-3xl mb-2">{profile.user.username}</h1>
            <div className="font-bold text-xl">{profile.name}</div>
            {profile.desc && <p className="text-sm">{profile.desc}</p>}
          </div>
          <div className="py-3 hidden lg:block">
            <h1 className="text-2xl text-3xl mb-2">{profile.user.username}</h1>
            <div className="font-bold text-xl">{profile.name}</div>
            {profile.desc && <p className="text-sm">{profile.desc}</p>}
          </div>
        </div>
        <div className="hidden lg:block">
          <UIButton
            className="w-32 sm:w-36"
            variant="primary"
            size="lg"
            type="button"
            onClick={() => navigate("edit/profile")}
          >
            Edit
          </UIButton>
          <UIButton
            className="w-32 sm:w-36 mt-3"
            variant="primary"
            size="lg"
            type="button"
            onClick={() => setShowNewPostModal(true)}
          >
            New Post
          </UIButton>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
