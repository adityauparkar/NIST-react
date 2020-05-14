import { UPDATE_RESULT, CLEAR_RESULT } from "../actions/types";

const INITIAL_STATE = null;

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CLEAR_RESULT:
            return INITIAL_STATE;
        case UPDATE_RESULT:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
