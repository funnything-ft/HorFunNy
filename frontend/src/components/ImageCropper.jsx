import React, { forwardRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const ImageCropper = forwardRef(function ImageCropper(
  { image, ...props },
  ref,
) {
  return (
    <div className="w-96 h-96 mx-auto border border-gray-300">
      <Cropper
        src={image}
        style={{ height: "100%", width: "100%" }}
        guides={false}
        ref={ref}
        cropBoxMovable={true}
        cropBoxResizable={false}
        viewMode={2}
        dragMode="move"
        background={false}
        center={true}
        zoomOnWheel={false}
        restore={false}
        autoCrop={true}
        autoCropArea={1}
        {...props}
      />
    </div>
  );
});

export default ImageCropper;
