import { rates } from './index';
import ActionTypes from '../actions/actionTypes';

describe('rates reducer', () => {
    it('should update rates with new values', () => {
        expect(
            rates({ 
                rates: { GBP: 1.2 }
            }, {
                type: ActionTypes.GET_RATES_FULFILLED,
                rates: { PLN: 3.7 }
            })
        ).toEqual({
            rates: { PLN: 3.7 }
        })
    })
})
