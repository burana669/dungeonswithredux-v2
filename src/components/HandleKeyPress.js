import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rePositionX, rePositionY } from "../actions";

export const HandleKeyPress = () => {

  const dispatch = useDispatch()

  const positionX = useSelector((state) => state.PlayerReducer.positionX)
  const positionY = useSelector((state) => state.PlayerReducer.positionY)
  useEffect(() => {

   
  
    const handleKey = (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        dispatch(rePositionX(positionX + 1, "player"));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        dispatch(rePositionX(positionX - 1, "player"));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        dispatch(rePositionY(positionY - 1, "player"));
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        dispatch(rePositionY(positionY + 1, "player"));
      }
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  });

  return <React.Fragment></React.Fragment>;
};

