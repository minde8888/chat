import React from "react";
import Post from "../posts/post.jsx";
import Users from "../users/users.jsx";
import Chats from "./svg/chats.jsx";
import User from "./svg/user.jsx";
import Past from "./svg/past.jsx";
import "./chat.scss";

const Chat = (props) => {

  return (
    <div className="colom2">
      <div id="chatbox">
        <div id="friendslist">
          <div id="topmenu">
            <span className="friends">
              <User />
            </span>
            <span className="chat">
              <Chats />
            </span>
            <span className="history">
              <Past />
            </span>
          </div>
          <Users users={props.users} />
        </div>

        <div id="chatview" className="p1">
          <div id="profile">
            <div id="close">
              <div className="cy"></div>
              <div className="cx"></div>
            </div>
            <p>Miro Badev</p>
          </div>
          <div id="chat-messages">
            <label>Thursday 02</label>
            <Post posts={props.posts} newMessage={props.newMessage} dispatch={props.dispatch}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
