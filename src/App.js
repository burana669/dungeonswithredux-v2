import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Creator } from './components/Creator';
import { PlayerStats } from './components/PlayerStats';
import { EnemeyList } from './components/EnemyList';
import { InventoryButton } from './components/InventoryButton';

import './App.css';

import {PlayArea} from "./components/PlayArea"
import { HandleKeyPress } from './components/HandleKeyPress';

function App() {
  
  return (
    <div className="App">
      
      <Creator></Creator>
      <PlayArea></PlayArea>
      <PlayerStats></PlayerStats>
      <EnemeyList></EnemeyList>
      <InventoryButton></InventoryButton>


      <HandleKeyPress></HandleKeyPress>
      
    </div>
  );
}

export default App;
