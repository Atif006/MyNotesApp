import React from "react";
import logo from "./images/mylogo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" style={{ width: 100, height: 100 }} />
      <h1> My Notes </h1>
    </div>
  );
};

export default Header;
