// import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
import "./Footer.scss";
// import EmailSignup from "./emailsignup/EmailSignup";
const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="categories">
          <h4>Categories</h4>
          <ul>
            <li>
              <Link href="#">Furniture</Link>
            </li>
            <li>
              <Link href="#">Lighting</Link>
            </li>
            <li>
              <Link href="#">Home Decor</Link>
            </li>
            <li>
              <Link href="#">Art</Link>
            </li>
            <li>
              <Link href="#">Kitchenware</Link>
            </li>
            <li>
              <Link href="#">Sale</Link>
            </li>
          </ul>
        </div>
        <div className="help">
          <h4>Help</h4>
          <ul>
            <li>
              <Link href="/faq">How To Sell</Link>
            </li>
            <li>
              <Link href="/faq">Contact Us</Link>
            </li>
            <li>
              <Link href="/faq">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/faq">FAQ's</Link>
            </li>
          </ul>
          <div className="icons">
            <ul>
              <li className="listIcon">
                <a href="#">
                  <InstagramIcon />
                </a>
              </li>
              <li className="listIcon">
                <a href="#">
                  <XIcon />
                </a>
              </li>
              <li className="listIcon">
                <a href="#">
                  <FacebookIcon />
                </a>
              </li>
            </ul>
          </div>
          <p id="est">The LOOP Established 2024.</p>
          <div className="footerLogo">
            <Link href="#">
              <img src="./assets/logowhite.svg" alt="Logo" />
            </Link>
          </div>
        </div>
        <div className="signup">
          <h4>Signup To Our Newsletter</h4>
          <p className="signupPara">
            Get a weekly dose of inspiration & tips on living sustainably
          </p>
          {/* <EmailSignup /> */}
          {/* form component here */}
        </div>
      </div>
    </>
  );
};

export default Footer;
