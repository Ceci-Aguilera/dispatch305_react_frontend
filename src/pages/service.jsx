import React from "react";
import "../styles/Service.css";

import { Button, Row, Col, Form } from "react-bootstrap";

import SimpleBanner from "../components/SimpleBanner";

import dollarIcon from "../assets/icons/money-icon.png";
import banner5 from "../assets/images/banner5.jpeg";
import { Link } from "react-router-dom";

export default function Service() {
  return (
    <div>
      <SimpleBanner
        banner_img={banner5}
        banner_img_description={"Service Detail Truck Cargo"}
      />

      <div className="spacer" />

      <h2 className="text-center service-custom-header2">
        <span className="service-din-alternate-bold-font">
          Elija el servicio de su preferencia
        </span>
      </h2>

      <div className="service-dollar-icon-div">
        <img src={dollarIcon} alt="Folder Icon Truck Cargo" />
      </div>

      <h4 className="text-center service-custom-title">
        Y usted podrá obtener los siguientes servicios
      </h4>

      <div className="service-plans-div">
        <h4 className="service-plan-title">4% Plan Básico</h4>
        <p className="service-p">
          Ofertas de carga para el destino que usted prefiera
          <br />
          Sugerencia de cargas de regreso o a otros destinos con mejor rate por milla
          <br />
           Setup con nuevos brokers
        </p>
      </div>

      <div className="service-plans-div">
        <h4 className="service-plan-title">6% Plan VIP</h4>
        <p className="service-p">
          Ofertas de carga para el destino que usted prefiera
          <br />
           Sugerencia de cargas de regreso o a otros destinos con mejor rate por milla
           <br />
           Setup con nuevos brokers
           <br />
            Negociación para Detentión o Layovers
            <br />
            Envío de documentos a su companía de Factoring
            <br />
            Analítica semanal por camión
        </p>
      </div>

      <div className="service-button-div">
        <Link to="/create-account">
          <Button variant="primary" className="service-button">
            COMENZAR YA!
          </Button>
        </Link>
      </div>
    </div>
  );
}
