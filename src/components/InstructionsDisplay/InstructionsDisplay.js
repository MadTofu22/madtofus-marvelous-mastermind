import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import './InsctructionsDisplay.css'

class InstructionsDisplay extends Component {
    
    render () {
        return (
            <div id='instructionsDisplayWrapper'>
                <div className='instructionsColumnContainer'>
                    <h2>Game Instructions</h2>
                    <h3>The goal of this game is to guess the hidden code of 4 color marbles. You have 8 total Guesses to match the hidden code!</h3>
                    <ol className='instructionsList'>
                        <li>Select one of the 6 marbles from the Marble Bucket on the right.</li>
                        <li>Add the marble to one of the 4 guess slots in the top most row of the Guesses section.</li>
                        <li>When all 4 slots are filled for the first guess row click on the Check Guess button below the Marble Bucket.</li>
                        <li>Check the Guess Results!
                            <ul>
                                <li>
                                    Each red dot indicates a marble is in the correct slot.
                                </li>
                                <li>
                                    Each white dot indicates a marbles color is correct, but not in the correct spot.
                                </li>
                            </ul>
                        </li>
                        <li>Repeat steps 1-4 until all 8 Guesses have been attempted, or you get the correct code!</li>
                        <ul>
                            <li>
                                If you are a logged in User, your win/loss record will be updated to reflect this game.
                            </li>
                        </ul>
                    </ol>

                    <h4>At any time you may select New Game to start over.</h4>
                    
                </div>
            </div> 
        );
    }
}

export default connect(mapStoreToProps)(InstructionsDisplay);