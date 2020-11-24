import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class GameResults extends Component {
  
  state = {

  }

  render() {
    return (
      <div className='gameSidePanel'>
        <h2>results</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(GameResults);