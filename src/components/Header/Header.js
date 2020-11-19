import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './Header.css';

import NavBar from '../NavBar/NavBar';

class Header extends Component {

	render() {
		return (
			<section className='headerWrapper'>
				<NavBar />
			</section>
		);
	}
}

export default connect(mapStoreToProps)(Header);