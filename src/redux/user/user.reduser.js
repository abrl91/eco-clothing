import { UserActionTypes } from './user.types';
// reduser - a function that gets 2 properties: 1) current state  2) action: { type: string, payload: any }
const INITIAL_STATE = {
    currentUser: null
};

// reduser gets all the actions, therefore in the switch we need default case
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;
