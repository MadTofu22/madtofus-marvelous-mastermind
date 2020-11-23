import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/user', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* fetchProfile(action) {
  try {
    const response = yield axios.get(`/api/user/${action.payload}`);
    yield put({ type: 'SET_PROFILE', payload: response.data});
  } catch (error) {
    console.log('Profile get request failed', error);
  }
}

function* updateProfile(action) {
  try {
    yield axios.put(`/api/user/${action.payload.id}`, action.payload);
    yield put({ type: 'FETCH_PROFILE', payload: action.payload.username});
  } catch (error) {
    console.log('Profile update request failed', error);
  }
}

function* deleteProfile(action) {
  try {
    yield axios.delete(`/api/user/${action.payload}`);
    yield put({type: 'LOGOUT'});
  } catch (error) {
    console.log('Profile delete request failed', error);
  }
}

function* fetchRanks() {
  try {

  } catch (error) {
    console.log('Error fetching leaderboard data', error);
  }
}

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
  yield takeEvery('FETCH_PROFILE', fetchProfile);
  yield takeEvery('UPDATE_PROFILE', updateProfile);
  yield takeEvery('DELETE_PROFILE', deleteProfile);
  yield takeEvery('FETCH_RANKS', fetchRanks);
}

export default userSaga;
