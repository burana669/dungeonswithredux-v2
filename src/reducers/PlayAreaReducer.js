import produce from "immer";

export const PlayAreaReducer = (positions = [], action) => {
    switch (action.type) {
      case "CREATE_MOB":
        const newposition = {
          name: action.payload.name,
          id: action.payload.id,
          positionX: action.payload.positionX,
          positionY: action.payload.positionY,
        };
        return [...positions, newposition];
      case "CREATE_PLAYER":
        const newposition2 = {
          name: action.payload.name,
          id: action.payload.id,
          positionX: action.payload.positionX,
          positionY: action.payload.positionY,
        };
        return [...positions, newposition2];
  
      case "CHANGE_POSITION":
        
        let nextState = produce((positions, draftState) => {
          draftState.map(element => {
            if (element.id === action.payload.id) {
              element.positionX = action.payload.positionX
              element.positionY = action.payload.positionY

              return element
            }
              else return element
          
        
          
          })
        })
        
        return nextState
          
          
       

          
        
        
       
      default:
        return positions;
    }
  };