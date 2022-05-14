import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Nav from './components/header/Nav';
import Books from './components/books/Books';
import Categories from './components/Categories/Categories';
import Store from './redux/configureStore';

const App = () => (
  <Provider store={Store}>
    <Router>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </Router>
  </Provider>
);

export default App;
