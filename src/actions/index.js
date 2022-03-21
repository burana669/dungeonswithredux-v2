import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";



export const createMob = createAction("createMob",
function prepare(props) {
  const { name, health, damage, positionX, positionY } = props;
  return {
    type: "CREATE_MOB",
    payload: {
      type: "enemy",
      id: uuidv4(),
      name,
      health,
      damage,
      positionX,
      positionY,
    },
  };
})

export const changePosition = createAction("changePosition",
function prepare(props){

  return {
    payload: {
    positionX: props.positionX,
    positionY: props.positionY,
    id: props.id 
    }
  }
})

export const takeDamage = createAction("takeDamage",
function prepare(props){

  return {
    payload: {
    amount: props.amount,
    id: props.id 
    }
  }
})

export const changeView = createAction("changeView", 
function prepare(props){
  
  return {
    payload: {
    inventory: props.inventory,
    playArea: props.playArea
    }
  }
})

export const createPlayer = createAction("createPlayer", 
function prepare(props){
 
  return {
    payload: {
      type: "player",
      id: "player",
      name: props.name,
      health: props.health,
      damage: props.damage,
      positionX: props.positionX,
      positionY: props.positionY,
    }
  }

  
})

/* export const startDrag = (event) => {
  console.log("ACTION: Start dragging");
  return {
    type: "START_DRAG_ITEM",
    paylod: event,
  };
};

export const drag = (event) => {
  console.log("ACTION: Continue dragging");
  return {
    type: "DRAG_ITEM",
    paylod: event,
  };
};

export const drop = (event) => {
  console.log("ACTION: Drop item");
  return {
    type: "DROP_DRAG_ITEM",
    paylod: event,
  };
};
 */

/* export const createItem = (item) => {
  const { name, bonus, type } = item;
  return {
    type: "ADD_ITEM",
    payload: {
      id: uuidv4(),
      name,
      bonus,
      type,
    },
  };
};

export const equipItem = (item) => {
  const { name, bonus, type, id } = item;
  return {
    type: "EQUIP_ITEM",
    payload: {
      id,
      name,
      bonus,
      type,
    },
  };
}; */