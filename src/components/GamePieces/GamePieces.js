import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class GamePieces extends Component {

  state = {
    selectedMarble: 'selectedMarble emptyMarble',
  }

  // This function handles checking the current row against the generated code
  handleCheckGuess = () => {
    // add guess validation
    const row = this.props.store.game.currentGuess;
    const results = this.getResults(row-1);

    if(results.correctMarbles === 4){
      alert('YOU WIN!!!');
      // pop up win modal here
    } else {
      let newResults = this.props.store.game.results.slice(0);
      newResults[row-1] = results;
      this.props.dispatch({type: 'UPDATE_GAME', payload: {guessNum: row+1, results: newResults}});
    }
  }

  // This function handles getting the count of correctly placed marbles and any colors that are correct but in the wrong place
  getResults = (guessRow) => {
    let winningCode = this.props.store.game.winningCode;
    let guess = this.props.store.game.guesses[guessRow];
    console.log('in getReuslts, winningCode=', winningCode, 'vs guess=', guess);
    let correctMarbles = this.getCorrectMarbles(winningCode, guess);
    let correctColors = this.getCorrectColors(winningCode, guess, correctMarbles);
    let results = {
      correctMarbles: correctMarbles.length, 
      correctColors: correctColors.length,
    };
    console.log('RESULTS CHECK:', results)
    return results;
  }

  // This function gets the indices of the correctly guessed marbles
  getCorrectMarbles = (code, guess) => {
    let results = [];
    for (let index in code) {
      if (code[index] === guess[index]) {
        results.push(Number(index));
      }
    }
    return results;
  }

  // This function gets the indices of marbles in the code that have the correct color guessed
  getCorrectColors = (code, guess, correct) => {
    let results = [];
    
    for (let index in guess) {
      if (correct.indexOf(index.toString()) < 0) { // check to make sure the marble is not already marked as correct
        let indexInCode = code.indexOf(guess[index]); // get the index in the code array of the current guess marble being checked, -1 if not in the code
        if (indexInCode >= 0 && results.indexOf(indexInCode.toString) < 0) { // checks if the color is in the code and makes sure its not already marked
          results.push(indexInCode);
        }
      }
    }
    console.log('correctColors =', results);
    return results;
  }

  // This function updates the game state in the redux stor with the currently selected marble
  handleSelectMarble = (event) => {
    console.log('the', event.target.id, 'marble has been selected');
    this.setState({
      selectedMarble: `marbleSelector ${event.target.id}Marble`
    })
    this.props.dispatch({type: 'UPDATE_HELD', payload: event.target.id});
  }

  render() {
    return (
      <div className='gameSidePanel'>
        <h2>Marble Bucket</h2>
        <div className='selectedDisplay'>
          <h3>Selected Marble:</h3>
          <div className={this.state.selectedMarble} id='selectedMarble'></div>
        </div>

        <div className='marbleBucket'>
          <div className='marbleSelector redMarble' id='red' onClick={event => this.handleSelectMarble(event)}></div>
          <div className='marbleSelector blueMarble' id='blue' onClick={event => this.handleSelectMarble(event)}></div>
          <div className='marbleSelector yellowMarble' id='yellow' onClick={event => this.handleSelectMarble(event)}></div>
          <div className='marbleSelector greenMarble' id='green' onClick={event => this.handleSelectMarble(event)}></div>
          <div className='marbleSelector pinkMarble' id='pink' onClick={event => this.handleSelectMarble(event)}></div>
          <div className='marbleSelector whiteMarble' id='white' onClick={event => this.handleSelectMarble(event)}></div>
        </div>

        <div className='buttonWrapper'>
          <button className='submitButton' id='checkGuessButton' onClick={this.handleCheckGuess}>Check Guess</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(GamePieces);