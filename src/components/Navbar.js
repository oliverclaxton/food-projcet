import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="container">
      <NavLink className="nav__link" to="/breakfast">
        Breakfast
      </NavLink>
      <NavLink className="nav__link" to="/breakfast" to="/lunch">
        Lunch
      </NavLink>
      <NavLink className="nav__link" to="/breakfast" exact to="/">
        Home
      </NavLink>
      <NavLink className="nav__link" to="/breakfast" to="/dinner">
        Dinner
      </NavLink>
      <NavLink to="/desert">Desert</NavLink>
    </div>
  );
};

export default Navbar;
