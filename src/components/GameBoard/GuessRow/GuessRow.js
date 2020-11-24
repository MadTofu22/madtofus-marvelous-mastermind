import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

class GuessRow extends Component {

	render () {
		return (
			<div className='guessRowContainer'>
                {this.props.rowMatrix.map((marble, index) => {
                    return (
                        <div 
                            key={`row${this.props.rowNumber}_slot${index}`}
                            className={`guessRowSlot ${marble}`}
                            id={`row${this.props.rowNumber}_slot${index}`}>

                        </div>
                )})}
			</div>
		);
	}
}

export default connect(mapStoreToProps)(GuessRow);