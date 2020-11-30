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

    handleLinkToProfile = (username) => {
        this.props.dispatch({
            type: "FETCH_PROFILE",
            payload: username,
          });
        this.props.history.push(`/profile/${username}`);
    }

    render () {
        return (
            <section className='leaderboardDisplayWrapper'>
                <h1>Leaderboard</h1>
                <div className='leaderboardTable'>
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
                                    <tr key={this.props.store.leaderboard.indexOf(user)}>
                                        <td>{this.props.store.leaderboard.indexOf(user)+1}</td>
                                        <td onClick={() => this.handleLinkToProfile(user.username)}>{user.username}</td>
                                        <td>{user.total_wins}</td>
                                        <td>{user.total_losses}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </section> 
        );
    }
}

export default connect(mapStoreToProps)(LeaderboardDisplay);