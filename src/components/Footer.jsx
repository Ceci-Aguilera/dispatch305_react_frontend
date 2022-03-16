import { Row, Col, Container } from "react-bootstrap";

import "../styles/Footer.css";
import facebookIcon from "../assets/icons/facbook-icon.png";
import instagramIcon from "../assets/icons/instagram-icon.png";
import { Link } from "react-router-dom";


import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import {useContextMenu} from "../context/MenuContext";
import {useAuth} from "../context/AuthContext";

function Footer() {

const {current_link, setCurrentLinkHelper} = useContextMenu();
const {user, login, logout} = useAuth();

    useEffect(() => {
    // console.log(current_link);
  }, [current_link])


  return (
    <footer className="footer">
      <Container className="footer-div">
        <Row className="footer-nav-row">
          <div className="footer-nav">

            <Link exact to="/"
              as={NavLink} className="footer-link">
              <span onClick={()=>setCurrentLinkHelper("Home")} className={current_link=="Home"?"secondary-color-span":""}>Home</span>
            </Link>

            <Link exact to="/service"
              as={NavLink}  className="footer-link">
              <span onClick={()=>setCurrentLinkHelper("Nosotros")} className={current_link=="Nosotros"?"secondary-color-span":""}>Nosotros</span>
            </Link>

            <Link exact to="/create-account"
              as={NavLink}  className="footer-link">
              <span onClick={()=>setCurrentLinkHelper("Contratar")} className={current_link=="Contratar"?"secondary-color-span":""}>Contratar</span>
            </Link>

            <Link exact to="/user-account" as={NavLink}  className="footer-link">
              <span onClick={()=>setCurrentLinkHelper("Cuenta")} className={current_link=="Cuenta"?"secondary-color-span":""}>Cuenta</span>
            </Link>

            {user?
              <Link exact to="/logout" as={NavLink}  className="footer-link">
                <span onClick={()=>setCurrentLinkHelper("Logout")} className={current_link=="Logout"?"secondary-color-span":""}>Logout</span>
              </Link>
            :""}

            <Link exact to="/"
              as={NavLink}  className="footer-link">
              <span className="secondary-color-span">305-776-4044</span>
            </Link>

          </div>
        </Row>

        <Row className="footer-nav-row">
          <div className="list-of-usa-states-div">
          <p>24/7 TRUCK DISPATCH ALL 48 STATES</p>

            <p>
              AK, AZ, AR, CA, CO, CT, DE, FL, GA, ID, IL, IN, IA, KS, KY, LA,
              ME, MD, MA, MI, MN, MS, MO, MT, NE, NV, NH, NJ, NM, NY, NC, ND,
              OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VT, VA, WA, WV, WI, WY
            </p>

            <p>Copyright © 2022 Website Design by Aguilera’s Design Inc.</p>
              <p className="developer-url-text">Developed by Cecilia Fernandez Aguilera</p>
          </div>
        </Row>

        <Row className="contact-us-s-media-row">
          <div className="contact-us-s-media-div">
            <img src={facebookIcon} alt="Facebook Icon Truck Cargo" />
            <img src={instagramIcon} alt="Instagram Icon Truck Cargo" />
          </div>
        </Row>

        <Row className="footer-space-row">
          <div className="footer-space-div" />
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
