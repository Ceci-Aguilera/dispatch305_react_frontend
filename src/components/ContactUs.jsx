import React from "react";

import "../styles/ContactUs.css";

import { Row, Col, Form, Button } from "react-bootstrap";

import correctIcon from "../assets/icons/correct-icon.png";

function ContactUs() {
  return (
    <Row className="contact-us-row">
      <Col xs={12} sm={12} md={6} lg={6} className="contact-us-col">
        <div className="contact-us-col-body contact-us-col-first">
          <p className="contact-us-tag-p">Contactenos</p>

          <h2 className="contact-us-tag-h2">
            No espere mas para contactarnos, estamos aqui para encontrar los
            mejores rates de la insdutria para usted
          </h2>
        </div>
      </Col>

      <Col xs={12} sm={12} md={6} lg={6} className="contact-us-col">
        <div className="contact-us-col-body contact-us-col-second">
        <p className="contact-us-tag-p"><span className="tspan">Contactenos</span></p>

          <Form>
            <Form.Group className="mb-3 contact-us-form-group" controlId="formBasicName">
              <Form.Control type="text" className="contact-us-form-control"  placeholder="NOMBRE" />
            </Form.Group>

            <Form.Group className="mb-3 contact-us-form-group"  controlId="formBasicPhone">
              <Form.Control type="text" className="contact-us-form-control" placeholder="TELEFONO" />
            </Form.Group>

            <Form.Group className="mb-3 contact-us-form-group"  controlId="formBasicEmail">
              <Form.Control type="email" className="contact-us-form-control" placeholder="CORREO ELECTRONICO" />
            </Form.Group>

            <Form.Group className="mb-3 contact-us-message"  controlId="formBasicMessage">
            <Form.Control as="textarea" className="contact-us-control-message" placeholder="MENSAJE" rows={3} />
            </Form.Group>
            <Button variant="primary" className="contact-us-button" type="submit">
              ENVIAR MENSAJE
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
}

export default ContactUs;
