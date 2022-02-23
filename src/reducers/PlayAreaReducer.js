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
  
      case "CHANGE_POSITIONX":
        const newposition3 = positions.map((element) => {
          if (
            element.id === action.payload.id &&
            action.payload.newPositionX <= 4 &&
            action.payload.newPositionX >= 1
          ) {
            element.positionX = action.payload.newPositionX;
            return element;
          } else return element;
        });
        return newposition3;
  
      case "CHANGE_POSITIONY":
        const newposition4 = positions.map((element) => {
          if (
            element.id === action.payload.id &&
            action.payload.newPositionY <= 4 &&
            action.payload.newPositionY >= 1
          ) {
            element.positionY = action.payload.newPositionY;
            return element;
          } else return element;
        });
        return newposition4;
      default:
        return positions;
    }
  };