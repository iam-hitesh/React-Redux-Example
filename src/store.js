import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from "./reducers";

let middleware;
console.log(process.env.NODE_ENV)
if (process && process.env && (process.env.NODE_ENV === 'production')) {
    middleware = applyMiddleware(thunk, promise);
} else {
    middleware = applyMiddleware(thunk, promise, logger);
}


const store = createStore(rootReducer, middleware);

export default store;