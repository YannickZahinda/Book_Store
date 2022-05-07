const Books = () => {
  const Book = [
    {
      id: 1,
      title: "Marianna",
      author: "Entre etre ou ne pas etre, je suis",
    },
    {
      id: 2,
      title: "Moi, Tituba, Sorciere",
      author: "Christianna Forbes",
    },
    {
      id: 3,
      title: "Reveilles-moi",
      author: "Rayley Giynes",
    },
  ];
  return (
    <ul>
      {Book.map((book) => (
        <li key={book.id} className="book">
          <div>
            {" "}
            <span className="title">{book.title} </span> <br /> {book.author}
            <Buttons />
          </div>
          <div>
            <div className="statistics"></div>
            {/* <span className="percentage">100%</span> */}
            100%
          </div>
          <CurrentChapter />
        </li>
      ))}
    </ul>
  );
};

const Buttons = () => (
  <ul className="buttons">
    <li>
      <button>Comments</button>{" "}
    </li>
    <li>
      <button>Comments</button>
    </li>
    <li>
      <button>Edit</button>
    </li>
  </ul>
);

const CurrentChapter = () => (
  <div className="current_chapter">
    <h3>CURRENT CHAPTER</h3>
    <p>Chapter 17</p>
    <button className="update-btn">UPDATE PROGRESS</button>
  </div>
);

export default Books;
