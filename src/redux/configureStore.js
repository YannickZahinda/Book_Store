import { combineReducers, createReducer } from '@reduxjs/toolkit';
import CategoriesReducer from './Categories/Categories';
import BookReducer from './Books/Books';

const rootReducer = combineReducers({ CategoriesReducer, BookReducer });
const Store = createReducer(rootReducer);

export default { rootReducer, Store };
