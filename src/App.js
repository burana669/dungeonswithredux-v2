import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Creator } from './components/Creator';

import './App.css';

import {PlayArea} from "./components/PlayArea"
import { HandleKeyPress } from './components/HandleKeyPress';

function App() {
  
  return (
    <div className="App">
      
      <Creator></Creator>
      <PlayArea></PlayArea>
      <HandleKeyPress></HandleKeyPress>
      
    </div>
  );
}

export default App;
