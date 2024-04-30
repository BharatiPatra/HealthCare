import React from "react";
import "./feedback.css";
import Testimonials from "./Testimonials";
const Feedback = ({ feedbackreference }) => {
  return (
    <div className="feedback" ref={feedbackreference}>
      <h2>-Testimonials</h2>
      <Testimonials />
    </div>
  );
};

export default Feedback;
