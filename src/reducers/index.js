import {combineReducers} from "redux-immutable";
import entities from "./entities";
import state from "./state";
import meta from "./meta";

export default combineReducers({
    entities,
    state,
    meta
});
