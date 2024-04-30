import React from "react";

const AboutContent = ({ heading, specialization, docabout, btn }) => {
  return (
    <div className="about-content">
      <div className="about-heading">
        <h3>{heading}</h3>
        <p>{specialization}</p>
      </div>
      <div className="about-para">{docabout}</div>
      <div className="about-btn">
        <button>{btn}</button>
      </div>
    </div>
  );
};

export default AboutContent;
