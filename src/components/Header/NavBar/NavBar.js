import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

import NavButton from './NavButton/NavButton';

class NavBar extends Component {

	render() {
		return (
			<div className='navBarWrapper'>

				{this.props.store.pages.map((page, index) => {
					return <NavButton key={page.id} page={page} isActive={this.props.store.pages[index].isActive} forceRender={() => this.forceUpdate()}/>
				})}
			</div>
		);
	}
}

export default connect(mapStoreToProps)(NavBar);