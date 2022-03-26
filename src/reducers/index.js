


import { configureStore } from '@reduxjs/toolkit';

import { playAreaSlice } from './PlayAreaSlice';
import { playerSlice } from './PlayerSlice';
import { EnemiesSlice } from './EnemiesSlice';
import { ViewSlice } from './ViewSlice';
import { InventorySlice } from './InventorySlice';
import { DragSlice } from './DragSlice';
import { EquipmentSlice } from './EquipmentSlice';

export const store = configureStore({
    reducer: {
     player: playerSlice.reducer,
     positions:  playAreaSlice.reducer,
     enemies: EnemiesSlice.reducer,
     view: ViewSlice.reducer,
     inventory: InventorySlice.reducer,
     equipment: EquipmentSlice.reducer,
     drag: DragSlice.reducer
    }
});

export default store

