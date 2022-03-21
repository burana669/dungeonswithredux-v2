import { createSlice } from "@reduxjs/toolkit";

export const ViewSlice = createSlice({
    name: "View",
    initialState: {payload: {playArea: true, inventory: false}},
    extraReducers: (builder) => {
        builder.addCase("changeView", (state, action) => {
            state.payload=action.payload
        })
    }

})