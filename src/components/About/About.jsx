import React from "react";
import "./about.css";
import doc1 from "../../assets/Images/doc1.jpg";
import AboutContent from "./AboutContent";
const About = ({ aboutreference }) => {
  return (
    <div className="about" ref={aboutreference}>
      <div className="about-header">
        <h2>-About Us</h2>
      </div>
      <div className="about-container">
        <img src={doc1} alt="doctor image" />
        <AboutContent
          heading="Dr.Chandan Kumar Patra"
          specialization="Senior Doctor,SLK Hospital"
          docabout="We are medical professionals who diagnose and treat human diseases, as
        well as promote preventative care. They undergo many years of education
        and training to acquire the skills and knowledge necessary to care for
        their patients. There are many different specialties of doctors, each
        focusing on a specific area of the body or a particular type of medical
        condition."
          btn="Details"
        />
      </div>
    </div>
  );
};

export default About;
