import { createSlice } from "@reduxjs/toolkit";


export const playAreaSlice = createSlice({
    name: "playArea",
    initialState: {payload: []},
    
    extraReducers: 
    (builder) => {
        builder.addCase("createPlayer", (state, action) =>{
            state.payload.push(action.payload)
        }
        )
        builder.addCase("changePosition", (state, action) => 
         {
             
          state.payload.map (element => {
            if (element.id === action.payload.id && 
                action.payload.positionX <= 4 &&
                action.payload.positionX >= 1 &&
                action.payload.positionY <= 4 &&
                action.payload.positionY >= 1 
              )
              {
              
            element.positionX = action.payload.positionX
            element.positionY = action.payload.positionY
              }
          })
        })
        builder.addCase("createMob", (state, action) => {
          state.payload.push(action.payload)
        })
        builder.addCase("takeDamage", (state, action) =>  {
          state.payload.map(element => {
            if(element.id === action.payload.id) {
              element.health -= action.payload.amount
    
              if (element.health <= 0) {
                element.name = "%"
              }
            }
          })
        })
    }
   
  
  })