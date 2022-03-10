import React from "react";

import banner2 from "../assets/images/banner2.jpg";
import EditFileIcon from "../assets/icons/edit-file-icon.png";

import "../styles/ServiceBanner.css";
import { Button } from "react-bootstrap";

function ServiceBanner() {
  return (
    <div className="complexBanner-div">
      <div className="complexBanner-img-div">
        <img
          src={banner2}
          width={"100%"}
          height="700"
          alt="Service Truck Cargo"
          className="complexBanner-banner-img"
        />
      </div>

      <div className="complexBanner-tag-div">
        <div className="complexBanner-text-div">
          <p className="complexBanner-header-p">Nuestro compromiso</p>
          <h2 className="custom-header2">
            <span className="complexBanner-din-alternate-bold-font">
              Listo para solicitar nuestros servicios?
            </span>
          </h2>
          <p className="complexBanner-header-p-light">
            Solo tiene que leer nuestro agreement de una sola pagina, firmar y
            llenar la forma con los datos necesarios para el set-up con los
            brokers, no espere más y comience a recibir hoy mismo los mejores
            rates del mercado.
          </p>
          <div className="complexBanner-icon-div">
            <img
              src={EditFileIcon}
              className="complexBanner-icon"
              alt="Edit File Truck Cargo"
            />
          </div>

          <div className="complexBanner-button-div">
            <Button variant="primary" className="complexBanner-button">
              ENVIAR DOCUMENTOS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceBanner;
