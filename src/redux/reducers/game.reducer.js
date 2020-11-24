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
                resultsMatrix: newResultsMatrix
            };
        case 'SET_GAME_STATE':
            return action.payload;
    }
}

export default game;