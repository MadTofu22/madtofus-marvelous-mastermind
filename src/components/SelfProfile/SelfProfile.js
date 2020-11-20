import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router";

class SelfProfile extends Component {

    render() {
        return (
            <section className="selfProfileWrapper">
                {JSON.stringify(this.props.store.profile)}
            </section>
        );
    }
}

export default withRouter(connect(mapStoreToProps)(SelfProfile));
