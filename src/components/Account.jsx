import React from "react";
import { useEffect, useState } from "react";

import "../styles/Account.css";

import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SimpleBanner from "./SimpleBanner";
import EditDocumentModal from "./EditDocumentModal";

import banner4 from "../assets/images/banner4.jpg";

import axios from "axios";

function Account({
  onClickEditAccount,
  onClickEditDocuments,
  user_info,
  documents_info,
}) {
  const [show_authorization_letter_modal, setShowAuthorizationLetterModal] = useState(false);
  const [show_w9_modal, setShowW9Modal] = useState(false);
  const [show_insurance_modal, setShowInsuranceModal] = useState(false);
  const [show_noa_modal, setShowNOAModal] = useState(false);

  const handleAuthorizationLetterModal = () => {
    setShowAuthorizationLetterModal(true);
  };

  const handleCloseAuthorizationLetterModal = () => {
    setShowAuthorizationLetterModal(false);
  };

  const handleW9Modal = () => {
    setShowW9Modal(true);
  };

  const handleCloseW9Modal = () => {
    setShowW9Modal(false);
  };


  const handleInsuranceModal = () => {
    setShowInsuranceModal(true);
  };

  const handleCloseInsuranceModal = () => {
    setShowInsuranceModal(false);
  };


  const handleNOAModal = () => {
    setShowNOAModal(true);
  };

  const handleCloseNOAModal = () => {
    setShowNOAModal(false);
  };

  const getCurrentShowModal = (doc_name) => {
    if(doc_name === "Authorization Letter") return handleAuthorizationLetterModal();
    if(doc_name === "W9") return handleW9Modal();
    if(doc_name === "Insurance") return handleInsuranceModal();
    if(doc_name === "NOA") return handleNOAModal();
  }

  console.log("User model from API")
  console.log(user_info)


  return (
    <div className="account-div">
      <SimpleBanner
        banner_img={banner4}
        banner_img_description="Account Marketing Truck Cargo"
      />

      <Container className="account-info-div">
        <Row className="account-info-row">
          <Col xs={12} sm={12} md={12} lg={6} className="account-info-col">
            <p className="account-info-p">
              <span className="account-info-title">
                NOMBRE DE LA COMPAÑIA:{" "}
              </span>
              <span className="account-info-span">
                {user_info.company_name}
              </span>
            </p>

            <p className="account-info-p">
              <span className="account-info-title">NOMBRE DE CONTACTO: </span>
              <span className="account-info-span">
                {user_info.contact_name}
              </span>
            </p>

            <p className="account-info-p">
              <span className="account-info-title">TELEFONO: </span>
              <span className="account-info-span">{user_info.phone}</span>
            </p>

            <p className="account-info-p">
              <span className="account-info-title">EMAIL: </span>
              <span className="account-info-span">{user_info.email}</span>
            </p>
          </Col>

          <Col xs={12} sm={12} md={12} lg={6} className="account-info-col">
            {documents_info.map((doc_info, index) => {
              return (
                <div key={index} className="account-info-documents-div">
                  <p className="account-info-document-p">
                    <span className="account-info-document-title">
                      {doc_info.name}:{" "}
                    </span>
                    <span className="account-info-document-span">
                      <a href={`http://localhost:5000/user-account/pdf-viewer/${user_info.email}/${doc_info.filename}`} target="_blank">
                        Current doc
                      </a>
                    </span>
                  </p>

                  <div className="user-info-document-button-div">
                    <Button
                      variant="primary"
                      className="user-info-document-button"
                      onClick={(e) => getCurrentShowModal(doc_info.name)}
                    >
                      CAMBIAR
                    </Button>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>

        <Row className="account-info-row">
          <p className="account-info-pending-bill-p">
            <span className="account-info-title">BILL PENDIENTE: </span>
            <span className="account-info-span">
              ${user_info.pending_bill?parseFloat(user_info.pending_bill.toFixed(2)):"0.00"}
            </span>
          </p>
        </Row>

        <Row className="account-info-row">
          <Col xs={12} sm={12} md={12} lg={6} className="account-info-col">
            <div className="user-info-button-div">
              <Button
                variant="primary"
                className="user-info-button"
                onClick={(e) => onClickEditAccount()}
              >
                EDITAR INFO
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <EditDocumentModal
        show_modal={show_authorization_letter_modal}
        close_modal={handleCloseAuthorizationLetterModal}
        document_name="Authorization Letter"
        user_email={user_info.email}
        document_filename="authority_letter"
      />
      <EditDocumentModal
        show_modal={show_w9_modal}
        close_modal={handleCloseW9Modal}
        document_name="W9"
        user_email={user_info.email}
        document_filename="w9"
      />
      <EditDocumentModal
        show_modal={show_insurance_modal}
        close_modal={handleCloseInsuranceModal}
        document_name="Insurance"
        user_email={user_info.email}
        document_filename="insurance"
      />
      <EditDocumentModal
        show_modal={show_noa_modal}
        close_modal={handleCloseNOAModal}
        document_name="NOA"
        user_email={user_info.email}
        document_filename="noa"
      />
    </div>
  );
}

// const redirectToDocument = async(document_name, email) => {
//   const token = window.localStorage.getItem("user_token");
//
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${token}`,
//       'Accept': 'application/pdf',
//     },
//   }
//
//   const pdfviewer_url = `http://localhost:5000/user-account/pdf-viewer`
//
//   const body = JSON.stringify({
//       document_name,
//   })
//
//   await axios.post(pdfviewer_url, body, config)
//   .then(async (response) => {
//     //Create a Blob from the PDF Stream
//     const file = new Blob(
//       [response.data],
//       {type: 'application/pdf'});//Build a URL from the file
//     const fileURL = URL.createObjectURL(file);//Open the URL on new Window
//     window.open(fileURL);
//   })
//   .catch((err) => {
//     console.log(err)
//   });
// }

export default Account;
