import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import GuessRow from './GuessRow/GuessRow';

class GameBoard extends Component {
  
  componentDidMount () {
    this.props.dispatch({type: 'RESET_GAME', payload: this.generateCode()});
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

  render() {
    return (
      <div className='gameBoard'>
        <h2>board</h2>
        {this.props.store.game.guesses.map((rowMatrix, index) => {
          return <GuessRow key={index} rowMatrix={rowMatrix} rowNumber={index} />
        })}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(GameBoard);