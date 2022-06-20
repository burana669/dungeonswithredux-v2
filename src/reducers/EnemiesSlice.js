import { createSlice } from "@reduxjs/toolkit"

export const EnemiesSlice = createSlice({
  name: "enemylist",
  initialState: {payload: []},
  extraReducers: (builder) => {
    builder.addCase("createMob", (state, action) => {
      let collision = false
          
      state.payload.map((element) => {
        if((element.positionX === action.payload.positionX && 
          element.positionY === action.payload.positionY) ||
          (action.payload.positionX === 2 && action.payload.positionY === 1))
          //second check for static player spawn position
          collision = true
      })
      if (collision===false){
      state.payload.push(action.payload)
      }else
      console.log("spawn cancelled because collision")
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
     
  
