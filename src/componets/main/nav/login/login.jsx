import React from "react";
import { NavLink } from "react-router-dom";

const Logged = (props) => {
  return (
    <div className="loginBlock">
      {props.isAuth ? props.login : <NavLink to={"/logged"}>login</NavLink>}
    </div>
  );
};
export default Logged;
