import React from "react";

import "../styles/ClavesSteps.css";

import { Row, Col, Card } from "react-bootstrap";

import correctIcon from "../assets/icons/correct-icon.png";

function ClavesSteps() {
  return (
    <Row className="claves-para-exito-row">
      <Col xs={12} sm={12} md={6} lg={6} className="claves-para-exito-col">
        <div className="claves-para-exito-col-body  claves-para-exito-col-first">
          <div className="v-card-icon-div"></div>
          <div className="claves-para-exito-button-div">
            <p className="claves-para-exito-button-p">CLAVES PARA EL EXITO</p>
          </div>

          <div className="spacer" />

          <div className="claves-para-exito-card">
            <div className="claves-para-exito-header-div">
              <div className="claves-para-exito-icon-div">
                <img src={correctIcon} alt="Correct Truck Cargo" />
              </div>
              <div className="v-spacer"></div>
              <div className="claves-para-exito-card-body">
                <div className="claves-para-exito-title-div">
                  <p className="claves-para-exito-title-p">
                    SERVICIO A PRECIO JUSTO
                  </p>
                </div>

                <div className="claves-text-div">
                  <div className="claves-paragraph-div">
                    <p>
                      No pague más de lo que necesita ni fees ocultos, usted
                      recibira un servicio de calidad con un precio siempre
                      adecuado pues mientras usted más gana nosotros más
                      recibimos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer" />

          <div className="claves-para-exito-card">
            <div className="claves-para-exito-header-div">
              <div className="claves-para-exito-icon-div">
                <img src={correctIcon} alt="Correct Truck Cargo" />
              </div>
              <div className="v-spacer"></div>
              <div className="claves-para-exito-card-body">
                <div className="claves-para-exito-title-div">
                  <p className="claves-para-exito-title-p">
                    DISPATCH ESPECIALIZADO
                  </p>
                </div>

                <div className="claves-text-div">
                  <div className="claves-paragraph-div">
                    <p>
                      Nuestro servicio se enfoca en sus necesidades objetivas,
                      pues cada cliente elije que zona quiere trabajar, que tipo
                      de carga quiere mover, en que horario desea trabajar y
                      demás
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer" />

          <div className="claves-para-exito-card">
            <div className="claves-para-exito-header-div">
              <div className="claves-para-exito-icon-div">
                <img src={correctIcon} alt="Correct Truck Cargo" />
              </div>
              <div className="v-spacer"></div>
              <div className="claves-para-exito-card-body">
                <div className="claves-para-exito-title-div">
                  <p className="claves-para-exito-title-p">GRAN COMPLEMENTO</p>
                </div>

                <div className="claves-text-div">
                  <div className="claves-paragraph-div">
                    <p>
                      Ahorra tiempo y despreocuopese del papeleo, podemos
                      completar su servicio de dispatch encargandonos de subir
                      sus POD, Rate, Lumper, etc a su factoring para que pueda
                      cobrar en tiempo su trabajo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>

      <Col xs={12} sm={12} md={6} lg={6} className="claves-para-exito-col">
        <div className="claves-para-exito-col-body claves-para-exito-col-second">
          <p className="claves-para-exito-tag-p">Sobre Nosotros</p>

          <h2 className="claves-para-exito-tag-h2">
            Dispatch 305 es un servicio especialmente diseñado para owners op y
            pequeñas compañías de cargas.
          </h2>

          <h2 className="claves-para-exito-tag-h2">
            Contamos con herramientas dedicadas, así como amplia experiencia en
            la industria de las cargas para ofrecerle el mejor precio cada día.
          </h2>
        </div>
      </Col>
    </Row>
  );
}

export default ClavesSteps;
