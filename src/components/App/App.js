import React, {Component} from 'react';
import {HashRouter as Router, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import mapStoreToProps from "../../redux/mapStoreToProps";
import './App.css';

// Component imports
import Header from '../Header/Header';
import RegistrationDisplay from '../RegistrationDisplay/RegistrationDisplay';
import ProfileDisplay from '../ProfileDisplay/ProfileDisplay';
import LeaderboardDisplay from '../LeaderboardDisplay/LeaderboardDisplay';
import AboutDisplay from '../AboutDisplay/AboutDisplay';
import InstructionsDisplay from '../InstructionsDisplay/InstructionsDisplay';

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

        <Route exact path='/about' component={AboutDisplay} />
        <Route exact path='/instructions' component={InstructionsDisplay} />
        <Route exact path='/ranks' component={LeaderboardDisplay} />
        <Route path='/profile/:name' component={ProfileDisplay} />
        <Route exact path='/register' component={RegistrationDisplay} />
      </Router>
    );
  }
}

export default connect(mapStoreToProps)(App);
