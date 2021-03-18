import React from "react";
import { connect } from "react-redux";
import Users from "./users";
import { followAc, unfollowAc, setUsersAc} from "../../redux/usersReducer";

let mapStateToProps = (state) => {

  return {
    users: state.usersPage.users,
  };
};

let mapDistpachToProps = (distpach) => {
    return{
        follow:(userId)=>{
            distpach(followAc(userId))
        },
        unfollow:(userId)=>{
            distpach(unfollowAc(userId))
        },
        setUsers:(users)=>{
            distpach(setUsersAc(users))
        }
    }
};
export default connect(mapStateToProps, mapDistpachToProps)(Users);
