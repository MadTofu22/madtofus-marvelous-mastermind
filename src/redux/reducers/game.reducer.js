// Default guess matrix for a new game
const newGuessMatrix = [
    ['empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty']
  ];

// Default results matrix for a new game
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


const game = (state = {}, action) => {
    switch (action.type) {
        default: 
            return state;
        case 'CLEAR_GAME_STATE':
            return {
                guessMatrix: newGuessMatrix,
                resultsMatrix: newResultsMatrix,
                heldMarble: null,
            };
        case 'SET_GAME_STATE':
            return {
                ...this.state,
                guessMatrix: action.payload.guessMatrix,
                resultsMatrix: action.payload.resultsMatrix,
            };
        case 'SET_SELECTOR':
            return {
                ...this.state,
                heldMarble: action.payload
            };
    }
}

export default game;