import { createSlice } from "@reduxjs/toolkit";

export const EnemyAISlice = createSlice({
    name: "EnemyAI",
    initialState: {takeTurn: false},
    extraReducers: (builder) => {
        builder.addCase("AITakeTurn", (state, action) => {
            state.takeTurn = true
        })
        builder.addCase("AITurnDone", (state, action) => {
            state.takeTurn = false
        })
    }
})