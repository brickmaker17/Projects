import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import coins from './coins';

const rootReducer = combineReducers({ coins });
let store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
    console.log(store.getState());
});
export default store;