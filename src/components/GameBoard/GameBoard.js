import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import GuessRow from './GuessRow/GuessRow';

class GameBoard extends Component {
  
  state = {
    guessNumber: 0,
    guessMatrix: [
      ['empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty'],
      ['empty', 'empty', 'empty', 'empty']
    ]
  }

  

  render() {
    return (
      <div className='gameBoard'>
        <h2>board</h2>
        {this.state.guessMatrix.map((rowMatrix, index) => {
          return <GuessRow rowMatrix={rowMatrix} rowNumber={index} />
        })}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(GameBoard);