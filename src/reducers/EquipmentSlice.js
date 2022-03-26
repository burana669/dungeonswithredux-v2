import { createSlice } from "@reduxjs/toolkit";

export const EquipmentSlice = createSlice({
    name: "equipment",
    initialState: {
        head: {occupied: false , payload: { name: "HEAD" , armor: 0}}, 
        weapon: {occupied: false, payload: { name: "WEAPON", damage: 0}}, 
        loincloth: {occupied: false, payload: { name: "LOINCLOTH", armor: 0}}
    }
        ,
    extraReducers: (builder) => {
        builder.addCase("equip", (state, action) => {
            if (action.payload.type === "head"){
                state.head.payload = action.payload
                state.head.occupied = true
            }
            else if (action.payload.type === "weapon"){
                state.weapon.payload = action.payload
                state.weapon.occupied = true
            }
            else if (action.payload.type === "loincloth") {
                state.loincloth.payload = action.payload
                state.loincloth.occupied = true
            }
            else console.error("no valid action type");
        })
        builder.addCase("removeEquipment", (state, action) => {
            if (action.payload.type === "head"){
                state.head.payload = { name: "HEAD", armor: 0 }
                state.head.occupied = false
            }
            else if (action.payload.type === "weapon"){
                state.weapon.payload = { name: "WEAPON", damage: 0}
                state.weapon.occupied = false
            }
            else if (action.payload.type === "loincloth") {
                state.loincloth.payload = { name: "LOINCLOTH", armor: 0}
                state.loincloth.occupied = false
            }
            else console.error("no valid action type");
        })
    }
})