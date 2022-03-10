import React from "react";

import "../styles/BannerCarousel.css";

import banner1 from "../assets/images/banner1.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.jpg";

import { Carousel } from "react-bootstrap";

function PrincipalBanner() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="PrincipalBanner-div">
          <div className="PrincipalBanner-img-div">
            <img
              src={banner1}
              width={"100%"}
              height="700"
              alt={"Truck Cargo"}
              className="banner-img"
            />
          </div>

          <div className="PrincipalBanner-tag-div">
            <div className="PrincipalBanner-text-div">
              <h2 className="PrincipalBanner-custom-header2">
                <span className="PrincipalBanner-din-alternate-bold-font">
                  TOP PAYING LOADS
                </span>
              </h2>
              <h2 className="PrincipalBanner-custom-header2">
                <span className="PrincipalBanner-din-alternate-bold-font">
                  BROKER CREDIT CHECK
                </span>
              </h2>
              <h2 className="PrincipalBanner-custom-header2">
                <span className="PrincipalBanner-din-alternate-bold-font">
                  CARRIER PACKAGE SETUP
                </span>
              </h2>

              <h2 className="PrincipalBanner-custom-header2">
                <span className="PrincipalBanner-din-alternate-bold-font">
                  NO FORCE DISPATCH
                </span>
              </h2>

              <h2 className="PrincipalBanner-custom-header2">
                <span className="PrincipalBanner-din-alternate-bold-font">
                  SIN CONTRATO
                </span>
              </h2>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="SecondaryBanner-div">
          <div className="SecondaryBanner-img-div">
            <img
              src={banner3}
              width={"100%"}
              height="700"
              alt={"Create Account Truck Cargo"}
              className="banner-img"
            />
          </div>

          <div className="SecondaryBanner-tag-div">
            <div className="SecondaryBanner-text-div">
              <h2 className="SecondaryBanner-custom-header2">
                <span className="SecondaryBanner-din-alternate-bold-font">
                  USTED DECIDE 48 ESTADOS
                </span>
              </h2>
              <h2 className="SecondaryBanner-custom-header2">
                <span className="SecondaryBanner-din-alternate-bold-font">
                  ZONAS DE SU PREFERENCIA
                </span>
              </h2>
              <h2 className="SecondaryBanner-custom-header2">
                <span className="SecondaryBanner-din-alternate-bold-font">
                  O RUTAS DEDICADAS
                </span>
              </h2>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="ThirdBanner-div">
          <div className="ThirdBanner-img-div">
            <img
              src={banner4}
              width={"100%"}
              height="700"
              alt={"Create Account Truck Cargo"}
              className="banner-img"
            />
          </div>

          <div className="ThirdBanner-tag-div">
            <div className="ThirdBanner-text-div">
              <h2 className="ThirdBanner-custom-header2">
                <span className="ThirdBanner-din-alternate-bold-font">
                  USTED DECIDE 48 ESTADOS
                </span>
              </h2>
              <h2 className="ThirdBanner-custom-header2">
                <span className="ThirdBanner-din-alternate-bold-font">
                  ZONAS DE SU PREFERENCIA
                </span>
              </h2>
              <h2 className="ThirdBanner-custom-header2">
                <span className="ThirdBanner-din-alternate-bold-font">
                  O RUTAS DEDICADAS
                </span>
              </h2>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default PrincipalBanner;
