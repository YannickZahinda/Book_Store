import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => (
  <header className="header flex">
    <div className="header-title">
      <h1>Bookstore CMS</h1>
    </div>
    <nav className="nav">
      <ul className="nav nav--main">
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>

      <div className="user">
        <i className="ri-user-3-fill ri-xl" />
      </div>
    </nav>
  </header>
);

export default Nav;
