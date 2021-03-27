import React from "react";
import "./users.scss";
import UsersPresent from "./usersPresent";

class AllUsers extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanget = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <div>
        <UsersPresent
          totoalUsers={this.props.totoalUsers}
          onPageChanget={this.onPageChanget}
          isFetching={this.props.isFetching}
          currentPage={this.props.currentPage}
          users={this.props.users}
          followingInProgress={this.props.followingInProgress}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          pageSize={this.props.pageSize}
        />
      </div>
    );
  }
}


export default AllUsers;
