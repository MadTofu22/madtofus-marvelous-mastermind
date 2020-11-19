import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './Header.css';

// Custom components
import NavBar from '../NavBar/NavBar';
import UnregisteredUserWidget from '../UnregisteredUserWidget/UnregisteredUserWidget';

class Header extends Component {

	render() {
		return (
			<section className='headerWrapper'>
				<UnregisteredUserWidget />
				<NavBar />
			</section>
		);
	}
}

export default connect(mapStoreToProps)(Header);