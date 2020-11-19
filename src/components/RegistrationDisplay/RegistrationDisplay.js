import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router';

class RegistrationDisplay extends Component {
	state = {
		username: '',
		password: ''
  	}
	
	// This function handles the submit button being clicked to register a new user
	handleSubmit = (event) => {
		event.preventDefault();

		this.props.dispatch({
			type: 'REGISTER',
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

	// This function handles canceling registration and returning the user to the previous page
	handleCancel = () => {
		this.setState({
			username: '',
			password: ''
		});
		this.props.history.goBack();
	}

	render() {
		return (
			<div className='registrationContainer'>
				{this.props.store.errors.registrationMessage && (
				<h3 className='alert' role='alert'>
					{this.props.store.errors.registrationMessage}
				</h3>
				)}

				<form name='registrationForm' onSubmit={this.handleSubmit}>
					<label htmlFor='usernameInput'>
						Username:
						<input
							required
							type='text'
							name='usernameInput'
							placeholder='Enter a username'
							onChange={(event) => this.handleChangeFor(event, 'username')}
						/>
					</label>

					<label htmlFor='passwordInput'>
						Password:
						<input
							required
							type='text'
							name='passwordInput'
							placeholder='Enter a password'
							onChange={(event) => this.handleChangeFor(event, 'password')}
						/>
					</label>
					<button className='submitButton' name='registrationSubmit'>Register</button>
				</form>
				<button className='submitButton' name='registrationCancel' onClick={this.handleCancel}>Cancel</button>
			</div>
    	);
	}
}

const RegistrationDisplayWithRouter = withRouter(RegistrationDisplay);
export default connect(mapStoreToProps)(RegistrationDisplayWithRouter);