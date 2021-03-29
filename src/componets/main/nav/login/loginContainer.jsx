import Logged from "./login";
import React from "react";
import { connect } from "react-redux";
import { setUserData } from "../../../redux/authReducer";
import {getLogin} from "../../../redux/authReducer";

class LoginContainer extends React.Component {
  componentDidMount() {
    this.props.getLogin()
  }
  render() {
    return <Logged {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, { setUserData, getLogin })(LoginContainer);


