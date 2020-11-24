import { put, takeEvery } from 'redux-saga/effects';


function* startNewGame () {
    try {
        yield put({type: 'CLEAR_GAME_STATE'});
    } catch (error) {
        console.log(error);
    }
}

function* updateGameState (action) {
    try {
        yield put({type: 'SET_GAME_STATE', payload: action.payload});
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
    yield takeEvery('UPDATE_GAME', updateGameState);
    yield takeEvery('UPDATE_HELD', updateHeldMarble);
}

export default gameSaga;