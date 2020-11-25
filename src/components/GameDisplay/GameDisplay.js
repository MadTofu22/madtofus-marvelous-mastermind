import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './GameDisplay.css';

// Custom Components
import GamePieces from '../GamePieces/GamePieces';
import GameBoard from '../GameBoard/GameBoard';
import GameResults from '../GameResults/GameResults';

class GameDisplay extends Component {

	state = {
		gameCount: 0
	}
	
	componentDidMount () {
		this.props.dispatch({type: 'RESET_GAME', payload: this.generateCode()});
	}

	forceRender = () => {
		console.log('in game display force render')
		this.forceUpdate();
	}
	
	generateCode = () => {
		const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'white'];
		let winningCode = [];
	
		for (let i=0; i<4; i++) {
			winningCode.push(colors[Math.floor(Math.random() * colors.length)]); // Picks a random color then adds it to the winning code
		}
		console.log('winning code:', winningCode);
		return winningCode;
	}

	render () {
		return (
			<section className='gameWrapper'>
				<GameResults />
				<GameBoard />
				<GamePieces generateCode={this.generateCode} forceRender={this.forceRender} />
			</section>
		);
	}
}

export default connect(mapStoreToProps)(GameDisplay);