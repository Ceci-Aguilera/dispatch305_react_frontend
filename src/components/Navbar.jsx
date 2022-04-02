import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";

import "../styles/Navbar.css";
import logo from "../assets/logos/navbar_logo.jpeg";


import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import {useContextMenu} from "../context/MenuContext";
import {useAuth} from "../context/AuthContext";

import agreement_download from "../assets/files/Dispatch305-agreement.pdf";

function CustomNavbar() {

  const {current_link, setCurrentLinkHelper} = useContextMenu();
  const {user, login, logout} = useAuth();

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

            <Nav.Link exact to="/create-account" as={NavLink}  className="navbar-link">
              <span onClick={()=>setCurrentLinkHelper("Contratar")} className={current_link=="Contratar"?"secondary-color-span":""}>Contratar</span>
            </Nav.Link>

            <Nav.Link href={agreement_download} target="_blank"  className="navbar-link">
              Agreement
            </Nav.Link>

            <Nav.Link exact to="/user-account" as={NavLink}  className="navbar-link">
              <span onClick={()=>setCurrentLinkHelper("Cuenta")} className={current_link=="Cuenta"?"secondary-color-span":""}>Cuenta</span>
            </Nav.Link>

            {user?
              <Nav.Link exact to="/logout" as={NavLink}  className="navbar-link">
                <span onClick={()=>setCurrentLinkHelper("Logout")} className={current_link=="Logout"?"secondary-color-span":""}>Logout</span>
              </Nav.Link>
            :""}

            <Nav.Link href="/" className="navbar-link">
              <span className="secondary-color-span">786-783-8421</span>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

export default CustomNavbar;
