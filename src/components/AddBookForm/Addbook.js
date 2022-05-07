const AddBookForm = () => (
  <form id="my-form">
    <h1>Add Book</h1>
    <input type="text" placeholder="Author" />
    <input type="text" placeholder="Title" />
    <select>
      <option>CATEGORIES</option>
    </select>
    <button type="button" className="add-book-btn">ADD BOOK</button>
  </form>
);

export default AddBookForm;
