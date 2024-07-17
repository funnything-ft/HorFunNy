import React, { useState } from "react";
import ImagePicker from "./ImagePicker";
import apiInstance from "../utils/axios";
import UIButton from "./UIButton";
import { Form, redirect, json } from "react-router-dom";
import DefaultProfileImage from "../assets/default-profile.jpeg";

function ProfileUploadPhotoForm({ action }) {
  const [selectedImage, setSelectedImage] = useState(DefaultProfileImage);
  function handleSubmit() {
    setSelectedImage(DefaultProfileImage);
  }
  return (
    <Form method="put" encType="multipart/form-data">
      <div className="p-10">
        <ImagePicker
          label="Add / Change image"
          name="image"
          onImageSelected={(url) => setSelectedImage(url)}
          image={selectedImage}
        />
      </div>
      <div className="text-center">
        <UIButton
          className="w-32 mb-4 mx-auto"
          variant="primary"
          size="md"
          type="submit"
          name="action"
          value={action}
          onClick={handleSubmit}
        >
          Save
        </UIButton>
      </div>
    </Form>
  );
}

export default ProfileUploadPhotoForm;

export function UploadPhoto(data) {
  return apiInstance
    .put("profile/edit/image/", data, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((res) => {
      return redirect("/profile/edit/photo");
    })
    .catch((err) => {
      throw json({ message: err.response.data.message }, { status: 500 });
    });
}
