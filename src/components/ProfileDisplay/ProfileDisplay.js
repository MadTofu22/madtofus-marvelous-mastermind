import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router";
import './Profile.css';

// Custom components
import SelfProfile from '../SelfProfile/SelfProfile';
import OtherProfile from '../OtherProfile/OtherProfile';

class ProfileDisplay extends Component {

    componentDidMount () {
        this.getProfile();
    }

    getProfile = () => {
        //console.log('in ProfileDisplay getProfile, props: ', this.props)
        this.props.dispatch({
          type: "FETCH_PROFILE",
          payload: this.props.match.params.name,
        });
    }

    render () {
        const isSelfProfile = this.props.store.user.username === this.props.store.profile.username;
        console.log('new profile page loaded for', this.props.match.params.name);
        return (
          <>
            {isSelfProfile ?
              <SelfProfile />
            :
              <OtherProfile />
            }
          </>
        );
    }
}

export default withRouter(connect(mapStoreToProps)(ProfileDisplay));