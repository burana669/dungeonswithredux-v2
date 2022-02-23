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
      case "CHANGE_POSITIONX":
        if (
          action.payload.id === "player" &&
          action.payload.newPositionX <= 3 &&
          action.payload.newPositionX >= 1
        ) {
          const newStats2 = stats;
  
          newStats2.positionX = action.payload.newPositionX;
  
          return newStats2;
        } else return stats;
      case "CHANGE_POSITIONY":
        if (
          action.payload.id === "player" &&
          action.payload.newPositionY <= 3 &&
          action.payload.newPositionY >= 1
        ) {
          const newStats3 = stats;
  
          newStats3.positionY = action.payload.newPositionY;
  
          return newStats3;
        } else return stats;
      default:
        return stats;
    }
  };