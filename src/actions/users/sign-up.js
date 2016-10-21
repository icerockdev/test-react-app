import {camelizeKeys} from "humps";
import {navigate} from "../../actions/route";

export const REQUEST_SIGN_UP = 'REQUEST_SIGN_UP';
export const RECEIVE_SIGN_UP = 'RECEIVE_SIGN_UP';
export const FAILURE_SIGN_UP = 'FAILURE_SIGN_UP';

export function requestSignUpDoctorAction(data) {
    return function (dispatch, getState) {
        console.log(data);
        dispatch({
            type: REQUEST_SIGN_UP
        });
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        fetch('http://iconnect.getsandbox.com/signup', {method: 'POST', headers: headers, body: JSON.stringify(data)})
            .then(response => response.json().then(json => ({json, response})))
            .then(({json, response}) => {
                if (!response.ok) {
                    return Promise.reject(json)
                }
                dispatch(receiveSignUpDoctorAction(camelizeKeys(json)));
            })
            .catch(json => {
                dispatch(failureSignUpDoctorAction(json.message));
            });
    }
}

function receiveSignUpDoctorAction(payload) {
    return function (dispatch, getState) {
        dispatch({
            type: RECEIVE_SIGN_UP,
            payload
        });
        dispatch(navigate('/login'));
    }
}

function failureSignUpDoctorAction(payload) {
    // TODO: Print Errors
    return {
        type: FAILURE_SIGN_UP,
        payload
    };
}

