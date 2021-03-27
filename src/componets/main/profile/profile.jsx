import React from "react";
import MyPostsContainer from "./myProfileContainer";
import ProfileInfo from "./profileInfo/profileInfo";


const Profile = (props) => {
  return (
    <div>        
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
