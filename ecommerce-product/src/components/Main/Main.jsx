import React, { useState } from "react";
import "./Main.css";
import ProductImg from "./ProductImg";
import ProductDesc from "./ProductDesc";

const Main = () => {
  const [mainImg, setMainImg] = useState(
    "../../../src/assets/images/image-product-1.jpg"
  );

  return (
    <div className="divMain">
      <ProductImg mainImg={mainImg} setMainImg={setMainImg} />
      <ProductDesc mainImg={mainImg} />
    </div>
  );
};

export default Main;
