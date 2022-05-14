import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './book/books';
import categoriesReducer from './Categories/Categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;