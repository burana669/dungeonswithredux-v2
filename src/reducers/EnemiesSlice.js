import { createSlice } from "@reduxjs/toolkit"

export const EnemiesSlice = createSlice({
  name: "enemylist",
  initialState: {payload: []},
  extraReducers: (builder) => {
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
     
  
