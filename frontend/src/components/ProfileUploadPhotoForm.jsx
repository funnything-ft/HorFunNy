import React from "react";
import ImagePicker from "./ImagePicker";

function ProfileUploadPhotoForm() {
  return (
    <div className="p-10">
      <ImagePicker label="Add / Change image" name="image-input" />
    </div>
  );
}

export default ProfileUploadPhotoForm;
