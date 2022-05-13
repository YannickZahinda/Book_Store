import { combineReducers, createStore } from 'redux';
import CategoriesReducer from './Categories/Categories';
import BookReducer from './Books/Books';

const rootReducer = combineReducers({ CategoriesReducer, BookReducer });
const store = createStore(rootReducer);

export default store;