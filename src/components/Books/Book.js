import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeFromApi } from '../../redux/Books/Books';

const Book = ({ title, author, item_id }) => (
  <>
    <div>
      <div>
        {' '}
        <span className="title">{title}</span>
        {' '}
        <br />
        {' '}
        {/* {props.myBook.author} */}
        {author}
      </div>
    </div>
    <div>
      <div className="statistics" />
      100%
    </div>
    <CurrentChapter />
    <Buttons id={item_id} />
  </>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  item_id: PropTypes.number.isRequired,
};

const Buttons = ({id}) => {
  const dispatch = useDispatch();
  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeFromApi(id));
  };
  return (
    <ul className="buttons">
      <li>
        <button type="button">Comments</button>
        {' '}
      </li>
      <li>
        <button type="button" onClick={handleRemove}>Delete</button>
      </li>
      <li>
        <button type="button">Edit</button>
      </li>
    </ul>
  );
};

Buttons.propTypes = {
  id: PropTypes.string.isRequired,
};

const CurrentChapter = () => (
  <div className="current_chapter">
    <h3>CURRENT CHAPTER</h3>
    <p>Chapter 17</p>
    <button type="button" className="update-btn">
      UPDATE PROGRESS
    </button>
  </div>
);

export default Book;
