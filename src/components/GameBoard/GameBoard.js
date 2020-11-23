import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class GameBoard extends Component {
  
  state = {

  }

  render() {
    return (
      <div>
        <h2>board</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(GameBoard);