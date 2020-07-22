import React from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <Display/>
    </div>
  );
}

export default App;


//When there's a capital letter after the function keyword, react knows it's going to render what's in the return.
