import React from "react";
import { NavLink } from "react-router-dom";
import "./users.scss";

const Users = (props) => {

  const User = (props) => {
    let path = "/chat/" + props.id;

    return (
      <NavLink to={path}>
        <div className="friend">
          <img src={props.src} alt={props.alt} />
          <p>
            <strong>{props.name}</strong>
          </p>
          <div className={props.status}></div>
        </div>
      </NavLink>
    );
  };

  let user = props.users.map((el, k) => (
    <User key={k} name={el.name} src={el.src} alt={el.alt} id={el.id} status={el.status} />
  ));

  return <div id="friends">{user}</div>;
};

export default Users;
