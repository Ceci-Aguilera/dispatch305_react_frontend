import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";

import "../styles/Navbar.css";
import logo from "../assets/logos/navbar_logo.jpeg";

function CustomNavbar() {
  return (
    <Navbar bg="light" variant="light" className="navbar" collapseOnSelect expand="lg">
      {/* <Container className="navbar-div"> */}
        <Navbar.Brand href="/" className="navbar-brand">
          <img
            src={logo}
            width="100%"
            height="80"
            className="d-inline-block align-top navbar-brand-img"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle  className="navbar-toggle" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto navbar-nav">
            <Nav.Link
              href="/"
              className="navbar-link"
            >
              <span className="secondary-color-span">Home</span>
            </Nav.Link>
            <Nav.Link href="/service" className="navbar-link">
              Nosotros
            </Nav.Link>
            <Nav.Link href="#features" className="navbar-link">
              Precios
            </Nav.Link>
            <Nav.Link href="/create-account" className="navbar-link">
              Contratar
            </Nav.Link>
            <Nav.Link href="#features" className="navbar-link">
              <span className="secondary-color-span">305-776-4044</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

export default CustomNavbar;
