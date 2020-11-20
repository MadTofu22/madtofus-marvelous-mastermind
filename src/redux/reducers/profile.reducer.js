const profile = (state = {}, action) => {
    switch (action.type) {
        default:
            return {
                username: 'Guest',
                avatar_url: 'assets/images/default_avatar.jpg'
            };
        case 'SET_PROFILE':
            return action.payload;
    }
}

export default profile;