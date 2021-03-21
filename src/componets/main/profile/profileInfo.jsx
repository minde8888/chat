import Preloader from "../../common/preloader/preloader";

const ProfileInfo = (props) => {
    console.log(props);
//   let large = props.profile.map((el, k) => (el.large));

//   console.log(large);
  if (!props) {
    return <Preloader />;
  }
  return <div>{/* <img src={props.photos.large}/> */}
  labas</div>;
};

export default ProfileInfo;
