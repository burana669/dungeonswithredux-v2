export const PlayerReducer = (stats = [], action) => {
    switch (action.type) {
      case "CREATE_PLAYER":
        const newStats = {
          name: action.payload.name,
          health: action.payload.health,
          damage: action.payload.damage,
          positionX: action.payload.positionX,
          positionY: action.payload.positionY,
        };
        return newStats;
      
        case "CHANGE_POSITION":
          if (
            action.payload.id === "player" &&
            action.payload.newPositionX <= 3 &&
            action.payload.newPositionX >= 1
          ) {

          return {
            ...stats, 
            positionX: action.payload.positionX, 
            positionY:action.payload.positionY
          }
        }
         else return stats;
      default:
        return stats;
    }
  };