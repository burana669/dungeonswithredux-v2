import React from "react";
import {rePosition} from "../actions"

export const movement = (XY, value, target) => {

        if (XY === "X") { 
            target.positionX += value
        } 
        else if (XY === "Y") {  
            target.positionY += value
        }
        return rePosition(target.id, target.positionX, target.positionY )
    }

   







/* positions.map((element) => {
    if (
      element.id === action.payload.id &&
      action.payload.newPositionX <= 4 &&
      action.payload.newPositionX >= 1
    ) {
      element.positionX = action.payload.newPositionX;
      return element;
    } else return element;
  }); */