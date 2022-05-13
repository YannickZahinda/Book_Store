const ADD_BOOK = 'BookStore/Books/ADD_BOOK';
const REMOVE_BOOK = 'BookStore/Books/REMOVE_BOOK';

const myBooksArray = [];

const BookReducer = (state = myBooksArray, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.book,
      ];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const addingBook = (book) => ({ type: ADD_BOOK, book });
export const removingBook = (id) => ({ type: REMOVE_BOOK, id });

export default BookReducer;
