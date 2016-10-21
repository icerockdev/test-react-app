import {combineReducers} from "redux-immutable";
import {fromJS} from "immutable";

export default combineReducers({
    user
});

function user(state = fromJS({}), action) {
    switch (action.type) {

        default:
            return state;
    }
}