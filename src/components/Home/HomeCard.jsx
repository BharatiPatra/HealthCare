import React from "react";
import "./home.css";
const HomeCard = ({ image, header, para, link }) => {
  return (
    <div className="home-card">
      <img className="home-card-image" src={image} />
      <div className="home-card-header">{header}</div>
      <div className="home-card-para">{para}</div>
      <div className="home-card-link">
        <a href={link}>Read More</a>
      </div>
    </div>
  );
};

export default HomeCard;
