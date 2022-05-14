import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch } from 'react-redux';
import { removeBookApi } from '../../redux/book/books';
import './book.css';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleBookRemoved = (id) => {
    dispatch(removeBookApi(id));
  };

  return (
    <div className="book flex">
      <div className="book-details flex flex--column">
        <p className="text-category">{book.category}</p>
        <h2 className="text-title">{book.title}</h2>
        <p className="text-secondary">{book.author}</p>
        <ul className="nav nav--buttons">
          <li>
            <button type="button" className="btn btn--text text-secondary">
              Comments
            </button>
          </li>
          <li>
            <button onClick={() => handleBookRemoved(book.item_id)} type="button" className="btn btn--text text-secondary l-r-border">
              Remove
            </button>
          </li>
          <li>
            <button type="button" className="btn btn--text text-secondary">
              Edit
            </button>
          </li>
        </ul>
      </div>
      <div className="book-status flex">
        <CircularProgress
          sx={{
            color: 'var(--clr-azure)',
          }}
          size={75}
          variant="determinate"
          value={65}
        />

        <div className="complete-status flex flex--column">
          <span className="percent">64%</span>
          <p className="text-gray">Completed</p>
        </div>
      </div>
      <div className="book-chapter flex flex--column">
        <div className="chapter-title flex flex--column">
          <p className="text-chapter">CURRENT CHAPTER</p>
          <p className="text-chapter-title">Chapter 17</p>
        </div>
        <button type="button" className="btn btn--primary">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

export default Book;