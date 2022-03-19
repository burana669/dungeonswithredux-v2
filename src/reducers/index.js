


import { configureStore } from '@reduxjs/toolkit';

import { playAreaSlice } from './PlayAreaSlice';
import { playerSlice } from './PlayerSlice';
import { EnemiesSlice } from './EnemiesSlice';

export const store = configureStore({
    reducer: {
     player: playerSlice.reducer,
     positions:  playAreaSlice.reducer,
     enemies: EnemiesSlice.reducer
    }
});

export default store

