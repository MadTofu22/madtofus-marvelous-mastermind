import { combineReducers } from 'redux';

const newResultsMatrix = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null]
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
        case 'CLEAR_GAME_STATE':
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
        case 'CLEAR_GAME_STATE':
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
        case 'SET_GAME_RESULTS':
            return action.payload;
    }
}

// This reducer holds the current selected marble
const heldMarble = (state='', action) => {
    switch (action.type) {
        default:
            return state;
        case 'CLEAR_GAME_STATE':
            return 'empty';
        case 'SET_SELECTOR':
            return action.payload;
    }
}

// const game = (state = {}, action) => {
//     switch (action.type) {
//         default: 
//             return {
//                 guessMatrix: newGuessMatrix,
//                 resultsMatrix: newResultsMatrix,
//                 heldMarble: null,
//                 currentGuess: 1,
//             };
//         case 'CLEAR_GAME_STATE':
//             return {
//                 guessMatrix: newGuessMatrix,
//                 resultsMatrix: newResultsMatrix,
//                 heldMarble: null,
//                 currentGuess: 1,
//             };
//         case 'SET_GAME_RESULTS':
//             return {
//                 ...state,
//                 resultsMatrix: action.payload
//             };
//         case 'SET_SELECTOR':
//             return {
//                 ...state,
//                 heldMarble: action.payload
//             };
//     }
// }

export default combineReducers({
    guesses,
    results,
    heldMarble,
    currentGuess,
})