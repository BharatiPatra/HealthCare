import React from "react";
import HospitalLogo from "../../assets/Images/HospitalLogo.png";
import { useNavigate, BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import "./navbar.css";
const Navbar = ({
  homereference,
  aboutreference,
  servicereference,
  feedbackreference,
  contactreference,
}) => {
  const navLinks = [
    { path: "/home", display: "Home" },
    { path: "/about", display: "About Us" },
    { path: "/services", display: "Services" },
    { path: "/feedback", display: "Feedback" },
    { path: "/contact", display: "Contact" },
  ];
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>;
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="navbar">
      <div className="nav-image-text">
        <div className="nav-image">
          <img src={HospitalLogo} alt="" />
        </div>
        <div className="nav-text">
          <h4>SLK Hospital</h4>
        </div>
      </div>
      <nav className="nav-items">
        {navLinks.map((link) => (
          <li key={link.display}>
            <a
              onClick={() => {
                if (link.display == "Home") {
                  homereference.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "start",
                  });
                } else if (link.display == "About Us") {
                  aboutreference.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "start",
                  });
                } else if (link.display == "Services") {
                  servicereference.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "start",
                  });
                } else if (link.display == "Contact") {
                  contactreference.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "start",
                  });
                } else if (link.display == "Feedback") {
                  feedbackreference.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "start",
                  });
                }
              }}
            >
              {link.display}
            </a>
          </li>
        ))}
      </nav>{" "}
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Navbar;
