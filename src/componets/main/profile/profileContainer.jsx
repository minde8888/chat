import React from "react";
import { connect } from "react-redux";
import Profile from "./profile";
import { getProfile,  getStatus, updateStatus } from "../../redux/profileReduser";
import { withRouter } from "react-router";
import { AuthRedirect } from "../../../hoc/AuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.userId;
    if (!id) {
      id = 15978;
    }

    this.props.getProfile(id);
    this.props.getStatus(id);

  }
  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status:state.profilePage.status
});

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus}),
  AuthRedirect,
  withRouter
)(ProfileContainer);
