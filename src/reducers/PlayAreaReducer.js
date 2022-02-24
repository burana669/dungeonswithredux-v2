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

        return {
          ...positions,
          [id]: {...positions[id], 
          positionX: action.payload.positionX, 
          positionY:action.payload.positionY}
        }
          
        
        
        return newposition3;
      default:
        return positions;
    }
  };