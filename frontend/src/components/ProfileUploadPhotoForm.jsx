import React, { useRef, useState } from "react";
import FileInput from "./FileInput";
import apiInstance from "../utils/axios";
import UIButton from "./UIButton";
import { Form, redirect, json } from "react-router-dom";
import DefaultProfileImage from "../assets/default-profile.jpeg";
import { Image } from "react-bootstrap";

function ProfileUploadPhotoForm({ action }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const imageInputRef = useRef(null);

  function handlePickClick() {
    imageInputRef.current.click();
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  }

  function handleReset() {
    setSelectedImage(null);
  }

  function handleSubmit() {
    setSelectedImage(DefaultProfileImage);
  }

  return (
    <Form method="put" encType="multipart/form-data">
      <div className="p-10">
        <p className="font-bold">Add / Change image</p>
        <FileInput
          name="image"
          onChange={handleImageChange}
          image={selectedImage}
          ref={imageInputRef}
        />
        <div className="w-96 h-96 mx-auto border border-gray-300">
          <Image
            src={selectedImage ?? DefaultProfileImage}
            alt="profile picture"
            className="object-cover w-full h-full"
            onClick={handlePickClick}
          />
        </div>
        <div className="mb-4 w-50 mx-auto"></div>
      </div>
      <div className="flex justify-center gap-4">
        <UIButton
          className="w-32 mb-4 mx-auto"
          variant="primary"
          size="md"
          type="submit"
          name="action"
          value={action}
          onClick={selectedImage ? handleSubmit : handlePickClick}
        >
          {selectedImage ? "Save" : "Select Image"}
        </UIButton>
        <UIButton
          className="w-32 mb-4 mx-auto"
          variant="primary"
          size="md"
          type="button"
          onClick={handleReset}
        >
          Reset
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
