import ActionTypes from './actionTypes';

export const getRates = () => ({
    type: ActionTypes.GET_RATES
})

export const getRatesFulfilled = rates => ({
    type: ActionTypes.GET_RATES_FULFILLED,
    rates
})

export const getRatesError = error => ({
    type: ActionTypes.GET_RATES_ERROR,
    error
})
