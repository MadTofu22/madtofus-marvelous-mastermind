import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router";

class SelfProfile extends Component {

    constructor (props) {
        super(props);
        this.state = {
            id: this.props.store.user.id,
            username: this.props.store.user.username,
            bio: this.props.store.user.bio,
            avatar_url: this.props.store.user.avatar_url,
            first_name: this.props.store.user.first_name,
            last_name: this.props.store.user.last_name
        }
    }

    handleChangeFor = (event, property) => {
        this.setState({
            ...this.state,
            [property]: event.target.value
        });
    }

    updateProfile = () => {
        this.props.dispatch({type: 'UPDATE_PROFILE', payload: this.state});
    }

    deleteProfile = () => {
        let firstConfirm = window.confirm('Are you sure you want to delete your profile?');
        let finalConfirm = window.confirm('Are you absolutely sure you want to delete this profile? This is the final confirmation and there is no turning back if you select OK!');

        if (firstConfirm) {
            if (finalConfirm) {
                // this.props.dispatch({type: 'LOGOUT'});
                this.props.dispatch({type: 'DELETE_PROFILE', payload: this.state.id});
                this.props.history.push('/home');
            }
        }
    }

    render() {
        return (
            <section className='profileWrapper' name='selfProfile'>
                {/* {JSON.stringify(this.props.store.profile)} */}
                <div className='profileElementContainer' id='detailsContainer'>
                    <img 
                        className='profileAvatar'
                        src={this.props.store.profile.avatar_url}
                        alt={`Avatar for ${this.props.store.profile.username}`}
                    />
                    <br/>
                    <label htmlFor='userAvatarUrlInput'>
                        Avatar URL: <br/>
                        <input
                            type='text'
                            className='selfProfileInput'
                            name='userAvatarUrlInput'
                            onChange={event => this.handleChangeFor(event, 'avatar_url')}
                            value={this.state.avatar_url ?
                                this.state.avatar_url
                                :
                                ''
                            }
                        />
                    </label>
                    <br/>
                    <label htmlFor='userFirstNameInput'>
                        First Name:<br/>
                        <input
                            type='text'
                            className='selfProfileInput'
                            name='userFirstNameInput'
                            onChange={event => this.handleChangeFor(event, 'first_name')}
                            value={this.state.first_name ? 
                            this.state.first_name
                            :
                            ''
                            }
                        />
                    </label>
                    <br/>
                    <label htmlFor='userLastNameInput'>
                        Last Name:<br/>
                        <input
                            type='text'
                            className='selfProfileInput'
                            name='userLastNameInput'
                            onChange={event => this.handleChangeFor(event, 'last_name')}
                            value={this.state.last_name ?
                            this.state.last_name
                            :
                            ''
                            }
                        />
                    </label>
                    <br/>
                    <button 
                        className='submitButton' 
                        name='updateProfileButton'
                        onClick={this.updateProfile}
                    >
                        Update Profile
                    </button>
                    <br/>
                    <button 
                        className='submitButton' 
                        name='deleteProfileButton'
                        onClick={this.deleteProfile}
                    >
                        Delete Profile
                    </button>
                </div>
                <div className='profileElementContainer'>
                    <label htmlFor='userBioInput'>
                        Bio: <br/>
                        <textarea
                            className='selfProfileInput'
                            name='userBioInput'
                            id='userBioInput'
                            onChange={event => this.handleChangeFor(event, 'bio')}
                            value={this.state.bio ?
                                this.state.bio
                                :
                                ''
                            }
                        />
                    </label>
                </div>
                <div className='profileElementContainer'>
                    
                </div>
            </section>
        );
    }
}

export default withRouter(connect(mapStoreToProps)(SelfProfile));
