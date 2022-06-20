import { createSlice } from "@reduxjs/toolkit";

export const InventorySlice = createSlice({
    name: "Inventory",
    initialState: {payload: []},
    extraReducers: (builder) => {
        
        builder.addCase("backBackItem", (state, action) => {
            state.payload.push(action.payload)
        })
        builder.addCase("removeInventoryItem", (state,action) => {
            state.payload = state.payload.filter((item) => item.id !== action.payload)
               
            
          
            
            
        })
    }
})