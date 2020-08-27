import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import BuisnessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
  <h1>ravenous</h1>
  <SearchBar />
  <BuisnessList />
</div>
  );
}

export default App;
