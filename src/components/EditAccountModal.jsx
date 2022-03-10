import React from "react";

import { useEffect, useState } from "react";

import "../styles/EditAccountModal.css";

import { Container, Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function EditAccountModal({ show_modal, close_modal, user_info }) {
  const [contact_name, setContactName] = useState(user_info.contact_name);
  const [phone, setPhone] = useState(user_info.phone);
  const [company_name, setCompanyName] = useState(user_info.company_name);

  return (
    <Container className="edit-account-modal-container">
      <Modal show={show_modal} onHide={close_modal} className="edit-modal">
        <Modal.Header closeVariant="white" closeButton className="edit-modal-header">
          <Modal.Title className="edit-modal-title">EDITAR INFO</Modal.Title>
        </Modal.Header>

        <Modal.Body className="edit-modal-body">
          <Form.Group
            className="mb-3 edit-modal-form-group"
            controlId="formBasicCompanyName"
          >
            <Form.Label>NOMBRE DE LA COMPAÑIA</Form.Label>
            <Form.Control
              type="text"
              className="edit-modal-form-control"
              placeholder="NOMBRE DE LA COMPAÑIA"
              value={company_name}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 edit-modal-form-group"
            controlId="formBasicContactName"
          >
            <Form.Label>NOMBRE DEL CONTACTO</Form.Label>

            <Form.Control
              type="text"
              className="edit-modal-form-control"
              placeholder="NOMBRE DEL CONTACTO"
              value={contact_name}
              onChange={(e) => setContactName(e.target.value)}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 edit-modal-form-group"
            controlId="formBasicContactPhone"
          >
            <Form.Label>TELEFONO</Form.Label>

            <Form.Control
              type="text"
              className="edit-modal-form-control"
              placeholder="TELEFONO"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
          <Button variant="primary" className="edit-modal-save-button">
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default EditAccountModal;
