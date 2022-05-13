import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './redux/configureStore';
import './App.css';

import Navigation from './components/Navigation/nav';
import Categories from './components/Categories/Categories';
import Books from './components/Homepage/Books';

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <BrowserRouter>
          <header>
            <Navigation />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Books />} />
              <Route path="/Categories" element={<Categories />} />
            </Routes>
          </main>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
