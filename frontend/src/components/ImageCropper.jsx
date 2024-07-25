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
        ready={(event) => {
          const cropper = event.currentTarget.cropper;
          cropper.setCropBoxData({
            left:
              (cropper.getContainerData().width -
                cropper.getCropBoxData().width) /
              2,
            top:
              (cropper.getContainerData().height -
                cropper.getCropBoxData().height) /
              2,
          });
          cropper.setCanvasData({
            left:
              (cropper.getContainerData().width -
                cropper.getCanvasData().width) /
              2,
            top:
              (cropper.getContainerData().height -
                cropper.getCanvasData().height) /
              2,
          });
        }}
        {...props}
      />
    </div>
  );
});

export default ImageCropper;
