import React from "react";

import "../styles/SimpleBanner.css";



function SimpleBanner({banner_img, banner_img_description}) {
  return (
<div className="CreateAccountBanner-div">
      <div className="CreateAccountBanner-img-div">
      <img 
          src={banner_img}
          width={"100%"}
          height="700"
          alt={banner_img_description}
          className="banner-img"
        />
      </div>
    </div>
  );
}

export default SimpleBanner;
