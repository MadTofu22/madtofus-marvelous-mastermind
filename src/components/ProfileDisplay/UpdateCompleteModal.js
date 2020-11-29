import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class UpdateCompleteModal extends Component {

    componentDidMount () {
        
    }

    render () {
        return (
            <div className='profile-modalContainer'>
                <div className='profile-modalContents' id='modalContents'>
                    <h1>Thanks for updating your profile!</h1>

                    <button 
                        className='submitButton' 
                        id='closeModalButton'
                        onClick={this.props.close}>
                        Close
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(UpdateCompleteModal);