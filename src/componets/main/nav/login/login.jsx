import React from "react";
import { NavLink } from "react-router-dom";

const Login = (props) => {
  return (
    <div className="loginBlock">
      {props.isAuth ? props.login : <NavLink to={"/login"}>login</NavLink>}
    </div>
  );
};
export default Login;
