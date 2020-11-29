import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import { withRouter } from 'react-router';

class NavButton extends Component {

    // This function handles moving the User to the next page
    handleClick = () => {

        this.props.history.push(this.props.page.path);
        this.props.dispatch({type: 'NAVIGATE', payload: this.props.page.path});
        this.props.forceRender();
        console.log('in navButton component, this.props.page:', this.props.page)
    }

    render() {
        return (
          <div
            className={
              this.props.isActive
                ? "navButtonContainer_active"
                : "navButtonContainer"
            }
            onClick={this.handleClick}
          >
            <h3 className="navButtonLabel">{this.props.page.label}</h3>
          </div>
        );
    }
}

const NavButtonWithRouter = withRouter(NavButton);
export default connect(mapStoreToProps)(NavButtonWithRouter);