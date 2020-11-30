import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

class ResultsRow extends Component {

  state = {
    redCount: this.props.store.game.correctMarbles
  }

  getRowIndicators = () => {
    const redCount = this.props.row.correctMarbles;
    const whiteCount = this.props.row.correctColors;
    let row = [];

    for(let i=0; i<redCount; i++) {
      row.push('red');
    }
    for(let i=0; i<whiteCount; i++) {
      row.push('white');
    }

    return row;
  }

  // This function generates the empty row text if there are no matching results
  getEmptyRowText = (currentRow, lastGuess) => {
    if (currentRow < lastGuess && lastGuess > 0) {
      return <h3 className='resultsLabel'>No Matches</h3>
    } else {
      return <h3 className='resultsLabel'> </h3>
    }
  }

  render() {
    const rowIndicators = this.getRowIndicators();
    return (
      <div className='resultsRowContainer'>
        {rowIndicators.length >= 1 ?
        rowIndicators.map((color, index) => {
          return (<div className={`resultsIndicator ${color}Peg`} key={index}></div>);
        })
        :
        this.getEmptyRowText(this.props.index, this.props.store.game.currentGuess-1)
        }
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ResultsRow);