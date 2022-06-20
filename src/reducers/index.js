


import { configureStore } from '@reduxjs/toolkit';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';


import { playAreaSlice } from './PlayAreaSlice';
import { playerSlice } from './PlayerSlice';
import { EnemiesSlice } from './EnemiesSlice';
import { ViewSlice } from './ViewSlice';
import { InventorySlice } from './InventorySlice';
import { DragSlice } from './DragSlice';
import { EquipmentSlice } from './EquipmentSlice';
import { AITakeTurn, changePosition, playerMoved } from '../actions';
import { EnemyAISlice } from './EnemyAiSlice';

const listener = createListenerMiddleware()


export const store = configureStore({
    reducer: {
     player: playerSlice.reducer,
     positions:  playAreaSlice.reducer,
     enemies: EnemiesSlice.reducer,
     view: ViewSlice.reducer,
     inventory: InventorySlice.reducer,
     equipment: EquipmentSlice.reducer,
     drag: DragSlice.reducer,
     EnemyAI: EnemyAISlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listener.middleware),
});




listener.startListening({
    actionCreator: playerMoved,
    effect: async (action, listenerApi) => {
        

        if (await listenerApi.condition(playerMoved)){
           console.log("Playermoved2")
            listenerApi.dispatch(AITakeTurn())
        }
    }
})

export default store

