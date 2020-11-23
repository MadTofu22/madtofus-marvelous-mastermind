import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router';

class OtherProfile extends Component {

	render() {
		return (
			<section className='otherProfileWrapper'>
				{JSON.stringify(this.props.profile)}
				<img 
					className='profileAvatar'
					src={this.props.store.profile.avatar_url}
					alt={`Avatar for ${this.props.store.profile.username}`}
				/>

				<div className='bioContainer'>
					{this.props.store.profile.bio}
				</div>
				<div className='Container'>
					{this.props.store.profile.bio}
				</div>
				<div className='Container'>
					{this.props.store.profile.bio}
				</div>
				<div className='Container'>
					{this.props.store.profile.bio}
				</div>
			</section>
		);
	}
}

export default withRouter(connect(mapStoreToProps)(OtherProfile));
