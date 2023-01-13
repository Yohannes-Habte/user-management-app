import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";

const Menu = () => {
  return (
    <nav className="profile-navbar">
      <ul className="menu-items">
        <li className="item-list">
          <NavLink to="/profile" className={"link"}>
            Profile
          </NavLink>
        </li>

        <li className="item-list">
          <NavLink to="/changePassword" className={"link"}>
            Change Password
          </NavLink>
        </li>

        <li className="item-list">
          <NavLink to="/users" className={"link"}>
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
