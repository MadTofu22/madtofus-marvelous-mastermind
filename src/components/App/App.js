import React, {Component} from 'react';
import {HashRouter as Router, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import mapStoreToProps from "../../redux/mapStoreToProps";
import './App.css';

// Component imports
import Header from '../Header/Header';
import RegistrationDisplay from '../RegistrationDisplay/RegistrationDisplay';
import ProfileDisplay from '../ProfileDisplay/ProfileDisplay';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    return (
      <Router>
        <Header />

        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>

        {/* <Route exact path={'/profile'}>
          <Redirect to={`/profile/${this.props.store.user.username}`} />
        </Route> */}
        <Route path={'/profile/:name'} component={ProfileDisplay} />
        <Route exact path='/register' component={RegistrationDisplay} />
      </Router>
    );
  }
}

export default connect(mapStoreToProps)(App);
