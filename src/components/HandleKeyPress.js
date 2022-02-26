import React, { useEffect } from "react";
import  {movement}  from "./movement";
import {useDispatch, useSelector} from "react-redux"

export const HandleKeyPress = () => {

  const dispatch = useDispatch()
     
  const target = useSelector((state) => state.PlayerReducer)
  

  
  useEffect(() => {

   
  
    const handleKey = (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
       dispatch(movement("X", 1, target));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        dispatch(movement("X", -1, target));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        dispatch(movement("Y", -1, target));
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        dispatch(movement("Y", + 1, target));
      }
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  });

  return <React.Fragment></React.Fragment>;
};

