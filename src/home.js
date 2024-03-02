import React  from "react";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { FiTruck } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import Homeproduct from "./homeproduct";

import "./home.css";
const Home = () => {
  return (
    <>
      <div className="top_banner">
        <div className="container">
          <div className="detail">
            <h2>The Best Note Book Collection 2023</h2>
            <Link to="/product" className="link">
              Shop Now
              <RiArrowRightSLine />
            </Link>
          </div>
          <div className="img_box">
            <img
              src="./img/Capture.png"
              alt="slider"
              width={270}
              height={330}
            ></img>
          </div>
        </div>
      </div>

      <div className="product_type">
        <div className="container">
          <div className="box">
            <div className="img_box">
              <img
                src="./img/logo512.png"
                alt="mobile"
                width={270}
                height={330}
              ></img>
            </div>
            <div className="detail">
              <p>23 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img
                src="./img/logo512.png"
                alt="mobile"
                width={270}
                height={330}
              ></img>
            </div>
            <div className="detail">
              <p>23 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img
                src="./img/logo512.png"
                alt="mobile"
                width={270}
                height={330}
              ></img>
            </div>
            <div className="detail">
              <p>23 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img
                src="./img/logo512.png"
                alt="mobile"
                width={270}
                height={330}
              ></img>
            </div>
            <div className="detail">
              <p>23 products</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="box">
            <div className="icon">
              <FiTruck />
            </div>
            <div className="detail">
              <h3>Free Shipping</h3>
              <p>Order above $1000</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BsCurrencyDollar />
            </div>
            <div className="detail">
              <h3>Return & Refund</h3>
              <p>Money Back Guarranty</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <CiPercent />
            </div>
            <div className="detail">
              <h3>Member Discount</h3>
              <p>On every Order</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BiSolidPhoneCall />
            </div>
            <div className="detail">
              <h3>Customer Support</h3>
              <p>Every Time Call Support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <h2>Top Products</h2>
        <div className="container">
          {
          Homeproduct.map((curElm) => 
          {
            return (
              <div className="box" key={curElm.id}>
                <div className="img_box">
                  <img src={curElm.Img} alt={curElm.Title}></img>
                  <div className="icon">
                    <li><AiOutlineShoppingCart /></li>
                    <li><BsEye /></li>
                    <li><AiOutlineHeart/></li>
                  </div>
                </div>
                <div className="detail">
                  <p>{curElm.Cat}</p>
                  <h3>{curElm.Title}</h3>
                  <h4>{curElm.Price}</h4>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
