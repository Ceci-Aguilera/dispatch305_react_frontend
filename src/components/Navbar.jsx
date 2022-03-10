import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";

import "../styles/Navbar.css";
import logo from "../assets/logos/navbar_logo.jpeg";


import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import {useContextMenu} from "../context/MenuContext";

function CustomNavbar() {

  const {current_link, setCurrentLinkHelper} = useContextMenu();

  useEffect(() => {
    // console.log(current_link);
  }, [current_link])

  return (
    <Navbar bg="light" variant="light" className="navbar" collapseOnSelect expand="lg">
      {/* <Container className="navbar-div"> */}
        <Navbar.Brand exact to="/"
              as={NavLink} className="navbar-brand">
          <img
            src={logo}
            width="100%"
            height="80"
            className="d-inline-block align-top navbar-brand-img"
            alt="React Bootstrap logo"
            onClick={()=>setCurrentLinkHelper("Home")} 
          />
        </Navbar.Brand>
        <Navbar.Toggle  className="navbar-toggle" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto navbar-nav">

            <Nav.Link
              exact to="/"
              as={NavLink}
              className="navbar-link"
            >
              <span onClick={()=>setCurrentLinkHelper("Home")} className={current_link=="Home"?"secondary-color-span":""}>Home</span>
            </Nav.Link>

            <Nav.Link exact to="/service"  as={NavLink}  className="navbar-link">
              <span onClick={()=>setCurrentLinkHelper("Nosotros")} className={current_link=="Nosotros"?"secondary-color-span":""}>Nosotros</span>
            </Nav.Link>

            <Nav.Link exact to="#features" as={NavLink}  className="navbar-link">
              <span onClick={()=>setCurrentLinkHelper("Precios")} className={current_link=="Precios"?"secondary-color-span":""} >Precios</span>
            </Nav.Link>

            <Nav.Link exact to="/create-account" as={NavLink}  className="navbar-link">
              <span onClick={()=>setCurrentLinkHelper("Contratar")} className={current_link=="Contratar"?"secondary-color-span":""}>Contratar</span>
            </Nav.Link>

            <Nav.Link exact to="/user-account" as={NavLink}  className="navbar-link">
              <span onClick={()=>setCurrentLinkHelper("Cuenta")} className={current_link=="Cuenta"?"secondary-color-span":""}>Cuenta</span>
            </Nav.Link>

            <Nav.Link href="/" className="navbar-link">
              <span className="secondary-color-span">305-776-4044</span>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

export default CustomNavbar;
