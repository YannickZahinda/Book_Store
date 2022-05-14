import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../Books/Book';
import '../styles/home.css';
import AddBookForm from '../AddBookForm/Addbook';
import { getBookApi } from '../../redux/Books/Books';

const Books = () => {
  const bookList = useSelector((state) => state.BookReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookApi())
  }, [])
  return (
    <div className="container">
      <ul>

        {
      bookList.length ? bookList.map((book) => <li key={book.item_id} className="book"><Book title={book.title} author={book.author} id={book.item_id} /></li>) : <p>No books</p>
      }
      </ul>
      <AddBookForm />
    </div>
  );
};

export default Books;
// widgets.js
