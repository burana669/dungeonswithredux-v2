import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import {changePosition} from "../actions"

export const HandleKeyPress = () => {

  const dispatch = useDispatch()
     
  const target = useSelector((state) => state.player.payload)
  
  
  
  useEffect(() => {

   
  
    const handleKey = (e) => {
     
      if (e.key === "ArrowRight") {
        e.preventDefault();
       dispatch(changePosition({positionX: target.positionX+1, positionY: target.positionY, id: target.id}));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        dispatch(changePosition({positionX: target.positionX -1, positionY: target.positionY, id: target.id}));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        dispatch(changePosition({positionX: target.positionX, positionY: target.positionY + 1, id: target.id}));
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        dispatch(changePosition({positionX: target.positionX, positionY: target.positionY - 1, id: target.id}));
      }
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  });

  return <React.Fragment></React.Fragment>;
};

