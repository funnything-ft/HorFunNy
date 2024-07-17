import React, { useRef } from "react";
import { Form, Image } from "react-bootstrap";

function ImagePicker({ label, name, onImageSelected, image }) {
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      onImageSelected(URL.createObjectURL(file));
    }
  }

  return (
    <Form.Group controlId={name}>
      <Form.Label className="font-bold mb-4">{label}</Form.Label>
      <div className="mb-4 w-50 mx-auto">
        <Image
          src={image}
          alt="profile picture"
          className="object-cover w-full"
          onClick={handlePickClick}
        />
      </div>
      <Form.Control
        type="file"
        accept="image/png, image/jpeg, image/jpg, image/webp"
        name={name}
        ref={imageInput}
        required
        onChange={handleImageChange}
        className="mb-4 !hidden"
      />
    </Form.Group>
  );
}

export default ImagePicker;
