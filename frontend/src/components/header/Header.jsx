import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import "./Header.scss";

const Header = () => {

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <AiOutlineLogin className="icon" />
          <span>Lisa</span>
        </div>

        <ul className="navbar-items">
          <li className="item">
            <FaUserCircle className="icon" />
            <p> Hi, Lisa </p>
          </li>

          <li className="item">
            <button className="btn">
              <NavLink to="/login" className="login"> Login </NavLink>
            </button>
          </li>

          <li className="item">
            <NavLink to="/profile" className="profile"> Profile </NavLink>
          </li>

          <li className="item">
            <button className="btn">Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
