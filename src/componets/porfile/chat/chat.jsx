import React from "react";

import './chat.scss'
import Chats from "./svg/chats.jsx";
import User from "./svg/user.jsx";
import Past from "./svg/past.jsx";

const Chat = () => {
  return (
<div className="colom2">
  <div id="chatbox">
    <div id="friendslist">
      <div id="topmenu">
        <span className="friends"><User/></span>
        <span className="chats"><Chats /> </span>
        <span className="history"><Past /></span>
      </div>

      <div id="friends">
        <div className="friend">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg" alt="a"  />
          <p>
            <strong>Miro Badev</strong>
            
          </p>
          <div className="status available"></div>
        </div>

        <div className="friend">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg" alt="a" />
          <p>
            <strong>Martin Joseph</strong>
            
          </p>
          <div className="status away"></div>
        </div>

        <div className="friend">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3_copy.jpg" alt="a" />
          <p>
            <strong>Tomas Kennedy</strong>
     
          </p>
          <div className="status inactive"></div>
        </div>

        <div className="friend">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4_copy.jpg" alt="a" />
          <p>
            <strong>Enrique Sutton</strong>
        
          </p>
          <div className="status inactive"></div>
        </div>

        <div className="friend">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/5_copy.jpg" alt="a" />
          <p>
            <strong> Darnell Strickland</strong>
         
          </p>
          <div className="status inactive"></div>
        </div>

        <div id="search">
          <input type="text" id="searchfield"  />
        </div>
      </div>
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

        <div className="message">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg" alt="a" />
          <div className="bubble">
            Really cool stuff!
            <div className="corner"></div>
            <span>3 min</span>
          </div>
        </div>

        <div className="message right">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg" alt="a" />
          <div className="bubble">
            Can you share a link for the tutorial?
            <div className="corner"></div>
            <span>1 min</span>
          </div>
        </div>

        <div className="message">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg" alt="a" />
          <div className="bubble">
            Yeah, hold on
            <div className="corner"></div>
            <span>Now</span>
          </div>
        </div>

        <div className="message right">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg" alt="a" />
          <div className="bubble">
            Can you share a link for the tutorial?
            <div className="corner"></div>
            <span>1 min</span>
          </div>
        </div>

        <div className="message">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg" alt="a" />
          <div className="bubble">
            Yeah, hold on
            <div className="corner"></div>
            <span>Now</span>
          </div>
        </div>
      </div>

      <div id="sendmessage">
        <input type="text"/>
        <button id="send"></button>
      </div>
    </div>
  </div> 
</div>
  );
};

export default Chat;
