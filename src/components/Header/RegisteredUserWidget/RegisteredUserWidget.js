import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../../redux/mapStoreToProps";
import { withRouter } from "react-router";

class RegisteredUserWidget extends Component {

    handleProfileClick = () => {
      this.props.history.push(`/profile/${this.props.store.user.username}`);
      this.props.forceRender();
    }

    render () {
        return (
          <div className="logoutContainer">
            <h2 className="headerUsername">{this.props.store.user.username}</h2>
            <button
              className="headerWidgetButton"
              onClick={this.handleProfileClick}>
              Profile
            </button>
            <button
              className="headerWidgetButton"
              onClick={() => this.props.dispatch({type: 'LOGOUT'})}>
              Logout
            </button>
          </div>
        );
    }
}

export default withRouter(connect(mapStoreToProps)(RegisteredUserWidget));