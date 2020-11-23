import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Custom Components
import GamePieces from '../GamePieces/GamePieces';
import GameBoard from '../GameBoard/GameBoard';
import GameResults from '../GameResults/GameResults';

class GameDisplay extends Component {

	render () {
		return (
			<section>
				<h1>Mastermind</h1>
				<GameResults />
				<GameBoard />
				<GamePieces />
			</section>
		);
	}
}

export default connect(mapStoreToProps)(GameDisplay);