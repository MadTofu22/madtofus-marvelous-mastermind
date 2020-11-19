import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {withRouter} from 'react-router';


class UnregisteredUserWidget extends Component {

    state = {
		username: '',
		password: ''
  	}
	
	// This function handles the submit button being clicked to register a new user
	handleSubmit = (event) => {
		event.preventDefault();

		this.props.dispatch({
			type: 'LOGIN',
			payload: {
                username: this.state.username,
                password: this.state.password
			},
		});

		event.target.reset();
		this.props.history.push('/home');
	}

	// This function handles updating the local state with the current values in the Username and password fields
	handleChangeFor = (event, propertyName) => {
		this.setState({
			[propertyName]: event.target.value,
		});
    }
    
    render() {
        return (
            <div className='loginContainer'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='usernameInput' value='Username'>
                        <input 
                            required
                            type='text'
                            name='usernameInput'
                            placeholder='Username'
                            onChange={event => this.handleChangeFor(event, 'username')}
                        />
                    </label>

                    <label htmlFor='passwordInput' value='Password'>
                        <input 
                            required
                            type='text'
                            name='passwordInput'
                            placeholder='Password'
                            onChange={event => this.handleChangeFor(event, 'password')}
                        />
                    </label>
                    <button className='headerWidgetButton'>Login</button>
                </form>
                <button className='headerWidgetButton' onClick={() => this.props.history.push('/register')}>Register</button>
            </div>
        );
    }
}

const UnregisteredUserWidgetWithRouter = withRouter(UnregisteredUserWidget);
export default connect(mapStoreToProps)(UnregisteredUserWidgetWithRouter);