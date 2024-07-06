import React from "react";
import Form from "react-bootstrap/Form";

function UIInput({ label, id, ...props }) {
  return (
    <Form.Floating>
      <Form.Control id={id} name={id} {...props} />
      <label htmlFor={id}>{label}</label>
    </Form.Floating>
  );
}

export default UIInput;
