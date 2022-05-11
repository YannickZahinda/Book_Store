const ADD_BOOK = 'BookStore/Books/ADD_BOOK';
const REMOVE_BOOK = 'BookStore/Books/REMOVE_BOOK';

const BookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [state.title, state.author, action.type],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.filter((book) => book.title !== action.type),
      };
    default: return state;
  }
};

export const addingBook = (book) => ({ type: ADD_BOOK, book });
export const removingBook = (title) => ({ type: REMOVE_BOOK, title });

export default BookReducer;
