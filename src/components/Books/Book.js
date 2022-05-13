import { removingBook } from "../../redux/Books/Books";
import { useDispatch } from "react-redux";
const Book = (props) => {
  return (
    <>
      <div>
        <div>
          {" "}
          <span className="title">{props.myBook.title}</span> <br />{" "}
          {props.myBook.author}
        </div>
      </div>
      <div>
        <div className="statistics" />
        100%
      </div>
      <CurrentChapter />
      <Buttons data = {props.myBook} />
    </>
  );
};

const Buttons = (props) => {
  const dispatch = useDispatch();
  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removingBook(props.data.id));
    
  };
  return(
  <ul className="buttons">
    <li>
      <button type="button">Comments</button>{" "}
    </li>
    <li>
      <button type="button" onClick={handleRemove}>Delete</button>
    </li>
    <li>
      <button type="button">Edit</button>
    </li>
  </ul>
)};

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
