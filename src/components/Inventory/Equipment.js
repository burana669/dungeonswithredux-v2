import React from "react";
import { useSelector } from "react-redux";
import "./index.css"

import { EquipmentItem } from "./EquipmentItem";


export const Equipmentscreen = () => {
    const equipment = useSelector((state) => state.equipment)
    
    

    return (
        <div className= "equipment">
        <div>EQUIPMENT</div>
        <div className="Head" draggable = "true">{EquipmentItem(equipment.head.payload)}</div>
        <div className="Weapon">{EquipmentItem(equipment.weapon.payload)}</div>
        <div className="Loincloth">{EquipmentItem(equipment.loincloth.payload)}</div>
        </div>
        )
}