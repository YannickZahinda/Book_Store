import { combineReducers, createReducer } from '@reduxjs/toolkit';
import CategoriesReducer from './categories/Categories';
import BookReducer from './Books/Books';

const rootReducer = combineReducers({ CategoriesReducer, BookReducer });
const store = createReducer(rootReducer);

export default { rootReducer, store };
