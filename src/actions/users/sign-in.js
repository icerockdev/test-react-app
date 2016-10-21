import {camelizeKeys} from "humps";
import {navigate} from "../../actions/route";

export const REQUEST_SIGN_IN = 'REQUEST_SIGN_IN';
export const RECEIVE_SIGN_IN = 'RECEIVE_SIGN_IN';
export const FAILURE_SIGN_IN = 'FAILURE_SIGN_IN';

export function requestSignInDoctorAction(data) {
    return function (dispatch, getState) {
        console.log(data);
        dispatch({
            type: REQUEST_SIGN_IN
        });
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        fetch('http://iconnect.getsandbox.com/signin', {method: 'POST', headers: headers, body: JSON.stringify(data)})
            .then(response => response.json().then(json => ({json, response})))
            .then(({json, response}) => {
                if (!response.ok) {
                    return Promise.reject(json)
                }
                dispatch(receiveSignInDoctorAction(camelizeKeys(json)));
            })
            .catch(json => {
                dispatch(failureSignInDoctorAction(json.message));
            });
    }
}

function receiveSignInDoctorAction(payload) {
    return function (dispatch, getState) {
        dispatch({
            type: RECEIVE_SIGN_IN,
            payload
        });
        dispatch(navigate('/'));
    }
}

function failureSignInDoctorAction(payload) {
    // TODO: Print Errors
    return {
        type: FAILURE_SIGN_IN,
        payload
    };
}
