

import { Checkcollision } from "../functions/checkcollision"
import { useSelector, useDispatch } from "react-redux"
import { AITurnDone } from "../actions"
import React from "react"
import { useEffect } from "react"

export const EnemyAi = () => {
    
    const dispatch = useDispatch()
    const trigger = useSelector((state) => state.EnemyAI.takeTurn)
    const player = useSelector((state) => state.player.payload)
    const enemies = useSelector((state) => state.enemies.payload)
    const positions = useSelector((state) => state.positions.payload)
    
    useEffect(() => {
        
        if (trigger === true) {
            
        
            enemies.map(element => {
                const deltaX =  ((player.positionX - element.positionX) < 0) ? -1
                                :((player.positionX - element.positionX) > 0) ? +1
                                : 0
                const deltaY =  ((player.positionY - element.positionY) < 0) ? -1
                                :((player.positionY - element.positionY) > 0) ? +1
                                : 0
                
                                console.log(deltaY, "delta Y")
                
                const newPosition = {
                    positionX: element.positionX + deltaX,
                    positionY: element.positionY + deltaY,
                    id: element.id
                }
                
                console.log("positionX: " +element.positionX + " PositionY: " + element.positionY)
                console.log(newPosition)
                
                Checkcollision(newPosition, positions, element.damage, dispatch)
                dispatch(AITurnDone())
    
            })
            console.log("turn")
        }

    }, [trigger])
    return <React.Fragment></React.Fragment>

}