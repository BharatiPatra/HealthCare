import React from "react";
import "./contact.css";
const Contact = ({ contactreference }) => {
  return (
    <div className="contact" ref={contactreference}>
      <div className="contact-header">
        <h2>-Contact Us</h2>
      </div>
      <form id="contact-form">
        <div className="contact-name">
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="form-control"
          />
        </div>
        <div className="contact-email">
          <input
            type="text"
            id="email"
            name="email"
            required
            placeholder="Your email"
            className="form-control"
          />
        </div>

        <div className="contact-message">
          <textarea
            rows="4"
            placeholder="Message"
            className="form-control"
          ></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
