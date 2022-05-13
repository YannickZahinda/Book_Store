import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../Books/Book';
import '../styles/home.css';
import AddBookForm from '../AddBookForm/Addbook';

const Books = () => {
  const bookList = useSelector((state) => state.BookReducer);
  return (
    <div className="container">
      <ul>

        {
      bookList.length ? bookList.map((book) => <li key={book.id} className="book"><Book title={book.title} author={book.author} id={book.id} /></li>) : <p>No books</p>
      }
      </ul>
      <AddBookForm />
    </div>
  );
};

export default Books;
