


import { configureStore } from '@reduxjs/toolkit';

import { playAreaSlice } from './PlayAreaSlice';
import { playerSlice } from './PlayerSlice';

export const store = configureStore({
    reducer: {
     player: playerSlice.reducer,
     positions:  playAreaSlice.reducer
    }
});

export default store

