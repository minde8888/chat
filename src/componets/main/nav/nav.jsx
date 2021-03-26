import React from "react";
import "./nav.scss";
import { NavLink } from "react-router-dom";
import LoginContainer from "./login/loginContainer";

const NavBar = () => {
  return (
    <div className="mainNav">
      <div>
        <a href="#">Kristina Kristina</a>
      </div>
      <LoginContainer />
      <div>
        <NavLink to="/innstillinger">Innstillinger</NavLink>
      </div>
      <div>
        <NavLink to="/chat">chat</NavLink>
      </div>
      <div>
        <NavLink to="/users">users</NavLink>
      </div>
      <div>
        <NavLink to="/profile">profile</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
