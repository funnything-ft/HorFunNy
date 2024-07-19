import { Modal } from "react-bootstrap";
import React from "react";

function UIModal({ children, ...props }) {
  return <Modal {...props}>{children}</Modal>;
}

export default UIModal;
