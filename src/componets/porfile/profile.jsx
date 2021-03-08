import React from "react";
import Chat from "./chat/chat.jsx";
import "./profile.scss";
import image from "../porfile/img/Stranden.jpg";
import woomen from "../porfile/img/woomen.jpg";

const Profile = () => {
  return (
    <div className="main">
      <div className="colom1">
        <img className="backgound" src={image} width="100%" height="100%" />
      </div>
      <Chat />

      <div className="colom3">
        <div className="text"></div>
      </div>
      <div className="colom4">
        <img className="user" src={woomen} />
        <div>good morning!</div>
        <div>
          <a href="#">Kristina Kristina</a>
        </div>
        <div>
          <a href="#">song</a>
        </div>
        <div>
          <a href="#">albums</a>
        </div>
        <div>
          <a href="#">artist</a>
        </div>
        <div>
          <a href="#">chat</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
