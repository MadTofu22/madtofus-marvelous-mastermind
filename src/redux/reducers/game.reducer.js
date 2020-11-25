import { combineReducers } from 'redux';

const newResultsMatrix = [
    {correctMarbles: 0, correctColors: 0},
    {correctMarbles: 0, correctColors: 0},
    {correctMarbles: 0, correctColors: 0},
    {correctMarbles: 0, correctColors: 0},
    {correctMarbles: 0, correctColors: 0},
    {correctMarbles: 0, correctColors: 0},
    {correctMarbles: 0, correctColors: 0},
    {correctMarbles: 0, correctColors: 0},
];

const newGuessesMatrix = [
    ['empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty']
];

// This reducer holds the current game board state
const guesses = (state=newGuessesMatrix, action) => {
    switch (action.type) {
        default:
            return state;
        case 'CLEAR_GAME_BOARD':
            return newGuessesMatrix;
        case 'SET_GAME_BOARD':
            return action.payload;
    }
}

// This reducer holds the current game results
const results = (state=newResultsMatrix, action) => {
    switch (action.type) {
        default:
            return state;
        case 'CLEAR_GAME_RESULTS':
            return newResultsMatrix;
        case 'SET_GAME_RESULTS':
            return action.payload;
    }
}

// This reducer holds the number of the current guess the user is on
const currentGuess = (state=1, action) => {
    switch (action.type) {
        default:
            return state;
        case 'CLEAR_GAME_STATE':
            return 1;
        case 'SET_GUESS':
            return action.payload;
    }
}

// This reducer holds the current selected marble
const heldMarble = (state='', action) => {
    switch (action.type) {
        default:
            return state;
        case 'CLEAR_GAME_HELD':
            return 'empty';
        case 'SET_SELECTOR':
            return action.payload;
    }
}

const winningCode = (state=[], action) => {
    switch (action.type) {
        default:
            return state;
        case 'SET_WINNING_CODE':
            return action.payload;
    }
}

export default combineReducers({
    guesses,
    results,
    heldMarble,
    currentGuess,
    winningCode,
});