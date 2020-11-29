import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class GameEndModal extends Component {

    state = {
        header: `MODAL HEADER`,
        text: `MODAL TEXT`,
        buttonOne: `BUTTON 1`,
        button: `BUTTON 2`,
    }

    componentDidMount () {
        this.setModalContents(this.props.modalType);
    }

    // This function handles resetting the game board
    handleNewGame = () => {
        this.props.forceRender();
        this.setState({
        checkGuessButtonDisabled: false,
        })
        this.props.dispatch({type: 'RESET_GAME', payload: this.props.generateCode()});
    }

    // This function handles populating the local state with the correct info
    setModalContents = (type) => {
        switch (type) {
            default:
                this.setState({
                    header: `MODAL HEADER`,
                    text: `MODAL TEXT`,
                    button: `BUTTON`,
                });
                break;
            case `user_win`:
                this.setState({
                    header: `YOU WON!`,
                    text: `Congratulations, you broke the code on guess ${this.props.store.game.currentGuess}!`,
                    button: `Leaderboards`,
                });
                break;
            case `user_lost`:
                this.setState({
                    header: `WOMP WOMP`,
                    text: `Looks like you weren't able to break the code.`,
                    button: `Leaderboards`,
                });
                break;
            case `guest_win`:
                this.setState({
                    header: `YOU WON`,
                    text: `Congratulations, you broke the code on guess ${this.props.store.game.currentGuess}! Select register if you want to track future games.`,
                    button: `Register`,
                });
                break;
            case `guest_loss`:
                this.setState({
                    header: `WOMP WOMP`,
                    text: `Looks like you weren't able to break the code. Select register if you want to track future games.`,
                    button: `Register`,
                });
                break;
        }
    }

    render () {
        return (
            <div className='modalContainer'>
                <div className='modalContents' id='modalContents'>
                    <h1>{this.state.header}</h1>
                    <p>{this.state.text}</p>
                    <button 
                        className='submitButton' 
                        id='newGameButton'>
                        New Game
                    </button>

                    <button 
                        className='submitButton' 
                        id='closeModalButton'>
                        Close
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(GameEndModal);