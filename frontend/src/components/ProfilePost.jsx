import React from "react";
import { Image } from "react-bootstrap";

function ProfilePost({ image }) {
  return (
    <div className="border border-gray-300 mx-auto">
      <Image src={image} alt="post" className="object-cover w-full h-full" />
    </div>
  );
}

export default ProfilePost;
