import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";
import {
  Instagram,
  Facebook,
  Twitter,
  GitHub,
  LinkedIn,
} from "@material-ui/icons";

// social media icons
const Icons = () => (
  <div className="icons">
    <a href="https://github.com/technojam" className="icon">
      <GitHub />
    </a>
    <a href="https://www.linkedin.com/company/technojam/" className="icon">
      <LinkedIn />
    </a>
    <a href="https://www.instagram.com/teamtechnojam/" className="icon">
      <Instagram />
    </a>
    <a href="https://twitter.com/technojam_gu" className="icon">
      <Twitter />
    </a>
    <a href="https://www.facebook.com/teamtechnojam" className="icon">
      <Facebook />
    </a>
  </div>
);

// footer base
const BaseStrip = () => (
  <div className="baseStrip">
    <div className="copyright">© 2021 - TechnoJam</div>
    <div className="privacyPolicy">
      <Link to="/privacyPolicy">Privacy policy</Link>
    </div>
  </div>
);

// footer cointain con
const Footer = () => (
  <>
    <footer className="footer">
      <div className="upperStrip">
        <div className="technoLogo">
          <div className="imgCointainer">
            <img className="logo" src="/TechnoJam.png" alt="techojam Logo"/>
          </div>
          <p>TECHNOJAM</p>
        </div>
        <Icons />
      </div>
      <BaseStrip />
    </footer>
  </>
);

export default Footer;
