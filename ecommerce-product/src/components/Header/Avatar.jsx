import React, { useState } from "react";
import "./Avatar.css";
import Cart from "./Cart";

const style = {
  maxWidth: "3rem",
  aspectRatio: "1/1",
};

const Avatar = () => {
  return (
    <>
      <img
        className="avatar-icon"
        src="../../../src/assets/images/image-avatar.png"
        style={style}
      />
    </>
  );
};

export default Avatar;
