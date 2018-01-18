import { createStore, combineReducers } from 'redux';

//reducers
import task1 from './task1';

const rootReducer = combineReducers({
    task1
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());