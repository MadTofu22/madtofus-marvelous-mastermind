import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

class GuessRow extends Component {

    // This function handles updating the game state when a marble is placed on the slot

    handleMarbleSlotClicked = (event, row, slot) => {
        if (row === this.props.store.game.currentGuess-1) {
            const heldMarble = this.props.store.game.heldMarble;
            let newMatrix = this.props.store.game.guesses;
            
            newMatrix[row][slot] = heldMarble;
            
            this.props.dispatch({type: 'UPDATE_BOARD', payload: newMatrix});
        }
    }

	render () {
		return (
			<div className='guessRowContainer'>
                {this.props.rowMatrix.map((marble, index) => {
                    return (
                        <div 
                            key={`row${this.props.rowNumber}_slot${index}`}
                            className={`guessRowSlot ${marble}Marble`}
                            id={`row${this.props.rowNumber}_slot${index}`}
                            onClick={event => this.handleMarbleSlotClicked(event, this.props.rowNumber, index)}
                        ></div>
                )})}
			</div>
		);
	}
}

export default connect(mapStoreToProps)(GuessRow);