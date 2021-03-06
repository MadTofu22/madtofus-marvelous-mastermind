import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './GameDisplay.css';

// Custom Components
import GamePieces from '../GamePieces/GamePieces';
import GameBoard from '../GameBoard/GameBoard';
import GameResults from '../GameResults/GameResults';
import GameEndModal from './GameEndModal';

class GameDisplay extends Component {

	state = {
		gameCount: 0,
		displayModal: false,
		modalType: '',
		checkGuessDisabled: false,
	}
	
	componentDidMount () {
		this.props.dispatch({type: 'RESET_GAME', payload: this.generateCode()});
	}

	// This function forces the game to re-render
	forceRender = () => {
		// console.log('in game display force render');
		this.forceUpdate();
	}

	// This function handles creating a new game.
	handleNewGame = () => {
		this.props.dispatch({type: 'RESET_GAME', payload: this.generateCode()});
		if (this.state.displayModal) {
			this.setState({
				...this.state,
				displayModal: false,
			});
		} else {
			this.setState({
				...this.state,
				checkGuessDisabled: false,
			});
		}
		this.forceUpdate();
	  }
	
	// This function generates a random winning code for the new game.
	generateCode = () => {
		const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'white'];
		let winningCode = [];
	
		for (let i=0; i<4; i++) {
			winningCode.push(colors[Math.floor(Math.random() * colors.length)]); // Picks a random color then adds it to the winning code
		}
		// console.log('winning code:', winningCode);
		return winningCode;
	}

	// This function handles setting the local state modal type and toggling it to display
	setModal = (result) => {
		let modalType = '';

		if (this.props.store.user.id) {
			if (result === 'win') {
				modalType = 'user_win';		
			} else {
				modalType = 'user_loss'
			}
		} else {
			if (result === 'win') {
				modalType = 'guest_win';		
			} else {
				modalType = 'guest_loss'
			}
		}

		this.setState({
			...this.state,
			buttonDisabled: false,
			displayModal: true,
			modalType,
		});
		return true;
	}

	closeModal = () => {
		this.setState({
			...this.state,
			checkGuessDisabled: true,
			displayModal: false,
			modalType: '',
		});
	}

	toggleCheckGuessButton = () => {
		this.setState({
			...this.state,
			checkGuessDisabled: !this.state.checkGuessDisabled,
		});
		this.forceUpdate();
	}

	render () {
		return (
			<section className='gameWrapper'>
				{this.state.displayModal ? 
					<GameEndModal 
					className='modalContainer' 
					modalType={this.state.modalType}
					close={this.closeModal}
					generateCode={this.generateCode}
					handleNewGame={this.handleNewGame} />
					:
					<></>
				}
				<GameResults />
				<GameBoard />
				<GamePieces 
					generateCode={this.generateCode} 
					forceRender={this.forceRender} 
					displayModal={this.setModal} 
					buttonDisabled={this.state.checkGuessDisabled}
					toggleCheckGuessButton={this.toggleCheckGuessButton}
					handleNewGame={this.handleNewGame} />
			</section>
		);
	}
}

export default connect(mapStoreToProps)(GameDisplay);