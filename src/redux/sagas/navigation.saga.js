import { put, takeEvery } from 'redux-saga/effects';

// This saga handles updating the redux store with which page is active so the nav bar can render which page the user is on
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