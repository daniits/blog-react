import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faInstagram,faLinkedin,faTwitter } from "@fortawesome/free-brands-svg-icons"
import "./topbar.css";

function TopBar() {
  return (
    <div className="top">
      <div className="topright">
      <FontAwesomeIcon className="top__right__socialicon" icon={faFacebook} />
      <FontAwesomeIcon className="top__right__socialicon" icon={faTwitter} />
      <FontAwesomeIcon className="top__right__socialicon" icon={faInstagram} />
      <FontAwesomeIcon className="top__right__socialicon" icon={faLinkedin} />
      </div>
      <div className="topcenter">
        <ul className="top__list">
            <li className="top__list__item">HOME</li>
            <li className="top__list__item">ABOUT US</li>
            <li className="top__list__item">CONTACT US</li>
            <li className="top__list__item">WRITE</li>
            <li className="top__list__item">TERMS</li>
        </ul>
      </div>
      <div className="topleft">
        <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" className="top__left__image" alt="This is User Image" />
      <FontAwesomeIcon className="top__left__searchicon" icon={faMagnifyingGlass} />
      </div>
    </div>
  );
}

export default TopBar;
