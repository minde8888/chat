import Preloader from "../../common/preloader/preloader";

const ProfileInfo = (props) => {

  if (props.profile === null || props.profile === undefined) {
    return <Preloader />;
  }
  return (
    <div>
      { <img src={props.profile.photos.large}/> }
    </div>
  );
};

export default ProfileInfo;
