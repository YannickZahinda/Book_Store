import { Link } from 'react-router-dom';

const Navigation = () => (
  <ul className="links">
    <li>
      <h1> Bookstore CMS</h1>
    </li>
    <li>
      {' '}
      <Link to="/">
        BOOKS
      </Link>
      {' '}
    </li>
    <li>
      <Link to="/Categories">
        Categories
      </Link>
    </li>
  </ul>
);

export default Navigation;
