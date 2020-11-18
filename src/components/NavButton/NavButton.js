import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {withRouter} from 'react-router';

class NavButton extends Component {

    // This function handles moving the User to the next page
    handleClick = () => {
        this.props.history.push(this.props.page.path);
    }

    render() {
        return (
            <div className='buttonContainer' onClick={this.handleClick}>
                <h2>{this.props.page.label}</h2>
            </div>
        );
    }
}

const NavButtonWithRouter = withRouter(NavButton);
export default connect(mapStoreToProps)(NavButtonWithRouter);