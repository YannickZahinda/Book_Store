import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addBookToApi } from "../../redux/Books/Books";

const AddBookForm = () => {
  const dispatch = useDispatch();
  const handleBookAdded = (e) => {
    e.preventDefault();
    const [title, author] = e.target.elements;
    const bookObject = {
      item_id: v4(),
      title: title.value.trim(),
      author: author.value.trim(),
      category: 'fiction'
    };
    dispatch(addBookToApi(bookObject));
      title.value = "";
      author.value = "";
      title.focus();
  };
  return (
    <form onSubmit={handleBookAdded} id="my-form">
      <h1>Add Book</h1>
      <input id="author" name="author" type="text" placeholder="Author" required />
      <input id="title" name="title" type="text" placeholder="Title" required />
      <select>
        <option>CATEGORIES</option>
      </select>
      <button type="submit" className="add-book-btn">
        ADD BOOK{" "}
      </button>
    </form>
  );
};

export default AddBookForm;
