import { useState, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";
import Feedback from "../components/Feedback/Feedback";
function FirstPage() {
  const aboutref = useRef();
  const homeref = useRef();
  const serviceref = useRef();
  const contactref = useRef();
  const feedbackref = useRef();
  return (
    <>
      {" "}
      <Navbar
        aboutreference={aboutref}
        homereference={homeref}
        contactreference={contactref}
        feedbackreference={feedbackref}
        servicereference={serviceref}
      />
      <div>
        <Home homereference={homeref} />
        <About aboutreference={aboutref} />
        <Services servicereference={serviceref} />
        <Feedback feedbackreference={feedbackref} />
        <Contact contactreference={contactref} />
      </div>
    </>
  );
}

export default FirstPage;
