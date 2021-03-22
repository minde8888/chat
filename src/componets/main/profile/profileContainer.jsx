import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./profile";
import { setUserProfile } from "../../redux/profileReduser";
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.userId;
    if (!id) {
      id = 2;
    }
    console.log(id);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }
  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let profileContainerWithRaout = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  profileContainerWithRaout
);
