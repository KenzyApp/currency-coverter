import { app } from './index';
import ActionTypes from '../actions/actionTypes';

describe('app reducer', () => {
    it('should return the initial state', () => {
        expect(app(undefined, {})).toEqual({
            gettingRates: true,
            gettingArchivedRates: false,
            amount: 0,
            currency: null
        })
    })

    it('should properly set amount', () => {
        expect(
            app({}, {
                type: ActionTypes.SET_AMOUNT,
                amount: 20
            })
        ).toEqual({
            amount: 20
        })
    });

    it('should properly set currency', () => {
        expect(
            app({}, {
                type: ActionTypes.SET_CURRENCY,
                currency: 'PLN'
            })
        ).toEqual({
            currency: 'PLN'
        })
    })

    it('should cancel loading on request error', () => {
        expect(
            app({}, {
                type: ActionTypes.GET_ARCHIVED_RATES_ERROR,
                err: 'error'
            })
        ).toEqual({
            gettingArchivedRates: false
        })
    })

    it('should set loading flag on request start', () => {
        expect(
            app({}, {
                type: ActionTypes.GET_RATES
            })
        ).toEqual({
            gettingRates: true
        })
    })

});
