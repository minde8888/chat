import React from "react";
import Chat from "./chat/chat.jsx";
import "./main.scss";
import image from "../main/img/Stranden.jpg";
import woomen from "../main/img/woomen.jpg";
import { Route } from "react-router-dom";
import Settnigs from "./settings/settings";
import NavBar from "./nav/nav.jsx";
import UsersContainer from "./users/usersContainer";
import ProfileContainer from "./profile/profileContainer.jsx";

const Main = () => {
  return (
    <div className="main">
      <div className="colom1">
        <img className="backgound" src={image} width="100%" height="100%" />
      </div>
      <Route path="/chat" render={() => <Chat />} />
      <Route path="/profile" render={() => <ProfileContainer />} />
      <Route path="/innstillinger" render={() => <Settnigs />} />
      <Route path="/users" render={() => <UsersContainer />} />
      <div className="colom3">
        <div className="text"></div>
      </div>
      <div className="colom4">
        <img className="user" src={woomen} />
        <div>good morning!</div>
        <NavBar />
      </div>
    </div>
  );
};

export default Main;
