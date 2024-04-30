import React from "react";
import "./home.css";
const HomeContent = () => {
  return (
    <div className="home-content-continer">
      <div className="home-content">
        <h1>
          Top Class <span className="blue">Health Care</span> Hospital
        </h1>
      </div>
      <div className="home-para">
        <p>
          Currently,hospitals are largely staffed by professional
          physicians,surgeons,nurses and allied
        </p>
      </div>
      <div className="home-btn">
        <button>Know More</button>
      </div>
    </div>
  );
};

export default HomeContent;
