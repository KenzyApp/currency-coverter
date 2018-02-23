import ActionTypes from '../actions/actionTypes';
import { combineReducers } from 'redux';

const initialState = {
    rates: {},
    gettingRates: false,
}

const app = (state=initialState, action) => {
    switch(action.type) {
        case ActionTypes.GET_RATES:
            return {
                ...state,
                gettingRates: true
            }
        case ActionTypes.GET_RATES_FULFILLED:
            return {
                ...state,
                gettingRates: false,
                rates: action.rates
            }
        default:
            return state;
    }
}

const appError = (state=null, action) => {
    switch(action.type) {
        case ActionTypes.GET_RATES:
        case ActionTypes.GET_RATES_FULFILLED:
            return null;
        case ActionTypes.GET_RATES_ERROR:
            return action.error
        default:
            return state;
    }
}

export default combineReducers({
    app,
    appError
})