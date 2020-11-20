const profile = (state = {}, action) => {
    switch (action.type) {
        default:
            return state;
        case 'SET_PROFILE':
            return action.payload;
    }
}

export default profile;