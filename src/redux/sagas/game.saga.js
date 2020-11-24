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

function* navigationSaga () {
    yield takeEvery('RESET_GAME', startNewGame);
    yield takeEvery('UPDATE_GAME', updateGameState);
}

export default navigationSaga;