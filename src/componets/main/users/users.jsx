import React from "react";
import { NavLink } from "react-router-dom";
import { sendMessage, uppdateMessage } from "../../redux/chatUsersReducer";
import "./users.scss";

const Users = (props) => {

  let sendNewMessage = () => {
    props.dispatch(sendMessage());
  };
  let onMessagechange = (e) => {
    let text = e.target.value;
    props.dispatch(uppdateMessage(text));
  };
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
    <User
      key={k}
      name={el.name}
      src={el.src}
      alt={el.alt}
      id={el.id}
      status={el.status}
    />
  ));

  return (
    <div id="friends">
      {user}
      <div>
        <input
          onChange={onMessagechange}
          value={props.newMessageText}          
          placeholder="Enter you message"
        ></input>
      </div>
      <div>
        <button onClick={sendNewMessage}>send</button>
      </div>
    </div>
  );
}; 

export default Users;
