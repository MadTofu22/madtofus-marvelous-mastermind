import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

class ResultsRow extends Component {

  state = {
    redCount: this.props.store.game.correctMarbles
  }

  formatRedIndicators = () => {
    const correctMarbleCount = this.props.row.correctMarbles;
    let returnText = null;
    
    for(let i=0; i<correctMarbleCount; i++) {
      returnText += <div className='resultsIndicator red'></div>
    }
    console.log('in formatRedIndicators, returnText=', returnText);
    return returnText;
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

  render() {
    const rowIndicators = this.getRowIndicators();
    return (
      <>
        {rowIndicators.map((color, index) => {
          return (<div className={`resultsIndicator ${color}Peg`} key={index}></div>);
        })}
      </>
    );
  }
}

export default connect(mapStoreToProps)(ResultsRow);