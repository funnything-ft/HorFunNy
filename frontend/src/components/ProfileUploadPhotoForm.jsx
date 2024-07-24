import React, { useRef, useState } from "react";
import FileInput from "./FileInput";
import apiInstance from "../utils/axios";
import UIButton from "./UIButton";
import { Form, redirect, json, useSubmit } from "react-router-dom";
import DefaultProfileImage from "../assets/default-profile.jpeg";
import { Image, Modal } from "react-bootstrap";
import UIModal from "./UIModal";
import ImageCropper from "./ImageCropper";

function ProfileUploadPhotoForm({ action }) {
  const submit = useSubmit();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isCrop, setIsCrop] = useState(false);
  const [isCropped, setIsCropped] = useState(false);
  const [zoom, setZoom] = useState(1);
  const imageInputRef = useRef(null);
  const cropperRef = useRef(null);

  function handlePickClick() {
    imageInputRef.current.click();
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setIsCropped(false);
    }
  }

  function handleReset() {
    setSelectedImage(null);
    setIsCropped(false);
    imageInputRef.current.value = "";
  }

  function handleCloseModal() {
    setIsCrop(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const cropper = cropperRef.current?.cropper;
    const formData = new FormData();
    if (cropper && isCropped) {
      const blob = await new Promise((resolve) => {
        cropper.getCroppedCanvas().toBlob((blob) => {
          resolve(blob);
        });
      });

      if (blob) {
        const file = new File([blob], "profile.png", { type: "image/png" });
        formData.append("image", file);
      }
    } else {
      const fileInput = imageInputRef.current;
      formData.append("image", fileInput.files[0]);
    }
    formData.append("action", action);
    submit(formData, {
      method: "PUT",
      action: "/profile/edit/profile",
      encType: "multipart/form-data",
    });
    setSelectedImage(null);
    setIsCropped(false);
    imageInputRef.current.value = "";
  }

  const handleZoom = (e) => {
    const cropper = cropperRef.current.cropper;
    if (cropper) {
      cropper.zoomTo(e.target.value);
      setZoom(e.target.value);
    }
  };

  function handleCropImage() {
    const cropper = cropperRef.current.cropper;
    if (cropper) {
      const canvas = cropper.getCroppedCanvas();
      canvas.toBlob((blob) => {
        setSelectedImage(URL.createObjectURL(blob));
        setIsCropped(true);
      });
    }
    setIsCrop(false);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className="p-10">
        <UIModal centered show={isCrop}>
          <Modal.Header>
            <Modal.Title>Crop Profile Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ImageCropper
              image={selectedImage}
              zoomTo={zoom}
              ref={cropperRef}
            />
            <input
              type="range"
              min="0.1"
              max="3"
              step="0.01"
              value={zoom}
              onChange={handleZoom}
              className="mt-4 w-full"
            />
          </Modal.Body>
          <Modal.Footer>
            <UIButton
              onClick={handleCropImage}
              variant="primary"
              size="md"
              type="button"
            >
              Crop
            </UIButton>
            <UIButton
              onClick={handleCloseModal}
              variant="primary"
              size="md"
              type="button"
            >
              Cancel
            </UIButton>
          </Modal.Footer>
        </UIModal>
        <p className="font-bold">Add / Change image</p>
        <FileInput
          name="image"
          onChange={handleImageChange}
          ref={imageInputRef}
        />
        <div className="w-96 h-96 mx-auto border border-gray-300">
          <Image
            src={selectedImage ?? DefaultProfileImage}
            alt="profile picture"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mb-4 w-50 mx-auto"></div>
      </div>
      <div className="flex justify-center gap-4">
        {selectedImage ? (
          <>
            <UIButton
              className="w-32 mb-4 mx-auto"
              variant="primary"
              size="md"
              type="submit"
            >
              Save
            </UIButton>
            <UIButton
              className="w-32 mb-4 mx-auto"
              variant="primary"
              size="md"
              type="button"
              onClick={() => setIsCrop(true)}
            >
              Crop Image
            </UIButton>
          </>
        ) : (
          <>
            <UIButton
              className="w-32 mb-4 mx-auto"
              variant="primary"
              size="md"
              type="button"
              name="action"
              value={action}
              onClick={handlePickClick}
            >
              Select Image
            </UIButton>
          </>
        )}
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
