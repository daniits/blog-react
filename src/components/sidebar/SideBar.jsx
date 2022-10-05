import React from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SideBar = () => {
  return (
    <div className="sidebar__section">
      <div className="sidebar__item">
        <span className="sidebar__item__title">About Me</span>
        <img
          src={
            "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
          }
          alt="Its Test Image"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est itaque
          accusamus modi ex, necessitatibus voluptatum delectus.
        </p>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__item__title">Category</span>
        <ul className="sidebar__list">
          <li className="sidebar__list__item">Life</li>
          <li className="sidebar__list__item">Music</li>
          <li className="sidebar__list__item">Style</li>
          <li className="sidebar__list__item">Sport</li>
          <li className="sidebar__list__item">Tech</li>
          <li className="sidebar__list__item">Cinema</li>
        </ul>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__item__title">Follow Us</span>
        <div className="sidebar__social">
          <FontAwesomeIcon className="sidebar__socialicon" icon={faFacebook} />
          <FontAwesomeIcon className="sidebar__socialicon" icon={faTwitter} />
          <FontAwesomeIcon className="sidebar__socialicon" icon={faInstagram} />
          <FontAwesomeIcon className="sidebar__socialicon" icon={faLinkedin} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
