import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Post from "../posts/post.jsx";
import Users from "../users/users.jsx";

import Chats from "./svg/chats.jsx";

import "./chat.scss";
import User from "./svg/user.jsx";
import Past from "./svg/past.jsx";

const Chat = (props) => {
  return (

      <div className="colom2">
        <div id="chatbox">
          <div id="friendslist">
            <div id="topmenu">
              <span className="friends">
                <User />
              </span>
              <span>
                <Chats />
              </span>
              <span className="history">
                <Past />
              </span>
            </div>
            <Users />
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
              <Post />
            </div>

            <div id="sendmessage">
              <input type="text" />
              <button id="send"></button>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Chat;
