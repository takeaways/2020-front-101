import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <NavLink exact to="/" className="item" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/about/ss" className="item" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/posts" className="item" activeClassName="active">
        Posts
      </NavLink>
      <NavLink to="/search" className="item" activeClassName="active">
        Search
      </NavLink>
      <NavLink to="/login" className="item" activeClassName="active">
        Login
      </NavLink>
      <NavLink to="/me" className="item" activeClassName="active">
        Me
      </NavLink>
    </div>
  );
};

export default Header;
