import React from 'react';
import Books from './Books';
import './styles/home.css';
import AddBookForm from './Addbook';

const HomePage = () => (
  <div className="container">
    <header>
      <ul className="links">
        <li>
          <h1> Bookstore CMS</h1>
        </li>
        <li>BOOKS</li>
        <li>CATEGORIES</li>
      </ul>
    </header>
    <main className='books-wrapper'>
      <Books />
    </main>
    <AddBookForm />
  </div>
);

export default HomePage;
