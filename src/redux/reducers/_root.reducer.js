import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import pages from './navigation.reducer';
import profile from './profile.reducer';
import leaderboard from './leaderboard.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  pages, // contains the paths and labels for the navigation bar as well as flags which page is active
  profile, // contains the profile data for the currently viewed user
  leaderboard, // contains the leaderboard rank and win/loss info
});

export default rootReducer;
