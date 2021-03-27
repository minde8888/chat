import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

export const AuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={"/Login"} />;
            return <Component {...this.props} />;
        }
    }
    let mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth
        };
    };

    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}