import React from 'react';
import Book from '../Books/Book';
import '../styles/home.css';
import AddBookForm from '../AddBookForm/Addbook';

const Books = () => (
  <div className="container">
    <ul>
      <li className="book"><Book /></li>
      <li className="book"><Book /></li>
      <li className="book"><Book /></li>
    </ul>
    <AddBookForm />
  </div>
);

export default Books;
// widgets.js
