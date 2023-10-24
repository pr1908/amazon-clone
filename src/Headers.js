import React from "react";
import "./Headers.css";
import logo from "./images/Amazon-Emblem.jpg";
import { BsSearch } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Headers() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={logo} />
      </Link>

      <div className="header_search">
        <input className="header_serach_input" type="text" />
        <BsSearch className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to="/login">
          <div className="header_option">
            <span className="header_option1">Hello Guest</span>
            <span className="header_option2">Sign In </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_option1">Return</span>
          <span className="header_option2">& Orders </span>
        </div>
        <div className="header_option">
          <span className="header_option1">Your</span>
          <span className="header_option2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <SlBasket />
            <span className="header_optionLine2 header_basketcount">
              {basket?.length}
            </span>
          </div>
        </Link>
        <div />
      </div>
    </div>
  );
}

export default Headers;
