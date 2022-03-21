import React from "react";
import { useSelector } from "react-redux";

export const EnemeyList = () => {

   const enemies = useSelector((state) => state.enemies.payload)
   const list =  enemies.map(element => {
       return <div key = {element.id}>{element.name} {element.health} / {element.health}</div>
   })
   
   
   return ( 
    <div>
        <div>{list}</div>

    </div>
    )
}