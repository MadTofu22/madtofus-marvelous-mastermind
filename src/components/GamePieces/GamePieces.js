import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class GamePieces extends Component {

  state = {
    selectedMarble: null
  }
  handleSelectMarble = (event) => {
    console.log('the', event.target.id, 'has been selected');
  }

  render() {
    return (
      <div className='gameSidePanel'>
        <h2>Marble Bucket</h2>
        <div className='marbleBucket'>
          <div className='marbleSelector redMarble' id='red' onClick={event => this.handleSelectMarble(event)}></div>
          <div className='marbleSelector blueMarble' id='blue' onClick={event => this.handleSelectMarble(event)}></div>
          <div className='marbleSelector yellowMarble' id='yellow' onClick={event => this.handleSelectMarble(event)}></div>
          <div className='marbleSelector greenMarble' id='green' onClick={event => this.handleSelectMarble(event)}></div>
          <div className='marbleSelector pinkMarble' id='pink' onClick={event => this.handleSelectMarble(event)}></div>
          <div className='marbleSelector whiteMarble' id='white' onClick={event => this.handleSelectMarble(event)}></div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(GamePieces);