import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";
import { Instagram, Facebook, Twitter } from "@material-ui/icons";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

const Icons = () => (
  <div className="icons">
    <Instagram className="icon" />
    <Facebook className="icon" />
    <Twitter className="icon" />
  </div>
);

// footer base 
const BaseStrip = () => (
  <div className="baseStrip">
    <div className="copyright">
      © 2021 - TechnoJam
    </div>
    <div className="privacyPolicy">
      <a className="" href="https://google.com">
        Privacy policy
      </a>
    </div>
  </div>
);

// footer cointain con
const Footer = () => (
  <>
    <footer className="footer">
      {/* <footerAction label="Nearby" icon={<Icons />} /> */}
      <Icons />
    <BaseStrip />
    </footer>
  </>
);

export default Footer;
