import { createStore, combineReducers, applyMiddleware } from 'redux';
import issues from './issues';

import thunk from 'redux-thunk';

const rootReducer = (combineReducers({ issues }));

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
})

export default store;