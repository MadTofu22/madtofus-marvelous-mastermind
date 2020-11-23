import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

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
                {JSON.stringify(this.props.store.leaderboard)}
            </section> 
        );
    }
}

export default connect(mapStoreToProps)(LeaderboardDisplay);