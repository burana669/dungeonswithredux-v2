import React from "react";
import { Stuff } from "./Stuff";
import { Equipmentscreen } from "./Equipment";
import "./index.css"

import { useSelector } from "react-redux";


export const InventoryScreen = () => {
    const view = useSelector((state) => state.view.payload.inventory)
    
    
    if (view){
   
    return (
    <div className="inventory-container">
        <Equipmentscreen></Equipmentscreen>
        <Stuff></Stuff>
    </div>
    )
    }
    else return <React.Fragment></React.Fragment>
}