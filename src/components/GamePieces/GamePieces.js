import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {withRouter} from 'react-router';

class GamePieces extends Component {

  state = {
    checkGuessButtonDisabled: false,
    displayModal: false,
  }

  // This function handles checking the current row against the generated code
  handleCheckGuess = () => {
    const row = this.props.store.game.currentGuess;
    const results = this.getResults(row-1);

    if (this.validateGuessRow(this.props.store.game.guesses[row-1])) {
      if(results.correctMarbles === 4) { // check for if the user wins
        this.toggleCheckGuessButton();
        this.updateRecord(true);
        this.props.displayModal('win');
      } else if (results.correctMarbles < 4 && row < 8) { // check if loser wins but game is not over
        this.updateResults(row, results);
      } else if (results.correctMarbles < 4 && row === 8) { // game over update
        this.updateResults(row, results);
        this.toggleCheckGuessButton();
        // update the users losses if logged in
        this.updateRecord(false);
        this.props.displayModal('loss');
        alert('Womp womp you lose. Select New Game to play again!');
      }
      this.props.forceRender();
    } else {
      alert('Please enter a full guess');
    }
  }

  // This function handles updating a registered users win/loss record
  updateRecord = (result) => {
    if (this.props.store.user.id) {
      this.props.dispatch({
        type: 'UPDATE_RECORD', 
        payload: {
          result, 
          id: this.props.store.user.id
        }});
    }
  }

  // This function updates the results in the redux state
  updateResults = (row, results) => {
      let newResults = this.props.store.game.results.slice(0);
      newResults[row-1] = results;
      this.props.dispatch({type: 'UPDATE_GAME', payload: {guessNum: row+1, results: newResults}});
  }

  // This function toggles the disabled attribute for the check guess button
  toggleCheckGuessButton = () => {
    this.setState({
      checkGuessButtonDisabled: !this.state.checkGuessButtonDisabled
    });
  }

  // This function handles making sure all for slots in the current guess row are filled when check guess is clicked
  validateGuessRow = (guessRow) => {
    // console.log('guessRow', guessRow)
    for (let marble of guessRow) {
      if (marble === 'empty') {
        return false;
      }
    }
    return true;
  }

  // This function handles getting the count of correctly placed marbles and any colors that are correct but in the wrong place
  getResults = (guessRow) => {
    let winningCode = this.props.store.game.winningCode;
    let guess = this.props.store.game.guesses[guessRow];
    // console.log('in getReuslts, winningCode=', winningCode, 'vs guess=', guess);
    let correctMarbles = this.getCorrectMarbles(winningCode, guess);
    let correctColors = this.getCorrectColors(winningCode, guess, correctMarbles);
    let results = {
      correctMarbles: correctMarbles.length,
      correctColors: correctColors.length,
    };
    // console.log('RESULTS CHECK:', results)
    return results;
  }

  getCorrectColors = (code=[], guess=[], correct=[]) => {
    let results = [];

    // console.log('==============================')
    // console.log('START CHECK FOR CORRECT COLORS')
    // console.log('==============================')
    // console.log('correct:', correct)
    // console.log('code:', code)
    // console.log('guess', guess)

    for(let codeIndex in code) {
      codeIndex = Number(codeIndex);
      // console.log('--- NEW ITERATION ---')
      // console.log('--- In code for loop ---')
      // console.log('code index:', codeIndex)
      if (correct.indexOf(codeIndex) < 0 && results.indexOf(codeIndex) < 0) { // If this passes, the marble has not been found and added to correct
        // console.log('--- PASSED initial check, codeIndex is not in the correct marble array or the results array ---')
        for (let guessIndex in guess) {
          guessIndex = Number(guessIndex);
          // console.log('--- In guess for loop ---')
          // console.log('guess index:', guessIndex)
          if (code[codeIndex] === guess[guessIndex] && results.indexOf(codeIndex) < 0 ) { // This means a color match has been found and it is not in the results array already
            // console.log('--- PASSED final check, color match has been found at guessIndex:', guessIndex, 'with codeIndex;', codeIndex)
            results.push(codeIndex);
          } else {
            // console.log('Did not pass final check')
          }
        }
      } else {
        // console.log('Did not pass initial check')
      }
    }
    // console.log('==============================')
    // console.log('END CHECK FOR CORRECT COLORS')
    // console.log('correctColors =', results)
    // console.log('code:', code)
    // console.log('guess', guess)
    // console.log('==============================')
    return results;
  }

  validateMarbleHasNotBeenUsed = (codeIndex, codeArray, resultsArray) => {

  }

  // This function updates the game state in the redux stor with the currently selected marble
  handleSelectMarble = (event) => {
    // this.props.forceRender();
    this.props.dispatch({type: 'UPDATE_HELD', payload: event.target.id});
  }

  // This function handles resetting the game board
  handleNewGame = () => {
    this.props.forceRender();
    this.setState({
      checkGuessButtonDisabled: false,
    })
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