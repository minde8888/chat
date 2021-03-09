import React from "react";
import Chat from "./chat/chat.jsx";
import "./profile.scss";
import image from "../porfile/img/Stranden.jpg";
import woomen from "../porfile/img/woomen.jpg";
import { BrowserRouter, Route } from "react-router-dom";
import Settnigs from "./settings/settings";
import NavBar from "./nav/nav.jsx";

const Profile = (props) => {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="colom1">
          <img className="backgound" src={image} width="100%" height="100%" />
        </div>
        <Route
          path="/chat"
          render={() => <Chat posts={props.posts} users={props.users} />}
        />
        <Route path="/innstillinger" render={() => <Settnigs />} />
        <div className="colom3">
          <div className="text"></div>
        </div>
        <div className="colom4">
          <img className="user" src={woomen} />
          <div>good morning!</div>
          <NavBar />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Profile;
