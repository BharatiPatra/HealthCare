import React from "react";
import HomeCard from "./HomeCard";
import HomeContent from "./HomeContent";
import HospitalLogo from "../../assets/Images/HospitalLogo.png";
import "./home.css";

const Home = ({ homereference }) => {
  return (
    <div className="main-home home" ref={homereference}>
      <div className="content-image">
        <HomeContent />
        <div className="doc-img"></div>
      </div>

      <div className="main-card">
        <HomeCard
          image={HospitalLogo}
          header="Over 100+ Stretcher"
          para="A hospital is a health care institution providing patient treatment with specialized medical"
          link="/"
        />
        <HomeCard
          image={HospitalLogo}
          header="24 Hours Services"
          para="A hospital is a health care institution providing patient treatment with specialized medical"
          link="/"
        />
        <HomeCard
          image={HospitalLogo}
          header="High Tech Equipment"
          para="A hospital is a health care institution providing patient treatment with specialized medical"
          link="/"
        />
      </div>
    </div>
  );
};

export default Home;
