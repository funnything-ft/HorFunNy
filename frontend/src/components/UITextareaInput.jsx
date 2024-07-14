import React, { useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";

function UITextareaInput({ label, id, value, className, ...props }) {
  const textareaRef = useRef(null);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);
  return (
    <Form.Floating>
      <Form.Control
        id={id}
        name={id}
        {...props}
        as="textarea"
        value={value}
        ref={textareaRef}
        className={`${className} overflow-hidden resize-none`}
      />
      <label htmlFor={id}>{label}</label>
    </Form.Floating>
  );
}

export default UITextareaInput;
