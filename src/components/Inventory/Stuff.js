import React from "react";
import { useSelector } from "react-redux";

import { InventoryItem } from "./InventoryItem";

export const Stuff = () => {

    const inventoryItems = useSelector((state) => state.inventory.payload)
    const equipment = useSelector((state) => state.equipment)

    
    
    let renderlist = inventoryItems.map( (element) => {
        return InventoryItem(element, equipment)
    })

    
    return (
    <div className = "stuff">
    <div>STUFF</div>
    <div>{renderlist}</div>
    </div>
    )
}