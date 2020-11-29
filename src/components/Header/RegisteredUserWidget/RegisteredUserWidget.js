import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../../redux/mapStoreToProps";
import { withRouter } from "react-router";

class RegisteredUserWidget extends Component {

    render () {
        return (
          <div className="logoutContainer">
            <h1 className="headerUsername">{this.props.store.user.username}</h1>
            <button
              className="headerWidgetButton"
              onClick={() => this.props.dispatch({type: 'LOGOUT'})}
            >
              Logout
            </button>
          </div>
        );
    }
}

export default withRouter(connect(mapStoreToProps)(RegisteredUserWidget));