import React from "react";

import { useEffect, useState } from "react";

import "../styles/EditDocumentModal.css";

import { Container, Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function EditDocumentModal({ show_modal, close_modal, document_name, current_doc}) {

    const [new_document, setNewDocument] = useState(null);

  return (
    <Container className="edit-account-modal-container">
      <Modal show={show_modal} onHide={close_modal} className="edit-modal">
        <Modal.Header closeVariant="white" closeButton className="edit-modal-header">
          <Modal.Title className="edit-modal-title">Upload {document_name}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="edit-modal-body">
 
        <div className="document-modal-title-div">
          <p className="document-modal-title">
            {new_document?new_document.name:"current_doc"}
          </p>
        </div>

        <div className="document-modal-button-div">

          <label
                  for="uploadDocumentButton"
                  className="document-modal-upload-file-label"
                >
                  <p className="document-modal-upload-file-label-p">UPLOAD</p>
                </label>

                <input
                  id="uploadDocumentButton"
                  type="file"
                  hidden
                  accept="application/pdf"
                  onChange={(e) =>
                    setNewDocument(e.target.files[0])
                  }
                />
        </div>




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

export default EditDocumentModal;
