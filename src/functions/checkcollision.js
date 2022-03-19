import {changePosition, takeDamage} from "../actions"



export const checkcollision = (newPosition, dispatch, positions, damage) => {
    
   let collision = false
   let targetType = ""
   let targetId = ""
    positions.map(element => {
        
        if (element.positionX === newPosition.positionX && element.positionY === newPosition.positionY) {
            collision = true
            targetType = element.type
            targetId = element.id
        }

    })
    if (collision === false){
    
    dispatch(changePosition(newPosition))
    }
    else if (collision === true, targetType = "enemy")
    
    dispatch(takeDamage({amount: damage, id: targetId}))
    
    
    
}