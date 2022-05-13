import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addingBook } from '../../redux/Books/Books';

const AddBookForm = () => {
  const dispatch = useDispatch();
  const handleBookAdded = (e) => {
    e.preventDefault();
    const [title, author] = e.target.elements;
    const bookObject = {
      id: v4(),
      title: title.value,
      author: author.value,
    };

    dispatch(addingBook(bookObject));
    title.value = '';
    author.value = '';
  };
  return (
    <form onSubmit={handleBookAdded} id="my-form">
      <h1>Add Book</h1>
      <input id="author" type="text" placeholder="Author" />
      <input id="title" type="text" placeholder="Title" />
      <select>
        <option>CATEGORIES</option>
      </select>
      <button type="submit" className="add-book-btn">ADD BOOK </button>
    </form>
  );
};

export default AddBookForm;
