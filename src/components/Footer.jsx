import { Row, Col, Container } from "react-bootstrap";

import "../styles/Footer.css";
import facebookIcon from "../assets/icons/facbook-icon.png";
import instagramIcon from "../assets/icons/instagram-icon.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Container className="footer-div">
        <Row className="footer-nav-row">
          <div className="footer-nav">
            <Link to="#" className="footer-link">
              <span className="secondary-color-span">Home</span>
            </Link>

            <Link to="#" className="footer-link">
              Nosotros
            </Link>

            <Link to="#" className="footer-link">
              Precios
            </Link>

            <Link to="#" className="footer-link">
              Contratar
            </Link>

            <Link to="#" className="footer-link">
              <span className="secondary-color-span">305-776-4044</span>
            </Link>
          </div>
        </Row>

        <Row className="footer-nav-row">
          <div className="list-of-usa-states-div">
            <p>
              AK, AZ, AR, CA, CO, CT, DE, FL, GA, ID, IL, IN, IA, KS, KY, LA,
              ME, MD, MA, MI, MN, MS, MO, MT, NE, NV, NH, NJ, NM, NY, NC, ND,
              OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VT, VA, WA, WV, WI, WY
            </p>
            <p>24/7 TRUCK DISPATCH ALL 48 STATES</p>
            <p>Copyright © 2022 Website Design by Aguilera’s Design Inc.</p>
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
