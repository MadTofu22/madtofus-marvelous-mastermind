import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router";

class OtherProfile extends Component {
	render() {
		return (
			<section className="otherProfileWrapper">
				{JSON.stringify(this.props.profile)}
			</section>
		);
	}
}

export default withRouter(connect(mapStoreToProps)(OtherProfile));
