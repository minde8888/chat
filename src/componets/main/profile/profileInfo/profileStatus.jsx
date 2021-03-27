import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    title:"write your title"
  };

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
    // this.forceUpdate();
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    // this.forceUpdate();
  };

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span
              onDoubleClick= {
                this.activateEditMode
              }
            >
              {this.props.status}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
