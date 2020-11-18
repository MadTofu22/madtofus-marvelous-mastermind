import React, {Component} from 'react';
import {HashRouter as Router, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';

// Component imports
import NavBar from '../NavBar/NavBar';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    return (
      <Router>
        <NavBar />

        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
      </Router>
    );
  }
}

export default connect()(App);
