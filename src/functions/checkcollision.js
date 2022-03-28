


import {changePosition, playerMoved, takeDamage} from "../actions"





export const Checkcollision = (newPosition, positions, damage, dispatch) => {
   
  
    if(newPosition.id === "player") {
       
        dispatch(playerMoved())
    }
   
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
    
    if (collision === true)
    {
    
       
            
        
    dispatch(takeDamage({amount: damage, id: targetId}))
        
    }else
    dispatch(changePosition(newPosition))
    
    
    
   
   

}

