import ActionTypes from '../actions/actionTypes';
import { combineReducers } from 'redux';

const initialAppState = {
    gettingRates: true,
    gettingArchivedRates: false,
    amount: 0,
    currency: null
}

const app = (state=initialAppState, action) => {
    switch(action.type) {
        case ActionTypes.GET_RATES: 
            return {
                ...state,
                gettingRates: true
            }
        case ActionTypes.GET_RATES_FULFILLED:
        case ActionTypes.GET_RATES_ERROR:
            return {
                ...state,
                gettingRates: false
            }
        case ActionTypes.GET_ARCHIVED_RATES:
            return {
                ...state,
                gettingArchivedRates: true
            }
        case ActionTypes.GET_ARCHIVED_RATES_FULFILLED:
        case ActionTypes.GET_ARCHIVED_RATES_ERROR:
            return {
                ...state,
                gettingArchivedRates: false
            }
        case ActionTypes.SET_AMOUNT: 
            return {
                ...state,
                amount: action.amount
            }
        case ActionTypes.SET_CURRENCY:
            return {
                ...state,
                currency: action.currency
            }
        default:
            return state;
    }
}

const rates = (state={}, action) => {
    switch(action.type) {
        case ActionTypes.GET_RATES_FULFILLED:
            return {
                ...state,
                rates: action.rates
            };
        case ActionTypes.GET_ARCHIVED_RATES_FULFILLED:
            return {
                ...state,
                startRate: action.startRate,
                endRate: action.endRate
            }
        default:
            return state;
    }
}

const errors = (state=null, action) => {
    switch(action.type) {
        case ActionTypes.GET_RATES:
        case ActionTypes.GET_RATES_FULFILLED:
        case ActionTypes.GET_ARCHIVED_RATES:
        case ActionTypes.GET_ARCHIVED_RATES_FULFILLED:
            return null;
        case ActionTypes.GET_RATES_ERROR:
        case ActionTypes.GET_ARCHIEVD_RATES_ERROR:
            return action.error
        default:
            return state;
    }
}

export default combineReducers({
    app,
    rates,
    errors
})