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

export const setAmount = amount => ({
    type: ActionTypes.SET_AMOUNT,
    amount
})

export const setCurrency = currency => ({
    type: ActionTypes.SET_CURRENCY,
    currency
})

export const getArchivedRates = (currency, startDate, endDate) => ({
    type: ActionTypes.GET_ARCHIVED_RATES,
    currency,
    startDate,
    endDate
})

export const getArchivedRatesFulfilled = (startRate, endRate) => ({
    type: ActionTypes.GET_ARCHIVED_RATES_FULFILLED,
    startRate,
    endRate
})

export const getArchivedRatesError = error => ({
    type: ActionTypes.GET_ARCHIVED_RATES_ERROR,
    error
})
 