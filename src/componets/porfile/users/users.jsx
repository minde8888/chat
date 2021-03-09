import React from "react";
import { NavLink } from "react-router-dom";
import "./users.scss";

const Users = () => {
  let obj = [
    {
      name: "Miro Badev",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg",
      alt: "miro",
      id: "1",
      status: "status"
    },
    {
      name: "Martin Joseph",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg",
      alt: "martin",
      id: "2",
      status:"away"
    },
    {
      name: "Tomas Kennedy",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3_copy.jpg",
      alt: "tomas",
      id: "3",
      status:"away"
    },
    {
      name: "Enrique Sutton",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4_copy.jpg",
      alt: "enrique",
      id: "4",
      status:"inactive"
    },
    {
      name: "Darnell Strickland",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/5_copy.jpg",
      alt: "darnell",
      id: "5",
      status:"inactive"
    },
  ];

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

  let user = obj.map((el, k) => (
    <User key={k} name={el.name} src={el.src} alt={el.alt} id={el.id} status={el.status} />
  ));

  return <div id="friends">{user}</div>;
};

export default Users;
