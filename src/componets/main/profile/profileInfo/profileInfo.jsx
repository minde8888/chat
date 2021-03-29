import React from "react";
import Preloader from "../../../common/preloader/preloader";
import ProfileStatu from "./profileStatus";

const ProfileInfo = (props) => {
  if (props.profile === null || props.profile === undefined) {
    return <Preloader />;
  }
  return (
    <div>
      <img src={props.profile.photos.large} />
      <ProfileStatu status={props.status} updateStatus={props.updateStatus} />
    </div>
  );
};

export default ProfileInfo;
