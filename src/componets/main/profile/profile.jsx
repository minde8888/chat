import React from "react";
import MyPostsContainer from "./myPostsContainer";
import ProfileInfo from "./profileInfo";


const Profile = (props) => {

  return (
    <div>
        
      <ProfileInfo props={props}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
