import React, { useContext, useState } from "react";
import "./ProductDesc.css";
import { AppContext } from "../context";
import { CartItem } from "../../App";

const ProductDesc = ({ mainImg }) => {
  const [count, setCount] = useState(1);

  const handleClickMinusBtn = () => {
    count > 1 ? setCount(count - 1) : null;
  };

  const handleClickPlusBtn = () => {
    setCount(count + 1);
  };

  const [useCartContent, useCartContentState] = useContext(AppContext);

  const handleClickCartBtn = () => {
    let cartItem = new CartItem(
      mainImg,
      "Fall Limited Edition Sneakers",
      "125.00",
      count
    );
    useCartContent.set([...useCartContent.get(), cartItem]);
    useCartContentState.set(true);
  };

  return (
    <div className="productdescMain">
      <p className="company-name">SNEAKER COMPANY</p>
      <p className="product-name">
        Fall Limited Edition
        <br /> Sneakers
      </p>
      <p className="product-desc">
        These low-profile sneakers are your perfect casual wear <br />
        companion. Featuring a durable rubber outer sole, they’ll <br />{" "}
        withstand everything the weather can offer.
      </p>
      <div className="price-details">
        <p style={{ fontWeight: "700", fontSize: "1.2rem" }}>$125.00</p>
        <p
          style={{
            fontWeight: "700",
            color: "hsl(26, 100%, 55%)",
            backgroundColor: "hsl(25, 100%, 94%)",
          }}
        >
          {" "}
          50%
        </p>
        <p
          style={{
            fontWeight: "700",
            color: "gray",
            textDecoration: "line-through gray",
          }}
        >
          {" "}
          $250.00
        </p>
      </div>
      <div className="prod-total-details">
        <div>
          <button className="minus-btn" onClick={handleClickMinusBtn}>
            <img
              src="../../../src/assets/images/icon-minus.svg"
              alt="Minus Icon"
            />
          </button>
          <button className="prod-count-btn">{count} </button>
          <button className="plus-btn">
            <img
              onClick={handleClickPlusBtn}
              src="../../../src/assets/images/icon-plus.svg"
              alt="Plus-Btn Icon"
            />
          </button>
          <button className="add2cart-btn" onClick={handleClickCartBtn}>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#FFFFFF"
                fillRule="nonzero"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
