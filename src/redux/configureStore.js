import { applyMiddleware, combineReducers, createStore } from 'redux';
import CategoriesReducer from './Categories/Categories';
import BookReducer from './Books/Books';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ CategoriesReducer, BookReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
