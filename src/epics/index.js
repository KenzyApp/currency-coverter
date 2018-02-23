import ActionTypes from '../actions/actionTypes';
import { getRatesFulfilled, getRatesError } from '../actions';
import { combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';

const getRatesEpic = action$ =>
    action$.ofType(ActionTypes.GET_RATES)
        .mergeMap(action => ajax.getJSON('https://api.fixer.io/latest?base=SEK'))
        .map(response => getRatesFulfilled(response.rates))
        .catch(error => getRatesError(error.xhr));


export default combineEpics(
    getRatesEpic
); 

