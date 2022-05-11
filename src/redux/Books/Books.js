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
        books: state.filter((book) => book.id !== action.type),
      };
    default: return state;
  }
};

export const addingBook = (book) => ({ type: ADD_BOOK, book });
export const removingBook = (id) => ({ type: REMOVE_BOOK, id });

export default BookReducer;
