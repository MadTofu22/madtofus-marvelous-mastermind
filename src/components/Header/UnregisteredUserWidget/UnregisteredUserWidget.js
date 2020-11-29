import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
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
                    <label htmlFor='usernameInput' value='Username'></label>
                    <input 
                        required
                        type='text'
                        name='usernameInput'
                        placeholder='Username'
                        id='usernameInput'
                        onChange={event => this.handleChangeFor(event, 'username')}
                    />
                    <br/>
                    <label htmlFor='passwordInput' value='Password'>
                        <input 
                            required
                            type='password'
                            name='passwordInput'
                            placeholder='Password'
                            id='passwordInput'
                            onChange={event => this.handleChangeFor(event, 'password')}
                        />
                    </label>
                    <br/>
                    <button type='submit' className='headerWidgetButton'>Login</button>
                    <button type='button' className='headerWidgetButton' onClick={() => this.props.history.push('/register')}>Register</button>
                </form>

            </div>
        );
    }
}

const UnregisteredUserWidgetWithRouter = withRouter(UnregisteredUserWidget);
export default connect(mapStoreToProps)(UnregisteredUserWidgetWithRouter);