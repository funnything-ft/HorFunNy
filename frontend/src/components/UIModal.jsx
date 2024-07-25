import { Modal } from "react-bootstrap";
import React from "react";

function UIModal({ children, title, footer, ...props }) {
  return (
    <Modal {...props}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>{footer}</Modal.Footer>
    </Modal>
  );
}

export default UIModal;
