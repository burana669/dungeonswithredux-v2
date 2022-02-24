import React from "react"
import { useSelector, useDispatch } from "react-redux"

export const checkcollision = (newpositionX, newpositionY, positions) => {
    
    let collision = false
    positions.map((element) => {
        if (element.positionY === newpositionY && element.positionX === newpositionX){
            collision = true
        }

    })
    if (collision === false)
    return false
    else
    return true
}