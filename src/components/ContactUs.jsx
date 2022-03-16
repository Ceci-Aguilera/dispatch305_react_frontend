import React from "react";

import { useEffect, useState } from "react";


import "../styles/ContactUs.css";

import { Row, Col, Form, Button } from "react-bootstrap";

import correctIcon from "../assets/icons/correct-icon.png";

import axios from "axios"

function ContactUs() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");



  const body = JSON.stringify({
    email,
    name,
    phone,
    comment,
  })


  const sendCommentHandler = async(e) => {
    e.preventDefault();
    await sendComment(body);
    setEmail("");
    setName("");
    setPhone("");
    setComment("")
  }


  return (
    <Row className="contact-us-row">
      <Col xs={12} sm={12} md={6} lg={6} className="contact-us-col">
        <div className="contact-us-col-body contact-us-col-first">
          <p className="contact-us-tag-p">Contáctenos</p>

          <h2 className="contact-us-tag-h2">
            No espere más para contactarnos, estamos aquí para encontrar los
            mejores rates de la insdutria para usted
          </h2>
        </div>
      </Col>

      <Col xs={12} sm={12} md={6} lg={6} className="contact-us-col">
        <div className="contact-us-col-body contact-us-col-second">
        <p className="contact-us-tag-p"><span className="tspan">Contáctenos</span></p>

          <Form onSubmit={(e) => sendCommentHandler(e)}>
            <Form.Group className="mb-3 contact-us-form-group" controlId="formBasicName">
              <Form.Control type="text" className="contact-us-form-control"  placeholder="NOMBRE" value={name} onChange={(e) => setName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3 contact-us-form-group"  controlId="formBasicPhone">
              <Form.Control type="text" className="contact-us-form-control" placeholder="TELEFONO" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3 contact-us-form-group"  controlId="formBasicEmail">
              <Form.Control type="email" className="contact-us-form-control" placeholder="CORREO ELECTRONICO" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3 contact-us-message"  controlId="formBasicMessage">
            <Form.Control as="textarea" className="contact-us-control-message" placeholder="MENSAJE" rows={3} value={comment} onChange={(e) => setComment(e.target.value)}/>
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



const sendComment = async(body) => {

  const config = {
    headers:{
      'Content-Type': 'application/json'
    }
  }

  const url = 'http://localhost:5000/message/create-comment';

  const axios_result = await axios.post(url, body, config).then(async(res) => {
    const result = await res.data
    console.log(result);
  }).catch((error) => {
    console.log("Error")
  })

}






export default ContactUs;
