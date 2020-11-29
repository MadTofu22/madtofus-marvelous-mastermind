import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {withRouter} from 'react-router';
import './Header.css';

// Custom components
import NavBar from './NavBar/NavBar';
import UnregisteredUserWidget from './UnregisteredUserWidget/UnregisteredUserWidget';
import RegisteredUserWidget from './RegisteredUserWidget/RegisteredUserWidget';

class Header extends Component {

	// This function forces the game to re-render
	forceRender = () => {
		this.forceUpdate();
	}

	handleAvatarClick = () => {
		this.props.dispatch({
			type: "FETCH_PROFILE",
			payload: this.props.store.user.username,
		  });
		this.props.history.push(`/profile/${this.props.store.user.username}`)
		this.props.forceRender();
	}

	render() {
		return (
			<div className='headerWrapper'>
				{this.props.store.user.id ?
				<>
					<img 
						className='headerAvatar'
						src={this.props.store.user.avatar_url}
						alt='User profile avatar'
						onClick={this.handleAvatarClick}
					/>
					<RegisteredUserWidget forceRender={this.forceRender}/>
				</>
				:
				<>
					<img 
						className='headerAvatar'
						src={'/assets/images/default_avatar.jpg'}
						alt='User profile avatar'
					/>
					<UnregisteredUserWidget forceRender={this.forceRender}/>
				</>
				}
				<NavBar forceRender={this.forceRender}/>
			</div>
		);
	}
}

export default withRouter(connect(mapStoreToProps)(Header));