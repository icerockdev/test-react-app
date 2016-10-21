import {combineReducers} from "redux-immutable";
import {DEFAULT_STATE_USER, BASE_REQUEST_STATUSES, ACTION_STATUS_STARTED, ACTION_STATUS_FINISHED} from "../constants";
import {fromJS} from "immutable";
import {REQUEST_SIGN_IN, RECEIVE_SIGN_IN, FAILURE_SIGN_IN} from "../actions/users/sign-in";
import {REQUEST_SIGN_UP, RECEIVE_SIGN_UP, FAILURE_SIGN_UP} from "../actions/users/sign-up";

export default combineReducers({
    user
});

function user(state = fromJS(DEFAULT_STATE_USER), action) {
    switch (action.type) {
        case REQUEST_SIGN_IN:
        case RECEIVE_SIGN_IN:
        case FAILURE_SIGN_IN:
            return signInReducer(state, action);
        case REQUEST_SIGN_UP:
        case RECEIVE_SIGN_UP:
        case FAILURE_SIGN_UP:
            return signUpReducer(state, action);
        default:
            return state;
    }
}

function signInReducer(state, action) {
    switch (action.type) {
        case REQUEST_SIGN_IN:
            return state.set('isFetching', true).setIn(['actions', 'signin'], makeActionStatus(ACTION_STATUS_STARTED));
        case RECEIVE_SIGN_IN:
            return state.set('isFetching', false).setIn(['actions', 'signin'], makeActionStatus(ACTION_STATUS_FINISHED));
        case FAILURE_SIGN_IN: // TODO: Print Errors
            return state.set('isFetching', false).setIn(['actions', 'signin'], makeActionStatus(ACTION_STATUS_FINISHED));
        default:
            return state;
    }
}

function signUpReducer(state, action) {
    switch (action.type) {
        case REQUEST_SIGN_UP:
            return state.set('isFetching', true).setIn(['actions', 'signup'], makeActionStatus(ACTION_STATUS_STARTED));
        case RECEIVE_SIGN_UP:
            return state.set('isFetching', false).setIn(['actions', 'signup'], makeActionStatus(ACTION_STATUS_FINISHED));
        case FAILURE_SIGN_UP: // TODO: Print Errors
            return state.set('isFetching', false).setIn(['actions', 'signup'], makeActionStatus(ACTION_STATUS_FINISHED));
        default:
            return state;
    }
}

export function makeActionStatus(status) {
    let statuses = {...BASE_REQUEST_STATUSES};
    statuses[status] = true;
    return fromJS(statuses);
}
