import React, { forwardRef } from "react";
import { Form } from "react-bootstrap";

const FileInput = forwardRef(function FileInput({ name, ...props }, ref) {
  return (
    <Form.Control
      type="file"
      accept="image/*"
      name={name}
      ref={ref}
      required
      {...props}
      className="mb-4 !hidden"
    />
  );
});

export default FileInput;
