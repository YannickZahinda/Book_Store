const ADD_BOOK = "BookStore/Books/ADD_BOOK";
const REMOVE_BOOK = "BookStore/Books/REMOVE_BOOK";

const myBooksArray = [
  {
    id: 1,  
    title: "Montagne du tonerre",
    author: "Barbara Carthland",
  },
  {
    id: 2,  
    title: "Seduction Mortelle",
    author: "Boris Zirag",
  },
  {
    id: 3,  
    title: "Concerto du Souvenir",
    author: "Harlequin",
  },
];

const BookReducer = (state = myBooksArray, action) => {
  switch (action.type) {
    case ADD_BOOK:
      //   return {
      //     ...state,
      //     books: [state.title, state.author, action.type],
      //   };
      let newState = [...state];
      return {
          newState,
          books: [newState.filter(book => book), action.type]
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.filter((book) => book.id !== action.type),
      };
    default:
      return state;
  }
};

export const addingBook = (book) => ({ type: ADD_BOOK, book });
export const removingBook = (id) => ({ type: REMOVE_BOOK, id });

export default BookReducer;
