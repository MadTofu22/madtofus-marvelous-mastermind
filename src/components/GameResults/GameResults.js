import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ResultsRow from './ResultsRow/ResultsRow';

class GameResults extends Component {

  render() {
    return (
      <div className='gameSidePanel'>
        <h2>Guess Results</h2>
        {this.props.store.game.results.map((row, index) => {
          return <ResultsRow className='resultsRowContainer' index={index} row={row} key={index} />
        })}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(GameResults);