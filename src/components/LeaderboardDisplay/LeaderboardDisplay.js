import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import './LeaderboardDisplay.css';

class LeaderboardDisplay extends Component {

    componentDidMount () {
        this.getRanks();
    }

    getRanks = () => {
        this.props.dispatch({type: 'FETCH_RANKS'})
    }

    render () {
        return (
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Username</th>
                            <th>Wins</th>
                            <th>Losses</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.store.leaderboard.map(user => {
                            return (
                                <tr>
                                    <td>{this.props.store.leaderboard.indexOf(user)}</td>
                                    <td>{user.username}</td>
                                    <td>{user.total_wins}</td>
                                    <td>{user.total_losses}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </section> 
        );
    }
}

export default connect(mapStoreToProps)(LeaderboardDisplay);