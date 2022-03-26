import React from "react";
import { useSelector } from "react-redux";

export const PlayerStats = () => {

   const stats = useSelector((state) => state.player.payload)
   const equipment = useSelector((state) => state.equipment)
  
    return ( 
    <div>
        <div>Health: {stats.health} / {stats.health}</div>
        <div>Damage: {stats.damage + equipment.weapon.payload.damage}</div>
        <div>Armor: {equipment.head.payload.armor + equipment.loincloth.payload.armor}</div>

    </div>
    )
}