import { put, takeEvery } from 'redux-saga/effects';


function* startNewGame (action) {
    try {
        yield put({type: 'CLEAR_GAME_BOARD'});
        yield put({type: 'CLEAR_GAME_STATE'});
        yield put({type: 'CLEAR_GAME_HELD'});
        
        yield put({type: 'CLEAR_GAME_RESULTS'});
        yield put({type: 'SET_WINNING_CODE', payload: action.payload})
    } catch (error) {
        console.log(error);
    }
}

function* updateGameBoard (action) {
    try {
        yield put({type: 'SET_GAME_BOARD', payload: action.payload});
    } catch (error) {
        console.log(error);
    }
}

function* updateGameResults (action) {
    try {
        yield put({type: 'SET_GAME_RESULTS', payload: action.payload.results});
        yield put({type: 'SET_GUESS', payload: action.payload.guessNum });
    } catch (error) {
        console.log(error);
    }
}

function* updateHeldMarble (action) {
    try {
        yield put({type: 'SET_SELECTOR', payload: action.payload});
    } catch (error) {
        console.log(error);
    }
}

function* gameSaga () {
    yield takeEvery('RESET_GAME', startNewGame);
    yield takeEvery('UPDATE_BOARD', updateGameBoard);
    yield takeEvery('UPDATE_GAME', updateGameResults);
    yield takeEvery('UPDATE_HELD', updateHeldMarble);
}

export default gameSaga;