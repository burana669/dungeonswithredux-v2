import React, { useEffect } from "react";
import  Movement  from "./Movement";

export const HandleKeyPress = () => {

  
  useEffect(() => {

   
  
    const handleKey = (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
       Movement("X", 1, "player");
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        Movement("X", -1, "player");
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        Movement("Y", -1, "player");
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        Movement("Y", + 1, "player");
      }
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  });

  return <React.Fragment></React.Fragment>;
};

