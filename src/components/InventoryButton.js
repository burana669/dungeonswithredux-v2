import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeView } from "../actions";



export const InventoryButton = () => {
    const dispatch = useDispatch()
    const view = useSelector((state) => state.view.payload.inventory)

    if (view === false){
    return <button onClick={ () => dispatch(changeView({inventory: true, playArea: false}))}>INVENTORY</button>
    }
    else return <button onClick={ () => dispatch(changeView({inventory: false, playArea: true}))}>EXIT</button>
}