import React from "react";

import { useEffect, useState } from "react";

import "../styles/EditAccountModal.css";

import { Container, Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function ResetPasswordModal({ show_modal, close_modal, user_info, editAccountFunction }) {
  const [password, setPassword] = useState("");
  const [re_password, setRePassword] = useState("");

  const body = JSON.stringify({
    password,
    re_password
  })

  const editAccountHelper = async(e) => {
      e.preventDefault();
      await editAccountFunction(body);
      close_modal()
  }

  return (
    <Container className="edit-account-modal-container">
      <Modal show={show_modal} onHide={close_modal} className="edit-modal">
        <Modal.Header closeVariant="white" closeButton className="edit-modal-header">
          <Modal.Title className="edit-modal-title">RESET PASSWORD</Modal.Title>
        </Modal.Header>

        <Modal.Body className="edit-modal-body">
          <Form.Group
            className="mb-3 edit-modal-form-group"
            controlId="formBasicPassword"
          >
            <Form.Label>PASSWORD</Form.Label>
            <Form.Control
              type="password"
              className="edit-modal-form-control"
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 edit-modal-form-group"
            controlId="formBasicRePassword"
          >
            <Form.Label>RE-ENTER PASSWORD</Form.Label>
            <Form.Control
              type="password"
              className="edit-modal-form-control"
              placeholder="RE-ENTER PASSWORD"
              value={re_password}
              onChange={(e) => setRePassword(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer className="edit-modal-footer">
          <Button
            variant="secondary"
            className="edit-modal-close-button"
            onClick={close_modal}
          >
            Close
          </Button>
          <Button variant="primary" className="edit-modal-save-button" onClick={(e) => editAccountHelper(e)}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ResetPasswordModal;
