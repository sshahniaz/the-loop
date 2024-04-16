import React from "react";
import "./Carousel.scss";

const Carousel = () => {
  return (
    <div className="heroVideo">
      <video id="heroVideo" width="960" height="540" autoPlay muted>
        <source src="/assets/hero/heroVi.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Carousel;
