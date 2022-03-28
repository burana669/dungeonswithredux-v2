import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Creator } from './components/Creator';
import { PlayerStats } from './components/PlayerStats';
import { EnemeyList } from './components/EnemyList';
import { InventoryButton } from './components/InventoryButton';
import { InventoryScreen } from './components/Inventory/Index';

import './App.css';

import {PlayArea} from "./components/PlayArea"
import { HandleKeyPress } from './components/HandleKeyPress';

import { useDispatch } from 'react-redux';
import { EnemyAi } from './components/EnemyAI';

export function App() {
  
  return (
    <div className="App">
      
      <Creator></Creator>
      <EnemyAi></EnemyAi>
      <PlayArea></PlayArea>
      <InventoryScreen></InventoryScreen>
      <PlayerStats></PlayerStats>
      <EnemeyList></EnemeyList>
      
      <InventoryButton></InventoryButton>


      <HandleKeyPress></HandleKeyPress>
      
    </div>
  );
}

export const dispatch = useDispatch
