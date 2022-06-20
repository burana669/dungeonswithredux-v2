


import {changePosition, playerMoved, takeDamage} from "../actions"





export const Checkcollision = (newPosition, positions, damage, dispatch) => {
   
  
    
   let collision = false
   let target = {}
    positions.map(element => {
        
        if ((element.positionX === newPosition.positionX && element.positionY === newPosition.positionY) && 
        (element.type !== "item" || element.type !== "hole")
        ) {
            collision = true
            target = element
        }

    })

       
    

if(!newPosition.pass) {  
   
    
    if (collision === true)
    {
    
       console.log("collision")
       console.log(target)
        if (target.type === "player") {
        console.log("playerdamage", target.id, damage)
        dispatch(takeDamage({amount: damage, id: target.id}))
        }else if (newPosition.id === "player" && target.type === "enemy") {
        dispatch(takeDamage({amount: damage, id: target.id}))
        }
        
        
    }else {
        console.log("dispatch")
        dispatch(changePosition(newPosition))

    }
    

        
 
    
}    
if(newPosition.id === "player") {
    console.log("PLAYERMOVeD")
    dispatch(playerMoved())
}
}

    
   
   



