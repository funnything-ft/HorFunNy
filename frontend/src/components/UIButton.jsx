import React from "react";
import { Button } from "react-bootstrap";

function UIButton({ children, className, ...props }) {
  return (
    <Button {...props} className={className}>
      {children}
    </Button>
  );
}

export default UIButton;
