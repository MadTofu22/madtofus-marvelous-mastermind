const leaderboard = (state = [], action) => {
    switch (action.type) {
        default: 
            return state;
        case ('SET_RANKS'):
            return action.payload;
    }
}

export default leaderboard;