import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router";

// Custom components
import SelfProfile from '../SelfProfile/SelfProfile';
import OtherProfile from '../OtherProfile/OtherProfile';

class ProfileDisplay extends Component {

    // constructor(props) {
    //     super(props);
    //     this.props.dispatch({
    //       type: "FETCH_PROFILE",
    //       payload: this.props.match.params.name,
    //     });
    // }

    componentDidMount () {
        this.getProfile();
    }

    getProfile = () => {
        this.props.dispatch({
          type: "FETCH_PROFILE",
          payload: this.props.match.params.name,
        });
    }

    render () {
        return (
          <>
            profile display
            {this.props.store.profile.username ===
            this.props.store.user.username ? (
              <SelfProfile />
            ) : (
              <OtherProfile />
            )}
          </>
        );
    }
}

export default withRouter(connect(mapStoreToProps)(ProfileDisplay));