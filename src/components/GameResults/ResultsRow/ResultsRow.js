import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

class ResultsRow extends Component {

  state = {
    redCount: this.props.store.game.correctMarbles
  }

  formatRedIndicators = () => {
    console.log('in formatRedIndicators');
    const correctMarbleCount = this.props.row.correctMarbles;
    let returnText = null;
    
    for(let i=0; i<correctMarbleCount; i++) {
      returnText += <div className='resultsIndicator red'></div>
    }
    return returnText;
  }

  render() {
    return (
      <>
        {JSON.stringify(this.formatRedIndicators)}
      </>
    );
  }
}

export default connect(mapStoreToProps)(ResultsRow);