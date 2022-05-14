import axios from 'axios';

const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xaY3K9Tl6KXKHMlQWznL/';
const BOOK_ADDED = 'bookstore/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookstore/books/BOOK_REMOVED';

const initialState = [];
const onSuccess = (books) => ({
  type: FETCH_BOOKS,
  payload: books,
});

export const fetchBookApiAction = () => async (dispatch) => {
  const response = await axios.get(`${baseURL}books`);
  const booksFetched = Object.entries(response.data).map((item) => {
    const { title, author, category } = item[1][0];
    return {
      item_id: item[0],
      title,
      author,
      category,
    };
  });
  dispatch(onSuccess(booksFetched));
};

const bookAddedAction = (book) => ({
  type: BOOK_ADDED,
  payload: {
    item_id: book.item_id,
    title: book.title,
    author: book.author,
    category: book.category,
  },
});

export const addBookApi = (book) => async (dispatch) => {
  await axios.post(`${baseURL}books`, book, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  dispatch(bookAddedAction(book));
};

export const bookRemovedAction = (id) => ({
  type: BOOK_REMOVED,
  payload: {
    item_id: id,
  },
});

export const removeBookApi = (id) => async (dispatch) => {
  await axios.delete(`${baseURL}books/${id}`);
  dispatch(bookRemovedAction(id));
};

const booksReducer = (state = initialState, action) => {
  let newState = [];
  if (action.type === BOOK_ADDED) {
    newState = [...state, action.payload];
  } else if (action.type === BOOK_REMOVED) {
    newState = state.filter((book) => book.item_id !== action.payload.item_id);
  } else if (action.type === FETCH_BOOKS) {
    newState = action.payload;
  } else {
    newState = state;
  }

  return newState;
};

export default booksReducer;
