import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="Checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://influencermarketinghub.com/wp-content/uploads/2021/11/Amazon-Display-Ad-Amazon-1024x140.jpg"
          alt=""
        ></img>
        <div className="checkout_title">
          <h2>Shopping Basket</h2>
        </div>
      </div>
      <div className="checkout_right">
        <h2>Sub Total</h2>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
