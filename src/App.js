import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/nav";
import Categories from "./components/Categories/Categories";
import Books from "./components/Homepage/Books";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <header>
        <Navigation />
      </header>
      <main>
        
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/Categories" element = {<Categories/>} />
          </Routes>
        
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
