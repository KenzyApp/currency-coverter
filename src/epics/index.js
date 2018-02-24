import ActionTypes from '../actions/actionTypes';
import { 
    getRatesFulfilled, 
    getRatesError,
    getArchivedRatesFulfilled,
    getArchivedRatesError 
} from '../actions';
import { combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs/Observable';

const getRatesEpic = action$ =>
    action$.ofType(ActionTypes.GET_RATES)
        .mergeMap(action => ajax.getJSON('https://api.fixer.io/latest?base=SEK'))
        .map(response => getRatesFulfilled(response.rates))
        .catch(error => getRatesError(error.xhr));

const fetchStartRate = action => ajax.getJSON(`https://api.fixer.io/${action.startDate}?base=SEK`);
const fetchEndRate = action => ajax.getJSON(`https://api.fixer.io/${action.endDate}?base=SEK`);

const getArchivedRatesEpic = action$ =>
    action$.ofType(ActionTypes.GET_ARCHIVED_RATES)
        .mergeMap(action => Observable.forkJoin([
                fetchStartRate(action),
                fetchEndRate(action),
                Observable.of(action.currency)
            ])
        )
        .map(response => {
            const currency = response[2];
            const startRate = response[0].rates[currency];
            const endRate = response[1].rates[currency];
            return getArchivedRatesFulfilled(startRate, endRate)
        })
        .catch(error => getArchivedRatesError(error.xhr));

export default combineEpics(
    getRatesEpic,
    getArchivedRatesEpic
); 

