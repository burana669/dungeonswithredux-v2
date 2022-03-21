import React from "react";
import { useSelector } from "react-redux";

export const PlayerStats = () => {

   const stats = useSelector((state) => state.player.payload)
    return ( 
    <div>
        <div>Health: {stats.health} / {stats.health}</div>

    </div>
    )
}