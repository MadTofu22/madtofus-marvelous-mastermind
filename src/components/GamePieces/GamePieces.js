import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {withRouter} from 'react-router';

class GamePieces extends Component {

  state = {
    selectedMarble: 'selectedMarble emptyMarble',
    checkGuessButtonDisabled: false,
  }

  // This function handles checking the current row against the generated code
  handleCheckGuess = () => {
    // add guess validation
    const row = this.props.store.game.currentGuess;
    const results = this.getResults(row-1);

    if(results.correctMarbles === 4){
      alert('YOU WIN!!!');
      // this.disableCheckGuess();
      // pop up win modal here
    } else {
      let newResults = this.props.store.game.results.slice(0);
      newResults[row-1] = results;
      this.props.dispatch({type: 'UPDATE_GAME', payload: {guessNum: row+1, results: newResults}});
    }
    this.props.forceRender();
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
  getCorrectMarbles = (code=[], guess=[]) => {
    let results = [];
    for (let index in code) {
      if (code[index] === guess[index]) {
        results.push(Number(index));
      }
    }
    return results;
  }

  // This function gets the indices of marbles in the code that have the correct color guessed
  getCorrectColors = (code=[], guess=[], correct=[]) => {
    let results = [];
    console.log('==============================')
    console.log('START CHECK FOR CORRECT COLORS')
    console.log('==============================')
    console.log('correct:', correct)
    console.log('code:', code)
    console.log('guess', guess)
    for (let index in guess) {
      console.log('-----new iteration-----')
      console.log('index =', index)
      console.log('results =', results)
      if (correct.indexOf(Number(index)) < 0) { // check to make sure the marble is not already marked as correct
        let indexInCode = code.indexOf(guess[index]); // get the index in the code array of the current guess marble being checked, -1 if not in the code
        console.log('passed first check, indexInCode =', indexInCode)
        if (indexInCode >= 0) { // checks if the color is a match to a marble in the code
          if (results.indexOf(indexInCode) < 0) { // check to see if the index from the code has already been added to the results
            results.push(indexInCode);
            console.log('found correct color, first match for the color, results =', results)
          } else { // if already in the results, check if there is a duplicate color in the code
            let resultsIndex = results.indexOf(indexInCode);
            if (code.indexOf(guess[index], resultsIndex) < 0) {
              results.push(code.indexOf(guess[index], resultsIndex+1));
              console.log('found correct color, after checking for duplicates, results =', results)
            }
          }
        }
      }
    }
    console.log('==============================')
    console.log('END CHECK FOR CORRECT COLORS')
    console.log('correctColors =', results)
    console.log('code:', code)
    console.log('guess', guess)
    console.log('==============================')
    return results;
  }

  validateMarbleHasNotBeenUsed = (codeIndex, codeArray, resultsArray) => {

  }

  // This function updates the game state in the redux stor with the currently selected marble
  handleSelectMarble = (event) => {
    console.log('the', event.target.id, 'marble has been selected');
    this.setState({
      selectedMarble: `marbleSelector ${event.target.id}Marble`
    })
    this.props.dispatch({type: 'UPDATE_HELD', payload: event.target.id});
  }

  // This function handles resetting the game board
  handleNewGame = () => {
    this.props.forceRender();
    this.props.dispatch({type: 'RESET_GAME', payload: this.props.generateCode()});
  }

  render() {
    return (
      <div className='gameSidePanel'>
        <h2>Marble Bucket</h2>
        <div className='selectedDisplay'>
          <h3>Selected Marble:</h3>
          <div className={`selectedMarble ${this.props.store.game.heldMarble}Marble`} id='selectedMarble'></div>
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
          <button 
            className='submitButton' 
            id='checkGuessButton' 
            disabled={this.state.checkGuessButtonDisabled} 
            onClick={this.handleCheckGuess}
          >
            Check Guess
          </button>
          <button 
            className='submitButton' 
            id='newGameButton'
            onClick={this.handleNewGame}
          >
            New Game
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(GamePieces));