import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { Checkcollision } from "../functions/Checkcollision";


export const HandleKeyPress = () => {

  const dispatch = useDispatch()
     
  const target = useSelector((state) => state.player.payload)
  const positions = useSelector((state) => state.positions.payload)
  const weaponDamage = useSelector((state) => state.equipment.weapon.payload.damage)
  const enemies = useSelector((state) => state.enemies.payload)
  
  const damage = target.damage + weaponDamage
  
  useEffect(() => {

   
  
    const handleKey = (e) => {
     
      if (e.key === "ArrowRight") {
        e.preventDefault();
        
       const newPosition =  {positionX: target.positionX+1, 
        positionY: target.positionY,
         id: target.id}
       Checkcollision(newPosition, positions, damage, dispatch);
       
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        const newPosition = {positionX: target.positionX -1, 
          positionY: target.positionY, 
          id: target.id}
        Checkcollision(newPosition, positions, damage, dispatch);
        
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const newPosition = {positionX: target.positionX,
           positionY: target.positionY + 1,
            id: target.id}
        Checkcollision(newPosition, positions, damage, dispatch);
        
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        const newPosition = {positionX: target.positionX,
          positionY: target.positionY - 1,
           id: target.id}
        Checkcollision(newPosition, positions, damage, dispatch);
        
      }
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  });

  return <React.Fragment></React.Fragment>;
};

