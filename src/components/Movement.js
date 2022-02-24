import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {rePosition} from "../actions"

const Movement = (XY, value, id) => {

    const dispatch = useDispatch() 
    const target = useSelector((state) => state.PlayerReducer)
    console.log(target)

    updatetarget(target, XY, value)
    
    dispatch(rePosition(target.positionX, target.positionY, id))

    return <React.Fragment></React.Fragment>
}

const updatetarget = (target, XY, value) => {

    if (XY === "X") { 
        target.positionX += value
    } 
    else if (XY === "Y") {  
        target.positionY += value
    }
    return target
}

export default Movement



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