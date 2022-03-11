import React from "react";
import { useEffect, useState } from "react";

import "../styles/Login.css";

import { Card, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login({loginFunction}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const body = JSON.stringify({
    email,
    password,
  })

  const loginHelper = async(e) => {
      e.preventDefault();
      await loginFunction(body)
  }

  return (
    <Container className="login-container">
      <Card className="login-card">
        <Card.Header className="login-card-header">
          <h2 className="login-card-header-h2">Login</h2>
        </Card.Header>

        <Card.Body className="login-card-body">
          <Form className="login-form" onSubmit={(e) => loginHelper(e)}>
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

            <Form.Group
              className="mb-3 login-form-group"
              controlId="formBasicLoginPass"
            >
              <Form.Control
                type="password"
                className="login-form-control"
                placeholder="CONTRASEÑA"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="login-signup-res-pass-div">
              <p className="login-new-account-p">
                No tienes una cuenta?
                <br className="login-br" />{" "}
                <Link to="/create-account" className="login-new-account-link">
                  Crear Cuenta Nueva
                </Link>
              </p>
            </div>

            <div className="login-button-div">
              <Button variant="primary" className="login-button" type="submit">
                LOGIN
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
