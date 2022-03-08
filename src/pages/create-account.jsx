import React from "react";
import "../styles/CreateAccount.css";

import { useEffect, useState } from "react";

import { Button, Row, Col, Form } from "react-bootstrap";
import SimpleBanner from "../components/SimpleBanner";

import banner3 from "../assets/images/banner3.jpg";

import regularFolderIcon from "../assets/icons/folder-icon.png";

export default function CreateAccount() {
  const [authority_letter_document, setAuthorityLetterDocument] =
    useState(null);
  const [w9_document, setW9Document] = useState(null);
  const [insurance_document, setInsuranceDocument] = useState(null);
  const [noa_document, setNOADocument] = useState(null);

  return (
    <div>
      <SimpleBanner
        banner_img={banner3}
        banner_img_description="Create Account Truck Cargo"
      />

      <div className="spacer" />

      <h2 className="text-center create-account-custom-header2">
        <span className="create-account-din-alternate-bold-font">
          Comenzar es muy facil
        </span>
      </h2>

      <div className="create-account-folder-icon-div">
        <img src={regularFolderIcon} alt="Folder Icon Truck Cargo" />
      </div>

      <h4 className="text-center create-account-custom-title">
        Enviar los documentos
      </h4>

      <div className="create-account-paragraph-div">
        <p className="create-account-paragraph-p">
          Para crear una cuenta con nuevos brokers y mantener su informacion
          actualizada es necesariobrindarnos una serie de documentos requeridos
          para crear su cuenta y que podamos negociar por usted sus cargas. Los
          documentos son guardados con absoluta seguridad por nosotros y solo
          seran utilizados para uso exclusivo de su compania.
        </p>
      </div>

      <h4 className="text-center create-account-custom-title">
        Complete esta forma y recibira un agreement para comenzar a recibir
        cargas
      </h4>

      <div className="create-account-form-div">
        <Row>
          <div key={`inline-radio`} className="mb-3 radio-div">
          <label className='create-account-label-radio'>
          <input type="radio" name="group1" id={`inline-radio-1`} className="create-account-radio" />
            <span className="create-account-label-radio-span">4% Plan Basico</span>
          </label>



          <label className='create-account-label-radio'>
          <input type="radio" name="group1" id={`inline-radio-2`} className="create-account-radio" />
            <span className="create-account-label-radio-span">6% Plan VIP</span>
          </label>
            
          </div>
        </Row>
        <Form className="create-account-form">
          <Row className="create-account-row">
            <Col xs={12} sm={12} md={6} lg={6} className="create-account-col">
              <Form.Group
                className="mb-3 create-account-form-group"
                controlId="formBasicCompanyName"
              >
                <Form.Control
                  type="text"
                  className="create-account-form-control"
                  placeholder="NOMBRE DE LA COMAPNIA"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 create-account-form-group"
                controlId="formBasicContactName"
              >
                <Form.Control
                  type="text"
                  className="create-account-form-control"
                  placeholder="NOMBRE DEL CONTACTO"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 create-account-form-group"
                controlId="formBasicContactPhone"
              >
                <Form.Control
                  type="text"
                  className="create-account-form-control"
                  placeholder="TELEFONO"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 create-account-form-group"
                controlId="formBasicContactEmail"
              >
                <Form.Control
                  type="email"
                  className="create-account-form-control"
                  placeholder="EMAIL"
                />
              </Form.Group>
            </Col>

            <Col xs={12} sm={12} md={6} lg={6} className="create-account-col">
              <div className="create-account-upload-file-div">
                <p className="create-account-upload-file-p">AUTHORITY LETTER</p>
                <label
                  for="uploadButton"
                  className="create-account-upload-file-label"
                >
                  <p className="create-account-upload-file-label-p">UPLOAD</p>
                </label>

                <input
                  id="uploadButton"
                  type="file"
                  hidden
                  accept="application/pdf"
                  onChange={(e) =>
                    setAuthorityLetterDocument(e.target.files[0])
                  }
                />
              </div>

              <div className="spacer-15" />

              <div className="create-account-upload-file-div">
                <p className="create-account-upload-file-p">W9</p>
                <label
                  for="uploadButton"
                  className="create-account-upload-file-label"
                >
                  <p className="create-account-upload-file-label-p">UPLOAD</p>
                </label>

                <input
                  id="uploadButton"
                  type="file"
                  hidden
                  accept="application/pdf"
                  onChange={(e) => setW9Document(e.target.files[0])}
                />
              </div>

              <div className="spacer-15" />

              <div className="create-account-upload-file-div">
                <p className="create-account-upload-file-p">INSURANCE</p>
                <label
                  for="uploadButton"
                  className="create-account-upload-file-label"
                >
                  <p className="create-account-upload-file-label-p">UPLOAD</p>
                </label>

                <input
                  id="uploadButton"
                  type="file"
                  hidden
                  accept="application/pdf"
                  onChange={(e) => setInsuranceDocument(e.target.files[0])}
                />
              </div>

              <div className="spacer-15" />

              <div className="create-account-upload-file-div">
                <p className="create-account-upload-file-p">
                  NOA (En caso de tener factoring)
                </p>
                <label
                  for="uploadButton"
                  className="create-account-upload-file-label"
                >
                  <p className="create-account-upload-file-label-p">UPLOAD</p>
                </label>

                <input
                  id="uploadButton"
                  type="file"
                  hidden
                  accept="application/pdf"
                  onChange={(e) => setNOADocument(e.target.files[0])}
                />
              </div>
            </Col>
          </Row>

          <div className="create-account-button-div">
            <Button
              variant="primary"
              className="create-account-button"
              type="submit"
            >
              COMENZAR YA!
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
