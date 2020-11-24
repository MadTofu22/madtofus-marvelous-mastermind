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
        case 'NEW_GAME':
            return {
                guessMatrix: newGuessMatrix,
                resultsMatrix: newResultsMatrix
            };
        case 'UPDATE_GAME':
            return action.payload;
    }
}

export default game;