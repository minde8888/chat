import React from "react";
import { connect } from "react-redux";
import Profile from "./profile";
import {getProfile } from "../../redux/profileReduser";
import { withRouter } from "react-router";


class ProfileContainer extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.userId;
    if (!id) {
      id = 2;
    }
 
    this.props.getProfile(id);
   
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

export default connect(mapStateToProps, { getProfile })(profileContainerWithRaout);
