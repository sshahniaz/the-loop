import React from "react";
import "./SocialMediaCard.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";

const SocialMediaCard = () => {
  return (
    <>
      <div className="socialMediaCardFlex">
        <img src="./assets/logowhite.svg" alt="Logo" />
        <p>Lets get social</p>

        <div className="icons">
          <ul>
            <li className="listIcon">
              <a href="https://www.instagram.com/">
                <InstagramIcon />
              </a>
            </li>
            <li className="listIcon">
              <a href="https://twitter.com/?lang=en">
                <XIcon />
              </a>
            </li>
            <li className="listIcon">
              <a href="https://www.facebook.com/">
                <FacebookIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SocialMediaCard;
