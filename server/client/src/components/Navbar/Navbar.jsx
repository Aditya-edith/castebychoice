import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import CottageSharpIcon from "@mui/icons-material/CottageSharp";
import CallSharpIcon from "@mui/icons-material/CallSharp";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("home");

  return (
    <nav className="navbar">
      <a href="/" className="brand">
        Caste By Choice
      </a>
      <ul className="navbar-middle">
        <li>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setActiveMenu("home")}
            className={activeMenu === "home" ? "active" : ""}
            aria-current={activeMenu === "home" ? "page" : undefined}
          >
            <CottageSharpIcon className="icon" />
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="footer"
            smooth={true}
            duration={500}
            onClick={() => setActiveMenu("contact-us")}
            className={activeMenu === "contact-us" ? "active" : ""}
            aria-current={activeMenu === "contact-us" ? "page" : undefined}
          >
            <CallSharpIcon className="icon" />
            Contact Us
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
