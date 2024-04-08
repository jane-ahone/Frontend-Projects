import React from "react";
import Avatar from "./Avatar";
import NavBar from "./Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerMain">
      <img
        style={{ height: "min-content" }}
        src="../../../src/assets/images/logo.svg"
      />
      <NavBar />
      <Avatar />
    </div>
  );
};

export default Header;
