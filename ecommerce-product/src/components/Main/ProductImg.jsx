import React, { useState } from "react";
import "./ProductImg.css";

const ProductImg = ({ mainImg, setMainImg }) => {
  const handleClickImgThumbnail = (imgUrl) => {
    setMainImg(imgUrl);
  };

  return (
    <div className="productimgMain">
      <img className="mainImage" src={mainImg} />
      <img
        className="thumbnailImage1"
        onClick={() =>
          handleClickImgThumbnail(
            "../../../src/assets/images/image-product-1.jpg"
          )
        }
        src="../../../src/assets/images/image-product-1-thumbnail.jpg"
      />
      <img
        className="thumbnailImage2"
        onClick={() =>
          handleClickImgThumbnail(
            "../../../src/assets/images/image-product-2.jpg"
          )
        }
        src="../../../src/assets/images/image-product-2-thumbnail.jpg"
      />
      <img
        onClick={() =>
          handleClickImgThumbnail(
            "../../../src/assets/images/image-product-3.jpg"
          )
        }
        className="thumbnailImage3"
        src="../../../src/assets/images/image-product-3-thumbnail.jpg"
      />
      <img
        onClick={() =>
          handleClickImgThumbnail(
            "../../../src/assets/images/image-product-4.jpg"
          )
        }
        className="thumbnailImage4"
        src="../../../src/assets/images/image-product-4-thumbnail.jpg"
      />
    </div>
  );
};

export default ProductImg;
