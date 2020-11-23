import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class GamePieces extends Component {

  render() {
    return (
      <div>
        <h2>pieces</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(GamePieces);