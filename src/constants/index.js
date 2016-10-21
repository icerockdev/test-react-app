/* eslint-disable import/prefer-default-export */

export const ACTION_STATUS_STARTED = 'ACTION_STATUS_STARTED';
export const ACTION_STATUS_CONFIRMED = 'ACTION_STATUS_CONFIRMED';
export const ACTION_STATUS_FINISHED = 'ACTION_STATUS_FINISHED';
export const ACTION_STATUS_CANCELED = 'ACTION_STATUS_CANCELED';

export const BASE_REQUEST_STATUSES = {
    [ACTION_STATUS_STARTED]: false,
    [ACTION_STATUS_CONFIRMED]: false,
    [ACTION_STATUS_FINISHED]: false,
    [ACTION_STATUS_CANCELED]: false,
};

export const DEFAULT_STATE_USER = {
    isFetching: false,
    actions: {
        signin: BASE_REQUEST_STATUSES,
        signup: BASE_REQUEST_STATUSES,
    }
};


export const SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';
export const REQUEST_SIGN_IN = 'REQUEST_SIGN_IN';
export const RECEIVE_SIGN_IN = 'RECEIVE_SIGN_IN';
export const FAILURE_SIGN_IN = 'FAILURE_SIGN_IN';
