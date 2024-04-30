import React from "react";
import AboutContent from "../About/AboutContent";
import doc2 from "../../assets/Images/doc2.jpg";
import "../About/about.css";
import "./services.css";
const Services = ({ servicereference }) => {
  return (
    <div className="services" ref={servicereference}>
      <div className="service-header">
        <h2>-Our Principles</h2>
      </div>
      <div className="about-container">
        <AboutContent
          heading="what we do"
          docabout="We are medical professionals who diagnose and treat human diseases, as
        well as promote preventative care. They undergo many years of education
        and training to acquire the skills and knowledge necessary to care for
        their patients. There are many different specialties of doctors, each
        focusing on a specific area of the body or a particular type of medical
        condition."
          btn="Details"
        />
        <img src={doc2} alt="doctor-image" />
      </div>
    </div>
  );
};

export default Services;
