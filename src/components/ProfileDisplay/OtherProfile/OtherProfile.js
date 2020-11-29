import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from 'react-router';

class OtherProfile extends Component {

	render() {
		return (
			<>
			<h1>{this.props.store.profile.username}'s Profile</h1>
			<div className='otherProfileWrapper'>
				<div className='leftContainer'>
					<img 
						className='profileAvatar'
						src={this.props.store.profile.avatar_url}
						alt={`Avatar for ${this.props.store.profile.username}`}
					/>
					<h3>Total Wins: {this.props.store.profile.total_wins}</h3>
					<h3>Total Losses: {this.props.store.profile.total_losses}</h3>
				</div>

				<div className='bioContainer'>
					<h3>{this.props.store.profile.bio}</h3>
				</div>


				
			</div>
			</>
		);
	}
}

export default withRouter(connect(mapStoreToProps)(OtherProfile));
