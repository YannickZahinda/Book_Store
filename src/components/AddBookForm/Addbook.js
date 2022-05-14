import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBookApi } from '../../redux/book/books';
import './addBook.css';

const AddBook = () => {
  const dispatch = useDispatch();

  const handleBookAdded = (e) => {
    e.preventDefault();
    const [title, author] = e.target.elements;
    if (title.value.trim() && author.value.trim()) {
      const bookObj = {
        item_id: v4(),
        title: title.value.trim(),
        author: author.value.trim(),
        category: 'default',
      };
      dispatch(addBookApi(bookObj));
      title.value = '';
      author.value = '';
      title.focus();
    }
  };

  return (
    <div className="add-book flex flex--column">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleBookAdded} action="/" className="add-book-form flex">
        <input id="title" name="title" type="text" className="input input--text" placeholder="Book title" required />
        <input type="text" id="author" name="author" className="input input--text" placeholder="author" required />
        <button type="submit" className="btn btn--primary">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBook;