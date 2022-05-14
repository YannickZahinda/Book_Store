import axios from "axios";

const BOOK_FETCHED = 'BookStore/Books/BOOK_FETCHED'
const ADD_BOOK = "BookStore/Books/ADD_BOOK";
const REMOVE_BOOK = "BookStore/Books/REMOVE_BOOK";

const url =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xaY3K9Tl6KXKHMlQWznL/";
const myBooksArray = [];
const bookAddedSuccess = (book) => ({
  type: BOOK_FETCHED,
  payload: book,
});

//Get books from the api action
export const getBookApi = () => async (dispatch) => {
  const response = await axios.get(`${url}books`);
  const fetchedBook = Object.entries(response.data).map((item) => {
    const { author, title } = item[1][0];
    return {
      item_id: item[0],
      author,
      title,
      category: 'fiction'
    };
  });
  dispatch(bookAddedSuccess(fetchedBook));
};
//Book Reducer
const BookReducer = (state = myBooksArray, action) => {
  let newBookState = [];
  // switch (action.type) {
  //   case ADD_BOOK:
  //     return [...state, action.payload];

  //   case REMOVE_BOOK:
  //     return state.filter((book) => book.item_id !== action.payload.item_id);
  //   case BOOK_FETCHED:
  //     return newBookState = action.payload 
  //   default:
  //     return newBookState = state;
  // }
  if(action.type === ADD_BOOK){
    [...state, action.payload]
  }else if (action.type === REMOVE_BOOK){
    state.filter((book) => book.item_id !== action.payload.item_id);
  }else if(action.type === BOOK_FETCHED){
    newBookState = action.payload 
  }else{
    newBookState = state
  }
  return newBookState;
};

//add book action
export const addingBook = (book) => ({
  type: ADD_BOOK,
  payload: {
    item_id: book.item_id,
    title: book.title,
    author: book.author,
    category: 'fiction'
  },
});
//remove book action
export const removingBook = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    item_id : id,
  }
  
});

//Add a book to the api
export const addBookToApi = (book) => async (dispatch)=>{
  await axios.post(`${url}books`, book, {
    headers: {
      'Content-type' : 'application/json',
    },
  })
  dispatch(addingBook(book))
}

//remove from api
export const removeFromApi = (id) => async (dispatch) => {
  await axios.delete(`${url}books/${id}`)
  dispatch(removingBook(id));
}

export default BookReducer;
