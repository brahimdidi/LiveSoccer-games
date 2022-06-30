import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AllGames from './components/AllGames';
import Competition from './components/Competition';
import Navbar from './components/Navbar';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<AllGames />} />
      <Route path="/Competition" element={<Competition />} />
    </Routes>
  </div>
);

export default App;
