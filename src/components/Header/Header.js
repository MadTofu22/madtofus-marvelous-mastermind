import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {withRouter} from 'react-router';
import './Header.css';

// Custom components
import NavBar from '../NavBar/NavBar';
import UnregisteredUserWidget from '../UnregisteredUserWidget/UnregisteredUserWidget';
import RegisteredUserWidget from "../RegisteredUserWidget/RegisteredUserWidget";

class Header extends Component {
	
	render() {
		return (
			<section className='headerWrapper'>
				{this.props.store.user.id ?
				<>
					<img 
						className='headerAvatar'
						src={this.props.store.user.avatar_url}
						alt='User profile avatar'
						onClick={() => this.props.history.push(`/profile/${this.props.store.user.username}`)}
					/>
					<RegisteredUserWidget />
				</>
				:
				<>
					<img 
						className='headerAvatar'
						src={'/assets/images/default_avatar.jpg'}
						alt='User profile avatar'
					/>
					<UnregisteredUserWidget />
				</>
				}
				<NavBar />
			</section>
		);
	}
}

export default withRouter(connect(mapStoreToProps)(Header));