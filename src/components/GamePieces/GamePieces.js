import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class GamePieces extends Component {

  state = {
    selectedMarble: 'selectedMarble emptyMarble',
  }

  // This function updates the game state in the redux stor with the currently selected marble
  handleSelectMarble = (event) => {
    console.log('the', event.target.id, 'marble has been selected');
    this.setState({
      selectedMarble: `marbleSelector ${event.target.id}Marble`
    })
    this.props.dispatch({type: 'UPDATE_HELD', payload: event.target.id});
  }

  render() {
    return (
      <div className='gameSidePanel'>
        <h2>Marble Bucket</h2>
        <div className='selectedDisplay'>
          <h3>Selected Marble:</h3>
          <div className={this.state.selectedMarble} id='selectedMarble'></div>
        </div>

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