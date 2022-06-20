import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { Checkcollision } from "../functions/checkcollision";


export const HandleKeyPress = () => {

  const dispatch = useDispatch()
     
  const target = useSelector((state) => state.player.payload)
  const positions = useSelector((state) => state.positions.payload)
  const weaponDamage = useSelector((state) => state.equipment.weapon.payload.damage)
  const enemies = useSelector((state) => state.enemies.payload)
  
  const damage = target.damage + weaponDamage
  
  useEffect(() => {

   
  
    const handleKey = (e) => {
      console.log(e.key)
     
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
        
      } else if (e.key === "7") {
        e.preventDefault();
        const newPosition = {positionX: target.positionX -1,
          positionY: target.positionY + 1,
           id: target.id}
        Checkcollision(newPosition, positions, damage, dispatch);
        
      } else if (e.key === "8") {
        e.preventDefault();
        const newPosition = {positionX: target.positionX,
          positionY: target.positionY + 1,
           id: target.id}
        Checkcollision(newPosition, positions, damage, dispatch);
        
      } else if (e.key === "9") {
        e.preventDefault();
        const newPosition = {positionX: target.positionX + 1,
          positionY: target.positionY + 1,
           id: target.id}
        Checkcollision(newPosition, positions, damage, dispatch);
        
      } else if (e.key === "4") {
        e.preventDefault();
        const newPosition = {positionX: target.positionX - 1,
          positionY: target.positionY,
           id: target.id}
        Checkcollision(newPosition, positions, damage, dispatch);
        
      } else if (e.key === "5") {
        e.preventDefault();
        const newPosition = {
           id: target.id,
          pass: true}
        Checkcollision(newPosition, positions, damage, dispatch);
        
      } else if (e.key === "6") {
        e.preventDefault();
        const newPosition = {positionX: target.positionX + 1,
          positionY: target.positionY,
           id: target.id}
        Checkcollision(newPosition, positions, damage, dispatch);
        
      } else if (e.key === "1") {
        e.preventDefault();
        const newPosition = {positionX: target.positionX - 1,
          positionY: target.positionY - 1,
           id: target.id}
        Checkcollision(newPosition, positions, damage, dispatch);
        
      } else if (e.key === "2") {
        e.preventDefault();
        const newPosition = {positionX: target.positionX,
          positionY: target.positionY - 1,
           id: target.id}
        Checkcollision(newPosition, positions, damage, dispatch);
        
      } else if (e.key === "3") {
        e.preventDefault();
        const newPosition = {positionX: target.positionX +1,
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

