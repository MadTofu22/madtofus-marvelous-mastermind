import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import GuessRow from './GuessRow/GuessRow';

class GameBoard extends Component {
  
  state = {
    guessNumber: 0,
  }
  
  render() {
    return (
      <div className='gameBoard'>
        <h2>board</h2>
        {this.props.store.game.guesses.map((rowMatrix, index) => {
          return <GuessRow rowMatrix={rowMatrix} rowNumber={index} />
        })}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(GameBoard);