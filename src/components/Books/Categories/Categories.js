import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAction } from '../../redux/Categories/Categories';

const Categories = () => {
  const dispatch = useDispatch();
  const handleStatus = (e) => {
    e.preventDefault();
    dispatch(checkAction());
  };
  const statusCheck = useSelector((state) => state.CategoriesReducer);
  return (
    <div>
      <h1>check status</h1>
      <p>
        <button className="add-book-btn" type="button" onClick={handleStatus}>
          Check status
        </button>
      </p>
      <div>{statusCheck}</div>
    </div>
  );
};

export default Categories;
