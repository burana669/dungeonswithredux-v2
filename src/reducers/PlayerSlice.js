

import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
    name: "playerInfo",
    initialState: {payload: []},
    extraReducers: (builder) => {
      builder.addCase("createPlayer", (state, action) => {
         
         state.payload=action.payload
      })
      builder.addCase("changePosition", (state, action) =>  {

       
        if (
              
          action.payload.id === "player" &&
          action.payload.positionX <= 4 &&
          action.payload.positionX >= 1 &&
          action.payload.positionY <= 4 &&
          action.payload.positionY >= 1
        ) {
         
           
          state.payload.positionX = action.payload.positionX
          state.payload.positionY = action.payload.positionY
         
        } })
      }
    
    
  })
  