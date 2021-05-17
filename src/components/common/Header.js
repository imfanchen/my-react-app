import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav nav-tabs"> 
      {/* <a href="/">Home</a> | <a href="/courses">Courses</a> | <a href="/about">About</a> */}
      {/* replace by NavLink below: */}
      <NavLink to="/" exact className="nav-link" activeClassName="nav-link active">
        Home
      </NavLink>
      <NavLink to="/courses1" className="nav-link" activeClassName="nav-link active">
        Courses1
      </NavLink>
      <NavLink to="/courses2" className="nav-link" activeClassName="nav-link active">
        Courses2
      </NavLink>
      <NavLink to="/about" className="nav-link" activeClassName="nav-link active">
        About
      </NavLink>
    </nav>
  );
};

export default Header;
