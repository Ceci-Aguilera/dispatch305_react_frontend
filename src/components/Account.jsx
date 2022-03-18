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
  onClickResetPasswordModal,
}) {
  const [show_authorization_letter_modal, setShowAuthorizationLetterModal] =
    useState(false);
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
    if (doc_name === "Authorization Letter")
      return handleAuthorizationLetterModal();
    if (doc_name === "W9") return handleW9Modal();
    if (doc_name === "Insurance") return handleInsuranceModal();
    if (doc_name === "NOA") return handleNOAModal();
  };

  return (
    <div className="account-div">
      <SimpleBanner
        banner_img={banner4}
        banner_img_description="Account Marketing Truck Cargo"
      />

      <Container className="account-info-div">
        <Row className="account-info-row">
          <Col xs={12} sm={12} md={12} lg={6} className="account-info-col">
            <Row className="account-info-edit-row">
              <Col
                xs={12}
                sm={12}
                md={2}
                lg={2}
                className="account-info-edit-col"
              >
                <span className="account-info-title">
                  <p className="account-info-box-title">COMPANY</p>
                </span>
              </Col>

              <Col
                xs={12}
                sm={12}
                md={10}
                lg={10}
                className="account-info-edit-col"
              >
                <span className="account-info-span">
                  <div className="account-info-box-div">
                    <p className="account-info-box-p">
                      {user_info.company_name}
                    </p>
                  </div>
                </span>
              </Col>
            </Row>

            <Row className="account-info-edit-row">
              <Col
               xs={12}
                sm={12}
                md={2}
                lg={2}
                className="account-info-edit-col"
              >
                <span className="account-info-title">
                  <p className="account-info-box-title">CONTACT</p>
                </span>
              </Col>

              <Col
                xs={12}
                sm={12}
                md={10}
                lg={10}
                className="account-info-edit-col"
              >
                <span className="account-info-span">
                  <div className="account-info-box-div">
                    <p className="account-info-box-p">
                      {user_info.contact_name}
                    </p>
                  </div>
                </span>
              </Col>
            </Row>

            <Row className="account-info-edit-row">
              <Col
                xs={12}
                sm={12}
                md={2}
                lg={2}
                className="account-info-edit-col"
              >
                <span className="account-info-title">
                  <p className="account-info-box-title">PHONE</p>
                </span>
              </Col>

              <Col
               xs={12}
                sm={12}
                md={10}
                lg={10}
                className="account-info-edit-col"
              >
                <span className="account-info-span">
                  <div className="account-info-box-div">
                    <p className="account-info-box-p">{user_info.phone}</p>
                  </div>
                </span>
              </Col>
            </Row>

            <Row className="account-info-edit-row">
              <Col
               xs={12}
                sm={12}
                md={2}
                lg={2}
                className="account-info-edit-col"
              >
                <span className="account-info-title">
                  <p className="account-info-box-title">EMAIL</p>
                </span>
              </Col>

              <Col
                xs={12}
                sm={12}
                md={10}
                lg={10}
                className="account-info-edit-col"
              >
                <span className="account-info-span">
                  <div className="account-info-box-div">
                    <p className="account-info-box-p">{user_info.email}</p>
                  </div>
                </span>
              </Col>
            </Row>
          </Col>

          <Col xs={12} sm={12} md={12} lg={6} className="account-info-col">
            {documents_info.map((doc_info, index) => {
              return (
                <Row key={index} className="account-info-edit-row">
                  <Col
                   xs={12}
                sm={12}
                    md={10}
                    lg={10}
                    className="account-info-edit-col"
                  >
                    <span className="account-info-span">
                      <div className="account-info-box-div">
                        <p className="account-info-box-p">
                          <a
                            href={`http://localhost:5000/user-account/pdf-viewer/${user_info.email}/${doc_info.filename}`}
                            target="_blank"
                            className="account-info-box-a"
                          >
                            {doc_info.name}.pdf
                          </a>
                        </p>
                      </div>
                    </span>
                  </Col>

                  <Col
                   xs={12}
                sm={12}
                    md={2}
                    lg={2}
                    className="account-info-edit-col"
                  >
                    <span className="account-info-title">
                      <div className="user-info-document-button-div">
                        <Button
                          variant="primary"
                          className="user-info-document-button"
                          onClick={(e) => getCurrentShowModal(doc_info.name)}
                        >
                          CAMBIAR
                        </Button>
                      </div>
                    </span>
                  </Col>
                </Row>
              );
            })}
          </Col>
        </Row>

        <Row className="account-info-row">
          <p className="account-info-pending-bill-p">
            <span className="account-info-title">PRÓXIMO BILL: </span>
            <span className="account-info-span">
              $
              {user_info.pending_bill
                ? parseFloat(user_info.pending_bill.toFixed(2))
                : "0.00"}
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

            <div className="user-info-button-div">
              <Button
                variant="primary"
                className="user-info-button"
                onClick={(e) => onClickResetPasswordModal()}
              >
                RESET PASSWORD
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

export default Account;