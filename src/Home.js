import React from "react";
import "./Home.css";
import bck_img from "./images/61aURrton0L._SX3000_.jpg";
import Product from "./Product";
function Home() {
  return (
    <div className="Home">
      <div className="home_containner">
        <img className="home_image" src={bck_img} alt="" />
        <div className="home_row">
          <Product
            id="1"
            title="abc"
            price={10}
            image="https://demo8.wpengineers.com/wp-content/uploads/2023/01/book-covers-big-2019101610-1.jpg-1300-1.jpg"
            rating={4}
          />
          <Product
            id="2"
            title="abc"
            price={10}
            image="https://demo8.wpengineers.com/wp-content/uploads/2023/01/book-covers-big-2019101610-1.jpg-1300-1.jpg"
            rating={4}
          />{" "}
        </div>
        <div className="home_row">
          <Product
            id="3"
            title="abc"
            price={10}
            image="https://demo8.wpengineers.com/wp-content/uploads/2023/01/book-covers-big-2019101610-1.jpg-1300-1.jpg"
            rating={4}
          />
          <Product
            id="4"
            title="abc"
            price={10}
            image="https://demo8.wpengineers.com/wp-content/uploads/2023/01/book-covers-big-2019101610-1.jpg-1300-1.jpg"
            rating={4}
          />
          <Product
            id="5"
            title="abc"
            price={10}
            image="https://demo8.wpengineers.com/wp-content/uploads/2023/01/book-covers-big-2019101610-1.jpg-1300-1.jpg"
            rating={4}
          />{" "}
        </div>
        <div className="home_row">
          <Product
            id="6"
            title="abc"
            price={10}
            image="https://demo8.wpengineers.com/wp-content/uploads/2023/01/book-covers-big-2019101610-1.jpg-1300-1.jpg"
            rating={4}
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default Home;
