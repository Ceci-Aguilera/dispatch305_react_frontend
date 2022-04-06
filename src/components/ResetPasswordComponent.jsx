import { Card, Col, Row, Container, Button, Form } from "react-bootstrap";
import "../styles/Login.css";
import axios from "axios";
import { useEffect, useState } from "react";
import {
    useParams,
  } from "react-router-dom";

import { useNavigate } from "react-router-dom"

const domain = process.env.REACT_APP_API_DOMAIN_NAME;

const ResetPasswordComponent = () => {

    const { uid, token } = useParams();

    const [password, setPassword] = useState("");
    const [re_password, setRePassword] = useState("");
    const [message, setMessage] = useState("")

    const navigate = useNavigate();

    const resetPasswordHandler = async (e) => {
        e.preventDefault();
        await reset_password(password, re_password, uid, token, navigate);
    };

    return (
        <Container className="login-container">
        <Card className="login-card">
          <Card.Header className="login-card-header">
            <h2 className="login-card-header-h2">Login</h2>
          </Card.Header>
  
          <Card.Body className="login-card-body">
            <Form className="login-form" onSubmit={(e) => resetPasswordHandler(e)}>
              <Form.Group
                className="mb-3 login-form-group"
                controlId="formBasicLoginEmail"
              >
                <Form.Control
                  type="password"
                  className="login-form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3 login-form-group"
                controlId="formBasicLoginEmail"
              >
                 <Form.Control
                  type="password"
                  className="login-form-control"
                  placeholder="Re Enter Password"
                  value={re_password}
                  onChange={(e) => setRePassword(e.target.value)}
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

const reset_password = async (password, re_password, uid, token, navigate) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify({
        password,
        re_password,
    });

    const info_url = `${domain}/user-account/reset-password/${uid}/${token}`;
    axios
        .post(info_url, body, config)
        .then(async (res) => {
          navigate("/", {replace: true})
        })
        .catch((error) => {
            console.log(error);
        });
}


export default ResetPasswordComponent;