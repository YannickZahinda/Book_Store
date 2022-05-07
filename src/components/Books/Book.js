const Book = () => (
  <>
    <div>
      <div>
        {' '}
        <span className="title">Montagne </span>
        {' '}
        <br />
        {' '}
        Barbara
        <Buttons />
      </div>

    </div>
    <div>
      <div className="statistics" />
      100%
    </div>
    <CurrentChapter />
  </>
);

const Buttons = () => (
  <ul className="buttons">
    <li>
      <button type="button">Comments</button>
      {' '}
    </li>
    <li>
      <button type="button">Comments</button>
    </li>
    <li>
      <button type="button">Edit</button>
    </li>
  </ul>
);

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
