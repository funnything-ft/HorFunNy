import React from "react";
import { useRef, useState } from "react";
import { Form, Image } from "react-bootstrap";
import UIButton from "./UIButton";
import DefaultProfileImage from "../assets/default-profile.jpeg";

function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <Form.Group controlId={name}>
      <Form.Label className="font-bold mb-4">{label}</Form.Label>
      <div className="mb-4 w-50 mx-auto">
        {!pickedImage && (
          <Image
            src={DefaultProfileImage}
            alt="default image"
            className="object-cover w-full"
            onClick={handlePickClick}
          />
        )}
        {pickedImage && (
          <Image
            src={pickedImage}
            alt="Image selected by user"
            className="object-cover w-full"
            onClick={handlePickClick}
          />
        )}
      </div>
      <Form.Control
        type="file"
        accept="image/png, image/jpeg"
        name={name}
        ref={imageInput}
        required
        onChange={handleImageChange}
        className="mb-4 !hidden"
      />
      <div className="text-center">
        <UIButton
          className="w-32 mb-4 mx-auto"
          variant="primary"
          size="md"
          type="button"
        >
          Save
        </UIButton>
      </div>
    </Form.Group>
  );
}

export default ImagePicker;
