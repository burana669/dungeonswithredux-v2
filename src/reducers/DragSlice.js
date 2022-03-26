import { createSlice } from "@reduxjs/toolkit";


export const DragSlice = createSlice({
    name: "dragging",
    initialState: {dragging: false, payload: {}},
    extraReducers: (builder) => {
        builder.addCase("startDrag", (state, action) => {
            state.dragging = true
            state.payload = action.payload
        })
        builder.addCase("clearDrag", (state, action) => {
            state.dragging = false
            state.payload = {}
        })
    }
})