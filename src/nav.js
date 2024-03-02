import React from "react";
import { FaTruckMoving } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { BsBagCheck } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./nav.css";

const Nav = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <>
      <div className="free">
        <div className="icon">
          <FaTruckMoving />
        </div>
        <p>Free Shipping when shopping up to $1000</p>
      </div>
      <div className="main_header">
        <div className="container">
          <div className="logo">
            <img src="./img/logo102.png" alt="logo"></img>
          </div>
          <div className="search_box">
            <input
              type="text"
              value=""
              placeholder="Search your product..."
              autoComplete="off"
            ></input>
            <button>Search</button>
          </div>
          <div className="icon">
            {
                isAuthenticated? /*&&*/ (
                    <div className="account">
                    <div className="user_icon">
                      <CiUser />
                    </div>
                    <p>Hello, {user.name}</p>
                  </div>
                ) : (<p>Welcome to the best online store</p>)
            }

            <div className="second_icon">
              <Link to="/" className="link">
                <CiHeart />
              </Link>
              <Link to="/cart" className="link">
                <BsBagCheck />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="nav">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product" className="link">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="auth">
            {isAuthenticated ? (
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                <CiLogout />
              </button>
            ) : (
              <button onClick={() => loginWithRedirect()}>
                <CiLogin />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
