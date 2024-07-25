import React, { useRef, useState } from "react";
import { Image, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UIButton from "../components/UIButton";
import apiInstance from "../utils/axios";
import { useNavigate, useRouteLoaderData, json, Link } from "react-router-dom";
import UIModal from "../components/UIModal";
import FileInput from "../components/FileInput";
import ImageCropper from "../components/ImageCropper";
import UISelectInput from "../components/UISelectInput";
import UITextareaInput from "../components/UITextareaInput";

const imageRatio = {
  "1:1": 1,
  "4:5": 4 / 5,
  "16:9": 16 / 9,
};

function Profile() {
  const navigate = useNavigate();
  const { name, image, desc, user } = useRouteLoaderData("profile-detail");
  const [caption, setCaption] = useState("");
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [aspectRatio, setAspectRatio] = useState(1);
  const imageInputRef = useRef();
  const cropperRef = useRef(null);

  function handlePickClick() {
    imageInputRef.current.click();
  }

  const handleZoom = (e) => {
    const cropper = cropperRef.current.cropper;
    if (cropper) {
      cropper.zoomTo(e.target.value);
      setZoom(e.target.value);
    }
  };

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  }

  function changeAspectRatio(e) {
    setAspectRatio(e.target.value);
    const cropper = cropperRef.current.cropper;
    if (cropper) {
      cropper.setAspectRatio(e.target.value);
    }
  }

  return (
    <Container className="lg:w-1/2 md:w-2/3 sm:w-full">
      <UIModal
        scrollable
        size="lg"
        show={showNewPostModal}
        centered
        title="New Post"
        footer={
          <>
            <UIButton variant="primary" size="md" type="button">
              Post
            </UIButton>
            <UIButton
              onClick={() => setShowNewPostModal(false)}
              variant="primary"
              size="md"
              type="button"
            >
              Cancel
            </UIButton>
          </>
        }
      >
        <div className="flex justify-center items-center min-h-[80vh]">
          <FileInput
            name="image"
            onChange={handleImageChange}
            ref={imageInputRef}
          />
          {selectedImage ? (
            <div>
              <ImageCropper
                image={selectedImage}
                zoomTo={zoom}
                ref={cropperRef}
                aspectRatio
              />
              <UISelectInput
                options={imageRatio}
                label="Image Ratio"
                id="ratio"
                value={aspectRatio}
                onSelectChange={changeAspectRatio}
                className="mt-4"
              />
              <p className="font-bold mt-4">Zoom</p>
              <input
                type="range"
                min="0.1"
                max="3"
                step="0.01"
                value={zoom}
                onChange={handleZoom}
                className="w-full"
              />
              <UITextareaInput
                label="Caption"
                id="caption"
                className="mt-4"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
              />
            </div>
          ) : (
            <Link
              className="no-underline hover:underline"
              onClick={handlePickClick}
            >
              Select image
            </Link>
          )}
        </div>
      </UIModal>
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
            src={image}
            roundedCircle
            className="object-cover w-32 h-32 sm:w-40 sm:h-40 "
          />
        </div>
        <div className="col-span-3 flex flex-col justify-center">
          <div className="px-4 text-center md:hidden">
            <h1 className="text-2xl mb-2">{user.username}</h1>
            <div className="font-bold text-xl">{name}</div>
            {desc && <p className="text-sm">{desc}</p>}
          </div>
          <div className="px-4 hidden md:block lg:hidden">
            <h1 className="text-2xl text-3xl mb-2">{user.username}</h1>
            <div className="font-bold text-xl">{name}</div>
            {desc && <p className="text-sm">{desc}</p>}
          </div>
          <div className="py-3 hidden lg:block">
            <h1 className="text-2xl text-3xl mb-2">{user.username}</h1>
            <div className="font-bold text-xl">{name}</div>
            {desc && <p className="text-sm">{desc}</p>}
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
    </Container>
  );
}

export default Profile;

export async function loader() {
  return apiInstance
    .get("profile/")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw json({ message: err.response.data.message }, { status: 500 });
    });
}
