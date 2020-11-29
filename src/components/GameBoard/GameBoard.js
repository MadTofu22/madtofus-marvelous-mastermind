import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import GuessRow from './GuessRow/GuessRow';

class GameBoard extends Component {
  state = {
    currentGuess: this.props.store.game.currentGuess
  }

  render() {
    return (
      <div className='gameBoard'>
        <h2>Guesses</h2>
        {this.props.store.game.guesses.map((rowMatrix, index) => {
          return <GuessRow key={index} rowMatrix={rowMatrix} rowNumber={index} />
        })}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(GameBoard);