import React from "react";
import "./slide.scss";

const Slide = ({ title, img, children }) => {
  return (
    <div className="slide-block">
      <div className="slide-block-technologies">
        <div className="slide-block-title">{title}</div>
        <div className="slide-block-subtitle">Technologies We Use:</div>
        <ul>{children}</ul>
      </div>
      <div className="slide-block-logo">
        <div className="slide-block-logo-icon">
          <img src={img} />
        </div>
      </div>
    </div>
  );
};

export default Slide;
