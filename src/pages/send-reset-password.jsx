import { Card, Col, Row, Container, Button, Form } from "react-bootstrap";
import "../styles/Login.css";
import axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom"


const domain = process.env.REACT_APP_API_DOMAIN_NAME;

const SendRequestResetPasswordComponent = () => {
  

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("")

    const navigate = useNavigate();


    const sendRequestResetPasswordHandler = async (e) => {
        e.preventDefault();
        await send_request_reset_password(email, setMessage, navigate);
    };

    return (
        <Container className="login-container">
        <Card className="login-card">
          <Card.Header className="login-card-header">
            <h2 className="login-card-header-h2">Login</h2>
          </Card.Header>
  
          <Card.Body className="login-card-body">
            <Form className="login-form" onSubmit={(e) => sendRequestResetPasswordHandler(e)}>
              <Form.Group
                className="mb-3 login-form-group"
                controlId="formBasicLoginEmail"
              >
                <Form.Control
                  type="email"
                  className="login-form-control"
                  placeholder="EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
  
              <div className="login-button-div">
                <Button variant="primary" className="login-button" type="submit">
                  Send Email to Password
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
};

const send_request_reset_password = async (email, setMessage, navigate) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify({
        email,
    });

    const info_url = `${domain}/user-account/send-request-reset-password`;
    axios
        .post(info_url, body, config)
        .then(async (res) => {
            const result = await res.data;
            navigate("/", {replace: true})
        })
        .catch((error) => {
            console.log(error);
            setMessage("Error User with that email do not exists")
        });
}


export default SendRequestResetPasswordComponent;