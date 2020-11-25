import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

import NavButton from './NavButton/NavButton';

class NavBar extends Component {

	render() {
		return (
			<div className='navBarWrapper'>
				{/*
				Add Profile components here 
				will need conditional rendering
				to decide if it has login or profile name
				*/}

				{this.props.store.pages.map(page => {
					return <NavButton key={page.id} page={page} />
				})}
			</div>
		);
	}
}

export default connect(mapStoreToProps)(NavBar);