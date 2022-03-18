import React from "react";
import "../styles/Landing.css";
import BannerCarousel from "../components/BannerCarousel";
import ServiceGrid from "../components/ServiceGrid";
import StepsViews from "../components/StepsView";

import { Button, Row, Col } from "react-bootstrap";
import ServiceBanner from "../components/ServiceBanner";
import ClavesSteps from "../components/ClavesSteps";
import ContactUs from "../components/ContactUs";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <BannerCarousel />
      <div className="banner-spacer" />

      <p className="text-center">
        <span className="third-color-span p-header-font">Que ofrecemos</span>
      </p>

      <h2 className="text-center landing-custom-header2">
        <span className="secondary-color-span landing-din-alternate-bold-font">
          Nuestros Servicios
        </span>
      </h2>

      <div className="landing-paragraph">
        <p>
          <span className="third-color-span p-font">
            Somos un pequeño grupo de dispatchers con amplia experiencia en
            cargas secas, refrigeradas, así como flat bed, enfocados en buscar y
            negociar el mejor precio con los brokers y ofrecerle tanto a dueños
            de camiones como pequeñas compañías un servicio de calidad y
            profesionalismo.
          </span>
          <br />
          <span className="third-color-span p-font">
            Al trabajar con su propia Authority usted es dueño en todo momento
            del servicio que le estamos ofreciendo, las confirmaciones llegan
            directamente a su correo y los brokers quedan con usted así no desee
            seguir con nuestro servicio en el futuro
          </span>
        </p>
      </div>

      <div className="spacer-25" />
      <ServiceGrid />

      <div className="spacer" />

      <h2 className="text-center landing-custom-header2">
        <span className="landing-din-alternate-bold-font">Comenzar es muy fácil</span>
      </h2>

      <div className="start-step-div">
        <StepsViews />

        <div className="comenzar-button-div">
        <Link to="/create-account">
          <Button variant="primary" className="comenzar-button">
            COMENZAR YA!
          </Button>
        </Link>
        </div>
      </div>

      <div className="spacer" />

      <ServiceBanner />

      <div className="spacer-100" />

      <div className="claves-para-exito-div">
        <ClavesSteps />
      </div>

      <div className="spacer" />

      <div className="contact-banner">
        <h1 className="contact-banner-title-h2">CARGUE SU CAMIÓN</h1>
      </div>

      <div className="spacer" />

      <div className="contact-us-div">
        <ContactUs />
      </div>
    </div>
  );
}
