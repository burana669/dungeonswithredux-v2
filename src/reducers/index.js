


import { configureStore } from '@reduxjs/toolkit';

import { playAreaSlice } from './PlayAreaSlice';
import { playerSlice } from './PlayerSlice';
import { EnemiesSlice } from './EnemiesSlice';
import { ViewSlice } from './ViewSlice';

export const store = configureStore({
    reducer: {
     player: playerSlice.reducer,
     positions:  playAreaSlice.reducer,
     enemies: EnemiesSlice.reducer,
     View: ViewSlice.reducer,
    }
});

export default store

