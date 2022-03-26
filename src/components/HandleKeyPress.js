import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { checkcollision } from "../functions/checkcollision";

export const HandleKeyPress = () => {

  const dispatch = useDispatch()
     
  const target = useSelector((state) => state.player.payload)
  const positions = useSelector((state) => state.positions.payload)
  const weaponDamage = useSelector((state) => state.equipment.weapon.payload.damage)
  
  const damage = target.damage + weaponDamage
  
  useEffect(() => {

   
  
    const handleKey = (e) => {
     
      if (e.key === "ArrowRight") {
        e.preventDefault();
        
       const newPosition =  {positionX: target.positionX+1, 
        positionY: target.positionY,
         id: target.id}
       checkcollision(newPosition, dispatch, positions, damage);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        const newPosition = {positionX: target.positionX -1, 
          positionY: target.positionY, 
          id: target.id}
        checkcollision(newPosition, dispatch, positions, damage);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const newPosition = {positionX: target.positionX,
           positionY: target.positionY + 1,
            id: target.id}
        checkcollision(newPosition, dispatch, positions, damage);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        const newPosition = {positionX: target.positionX,
          positionY: target.positionY - 1,
           id: target.id}
        checkcollision(newPosition, dispatch, positions, damage);
      }
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  });

  return <React.Fragment></React.Fragment>;
};

