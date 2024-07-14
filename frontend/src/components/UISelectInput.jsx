import React from "react";
import Form from "react-bootstrap/Form";

function UISelectInput({ options, label, id, className, value }) {
  return (
    <div className={className}>
      <Form.Label htmlFor={id} className="font-bold">
        {label}
      </Form.Label>
      <Form.Select aria-label={id} id={id} value={value}>
        {Object.entries(options).map(([key, value]) => (
          <option key={value} value={value}>
            {key}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}

export default UISelectInput;
