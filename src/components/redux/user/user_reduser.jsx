import { UserActionTypes } from "./user_types";

const INITIAL_STATE = {
    currUser: null
}

const user_reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currUser: action.payload
            }
        default:
            return state;
    }
}

export default user_reducer;