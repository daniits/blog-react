import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header__section">
      <div className="header__titles">
        <span className="header__top__sm">React & Node js</span>
        <span className="header__top__lg">Blog</span>
      </div>
      <img
        className="header__image"
        src={'https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg'}
        alt="This is Header Image"
      />
    </div>
  );
};

export default Header;
