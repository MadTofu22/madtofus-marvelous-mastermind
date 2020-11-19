import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* updatePage (action) {
    try {
        yield put({type: action.payload});
    } catch (error) {
        console.log(error);
    }
    
}

function* navigationSaga () {
    yield takeEvery('NAVIGATE', updatePage);
}

export default navigationSaga;