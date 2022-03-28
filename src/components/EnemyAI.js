

import { Checkcollision } from "../functions/Checkcollision"
import { useSelector, useDispatch } from "react-redux"
import { AITurnDone } from "../actions"
import React from "react"

export const EnemyAi = () => {
    
    const dispatch = useDispatch()
    const trigger = useSelector((state) => state.EnemyAI.takeTurn)
    const player = useSelector((state) => state.player.payload)
    const enemies = useSelector((state) => state.enemies.payload)
    const positions = useSelector((state) => state.positions.payload)
    
  
        if (trigger === true) {
            console.log("trigger")
        
        enemies.map(element => {
            const deltaX =  ((player.positionX - element.positionX) < 0) ? -1
                            :((player.positionX - element.positionX) > 0) ? +1
                            : 0
            const deltaY =  ((player.positionY - element.positionY) < 0) ? -1
                            :((player.positionY - element.positionY) > 0) ? +1
                            : 0
            
            
            const newPosition = {
                positionX: element.positionX + deltaX,
                positionY: element.positionY + deltaY,
                id: element.id
            }
            
            Checkcollision(newPosition, positions, element.damage, dispatch)
            dispatch(AITurnDone())

        })
    }
    return <React.Fragment></React.Fragment>

}