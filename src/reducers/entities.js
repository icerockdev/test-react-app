import {combineReducers} from "redux-immutable";
import {fromJS} from "immutable";
import {RECEIVE_SIGN_IN} from "../actions/users/sign-in";

export default combineReducers({
    user
});

function user(state = fromJS({}), action) {
    switch (action.type) {
        case RECEIVE_SIGN_IN:
            return fromJS(action.payload);
        default:
            return state;
    }
}